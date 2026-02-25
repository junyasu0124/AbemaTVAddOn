const script = document.createElement('script');
script.src = chrome.runtime.getURL('inline.js');
script.async = false;
document.documentElement.appendChild(script);

let ngWordsCache;
function setHiddenMessageMode(mode) {
  const normalizedMode = mode ?? 'hide';
  document.documentElement.setAttribute('data-ng-word-hidden-mode', normalizedMode);
}
function getHiddenMessageMode(ngWords) {
  return ngWords?.hiddenMessageMode ?? 'hide';
}
function getNgWords() {
  return new Promise((resolve) => {
    if (ngWordsCache !== undefined) {
      resolve(ngWordsCache);
    } else {
      chrome.storage.local.get('ngWords', data => {
        ngWordsCache = data.ngWords;
        if (ngWordsCache !== undefined)
          setHiddenMessageMode(getHiddenMessageMode(ngWordsCache));
        resolve(ngWordsCache);
      });
    }
  });
}

const comments = [];
window.addEventListener('new-comment', (event) => {
  comments.push(event.detail);
});

chrome.storage.local.get('playbackRates', data => {
  document.documentElement.dataset.playbackRates = JSON.stringify(data.playbackRates || [1.0, 1.3, 1.5, 1.7, 2.0]);
});

let initializedDate = 0;
chrome.runtime.onMessage.addListener((message) => {
  switch (message) {
    case 'TAB_UPDATED':
      initialize();
      break;
    case 'NG_WORDS_UPDATED':
      ngWordsUpdated();
      break;
    case 'USER_ID_INLINE_DISPLAY_CHANGED':
      userIdInlineDisplayChanged();
      break;
  }
});

initialize();

function initialize() {
  const now = Date.now();
  if (now - initializedDate < 500)
    return;
  initializedDate = now;
  setVideoPlaybackRateChangeEvent();
  setBrowserFullscreenButton();
  setNGCommentsRemoval();
}

function setVideoPlaybackRateChangeEvent() {
  const id = setInterval(() => {
    const video = document.querySelector('video');
    const icon = document.querySelector('.com-vod-VideoControlPlaybackRate__icon');
    if (video && icon) {
      clearInterval(id);

      setRateIcon(video, icon);
      video.addEventListener('ratechange', () => {
        setRateIcon(video, icon);
      });
    }
  }, 300);
}
function setRateIcon(video, icon) {
  let rateText = '', rateTextStyle = '';
  if (Number.isInteger(video.playbackRate)) {
    rateText = video.playbackRate.toString();
  } else {
    rateText = video.playbackRate.toFixed(2);
    if (rateText.endsWith('.00'))
      rateText = rateText.slice(0, -3);
    else if (rateText.endsWith('0'))
      rateText = rateText.slice(0, -1);
    else
      rateTextStyle = 'font-size:9px;';
  }
  requestAnimationFrame(() => {
  icon.children[0].innerHTML = `
  <symbol id="svg-body" viewBox="0 0 24 24">
    <g fill="currentColor" fill-rule="evenodd">
    <text xmlns="http://www.w3.org/2000/svg" style="font-size:10.5px;${rateTextStyle}font-weight:bold;font-family:sans-serif;" x="12" y="22" text-anchor="middle">${rateText}x</text>
    <path d="m11.574 6.728-5.16 3.611c-.6.409-1.414-.008-1.414-.727v-7.224c0-.719.814-1.136 1.413-.728l5.161 3.621c.501.346.501 1.092 0 1.447zm1.476 2.884v-7.224c0-.719.814-1.136 1.413-.719l5.161 3.612c.501.346.501 1.092 0 1.447l-5.16 3.611c-.6.409-1.414-.008-1.414-.727z"/>
    </g>
  </symbol>
  <use href="#svg-body"/>
  `;
  });
}

