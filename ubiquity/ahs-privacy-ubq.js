feed.title  = _("Privacy");
feed.author = _("Anas H. Suliman (AHS.PW)");

CmdUtils.CreateCommand({
  names: ['privacy'],
  description: 'Set privacy related settings. See<ul><li>https://github.com/dfkt/firefox-tweaks/blob/master/user.js</li><li>https://addons.mozilla.org/en-US/firefox/addon/privacy-settings/</li></ul>',
  help: '',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
    'object option': CmdUtils.NounType({
      'Plugins Click To Play': {
        key: ['plugins.click_to_play'],
        good: [true]
      },
      'Hide Platform Details': {
        key: [
          'general.platform.override', 
          'general.oscpu.override', 
          'general.buildID.override'
        ],
        good: ['','','']
      },
      'Disable WebRTC': {
        key: [
          'media.peerconnection.enabled', 
          'media.peerconnection.use_document_iceservers', 
          'media.navigator.enabled', 
          'media.getusermedia.screensharing.enabled', 
          'media.getusermedia.screensharing.allowed_domains'
        ],
        good: [false, false, false, false, '']
      },
      'Disable Java': {
        key: ['security.enable_java'],
        good: [false]
      },
      'Disable JavaScript': {
        key: ['javascript.enabled'],
        good: [false]
      },
      'Disable asm.js': {
        key: ['javascript.options.asmjs'],
        good: [false]
      },
      'Disable WebSocket': {
        key: ['network.websocket.enabled'],
        good: [false]
      },
      'Disable Link Prefetch': {
        key: ['network.prefetch-next'],
        good: [false]
      },
      'Disable Beacons': {
        key: ['beacon.enabled'],
        good: [false]
      },
      'Disable Pings': {
        key: ['browser.send_pings', 'browser.send_pings.require_same_host'],
        good: [false, true]
      },
      'Tracking Protection': {
        key: ['privacy.trackingprotection.enabled', 'privacy.donottrackheader.enabled', 'privacy.donottrackheader.value'],
        good: [true, true, 1]
      },
      'Disable Hello': {
        key: [
          'loop.enabled',
          'loop.CSP',
          'loop.feedback.baseUrl',
          'loop.oauth.google.scope',
          'loop.server'
        ],
        good: [false, '' ,'', '', '']
      },
      'Disable Pocket': {
        key: [
          'browser.pocket.enabled',
          'browser.pocket.api',
          'browser.pocket.oAuthConsumerKey',
          'browser.pocket.site'
        ],
        good: [false, '', '', '']
      },
      'Disable Social Services': {
        key: [
          'social.directories',
          'social.remote-install.enabled',
          'social.share.activationPanelEnabled',
          'social.shareDirectory',
          'social.toast-notifications.enabled',
          'social.whitelist'
        ],
        good: ['', false, false, '', false, '']
      },
      'Disable Reader': {
        key: ['reader.parse-on-load.enabled'],
        good: [false]
      },
      'Disable Encrypted Media Codecs': {
        key: [
          'media.eme.enabled', 
          'media.gmp-eme-adobe.enabled',
          'media.gmp-eme-adobe.autoupdate',
          'media.eme.apiVisible',
          'browser.eme.ui.enabled'
        ],
        good: [false, false, false, false ,false]
      },
      'Disable Google Checks': {
        key: [
          'browser.safebrowsing.enabled',
          'browser.safebrowsing.downloads.enabled',
          'browser.safebrowsing.downloads.remote.enabled',
          'browser.safebrowsing.malware.enabled',
          'browser.safebrowsing.provider.google.appRepURL',
          'browser.safebrowsing.provider.google.gethashURL',
          'browser.safebrowsing.provider.google.lists',
          'browser.safebrowsing.provider.google.reportURL',
          'browser.safebrowsing.provider.google.updateURL',
          'browser.safebrowsing.provider.mozilla.gethashURL',
          'browser.safebrowsing.provider.mozilla.updateURL',
          'browser.safebrowsing.reportMalwareMistakeURL',
          'browser.safebrowsing.reportPhishMistakeURL',
          'browser.safebrowsing.reportPhishURL'
        ],
        good: [false, false, false, false, '', '', '', '', '', '', '', '', '', '']
      },
      'Disable Telemetry': {
        key: [
          'toolkit.telemetry.enabled', 
          'toolkit.telemetry.archive.enabled', 
          'toolkit.telemetry.cachedClientID', 
          'toolkit.telemetry.previousBuildID',
          'toolkit.telemetry.server',
          'toolkit.telemetry.unified'
        ],
        good: [false, false, '', '', '', false]
      },
      'Disable Clipboard Events': {
        key: ['dom.event.clipboardevents.enabled'],
        good: [false]
      },
      'Disable Context Menu Events': {
        key: ['dom.event.contextmenu.enabled'],
        good: [false]
      },
      'Disable Battery API': {
        key: ['dom.battery.enabled'],
        good: [false]
      },
      'Disable Gamepad API': {
        key: ['dom.gamepad.enabled'],
        good: [false]
      },
      'Disable Local Storage': {
        key: ['dom.storage.enabled'],
        good: [false]
      },
      'Disable Navigation Timing API': {
        key: ['dom.enable_performance'],
        good: [false]
      },
      'Disable Resource Timing API': {
        key: ['dom.enable_resource_timing'],
        good: [false]
      },
      'Disable Network Information API': {
        key: ['dom.netinfo.enabled'],
        good: [false]
      },
      'Disable Cell Broadcasting API': {
        key: ['dom.cellbroadcast.enabled'],
        good: [false]
      },
      'Disable Web Telephony API': {
        key: ['dom.telephony.enabled'],
        good: [false]
      },
      'Disable Vibrator API': {
        key: ['dom.vibrator.enabled'],
        good: [false]
      },
      'Disable VR API': {
        key: ['dom.vr.enabled', 'dom.vr.oculus.enabled', 'dom.vr.oculus050.enabled'],
        good: [false, false, false]
      },
      'Disable Web Notifications API': {
        key: ['dom.webnotifications.enabled', 'dom.webnotifications.serviceworker.enabled'],
        good: [false, false]
      },
      'Disable Search Suggestions': {
        key: ['browser.search.suggest.enabled'],
        good: [false]
      },
      'Disable Speach Recognition API': {
        key: ['media.webspeech.recognition.enable'],
        good: [false]
      },
      'Disable History': {
        key: ['places.history.enabled'],
        good: [false]
      },
      'Safe Negotiation': {
        key: [
          'security.ssl.require_safe_negotiation',
          'security.ssl.treat_unsafe_negotiation_as_broken',
          'security.tls.unrestricted_rc4_fallback',
          'security.ssl.errorReporting.enabled'
        ],
        good: [true, true, false, false]
      },
      'Use Strong Cipher Suites': {
        key: [
          'security.ssl3.dhe_rsa_aes_128_sha',
          'security.ssl3.dhe_rsa_aes_256_sha',
          'security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256',
          'security.ssl3.ecdhe_ecdsa_aes_128_sha',
          'security.ssl3.ecdhe_ecdsa_aes_256_sha',
          'security.ssl3.ecdhe_ecdsa_rc4_128_sha',
          'security.ssl3.ecdhe_rsa_aes_128_gcm_sha256',
          'security.ssl3.ecdhe_rsa_aes_128_sha',
          'security.ssl3.ecdhe_rsa_aes_256_sha',
          'security.ssl3.ecdhe_rsa_rc4_128_sha',
          'security.ssl3.rsa_aes_128_sha',
          'security.ssl3.rsa_aes_256_sha',
          'security.ssl3.rsa_des_ede3_sha',
          'security.ssl3.rsa_rc4_128_md5',
          'security.ssl3.rsa_rc4_128_sha'
        ],
        good: [false, false, true, false, true, false, true, false, true, false, true, true, false, false, false]
      },
      'Limit Fonts': {
        key: ['browser.display.use_document_fonts'],
        good: [false]
      },
      'Disable SVG OpenType': {
        key: ['gfx.font_rendering.opentype_svg.enabled'],
        good: [false]
      },
      'Disable Health Reports': {
        key: [
          'datareporting.healthreport.service.enabled',
          'datareporting.healthreport.uploadEnabled',
          'datareporting.healthreport.about.reportUrl',
          'datareporting.healthreport.about.reportUrlUnified',
          'datareporting.healthreport.documentServerURI',
          'datareporting.healthreport.infoURL',
          'datareporting.healthreport.logging.consoleEnabled',
          'datareporting.policy.dataSubmissionEnabled',
          'datareporting.policy.dataSubmissionEnabled.v2'
        ],
        good: [false, false, '', '', '', '', false, false, false]
      },
      'Disable PDF.js': {
        key: ['pdfjs.disabled', 'pdfjs.enableWebGL'],
        good: [true, false]
      },
      'Disable CSS Visited Links Style': {
        key: ['layout.css.visited_links_enabled'],
        good: [false]
      },
      'Block Active Mixed Content': {
        key: ['security.mixed_content.block_active_content'],
        good: [true]
      },
      'Block Passive Mixed Content': {
        key: ['security.mixed_content.block_display_content'],
        good: [true]
      },
      'Public Key Pinning for CAs': {
        key: ['security.cert_pinning.enforcement_level'],
        good: [2]
      },
      'Reject SHA1 Certs': {
        key: ['security.pki.sha1_enforcement_level'],
        good: [1]
      },
      'Disable Location Services': {
        key: ['geo.enabled', 'geo.wifi.uri'],
        good: [false, '']
      },
      'Disable DNS Prefetch': {
        key: ['network.dns.disablePrefetch', 'network.dns.disablePrefetchFromHTTPS'],
        good: [true, true]
      },
      'Disable Face Detection': {
        key: ['camera.control.face_detection.enabled'],
        good: [false]
      },
      'Disable Sensors': {
        key: ['device.sensors.enabled'],
        good: [false]
      },
      'Disable WebGL': {
        key: ['webgl.disabled', 'webgl.disable-extensions'],
        good: [true, true]
      },
      'Disable Referrer': {
        key: ['network.http.sendSecureXSiteReferrer', 'network.http.sendRefererHeader'],
        good: [false, 0]
      },
      'Disable DNS Cache': {
        key: ['network.dnsCacheExpiration'],
        good: [0]
      },
      'Disable Disk Cache': {
        key: ['browser.cache.disk.enable'],
        good: [false]
      },
      'Disable Memory Cache': {
        key: ['browser.cache.memory.enable'],
        good: [false]
      },
      'Disable Network Cache': {
        key: ['network.http.use-cache'],
        good: [false]
      },
      'Disable IPv6': {
        key: ['network.dns.disableIPv6', 'network.http.fast-fallback-to-IPv4'],
        good: [true, true]
      },
      'DNS Proxy': {
        key: ['network.proxy.socks_remote_dns'],
        good: [true]
      },
      'Disable Link Prefetch on Hover': {
        key: ['network.http.speculative-parallel-limit'],
        good: [0]
      },
      'Show Punycode': {
        key: ['network.IDN_show_punycode'],
        good: [true]
      },
      'Disable Geo-Targeting': {
        key: ['browser.search.geoSpecificDefaults', 'browser.search.geoSpecificDefaults.url', 'browser.search.geoip.url'],
        good: [false, '', '']
      },
      'Disable Crash Reporting': {
        key: ['breakpad.reportURL'],
        good: ['']
      },
      'Disable Heartbeat': {
        key: ['browser.selfsupport.url'],
        good: ['']
      },
      'Disable HTML5 Video Stats': {
        key: ['media.video_stats.enabled'],
        good: [true]
      },
      'Disable URL Trimming': {
        key: ['browser.urlbar.trimURLs'],
        good: [false]
      },
      'Remove Default Feed Content Handlers': {
        key: [
          'browser.contentHandlers.types.0.title',
          'browser.contentHandlers.types.0.type',
          'browser.contentHandlers.types.0.uri'
        ],
        good: ['','','']
      },
      'Remove Default Website Protocol Handlers': {
        key: [
          'gecko.handlerService.schemes.irc.0.name',
          'gecko.handlerService.schemes.irc.0.uriTemplate',
          'gecko.handlerService.schemes.ircs.0.name',
          'gecko.handlerService.schemes.ircs.0.uriTemplate',
          'gecko.handlerService.schemes.mailto.0.name',
          'gecko.handlerService.schemes.mailto.0.uriTemplate',
          'gecko.handlerService.schemes.mailto.1.name',
          'gecko.handlerService.schemes.mailto.1.uriTemplate',
          'gecko.handlerService.schemes.webcal.0.name',
          'gecko.handlerService.schemes.webcal.0.uriTemplate',
        ],
        good: ['','','','','','','','','','']
      },
      'Disable Home Page Mozilla Content': {
        key: ['browser.aboutHomeSnippets.updateUrl'],
        good: ['']
      },
      'Disable Canvas': {
        key: ['gfx.direct2d.disabled', 'layers.acceleration.disabled'],
        good: [true, true]
      },
      'Disable URL Auto Fix': {
        key: ['browser.fixup.alternate.enabled'],
        good: [false]
      },
      'Disable Plugins Scripting': {
        key: ['security.xpconnect.plugin.unrestricted'],
        good: [false]
      },
      'Opt-out of Addon Metadata Update': {
        key: ['extensions.getAddons.cache.enabled'],
        good: [false]
      },
      'Disable Addon Auto Update': {
        key: ['extensions.update.enabled'],
        good: [false]
      },
      'Enable Extensions Blocklist': {
        key: ['extensions.blocklist.enabled'],
        good: [true]
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
      title: 'Privacy',
      text: name + ' is now ' + this._get_enabled_text(!isEnabled)
    });
  }
});

