feed.title  = _("Tabs");
feed.author = _("Anas H. Sulaiman (AHS.PW)");


CmdUtils.CreateCommand({
  names: ['copy urls', 'cpurls'],
  description: 'Copies the URLs from all opened tabs in the active window.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var urls = [];
    for (var tab of Utils.currentTabs) {
      urls.push(tab.document.location);
    }

    CmdUtils.copyToClipboard(urls.join('\n'));

    displayMessage({
      title: "Tabs",
      text: 'Copied ' + urls.length + ' URLs to clipboard'
    });
  },
  preview: function(pbl, args) {
    var html = '<ul>';
    for (var tab of Utils.currentTabs) {
      html += '<li>' + tab.document.title + ': <pre>' + tab.document.location.href + '</pre></li>';
    }
    html += '</ul>';
    pbl.innerHTML = html;
  }
});

CmdUtils.CreateCommand({
  names: ['open urls', 'opurl'],
  description: 'Opens all URLs found in clipboard.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var urls = this._find();
    if (urls.length === 0) {
      displayMessage({
        title: 'Tabs',
        text: 'No URLs in clipboard!'
      });
      return;
    }

    var instant = urls.slice(0, 10);
    var delayed = urls.slice(10);
    var me = this;
    instant.forEach(function(url) {
      Utils.openUrlInBrowser(url);
    });
    delayed.forEach(function(url) {
      me._openUrlInDelayedTab(url);
    });
    displayMessage({
      title: 'Tabs',
      text: 'Opened ' + urls.length + ' URLs'
    });
  },
  preview: function(pbl, args) {
    var urls = this._find();
    if (urls.length === 0) {
      pbl.innerHTML = '<span>No URLs in clipboard!</span>';
      return;
    }

    var html = '<ul><li><pre>' + urls.join('</pre></li><li><pre>') + '</pre></li></ul>';

    pbl.innerHTML = html;
  },
  _isValidUrl: function(url) {
    try {
      Utils.uri(url)
      return true;
    } catch (ex) {
      return false;
    }
  },
  _find: function() {
    var openedUrls = [];
    var cbContent = Utils.clipboard.text.trim();
    if (cbContent === '') {
      return [];
    }

    var urls = cbContent.split(/\s+/);

    for (var url of urls) {
      if (openedUrls.indexOf(url) >= 0) {
        continue;
      }
      if (!this._isValidUrl(url)) {
        continue;
      }

      openedUrls.push(url);
    }

    return openedUrls;
  },
  _openUrlInDelayedTab: function(url) {
    var tabbrowser = Utils.currentChromeWindow.gBrowser;
    var tab = tabbrowser.addTab(null, {
      relatedToCurrent: false
    });
    var ss = (Cc["@mozilla.org/browser/sessionstore;1"].getService(Ci.nsISessionStore));
    ss.setTabState(tab, JSON.stringify({
      entries: [{
        title: url
      }],
      userTypedValue: url,
      userTypedClear: 2,
      lastAccessed: tab.lastAccessed,
      index: 1,
      image: ''
    }));
  }
});