function setBrowserFullscreenButton() {
  const id = setInterval(() => {
    let rightControlBar = document.querySelector('.com-vod-VideoControlBar__right');
    const miniPlayerWrapper = document.querySelector('.com-vod-VODMiniPlayerWrapper__player');
    if (rightControlBar !== null && miniPlayerWrapper !== null) {
      clearInterval(id);
      let rightControlBarObserver = setRightControlBarObserver(rightControlBar);
      const containerView = document.querySelector('.c-tv-TimeshiftPlayerContainerView') ?? document.querySelector('.c-vod-EpisodePlayerContainer-wrapper');
      if (containerView.style.position === 'fixed') {
        Array.from(rightControlBar.children).forEach((node) => {
          if (node.textContent.startsWith('デフォルト表示') || node.textContent.startsWith('ワイド表示'))
            node.style.display = 'none';
        });
      }
      const header = document.querySelector('.c-common-HeaderContainer-header');
      const sideNavigation = document.querySelector('.c-application-SideNavigation');
      let fullscreenButton = getFullscreenButton();
      let browserFullscreenButton;
      if (fullscreenButton) {
        let pointerMoveTimeoutId;
        let isPointerInHeaderOrSideNavigation = false;
        header.addEventListener('pointerenter', () => {
          isPointerInHeaderOrSideNavigation = true;
        });
        header.addEventListener('pointerleave', () => {
          isPointerInHeaderOrSideNavigation = false;
        });
        sideNavigation.addEventListener('pointerenter', () => {
          isPointerInHeaderOrSideNavigation = true;
        });
        sideNavigation.addEventListener('pointerleave', () => {
          isPointerInHeaderOrSideNavigation = false;
        });

        const containerViewScreen = document.querySelector('.c-tv-TimeshiftPlayerContainerView-screen') ?? document.querySelector('.c-vod-EpisodePlayerContainer-screen');
        containerViewScreen.addEventListener('pointermove', () => {
          if (containerView.style.position === 'fixed' && (miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg') === false || miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg-mini') === false)) {
            clearTimeout(pointerMoveTimeoutId);
            header.classList.remove('c-common-HeaderContainer-header--hidden');
            sideNavigation.classList.remove('c-application-SideNavigation--hidden');
            pointerMoveTimeoutId = setTimeout(() => {
              if (containerView.style.position === 'fixed' && isPointerInHeaderOrSideNavigation === false && (miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg') === false || miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg-mini') === false)) {
                header.classList.add('c-common-HeaderContainer-header--hidden');
                sideNavigation.classList.add('c-application-SideNavigation--hidden');
              }
            }, 4000);
          }
        });
        containerViewScreen.addEventListener('pointerleave', () => {
          setTimeout(() => {
            if (containerView.style.position === 'fixed' && isPointerInHeaderOrSideNavigation === false && (miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg') === false || miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg-mini') === false)) {
              clearTimeout(pointerMoveTimeoutId);
              header.classList.add('c-common-HeaderContainer-header--hidden');
              sideNavigation.classList.add('c-application-SideNavigation--hidden');
            }
          }, 100);
        });
        if (document.getElementById('browser-fullscreen-style') === null) {
          document.head.firstChild.insertAdjacentHTML('afterend', `
          <style id="browser-fullscreen-style">
            .c-common-HeaderContainer-header, .c-application-SideNavigation {
              transition: opacity .2s, visibility 0s 0s;
            }
            .c-common-HeaderContainer-header--hidden, .c-application-SideNavigation--hidden {
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
              transition: opacity .2s, visibility 0s .2s;
            }
          </style>
          `);
        }
        browserFullscreenButton = document.querySelector('.com-vod-BrowserFullscreen') ?? insetBrowserFullscreenButton(fullscreenButton);

        let isPreviousMini = miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg') === true && miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg-mini') === true;
        const observer = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              const isBg = miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg');
              const isMini = miniPlayerWrapper.classList.contains('com-vod-VODMiniPlayerWrapper__player--bg-mini');
              const isBrowserFullscreen = containerView.style.position === 'fixed';
              if (isBg === true && isMini === true) { // mini
                header.classList.remove('c-common-HeaderContainer-header--hidden');
                sideNavigation.classList.remove('c-application-SideNavigation--hidden');
                isPreviousMini = true;
                return;
              } else if (isBg === true && isMini === false) { // normal
                if (isPreviousMini === true)
                  browserFullscreenButton.style.display = 'flex';
                if (isBrowserFullscreen === true) {
                  header.classList.add('c-common-HeaderContainer-header--hidden');
                  sideNavigation.classList.add('c-application-SideNavigation--hidden');
                }
                if (document.querySelector('.com-vod-BrowserFullscreen') === null) {
                  rightControlBar = document.querySelector('.com-vod-VideoControlBar__right');
                  rightControlBarObserver?.disconnect();
                  if (rightControlBar === null)
                    return;
                  rightControlBarObserver = setRightControlBarObserver(rightControlBar);
                  fullscreenButton = getFullscreenButton();
                  if (fullscreenButton)
                    browserFullscreenButton = insetBrowserFullscreenButton(fullscreenButton);
                }
              }
              isPreviousMini = false;
              return;
            }
          }
        });
        observer.observe(miniPlayerWrapper, { attributes: true, attributeFilter: ['class'] });

        const commentObserver = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              if (document.fullscreenElement === null) {
                isFullscreen = false;
                browserFullscreenButton.style.display = '';
              } else {
                isFullscreen = true;
                browserFullscreenButton.style.display = 'none';
              }
              return;
            }
          }
        });
        commentObserver.observe(containerView, { attributes: true, attributeFilter: ['class'] });
      }

      function insetBrowserFullscreenButton(fullscreenButton) {
        fullscreenButton.insertAdjacentHTML('beforebegin', `
        <div class="com-vod-VODScreen__button">
          <div class="com-vod-VideoControlTooltip-wrapper">
            <button class="com-vod-VideoControlButton com-vod-BrowserFullscreen" type="button">
              <span class="com-vod-VideoControlButton__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="" aria-hidden="true" width="100%" height="100%" role="img" focusable="false">
                  <g>
                    <path class="com-vod-BrowserFullscreen-icon-enter" d="m3.688 14.563c.653 0 1.187.534 1.187 1.187v3.375h3.375c.653 0 1.188.534 1.188 1.188 0 .653-.535 1.187-1.188 1.187h-4.563a1.191 1.191 0 0 1 -1.187-1.188v-4.562c0-.653.534-1.188 1.188-1.188zm16.625 0c.653 0 1.187.534 1.187 1.187v4.563c0 .653-.534 1.187-1.188 1.187h-4.562a1.191 1.191 0 0 1 -1.188-1.188c0-.653.535-1.187 1.188-1.187h3.375v-3.375c0-.653.534-1.188 1.188-1.188zm-12.063-12.063c.653 0 1.188.534 1.188 1.188 0 .653-.535 1.187-1.188 1.187h-3.375v3.375c0 .653-.534 1.188-1.188 1.188a1.191 1.191 0 0 1 -1.187-1.188v-4.563c0-.653.534-1.187 1.188-1.187zm12.063 0c.653 0 1.187.534 1.187 1.188v4.562c0 .653-.534 1.188-1.188 1.188a1.191 1.191 0 0 1 -1.187-1.188v-3.375h-3.375a1.191 1.191 0 0 1 -1.188-1.188c0-.653.535-1.187 1.188-1.187z" fill="currentColor" fill-rule="evenodd" transform="scale(0.8)" transform-origin="center"/>
                    <path class="com-vod-BrowserFullscreen-icon-exit" d="m8.25 14.563c.653 0 1.188.534 1.188 1.187v4.563c0 .653-.535 1.187-1.188 1.187a1.191 1.191 0 0 1 -1.188-1.188v-3.375h-3.374a1.191 1.191 0 0 1 -1.188-1.187c0-.653.534-1.188 1.188-1.188zm12.063 0c.653 0 1.187.534 1.187 1.187s-.534 1.188-1.188 1.188h-3.375v3.375c0 .653-.534 1.187-1.187 1.187a1.191 1.191 0 0 1 -1.188-1.188v-4.562c0-.653.535-1.188 1.188-1.188zm-12.063-12.063c.653 0 1.188.534 1.188 1.188v4.562c0 .653-.535 1.188-1.188 1.188h-4.563a1.191 1.191 0 0 1 -1.187-1.188c0-.653.534-1.188 1.188-1.188h3.374v-3.374c0-.653.535-1.187 1.188-1.187zm7.5 0c.653 0 1.188.534 1.188 1.188v3.374h3.375c.653 0 1.187.535 1.187 1.188s-.534 1.188-1.188 1.188h-4.562a1.191 1.191 0 0 1 -1.188-1.188v-4.563c0-.653.535-1.187 1.188-1.187z" fill="currentColor" fill-rule="evenodd" transform="scale(0.8)" transform-origin="center"/>
                    <polygon points="2,2 22,2 22,22 2,22" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/>
                  </g>
                </svg>
              </span>
            </button>
            <span class="com-vod-VideoControlTooltip">
              <span class="com-a-Tooltip com-a-Tooltip--arrow-position-center">ブラウザ内フルスクリーン</span>
            </span>
          </div>
        </div>
        `);
        document.querySelector('.com-vod-BrowserFullscreen-icon-exit').style.display = 'none';
        const browserFullscreenButton = rightControlBar.querySelector('.com-vod-BrowserFullscreen');
        const playerContainer = containerView;
        if (playerContainer != null) {
          if (playerContainer.style.position === 'fixed') {
            browserFullscreenButton.querySelector('.com-vod-BrowserFullscreen-icon-enter').style.display = 'none';
            browserFullscreenButton.querySelector('.com-vod-BrowserFullscreen-icon-exit').style.display = '';
          } else {
            browserFullscreenButton.querySelector('.com-vod-BrowserFullscreen-icon-enter').style.display = '';
            browserFullscreenButton.querySelector('.com-vod-BrowserFullscreen-icon-exit').style.display = 'none';
          }
          browserFullscreenButton.addEventListener('click', () => {
            if (playerContainer.style.position === 'fixed') {
              playerContainer.style.position = '';
              header.classList.remove('c-common-HeaderContainer-header--hidden');
              sideNavigation.classList.remove('c-application-SideNavigation--hidden');
              browserFullscreenButton.querySelector('.com-vod-BrowserFullscreen-icon-enter').style.display = '';
              browserFullscreenButton.querySelector('.com-vod-BrowserFullscreen-icon-exit').style.display = 'none';
              Array.from(rightControlBar.children).forEach((node) => {
                if (node.textContent.startsWith('デフォルト表示') || node.textContent.startsWith('ワイド表示'))
                  node.style.display = '';
              });
            } else {
              playerContainer.style.position = 'fixed';
              header.classList.add('c-common-HeaderContainer-header--hidden');
              sideNavigation.classList.add('c-application-SideNavigation--hidden');
              browserFullscreenButton.querySelector('.com-vod-BrowserFullscreen-icon-enter').style.display = 'none';
              browserFullscreenButton.querySelector('.com-vod-BrowserFullscreen-icon-exit').style.display = '';
              Array.from(rightControlBar.children).forEach((node) => {
                if (node.textContent.startsWith('デフォルト表示') || node.textContent.startsWith('ワイド表示'))
                  node.style.display = 'none';
              });
            }
          });
        }
        return browserFullscreenButton;
      }
      function setRightControlBarObserver(rightControlBar) {
        const observer = new MutationObserver((mutations) => {
          if (containerView.classList.contains('c-tv-TimeshiftPlayerContainerView--has-comment') === false) {
            mutations.forEach((mutation) => {
              if (document.fullscreenElement === null) {
                isFullscreen = false;
                browserFullscreenButton.style.display = '';
                mutation.addedNodes.forEach((node) => {
                  if ((node.textContent.startsWith('デフォルト表示') || node.textContent.startsWith('ワイド表示')) && browserFullscreenButton && containerView.style.position === 'fixed')
                    node.style.display = 'none';
                });
              } else {
                isFullscreen = true;
                browserFullscreenButton.style.display = 'none';
              }
            });
          }
        });
        observer.observe(rightControlBar, { childList: true });
        return observer;
      }
      function getFullscreenButton() {
        const rightControlButtons = rightControlBar.querySelectorAll('.com-vod-VODScreen__button');
        return rightControlButtons[rightControlButtons.length - 1];
      }
    }
  }, 300);
}