CmdUtils.CreateCommand({
  names: ['edit useragent', 'priv useragent'],
  description: 'Change UserAgent string.',
  help: 'Enter nothing to reset/remove, or a custom string to set it as UA.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
  	'object UA String': noun_arb_text
  },
  preview: function(pbl) {
    pbl.innerHTML = 'Current UA: <br/>' + this._getUa();
  },
  execute: function({object:{text}}) {
    if (text) {
      Utils.prefs.set('general.useragent.override', text);
    } else if (Utils.prefs.get('general.useragent.override') === '') {
      Utils.prefs.reset('general.useragent.override');
    } else {
      Utils.prefs.set('general.useragent.override', '');
    }

    displayMessage({
      title: 'Privacy',
      text: 'UA: ' + this._getUa()
    });
  },
  _getUa: function() {
  	return Cc['@mozilla.org/network/protocol;1?name=http'].getService(Ci.nsIHttpProtocolHandler).userAgent;
  }
});

CmdUtils.CreateCommand({
  names: ['network values', 'priv network values'],
  description: 'Set network settings values as Tor Browser.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Current Values:<ul>' + 
    '<li>' + 'HTTP Max Connections: ' + Utils.prefs.get('network.http.max-connections') + '</li>' +
    '<li>' + 'HTTP Max Persistent Connections Pre Proxy: ' + Utils.prefs.get('network.http.max-persistent-connections-per-proxy') + '</li>' +
    '<li>' + 'HTTP Max Persistent Connections Pre Server: ' + Utils.prefs.get('network.http.max-persistent-connections-per-server') + '</li>' +
    '<li>' + 'HTTP Pipelining:  ' + Utils.prefs.get('network.http.pipelining') + '</li>' +
    '<li>' + 'HTTP Pipelining abtest: ' + Utils.prefs.get('network.http.pipelining.abtest') + '</li>' +
    '<li>' + 'HTTP Pipelining Aggressive ' + Utils.prefs.get('network.http.pipelining.aggressive') + '</li>' +
    '<li>' + 'HTTP Pipelining Max Optimistic Requests: ' + Utils.prefs.get('network.http.pipelining.max-optimistic-requests') + '</li>' +
    '<li>' + 'HTTP Pipelining Max Requests: ' + Utils.prefs.get('network.http.pipelining.maxrequests') + '</li>' +
    '<li>' + 'HTTP Pipelining Max Size: ' + Utils.prefs.get('network.http.pipelining.maxsize') + '</li>' +
    '<li>' + 'HTTP Pipelining Read Timeout: ' + Utils.prefs.get('network.http.pipelining.read-timeout') + '</li>' +
    '<li>' + 'HTTP Pipelining Reschedule on Timeout: ' + Utils.prefs.get('network.http.pipelining.reschedule-on-timeout') + '</li>' +
    '<li>' + 'HTTP Pipelining Reschedule Timeout: ' + Utils.prefs.get('network.http.pipelining.reschedule-timeout') + '</li>' +
    '<li>' + 'HTTP Pipelining SSL: ' + Utils.prefs.get('network.http.pipelining.ssl') + '</li>' +
    '<li>' + 'HTTP Proxy Pipelining: ' + Utils.prefs.get('network.http.proxy.pipelining') + '</li>' +
    '<li>' + 'HTTP Redirection Limit: ' + Utils.prefs.get('network.http.redirection-limit') + '</li>' +
    '</ul>';
  },
  execute: function() {
    var msg;

    if (Utils.prefs.get('network.as.tor')) {
      Utils.prefs.reset('network.http.max-connections');
      Utils.prefs.reset('network.http.max-persistent-connections-per-proxy');
      Utils.prefs.reset('network.http.max-persistent-connections-per-server');
      Utils.prefs.reset('network.http.pipelining');
      Utils.prefs.reset('network.http.pipelining.abtest');
      Utils.prefs.reset('network.http.pipelining.aggressive');
      Utils.prefs.reset('network.http.pipelining.max-optimistic-requests');
      Utils.prefs.reset('network.http.pipelining.maxrequests');
      Utils.prefs.reset('network.http.pipelining.maxsize');
      Utils.prefs.reset('network.http.pipelining.read-timeout');
      Utils.prefs.reset('network.http.pipelining.reschedule-on-timeout');
      Utils.prefs.reset('network.http.pipelining.reschedule-timeout');
      Utils.prefs.reset('network.http.pipelining.ssl');
      Utils.prefs.reset('network.http.proxy.pipelining');
      Utils.prefs.reset('network.http.redirection-limit');

      Utils.prefs.reset('network.as.tor', true);
      msg = 'Reset network values';
    } else {
      Utils.prefs.set('network.http.max-connections', 256);
      Utils.prefs.set('network.http.max-persistent-connections-per-proxy', 256);
      Utils.prefs.set('network.http.max-persistent-connections-per-server', 6);
      Utils.prefs.set('network.http.pipelining', true);
      Utils.prefs.set('network.http.pipelining.abtest', false);
      Utils.prefs.set('network.http.pipelining.aggressive', true);
      Utils.prefs.set('network.http.pipelining.max-optimistic-requests', 3);
      Utils.prefs.set('network.http.pipelining.maxrequests', 12);
      Utils.prefs.set('network.http.pipelining.maxsize', 300000);
      Utils.prefs.set('network.http.pipelining.read-timeout', 60000);
      Utils.prefs.set('network.http.pipelining.reschedule-on-timeout', true);
      Utils.prefs.set('network.http.pipelining.reschedule-timeout', 15000);
      Utils.prefs.set('network.http.pipelining.ssl', true);
      Utils.prefs.set('network.http.proxy.pipelining', true);
      Utils.prefs.set('network.http.redirection-limit', 20);

      Utils.prefs.set('network.as.tor', true);
      msg = 'Set network values as Tor Browser';
    }

    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['cookies', 'priv cookies'],
  description: 'Disable/Enable Cookies.',
   author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
    'object operation': CmdUtils.NounType({
      Toggle: 'toggle',
      Toggle3rdParty: 'toggle-3',
      DeleteDomain: 'del-domain',
      DeletePath: 'del-path',
      DeleteSession: 'del-session'
    })
  },
  preview: function(pbl) {
    pbl.innerHTML = 'Supported Operations: <ul style="list-style:none"><li>' + 
    this.arguments[0].nountype._list.map(function(obj){return obj.html;}).join('</li><li>') + 
    '</li></ul>';
  },
  execute: function({object:{data}}) {
    if (!data) {
      return;
    }

    if (data === 'toggle') {
      this._toggle();
    } else if (data === 'toggle-3') {
      this._toggle3();
    } else if (data === 'del-domain') {
      this._deleteDomain();
    } else if (data === 'del-path') {
      this._deletePath();
    } else if (data === 'del-session') {
      this._deleteSession();
    }
    
  },
  _toggle: function() {
    var msg = '';
    if (Utils.prefs.get('network.cookie.cookieBehavior') === 0) {
      Utils.prefs.set('network.cookie.cookieBehavior', 2);
      msg = 'Disabled Cookies';
    } else {
      Utils.prefs.set('network.cookie.cookieBehavior', 0);
      msg = 'Enabled Cookies';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  },
  _toggle3: function() {
    var msg = '';
    if (Utils.prefs.get('network.cookie.cookieBehavior') === 0) {
      Utils.prefs.set('network.cookie.cookieBehavior', 1);
      msg = 'Disabled Third-Party Cookies';
    } else {
      Utils.prefs.set('network.cookie.cookieBehavior', 0);
      msg = 'Enabled Third-Party Cookies'
      ;
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  },
  _deleteDomain: function() {
    var iter = this._CM.enumerator,
      {
        nsICookie
      } = Ci,
      cookie,
      cookieHost,
      cookies = [],
      domain = context.focusedWindow.location.hostname;

    while (iter.hasMoreElements()) {
      cookie = iter.getNext();
      if (!(cookie instanceof nsICookie)) {
        continue;
      }
      cookieHost = cookie.host.charAt(0) == '.' ? cookie.host.substring(1) : cookie.host;
      if (cookieHost === domain || (new RegExp('.' + cookieHost + '$').test(domain))) {
        cookies.push(cookie);
      }
    }

    if (context.focusedWindow.window.confirm(
        'Delete ' + cookies.length + ' cookies for ' + domain + '?')) {
      for (var i = cookies.length - 1; i >= 0; i--) {
        this._CM.remove(cookies[i].host, cookies[i].name, cookies[i].path, false);
      }
      displayMessage({
        title: 'Privacy',
        text: 'Deleted ' + cookies.length + ' cookies for ' + domain
      });
    }
  },
  _deletePath: function() {
    var iter = this._CM.enumerator,
      {
        nsICookie
      } = Ci,
      cookie,
      cookieHost,
      cookiePath,
      cookies = [],
      domain = context.focusedWindow.location.hostname,
      path = context.focusedWindow.location.pathname;

    while (iter.hasMoreElements()) {
      cookie = iter.getNext();
      if (!(cookie instanceof nsICookie)) {
        continue;
      }
      cookieHost = cookie.host.charAt(0) == '.' ? cookie.host.substring(1) : cookie.host;
      cookiePath = cookie.path;
      if (
        (cookieHost === domain || (new RegExp('.' + cookieHost + '$').test(domain))) &&
        (cookiePath === path || cookiePath.indexOf(path) === 0)
      ) {
        cookies.push(cookie);
      }
    }

    if (context.focusedWindow.confirm(
        'Delete ' + cookies.length + ' cookies for ' + domain + '?')) {
      for (var i = cookies.length - 1; i >= 0; i--) {
        this._CM.remove(cookies[i].host, cookies[i].name, cookies[i].path, false);
      }
      displayMessage({
        title: 'Privacy',
        text: 'Deleted ' + cookies.length + ' cookies for ' + domain
      });
    }
  },
  _deleteSession: function() {
    var iter = this._CM.enumerator,
      {
        nsICookie
      } = Ci,
      cookie,
      cookies = [];

    while (iter.hasMoreElements()) {
      cookie = iter.getNext();
      if (!(cookie instanceof nsICookie)) {
        continue;
      }
      if (cookie.session) {
        cookies.push(cookie);
      }
    }

    if (context.focusedWindow.confirm(
        'Delete ' + cookies.length + ' cookies for current session?')) {
      for (var i = cookies.length - 1; i >= 0; i--) {
        this._CM.remove(cookies[i].host, cookies[i].name, cookies[i].path, false);
      }
      displayMessage({
        title: 'Privacy',
        text: 'Deleted ' + cookies.length + ' cookies for current session'
      });
    }
  },
  _CM: Cc['@mozilla.org/cookiemanager;1'].getService(Ci.nsICookieManager)
});



CmdUtils.CreateCommand({
  names: ['proxy', 'priv proxy'],
  description: 'Change proxy settings.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
    'object option': CmdUtils.NounType({
      System: 'sys',
      ConfigurationURL: 'conf',
      Manual: 'man',
      AutoDetect: 'auto',
      Direct: 'direct'
    })
  },
  preview: function(pbl) {
    pbl.innerHTML = 'Current settings: ' + this._getStatus() + 
      '<br/><br/>' + 
      'Supported options: <ul style="list-style:none"><li>' + 
      this.arguments[0].nountype._list.map(function(obj){return obj.html;}).join('</li><li>') + 
      '</li></ul>';
  },
  execute: function({object: {data}}) {
    if (!data) {
      if (Utils.prefs.get('network.proxy.type') === 5) {
        data = 'direct';
      } else {
        data = 'sys';
      }
    }

    switch (data) {
      case 'sys':
        Utils.prefs.set('network.proxy.type', 5);
        break;
      case 'conf':
        Utils.prefs.set('network.proxy.type', 2);
        break;
      case 'man':
        Utils.prefs.set('network.proxy.type', 1);
        break;
      case 'auto':
        Utils.prefs.set('network.proxy.type', 4);
        break;
      case 'direct':
      default:
        Utils.prefs.set('network.proxy.type', 0);
    }

    displayMessage({
      title: 'Privacy',
      text: 'Proxy: ' + this._getStatus()
    });
  },
  _getStatus: function() {
    var msg = '';
    switch(Utils.prefs.get('network.proxy.type')) {
      case 0:
        msg = 'Disabled';
        break;
      case 1:
        msg = 'Using Manual Proxy';
        break;
      case 2:
        msg = 'Using Configuration URL';
        break;
      case 4:
        msg = 'Auto-Detect';
        break;
      case 5:
        msg = 'Using System Proxy';
        break;
      default:
        msg = 'Unknown status!';
    }

    return msg;
  }
});


