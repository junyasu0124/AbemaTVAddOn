const defaultRates = [1.0, 1.3, 1.5, 1.7, 2.0];

const tabs = document.getElementById('tabs');

tabs.addEventListener('click', event => {
  const tab = event.target.closest('.tab');
  if (!tab) return;

  const selectedTab = tab.dataset.tab;
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t === tab);
  });
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === selectedTab);
  });
  chrome.storage.local.set({ activeTab: selectedTab });
});

const ngWordList = document.getElementById('ngWordList');
const ngWordTemplate = document.getElementById('ngWordTemplate');
const addNgWordButton = document.getElementById('addNgWord');
const saveNgWordListButton = document.getElementById('saveNgWordList');
const hiddenMessageModeRadios = document.querySelectorAll('input[name="hiddenMessageMode"]');
const userIdInlineDisplayCheckbox = document.getElementById('userIdInlineDisplay');

function createNgWordItem(value = '', isRegex = false) {
  const clone = ngWordTemplate.content.cloneNode(true);
  const item = clone.querySelector('.item');
  const input = clone.querySelector('.input');
  const regexToggle = clone.querySelector('.regexToggle');
  const deleteButton = clone.querySelector('.deleteButton');

  input.value = value;
  if (isRegex)
    item.classList.add('regex');
  input.addEventListener('input', () => {
    if (item.classList.contains('regex')) {
      try {
        new RegExp(input.value, 'v');
        input.classList.remove('invalid');
      } catch {
        input.classList.add('invalid');
      }
    }
    saveNgWordListButton.disabled = false;
  });
  regexToggle.addEventListener('click', () => {
    item.classList.toggle('regex');
    if (item.classList.contains('regex')) {
      try {
        new RegExp(input.value, 'v');
        input.classList.remove('invalid');
      } catch {
        input.classList.add('invalid');
      }
    } else {
      input.classList.remove('invalid');
    }
    saveNgWordListButton.disabled = false;
  });
  deleteButton.addEventListener('click', () => {
    item.remove();
    saveNgWordListButton.disabled = false;
  });

  return item;
}
function loadNgWords() {
  chrome.storage.local.get('ngWords', data => {
    const ngWords = data.ngWords;
    if (ngWords !== undefined && ngWords.text !== undefined && ngWords.regex !== undefined) {
      ngWordList.innerHTML = '';
      ngWords.text.forEach(word => {
        const ngWordItem = createNgWordItem(word, false);
        ngWordList.appendChild(ngWordItem);
      });
      ngWords.regex.forEach(word => {
        const ngWordItem = createNgWordItem(word, true);
        ngWordList.appendChild(ngWordItem);
      });
      const mode = data.ngWords.hiddenMessageMode ?? 'hide';
      hiddenMessageModeRadios.forEach(radio => {
        radio.checked = radio.value === mode;
      });
    }
  });
}
function saveNgWords() {
  const ngWords = {
    text: [],
    regex: []
  };
  ngWordList.querySelectorAll('.item').forEach(item => {
    const input = item.querySelector('.input');
    if (input.value !== '' && !input.classList.contains('invalid')) {
      if (item.classList.contains('regex'))
        ngWords.regex.push(input.value);
      else
        ngWords.text.push(input.value);
    }
  });
  const selectedMode = Array.from(hiddenMessageModeRadios).find(radio => radio.checked);
  ngWords.hiddenMessageMode = selectedMode ? selectedMode.value : 'hide';
  chrome.storage.local.set({ ngWords: ngWords });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, 'NG_WORDS_UPDATED');
  });
  saveNgWordListButton.disabled = true;
}

addNgWordButton.addEventListener('click', () => {
  const ngWordItem = createNgWordItem();
  ngWordList.appendChild(ngWordItem);
  saveNgWordListButton.disabled = false;
  ngWordItem.querySelector('.input').focus();
});
saveNgWordListButton.addEventListener('click', () => {
  saveNgWords();
});
hiddenMessageModeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedMode = Array.from(hiddenMessageModeRadios).find(item => item.checked);
    chrome.storage.local.get('ngWords', data => {
      if (data.ngWords === undefined)
        data.ngWords = { text: [], regex: [] };
      data.ngWords.hiddenMessageMode = selectedMode ? selectedMode.value : 'hide';
      chrome.storage.local.set({ ngWords: data.ngWords });
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, 'NG_WORDS_UPDATED');
      });
    });
  });
});

loadNgWords();

chrome.storage.local.get('userIdInlineDisplay', data => {
  userIdInlineDisplayCheckbox.checked = data.userIdInlineDisplay ?? false;
});
userIdInlineDisplayCheckbox.addEventListener('change', () => {
  chrome.storage.local.set({ userIdInlineDisplay: userIdInlineDisplayCheckbox.checked });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, 'USER_ID_INLINE_DISPLAY_CHANGED');
  });
});

const rateList = document.getElementById('rateList');
const rateTemplate = document.getElementById('rateTemplate');
const addRateButton = document.getElementById('addRateButton');
const resetRateList = document.getElementById('resetRateList');

function createRateItem(value, readonly = false) {
  const clone = rateTemplate.content.cloneNode(true);
  const item = clone.querySelector('.item');
  const input = clone.querySelector('.input');
  const deleteButton = clone.querySelector('.deleteButton');

  input.value = value;
  input.addEventListener('input', () => {
    saveRates();
  });

  if (readonly === true) {
    input.readOnly = true;
    deleteButton.disabled = true;
  } else {
    deleteButton.addEventListener('click', () => {
      item.remove();
      saveRates();
    });
  }

  return item;
}
function loadRates() {
  chrome.storage.local.get('playbackRates', data => {
    const rates = Array.from(new Set(data.playbackRates || defaultRates)).sort((a, b) => a - b);
    rateList.innerHTML = '';
    rates.forEach(rate => {
      const rateItem = createRateItem(rate, rate === 1.0);
      rateList.appendChild(rateItem);
    });
  });
}
function saveRates() {
  const rates = [];
  rateList.querySelectorAll('.input').forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value) && value > 0 && value <= 10 && !rates.includes(value))
      rates.push(value);
  });
  chrome.storage.local.set({ playbackRates: rates });
}

addRateButton.addEventListener('click', () => {
  const rateItem = createRateItem(1.0);
  rateList.appendChild(rateItem);
  saveRates();
  const input = rateItem.querySelector('.input');
  input.focus();
  input.select();
});
resetRateList.addEventListener('click', () => {
  rateList.innerHTML = '';
  defaultRates.forEach(rate => {
    const rateItem = createRateItem(rate, rate === 1.0);
    rateList.appendChild(rateItem);
  });
  saveRates();
});

chrome.storage.local.get('activeTab', data => {
  const activeTab = data.activeTab ?? 'rate';
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === activeTab);
  });
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === activeTab);
  });
});

loadRates();