function setNGCommentsRemoval() {
  if (document.getElementById('ng-word-style') === null) {
    document.documentElement.insertAdjacentHTML('beforeend', `
    <style id="ng-word-style">
      .com-a-Text--ng-word {
        color: gray !important;
      }
      :root[data-ng-word-hidden-mode="replace"] {
        .com-tv-CommentBlock>.com-tv-CommentBlock__inner>.com-tv-CommentBlock__message:has(>.com-a-Text--ng-word)>span:first-child, .com-archive-comment-ArchiveCommentItem>.com-archive-comment-ArchiveCommentItem__message:has(>.com-a-Text--ng-word)>span:first-child {
          display: none;
        }
      }
      :root[data-ng-word-hidden-mode="hide"] {
        .com-tv-CommentBlock--ng-word, .com-archive-comment-ArchiveCommentItem--ng-word {
          display: none;
        }
        .com-tv-CommentBlock>.com-tv-CommentBlock__inner>.com-tv-CommentBlock__message>.com-a-Text--ng-word, .com-archive-comment-ArchiveCommentItem>.com-archive-comment-ArchiveCommentItem__message>.com-a-Text--ng-word {
          display: none;
        }
      }
      :root[data-ng-word-hidden-mode="mask"] {
        .com-tv-CommentBlock>.com-tv-CommentBlock__inner>.com-tv-CommentBlock__message>.com-a-Text--ng-word, .com-archive-comment-ArchiveCommentItem>.com-archive-comment-ArchiveCommentItem__message>.com-a-Text--ng-word {
          display: none;
        }
      }

      :root[data-user-id-inline-display] {
        .com-tv-CommentBlock>.com-tv-CommentBlock__inner, .com-archive-comment-ArchiveCommentItem {
          padding: 4px 12px !important;
        }
        .com-tv-CommentBlock>.com-tv-CommentBlock__inner>.com-tv-CommentBlock__message>.com-a-Text--user-id, .com-archive-comment-ArchiveCommentItem>.com-archive-comment-ArchiveCommentItem__message>.com-a-Text--user-id {
          display: block;
          font-size: 11px;
          color: gray;
        }
      }
      :root:not([data-user-id-inline-display]) {
        .com-tv-CommentBlock>.com-tv-CommentBlock__inner>.com-tv-CommentBlock__message>.com-a-Text--user-id, .com-archive-comment-ArchiveCommentItem>.com-archive-comment-ArchiveCommentItem__message>.com-a-Text--user-id {
          display: none;
        }
      }
    </style>
    `);
  }
  chrome.storage.local.get('userIdInlineDisplay', data => {
    if (data.userIdInlineDisplay === true)
      document.documentElement.setAttribute('data-user-id-inline-display', '');
    else
      document.documentElement.removeAttribute('data-user-id-inline-display', '');
  });
  const id = setInterval(() => {
    const episodeContainerView = document.querySelector('.c-vod-EpisodePlayerContainer-wrapper');
    if (episodeContainerView !== null) {
      clearInterval(id);
      return;
    }
    const feedSidePanel = document.querySelector('.com-tv-FeedSidePanel__contents');
    if (feedSidePanel !== null) {
      clearInterval(id);
      const feedSidePanelObserver = new MutationObserver((mutationsList) => {
        let list, listObserver;
        for (const mutation of mutationsList) {
          mutation.addedNodes.forEach(async (node) => {
            const onReachTop = node.querySelector('.com-tv-CommentArea>.com-a-OnReachTop');
            const target = node.querySelector('.com-tv-CommentArea>.com-a-OnReachTop>div');
            if (onReachTop !== null && target !== null) {
              const onReachTopObserver = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                  mutation.addedNodes.forEach(async (addedNode) => {
                    if (addedNode.tagName === 'DIV' && addedNode.parentElement === onReachTop)
                      await observeList(addedNode);
                  });
                }
              });
              onReachTopObserver.observe(onReachTop, { childList: true });

              await observeList(target);

              async function observeList(target) {
              list = target;
              const ngWords = await getNgWords();
              removeNgWords(list.children, ngWords);
              setUserIdToComments(list.children);
              listObserver = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                  mutation.addedNodes.forEach(async (addedNode) => {
                    const comment = addedNode.children[0]?.children[0]?.children[0]?.textContent;
                    const ngWords = await getNgWords();
                    setNgWordStyle(addedNode, isContainsNgWord(comment, ngWords), ngWords);
                    setUserIdStyle(addedNode, getUserId(comment));
                  });
                }
              });
              listObserver.observe(list, { childList: true });
            }
            }
          });
        }
      });
      feedSidePanelObserver.observe(feedSidePanel, { childList: true });
    }

    const archiveCommentContainerView = document.querySelector('.c-archive-comment-ArchiveCommentContainerView__list-wrapper');
    if (archiveCommentContainerView !== null) {
      clearInterval(id);
      const archiveCommentObserver = new MutationObserver((mutationsList) => {
        let onReachTop, onReachTopObserver;
        for (const mutation of mutationsList) {
          mutation.addedNodes.forEach(async (node) => {
            if (node.classList.contains('com-a-OnReachTop')) {
              onReachTop = node;
              const ngWords = await getNgWords();
              removeNgWords(onReachTop.children[0].children, ngWords);
              setUserIdToComments(onReachTop.children[0].children);
              onReachTopObserver = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                  mutation.addedNodes.forEach(async (addedNode) => {
                    const comment = addedNode.children[0]?.children[0]?.children[0]?.textContent;
                    const ngWords = await getNgWords();
                    setNgWordStyle(addedNode, isContainsNgWord(comment, ngWords), ngWords);
                    setUserIdStyle(addedNode, getUserId(comment));
                  });
                }
              });
              onReachTopObserver.observe(onReachTop.children[0], { childList: true });
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node === onReachTop) {
              onReachTop = null;
              onReachTopObserver.disconnect();
              onReachTopObserver = null;
            }
          });
        }
      });
      archiveCommentObserver.observe(archiveCommentContainerView, { childList: true });
    }
  }, 300);
}
function ngWordsUpdated() {
  chrome.storage.local.get('ngWords', data => {
    const ngWords = ngWordsCache = data.ngWords;
    if (ngWords !== undefined) {
      setHiddenMessageMode(getHiddenMessageMode(ngWords));
      if (ngWords.text !== undefined && ngWords.regex !== undefined) {
        const list = document.querySelector('.com-tv-CommentArea>.com-a-OnReachTop>div') ?? document.querySelector('.c-archive-comment-ArchiveCommentContainerView__list-wrapper>.com-a-OnReachTop>ul');
        if (list !== null)
          removeNgWords(list.children, ngWords);
      }
    }
  });
}
function userIdInlineDisplayChanged() {
  chrome.storage.local.get('userIdInlineDisplay', data => {
    let needToScroll = false, scrollContainer;
    const list = document.querySelector('.com-tv-CommentArea>.com-a-OnReachTop>div') ?? document.querySelector('.c-archive-comment-ArchiveCommentContainerView__list-wrapper>.com-a-OnReachTop>ul');
    if (list !== null) {
      const children = list.querySelectorAll('.com-tv-CommentBlock, .com-archive-comment-ArchiveCommentItem');
      scrollContainer = list.parentElement;
      if (children.length > 0) {
        if (data.userIdInlineDisplay === true && scrollContainer.scrollHeight - scrollContainer.scrollTop <= scrollContainer.clientHeight + children[0].clientHeight)
          needToScroll = true;
        const isArchive = children[0].classList.contains('com-archive-comment-ArchiveCommentItem');
        children.forEach((child) => {
          const messageContainer = child.querySelector('.com-tv-CommentBlock__message') || child.querySelector('.com-archive-comment-ArchiveCommentItem__message');
          if (isArchive)
            child = child.parentElement;
          const userId = child.getAttribute('title') || messageContainer.querySelector('.com-a-Text--user-id')?.textContent || null;
          if (data.userIdInlineDisplay === true) {
            child.removeAttribute('title');
          } else {
            child.title = userId;
          }
        });
      }
    }
    if (data.userIdInlineDisplay === true)
      document.documentElement.setAttribute('data-user-id-inline-display', '');
    else
      document.documentElement.removeAttribute('data-user-id-inline-display', '');
    if (needToScroll) {
      requestAnimationFrame(() =>
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      );
    }
  });
}
function removeNgWords(children, ngWords) {
  for (const child of children) {
    const commentElement = child.children[0]?.children[0]?.children[0];
    const comment = commentElement?.dataset.originalText ?? commentElement?.textContent;
    setNgWordStyle(child, isContainsNgWord(comment, ngWords), ngWords);
  }
}
function setNgWordStyle(child, isContainsNgWord, ngWords) {
  const mode = getHiddenMessageMode(ngWords);
  if (isContainsNgWord) {
    if (child.classList.contains('com-tv-CommentBlock'))
      child.classList.add('com-tv-CommentBlock--ng-word');
    else if (child.tagName === 'LI')
      child.classList.add('com-archive-comment-ArchiveCommentItem--ng-word');
    const hiddenMessage = document.createElement('span');
    hiddenMessage.className = 'com-a-Text--ng-word';
    hiddenMessage.textContent = 'NGワードが含まれています';
    const messageContainer = child.querySelector('.com-tv-CommentBlock__message') || child.querySelector('.com-archive-comment-ArchiveCommentItem__message');
    if (messageContainer && messageContainer.querySelector('.com-a-Text--ng-word') === null)
      messageContainer.firstChild.after(hiddenMessage);
    const commentTextElement = getCommentTextElement(messageContainer);
    if (commentTextElement) {
      if (mode === 'mask') {
        if (!commentTextElement.dataset.originalText)
          commentTextElement.dataset.originalText = commentTextElement.textContent;
        commentTextElement.textContent = maskCommentText(commentTextElement.dataset.originalText, ngWords);
      } else if (commentTextElement.dataset.originalText) {
        commentTextElement.textContent = commentTextElement.dataset.originalText;
        delete commentTextElement.dataset.originalText;
      }
    }
  } else {
    child.classList.remove('com-tv-CommentBlock--ng-word');
    child.classList.remove('com-archive-comment-ArchiveCommentItem--ng-word');
    const hiddenMessage = child.querySelector('.com-a-Text--ng-word');
    if (hiddenMessage)
      hiddenMessage.remove();
    const messageContainer = child.querySelector('.com-tv-CommentBlock__message') || child.querySelector('.com-archive-comment-ArchiveCommentItem__message');
    const commentTextElement = getCommentTextElement(messageContainer);
    if (commentTextElement?.dataset.originalText) {
      commentTextElement.textContent = commentTextElement.dataset.originalText;
      delete commentTextElement.dataset.originalText;
    }
  }
}
function getCommentTextElement(messageContainer) {
  if (!messageContainer)
    return null;
  return Array.from(messageContainer.children).find((element) => {
    return !element.classList.contains('com-a-Text--ng-word') && !element.classList.contains('com-a-Text--user-id');
  }) ?? null;
}
function maskCommentText(text, ngWords) {
  let masked = text;
  ngWords.text.forEach(target => {
    if (target === '')
      return;
    masked = masked.split(target).join('●'.repeat(target.length));
  });
  ngWords.regex.forEach(pattern => {
    try {
      const regex = new RegExp(pattern, 'gv');
      masked = masked.replace(regex, match => '●'.repeat(match.length));
    } catch {
      return;
    }
  });
  return masked;
}
function isContainsNgWord(comment, ngWords) {
  return ngWords.text.some(target => comment.includes(target)) ||
    ngWords.regex.some(pattern => {
      try {
        const regex = new RegExp(pattern, 'v');
        return regex.test(comment);
      } catch {
        return false;
      }
    });
}
function setUserIdToComments(children) {
  for (const child of children) {
    const comment = child.children[0]?.children[0]?.children[0]?.textContent;
    setUserIdStyle(child, getUserId(comment));
  }
}
function setUserIdStyle(child, userId) {
  if (userId !== null) {
    if (document.documentElement.hasAttribute('data-user-id-inline-display')) {
      child.removeAttribute('title');
    } else {
    child.title = userId;
}
    const userIdSpan = document.createElement('span');
    userIdSpan.className = 'com-a-Text--user-id';
    userIdSpan.textContent = userId;
    const messageContainer = child.querySelector('.com-tv-CommentBlock__message') || child.querySelector('.com-archive-comment-ArchiveCommentItem__message');
    if (messageContainer) {
      const existingUserIdSpan = messageContainer.querySelector('.com-a-Text--user-id');
      let needToScroll = false;
      const scrollContainer = child.parentElement.parentElement;
      if (document.documentElement.hasAttribute('data-user-id-inline-display') && scrollContainer.scrollHeight - scrollContainer.scrollTop <= scrollContainer.clientHeight + child.clientHeight)
        needToScroll = true;
      if (existingUserIdSpan !== null)
        existingUserIdSpan.remove();
      messageContainer.appendChild(userIdSpan);
      if (needToScroll) {
        requestAnimationFrame(() =>
          scrollContainer.scrollTop = scrollContainer.scrollHeight
        );
      }
    }
  }
}
function getUserId(comment) {
  const index = comments.findIndex(e => e.message === comment);
  if (index !== -1) {
    const userId = comments[index].userId;
    comments.splice(index, 1);
    return userId;
  }
  return null;
}
