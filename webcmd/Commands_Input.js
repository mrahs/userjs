WebCmd.CmdUtils.createCommand({
  names: ['input en2ar'],
  desc: 'Repalce all English characters in the currently active text input element, with the corresponding Arabic ones on the keyboard.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  executeContent: function() {
    var el = document.activeElement;
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

WebCmd.CmdUtils.createCommand({
  names: ['input forms'],
  desc: 'Form operations such as clearing fields and showing passwords (based on Web Developer addon by chrispederick).',
  previewContent: function() {
    return 'Supported Operations: <ul style="list-style:none"><li>' + 
    Object.keys(this.contentUtils.operations).join('</li><li>') +
    '</li></ul>';
  },
  executeContent: function(args) {
    if (!args) return;

    if ('clear'.indexOf(args) >= 0) {
      this.contentUtils.clear();
    } else if ('details'.indexOf(args) >= 0) {
      this.contentUtils.displayDetails();
    } else if ('pass'.indexOf(args) >= 0) {
      this.contentUtils.displayPasswords();
    } else if ('enable'.indexOf(args) >= 0) {
      this.contentUtils.enableForms();
    } else if ('write'.indexOf(args) >= 0) {
      this.contentUtils.writableForms();
    }
  },
  contentUtils: {
    operations: {
      'Clear': 'clear',
      'DisplayDetails': 'details',
      'DisplayPasswords': 'pass',
      'EnableForms': 'enable',
      'WritableForms': 'write'
    },
    clear: function() {
      var forms = document.forms,
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

      WebCmd.Utils.notify({
        title: 'Input',
        message: 'Cleared ' + nEl + ' fields in ' + forms.length + ' forms'
      });
    },
    displayDetails: function() {
      var formsDetailsEls = document.querySelectorAll('.wdformdd');
      var n = 0;
      var msg = '';

      if (formsDetailsEls.length > 0) {
        Array.prototype.forEach.call(formsDetailsEls, function(el) {
          el.remove();
          n++;
        });
        msg = 'Hid ' + n + ' displayed forms';
      } else {
        Array.prototype.forEach.call(document.forms, function(form) {
          var detailsEl,
            text = form.cloneNode(false).outerHTML.replace('</form>', '') + '\n';
          Array.prototype.forEach.call(form.elements, function(element) {
            text += '  ' + element.outerHTML + '\n';
          });
          text += '</form>';
          detailsEl = document.createElement('pre');
          detailsEl.setAttribute('style', 'white-space: pre;');
          detailsEl.setAttribute('class', 'wdformdd');
          detailsEl.textContent = text;
          form.parentNode.insertBefore(detailsEl, form.nextSibling);
          n++;
        });
        msg = 'Displayed ' + n + ' forms';
      }

      WebCmd.Utils.notify({
        title: 'Input',
        message: msg
      });
    },
    displayPasswords: function() {
      var inputPass = document.querySelectorAll('input[type=password]'),
          inputEdited = document.querySelectorAll('input[wdfdp=true]'),
          n = 0;

      Array.prototype.forEach.call(inputPass, function(el) {
        el.setAttribute('type', 'text');
        el.setAttribute('wdfdp', 'true');
        n++;
      });
      Array.prototype.forEach.call(inputEdited, function(el) {
        el.setAttribute('type', 'password');
        el.removeAttribute('wdfdp');
        n++;
      });

      WebCmd.Utils.notify({
        title: 'Input',
        message: 'Toggled ' + n + ' password fields'
      });
    },
    enableForms: function() {
      var nEl = 0, nF = 0;
      Array.prototype.forEach.call(document.forms, function(form) {
        nF++;
        var elements = form.elements;
        Array.prototype.forEach.call(elements, function(element) {
          element.disabled = false;
          nEl++;
        });
      });

      WebCmd.Utils.notify({
        title: 'Input',
        message: 'Enabled ' + nEl + ' fields in ' + nF + ' forms'
      });
    },
    writableForms: function() {
      var nEl = 0, nF = 0;
      Array.prototype.forEach.call(document.forms, function(form) {
        nF++;
        Array.prototype.forEach.call(form.elements, function(element) {
          element.removeAttribute('readonly');
          nEl++;
        });
      });

      WebCmd.Utils.notify({
        title: 'Input',
        message: 'Made ' + nEl + ' fields writable in ' + nF + ' forms'
      });
    }
  }
});
