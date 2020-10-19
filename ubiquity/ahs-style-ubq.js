feed.title  = _("Style");
feed.author = _("Anas H. Sulaiman (AHS.PW)");

var getElementStyle = function(el, prop) {
  if (el.ownerDocument.defaultView.getComputedStyle) {
    return el.ownerDocument.defaultView.getComputedStyle(el).getPropertyValue(prop);
  } else if (el.currentStyle) {
    return el.currentStyle[prop];
  } else {
    return el.style[prop];
  }
};

var isArabicText = function(text) {
  return text.trim().match(/^[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/);
};

CmdUtils.CreateCommand({
  names: ['myfontar'],
  description: 'Add Arabic font styles for all elements that starts with arabic text.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
    'object font name': CmdUtils.NounType({
      Amiri: {
        family: 'Amiri',
        style: "@font-face{font-family:'Amiri';font-style:normal;font-weight:400;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.eot);src:local(Amiri),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}@font-face{font-family:'Amiri';font-style:italic;font-weight:400;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.eot);src:local(Amiri Italic),local(Amiri-Italic),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}@font-face{font-family:'Amiri';font-style:normal;font-weight:700;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.eot);src:local(Amiri Bold),local(Amiri-Bold),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}@font-face{font-family:'Amiri';font-style:italic;font-weight:700;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.eot);src:local(Amiri Bold Italic),local(Amiri-BoldItalic),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}"
      }, 
      AraJozoor: {
        family: 'AraJozoor',
        style: "@font-face{font-family:'AraJozoor';src:url(//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.eot);src:local(AraJozoor),url('//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.eot?') format('eot'),url('//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.woff') format('woff'),url('//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.ttf') format('truetype'),url('//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.svg#AraJozoor-Regular') format('svg');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}"
      },
      DroidArabicKufi: {
        family: 'Droid Arabic Kufi',
        style: "@font-face{font-family:'Droid Arabic Kufi';font-style:normal;font-weight:400;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.eot);src:local(Droid Arabic Kufi),local(DroidArabicKufi),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}@font-face{font-family:'Droid Arabic Kufi';font-style:normal;font-weight:700;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.eot);src:local(Droid Arabic Kufi Bold),local(DroidArabicKufi-Bold),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}"
      },
      DroidArabicNaskh: {
        family: 'Droid Arabic Naskh',
        style: "@font-face{font-family:'Droid Arabic Naskh';font-style:normal;font-weight:400;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.eot);src:local(Droid Arabic Naskh),local(DroidArabicNaskh),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}@font-face{font-family:'Droid Arabic Naskh';font-style:normal;font-weight:700;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.eot);src:local(Droid Arabic Naskh Bold),local(DroidArabicNaskh-Bold),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}"
      },
      JFFlat:{
        family: 'JF Flat',
        style: "@font-face{font-family:'JF Flat';src:url('//dl.dropboxusercontent.com/s/8pzj9vuc4mgvl5s/JF-Flat-regular.eot');src:local(JF Flat),local(JFFlat),url('//dl.dropboxusercontent.com/s/8pzj9vuc4mgvl5s/JF-Flat-regular.eot?#iefix') format('embedded-opentype'),url('//dl.dropboxusercontent.com/s/fcjak7abxtwv3nz/JF-Flat-regular.svg#JF Flat Regular') format('svg'),url('//dl.dropboxusercontent.com/s/rbui0d1s7wr1do2/JF-Flat-regular.woff') format('woff'),url('//dl.dropboxusercontent.com/s/xmdn1rxxwxje2k2/JF-Flat-regular.ttf') format('truetype');font-weight:normal;font-style:normal;unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}"
      }, 
      Lateef: {
        family: 'Lateef',
        style: "@font-face{font-family:'Lateef';font-style:normal;font-weight:400;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.eot);src:local(Lateef),url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}"
      },
      Scheherazade: {
        family: 'Scheherazade',
        style: "@font-face{font-family:'Scheherazade';font-style:normal;font-weight:400;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.eot);src:local(Scheherazade),url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}"
      },
      Thabit: {
        family: 'Thabit',
        style: "@font-face{font-family:'Thabit';font-style:normal;font-weight:400;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.eot);src:local(Thabit),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.ttf) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}@font-face{font-family:'Thabit';font-style:normal;font-weight:700;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.eot);src:local(Thabit Bold),local(Thabit-Bold),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.ttf) format('truetype')}@font-face{font-family:'Thabit';font-style:italic;font-weight:700;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.eot);src:local(Thabit Bold Italic),local(Thabit-BoldItalic),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.ttf) format('truetype')}@font-face{font-family:'Thabit';font-style:italic;font-weight:400;src:url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.eot);src:local(Thabit Italic),local(Thabit-Italic),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.eot?#iefix) format('embedded-opentype'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.woff2) format('woff2'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.woff) format('woff'),url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.ttf) format('truetype')}"
      }
    })
  },
  preview: function(pbl) {
    pbl.innerHTML = 'Supported Fonts: <ul style="list-style:none"><li>' + 
    this.arguments[0].nountype._list.map(function(obj){return obj.html;}).join('</li><li>') + 
    '</li></ul>';
  },
  execute: function({object:{data}}) {
    if (!data) {
      this._deactivate();
      return;
    }

    this._activate(data);
  },
  _activate: function(font) {
    if (this._alreadyActivated()) {
      this._removeStyles();
    }
    Utils.currentTab.window.document.documentElement.setAttribute(this._documentProperty, '');
    this._addStyles(font.style, font.family);

    displayMessage({
      title: 'Style',
      text: 'Activated Arabic font ' + font.family
    });
  },
  _deactivate: function() {
    this._removeStyles();
    Utils.currentTab.window.document.documentElement.removeAttribute(this._documentProperty);
    displayMessage({
      title: 'Style',
      text: 'Deactivated Arabic fonts'
    });
  },
  _alreadyActivated: function() {
    return Utils.currentTab.window.document.documentElement.getAttribute(this._documentProperty) === '';
  },
  _addStyles: function(fontStyle, fontFamily) {
    var styleEl = Utils.currentTab.window.document.createElement('style');
    styleEl.id = this._styleElementId;
    styleEl.appendChild(Utils.currentTab.window.document.createTextNode(fontStyle));
    Utils.currentTab.window.document.head.appendChild(styleEl);
    this._addRemoveInlineStyles(true, fontFamily);
  },
  _removeStyles: function() {
    var styleEl = Utils.currentTab.window.document.getElementById(this._styleElementId);
    if (styleEl) {
      Utils.currentTab.window.document.head.removeChild(styleEl);
    }
    this._addRemoveInlineStyles(false);
  },
  _addRemoveInlineStyles: function(add, fontFamily) {
    var walker = Utils.currentTab.window.document.createTreeWalker(Utils.currentTab.window.document.body, Utils.currentTab.window.NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      var node = walker.currentNode;
      if (isArabicText(node.textContent)) {
        var parent = node.parentNode;
        if (add) {
          var pStyle = getElementStyle(parent, 'font-family');
          if (pStyle.indexOf(fontFamily) < 0) {
            parent.style.cssText += ' ' + 'font-family: ' + fontFamily + ', ' + pStyle;
          }
        } else {
          parent.style.cssText = parent.style.cssText.replace(/(?:^|\s)font-family:[^;$]*/g, '').trim();
        }
      }
    }
  },
  _styleElementId: 'ahs-my-font-ar-style',
  _documentProperty: 'ahs-my-font-ar',
    /*
    Styles

    Menu:
    .my-font-ar {
        position:fixed;
        left: 10px;
        top: 10px;
        width:200px;
        display:block;
        border:1px solid #b0b0b0;
        background:#fff;
        padding:3px 0 3px 3px;
        text-align:left;
        background-color: #FFF;
        border-radius:3px;
        z-index: 999;
    }
    .my-font-ar ul {
        list-style: none;
    }
    .my-font-ar li {
        cursor: pointer;
        display:block;
        float:left;
        margin:0;
        width:191px;
        border:none;
        padding:8px 0 8px 6px;
        background:#fff;
        color:black;
        font:normal normal normal 12px/100% Verdana, sans-serif;
        letter-spacing:normal;
        word-spacing:normal;
    }
    .my-font-ar li:hover {
        background:#a0a0a0;
        color:white;
        border:none;
    }

    Amiri:
    @font-face {
      font-family: 'Amiri';
      font-style: normal;
      font-weight: 400;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.eot);
      src: local(Amiri), url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Regular.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }
    @font-face {
      font-family: 'Amiri';
      font-style: italic;
      font-weight: 400;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.eot);
      src: local(Amiri Italic), local(Amiri-Italic), url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Slanted.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }
    @font-face {
      font-family: 'Amiri';
      font-style: normal;
      font-weight: 700;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.eot);
      src: local(Amiri Bold), local(Amiri-Bold), url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-Bold.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }
    @font-face {
      font-family: 'Amiri';
      font-style: italic;
      font-weight: 700;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.eot);
      src: local(Amiri Bold Italic), local(Amiri-BoldItalic), url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/amiri/v2/Amiri-BoldSlanted.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }

    AraJozoor:
    @font-face {
      font-family: 'AraJozoor';
      src: url(//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.eot);
      src: local(AraJozoor), url('//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.eot?') format('eot'), 
           url('//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.woff') format('woff'), 
           url('//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.ttf')  format('truetype'),
           url('//googledrive.com/host/0B2fOP9oGbP_bRGVQUmYxaDVkajg/jozor/AraJozoor-Regular.svg#AraJozoor-Regular') format('svg');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }

    Droid Arabic Kufi:
    @font-face {
      font-family: 'Droid Arabic Kufi';
      font-style: normal;
      font-weight: 400;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.eot);
      src: local(Droid Arabic Kufi), local(DroidArabicKufi), url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Regular.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }
    @font-face {
      font-family: 'Droid Arabic Kufi';
      font-style: normal;
      font-weight: 700;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.eot);
      src: local(Droid Arabic Kufi Bold), local(DroidArabicKufi-Bold), url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabickufi/v3/DroidKufi-Bold.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }

    Droid Arabic Naskh:
    @font-face {
      font-family: 'Droid Arabic Naskh';
      font-style: normal;
      font-weight: 400;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.eot);
      src: local(Droid Arabic Naskh), local(DroidArabicNaskh), url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Regular.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }
    @font-face {
      font-family: 'Droid Arabic Naskh';
      font-style: normal;
      font-weight: 700;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.eot);
      src: local(Droid Arabic Naskh Bold), local(DroidArabicNaskh-Bold), url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/droidarabicnaskh/v4/DroidNaskh-Bold.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }

    JF Flat:
    @font-face {
        font-family: 'JF Flat';
        src: url('//dl.dropboxusercontent.com/s/8pzj9vuc4mgvl5s/JF-Flat-regular.eot');
        src: local(JF Flat), local(JFFlat), url('//dl.dropboxusercontent.com/s/8pzj9vuc4mgvl5s/JF-Flat-regular.eot?#iefix') format('embedded-opentype'),
        url('//dl.dropboxusercontent.com/s/fcjak7abxtwv3nz/JF-Flat-regular.svg#JF Flat Regular') format('svg'),
        url('//dl.dropboxusercontent.com/s/rbui0d1s7wr1do2/JF-Flat-regular.woff') format('woff'),
        url('//dl.dropboxusercontent.com/s/xmdn1rxxwxje2k2/JF-Flat-regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }

    Lateef:
    @font-face {
      font-family: 'Lateef';
      font-style: normal;
      font-weight: 400;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.eot);
      src: local(Lateef), url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/lateef/v2/LateefRegOT.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }

    Scheherazade:
    @font-face {
      font-family: 'Scheherazade';
      font-style: normal;
      font-weight: 400;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.eot);
      src: local(Scheherazade), url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/scheherazade/v2/ScheherazadeRegOT.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }

    Thabit:
    @font-face {
      font-family: 'Thabit';
      font-style: normal;
      font-weight: 400;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.eot);
      src: local(Thabit), url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit.ttf) format('truetype');
      unicode-range: U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF;
    }
    @font-face {
      font-family: 'Thabit';
      font-style: normal;
      font-weight: 700;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.eot);
      src: local(Thabit Bold), local(Thabit-Bold), url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Bold.ttf) format('truetype');
    }
    @font-face {
      font-family: 'Thabit';
      font-style: italic;
      font-weight: 700;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.eot);
      src: local(Thabit Bold Italic), local(Thabit-BoldItalic), url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-BoldOblique.ttf) format('truetype');
    }
    @font-face {
      font-family: 'Thabit';
      font-style: italic;
      font-weight: 400;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.eot);
      src: local(Thabit Italic), local(Thabit-Italic), url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/thabit/v6/Thabit-Oblique.ttf) format('truetype');
    }
    */
});