CmdUtils.CreateCommand({
  names: ['check browser fingerprint', 'priv fingerprint'],
  description: 'Open panopticlick.eff.org to test browser uniqueness.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    Utils.openUrlInBrowser('https://panopticlick.eff.org/index.php?action=log&js=yes');
  }
});

CmdUtils.CreateCommand({
  names: ['what is my ip', 'priv myip'],
  description: "Display your external IP address.",
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pblock) {
    this._getIp(function(myip) {
      pblock.innerHTML = '<span>Your external IP address is ' + myip + '</span><br>';
      $.ajax({
        url: 'https://whoiz.herokuapp.com/lookup?url=' + myip,
        success: function(response) {
          pblock.innerHTML += $(response).find('pre.content')[0].outerHTML.replace('\r', '').replace('\n', '<br>');
        }
      });
    });
  },
  execute: function() {
    this._getIp(function(myip) {
      displayMessage({
        title: 'Privacy',
        text: 'Your external IP address is ' + myip
      });
    });
  },
  _getIp: function(back) {
    $.ajax({
      jsonp: 'jsonp',
      dataType: 'jsonp',
      url: 'http://myexternalip.com/json',
      success: function(myip) {
        back(myip);
      },
      error: function() {
        displayMessage({
          title: 'Privacy',
          text: 'Could not get external IP!'
        });
      }
    });
  }
});


