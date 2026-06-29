chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'complete')
    chrome.tabs.sendMessage(tabId, 'TAB_UPDATED');
});
