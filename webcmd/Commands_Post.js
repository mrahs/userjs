WebCmd.CmdUtils.createCommand({
  names: ['post'],
  desc: 'Post the URL of the current page to a web service.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(args) {
    var msg = '';
    var matches = this.contentUtils.find(args);
    if (matches.length === 0) {
      msg += 'Supported Services:';
      matches = Object.keys(this.contentUtils.services);
    } else {
      msg += 'Post current URL to first item from:';
    }
    return msg + '<ul style="list-style:none"><li>' +
      matches.join('</li><li>') +
      '</li></ul>';
  },
  executeContent: function(args) {
    if (!args) return;

    var matches = this.contentUtils.find(args);
    if (matches.length === 0) return;

    var service = this.contentUtils.services[matches[0]];
    WebCmd.CmdUtils.execUrlCommand(service.url, service.windowParams);
  },
  contentUtils: {
    find: function(query) {
      return Object.keys(this.services)
        .filter(function(item) {
          return item.toLowerCase().indexOf(query) >= 0;
        });
    },
    services: {
      Pinboard: {
        url: 'https://pinboard.in/add?url={URL}&desc={SELECTION}&title={TITLE}',
        /*https://pinboard.in/add?next=same&url={URL}&desc={SELECTION}&title={TITLE}*/
        windowParams: '' /*'toolbar=no,width=700,height=350'*/
      },
      PinboardReadLater: {
        url: 'https://pinboard.in/add?later=yes&noui=yes&jump=close&url={URL}&desc={SELECTION}&title={TITLE}',
        windowParams: '' /*'toolbar=no,width=100,height=100'*/
      },
      Delicious: {
        url: 'https://delicious.com/save?source=bookmarklet&v=1.1&url={URL}&note={SELECTION}&title={TITLE}',
        windowParams: 'new' /*'toolbar=no,width=700,height=350'*/
      },
      WaybackMachine: {
        url: 'https://web.archive.org/web/*/{URL}',
        windowParams: 'new'
      },
      WaybackMachineSave: {
        url: 'https://web.archive.org/save/{URL}',
        windowParams: 'new'
      },
      SaveFromNet: {
        url: 'http://savefrom.net/?url={URL}',
        windowParams: ''
      },
      KeepVid: {
        url: 'http://keepvid.com/?url={URL}',
        windowParams: ''
      },
      BuiltWith: {
        url: 'http://builtwith.com/?{URL}',
        windowParams: 'new'
      },
      W3Bin: {
        url: 'http://w3bin.com/domain/{HOST}',
        windowParams: 'new'
      },
      BugMeNot: {
        url: 'http://bugmenot.com/view/{HOST}',
        windowParams: 'new'
      },
      Login2Me: {
        url: 'http://login2.me/#{HOST}',
        windowParams: 'new'
      },
      SoundCloudLoad: {
        url: 'http://soundcloudload.com{PATH}',
        windowParams: ''
      },
      FilterBypass: {
        url: 'https://www.filterbypass.me/anonsurf.php?u={URL}',
        windowParams: ''
      },
      GoogleAr: {
        url: '//translate.google.com/#auto|ar|{SELECTION}',
        windowParams: 'new'
      },
      SimilarSites: {
        url: 'http://www.similarsites.com/site/{HOST}',
        windowParams: 'new'
      },
      GoogleRelated: {
        url: 'http://www.google.com/search?q=related:{URL}',
        windowParams: 'new'
      },
      ArchiveIs: {
        url: 'https://archive.is/{URL}',
        windowParams: 'new'
      },
      ArchiveIsSave: {
        url: 'https://archive.is/?run=1&url={URL}',
        windowParams: 'new'
      },
      Google: {
        url: 'https://www.google.com/webhp?#q={URL}&btnI=I',
        windowParams: 'new'
      }
    }
  }
});

WebCmd.CmdUtils.createCommand({
  names: ['search'],
  desc: 'Search the web for provided or selected text.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(args) {
    var msg = '';
    var keywords = args.split(/\s+/);
    var matches = this.contentUtils.find(args);

    if (keywords[0]) {
      msg += 'Search "' + (keywords[1] || '&lt;selected text&gt;') + '" using first engine from:';
    } else {
      msg += 'Supported Engines:';
    }

    return msg + '<ul style="list-style:none"><li>' +
      matches.join('</li><li>') +
      '</li></ul>';
  },
  execute: function(args) {
    if (!args) return;

    var term = args.split(/\s+/)[1];
    if (!term) {
      return WebCmd.CmdUtils.ExecFlow.continue;
    }

    var matches = this.contentUtils.find(args);
    if (matches.length === 0) return;

    this.contentUtils.search(this.contentUtils.engines[matches[0]], term);
  },
  executeContent: function(args) {
    if (!args) return;

    var matches = this.contentUtils.find(args);
    if (matches.length === 0) return;

    this.contentUtils.search(this.contentUtils.engines[matches[0]], args.split(/\s+/)[1]);
  },
  contentUtils: {
    find: function(query) {
      query = query.split(/\s+/)[0];
      return Object.keys(this.engines)
        .filter(function(item) {
          return item.toLowerCase().indexOf(query) >= 0;
        });
    },
    engines: {
      DuckDuckGo: {
        url: 'https://duckduckgo.com/?q={TERM}'
      },
      Google: {
        url: 'https://google.com/search?q={TERM}'
      },
      Bing: {
        url: 'https://www.bing.com/search?q={TERM}'
      },
      Yahoo: {
        url: 'https://search.yahoo.com/?q={TERM}'
      },
      DisconnectGoogle: {
        url: 'https://search.disconnect.me/searchTerms/search?ses_nojs=Google&ses=Google&query={TERM}'
      },
      DisconnectBing: {
        url: 'https://search.disconnect.me/searchTerms/search?ses_nojs=Bing&ses=Bing&query={TERM}'
      },
      DisconnectYahoo: {
        url: 'https://search.disconnect.me/searchTerms/search?ses_nojs=Yahoo&ses=Yahoo&query={TERM}'
      },
      Delicious: {
        url: 'https://delicious.com/search/{TERM}'
      },
      DeliciousByTags: {
        url: 'https://delicious.com/tag/{TERM}'
      },
      MyDelicious: {
        url: 'https://delicious.com/me/search/{TERM}'
      },
      MyDeliciousByTag: {
        url: 'https://delicious.com/me/{TERM}'
      },
      Pinboard: {
        url: 'https://pinboard.in/search/?query={TERM}'
      },
      MyPinboard: {
        url: 'https://pinboard.in/search/u:ahspw?query={TERM}'
      },
      Jargonism: {
        url: 'http://jargonism.com/search?q={TERM}'
      }
    },
    search: function(engine, term) {
      if (!term) {
        term = document.getSelection().toString();
      }

      if (!term) {
        return;
      }

      WebCmd.Utils.Tabs.new(engine.url.replace('{TERM}', term));
    }
  }
});