CmdUtils.CreateCommand({
  names: ['detect webgl', 'priv webgl'],
  description: "Display some of your Firefox' WebGL details (from browserleaks.com/webgl).",
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  preview: function(pblock) {
    var context = this._webglDetect(true);
    if (context) {
      var html = 'WebGL is enabled:<ul>';
      var data = this._webglDetails(context);
      for (var key in data) {
        if (data[key] instanceof Array) {
          html += '<li>' + key + ': <ul>';
          for (var i = data[key].length - 1; i >= 0; i--) {
            html += '<li>' + data[key][i] + '</li>';
          }
          html += '</ul></li>';
        } else {
          html += '<li>' + key + ' = ' + data[key] + '</li>';
        }
      }
      html += '</ul>';
      pblock.innerHTML = html;
    } else {
      pblock.innerHTML = 'WebGL is disabled';
    }
  },
  execute: function() {
    displayMessage({
      title: 'Privacy',
      text: 'WebGL is ' + (this._webglDetect() ? 'enabled' : 'disabled')
    });
  },
  _webglDetect: function(return_context) {
    if (!!context.focusedWindow.WebGLRenderingContext) {
      var canvas = context.focusedWindow.document.createElement("canvas"),
        names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
        contextt = false;

      for (var i = 0; i < 4; i++) {
        try {
          contextt = canvas.getContext(names[i]);
          if (contextt && typeof contextt.getParameter == "function") {
            // WebGL is enabled
            if (return_context) {
              // return WebGL object if the function's argument is present
              return {
                name: names[i],
                gl: contextt
              };
            }
            // else, return just true
            return true;
          }
        } catch (e) {}
      }

      // WebGL is supported, but disabled
      return false;
    }

    // WebGL not supported
    return false;
  },
  _webglDetails: function(contextt) {
    if (contextt) {
      var gl = contextt.gl;
      var data = {};

      // Getting WebGL Context Name:
      data["WebGL Context Name"] = contextt.name;

      // Getting WebGL identifiers:
      data["WebGL Version"] = gl.getParameter(gl.VERSION);
      data["Shading Language Version"] = gl.getParameter(gl.SHADING_LANGUAGE_VERSION);
      data["WebGL Vendor"] = gl.getParameter(gl.VENDOR);
      data["WebGL Renderer"] = gl.getParameter(gl.RENDERER);
      // full list of exportable WebGL variables can be found here:
      // https://www.khronos.org/registry/webgl/specs/1.0/#WEBGLRENDERINGCONTEXT

      // Enumeration of supported WebGL Extensions:
      var ext = [];
      try {
        ext = gl.getSupportedExtensions();
      } catch (e) {}
      var ext_len = ext.length;
      if (ext.length) {
        data["Supported WebGL Extensions"] = ext;
      }

      // Some variables can be obtained only through the specific extensions ...
      // Getting Max Anisotropy:
      var max, e = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
      if (e) {
        max = gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        if (max === 0) {
          max = 2;
        }
      } else {
        max = "Not available";
      }
      data["Max Anisotropy"] = max;
      return data;
    }
  }
});




