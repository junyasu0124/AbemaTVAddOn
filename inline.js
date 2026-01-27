(() => {
  let playbackRates = undefined;

  const originalReverse = Array.prototype.reverse;
  Array.prototype.reverse = function () {
    if (this && this.length > 0 && typeof this[0] === 'object' && this[0] !== null) {
      if ('userId' in this[0] && 'message' in this[0]) {
        this.forEach(item => {
          window.dispatchEvent(new CustomEvent("new-comment", { detail: item }));
        });
      }
    }
    return originalReverse.apply(this, arguments);
  };

  const originalFreeze = Object.freeze;
  Object.freeze = function (obj) {
    if (obj && typeof obj === 'object' && '_userId' in obj && '_message' in obj) {
      window.dispatchEvent(new CustomEvent("new-comment", {
        detail: {
          userId: obj._userId,
          message: obj._message,
        }
      }));
    } else if (obj.length === 5 && obj[0] === 1 && obj[1] === 1.3 && obj[2] === 1.5 && obj[3] === 1.7 && obj[4] === 2) {
      if (playbackRates === undefined)
        setPlaybackRates();
      return playbackRates;
    }
    return originalFreeze.apply(this, arguments);
  };

  const originalHasOwnProperty = Object.prototype.hasOwnProperty;
  Object.prototype.hasOwnProperty = function (prop) {
    if (this && this.height === undefined && originalHasOwnProperty.call(this, 'aria-label') && this['aria-label'].endsWith && this['aria-label'].endsWith('x')) {
      if (this.symbolType === undefined) {
        if (playbackRates === undefined)
          setPlaybackRates();
        const rate = parseFloat(this['aria-label']);
        if (playbackRates.includes(rate)) {
          this.symbolType = 'ICONS_CONDITION_FAST_FORWARD_1X';
        }
      }
    }
    return originalHasOwnProperty.call(this, prop);
  };
  function setPlaybackRates() {
    playbackRates = Array.from(new Set(JSON.parse(document.documentElement.dataset.playbackRates ?? '[1.0,1.3,1.5,1.7,2.0]'))).sort((a, b) => a - b);
  }
})();