CmdUtils.CreateCommand({
  names: ['myfont'],
  description: 'Add font styles for all text elements.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  arguments: {
    'object font name': CmdUtils.NounType({
      OpenSans: {
        family: 'Open Sans',
        style: "//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
      },
      DroidSans: {
        family: 'Droid Sans',
        style: "//fonts.googleapis.com/css?family=Droid+Sans:400,700"
      },
      JFFlat: {
        family: 'JF Flat',
        style: "//dl.dropboxusercontent.com/s/jhrbc11schclt6n/jfflat.css"
      }
    })
  },
  preview: function(pbl) {
    pbl.innerHTML = 'Supported Fonts: <ul style="list-style:none"><li>' + 
    this.arguments[0].nountype._list.map(function(obj){return obj.html;}).join('</li><li>') + 
    '</li></ul>';
  },
  execute: function({object:{data}}) {
    if (!data) {
      this._deactivate();
      return;
    }

    this._activate(data);
  },
  _activate: function(font) {
    if (this._alreadyActivated()) {
      this._removeStyles();
    }
    Utils.currentTab.window.document.documentElement.setAttribute(this._documentProperty, '');
    this._addStyles(font.style, font.family);

    displayMessage({
      title: 'Style',
      text: 'Activated Latin font ' + font.family
    });
  },
  _deactivate: function() {
    this._removeStyles();
    Utils.currentTab.window.document.documentElement.removeAttribute(this._documentProperty);
    displayMessage({
      title: 'Style',
      text: 'Deactivated Latin fonts'
    });
  },
  _alreadyActivated: function() {
    return Utils.currentTab.window.document.documentElement.getAttribute(this._documentProperty) === '';
  },
  _addStyles: function(fontStyle, fontFamily) {
    var linkEl = Utils.currentTab.window.document.createElement('link');
    linkEl.id = this._linkElementId;
    linkEl.type = "text/css";
    linkEl.rel = "stylesheet";
    linkEl.href = fontStyle;

    var styleEl = Utils.currentTab.window.document.createElement('style');
    styleEl.id = this._styleElementId;
    styleEl.appendChild(Utils.currentTab.window.document.createTextNode('.' + this._styleClass + '{font-family: "' + fontFamily + '"}'));

    Utils.currentTab.window.document.head.appendChild(linkEl);
    Utils.currentTab.window.document.head.appendChild(styleEl);

    this._addRemoveStyleClass(true, fontFamily);
  },
  _removeStyles: function() {
    var styleEl = Utils.currentTab.window.document.getElementById(this._styleElementId);
    var linkEl = Utils.currentTab.window.document.getElementById(this._linkElementId);
    if (styleEl) {
      Utils.currentTab.window.document.head.removeChild(styleEl);
    }
    if (linkEl) {
      Utils.currentTab.window.document.head.removeChild(linkEl);
    }
    this._addRemoveStyleClass(false);
  },
  _addRemoveStyleClass: function(add, fontFamily) {
    var walker = Utils.currentTab.window.document.createTreeWalker(Utils.currentTab.window.document.body, Utils.currentTab.window.NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      var parent = walker.currentNode.parentNode;
      if (add) {
        if (parent.className.indexOf(this._styleClass) < 0)
          parent.className += ' ' + this._styleClass;
      } else {
        parent.className = parent.className.replace(new RegExp('(?:^|\\s)' + this._styleClass + '(?!\\S)', 'g'), '').trim();
      }
    }
  },
  _styleElementId: 'ahs-my-font-style',
  _linkElementId: 'ahs-my-font-style-link',
  _styleClass: 'ahs-my-font',
  _documentProperty: 'ahs-my-font'
    /*
    Styles

    Menu:
    .my-font {
        position:fixed;
        left: 10px;
        top: 10px;
        width:200px;
        display:block;
        border:1px solid #b0b0b0;
        background:#fff;
        padding:3px 0 3px 3px;
        text-align:left;
        background-color: #FFF;
        border-radius:3px;
        z-index: 999;
    }
    .my-font ul {
        list-style: none;
    }
    .my-font li {
        cursor: pointer;
        display:block;
        float:left;
        margin:0;
        width:191px;
        border:none;
        padding:8px 0 8px 6px;
        background:#fff;
        color:black;
        font:normal normal normal 12px/100% Verdana, sans-serif;
        letter-spacing:normal;
        word-spacing:normal;
    }
    .my-font li:hover {
        background:#a0a0a0;
        color:white;
        border:none;
    }
    */
});