CmdUtils.CreateCommand({
  names: ['detect fonts', 'priv detect fonts'],
  description: "Detect available system fonts.",
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  preview: function(pblock) {
    var n = 0;
    var html = '<ul>';
    for (var i = this._fonts.length - 1; i >= 0; i--) {
      if (this._detect(this._fonts[i], context.focusedWindow.document)) {
        n++;
        html += '<li>' + this._fonts[i] + '</li>';
      }
    }
    html += '</ul>';
    pblock.innerHTML = 'Found ' + n + ' fonts in your system:<br>' + html;
  },
  execute: function() {
    var n = 0;
    for (var i = this._fonts.length - 1; i >= 0; i--) {
      if (this._detect(this._fonts[i], context.focusedWindow.document)) {
        n++;
      }
    }

    displayMessage({
      title: 'Privacy',
      text: 'Found ' + n + ' fonts out of ' + this._fonts.length
    });
  },
  _detect: function(font, document) {
    /**
     * JavaScript code to detect available availability of a
     * particular font in a browser using JavaScript and CSS.
     *
     * Author : Lalit Patel
     * Website: http://www.lalit.org/lab/javascript-css-font-detect/
     * License: Apache Software License 2.0
     *          http://www.apache.org/licenses/LICENSE-2.0
     * Version: 0.15 (21 Sep 2009)
     *          Changed comparision font to default from sans-default-default,
     *          as in FF3.0 font of child element didn't fallback
     *          to parent element if the font is missing.
     * Version: 0.2 (04 Mar 2012)
     *          Comparing font against all the 3 generic font families ie,
     *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
     *          then that font is 100% not available in the system
     * Version: 0.3 (24 Mar 2012)
     *          Replaced sans with serif in the list of baseFonts
     */

    /**
     * Usage: d = new Detector();
     *        d.detect('font name');
     */

    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

    var h = document.getElementsByTagName("body")[0];

    // create a SPAN in the document to get the width of the text we use to test
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index in baseFonts) {
      //get the default width for the three base fonts
      s.style.fontFamily = baseFonts[index];
      h.appendChild(s);
      defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
      defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
      h.removeChild(s);
    }

    var detected = false;
    for (var index in baseFonts) {
      s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
      h.appendChild(s);
      var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
      h.removeChild(s);
      detected = detected || matched;
    }
    return detected;
  },
  _fonts: [
    'Symbol',
    'Arial',
    'Courier New',
    'Georgia',
    'Trebuchet MS',
    'Verdana',
    'Impact',
    'Comic Sans MS',
    'Webdings',
    'Tahoma',
    'Microsoft Sans Serif',
    'Wingdings',
    'Arial Black',
    'Lucida Console',
    'Marlett',
    'Lucida Sans Unicode',
    'Courier',
    'Franklin Gothic Medium',
    'Palatino Linotype',
    'Sylfaen',
    'Estrangelo Edessa',
    'Tunga',
    'Mangal',
    'Raavi',
    'Latha',
    'Gautami',
    'Shruti',
    'MV Boli',
    'Calibri',
    'Cambria',
    'Constantia',
    'Candara',
    'Corbel',
    'Consolas',
    'Cambria Math',
    'Segoe UI',
    'MS Mincho',
    'Wingdings 2',
    'Wingdings 3',
    'Vrinda',
    'Kartika',
    'Century Gothic',
    'Arial Narrow',
    'Garamond',
    'Book Antiqua',
    'Bookman Old Style',
    'MS Reference Sans Serif',
    'MS Reference Specialty',
    'Bookshelf Symbol 7',
    'Monotype Corsiva',
    'Meiryo',
    'Arial Unicode MS',
    'Century',
    'Gabriola',
    'Plantagenet Cherokee',
    'Segoe Print',
    'Segoe Script',
    'Meiryo UI',
    'MT Extra',
    'SimSun',
    'Batang',
    'Gulim',
    'MS PMincho',
    'MS PGothic',
    'MS Gothic',
    'Mongolian Baiti',
    'Microsoft Yi Baiti',
    'PMingLiU',
    'Microsoft Himalaya',
    'SimHei',
    'MingLiU',
    'Segoe UI Light',
    'Simplified Arabic',
    'Cordia New',
    'Miriam Fixed',
    'EucrosiaUPC',
    'Simplified Arabic Fixed',
    'Rod',
    'Angsana New',
    'Narkisim',
    'FrankRuehl',
    'JasmineUPC',
    'Dotum',
    'DotumChe',
    'IrisUPC',
    'FreesiaUPC',
    'GulimChe',
    'LilyUPC',
    'DilleniaUPC',
    'Miriam',
    'MS UI Gothic',
    'Traditional Arabic',
    'Levenim MT',
    'David',
    'KodchiangUPC',
    'Iskoola Pota',
    'SimSun-ExtB',
    'BrowalliaUPC',
    'Euphemia',
    'CordiaUPC',
    'Browallia New',
    'AngsanaUPC',
    'Nyala',
    'NSimSun',
    'Kalinga',
    'GungsuhChe',
    'MingLiU_HKSCS-ExtB',
    'MingLiU_HKSCS',
    'MingLiU-ExtB',
    'PMingLiU-ExtB',
    'BatangChe',
    'Gungsuh',
    'Aharoni',
    'Andalus',
    'Gisha',
    'Microsoft Uighur',
    'MoolBoran',
    'DokChampa',
    'DaunPenh',
    'Microsoft Tai Le',
    'Leelawadee',
    'Malgun Gothic',
    'Microsoft JhengHei',
    'Microsoft YaHei',
    'Arabic Typesetting',
    'Segoe UI Semibold',
    'Segoe UI Symbol',
    'Ebrima',
    'Khmer UI',
    'Lao UI',
    'FangSong',
    'Microsoft New Tai Lue',
    'KaiTi',
    'Microsoft PhagsPa',
    'Kokila',
    'DFKai-SB',
    'Sakkal Majalla',
    'Utsaah',
    'Shonar Bangla',
    'Vani',
    'Vijaya',
    'Aparajita',
    'Mistral',
    'Haettenschweiler',
    'MS Outlook',
    'Lucida Sans',
    'Lucida Handwriting',
    'Lucida Bright',
    'Freestyle Script',
    'Juice ITC',
    'Tempus Sans ITC',
    'Kristen ITC',
    'Stencil',
    'Jokerman',
    'Bell MT',
    'Vivaldi',
    'Cooper Black',
    'Bauhaus 93',
    'Harrington',
    'Matura MT Script Capitals',
    'Baskerville Old Face',
    'Playbill',
    'Modern No. 20',
    'Colonna MT',
    'Onyx',
    'Britannic Bold',
    'Bernard MT Condensed',
    'Footlight MT Light',
    'Papyrus',
    'Wide Latin',
    'Brush Script MT',
    'Lucida Calligraphy',
    'Lucida Fax',
    'Centaur',
    'Broadway',
    'Californian FB',
    'Berlin Sans FB Demi',
    'Berlin Sans FB',
    'Algerian',
    'Old English Text MT',
    'High Tower Text',
    'Niagara Solid',
    'Magneto',
    'Poor Richard',
    'Kunstler Script',
    'Harlow Solid Italic',
    'Viner Hand ITC',
    'Informal Roman',
    'Snap ITC',
    'Bodoni MT Poster Compressed',
    'Niagara Engraved',
    'Showcard Gothic',
    'Ravie',
    'Parchment',
    'Vladimir Script',
    'Chiller',
    'Century Schoolbook',
    'Bradley Hand ITC',
    'Franklin Gothic Book',
    'French Script MT',
    'Pristina',
    'Copperplate Gothic Bold',
    'Copperplate Gothic Light',
    'Curlz MT',
    'Edwardian Script ITC',
    'Engravers MT',
    'Rockwell',
    'Rockwell Extra Bold',
    'Perpetua',
    'Arial Rounded MT Bold',
    'Franklin Gothic Demi',
    'Franklin Gothic Heavy',
    'Franklin Gothic Demi Cond',
    'Franklin Gothic Medium Cond',
    'Gill Sans MT',
    'Lucida Sans Typewriter',
    'Felix Titling',
    'Maiandra GD',
    'Eras Light ITC',
    'Goudy Old Style',
    'Calisto MT',
    'OCR A Extended',
    'Blackadder ITC',
    'Eras Demi ITC',
    'Gloucester MT Extra Condensed',
    'Imprint MT Shadow',
    'Gill Sans Ultra Bold',
    'Tw Cen MT',
    'Perpetua Titling MT',
    'Gigi',
    'Agency FB',
    'Script MT Bold',
    'Gill Sans MT Condensed',
    'Gill Sans MT Ext Condensed Bold',
    'Elephant',
    'Castellar',
    'Goudy Stout',
    'Eras Medium ITC',
    'Bodoni MT Condensed',
    'Bodoni MT',
    'Bodoni MT Black',
    'Gill Sans Ultra Bold Condensed',
    'Forte',
    'Eras Bold ITC',
    'Rockwell Condensed',
    'Tw Cen MT Condensed',
    'Tw Cen MT Condensed Extra Bold',
    'Rage Italic',
    'Palace Script MT',
    'System',
    'Terminal',
    'Fixedsys',
    'MS Sans Serif',
    'Small Fonts',
    'MS Serif',
    'Modern',
    'Roman',
    'Script',
    'Courier New CE',
    'Courier New Baltic',
    'Arial CYR',
    'Arial CE',
    'Courier New Greek',
    'Arial Baltic',
    'Courier New TUR',
    'Arial Greek',
    'Arial TUR',
    'Courier New CYR',
    'Courier New Cyr',
    'Arial Cyr',
    'Calibri Light',
    'Arabic Transparent',
    'Microsoft JhengHei UI',
    'Microsoft YaHei UI',
    'Gadugi',
    'Nirmala UI',
    'Segoe UI Semilight',
    'Helvetica'
  ]
});
/*CmdUtils.CreateCommand({
  names: ['plugins click to play', 'priv plugins click to play'],
  description: 'Enable/Disable click to play plugin option',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    var html = 'Click To Play is '  + (Utils.prefs.get('plugins.click_to_play') ? 'Enabled' : 'Disabled');
    pbl.innerHTML = html;
  },
  execute: function() {
    Utils.prefs.set('plugins.click_to_play', !Utils.prefs.get('plugins.click_to_play'));
    var msg = '';
    if (Utils.prefs.get('plugins.click_to_play')) {
      msg = 'Enabled Click To Play for plugins';
    } else {
      msg = 'Disabled Click To Play for plugins';
    }

    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['hide plugins', 'priv hide plugins'],
  description: 'Enable/Disable listing available plugins through navigator.plugins',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(p) {
    var html = (Utils.prefs.get('plugins.enumerable_names') === '' ? 'Currently unlisted:' : 'Currently listed:') + '<ul>';
    for (var plugin of context.focusedWindow.navigator.plugins) {
      html += '<li>' + plugin.name + '</li>';
    }
    html += '</ul>';
    p.innerHTML = html;
  },
  execute: function() {
    var msg = '';
    if (Utils.prefs.get('plugins.enumerable_names') === '*') {
      Utils.prefs.set('plugins.enumerable_names', '');
      msg = 'Disabled listing of plugins';
    } else {
      Utils.prefs.reset('plugins.enumerable_names');
      msg = 'Enabled listing of plugins';
    }

    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/



/*CmdUtils.CreateCommand({
  names: ['hide platform', 'priv hide platform'],
  description: 'Enable/Disable listing platform details in navigator object',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Platofrm details:<ul><li>Platform: ' + Utils.prefs.get('general.platform.override') + '</li>' +
      '<li>OS CPU: ' + Utils.prefs.get('general.oscpu.override') + '</li>' +
      '<li>Build ID: ' + Utils.prefs.get('general.buildID.override') + '</li>' +
      '</ul>';
  },
  execute: function() {
    var msg = '';
    if (Utils.prefs.get('general.platform.override') === '' ||
        Utils.prefs.get('general.oscpu.override') === '' ||
        Utils.prefs.get('general.buildID.override') === '') {
      Utils.prefs.reset('general.platform.override');
      Utils.prefs.reset('general.oscpu.override');
      Utils.prefs.reset('general.buildID.override');
      msg = 'Enabled listing of platform';
    } else {
      Utils.prefs.set('general.platform.override', '');
      Utils.prefs.set('general.oscpu.override', '');
      Utils.prefs.set('general.buildID.override', '');
      msg = 'Disabled listing of platform';
    }

    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['webrtc', 'priv webrtc'],
  description: 'Enable/Disable WebRTC',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    var html = 'WebRTC is ' + (Utils.prefs.get('media.peerconnection.enabled') ? 'Enabled' : 'Disabled');
    pbl.innerHTML = html;
  },
  execute: function() {
    Utils.prefs.set('media.peerconnection.enabled', !Utils.prefs.get('media.peerconnection.enabled'));
    var msg = '';
    if (Utils.prefs.get('media.peerconnection.enabled')) {
      msg = 'Enabled WebRTC';
    } else {
      msg = 'Disabled WebRTC';
    }

    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/


/*CmdUtils.CreateCommand({
  names: ['java', 'priv java'],
  description: 'Disable/Enable Java',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Java is ' + (Utils.prefs.get('security.enable_java') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('security.enable_java', !Utils.prefs.get('security.enable_java'));
    if (Utils.prefs.get('security.enable_java')) {
      msg = 'Enabled Java';
    } else {
      msg = 'Disabled Java';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['javascript', 'priv javascript'],
  description: 'Disable/Enable JavaScript.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'JavaScript is ' + (Utils.prefs.get('javascript.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('javascript.enabled', !Utils.prefs.get('javascript.enabled'));
    if (Utils.prefs.get('javascript.enabled')) {
      msg = 'Enabled JavaScript';
    } else {
      msg = 'Disabled JavaScript';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['websocket', 'priv websocket'],
  description: 'Disable/Enable WebSocket.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'WebSocket is ' + (Utils.prefs.get('network.websocket.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('network.websocket.enabled', !Utils.prefs.get('network.websocket.enabled'));
    if (Utils.prefs.get('network.websocket.enabled')) {
      msg = 'Enabled WebSocket';
    } else {
      msg = 'Disabled WebSocket';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['link prefetch', 'priv link prefetch'],
  description: 'Disable/Enable Link Prefetch.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Link Prefetch is ' + (Utils.prefs.get('network.prefetch-next') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('network.prefetch-next', !Utils.prefs.get('network.prefetch-next'));
    if (Utils.prefs.get('network.prefetch-next')) {
      msg = 'Enabled Link Prefetch';
    } else {
      msg = 'Disabled Link Prefetch';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['beacons', 'priv beacons'],
  description: 'Disable/Enable Beacons.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Beacons are ' + (Utils.prefs.get('beacon.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('beacon.enabled', !Utils.prefs.get('beacon.enabled'));
    if (Utils.prefs.get('beacon.enabled')) {
      msg = 'Enabled Beacons';
    } else {
      msg = 'Disabled Beacons';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['pings', 'priv pings'],
  description: 'Disable/Enable Pings.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Pings are ' + (Utils.prefs.get('browser.send_pings') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('browser.send_pings', !Utils.prefs.get('browser.send_pings'));
    if (Utils.prefs.get('browser.send_pings')) {
      msg = 'Enabled Pings';
    } else {
      msg = 'Disabled Pings';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['tracking protection', 'priv tracking protection'],
  description: 'Disable/Enable Tracking Protection.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Tracking Protection is ' + (Utils.prefs.get('privacy.trackingprotection.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('privacy.trackingprotection.enabled', !Utils.prefs.get('privacy.trackingprotection.enabled'));
    if (Utils.prefs.get('privacy.trackingprotection.enabled')) {
      msg = 'Enabled Tracking Protection';
    } else {
      msg = 'Disabled Tracking Protection';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['hello', 'priv hello'],
  description: 'Disable/Enable Firefox Hello.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Firefox Hello is ' + (Utils.prefs.get('loop.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('loop.enabled', !Utils.prefs.get('loop.enabled'));
    if (Utils.prefs.get('loop.enabled')) {
      msg = 'Enabled Firefox Hello';
    } else {
      msg = 'Disabled Firefox Hello';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['pocket', 'priv pocket'],
  description: 'Disable/Enable Pocket.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Pocket is ' + (Utils.prefs.get('browser.pocket.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('browser.pocket.enabled', !Utils.prefs.get('browser.pocket.enabled'));
    if (Utils.prefs.get('browser.pocket.enabled')) {
      msg = 'Enabled Pocket';
    } else {
      msg = 'Disabled Pocket';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['eme', 'priv eme'],
  description: 'Disable/Enable EME plugin (a binary plugin to play encrypted media).',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'EME is ' + (Utils.prefs.get('media.eme.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('media.eme.enabled', !Utils.prefs.get('media.eme.enabled'));
    if (Utils.prefs.get('media.eme.enabled')) {
      msg = 'Enabled EME';
    } else {
      msg = 'Disabled EME';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['gmpeme', 'priv gmpeme'],
  description: 'Disable/Enable GMP EME plugin (a binary plugin to play encrypted media).',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'GMP EME is ' + (Utils.prefs.get('media.gmp-eme-adobe.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('media.gmp-eme-adobe.enabled', !Utils.prefs.get('media.gmp-eme-adobe.enabled'));
    if (Utils.prefs.get('media.gmp-eme-adobe.enabled')) {
      msg = 'Enabled GMP EME';
    } else {
      msg = 'Disabled GMP EME';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['safe browsing', 'priv safe browsing'],
  description: 'Disable/Enable Safe Browsing.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Safe Browsing is ' + (Utils.prefs.get('browser.safebrowsing.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('browser.safebrowsing.enabled', !Utils.prefs.get('browser.safebrowsing.enabled'));
    if (Utils.prefs.get('browser.safebrowsing.enabled')) {
      msg = 'Enabled Safe Browsing';
    } else {
      msg = 'Disabled Safe Browsing';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['safe downloads', 'priv safe downloads'],
  description: 'Disable/Enable Safe Downloads.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Safe Downloads is ' + (Utils.prefs.get('browser.safebrowsing.downloads.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('browser.safebrowsing.downloads.enabled', !Utils.prefs.get('browser.safebrowsing.downloads.enabled'));
    if (Utils.prefs.get('browser.safebrowsing.downloads.enabled')) {
      msg = 'Enabled Safe Downloads';
    } else {
      msg = 'Disabled Safe Downloads';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['malware check', 'priv malware check'],
  description: 'Disable/Enable Malware Check.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Malware Check is ' + (Utils.prefs.get('browser.safebrowsing.malware.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('browser.safebrowsing.malware.enabled', !Utils.prefs.get('browser.safebrowsing.malware.enabled'));
    if (Utils.prefs.get('browser.safebrowsing.malware.enabled')) {
      msg = 'Enabled Malware Check';
    } else {
      msg = 'Disabled Malware Check';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['telemetry', 'priv telemetry'],
  description: 'Disable/Enable Telemetry.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Telemetry is ' + (Utils.prefs.get('toolkit.telemetry.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('toolkit.telemetry.enabled', !Utils.prefs.get('toolkit.telemetry.enabled'));
    if (Utils.prefs.get('toolkit.telemetry.enabled')) {
      msg = 'Enabled Telemetry';
    } else {
      msg = 'Disabled Telemetry';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['clipboard events', 'priv clipboard events'],
  description: 'Disable/Enable Clipboard Events.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Clipboard Events are ' + (Utils.prefs.get('dom.event.clipboardevents.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('dom.event.clipboardevents.enabled', !Utils.prefs.get('dom.event.clipboardevents.enabled'));
    if (Utils.prefs.get('dom.event.clipboardevents.enabled')) {
      msg = 'Enabled Clipboard Events';
    } else {
      msg = 'Disabled Clipboard Events';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['contextmenu events', 'priv contextmenu events'],
  description: 'Disable/Enable Context Menu Events.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Context Menu Events are ' + (Utils.prefs.get('dom.event.contextmenu.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('dom.event.contextmenu.enabled', !Utils.prefs.get('dom.event.contextmenu.enabled'));
    if (Utils.prefs.get('dom.event.contextmenu.enabled')) {
      msg = 'Enabled Context Menu Events';
    } else {
      msg = 'Disabled Context Menu Events';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['battery api', 'priv battery api'],
  description: 'Disable/Enable Battery API.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Battery API is ' + (Utils.prefs.get('dom.battery.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('dom.battery.enabled', !Utils.prefs.get('dom.battery.enabled'));
    if (Utils.prefs.get('dom.battery.enabled')) {
      msg = 'Enabled Battery API';
    } else {
      msg = 'Disabled Battery API';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['gamepad api', 'priv gamepad api'],
  description: 'Disable/Enable Gamepad API.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Gamepad API is ' + (Utils.prefs.get('dom.gamepad.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('dom.gamepad.enabled', !Utils.prefs.get('dom.gamepad.enabled'));
    if (Utils.prefs.get('dom.gamepad.enabled')) {
      msg = 'Enabled Gamepad API';
    } else {
      msg = 'Disabled Gamepad API';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['local storage', 'priv local storage'],
  description: 'Disable/Enable Local Storage.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Local Storage is ' + (Utils.prefs.get('dom.storage.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('dom.storage.enabled', !Utils.prefs.get('dom.storage.enabled'));
    if (Utils.prefs.get('dom.storage.enabled')) {
      msg = 'Enabled Local Storage';
    } else {
      msg = 'Disabled Local Storage';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['dom performance', 'priv dom performance'],
  description: 'Disable/Enable DOM Performance.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'DOM Performance is ' + (Utils.prefs.get('dom.enable_performance') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('dom.enable_performance', !Utils.prefs.get('dom.enable_performance'));
    if (Utils.prefs.get('dom.enable_performance')) {
      msg = 'Enabled DOM Performance';
    } else {
      msg = 'Disabled DOM Performance';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['dom resource timing', 'priv dom resource timing'],
  description: 'Disable/Enable DOM Resource Timing.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'DOM Resource Timing is ' + (Utils.prefs.get('dom.enable_resource_timing') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('dom.enable_resource_timing', !Utils.prefs.get('dom.enable_resource_timing'));
    if (Utils.prefs.get('dom.enable_resource_timing')) {
      msg = 'Enabled DOM Resource Timing';
    } else {
      msg = 'Disabled DOM Resource Timing';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['search suggestions', 'priv search suggestions'],
  description: 'Disable/Enable Search Suggestions.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Search Suggestions is ' + (Utils.prefs.get('browser.search.suggest.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('browser.search.suggest.enabled', !Utils.prefs.get('browser.search.suggest.enabled'));
    if (Utils.prefs.get('browser.search.suggest.enabled')) {
      msg = 'Enabled Search Suggestions';
    } else {
      msg = 'Disabled Search Suggestions';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['history', 'priv history'],
  description: 'Disable/Enable History.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'History is ' + (Utils.prefs.get('places.history.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('places.history.enabled', !Utils.prefs.get('places.history.enabled'));
    if (Utils.prefs.get('places.history.enabled')) {
      msg = 'Enabled History';
    } else {
      msg = 'Disabled History';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['safe negotiation', 'priv safe negotiation'],
  description: 'Disable/Enable Safe Negotiation (if enabled, Firefox will reject a connection using old SSL/TLS protocol).',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Safe Negotiation is ' + (Utils.prefs.get('security.ssl.require_safe_negotiation') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('security.ssl.require_safe_negotiation', !Utils.prefs.get('security.ssl.require_safe_negotiation'));
    if (Utils.prefs.get('security.ssl.require_safe_negotiation')) {
      msg = 'Enabled Safe Negotiation';
    } else {
      msg = 'Disabled Safe Negotiation';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['unsafe negotiation as broken', 'priv unsafe negotiation as broken'],
  description: 'Disable/Enable Unsafe Negotiation as Broken (if enabled, Firefox will show an indicator of broken security if the site is using an old protocol).',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Unsafe Negotiation as Broken is ' + (Utils.prefs.get('security.ssl.treat_unsafe_negotiation_as_broken') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('security.ssl.treat_unsafe_negotiation_as_broken', !Utils.prefs.get('security.ssl.treat_unsafe_negotiation_as_broken'));
    if (Utils.prefs.get('security.ssl.treat_unsafe_negotiation_as_broken')) {
      msg = 'Enabled Unsafe Negotiation as Broken';
    } else {
      msg = 'Disabled Unsafe Negotiation as Broken';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/


/*CmdUtils.CreateCommand({
  names: ['fonts', 'priv fonts'],
  description: 'Limit detectable fonts.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Fonts are ' + (Utils.prefs.get('browser.display.use_document_fonts') === 1 ? 'Detectable' : 'NOT detectable');
  },
  execute: function() {
    var msg = '';
    if (Utils.prefs.get('browser.display.use_document_fonts') === 0) {
      Utils.prefs.set('places.history.enabled', 1);
      msg = 'Fonts are Detectable';
    } else {
      Utils.prefs.set('places.history.enabled', 0);
      msg = 'Fonts are NOT detectable';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['do not track', 'priv do not track'],
  description: 'Disable/Enable Do Not Track.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Do Not Track is ' + (Utils.prefs.get('privacy.donottrackheader.enabled') || Utils.prefs.get('privacy.donottrackheader.value') === 1 ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    
    if (Utils.prefs.get('privacy.donottrackheader.enabled') || Utils.prefs.get('privacy.donottrackheader.value') === 1) {
      Utils.prefs.set('privacy.donottrackheader.enabled', false);
      Utils.prefs.set('privacy.donottrackheader.value', 0);
      msg = 'Disabled Do Not Track';
    } else {
      Utils.prefs.set('privacy.donottrackheader.enabled', true);
      Utils.prefs.set('privacy.donottrackheader.value', 1);
      msg = 'Enabled Do Not Track';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['health reports', 'priv health reports'],
  description: 'Disable/Enable Health Reports.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Health Reports is ' + (Utils.prefs.get('datareporting.healthreport.service.enabled') || Utils.prefs.get('datareporting.healthreport.uploadEnabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    
    if (Utils.prefs.get('datareporting.healthreport.service.enabled') || Utils.prefs.get('datareporting.healthreport.uploadEnabled')) {
      Utils.prefs.set('datareporting.healthreport.service.enabled', false);
      Utils.prefs.set('datareporting.healthreport.uploadEnabled', false);
      msg = 'Disabled Health Reports';
    } else {
      Utils.prefs.set('datareporting.healthreport.service.enabled', true);
      Utils.prefs.set('datareporting.healthreport.uploadEnabled', false);
      msg = 'Enabled Health Reports';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/


/*CmdUtils.CreateCommand({
  names: ['pdfjs', 'priv pdfjs'],
  description: 'Disable/Enable pdfjs feature.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'pdfjs is ' + (Utils.prefs.get('pdfjs.disabled') ? 'Disabled' : 'Enabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('pdfjs.disabled', !Utils.prefs.get('pdfjs.disabled'));
    if (Utils.prefs.get('pdfjs.disabled')) {
      msg = 'Disabled pdfjs';
    } else {
      msg = 'Enabled pdfjs';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['css visited', 'priv css visited'],
  description: 'Disable/Enable CSS visited links.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'CSS visited links is ' + (Utils.prefs.get('layout.css.visited_links_enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('layout.css.visited_links_enabled', !Utils.prefs.get('layout.css.visited_links_enabled'));
    if (Utils.prefs.get('layout.css.visited_links_enabled')) {
      msg = 'Enabled CSS visited links';
    } else {
      msg = 'Disabled CSS visited links';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['active mixed content', 'priv active mixed content'],
  description: 'Disable/Enable Active Mixed Content.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Active Mixed Content is ' + (Utils.prefs.get('security.mixed_content.block_active_content') ? 'Disabled' : 'Enabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('security.mixed_content.block_active_content', !Utils.prefs.get('security.mixed_content.block_active_content'));
    if (Utils.prefs.get('security.mixed_content.block_active_content')) {
      msg = 'Disabled Active Mixed Content';
    } else {
      msg = 'Enabled Active Mixed Content';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['display mixed content', 'priv display mixed content'],
  description: 'Disable/Enable Display Mixed Content.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Display Mixed Content is ' + (Utils.prefs.get('security.mixed_content.block_display_content') ? 'Disabled' : 'Enabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('security.mixed_content.block_display_content', !Utils.prefs.get('security.mixed_content.block_display_content'));
    if (Utils.prefs.get('security.mixed_content.block_display_content')) {
      msg = 'Disabled Display Mixed Content';
    } else {
      msg = 'Enabled Display Mixed Content';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['location api', 'priv location api'],
  description: 'Disable/Enable Location API.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Location API is ' + (Utils.prefs.get('geo.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('geo.enabled', !Utils.prefs.get('geo.enabled'));
    if (Utils.prefs.get('geo.enabled')) {
      msg = 'Enabled Location API';
    } else {
      msg = 'Disabled Location API';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/


/*CmdUtils.CreateCommand({
  names: ['location provider', 'priv location provider'],
  description: 'Switch between Google and Mozilla Location APIs.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Location provider is ' + (Utils.prefs.get('geo.wifi.uri') === this._googleApi ? 'Google' : 'Mozilla');
  },
  execute: function() {
    var msg = '';
    if (Utils.prefs.get('geo.wifi.uri') === this._googleApi) {
      Utils.prefs.set('geo.wifi.uri', this._mozillaApi);
      msg = 'Location provider is set to Mozilla';
    } else {
      Utils.prefs.set('geo.wifi.uri', this._googleApi);
      msg = 'Location provider is set to Google';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  },
  _googleApi: 'https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_API_KEY%',
  _mozillaApi: 'https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%'
});*/

