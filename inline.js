(() => {
  let playbackRates = undefined;
  const originalFreeze = Object.freeze;
  Object.freeze = function (obj) {
    if (obj.length === 5 && obj[0] === 1 && obj[1] === 1.3 && obj[2] === 1.5 && obj[3] === 1.7 && obj[4] === 2) {
      if (playbackRates === undefined)
        setPlaybackRates();
      return playbackRates;
    }
    return originalFreeze.apply(this, arguments);
  };
  function setPlaybackRates() {
    playbackRates = Array.from(new Set(JSON.parse(document.documentElement.dataset.playbackRates ?? '[1.0,1.3,1.5,1.7,2.0]'))).sort((a, b) => a - b);
  }
})();