CmdUtils.CreateCommand({
  names: ['rtlify'],
  description: 'Add rtl styles for any element that starts with arabic text.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var styleElId = 'ahs-style-rtl';
    var styleClass = 'ahs-rtl';
    var floatClass = 'ahs-flt';
    var styleEl = Utils.currentTab.window.document.getElementById(styleElId);
    var add;

    if (styleEl) {
      Utils.currentTab.window.document.head.removeChild(styleEl);
      add = false;
    } else {
      styleEl = Utils.currentTab.window.document.createElement('style');
      styleEl.id = styleElId;
      styleEl.appendChild(Utils.currentTab.window.document.createTextNode('.' + styleClass + '{direction: rtl; unicode-bidi: embed; text-align: right;}' + '.' + floatClass + '{float: right;}'));
      Utils.currentTab.window.document.head.appendChild(styleEl);
      add = true;
    }

    var walker = Utils.currentTab.window.document.createTreeWalker(Utils.currentTab.window.document.body, Utils.currentTab.window.NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      var node = walker.currentNode;
      if (isArabicText(node.textContent)) {
        var parent = node.parentNode;
        /*get the first parent element that is not inline
        if it's inline, then it's certainly not floated*/
        while (getElementStyle(parent, 'display') === 'inline') {
          parent = parent.parentNode;
        }
        if (add) {
          /*don't add styles unless necessary*/
          if (getElementStyle(parent, 'direction') !== 'rtl' || getElementStyle(parent, 'unicode-bidi') !== 'embed' || getElementStyle(parent, 'text-align') !== 'right') {
            if (parent.className.indexOf(styleClass) < 0) {
              parent.className += ' ' + styleClass;
            }
            if (getElementStyle(parent, 'float') !== 'none' && parent.className.indexOf(floatClass) < 0) {
              parent.className += ' ' + floatClass;
            }
          }
        } else {
          parent.className = parent.className.replace(new RegExp('(?:^|\\s)(' + styleClass + ')|(' + floatClass + ')(?!\\S)', 'g'), '').trim();
        }
      }
    }

    if (add) {
      displayMessage({
        title: 'Style',
        text: 'Activated RTL styles'
      });
    } else {
      displayMessage({
        title: 'Style',
        text: 'Deactivated RTL styles'
      });
    }
  }
});