/*CmdUtils.CreateCommand({
  names: ['dns prefetch', 'priv dns prefetch'],
  description: 'Disable/Enable DNS Prefetch.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'DNS Prefetch is ' + (Utils.prefs.get('network.dns.disablePrefetch') ? 'Disabled' : 'Enabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('network.dns.disablePrefetch', !Utils.prefs.get('network.dns.disablePrefetch'));
    if (Utils.prefs.get('network.dns.disablePrefetch')) {
      msg = 'Disabled DNS Prefetch';
    } else {
      msg = 'Enabled DNS Prefetch';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['face detection', 'priv face detection'],
  description: 'Disable/Enable Face Detection.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Face Detection is ' + (Utils.prefs.get('camera.control.face_detection.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('camera.control.face_detection.enabled', !Utils.prefs.get('camera.control.face_detection.enabled'));
    if (Utils.prefs.get('camera.control.face_detection.enabled')) {
      msg = 'Enabled Face Detection';
    } else {
      msg = 'Disabled Face Detection';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['sensors', 'priv sensors'],
  description: 'Disable/Enable Device Sensors such as orientation.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Device Sensors are ' + (Utils.prefs.get('device.sensors.enabled') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('device.sensors.enabled', !Utils.prefs.get('device.sensors.enabled'));
    if (Utils.prefs.get('device.sensors.enabled')) {
      msg = 'Enabled Device Sensors';
    } else {
      msg = 'Disabled Device Sensors';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['webgl', 'priv webgl'],
  description: 'Disable/Enable WebGL.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'WebGL is ' + (Utils.prefs.get('webgl.disabled') ? 'Disabled' : 'Enabled');
  },
  execute: function() {
    var msg = '';
    Utils.prefs.set('webgl.disabled', !Utils.prefs.get('webgl.disabled'));
    if (Utils.prefs.get('webgl.disabled')) {
      msg = 'Disabled WebGL';
    } else {
      msg = 'Enabled WebGL';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/


/*CmdUtils.CreateCommand({
  names: ['referrer', 'priv referrer'],
  description: 'Disable/Enable Referrer.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Referrer settings:<ul><li>Header: ' + (Utils.prefs.get('network.http.sendRefererHeader') === 2 ? 'Enabled' : 'Disabled') + '</li>' +
      '<li>Secure Referrer: ' + (Utils.prefs.get('network.http.sendSecureXSiteReferrer') ? 'Enabled' : 'Disabled') + '</li>' +
      '</ul>';
  },
  execute: function() {
    var msg = '';
    if (Utils.prefs.get('network.http.sendRefererHeader') === 0 || !Utils.prefs.get('network.http.sendSecureXSiteReferrer')) {
      Utils.prefs.set('network.http.sendSecureXSiteReferrer', true);
      Utils.prefs.set('network.http.sendRefererHeader', 2);
      msg = 'Enabled Referrer';
    } else {
      Utils.prefs.set('network.http.sendSecureXSiteReferrer', false);
      Utils.prefs.set('network.http.sendRefererHeader', 0);
      msg = 'Disabled Referrer';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/


/*CmdUtils.CreateCommand({
  names: ['dns cache', 'priv dns cache'],
  description: 'Disable/Enable DNS cache.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
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
      title: 'Privacy',
      text: msg
    });
  }
});*/


