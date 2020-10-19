feed.title  = _("Performance");
feed.author = _("Anas H. Sulaiman (AHS.PW)");

CmdUtils.CreateCommand({
  names: ['images', 'perf images'],
  description: 'Set images preferences (All, None, No_External)',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
    'object option': CmdUtils.NounType({
      All: 'all',
      None: 'none',
      NoExternal: 'no-ext',
      ToggleAnim: 'toggle-anim',
      Reload: 'reload'
    })
  },
  preview: function(pbl) {
    pbl.innerHTML = 'Supported Options: <ul style="list-style:none"><li>' + 
    this.arguments[0].nountype._list.map(function(obj){return obj.html;}).join('</li><li>') + 
    '</li></ul>';
  },
  execute: function({object: {data}}) {
    var msg = '';

    switch(data) {
      case 'all':
        Utils.prefs.set('permissions.default.image', 1);
        msg = 'Enabled All Images';
        break;
      case 'none':
        Utils.prefs.set('permissions.default.image', 2);
        msg = 'Disabled All Images';
        break;
      case 'no-ext':
        Utils.prefs.set('permissions.default.image', 3);
        msg = 'Disabled External Images';
        break;
      case 'toggle-anim':
        if (Utils.prefs.get('image.animation_mode') === 'normal') {
          Utils.prefs.set('image.animation_mode', 'none');
          msg = 'Disabled Image Animations';
        } else {
          Utils.prefs.set('image.animation_mode', 'normal');
          msg = 'Enabled Image Animations';
        }
        break;
      case 'reload':
        msg = this._reloadImages();
        break;
      default:
        /*Utils.prefs.set('permissions.default.image', (Utils.prefs.get('permissions.default.image') % 3)+1);*/
        msg = 'Nothing changed!';
    }

    displayMessage({
      title: 'Performance',
      text: msg
    });
  },
  _reloadImages: function() {
    var itr = Utils.currentTab.window.document.createNodeIterator(Utils.currentTab.window.document.documentElement, Utils.currentTab.window.NodeFilter.SHOW_ELEMENT, null, false),
      node,
      computedStyle,
      styleImage,
      nImg = 0,
      nBg = 0,
      t = false;

    function updateUrl(url) {
      if (url.indexOf('wdimgreload') >= 0) {
        return url.replace(/wdimgreload=\d+&?/, 'wdimgreload=' + new Date().getTime());
      } else {
        return url.indexOf('?') !== -1 ? url + '&wdimgreload=' + new Date().getTime() : url + '?wdimgreload=' + new Date().getTime();
      }
    }
    while ((node = itr.nextNode()) !== null) {
      if (node.tagName.toLowerCase() === 'img' || (node.tagName.toLowerCase() === 'input' && node.src && node.type && node.type.toLowerCase() === 'image')) {
        node.src = updateUrl(node.src);
        nImg++;
      } else {
        computedStyle = Utils.currentTab.window.getComputedStyle(node, null);
        if (!computedStyle) continue;

        t = false;
        styleImage = computedStyle.getPropertyCSSValue("background-image");
        if (styleImage && styleImage[0] && styleImage[0].primitiveType === Utils.currentTab.window.CSSPrimitiveValue.CSS_URI) {
          node.style.backgroundImage = 'url(' + updateUrl(styleImage[0].getStringValue()) + ')';
          t = true;
        }

        styleImage = computedStyle.getPropertyCSSValue("list-style-image");
        if (styleImage && styleImage[0] && styleImage[0].primitiveType === Utils.currentTab.window.CSSPrimitiveValue.CSS_URI) {
          node.style.listStyleImage = 'url(' + updateUrl(styleImage[0].getStringValue()) + ')';
          t = true;
        }

        if (t) {
          nBg++;
        }
      }
    }

    return 'Reloaded ' + nImg + ' images and ' + nBg + ' background images';
  }
});

CmdUtils.CreateCommand({
  names: ['newcache', 'perf newcache'],
  description: 'Use new cache backend',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
    'object option': CmdUtils.NounType({
      All: 'all',
      None: 'none',
      NoExternal: 'no-ext',
      ToggleAnim: 'toggle-anim',
      Reload: 'reload'
    })
  },
  preview: function(pbl) {
    pbl.innerHTML = 'New Cache Backend is ' + (Utils.prefs.get('browser.cache.use_new_backend') === 1 ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    
    var msg = '';
    if (Utils.prefs.get('browser.cache.use_new_backend') === 1) {
      Utils.prefs.reset('browser.cache.use_new_backend');
      msg = 'Disabled New Cache Backend';
    } else {
      Utils.prefs.set('browser.cache.use_new_backend', 1);
      msg = 'Enabled New Cache Backend';
    }

    displayMessage({
      title: 'Performance',
      text: msg
    });
  }
});


