// ==UserScript==
// @name        RemoveUTM
// @namespace   tag:ahs.pw,2014:RemoveUTM
// @description Remove UTM query from current page URL.
// @autohr      Anas H. Sulaiman (AHS.PW)
// @license     GNU GPLv3
// @version     1.0.0
// @run-at      document-end
// @grant       none
// @match       *://*/*utm*
// ==/UserScript==

window.history.replaceState({}, '', window.location.href.replace(/(\?|&)utm[^&]*/g, ''));