/*CmdUtils.CreateCommand({
  names: ['disk cache', 'priv disk cache'],
  description: 'Disable/Enable disk cache.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var msg = '';
    Utils.prefs.set('browser.cache.disk.enable', !Utils.prefs.get('browser.cache.disk.enable'));
    if (Utils.prefs.get('browser.cache.memory.enable')) {
      msg = 'Enabled disk cache';
    } else {
      msg = 'Disabled disk cache';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/


/*CmdUtils.CreateCommand({
  names: ['memory cache', 'priv memory cache'],
  description: 'Disable/Enable memory cache.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var msg = '';
    Utils.prefs.set('browser.cache.memory.enable', !Utils.prefs.get('browser.cache.memory.enable'));
    if (Utils.prefs.get('browser.cache.memory.enable')) {
      msg = 'Enabled memory cache';
    } else {
      msg = 'Disabled memory cache';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/


/*CmdUtils.CreateCommand({
  names: ['network cache', 'priv network cache'],
  description: 'Disable/Enable network cache.',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var msg = '';
    Utils.prefs.set('network.http.use-cache', !Utils.prefs.get('network.http.use-cache'));
    if (Utils.prefs.get('network.http.use-cache')) {
      msg = 'Enabled network cache';
    } else {
      msg = 'Disabled network cache';
    }
    displayMessage({
      title: 'Privacy',
      text: msg
    });
  }
});*/