CmdUtils.CreateCommand({
  names: ['performance'],
  description: 'Set performance related settings. See: https://github.com/dfkt/firefox-tweaks/blob/master/user.js',
  help: '',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
    'object option': CmdUtils.NounType({
      'Use New Cache Backend': {
        key: ['browser.cache.use_new_backend'],
        good: [1]
      },
      'Disable Redundant Entries in URL Bar': {
        key: ['browser.urlbar.unifiedcomplete'],
        good: [false]
      },
      'Load Context Searches in Background Tab': {
        key: ['browser.search.context.loadInBackground'],
        good: [true]
      },
      'Disable Full Screen Warning': {
        key: ['full-screen-api.warning.delay', 'full-screen-api.warning.timeout'],
        good: [0, 0]
      },
      'Disable Full Screen URL Bar Animation': {
        key: ['browser.fullscreen.animate'],
        good: [false]
      },
      'Disable Tab Animation': {
        key: ['browser.tabs.animate'],
        good: [false]
      },
      'Disable Tab Closing Warning': {
        key: ['browser.tabs.warnOnClose', 'browser.tabs.warnOnCloseOtherTabs'],
        good: [false, false]
      },
      'Disable about:config Warning': {
        key: ['general.warnOnAboutConfig'],
        good: [false]
      },
      'Disable Tab Closing Popups': {
        key: ['dom.disable_beforeunload'],
        good: [true]
      },
      'Disable Disabling New Window Features': {
        key: [
          'dom.disable_window_open_feature.location',
          'dom.disable_window_open_feature.resizable',
          'dom.disable_window_open_feature.status'
        ],
        good: [true, true, true]
      },
      'Debloat New Tab Page': {
        key: [
          'browser.newtab.preload',
          'browser.newtab.url',
          'browser.newtabpage.directory.ping',
          'browser.newtabpage.directory.source',
          'browser.newtabpage.enabled',
          'browser.newtabpage.enhanced',
          'browser.newtabpage.introShown'
        ],
        good: [false, 'about:blank', '', '', false, false, true]
      },
      'Disable Auto Scroll': {
        key: ['general.autoScroll'],
        good: [false]
      },
      'Search As You Type': {
        key: ['accessibility.typeaheadfind', 'accessibility.typeaheadfind.flashBar'],
        good: [true, 0]
      },
      'Enable Eyedropper in Dev Tools': {
        key: ['devtools.command-button-eyedropper.enabled'],
        good: [true]
      },
      'Use Dark Theme for Dev Tools': {
        key: ['devtools.theme'],
        good: ['dark']
      },
      'Install Unsigned Addons': {
        key: ['xpinstall.signatures.required'],
        good: [false]
      },
      'Fast Security Delay for Addon Installation': {
        key: ['security.dialog_enable_delay'],
        good: [400]
      },
      'Disable Flash Notification': {
        key: ['plugin.state.flash', 'plugins.notifyMissingFlash'],
        good: [1, false]
      }
    })
  },
  preview: function(pbl, {object:{text,data}}) {
    if (!text) {
      var style = '<style>li{cursor:pointer;}li:hover{outline: 1px solid; -moz-outline-radius: 8px}.good{color:green;}.bad{color:red;}</style>';
      var self = this;
      pbl.innerHTML = this._get_status() + style;
      var ul = pbl.firstChild;
      var options = this._get_options();
      ul.addEventListener('click', function(ev) {
        self._toggle(options[parseInt(ev.target.getAttribute('index'))]);
        ev.target.className = ev.target.className === 'good' ? 'bad' : 'good';
      });
      return;
    }
    
    var isEnabled = this._is_enabled(data);
    pbl.innerHTML = text + ' is ' + this._get_enabled_text(isEnabled);
  },
  execute: function({object:{text,data}}) {
    this._toggle({'name':text,'data':data});
  },
  _is_enabled: function(data) {
    var i, enabled = true;
    for(i = 0; i < data.key.length; i++) {
      enabled = enabled && Utils.prefs.get(data.key[i]) === data.good[i];
    }
    return enabled;
  },
  _get_enabled_text: function(enabled) {
    return enabled ? 'On' : 'Off';
  },
  _get_options: function() {
    return this.arguments[0].nountype._list.map(function(obj){return {name:obj.html, data:obj.data};});
  },
  _get_status: function() {
    var options = this._get_options();
    var list = '<ul>';
    for (var i = 0; i < options.length; i++) {
      good = this._is_enabled(options[i].data);
      list += '<li class="' + (good ? 'good' : 'bad') + '" index="' + i + '">' + options[i].name + '</li>';
    }
    list += '</ul>';
    return list;
  },
  _toggle: function({name,data}) {
    var isEnabled = this._is_enabled(data);

    for (var i = 0; i < data.key.length; i++) {
      if (typeof data.good[i] === 'boolean') {
        Utils.prefs.set(data.key[i], (isEnabled ? !data.good[i] : data.good[i]));
      } else {
        if (isEnabled) {
          Utils.prefs.reset(data.key[i]);
        } else {
          Utils.prefs.set(data.key[i], data.good[i]);
        }
      }
    }

    displayMessage({
      title: 'Performance',
      text: name + ' is now ' + this._get_enabled_text(!isEnabled)
    });
  }
});