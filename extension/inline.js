(() => {
  const defaultPlaybackRates = [1.0, 1.3, 1.5, 1.7, 2.0];
  let playbackRates = undefined;

  function setPlaybackRates() {
    playbackRates = document.documentElement.dataset.playbackRates ? Array.from(new Set(JSON.parse(document.documentElement.dataset.playbackRates))).sort((a, b) => a - b) : defaultPlaybackRates;
  }

  const originalReverse = Array.prototype.reverse;
  Array.prototype.reverse = function () {
    if (this && this.length > 0 && typeof this[0] === 'object' && this[0] !== null) {
      if ('userId' in this[0] && 'message' in this[0]) {
        this.toReversed().forEach(item => {
          window.dispatchEvent(new CustomEvent('new-comment', { detail: item }));
        });
      }
    }
    return originalReverse.apply(this, arguments);
  };

  const originalFreeze = Object.freeze;
  Object.freeze = function (obj) {
    if (obj && typeof obj === 'object' && '_userId' in obj && '_message' in obj) {
      window.dispatchEvent(new CustomEvent('new-comment', {
        detail: {
          userId: obj._userId,
          message: obj._message,
          createdAtMs: obj._createdAtMs,
        }
      }));
    }
    return originalFreeze.apply(this, arguments);
  };

  const originalDefineProperty = Object.defineProperty;
  Object.defineProperty = function (obj, prop, descriptor) {
    if (prop === 'K' && descriptor && descriptor.value && descriptor.value.length === defaultPlaybackRates.length && descriptor.value[0] === defaultPlaybackRates[0] && descriptor.value[1] === defaultPlaybackRates[1] && descriptor.value[2] === defaultPlaybackRates[2] && descriptor.value[3] === defaultPlaybackRates[3] && descriptor.value[4] === defaultPlaybackRates[4]) {
      if (playbackRates === undefined)
        setPlaybackRates();
      return originalDefineProperty.call(this, obj, prop, {
        ...descriptor,
        value: playbackRates ?? defaultPlaybackRates
      });
    }
    return originalDefineProperty.call(this, obj, prop, descriptor);
  };

  let descriptor = Object.getOwnPropertyDescriptor(
    HTMLMediaElement.prototype,
    'playbackRate'
  );
  Object.defineProperty(HTMLVideoElement.prototype, 'playbackRate', {
    get() {
      const rate = descriptor.get.call(this);
      if (defaultPlaybackRates.includes(rate))
        return rate;
      else
        return 1;
    },
    set(value) {
      descriptor.set.call(this, value);
    }
  });

  window.addEventListener('settings-changed', (event) => {
    const data = event.detail;
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem('abema-tv-addon-settings', jsonData);
    } catch (error) {
      console.error('Failed to save settings to localStorage:', error);
    }
  });
  window.addEventListener('load-settings', () => {
    try {
      const jsonData = localStorage.getItem('abema-tv-addon-settings');
      if (jsonData) {
        const data = JSON.parse(jsonData);
        window.dispatchEvent(new CustomEvent('settings-loaded', { detail: data }));
      }
    } catch (error) {
      console.error('Failed to load settings from localStorage:', error);
    }
  });

  window.dispatchEvent(new CustomEvent('inline-script-loaded'));
})();