/*CmdUtils.CreateCommand({
  names: ['status', 'priv status'],
  description: 'Display security status with recommendations',
  author: {
    name: 'Anas H. Suliman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    var pref, val, good;
    var style = '<style>.good{color:green;}.bad{color:red;}</style>';
    var list = '<ul>';
    list += '<li>UserAgent: ' + Cc['@mozilla.org/network/protocol;1?name=http'].getService(Ci.nsIHttpProtocolHandler).userAgent + '</li>';
    for (pref of this._prefs) {
      val = Utils.prefs.get(pref.name);
      good = Array.isArray(pref.good) ? pref.good.indexOf(val) >= 0 : pref.good === val;
      list += '<li class="' + (good ? 'good' : 'bad') + '">' + pref.display + ': [' + val + ']';
      if (!good) {
        list += '<span class="good"> Should be [' + pref.good + ']';
      }
      list += '</li>';
    }
    list += '</ul>';
    pbl.innerHTML = style + list;
  },
  _prefs: [
    {
      'name': 'plugins.click_to_play',
      'display': 'Click to Play',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'plugins.enumerable_names',
      'display': 'Plugins List',
      'type': 'string',
      'good': ['', undefined]
    },
    {
      'name': 'general.platform.override',
      'display': 'Platform',
      'type': 'string',
      'good': ['', undefined]
    },
    {
      'name': 'general.oscpu.override',
      'display': 'OS CPU',
      'type': 'string',
      'good': ['', undefined]
    },
    {
      'name': 'general.buildID.override',
      'display': 'Build ID',
      'type': 'string',
      'good': ['', undefined]
    },
    {
      'name': 'media.peerconnection.enabled',
      'display': 'WebRTC',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'security.enable_java',
      'display': 'Java',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'javascript.enabled',
      'display': 'JavaScript',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'network.websocket.enabled',
      'display': 'WebSocket',
      'type': 'boolean',
      'good': [false, undefined]
    },
    {
      'name': 'network.prefetch-next',
      'display': 'Link Prefetch',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'beacon.enabled',
      'display': 'Beacons',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'browser.send_pings',
      'display': 'Pings',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'privacy.trackingprotection.enabled',
      'display': 'Tracking Protection',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'loop.enabled',
      'display': 'Firefox Hello',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'browser.pocket.enabled',
      'display': 'Pocket',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'media.eme.enabled',
      'display': 'EME plugin',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'media.gmp-eme-adobe.enabled',
      'display': 'GMP EME plugin',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'browser.safebrowsing.enabled',
      'display': 'Safe Browsing',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'browser.safebrowsing.downloads.enabled',
      'display': 'Safe Downloads',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'browser.safebrowsing.malware.enabled',
      'display': 'Malware Check',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'toolkit.telemetry.enabled',
      'display': 'Telemetry',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'dom.event.clipboardevents.enabled',
      'display': 'DOM Clipboard Events',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'dom.event.contextmenu.enabled',
      'display': 'DOM Content Menu Events',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'dom.battery.enabled',
      'display': 'Battery API',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'dom.gamepad.enabled',
      'display': 'Gamepad API',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'dom.storage.enabled',
      'display': 'Local Storage',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'dom.enable_performance',
      'display': 'DOM Performance',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'dom.enable_resource_timing',
      'display': 'DOM Resource Timing',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'browser.search.suggest.enabled',
      'display': 'Search Suggestions',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'places.history.enabled',
      'display': 'History',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'security.ssl.require_safe_negotiation',
      'display': 'Safe Negotiation',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'security.ssl.treat_unsafe_negotiation_as_broken',
      'display': 'Unsafe Negotiation as Broken',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'browser.display.use_document_fonts',
      'display': 'Fonts Detectable',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'privacy.donottrackheader.enabled',
      'display': 'Do Not Track',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'privacy.donottrackheader.value',
      'display': 'Do Not Track',
      'type': 'integer',
      'good': 1
    },
    {
      'name': 'datareporting.healthreport.service.enabled',
      'display': 'Health Reports',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'datareporting.healthreport.uploadEnabled',
      'display': 'Health Reports (Upload)',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'pdfjs.disabled',
      'display': 'pdfjs',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'layout.css.visited_links_enabled',
      'display': 'CSS Visited Links',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'security.mixed_content.block_active_content',
      'display': 'Block Active Mixed Content',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'security.mixed_content.block_display_content',
      'display': 'Block Display Mixed Content',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'geo.enabled',
      'display': 'Location API',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'geo.wifi.uri',
      'display': 'Location Provider',
      'type': 'string',
      'good': 'https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%'
    },
    {
      'name': 'network.dns.disablePrefetch',
      'display': 'DNS Prefetch',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'camera.control.face_detection.enabled',
      'display': 'Camera Face Detection',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'device.sensors.enabled',
      'display': 'Sensors',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'webgl.disabled',
      'display': 'WebGL',
      'type': 'boolean',
      'good': true
    },
    {
      'name': 'network.http.sendRefererHeader',
      'display': 'Referrer',
      'type': 'integer',
      'good': 0
    },
    {
      'name': 'network.http.sendSecureXSiteReferrer',
      'display': 'Referrer (Secure)',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'network.dnsCacheExpiration',
      'display': 'DNS Cache',
      'type': 'integer',
      'good': 0
    },
    {
      'name': 'browser.cache.disk.enable',
      'display': 'Disk Cache',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'browser.cache.memory.enable',
      'display': 'Memory Cache',
      'type': 'boolean',
      'good': false
    },
    {
      'name': 'network.http.use-cache',
      'display': 'Network Cache',
      'type': 'boolean',
      'good': false
    },
  ]
});*/