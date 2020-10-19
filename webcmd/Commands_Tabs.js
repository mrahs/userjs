WebCmd.CmdUtils.createCommand({
  names: ['copy urls'],
  desc: 'Copies the URLs from all opened tabs in the active window.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    WebCmd.Utils.Tabs.currentWindow(function(tabs){
      WebCmd.Utils.Clipboard.write(
        tabs.map(function(tab){return tab.url;}).join('\n'),
        function() {
          WebCmd.Utils.notify({
            title: 'Tabs',
            message: 'Copied ' + tabs.length + ' URLs to clipboard'
          });
      });
    });
  },
  preview: function() {
    WebCmd.Utils.Tabs.currentWindow(function(tabs){
      WebCmd.Utils.preview(
        '<ul><li>' +
        tabs.map(function(tab){return '[' + tab.title + '](' + tab.url + ')';}).join('</li><li>') +
        '</li></ul>'
      );
    });
  }
});

WebCmd.CmdUtils.createCommand({
  names: ['open urls'],
  desc: 'Opens all URLs found in clipboard.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var self = this;
    WebCmd.Utils.Clipboard.read(function(text) {
      var urls = self._find(text);
      if (urls.length === 0) {
        WebCmd.Utils.notify({
          title: 'Tabs',
          message: 'No URLs in clipboard!'
        });
        return;
      }

      var instant = urls.slice(0, 10);
      var delayed = urls.slice(10);

      instant.forEach(function(url) {
        WebCmd.Utils.Tabs.new(url);
      });
      delayed.forEach(function(url) {
        WebCmd.Utils.Tabs.new(url);
      });

      WebCmd.Utils.notify({
        title: 'Tabs',
        message: 'Opened ' + urls.length + ' URLs'
      });
    });
  },
  preview: function() {
    var self = this;
    WebCmd.Utils.Clipboard.read(function(text) {
        var urls = self._find(text);
        if (urls.length === 0) {
          WebCmd.Utils.preview('<span>No URLs in clipboard!</span>');
          return;
        }
        WebCmd.Utils.preview('<ul><li><pre>' + urls.join('</pre></li><li><pre>') + '</pre></li></ul>');
    });
  },
  _find: function(text) {
    text = text.trim();
    var found = [];
    if (text === '') {
      return found;
    }

    /*
      Protocol:      ([a-z]+)
      ://            (?::\/\/)
      Domain:        ([a-z0-9](?:[a-z0-9]|\.)+[a-z]{2,})
      Port:          (?::([0-9]+))?
      Path:          (\/\S*?)?
      Parameters:    (\\??\S*)
      $
    */
    var regex = /([a-z]+)(?::\/\/)([a-z0-9](?:[a-z0-9]|\.)+[a-z]{2,})(?::([0-9]+))?(\/\S*?)?(\\??\S*)/ig;
    var urls = text.match(regex);

    for (var url of urls) {
      url = url.trim();
      if (url === '' || found.indexOf(url) >= 0) {
        continue;
      }
      
      found.push(url);
    }

    return found;
  }
});

WebCmd.CmdUtils.createCommand({
  names: ['clear tabs'],
  desc: 'close all open tabs without closing the browser.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    WebCmd.Utils.Tabs.currentWindow(function(tabs){
      WebCmd.Utils.Tabs.new('chrome://newtab');
      WebCmd.Utils.Tabs.close(tabs.map(function(tab){return tab.id;}));
    });
  }
});