feed.title  = _("Dev");
feed.author = _("Anas H. Sulaiman (AHS.PW)");

CmdUtils.CreateCommand({
  names: ['copy selection source', 'dev cp src'],
  description: 'Copy the source-code of the selected HTML',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  icon: 'chrome://ubiquity/skin/icons/page_code.png',
  execute: function() {
    CmdUtils.copyToClipboard(Utils.escapeHtml(CmdUtils.getHtmlSelection(context)));

    displayMessage({
      title: 'Source',
      text: 'Copied source code of selection to clipboard'
    });
  },
  preview: function(pb) {
    pb.innerHTML = (
      '<link rel="stylesheet"' +
      ' href="resource://ubiquity/scripts/prettify.css">' +
      '<pre id="selection-source" class="prettyprint lang-htm">' +
      Utils.escapeHtml(CmdUtils.getHtmlSelection(context)));
    var script = pb.appendChild(pb.ownerDocument.createElement("script"));
    script.setAttribute("onload", "prettyPrint()");
    script.src = "resource://ubiquity/scripts/prettify.js";
  }
});

CmdUtils.CreateCommand({
  names: ['copy selection source as markdown', 'dev cp md'],
  description: 'Copy the source code of the selected HTML as Markdown',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  icon: 'chrome://ubiquity/skin/icons/page_code.png',
  execute: function() {
    this.initToMarkdown();

    CmdUtils.copyToClipboard(Utils.currentTab.window.toMarkdown(CmdUtils.getHtmlSelection(context), this._converters));

    displayMessage({
      title: 'Source',
      text: 'Copied selection as markdown to clipboard'
    });
  },
  preview: function(pb) {
    this.initToMarkdown();

    pb.innerHTML = (
      '<link rel="stylesheet"' +
      ' href="resource://ubiquity/scripts/prettify.css">' +
      '<pre id="selection-source" class="prettyprint lang-htm">' +
      Utils.currentTab.window.toMarkdown(CmdUtils.getHtmlSelection(context)));
    var script = pb.appendChild(pb.ownerDocument.createElement("script"));
    script.setAttribute("onload", "prettyPrint()");
    script.src = "resource://ubiquity/scripts/prettify.js";
  },
  _converters: {
    converters: [{
      filter: 'pre',
      replacement: function(content) {
        return '```' + content + '```';
      }
    }, {
      filter: 'div',
      replacement: function(content) {
        return '\n' + content + '\n';
      }
    }, {
      filter: 'span',
      replacement: function(content) {
        return content;
      }
    }]
  },
  initToMarkdown: function() {
    if (Utils.currentTab.window.toMarkdown) return;
    /*
     * to-markdown - an HTML to Markdown converter
     *
     * Copyright 2011-15, Dom Christie
     * Licenced under the MIT licence
     *
     */
    var e=Utils.currentTab.window,n=e.document;!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t;t="undefined"!=typeof e?e:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toMarkdown=n()}}(function(){return function t(e,n,r){function o(a,c){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};e[a][0].call(f.exports,function(n){var t=e[a][1][n];return o(t?t:n)},f,f.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,r,o){"use strict";function i(e){return e.replace(/^[ \r\n\t]+|[ \r\n\t]+$/g,"")}function a(e){return-1!==k.indexOf(e.nodeName.toLowerCase())}function c(e){return-1!==E.indexOf(e.nodeName.toLowerCase())}function l(){var e=T.DOMParser,n=!1;try{(new e).parseFromString("","text/html")&&(n=!0)}catch(t){}return n}function u(){var e=function(){};return e.prototype.parseFromString=function(e){var n=y.implementation.createHTMLDocument("");return e.toLowerCase().indexOf("<!doctype")>-1?n.documentElement.innerHTML=e:n.body.innerHTML=e,n},e}function f(e){var n=(new O).parseFromString(e,"text/html");return w(n,a),n}function d(e){for(var n,t,r,o=[e],i=[];o.length>0;)for(n=o.shift(),i.push(n),t=n.childNodes,r=0;r<t.length;r++)1===t[r].nodeType&&o.push(t[r]);return i.shift(),i}function s(e){for(var n="",t=0;t<e.childNodes.length;t++)if(1===e.childNodes[t].nodeType)n+=e.childNodes[t]._replacement;else{if(3!==e.childNodes[t].nodeType)continue;n+=e.childNodes[t].data}return n}function p(e,n){return e.cloneNode(!1).outerHTML.replace("><",">"+n+"<")}function m(e,n){if("string"==typeof n)return n===e.nodeName.toLowerCase();if(Array.isArray(n))return-1!==n.indexOf(e.nodeName.toLowerCase());if("function"==typeof n)return n.call(N,e);throw new TypeError("`filter` needs to be a string, array, or function")}function h(e,n){var t,r,o;return"left"===e?(t=n.previousSibling,r=/ $/):(t=n.nextSibling,r=/^ /),t&&(3===t.nodeType?o=r.test(t.nodeValue):1!==t.nodeType||a(t)||(o=r.test(t.textContent))),o}function g(e){var n="",t="";if(!a(e)){var r=/^[ \r\n\t]/.test(e.innerHTML),o=/[ \r\n\t]$/.test(e.innerHTML);r&&!h("left",e)&&(n=" "),o&&!h("right",e)&&(t=" ")}return{leading:n,trailing:t}}function v(e){for(var n,t=s(e),r=0;r<b.length;r++){var o=b[r];if(m(e,o.filter)){if("function"!=typeof o.replacement)throw new TypeError("`replacement` needs to be a function that returns a string");var a=g(e);(a.leading||a.trailing)&&(t=i(t)),n=a.leading+o.replacement.call(N,t,e)+a.trailing;break}}c(e)||/A/.test(e.nodeName)||!/^\s*$/i.test(t)||(n=""),e._replacement=n}var N,b,y,x=t("./lib/md-converters"),C=t("./lib/gfm-converters"),w=t("collapse-whitespace"),T="undefined"!=typeof e?e:this;y="undefined"==typeof n?t("jsdom").jsdom():n;var k=["address","article","aside","audio","blockquote","body","canvas","center","dd","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frameset","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","isindex","li","main","menu","nav","noframes","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul"],E=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],O=l()?T.DOMParser:u();N=function(e,n){if(n=n||{},"string"!=typeof e)throw new TypeError(e+" is not a string");e=e.replace(/(\d+)\. /g,"$1\\. ");var t,r=f(e).body,o=d(r);b=x.slice(0),n.gfm&&(b=C.concat(b)),n.converters&&(b=n.converters.concat(b));for(var i=o.length-1;i>=0;i--)v(o[i]);return t=s(r),t.replace(/^[\t\r\n]+|[\t\r\n\s]+$/g,"").replace(/\n\s+\n/g,"\n\n").replace(/\n{3,}/g,"\n\n")},N.isBlock=a,N.isVoid=c,N.trim=i,N.outer=p,r.exports=N},{"./lib/gfm-converters":2,"./lib/md-converters":3,"collapse-whitespace":5,jsdom:6}],2:[function(e,n,t){"use strict";function r(e,n){var t=Array.prototype.indexOf.call(n.parentNode.childNodes,n),r=" ";return 0===t&&(r="| "),r+e+" |"}var o=/highlight highlight-(\S+)/;n.exports=[{filter:"br",replacement:function(){return"\n"}},{filter:["del","s","strike"],replacement:function(e){return"~~"+e+"~~"}},{filter:function(e){return"checkbox"===e.type&&"LI"===e.parentNode.nodeName},replacement:function(e,n){return(n.checked?"[x]":"[ ]")+" "}},{filter:["th","td"],replacement:function(e,n){return r(e,n)}},{filter:"tr",replacement:function(e,n){var t="",o={left:":--",right:"--:",center:":-:"};if("THEAD"===n.parentNode.nodeName)for(var i=0;i<n.childNodes.length;i++){var a=n.childNodes[i].attributes.align,c="---";a&&(c=o[a.value]||c),t+=r(c,n.childNodes[i])}return"\n"+e+(t?"\n"+t:"")}},{filter:"table",replacement:function(e){return"\n\n"+e+"\n\n"}},{filter:["thead","tbody","tfoot"],replacement:function(e){return e}},{filter:function(e){return"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,n){return"\n\n```\n"+n.firstChild.textContent+"\n```\n\n"}},{filter:function(e){return"PRE"===e.nodeName&&"DIV"===e.parentNode.nodeName&&o.test(e.parentNode.className)},replacement:function(e,n){var t=n.parentNode.className.match(o)[1];return"\n\n```"+t+"\n"+n.textContent+"\n```\n\n"}},{filter:function(e){return"DIV"===e.nodeName&&o.test(e.className)},replacement:function(e){return"\n\n"+e+"\n\n"}}]},{}],3:[function(e,n,t){"use strict";n.exports=[{filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},{filter:"br",replacement:function(){return"  \n"}},{filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,n){for(var t=n.nodeName.charAt(1),r="",o=0;t>o;o++)r+="#";return"\n\n"+r+" "+e+"\n\n"}},{filter:"hr",replacement:function(){return"\n\n* * *\n\n"}},{filter:["em","i"],replacement:function(e){return"_"+e+"_"}},{filter:["strong","b"],replacement:function(e){return"**"+e+"**"}},{filter:function(e){var n=e.previousSibling||e.nextSibling,t="PRE"===e.parentNode.nodeName&&!n;return"CODE"===e.nodeName&&!t},replacement:function(e){return"`"+e+"`"}},{filter:function(e){return"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n){var t=n.title?' "'+n.title+'"':"";return"["+e+"]("+n.getAttribute("href")+t+")"}},{filter:"img",replacement:function(e,n){var t=n.alt||"",r=n.getAttribute("src")||"",o=n.title||"",i=o?' "'+o+'"':"";return r?"!["+t+"]("+r+i+")":""}},{filter:function(e){return"PRE"===e.nodeName&&"CODE"===e.firstChild.nodeName},replacement:function(e,n){return"\n\n    "+n.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},{filter:"blockquote",replacement:function(e){return e=this.trim(e),e=e.replace(/\n{3,}/g,"\n\n"),e=e.replace(/^/gm,"> "),"\n\n"+e+"\n\n"}},{filter:"li",replacement:function(e,n){e=e.replace(/^\s+/,"").replace(/\n/gm,"\n    ");var t="*   ",r=n.parentNode,o=Array.prototype.indexOf.call(r.children,n)+1;return t=/ol/i.test(r.nodeName)?o+".  ":"*   ",t+e}},{filter:["ul","ol"],replacement:function(e,n){for(var t=[],r=0;r<n.childNodes.length;r++)t.push(n.childNodes[r]._replacement);return/li/i.test(n.parentNode.nodeName)?"\n"+t.join("\n"):"\n\n"+t.join("\n")+"\n\n"}},{filter:function(e){return this.isBlock(e)},replacement:function(e,n){return"\n\n"+this.outer(n,e)+"\n\n"}},{filter:function(){return!0},replacement:function(e,n){return this.outer(n,e)}}]},{}],4:[function(e,n,t){n.exports=["address","article","aside","audio","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","noscript","ol","output","p","pre","section","table","tfoot","ul","video"]},{}],5:[function(e,n,t){"use strict";function r(e){return i(e)&&c.indexOf(e.nodeName)>=0}function o(e){return e&&3===e.nodeType}function i(e){return e&&1===e.nodeType}function a(e,n){function t(t){for(;t&&t!==e;){if(t.nextSibling)return t.nextSibling;t=t.parentNode,f&&n(t)&&(f.data=f.data.replace(/[ \r\n\t]$/,""),f=null)}return null}function a(e){return e.firstChild?e.firstChild:t(e)}function c(e){var n=t(e);return e.parentNode.removeChild(e),n}var l,u,f,d,s,p=/^ /,m=/ $/;if("function"!=typeof n&&(n=r),"PRE"!==e.nodeName){for(e.normalize(),d=a(e);d;)if(u=d.previousSibling,l=d.nextSibling,o(d))s=d.data.replace(/[ \r\n\t]+/g," "),(!f||u&&n(u))&&(s=s.replace(p,"")),l&&n(l)&&(s=s.replace(m,"")),f&&m.test(f.data)&&p.test(s)&&(s=s.substr(1)),s?(d.data=s,f=d,d=t(d)):d=c(d);else if(i(d)){if("PRE"===d.nodeName){d=t(d);continue}f&&n(d)&&(f.data=f.data.replace(m,""),f=null),d=a(d)}else d=c(d);f&&(f.data=f.data.replace(m,""))}}var c=e("block-elements").map(function(e){return e.toUpperCase()});n.exports=a},{"block-elements":4}],6:[function(e,n,t){},{}]},{},[1])(1)});
  }
});


CmdUtils.CreateCommand({
  names: ['cache', 'dev cache'],
  description: 'Disable/Enable entire browser cache.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var msg = '';
    Utils.prefs.set('browser.cache.disk.enable', !Utils.prefs.get('browser.cache.disk.enable'));
    Utils.prefs.set('browser.cache.memory.enable', !Utils.prefs.get('browser.cache.memory.enable'));
    if (Utils.prefs.get('browser.cache.memory.enable')) {
      msg = 'Enabled browser cache';
    } else {
      msg = 'Disabled browser cache';
    }
    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});



CmdUtils.CreateCommand({
  names: ['dns cache', 'dev dns cache'],
  description: 'Disable/Enable DNS cache.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var msg = '';
    if (Utils.prefs.get('network.dnsCacheExpiration', 0) === 0) {
      Utils.prefs.reset('network.dnsCacheExpiration');
      msg = 'Enabled browser DNS cache';
    } else {
      Utils.prefs.set('network.dnsCacheExpiration', 0);
      msg = 'Disabled browser DNS cache';
    }
    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});




CmdUtils.CreateCommand({
  names: ['display image alt text', 'dev display image alt text'],
  description: 'Display images alternative text (based on Web Developer addon by chrispederick).',
  execute: function() {
    var altEls = Utils.currentTab.window.document.querySelectorAll('.wdimgalt');
    var n = 0;
    var msg = '';

    if (altEls.length > 0) {
      Array.forEach(altEls, function(el) {
        el.remove();
        n++;
      });
      msg = 'Hid ' + n + ' displayed alternative image text';
    } else {
      var bodyRect = Utils.currentTab.window.document.body.getBoundingClientRect();
      var altEl;
      var rect;
      Array.forEach(Utils.currentTab.window.document.images, function(img) {
        if (img.alt !== '') {
          rect = img.getBoundingClientRect();
          console.log(rect.left, bodyRect.left, rect.left - bodyRect.left);
          altEl = Utils.currentTab.window.document.createElement('span');
          altEl.setAttribute('class', 'wdimgalt');
          altEl.setAttribute('style', 'background-color: darkred; color: white; z-index: 999; position: absolute; left:' + (rect.left - bodyRect.left) + 'px; top:' + (rect.top - bodyRect.top) + 'px;');
          altEl.appendChild(Utils.currentTab.window.document.createTextNode(img.alt));
          Utils.currentTab.window.document.body.appendChild(altEl);
          n++;
        }
      });
      msg = 'Displayed alternative text for ' + n + ' images';
    }
    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['display image dimensions', 'dev display image dimensions'],
  description: 'Display images dimensions (based on Web Developer addon by chrispederick).',
  execute: function() {
    var dimEls = Utils.currentTab.window.document.querySelectorAll('.wdimgdim');
    var n = 0;
    var msg = '';

    if (dimEls.length > 0) {
      Array.forEach(dimEls, function(el) {
        el.remove();
        n++;
      });
      msg = 'Hid ' + n + ' displayed image dimensions';
    } else {
      var bodyRect = Utils.currentTab.window.document.body.getBoundingClientRect();
      var rect;
      var dimEl;
      Array.forEach(Utils.currentTab.window.document.images, function(img) {
        if (img.width || img.height) {
          rect = img.getBoundingClientRect();
          dimEl = Utils.currentTab.window.document.createElement('span');
          dimEl.setAttribute('class', 'wdimgdim');
          dimEl.setAttribute('style', 'background-color: darkred; color: white; z-index: 999; position: absolute; left:' + (rect.left - bodyRect.left) + 'px; top:' + (rect.top - bodyRect.top) + 'px;');
          dimEl.appendChild(Utils.currentTab.window.document.createTextNode('width: ' + img.width + ', height: ' + img.height));
          Utils.currentTab.window.document.body.appendChild(dimEl);
          n++;
        }
      });
      msg = 'Displayed dimensions for ' + n + ' images';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});


CmdUtils.CreateCommand({
  names: ['outline background images', 'dev outline background images'],
  description: 'Outline background images (based on Web Developer addon by chrispederick).',
  execute: function() {
    var itr = Utils.currentTab.window.document.createNodeIterator(Utils.currentTab.window.document.documentElement, Utils.currentTab.window.NodeFilter.SHOW_ELEMENT, null, false),
      node,
      computedStyle,
      styleImage,
      styleEl = Utils.currentTab.window.document.getElementById('wd-outline-background'),
      t = false,
      n = 0,
      msg = '';

    if (styleEl) {
      Array.forEach(Utils.currentTab.window.document.querySelectorAll('.wd-outline-background'), function(el) {
        el.classList.remove('wd-outline-background');
        n++;
      });
      styleEl.remove();
      msg = 'Removed outline for ' + n + ' background images';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-outline-background';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode('.wd-outline-background {outline: solid 1px red !important;}'));
      Utils.currentTab.window.document.head.appendChild(styleEl);

      while ((node = itr.nextNode()) !== null) {
        computedStyle = Utils.currentTab.window.getComputedStyle(node, null);
        if (!computedStyle) continue;

        t = false;
        styleImage = computedStyle.getPropertyCSSValue('background-image');
        if (styleImage && styleImage[0] && styleImage[0].primitiveType === CSSPrimitiveValue.CSS_URI) {
          node.classList.add('wd-outline-background');
          t = true;
        }

        styleImage = computedStyle.getPropertyCSSValue('list-style-image');
        if (styleImage && styleImage[0] && styleImage[0].primitiveType === CSSPrimitiveValue.CSS_URI) {
          node.classList.add('wd-outline-background');
          t = true;
        }

        if (t) {
          n++;
        }
      }

      msg = 'Outlined ' + n + ' background images';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['outline images missing alt text', 'dev outline images missing alt text'],
  description: 'Outline background images (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styleEl = Utils.currentTab.window.document.getElementById('wd-outline-missing-alt');
    var msg = '';

    if (styleEl) {
      styleEl.remove();
      msg = 'Removed outline for images missing alternative text';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-outline-missing-alt';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode('img[alt=""] {outline: solid 1px red !important;}'));
      Utils.currentTab.window.document.head.appendChild(styleEl);
      msg = 'Outlined images missing alternative text';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['outline images missing dimensions', 'dev outline images missing dimensions'],
  description: 'Outline images that have missing dimensions (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styleEl = Utils.currentTab.window.document.getElementById('wd-outline-missing-dims');
    var msg = '';

    if (styleEl) {
      styleEl.remove();
      msg = 'Removed outline for images missing dimensions';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-outline-missing-dims';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode('img:not([height]):not([width]) {outline: solid 1px red !important;}'));
      Utils.currentTab.window.document.head.appendChild(styleEl);
      msg = 'Outlined images missing dimensions';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});


CmdUtils.CreateCommand({
  names: ['dev display abbr', 'dev display abbr'],
  description: 'Display the title attribute of all &lt;abbr&gt; and &lt;acronym&gt; elements (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styleEl = Utils.currentTab.window.document.getElementById('wd-display-abbrs'),
      styles =
      "abbr:before { content: '(abbr=\"' attr(title) '\") ' !important; }" +
      "acronym:before { content: '(acronym=\"' attr(title) '\") ' !important; }";
      var msg = '';

    if (styleEl) {
      styleEl.remove();
      msg = 'Hid displayed title attributes for abbr and acronym elements';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-display-abbrs';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode(styles));
      Utils.currentTab.window.document.head.appendChild(styleEl);
      msg = 'Displayed title attribute for abbr and acronym elements';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});



CmdUtils.CreateCommand({
  names: ['display accesskeys', 'dev display accesskeys'],
  description: 'Display access keys for elements that have it (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styleEl = Utils.currentTab.window.document.getElementById('wd-display-accesskeys'),
      styles = "[accesskey]:before {content: '(accesskey=\"' attr(accesskey) '\")' !important;}";
      var msg = '';

    if (styleEl) {
      styleEl.remove();
      msg = 'Hid displayed accesskey attributes';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-display-accesskeys';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode(styles));
      Utils.currentTab.window.document.head.appendChild(styleEl);
      msg = 'Displayed accesskey attributes';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});


CmdUtils.CreateCommand({
  names: ['display anchors', 'dev display anchors'],
  description: 'Display link-ified anchors next to all elements with id attribute (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styleEl = Utils.currentTab.window.document.getElementById('wd-display-anchor');
    var n = 0;
    var msg = '';

    if (styleEl) {
      Array.forEach(Utils.currentTab.window.document.querySelectorAll('.wd-display-anchor'), function(el) {
        el.remove();
        n++;
      });
      styleEl.remove();
      msg = 'Hid ' + n + ' displayed anchors';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-display-anchor';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode('.wd-display-anchor:before {content: "#"}'));
      Utils.currentTab.window.document.head.appendChild(styleEl);

      Array.forEach(Utils.currentTab.window.document.querySelectorAll('[id]'), function(anchor) {
        var a = Utils.currentTab.window.document.createElement('a');
        a.classList.add('wd-display-anchor');
        a.href = '#' + anchor.id;
        anchor.parentNode.insertBefore(a, anchor);
        n++;
      });
      msg = 'Displayed ' + n + ' anchors';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['display aria roles', 'dev display aria roles'],
  description: 'Display aria roles for all elements that have it (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styleEl = Utils.currentTab.window.document.getElementById('wd-display-aria'),
      styles = "*[role]:before { content: '(role=\"' attr(role) '\")' !important; }",
      msg = '';

    if (styleEl) {
      styleEl.remove();
      msg = 'Hid all displayed ARIA roles';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-display-aria';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode(styles));
      Utils.currentTab.window.document.head.appendChild(styleEl);
      msg = 'Displayed ARIA roles';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['display titles', 'dev display titles'],
  description: 'Display title attribute for all elements that have it (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styleEl = Utils.currentTab.window.document.getElementById('wd-display-title'),
      styles = "[title]:before {content: '(title=\"' attr(title) '\") ' !important;}",
      msg = '';

    if (styleEl) {
      styleEl.remove();
      msg = 'Hid all displayed title attributes';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-display-title';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode(styles));
      Utils.currentTab.window.document.head.appendChild(styleEl);
      msg = 'Displayed title attributes';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['outline absolute elements', 'dev outline absolute elements'],
  description: 'Outline absolutely positioned elements (based on Web Developer addon by chrispederick).',
  execute: function() {
    var itr = Utils.currentTab.window.document.createNodeIterator(Utils.currentTab.window.document.documentElement, Utils.currentTab.window.NodeFilter.SHOW_ELEMENT, null, false),
      node,
      computedStyle,
      abs,
      styleEl = Utils.currentTab.window.document.getElementById('wd-outline-abs'),
      n = 0,
      msg = '';

    if (styleEl) {
      Array.forEach(Utils.currentTab.window.document.querySelectorAll('.wd-outline-abs'), function(el) {
        el.classList.remove('wd-outline-abs');
        n++;
      });
      styleEl.remove();
      msg = 'Removed outline for ' + n + ' absolutely positioned elements';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-outline-abs';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode('.wd-outline-abs {outline: solid 1px red !important;}'));
      Utils.currentTab.window.document.head.appendChild(styleEl);

      while ((node = itr.nextNode()) !== null) {
        abs = Utils.currentTab.window.getComputedStyle(node, null).getPropertyCSSValue('position').cssText;
        if (abs && abs === 'absolute') {
          node.classList.add('wd-outline-abs');
          n++;
        }
      }

      msg = 'Outlined ' + n + ' absolutely positioned elements';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['outline floating elements', 'dev outline floating elements'],
  description: 'Outline floating elements (based on Web Developer addon by chrispederick).',
  execute: function() {
    var itr = Utils.currentTab.window.document.createNodeIterator(Utils.currentTab.window.document.documentElement, Utils.currentTab.window.NodeFilter.SHOW_ELEMENT, null, false),
      node,
      computedStyle,
      floated,
      styleEl = Utils.currentTab.window.document.getElementById('wd-outline-floated'),
      n = 0,
      msg = '';

    if (styleEl) {
      Array.forEach(Utils.currentTab.window.document.querySelectorAll('.wd-outline-floated'), function(el) {
        el.classList.remove('wd-outline-floated');
        n++;
      });
      styleEl.remove();
      msg = 'Removed outline for ' + n + ' floating elements';
    } else {

      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-outline-floated';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode('.wd-outline-floated {outline: solid 1px red !important;}'));
      Utils.currentTab.window.document.head.appendChild(styleEl);

      while ((node = itr.nextNode()) !== null) {
        floated = Utils.currentTab.window.getComputedStyle(node, null).getPropertyCSSValue('float').cssText;
        if (floated && floated !== 'none') {
          node.classList.add('wd-outline-floated');
          n++;
        }
      }

      msg = 'Outlined ' + n + ' floating elements';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['outline insecure elements', 'dev outline insecure elements'],
  description: 'Outline insecure elements (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styleEl = Utils.currentTab.window.document.getElementById('wd-outline-nonsecure'),
      styles =
      "img[src^=http\:], object[codebase^=http\:], object[src^=http\:] { outline: 1px solid #b94a48 !important; }" + "iframe[src^=http\:] { border: 1px solid #b94a48 !important; }";
      var msg = '';

    if (styleEl) {
      styleEl.remove();
      msg = 'Removed outline for insecure elements';
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = 'wd-outline-nonsecure';
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode(styles));
      Utils.currentTab.window.document.head.appendChild(styleEl);
      msg = 'Outlined insecure elements';
    }

    displayMessage({
      title: 'Dev',
      text: msg
    });
  }
});
