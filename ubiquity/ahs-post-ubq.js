feed.title  = _("Post to Web Servics");
feed.author = _("Anas H. Sulaiman (AHS.PW)");

CmdUtils.CreateCommand({
  names: ['post to', 'pst'],
  description: 'Post the URL of the current page to a web service.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
    'object service name': CmdUtils.NounType({
      Pinboard: {
        url: 'https://pinboard.in/add?url={URL}&description={DESC}&title={TITLE}', /*https://pinboard.in/add?next=same&url={URL}&description={DESC}&title={TITLE}*/
        windowParams: 'this'/*'toolbar=no,width=700,height=350'*/
      },
      PinboardReadLater: {
        url: 'https://pinboard.in/add?later=yes&noui=yes&jump=close&url={URL}&description={DESC}&title={TITLE}',
        windowParams: 'this'/*'toolbar=no,width=100,height=100'*/
      },
      Delicious: {
        url: 'https://delicious.com/save?source=bookmarklet&v=1.1&url={URL}&note={DESC}&title={TITLE}',
        windowParams: 'toolbar=no,width=700,height=350'
      },
      WaybackMachine: {
        url: 'https://web.archive.org/web/*/{URL}',
        windowParams: ''
      },
      WaybackMachineSave: {
        url: 'https://web.archive.org/save/{URL}',
        windowParams: 'this'
      },
      SaveFromNet: {
        url: 'http://savefrom.net/?url={URL}',
        windowParams: 'this'
      },
      KeepVid: {
        url: 'http://keepvid.com/?url={URL}',
        windowParams: 'this'
      },
      BuiltWith: {
        url: 'http://builtwith.com/?{URL}',
        windowParams: ''
      },
      W3Bin: {
        url: 'http://w3bin.com/domain/{HOST}',
        windowParams: ''
      },
      BugMeNot: {
        url: 'http://bugmenot.com/view/{HOST}',
        windowParams: ''
      },
      Login2Me: {
        url: 'http://login2.me/#{HOST}',
        windowParams: ''
      },
      SoundCloudLoad: {
        url: 'http://soundcloudload.com{PATH}',
        windowParams: 'this'
      },
      FilterBypass: {
        url: 'https://www.filterbypass.me/anonsurf.php?u={URL}',
        windowParams: 'this'
      },
      GoogleAr: {
        url: '//translate.google.com/#auto|ar|{DESC}',
        windowParams: ''
      },
      SimilarSites: {
        url: 'http://www.similarsites.com/site/{HOST}',
        windowParams: ''
      },
      GoogleRelated: {
        url: 'http://www.google.com/search?q=related:{URL}',
        windowParams: ''
      },
      ArchiveIs: {
        url: 'https://archive.is/{URL}',
        windowParams: ''
      },
      ArchiveIsSave: {
        url: 'https://archive.is/?run=1&url={URL}',
        windowParams: ''
      },
      Google: {
        url: 'https://www.google.com/webhp?#q={URL}&btnI=I',
        windowParams: ''
      }
    })
  },
  preview: function(pbl) {
    pbl.innerHTML = 'Supported Services: <ul style="list-style:none"><li>' + 
    this.arguments[0].nountype._list.map(function(obj){return obj.html;}).join('</li><li>') + 
    '</li></ul>';
  },
  execute: function({object:{data}}) {
    if (!data) {
      return;
    }

    this._post(data, Utils.currentTab.window);
  },
  _post: function(service, win) {
    var url = win.location.href;
    var host = win.location.hostname;
    var path = win.location.pathname;
    var title = encodeURIComponent(win.document.title);
    var selection = encodeURIComponent(win.document.getSelection().toString());
    var serviceUrl = service.url;

    serviceUrl = serviceUrl.replace('{URL}', url);
    serviceUrl = serviceUrl.replace('{HOST}', host);
    serviceUrl = serviceUrl.replace('{PATH}', path);
    serviceUrl = serviceUrl.replace('{TITLE}', title);
    serviceUrl = serviceUrl.replace('{DESC}', selection);

    switch (service.windowParams) {
      case 'this':
        win.location = serviceUrl;
        /*win.open(serviceUrl, '_self');*/
        break;
      case '':
        Utils.openUrlInBrowser(serviceUrl);
        break;
      default:
        win.open(serviceUrl, service.name + ' < ' + url, service.windowParams);
    }
  }
});

CmdUtils.CreateCommand({
  names: ['srch'],
  description: 'Search the web for provided or selected text.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: [{
    role: 'object',
    nountype: noun_arb_text,
    label: 'search term'
  }, {
    role: 'instrument',
    nountype: CmdUtils.NounType({
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
    }),
    label: 'search engine'
  }],
   preview: function(pbl) {
    pbl.innerHTML = 'Supported Engines: <ul style="list-style:none"><li>' + 
    this.arguments[1].nountype._list.map(function(obj){return obj.html;}).join('</li><li>') + 
    '</li></ul>';
  },
  execute: function({object, instrument}) {
    if (!instrument.data || !object.text) {
      return;
    }

    this._search(instrument.data, object.text);
  },
  _search: function(engine, term) {
    if (!term) {
      term = Utils.currentTab.window.document.getSelection().toString();
    }

    if (!term) {
      return;
    }

    Utils.openUrlInBrowser(engine.url.replace('{TERM}', term));
  }
});
