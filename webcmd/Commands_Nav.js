WebCmd.CmdUtils.createCommand({
  names: ['githubpro'],
  desc: 'Open GitHub project of the current github.io page.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  executeContent: function() {
    var win = window;
    if (win.location.href.indexOf('github.io') > 0) {
      win.location = 'https://github.com/' + 
        win.location.host.substring(
          0,
          win.location.host.indexOf('github.io')-1
        ) + win.location.pathname;
    } else {
      WebCmd.Utils.notify({
        title: 'Navigation',
        message: 'Not on github.io'
      });
    }
  }
});

WebCmd.CmdUtils.createCommand({
  names: ['nav'],
  desc: 'Navigate the current tab\'s history and URL.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  previewContent: function() {
    return 'Supported Destinations: <ul style="list-style:none"><li>' + 
      Object.keys(this.contentUtils.dests).join('</li><li>') + 
      '</li></ul>';
  },
  executeContent: function(args) {
    if (!args) return;

    var win = window;
    
    if ('first'.indexOf(args) === 0) {
      win.history.go(-win.history.length + 1);
    } else if ('top'.indexOf(args) === 0) {
      win.location.pathname = '';
    } else if ('referrer'.indexOf(args) === 0) {
      if (win.document.referrer) {
          win.location = win.document.referrer;
        }
    } else if ('decrement'.indexOf(args) === 0) {
      this.contentUtils.navDec();
    } else if ('increment'.indexOf(args) === 0) {
      this.contentUtils.navInc();
    } else if ('up'.indexOf(args) === 0) {
      this.contentUtils.navUp();
    }
  },
  contentUtils: {
    dests: {
      First:'first',
      Referrer:'ref',
      Decrement:'dec', 
      Increment:'inc',
      Top:'top',
      Up:'up'
    },
    navDec: function() {
      var win = window;
      var href = decodeURIComponent(win.location.href);
      var match = href.match(/(\d+)\D*$/);
      if (!match) {
        return;
      }
      var start = match.index;
      var end = start + match[1].length;
      var num = "" + (parseInt(match[1], 10) - 1);
      while (num.length < match[1].length) {
        num = "0" + num;
      }
      win.location.href = href.slice(0, start) + num + href.slice(end);
    },
    navInc: function() {
      var win = window;
      var href = decodeURIComponent(win.location.href);
      var match = href.match(/(\d+)\D*$/);
      if (!match) {
        return;
      }
      var start = match.index;
      var end = start + match[1].length;
      var num = "" + (parseInt(match[1], 10) + 1);
      while (num.length < match[1].length) {
        num = "0" + num;
      }
      win.location.href = href.slice(0, start) + num + href.slice(end);
    },
    navUp: function() {
      var win = window;
      path = win.location.pathname;
      if (path === '/') {
        return;
      } else if (path.charAt(path.length - 1) === '/') {
        win.location = '..';
      } else {
        win.location = '.';
      }
    }
  }
});


/*CmdUtils.CreateCommand({
  names: ['nav'],
  description: 'Navigate the current tab\'s history and URL.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  help: '\
    <ul style="list-style-image:none">\
    <li>Use accesskey or click to navigate.</li>\
    <li>Type to filter, then execute to navigate.</li>\
    </ul>',
  arguments: {
    'object destination': noun_arb_text
  },
  execute: function(args) {
    if (!args.object.text) {
      return;
    }

    var re = Utils.regexp('^\\d+$');
    if (re.test(args.object.text)) {
      var index = parseInt(args.object.text, 10);
      if (index > 0 && index <= this._dests.length) {
        this._nav(this._dests[index - 1].id, window);
      }
      return;
    }

    var matchedDists = this._dests.filter(function(dist) {
      return dist.name.toLowerCase().indexOf(args.object.text.toLowerCase()) === 0;
    });
    if (matchedDists.length > 0) {
      this._nav(matchedDists[0].id, window);
    }
  },
  preview: function(pbl, args) {
    var me = this;
    var matchedDists = me._dests.filter(function(dist) {
      return dist.name.toLowerCase().indexOf(args.object.text.toLowerCase()) === 0;
    });
    CmdUtils.previewList(pbl, matchedDists.map(me._html), function(i, ev) {
      me._nav(matchedDists[i].id, window);
    });
  },
  _html: function({name}) {
    return '<span>' + name + '</span>';
  },
  _nav: function(id, win) {
    var href,
        match,
        start,
        end,
        num,
        path;
    switch (id) {
      case 'first':
        win.history.go(-win.history.length + 1);
        break;
      case 'ref':
        if (win.document.referrer) {
          win.location = win.document.referrer;
        }
        break;
      case 'dec':
        href = decodeURIComponent(win.location.href);
        match = href.match(/(\d+)\D*$/);
        if (!match) {
          return;
        }
        start = match.index;
        end = start + match[1].length;
        num = "" + (parseInt(match[1], 10) - 1);
        while (num.length < match[1].length) {
          num = "0" + num;
        }
        win.location.href = href.slice(0, start) + num + href.slice(end);
        break;
      case 'top':
        win.location.pathname = '';
        break;
      case 'up':
        path = win.location.pathname;
        if (path === '/') {
          return;
        } else if (path.charAt(path.length - 1) === '/') {
          win.location = '..';
        } else {
          win.location = '.';
        }
        break;
      case 'inc':
        href = decodeURIComponent(win.location.href);
        match = href.match(/(\d+)\D*$/);
        if (!match) {
          return;
        }
        start = match.index;
        end = start + match[1].length;
        num = "" + (parseInt(match[1], 10) + 1);
        while (num.length < match[1].length) {
          num = "0" + num;
        }
        window.location.href = href.slice(0, start) + num + href.slice(end);
        break;
    }
  },
  _dests: [{
    id: 'first',
    name: 'First'
  }, {
    id: 'ref',
    name: 'Referrer'
  }, {
    id: 'top',
    name: 'Top'
  }, {
    id: 'up',
    name: 'Up'
  }, {
    id: 'dec',
    name: 'Decrement'
  }, {
    id: 'inc',
    name: 'Increment'
  }]
});*/