CmdUtils.CreateCommand({
  names: ['highlight sentences', 'hilitsen'],
  description: 'Highlight sentences on hover.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var document = Utils.currentTab.window.document;
    if (document.body.hasAttribute('hilitsen')) {
      var spans = document.querySelectorAll('span.hilitsen');
      for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].parentNode.insertBefore(document.createTextNode(spans[i].textContent), spans[i]);
        spans[i].parentNode.removeChild(spans[i]);
      }

      document.head.removeChild(document.querySelector('style.hilitsen'));
      document.body.removeAttribute('hilitsen');

      displayMessage({
        title: 'Style',
        text: 'Disabled sentences highlight'
      });
    } else {
      var style = document.createElement('style');
      style.className += ' hilitsen';
      style.innerHTML = '.hilitsen:hover{background-color:rgba(128,128,128,.5);}';

      var walker = document.createTreeWalker(document.body, Utils.currentTab.window.NodeFilter.SHOW_TEXT);
      var swaps = [];
      while (walker.nextNode()) {
        var node = walker.currentNode;
        if (['font','div','p','span','i','b','strong','em'].indexOf(node.parentNode.nodeName.toLowerCase()) < 0) {
          continue;
        }

        var span = document.createElement('span');
        var sents = node.textContent.split(/(?=[\.\?!])/);
        for (var i = 0; i < sents.length; i++) {
          span.innerHTML += '<span class="hilitsen">' + (i == 0 ? sents[i] : sents[i].substring(1)) + (i == sents.length-1 ? '' : sents[i+1][0]) + '</span>';
        }
        /*span.innerHTML = '<span class="hilitsen">' 
        + node.textContent.split(/(?=[\.\?!])/).join('</span><span class="hilitsen">') 
        + '</span>';*/
        swaps.push({
          node: node,
          span: span
        });
      }

      for (var i = swaps.length - 1; i >= 0; i--) {
        swaps[i].node.parentNode.insertBefore(swaps[i].span, swaps[i].node);
        swaps[i].node.parentNode.removeChild(swaps[i].node);
      }

      document.head.appendChild(style);
      document.body.setAttribute('hilitsen', '');

      displayMessage({
        title: 'Style',
        text: 'Enabled sentences highlight'
      });
    }
  }
});