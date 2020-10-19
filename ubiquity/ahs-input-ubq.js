feed.title  = _("Input");
feed.author = _("Anas H. Sulaiman (AHS.PW)");

CmdUtils.CreateCommand({
  names: ['en2ar', 'input en2ar'],
  description: 'Repalce all English characters in the currently active text input element, with the corresponding Arabic ones on the keyboard.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function() {
    var el = context.focusedWindow.document.activeElement;
    if (!el.type || ['text', 'search', 'tel', 'password', 'textarea'].indexOf(el.type) < 0) return;
    var textEn = el.value.trim();
    if (textEn.length === 0) return;
    var textAr = '';
    var cEn, cAr;
    var enArMap = {
      a: "ش",
      b: "لا",
      c: "ؤ",
      d: "ي",
      e: "ث",
      f: "ب",
      g: "ل",
      h: "ا",
      i: "ه",
      j: "ت",
      k: "ن",
      l: "م",
      m: "ة",
      n: "ى",
      o: "خ",
      p: "ح",
      q: "ض",
      r: "ق",
      s: "س",
      t: "ف",
      u: "ع",
      v: "ر",
      w: "ص",
      x: "ء",
      y: "غ",
      z: "ئ",
      "[": "ج",
      "]": "د",
      ";": "ك",
      "'": "ط",
      ",": "و",
      ".": "ز",
      "/": "ظ",
      "`": "ذ",
      A: "ِ",
      B: "لآ",
      C: "}",
      D: "]",
      E: "ُ",
      F: "[",
      G: "لأ",
      H: "أ",
      I: "÷",
      J: "ـ",
      K: "،",
      L: "/",
      M: "’",
      N: "آ",
      O: "×",
      P: "؛",
      Q: "َ",
      R: "ٌ",
      S: "ٍ",
      T: "لإ",
      U: "‘",
      V: "{",
      W: "ً",
      X: "ْ",
      Y: "إ",
      Z: "~",
      "{": "<",
      "}": ">",
      ":": ":",
      '"': '"',
      "<": ",",
      ">": ".",
      "?": "؟",
      "~": "ّ"
    };
    for (var i = 0; i < textEn.length; ++i) {
      cEn = textEn.charAt(i);
      cAr = enArMap[cEn];
      if (!cAr) cAr = cEn;
      textAr += cAr;
    }
    el.value = textAr;
  }
});

CmdUtils.CreateCommand({
  names: ['forms', 'input forms'],
  description: 'Form operations such as clearing fields and showing passwords (based on Web Developer addon by chrispederick).',
  arguments: {
    'object operation': CmdUtils.NounType({
      'Clear': 'clear',
      'DisplayDetails': 'details',
      'DisplayPasswords': 'pass',
      'EnableForms': 'enable',
      'WritableForms': 'write'
    })
  },
  preview: function(pbl) {
    pbl.innerHTML = 'Supported Operations: <ul style="list-style:none"><li>' + 
    this.arguments[0].nountype._list.map(function(obj){return obj.html;}).join('</li><li>') + 
    '</li></ul>';
  },
  execute: function({object:{data}}) {
    switch(data) {
      case 'clear':
        this._clear();
        break;
      case 'details':
        this._displayDetails();
        break;
      case 'pass':
        this._displayPasswords();
        break;
      case 'enable':
        this._enableForms();
        break;
      case 'write':
        this._writableForms();
        break;
      default:
    }
  },
  _clear: function() {
    var forms = context.focusedWindow.document.forms,
        elements,
        i, j,
        nEl = 0;

    for (i = 0; i < forms.length; i++) {
      elements = forms[i].elements;
      for (j = 0; j < elements.length; j++) {
        switch (elements[j].tagName.toLowerCase()) {
          case 'input':
            if (elements[j].hasAttribute('type')) {
              switch (elements[j].getAttribute('type')) {
                case 'checkbox':
                case 'radio':
                  elements[j].checked = false;
                  nEl++;
                  break;
                case 'hidden':
                case 'reset':
                case 'submit':
                  break;
                default:
                  elements[j].value = '';
                  nEl++;
              }
            } else {
              elements[j].value = '';
              nEl++;
            }
            break;
          case 'select':
            elements[j].selectedIndex = -1;
            nEl++;
            break;
          case 'textarea':
            elements[j].value = '';
            nEl++;
            break;
        }
      }
    }

    displayMessage({
      title: 'Input',
      text: 'Cleared ' + nEl + ' fields in ' + forms.length + ' forms'
    });
  },
  _displayDetails: function() {
    var formsDetailsEls = context.focusedWindow.document.querySelectorAll('.wdformdd');
    var n = 0;
    var msg = '';

    if (formsDetailsEls.length > 0) {
      Array.forEach(formsDetailsEls, function(el) {
        el.remove();
        n++;
      });
      msg = 'Hid ' + n + ' displayed forms';
    } else {
      Array.forEach(context.focusedWindow.document.forms, function(form) {
        var detailsEl,
          text = form.cloneNode(false).outerHTML.replace('</form>', '') + '\n';
        Array.forEach(form.elements, function(element) {
          text += '  ' + element.outerHTML + '\n';
        });
        text += '</form>';
        detailsEl = context.focusedWindow.document.createElement('pre');
        detailsEl.setAttribute('style', 'white-space: pre;');
        detailsEl.setAttribute('class', 'wdformdd');
        detailsEl.textContent = text;
        form.parentNode.insertBefore(detailsEl, form.nextSibling);
        n++;
      });
      msg = 'Displayed ' + n + ' forms';
    }

    displayMessage({
      title: 'Input',
      text: msg
    });
  },
  _displayPasswords: function() {
    var inputPass = context.focusedWindow.document.querySelectorAll('input[type=password]'),
        inputEdited = context.focusedWindow.document.querySelectorAll('input[wdfdp=true]'),
        n = 0;

    Array.forEach(inputPass, function(el) {
      el.setAttribute('type', 'text');
      el.setAttribute('wdfdp', 'true');
      n++;
    });
    Array.forEach(inputEdited, function(el) {
      el.setAttribute('type', 'password');
      el.removeAttribute('wdfdp');
      n++;
    });

    displayMessage({
      title: 'Input',
      text: 'Toggled ' + n + ' password fields'
    });
  },
  _enableForms: function() {
    var nEl = 0, nF = 0;
    Array.forEach(context.focusedWindow.document.forms, function(form) {
      nF++;
      var elements = form.elements;
      Array.forEach(elements, function(element) {
        element.disabled = false;
        nEl++;
      });
    });

    displayMessage({
      title: 'Input',
      text: 'Enabled ' + nEl + ' fields in ' + nF + ' forms'
    });
  },
  _writableForms: function() {
    var nEl = 0, nF = 0;
    Array.forEach(context.focusedWindow.document.forms, function(form) {
      nF++;
      Array.forEach(form.elements, function(element) {
        element.removeAttribute('readonly');
        nEl++;
      });
    });

    displayMessage({
      title: 'Input',
      text: 'Made ' + nEl + ' fields writable in ' + nF + ' forms'
    });
  }
});
