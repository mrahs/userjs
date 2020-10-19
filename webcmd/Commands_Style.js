WebCmd.CmdUtils.createCommand({
  names: ['myfontar'],
  descr: 'Add Arabic font styles for all elements that starts with arabic text.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  previewContent: function() {
    return 'Supported Fonts: <ul><li>' + 
      Object.keys(this.contentUtils.fonts).join('</li><li>') + 
      '</li></ul>';
  },
  executeContent: function(args) {
    if (!args) {
      this.contentUtils.deactivate();
      return;
    }

    this.contentUtils.activate(
      this.contentUtils.fonts[
        Object.keys(this.contentUtils.fonts).filter(function(item){return item.toLowerCase().indexOf(args) >= 0;})[0]
      ]
    );
  },
  contentUtils: {
    fonts: {
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
    },
    activate: function(font) {
      if (this.alreadyActivated()) {
        this.removeStyles();
      }
      window.document.documentElement.setAttribute(this.documentProperty, '');
      this.addStyles(font.style, font.family);

      WebCmd.Utils.notify({
        title: 'Style',
        message: 'Activated Arabic font ' + font.family
      });
    },
    deactivate: function() {
      this.removeStyles();
      window.document.documentElement.removeAttribute(this.documentProperty);
      WebCmd.Utils.notify({
        title: 'Style',
        message: 'Deactivated Arabic fonts'
      });
    },
    alreadyActivated: function() {
      return window.document.documentElement.getAttribute(this.documentProperty) === '';
    },
    addStyles: function(fontStyle, fontFamily) {
      var styleEl = window.document.createElement('style');
      styleEl.id = this.styleElementId;
      styleEl.appendChild(window.document.createTextNode(fontStyle));
      window.document.head.appendChild(styleEl);
      this.addRemoveInlineStyles(true, fontFamily);
    },
    removeStyles: function() {
      var styleEl = window.document.getElementById(this.styleElementId);
      if (styleEl) {
        window.document.head.removeChild(styleEl);
      }
      this.addRemoveInlineStyles(false);
    },
    addRemoveInlineStyles: function(add, fontFamily) {
      var walker = window.document.createTreeWalker(window.document.body, window.NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        var node = walker.currentNode;
        if (this.isArabicText(node.textContent)) {
          var parent = node.parentNode;
          if (add) {
            var pStyle = this.getElementStyle(parent, 'font-family');
            if (pStyle.indexOf(fontFamily) < 0) {
              parent.style.cssText += ' ' + 'font-family: ' + fontFamily + ', ' + pStyle;
            }
          } else {
            parent.style.cssText = parent.style.cssText.replace(/(?:^|\s)font-family:[^;$]*/g, '').trim();
          }
        }
      }
    },
    isArabicText: function(text) {
      return text.trim().match(/^[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/);
    },
    getElementStyle: function(el, prop) {
      if (el.ownerDocument.defaultView.getComputedStyle) {
        return el.ownerDocument.defaultView.getComputedStyle(el).getPropertyValue(prop);
      } else if (el.currentStyle) {
        return el.currentStyle[prop];
      } else {
        return el.style[prop];
      }
    },
    styleElementId: 'ahs-my-font-ar-style',
    documentProperty: 'ahs-my-font-ar'
  }
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

WebCmd.CmdUtils.createCommand({
  names: ['myfont'],
  descr: 'Add font styles for all text elements.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  previewContent: function() {
    return 'Supported Fonts: <ul><li>' + 
      Object.keys(this.contentUtils.fonts).join('</li><li>') + 
      '</li></ul>';
  },
  executeContent: function(args) {
    if (!args) {
      this.contentUtils.deactivate();
      return;
    }

    this.contentUtils.activate(
      this.contentUtils.fonts[
        Object.keys(this.contentUtils.fonts).filter(function(item){return item.toLowerCase().indexOf(args) >= 0;})[0]
      ]
    );
  },
  contentUtils: {
    fonts: {
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
    },
    activate: function(font) {
      if (this.alreadyActivated()) {
        this.removeStyles();
      }
      window.document.documentElement.setAttribute(this.documentProperty, '');
      this.addStyles(font.style, font.family);

      WebCmd.Utils.notify({
        title: 'Style',
        message: 'Activated Latin font ' + font.family
      });
    },
    deactivate: function() {
      this.removeStyles();
      window.document.documentElement.removeAttribute(this.documentProperty);
      WebCmd.Utils.notify({
        title: 'Style',
        message: 'Deactivated Latin fonts'
      });
    },
    alreadyActivated: function() {
      return window.document.documentElement.getAttribute(this.documentProperty) === '';
    },
    addStyles: function(fontStyle, fontFamily) {
      var linkEl = window.document.createElement('link');
      linkEl.id = this.linkElementId;
      linkEl.type = "text/css";
      linkEl.rel = "stylesheet";
      linkEl.href = fontStyle;

      var styleEl = window.document.createElement('style');
      styleEl.id = this.styleElementId;
      styleEl.appendChild(window.document.createTextNode('.' + this.styleClass + '{font-family: "' + fontFamily + '"}'));

      window.document.head.appendChild(linkEl);
      window.document.head.appendChild(styleEl);

      this.addRemoveStyleClass(true, fontFamily);
    },
    removeStyles: function() {
      var styleEl = window.document.getElementById(this.styleElementId);
      var linkEl = window.document.getElementById(this.linkElementId);
      if (styleEl) {
        window.document.head.removeChild(styleEl);
      }
      if (linkEl) {
        window.document.head.removeChild(linkEl);
      }
      this.addRemoveStyleClass(false);
    },
    addRemoveStyleClass: function(add, fontFamily) {
      var walker = window.document.createTreeWalker(window.document.body, window.NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        var parent = walker.currentNode.parentNode;
        if (add) {
          if (parent.className.indexOf(this.styleClass) < 0)
            parent.className += ' ' + this.styleClass;
        } else {
          parent.className = parent.className.replace(new RegExp('(?:^|\\s)' + this.styleClass + '(?!\\S)', 'g'), '').trim();
        }
      }
    },
    styleElementId: 'ahs-my-font-style',
    linkElementId: 'ahs-my-font-style-link',
    styleClass: 'ahs-my-font',
    documentProperty: 'ahs-my-font'
  }
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

WebCmd.CmdUtils.createCommand({
  names: ['rtlify'],
  descr: 'Add rtl styles for any element that starts with arabic text.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  executeContent: function() {
    var styleElId = 'ahs-style-rtl';
    var styleClass = 'ahs-rtl';
    var floatClass = 'ahs-flt';
    var styleEl = window.document.getElementById(styleElId);
    var add;

    if (styleEl) {
      window.document.head.removeChild(styleEl);
      add = false;
    } else {
      styleEl = window.document.createElement('style');
      styleEl.id = styleElId;
      styleEl.appendChild(window.document.createTextNode('.' + styleClass + '{direction: rtl; unicode-bidi: embed; text-align: right;}' + '.' + floatClass + '{float: right;}'));
      window.document.head.appendChild(styleEl);
      add = true;
    }

    var isArabicText = function(text) {
      return text.trim().match(/^[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/);
    };

    var getElementStyle = function(el, prop) {
      if (el.ownerDocument.defaultView.getComputedStyle) {
        return el.ownerDocument.defaultView.getComputedStyle(el).getPropertyValue(prop);
      } else if (el.currentStyle) {
        return el.currentStyle[prop];
      } else {
        return el.style[prop];
      }
    };

    var walker = window.document.createTreeWalker(window.document.body, window.NodeFilter.SHOW_TEXT);
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
      WebCmd.Utils.notify({
        title: 'Style',
        message: 'Activated RTL styles'
      });
    } else {
      WebCmd.Utils.notify({
        title: 'Style',
        message: 'Deactivated RTL styles'
      });
    }
  }
});

WebCmd.CmdUtils.createCommand({
  names: ['hilitsen'],
  descr: 'Highlight sentences on hover.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  executeContent: function() {
    var document = window.document;
    if (document.body.hasAttribute('hilitsen')) {
      var spans = document.querySelectorAll('span.hilitsen');
      for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].parentNode.insertBefore(document.createTextNode(spans[i].textContent), spans[i]);
        spans[i].parentNode.removeChild(spans[i]);
      }

      document.head.removeChild(document.querySelector('style.hilitsen'));
      document.body.removeAttribute('hilitsen');

      WebCmd.Utils.notify({
        title: 'Style',
        message: 'Disabled sentences highlight'
      });
    } else {
      var style = document.createElement('style');
      style.className += ' hilitsen';
      style.innerHTML = '.hilitsen:hover{background-color:rgba(128,128,128,.5);}';

      var walker = document.createTreeWalker(document.body, window.NodeFilter.SHOW_TEXT);
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

      WebCmd.Utils.notify({
        title: 'Style',
        message: 'Enabled sentences highlight'
      });
    }
  }
});