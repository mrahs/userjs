// ==UserScript==
// @name        WikiWand On-click
// @namespace   tag:ahs.pw,2014:WikiWandOnClick
// @description Convert Wikipedia links to WikiWand Upon Clicking Them
// @autohr      Anas H. Sulaiman (AHS.PW)
// @license     GNU GPLv3
// @version     1.0.0
// @run-at      document-start
// @grant       none
// @match       *://*.wikipedia.org/*
// ==/UserScript==

var url = document.location,
  host = url.hostname,
  path = url.pathname,
  query = url.search,
  lang = '',
  page = '';
if (host.indexOf('.wikipedia') > 1 && path.indexOf('wiki/') >= 0 && query.indexOf('?oldformat=true') < 0) {
  lang = host.substr(0, host.indexOf('.wikipedia'));
  page = path.substr(path.indexOf('wiki/') + 5);
  window.history.replaceState({}, '', url.href + '?oldformat=true');
  url.href = 'http://www.wikiwand.com/' + lang + '/' + page;
}
