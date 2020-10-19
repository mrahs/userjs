feed.title  = _("Design");
feed.author = _("Anas H. Sulaiman (AHS.PW)");

CmdUtils.CreateCommand({
  names: ['wd display guides', 'design wdguide'],
  description: 'Display Guides (based on Web Developer addon by chrispederick).',
  execute: function() {
    var win = Utils.currentTab.window,
        doc = win.document,
        styles =
          ".wd-line-guide{background:transparent!important;border:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important;box-shadow:none!important;clear:none!important;float:none!important;font-style:normal!important;font-variant:normal!important;font-weight:400!important;letter-spacing:0!important;line-height:1!important;margin:0!important;opacity:1!important;padding:0!important;position:static!important;text-align:left!important;text-decoration:none!important;text-shadow:none!important;text-transform:none!important}" + "::selection{background-color:transparent!important}" + "::-moz-selection{background-color:transparent!important}" + ".wd-horizontal-line-guide{left:0!important;padding:2px 0!important}" + ".wd-horizontal-line-guide div{height:1px!important;width:100%!important}" + ".wd-line-guide{cursor:move!important;position:fixed!important;z-index:2147483646!important}" + ".wd-vertical-line-guide{padding:0 2px!important;top:0!important}" + ".wd-vertical-line-guide div{height:100%!important;width:1px!important}" + "#wd-guides-controls{position:fixed;bottom:0;right:0;opacity:.5}" + "#wd-guides-info{background-color:#000; color:#fff",
        styleEl = doc.getElementById('wd-guides'),
        controls = doc.getElementById('wd-guides-controls'),
        color = '#ff0000',
        control,
        infoControl,
        lines = [],
        evMouseDown,
        evMouseMove,
        evMouseUp,
        evMouseOut,
        evMouseOver,
        evDblclick,
        evResize,
        evChangeColor,
        sizeLine,
        selectedLine,
        addLine,
        updateInfo;

    if (styleEl || controls) {
      Array.forEach(doc.querySelectorAll('.wd-line-guide'), function(el) {
        el.remove();
      });
      styleEl.remove();
      win.documentElement.removeEventListener('mousemove', evMouseMove, false);
      win.removeEventListener('resize', evResize, false);
      controls.remove();
      return;
    }

    evMouseDown = function(event) {
      if (event.button != 2 && event.target) {
        selectedLine = event.target;
      }
    };

    evMouseMove = function(event) {
      if (selectedLine) {
        if (selectedLine.classList.contains('wd-horizontal-line-guide')) {
          selectedLine.style.top = event.pageY + 'px';
        } else {
          selectedLine.style.left = event.pageX + 'px';
        }
        updateInfo(selectedLine);
      }
    };

    evMouseOut = function(event) {
      infoControl.style.visibility = 'hidden';
    };

    evMouseOver = function(event) {
      updateInfo(event.target);
      infoControl.style.visibility = 'visible';
    };

    evMouseUp = function(event) {
      selectedLine = null;
    };

    evResize = function(event) {
      lines.forEach(function(line) {
        sizeLine(line);
      });
    };

    evDblclick = function(event) {
      if (event.target) {
        event.target.remove();
      }
    };

    evChangeColor = function(event) {
      color = event.target.value;
    };

    sizeLine = function(line) {
      if (line.classList.contains('wd-horizontal-line-guide')) {
        if (win.innerWidth > doc.body.offsetWidth) {
          line.style.width = win.innerWidth + 'px';
        } else {
          line.style.width = doc.body.offsetWidth + 'px';
        }
      } else {
        if (win.innerHeight > doc.body.offsetHeight) {
          line.style.height = win.innerHeight + 'px';
        } else {
          line.style.height = doc.body.offsetHeight + 'px';
        }
      }
    };

    updateInfo = function(line) {
      if (line.classList.contains('wd-horizontal-line-guide')) {
        infoControl.textContent = 'Position: ' + line.style.top;
      } else {
        infoControl.textContent = 'Position: ' + line.style.left;
      }
    };

    addLine = function(orientation) {
      var lineColor, line;

      lineColor = doc.createElement('div');
      lineColor.style.backgroundColor = color;
      line = doc.createElement('div');
      line.classList.add('wd-line-guide');
      line.appendChild(lineColor);
      line.addEventListener('mousedown', evMouseDown, false);
      line.addEventListener('mouseup', evMouseUp, false);
      line.addEventListener('mouseover', evMouseOver, false);
      line.addEventListener('mouseout', evMouseOut, false);
      line.addEventListener('dblclick', evDblclick, false);

      if (orientation === 'h') {
        line.style.top = '10%';
        line.style.left = 0;
        line.classList.add('wd-horizontal-line-guide');
      } else if (orientation === 'v') {
        line.style.top = 0;
        line.style.left = '10%';
        line.classList.add('wd-vertical-line-guide');
      }

      sizeLine(line);
      lines.push(line);
      doc.body.appendChild(line);
    };

    styleEl = doc.createElement('style');
    styleEl.id = 'wd-guides';
    styleEl.appendChild(doc.createTextNode(styles));

    doc.head.appendChild(styleEl);

    addLine('h');
    addLine('v');

    controls = doc.createElement('div');
    controls.id = 'wd-guides-controls';
    control = doc.createElement('input');
    control.type = 'color';
    control.placeHolder = 'Color';
    control.value = '#ff0000';
    control.addEventListener('change', evChangeColor, false);
    controls.appendChild(control);
    control = doc.createElement('input');
    control.type = 'button';
    control.value = 'Add Horizontal Line';
    control.addEventListener('click', function() {
      addLine('h')
    }, false);
    controls.appendChild(control);
    control = doc.createElement('input');
    control.type = 'button';
    control.value = 'Add Vertical Line';
    control.addEventListener('click', function() {
      addLine('v')
    }, false);
    controls.appendChild(control);

    infoControl = doc.createElement('span');
    infoControl.id = 'wd-guides-info';
    controls.appendChild(infoControl);

    doc.body.appendChild(controls);

    doc.documentElement.addEventListener('mousemove', evMouseMove, false);
    win.addEventListener('resize', evResize, false);
  }
});


CmdUtils.CreateCommand({
  names: ['wd display rules', 'design wdruler'],
  description: 'Display ruler (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styles =
      "*{cursor:crosshair!important}" + "#wd-ruler{border-width:1px!important;cursor:move!important}" + "#wd-ruler,#wd-ruler div{border-color:#c00;border-style:solid!important}" + "#wd-ruler,#wd-ruler div,#wd-ruler-background-bottom,#wd-ruler-background-left,#wd-ruler-background-right,#wd-ruler-background-top,#wd-ruler-container{position:absolute!important}" + "#wd-ruler div{background-color:rgba(204,0,0,0.25);height:20px!important;width:20px!important}" + "#wd-ruler-background-bottom,#wd-ruler-bottom-left,#wd-ruler-bottom-right{bottom:0!important}" + "#wd-ruler-background-bottom,#wd-ruler-background-left,#wd-ruler-background-right,#wd-ruler-background-top{background:rgba(0,0,0,0.25)!important;height:0;width:0}" + "#wd-ruler-background-bottom,#wd-ruler-background-top,#wd-ruler-bottom-left,#wd-ruler-container,#wd-ruler-top-left{left:0!important}" + "#wd-ruler-background-right,#wd-ruler-bottom-right,#wd-ruler-top-right{right:0!important}" + "#wd-ruler-background-top,#wd-ruler-container,#wd-ruler-top-left,#wd-ruler-top-right{top:0!important}" + "#wd-ruler-bottom-left{border-width:1px 1px 0 0 !important;cursor:sw-resize!important}" + "#wd-ruler-bottom-right{border-width:1px 0 0 1px !important;cursor:se-resize!important}" + "#wd-ruler-container{z-index:2147483646!important}" + "#wd-ruler-top-left{border-width:0 1px 1px 0 !important;cursor:nw-resize!important}" + "#wd-ruler-top-right{border-width:0 0 1px 1px !important;cursor:ne-resize!important}" + "#wd-ruler-controls{position:fixed;bottom:0;right:0;z-index:2147483647!important;color:#000;}" + "#wd-ruler-controls input[type='text']{width:50px;cursor:initial!important;}" + "#wd-ruler-info{background-color:#000; color:#fff}";

    var win = Utils.currentTab.window,
        doc = win.document,
        styleEl = doc.getElementById('wd-ruler-styles'),
        controls = doc.getElementById('wd-ruler-controls'),
        ruler = {},
        infoControl,
        evMouseDown,
        evMouseMove,
        evMouseUp,
        evResize,
        evChangeColor,
        updateInfo;

    if (styleEl || controls) {
      if (styleEl) {
        styleEl.remove();
      }
      if (controls) {
        controls.remove();
      }
      doc.getElementById('wd-ruler-container').remove();
      doc.documentElement.removeEventListener('mousedown', evMouseDown, false);
      doc.documentElement.removeEventListener('mouseup', evMouseUp, false);
      doc.documentElement.removeEventListener('mousemove', evMouseMove, false);
      win.removeEventListener('resize', evResize, false);
      return;
    }

    evMouseDown = function(event) {
      if (event.button === 2 || !event.target || event.target.tagName.toLowerCase() === 'scrollbar') {
        return;
      }

      var xPosition = event.pageX,
        yPosition = event.pageY;

      if (event.target == ruler.ruler) {
        ruler.move = true;
        ruler.moveX = xPosition - ruler.ruler.offsetLeft;
        ruler.moveY = yPosition - ruler.ruler.offsetTop;
      } else if (event.target == event.target.ownerDocument.getElementById('wd-ruler-bottom-left')) {
        ruler.resize = true;
        ruler.startX = ruler.ruler.offsetLeft + ruler.ruler.offsetWidth;
        ruler.startY = ruler.ruler.offsetTop;
      } else if (event.target == event.target.ownerDocument.getElementById('wd-ruler-bottom-right')) {
        ruler.resize = true;
        ruler.startX = ruler.ruler.offsetLeft;
        ruler.startY = ruler.ruler.offsetTop;
      } else if (event.target == event.target.ownerDocument.getElementById('wd-ruler-top-left')) {
        ruler.resize = true;
        ruler.startX = ruler.ruler.offsetLeft + ruler.ruler.offsetWidth;
        ruler.startY = ruler.ruler.offsetTop + ruler.ruler.offsetHeight;
      } else if (event.target == event.target.ownerDocument.getElementById('wd-ruler-top-right')) {
        ruler.resize = true;
        ruler.startX = ruler.ruler.offsetLeft;
        ruler.startY = ruler.ruler.offsetTop + ruler.ruler.offsetHeight;
      } else {
        ruler.drag = true;
        ruler.endX = 0;
        ruler.endY = 0;
        ruler.startX = xPosition;
        ruler.startY = yPosition;

        updateInfo();
      }

      event.stopPropagation();
      event.preventDefault();
    };

    evMouseMove = function(event) {
      if (!event.target || !event.target.ownerDocument) {
        return;
      }

      // If the ruler is being dragged, moved or resized
      if (ruler.drag || ruler.move || ruler.resize) {
        var xPosition = event.pageX,
          yPosition = event.pageY;

        // If the ruler is being dragged or resized
        if (ruler.drag || ruler.resize) {
          var height = 0;
          var width = 0;

          ruler.endX = xPosition;
          ruler.endY = yPosition;

          // If the end x position is greater than the start x position
          if (ruler.endX > ruler.startX) {
            width = ruler.endX - ruler.startX;

            ruler.ruler.style.left = ruler.startX + 'px';
          } else {
            width = ruler.startX - ruler.endX;

            ruler.ruler.style.left = xPosition + 'px';
          }

          // If the end y position is greater than the start y position
          if (ruler.endY > ruler.startY) {
            height = ruler.endY - ruler.startY;

            ruler.ruler.style.top = ruler.startY + 'px';
          } else {
            height = ruler.startY - ruler.endY;

            ruler.ruler.style.top = ruler.endY + 'px';
          }

          ruler.ruler.style.height = height + 'px';
          ruler.ruler.style.width = width + 'px';
        } else if (ruler.move) {
          var newXPosition = xPosition - ruler.moveX;
          var newYPosition = yPosition - ruler.moveY;

          ruler.ruler.style.left = newXPosition + 'px';
          ruler.ruler.style.top = newYPosition + 'px';

          ruler.endX = newXPosition + ruler.ruler.offsetWidth - 2;
          ruler.endY = newYPosition + ruler.ruler.offsetHeight - 2;
          ruler.startX = newXPosition;
          ruler.startY = newYPosition;
        }

        resizeBackgrounds();
        updateInfo();
      }
    };

    evMouseUp = function(event) {
      if (event.button === 2 || !event.target || !event.target.ownerDocument || event.target.tagName === 'scrollbar') {
        return;
      }

      // If not moving the ruler
      if (!ruler.move) {
        var xPosition = event.pageX,
          yPosition = event.pageY;

        // If the X position is greater than the start X position
        if (xPosition > ruler.startX) {
          ruler.endX = xPosition;
        } else {
          ruler.endX = ruler.startX;
          ruler.startX = xPosition;
        }

        // If the Y position is greater than the start Y position
        if (yPosition > ruler.startY) {
          ruler.endY = yPosition;
        } else {
          ruler.endY = ruler.startY;
          ruler.startY = yPosition;
        }
      }

      ruler.drag = false;
      ruler.move = false;
      ruler.moveX = 0;
      ruler.moveY = 0;
      ruler.resize = false;

      updateInfo();
    };

    evResize = function(event) {
      resizeBackgrounds();
      resizeContainer();
    };

    evChangeColor = function(event) {
      var tmp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(event.target.value),
        rgb = tmp ? {
          r: parseInt(tmp[1], 16),
          g: parseInt(tmp[2], 16),
          b: parseInt(tmp[3], 16)
        } : {
          r: 255,
          g: 0,
          b: 0
        },
        rgba = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', .25)';

      ruler.ruler.style.borderColor = event.target.value;
      doc.getElementById('wd-ruler-bottom-left').style.backgroundColor = rgba;
      doc.getElementById('wd-ruler-bottom-right').style.backgroundColor = rgba;
      doc.getElementById('wd-ruler-top-right').style.backgroundColor = rgba;
      doc.getElementById('wd-ruler-top-left').style.backgroundColor = rgba;

      doc.getElementById('wd-ruler-bottom-left').style.borderColor = rgba;
      doc.getElementById('wd-ruler-bottom-right').style.borderColor = rgba;
      doc.getElementById('wd-ruler-top-right').style.borderColor = rgba;
      doc.getElementById('wd-ruler-top-left').style.borderColor = rgba;
    };

    updateInfo = function() {
      if (!ruler.ruler) {
        return;
      }

      doc.getElementById('wd-ruler-height').value = ruler.ruler.offsetHeight + 'px';
      doc.getElementById('wd-ruler-width').value = ruler.ruler.offsetWidth + 'px';

      // If the end x position is greater than the start x position
      if (ruler.endX > ruler.startX) {
        doc.getElementById('wd-ruler-end-x').value = (ruler.endX + 2) + 'px';
        doc.getElementById('wd-ruler-start-x').value = ruler.startX + 'px';
      } else {
        doc.getElementById('wd-ruler-end-x').value = ruler.endX + 'px';
        doc.getElementById('wd-ruler-start-x').value = (ruler.startX + 2) + 'px';
      }

      // If the end y position is greater than the start y position
      if (ruler.endY > ruler.startY) {
        doc.getElementById('wd-ruler-end-y').value = (ruler.endY + 2) + 'px';
        doc.getElementById('wd-ruler-start-y').value = ruler.startY + 'px';
      } else {
        doc.getElementById('wd-ruler-end-y').value = ruler.endY + 'px';
        doc.getElementById('wd-ruler-start-y').value = (ruler.startY + 2) + 'px';
      }
    };

    reset = function() {
      ruler.backgroundBottom = null;
      ruler.backgroundLeft = null;
      ruler.backgroundRight = null;
      ruler.backgroundTop = null;
      ruler.container = null;
      ruler.drag = false;
      ruler.endX = 498;
      ruler.endY = 398;
      ruler.move = false;
      ruler.moveX = 0;
      ruler.moveY = 0;
      ruler.resize = false;
      ruler.startX = 200;
      ruler.startY = 200;
      ruler.ruler = null;
    };

    resizeContainer = function() {
      var viewportWidth = win.innerWidth,
        viewportHeight = win.innerHeight,
        documentWidth = Math.max(doc.documentElement.offsetWidth, doc.documentElement.clientWidth, doc.documentElement.scrollWidth);
      documentHeight = Math.max(doc.documentElement.offsetHeight, doc.documentElement.clientHeight, doc.documentElement.scrollHeight);

      if (viewportWidth > documentWidth) {
        ruler.container.style.width = viewportWidth + 'px';
      } else {
        ruler.container.style.width = documentWidth + 'px';
      }

      if (viewportHeight > documentHeight) {
        ruler.container.style.height = viewportHeight + 'px';
      } else {
        ruler.container.style.height = documentHeight + 'px';
      }
    };

    resizeBackgrounds = function() {
      var containerHeight = ruler.container.offsetHeight,
        containerWidth = ruler.container.offsetWidth,
        rulerHeight = ruler.ruler.offsetHeight,
        rulerPositionX = parseInt(ruler.ruler.style.left.replace('px', '')),
        rulerPositionY = parseInt(ruler.ruler.style.top.replace('px', '')),
        rulerWidth = ruler.ruler.offsetWidth;

      ruler.backgroundBottom.style.height = (containerHeight - rulerPositionY - rulerHeight) + 'px';
      ruler.backgroundBottom.style.width = containerWidth + 'px';
      ruler.backgroundLeft.style.height = rulerHeight + 'px';
      ruler.backgroundLeft.style.top = rulerPositionY + 'px';
      ruler.backgroundLeft.style.width = rulerPositionX + 'px';
      ruler.backgroundRight.style.top = rulerPositionY + 'px';
      ruler.backgroundRight.style.height = rulerHeight + 'px';
      ruler.backgroundRight.style.width = (containerWidth - rulerPositionX - rulerWidth) + 'px';
      ruler.backgroundTop.style.height = rulerPositionY + 'px';
      ruler.backgroundTop.style.width = containerWidth + 'px';
    };

    init = function() {
      styleEl = doc.createElement('style');
      styleEl.id = 'wd-ruler-styles';
      styleEl.appendChild(doc.createTextNode(styles));

      doc.head.appendChild(styleEl);
    };

    createRuler = function() {
      var corner;

      ruler.container = doc.createElement('div');
      ruler.container.id = 'wd-ruler-container';
      doc.body.appendChild(ruler.container);
      resizeContainer();

      ruler.backgroundBottom = doc.createElement('div');
      ruler.backgroundBottom.id = 'wd-ruler-background-bottom';
      ruler.container.appendChild(ruler.backgroundBottom);

      ruler.backgroundLeft = doc.createElement('div');
      ruler.backgroundLeft.id = 'wd-ruler-background-left';
      ruler.container.appendChild(ruler.backgroundLeft);

      ruler.backgroundRight = doc.createElement('div');
      ruler.backgroundRight.id = 'wd-ruler-background-right';
      ruler.container.appendChild(ruler.backgroundRight);

      ruler.backgroundTop = doc.createElement('div');
      ruler.backgroundTop.id = 'wd-ruler-background-top';
      ruler.container.appendChild(ruler.backgroundTop);

      ruler.ruler = doc.createElement('div');
      ruler.ruler.id = 'wd-ruler';

      corner = doc.createElement('div');
      corner.setAttribute('id', 'wd-ruler-bottom-left');
      ruler.ruler.appendChild(corner);

      corner = doc.createElement('div');
      corner.setAttribute('id', 'wd-ruler-bottom-right');
      ruler.ruler.appendChild(corner);

      corner = doc.createElement('div');
      corner.setAttribute('id', 'wd-ruler-top-left');
      ruler.ruler.appendChild(corner);

      corner = doc.createElement('div');
      corner.setAttribute('id', 'wd-ruler-top-right');
      ruler.ruler.appendChild(corner);

      ruler.container.appendChild(ruler.ruler);

      ruler.ruler.style.height = (ruler.endY - ruler.startY) + 'px';
      ruler.ruler.style.left = ruler.startX + 'px';
      ruler.ruler.style.top = ruler.startY + 'px';
      ruler.ruler.style.width = (ruler.endX - ruler.startX) + 'px';

      win.setTimeout(function() {
        resizeBackgrounds();
        updateInfo();
      }, 100);
    };


    createControls = function() {
      var control;

      controls = doc.createElement('div');
      controls.id = 'wd-ruler-controls';

      control = doc.createElement('input');
      control.type = 'color';
      control.placeHolder = 'Color';
      control.value = '#ff0000';
      control.addEventListener('change', evChangeColor, false);
      controls.appendChild(control);

      control = doc.createElement('label');
      control.textContent = 'Width:';
      controls.appendChild(control);

      control = doc.createElement('input');
      control.id = 'wd-ruler-width';
      control.type = 'text';
      control.addEventListener('change', function() {}, false);
      controls.appendChild(control);

      control = doc.createElement('label');
      control.textContent = 'Height:';
      controls.appendChild(control);

      control = doc.createElement('input');
      control.id = 'wd-ruler-height';
      control.type = 'text';
      control.addEventListener('change', function() {}, false);
      controls.appendChild(control);

      control = doc.createElement('span');
      control.innerHTML = 'Position: Start X=';
      controls.appendChild(control);

      control = doc.createElement('input');
      control.id = 'wd-ruler-start-x';
      control.type = 'text';
      control.addEventListener('change', function() {}, false);
      controls.appendChild(control);

      control = doc.createElement('span');
      control.innerHTML = ' Y=';
      controls.appendChild(control);

      control = doc.createElement('input');
      control.id = 'wd-ruler-start-y';
      control.type = 'text';
      control.addEventListener('change', function() {}, false);
      controls.appendChild(control);

      control = doc.createElement('span');
      control.innerHTML = ' End X=';
      controls.appendChild(control);

      control = doc.createElement('input');
      control.id = 'wd-ruler-end-x';
      control.type = 'text';
      control.addEventListener('change', function() {}, false);
      controls.appendChild(control);

      control = doc.createElement('span');
      control.innerHTML = ' Y=';
      controls.appendChild(control);

      control = doc.createElement('input');
      control.id = 'wd-ruler-end-y';
      control.type = 'text';
      control.addEventListener('change', function() {}, false);
      controls.appendChild(control);

      doc.body.appendChild(controls);
    };

    init();
    reset();
    createRuler();
    createControls();

    doc.documentElement.addEventListener('mousedown', evMouseDown, false);
    doc.documentElement.addEventListener('mouseup', evMouseUp, false);
    doc.documentElement.addEventListener('mousemove', evMouseMove, false);
    win.addEventListener('resize', evResize, false);
  }
});


CmdUtils.CreateCommand({
  names: ['page colors', 'design page colors'],
  description: 'Disable/Enable Page Colors.',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  preview: function(pbl) {
    pbl.innerHTML = 'Page colors are currently ' + (Utils.prefs.get('browser.display.use_document_colors') ? 'Enabled' : 'Disabled');
  },
  execute: function() {
    Utils.prefs.set('browser.display.use_document_colors', !Utils.prefs.get('browser.display.use_document_colors'));
    if (Utils.prefs.get('browser.display.use_document_colors')) {
      msg = 'Enabled page colors';
    } else {
      msg = 'Disabled page colors';
    }
    displayMessage({
      title: 'Design',
      text: msg
    });
  }
});


CmdUtils.CreateCommand({
  names: ['add user style sheet', 'design add user style sheet'],
  description: 'Add/Remove a user specified style sheet in the current document (based on Web Developer addon by chrispederick).',
  execute: function() {
    var doc = Utils.currentTab.window.document,
      filePicker = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker),
      inputStream,
      scriptableStream,
      userStyleSheet,
      userStyleSheetId = 'wdsadd',
      userStyleSheetEl,
      msg = '';

    if (userStyleSheetEl = doc.getElementById('wdsadd')) {
      userStyleSheetEl.remove();
      msg = 'Removed user style sheet';
    } else {
      filePicker.appendFilter('Style Sheets', '*.css');
      filePicker.init(Utils.currentTab.window, 'Add User Style Sheet', filePicker.modeOpen);

      if (filePicker.show() === filePicker.returnOK) {
        inputStream = Components.classes['@mozilla.org/network/file-input-stream;1'].createInstance(Components.interfaces.nsIFileInputStream);
        scriptableStream = Components.classes['@mozilla.org/scriptableinputstream;1'].createInstance(Components.interfaces.nsIScriptableInputStream);

        inputStream.init(filePicker.file, parseInt(1, 16), parseInt(444, 8), null);
        scriptableStream.init(inputStream);

        userStyleSheet = scriptableStream.read(scriptableStream.available());

        scriptableStream.close();
        inputStream.close();

        userStyleSheetEl = doc.createElement('style');
        userStyleSheetEl.setAttribute('id', userStyleSheetId);
        userStyleSheetEl.appendChild(doc.createTextNode(userStyleSheet));

        doc.head.appendChild(userStyleSheetEl);
        msg = 'Added user style sheet';
      } // End file picker
      else {
        msg = 'Nothing changed!';
      }
    } // End add
    displayMessage({
      title: 'Design',
      text: msg
    });
  }
});


CmdUtils.CreateCommand({
  names: ['reload linked styles', 'design reload linked styles'],
  description: 'Reload linked styles (based on Web Developer addon by chrispederick).',
  execute: function() {
    var sheets = Utils.currentTab.window.document.styleSheets,
      sheet,
      sheetHref,
      i;

    for (i = sheets.length - 1; i >= 0; i--) {
      sheet = sheets[i];
      if (
        // not inline style sheet
        sheet.href &&
        !wdStyleCommons.isChromeOrData(sheet) &&
        // copycat from WebDeveloper
        sheet.href !== Utils.currentTab.window.document.documentURI &&
        // style sheet is not disabled
        !sheet.disabled &&
        // not an alternate style sheet
        !wdStyleCommons.isAlternate(sheet) &&
        // sheet has an owner
        sheet.ownerNode
      ) {
        sheetHref = sheet.href.replace(/(&|\?)wd-reload=\d+/, '');
        if (sheetHref.indexOf('?') === -1) {
          sheetHref += '?';
        } else {
          sheetHref += '&';
        }
        sheet.ownerNode.href = sheetHref + 'wd-reload=' + new Date().getTime();
      }
    }

    displayMessage({
      title: 'Design',
      text: 'Reloaded linked styles'
    });
  }
});

CmdUtils.CreateCommand({
  names: ['toggle default styles', 'design toggle default styles'],
  description: 'Toggle default styles (based on Web Developer addon by chrispederick).',
  execute: function() {
    var resetStylesId = 'wdstd',
      resetStylesEl = Utils.currentTab.window.document.getElementById(resetStylesId),
      resetStyles =
      "/*! http://meyerweb.com/eric/tools/css/reset/\n" +
      "v2.0 | 20110126\n" +
      "License: none (public domain)\n" +
      "*/\n" +
      "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}";
    var msg = '';

    if (resetStylesEl) {
      resetStylesEl.remove();
      msg = 'Enabled default styles';
    } else {
      resetStylesEl = Utils.currentTab.window.document.createElement('style');
      resetStylesEl.setAttribute('id', resetStylesId);
      resetStylesEl.innerHTML = resetStyles;

      Utils.currentTab.window.document.head.insertBefore(resetStylesEl, Utils.currentTab.window.document.head.firstChild);

      msg = 'Disabled default styles';
    }

    displayMessage({
      title: 'Design',
      text: msg
    });
  }
});


CmdUtils.CreateCommand({
  names: ['toggle embedded styles', 'design toggle embedded styles'],
  description: 'Toggle embedded styles (based on Web Developer addon by chrispederick).',
  execute: function() {
    var styleELs = Utils.currentTab.window.document.getElementsByTagName('style'),
      state = Utils.currentTab.window.document.documentElement.getAttribute('wdste'),
      sheet,
      i,
      msg = '';

    for (i = styleELs.length - 1; i >= 0; i--) {
      sheet = styleELs[i].sheet;
      // If the style sheet href is not set or this is not a chrome or data style sheet
      if (!wdStyleCommons.isEmbedded(sheet) ||
        !wdStyleCommons.isChromeOrData(sheet)
      ) {
        if (state === null) {
          // disable
          sheet.originalDisabled = sheet.disabled;
          sheet.disabled = true;
        } else if (state === 'disabled') {
          // enable
          sheet.disabled = false;
        } else if (state === 'enabled' && (typeof sheet.originalDisabled) === 'boolean') {
          // reset
          sheet.disabled = sheet.originalDisabled;
          sheet.originalDisabled = undefined;
        }
      }
    }

    if (state === null) {
      Utils.currentTab.window.document.documentElement.setAttribute('wdste', 'disabled');
      msg = 'Disabled embedded styles';
    } else if (state === 'disabled') {
      Utils.currentTab.window.document.documentElement.setAttribute('wdste', 'enabled');
      msg = 'Enabled embedded styles';
    } else if (state === 'enabled') {
      Utils.currentTab.window.document.documentElement.removeAttribute('wdste');
      msg = 'Reset embedded styles';
    }

    displayMessage({
      title: 'Design',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['toggle inline styles', 'design toggle inline styles'],
  description: 'Toggle inline styles (based on Web Developer addon by chrispederick)',
  execute: function() {
    var enable = Utils.currentTab.window.document.documentElement.hasAttribute('wdsti'),
      node,
      msg = '';

    traversal = Utils.currentTab.window.document.createNodeIterator(
      Utils.currentTab.window.document.documentElement,
      Utils.currentTab.window.NodeFilter.SHOW_ELEMENT,
      null
    );
    while (node = traversal.nextNode()) {
      if (enable && node.hasAttribute('wd-style')) {
        node.setAttribute('style', node.getAttribute('wd-style'));
        node.removeAttribute('wd-style');
      } else if (!enable && node.hasAttribute('style')) {
        node.setAttribute('wd-style', node.getAttribute('style'));
        node.removeAttribute('style');
      }
    }

    if (enable) {
      Utils.currentTab.window.document.documentElement.removeAttribute('wdsti');
      msg = 'Enabled inline styles';
    } else {
      Utils.currentTab.window.document.documentElement.setAttribute('wdsti', '');
      msg = 'Disabled inline styles';
    }

    displayMessage({
      title: 'Design',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['toggle linked styles', 'design toggle linked styles'],
  description: 'Toggle linked styles (based on Web Developer addon by chrispederick)',
  execute: function() {
    var sheets = Utils.currentTab.window.document.styleSheets,
      state = Utils.currentTab.window.document.documentElement.getAttribute('wdstl'),
      sheet,
      i,
      msg = '';

    for (i = sheets.length - 1; i >= 0; i--) {
      sheet = sheets[i];

      if (
        // not inline style sheet
        sheet.href &&
        !wdStyleCommons.isChromeOrData(sheet) &&
        // copycat from WebDeveloper
        sheet.href !== Utils.currentTab.window.document.documentURI
      ) {
        if (state === null) {
          // disable
          sheet.originalDisabled = sheet.disabled;
          sheet.disabled = true;
        } else if (state === 'disabled') {
          // if it's an alternate style sheet
          if (
            wdStyleCommons.isAlternate(sheet) &&
            (typeof sheet.originalDisabled) === 'boolean'
          ) {
            // reset
            sheet.disabled = sheet.originalDisabled;
            sheet.originalDisabled = undefined;
          } else {
            // enable
            sheet.disabled = false;
          }
        } else if (state === 'enabled' && (typeof sheet.originalDisabled) === 'boolean') {
          // reset
          sheet.disabled = sheet.originalDisabled;
          sheet.originalDisabled = undefined;
        }
      }
    }

    if (state === null) {
      Utils.currentTab.window.document.documentElement.setAttribute('wdstl', 'disabled');
      msg = 'Disabled linked styles';
    } else if (state === 'disabled') {
      Utils.currentTab.window.document.documentElement.setAttribute('wdstl', 'enabled');
      msg = 'Enabled linked styles';
    } else if (state === 'enabled') {
      Utils.currentTab.window.document.documentElement.removeAttribute('wdstl');
      msg = 'Reset linked styles';
    }

    displayMessage({
      title: 'Design',
      text: msg
    });
  }
});

CmdUtils.CreateCommand({
  names: ['toggle print styles', 'design toggle print styles'],
  description: 'Toggle print styles (based on Web Developer addon by chrispederick)',
  execute: function() {
    var sheets = Utils.currentTab.window.document.styleSheets,
      state = Utils.currentTab.window.document.documentElement.getAttribute('wdstp'),
      sheet,
      media,
      i,
      msg = '';

    for (i = sheets.length - 1; i >= 0; i--) {
      sheet = sheets[i];
      media = sheet.media;
      if (
        // not inline style sheet
        sheet.href &&
        !wdStyleCommons.isChromeOrData(sheet) &&
        wdStyleCommons.matchMedia(sheet, 'print') &&
        !wdStyleCommons.matchMedia(sheet, 'screen')
      ) {
        if (state === null) {
          // disable
          sheet.originalDisabled = sheet.disabled;
          sheet.disabled = true;
        } else if (state === 'disabled') {
          // if it's an alternate style sheet
          if (
            wdStyleCommons.isAlternate(sheet) &&
            (typeof sheet.originalDisabled) === 'boolean'
          ) {
            // reset
            sheet.disabled = sheet.originalDisabled;
            sheet.originalDisabled = undefined;
          } else {
            // enable
            sheet.disabled = false;
          }
        } else if (state === 'enabled' && (typeof sheet.originalDisabled) === 'boolean') {
          // reset
          sheet.disabled = sheet.originalDisabled;
          sheet.originalDisabled = undefined;
        }
      }
    }

    if (state === null) {
      Utils.currentTab.window.document.documentElement.setAttribute('wdstp', 'disabled');
      msg = 'Disabled print styles';
    } else if (state === 'disabled') {
      Utils.currentTab.window.document.documentElement.setAttribute('wdstp', 'enabled');
      msg = 'Enabled print styles';
    } else if (state === 'enabled') {
      Utils.currentTab.window.document.documentElement.removeAttribute('wdstp');
      msg = 'Reset print styles';
    }

    displayMessage({
      title: 'Design',
      text: msg
    });
  }
});


CmdUtils.CreateCommand({
  names: ['toggle sheet', 'design toggle sheet'],
  description: 'Toggle a style sheet (based on Web Developer addon by chrispederick)',
  arguments: {
    'object sheet': noun_arb_text
  },
  preview: function(pbl, args) {
    var me = this;
    var sheets = this._find();
    CmdUtils.previewList(pbl, sheets.map(me._html), function(i, ev) {
      me._toggle(sheets[i]);
    });
  },
  execute: function(args) {
    if (!args.object.text) {
      return;
    }
    var re = Utils.regexp('^\\d+$');
    if (!re.test(args.object.text)) {
      return;
    }

    var sheets = this._find();
    var index = parseInt(args.object.text, 10);
    if (index > 0 && index <= sheets.length) {
      this._toggle(sheets[index - 1]);
    }
  },
  _html: function({href, disabled}) {
    if (disabled) {
      return '<pre style="background-color: darkred;">' + href + '</pre>';
    } else {
      return '<pre style="background-color: darkgreen;">' + href + '</pre>';
    }
  },
  _toggle: function(sheet) {
    if (sheet.disabled) {
      sheet.disabled = false;
    } else {
      sheet.disabled = true;
    }
  },
  _find: function() {
    return Array.filter(Utils.currentTab.window.document.styleSheets, function(sheet) {
      return sheet.href !== null;
    });
  }
});

CmdUtils.CreateCommand({
  names: ['breakpoint tester', 'design breakpoint tester'],
  description: 'Check responsive designs by breakpoints rather than fixed device widths (www.breakpointtester.com)',
  execute: function() {
    var show = function(win) {
      var doc = win.document;
      doc.write(
        '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
        '<meta charset="UTF-8">'+
        '<title>Breakpoint Test - '+doc.title+'</title>'+
        '<link rel="stylesheet" href="http://breakpointtester.com/assets/css/bookmark.css">'+
        '<script src="http://breakpointtester.com/assets/js/bookmark.js"></script>'+
        '</head>'+
        '<body data-url="'+doc.URL+'">'+
        '<header id="topHeader" class="clearfix">'+
        '<a href="#"></a>'+
        '</section>'+
        '<section id="bpCount">'+
        '<div id="count">00</div>'+
        '<div id="countText"><span>BREAKPOINTS FOUND</span></div>'+
        '</section>'+
        win.mqUniqueBP+
        '</header>'+
        '<section id="qcWWW">'+
        '<ul id="qcWW"></ul>'+
        '</section>'+
        '</body>'+
        '</html>');
    };
    var win = Utils.currentTab.window,
        doc = win.document,
        script = doc.createElement('script');
    script.type='text/javascript';
    /*script.src = 'http://breakpointtester.com/assets/js/breakpoint.js';*/
    /* 
      Breakpoint Tester(BETA) V 1.0
      Copyright (c) 2013 Mandar Shirke.
    */
    script.innerHTML = 'var cssArrays=[],bpArrays=[],bpUniqueArrays=[];for(var i=0,numSheets=document.styleSheets.length;i<numSheets;i++){var sheet=document.styleSheets[i];if(sheet.href===null||sheet.href.match(window.location.hostname)){var rules=sheet.rules?sheet.rules:sheet.cssRules;for(var j=0,numRules=rules.length;j<numRules;j++){var mq=rules[j].cssText.match(/\(\D*\-(width|height)+\s*\:\s*(\d+(\.\d+)?)(px|em)\s*\)/g);if(mq!==null){for(var k=0;k<mq.length;k++){bpArrays.push(mq[k].match(/(width|height)/g)+mq[k].match(/\d+(\.\d+)?/g)+mq[k].match(/(px|em)/g))}}}}if(sheet.media.mediaText.match(/\(\D*\-(width|height)+\s*\:\s*(\d+(\.\d+)?)(px|em)\s*\)/g)){bpArrays.push(sheet.media.mediaText.match(/(width|height)/g)+sheet.media.mediaText.match(/\d+(\.\d+)?/g)+sheet.media.mediaText.match(/(px|em)/g))}cssArrays.push(i);if(numSheets===cssArrays.length){var uniqueArrays=[],i,len=bpArrays.length,obj={};for(i=0;i<len;i++){obj[bpArrays[i]]=0}for(i in obj){uniqueArrays.push(i)}var sortBp=uniqueArrays.sort(function(e,t){e=e.replace(/[a-z]/g,"");t=t.replace(/[a-z]/g,"");return e-t});var regex=/\d+/;for(var i=0;i<sortBp.length;i++){var c=sortBp[i],n=sortBp[i+1];if(c&&n&&c.substring(0,3)==n.substring(0,3)){var cn=regex.exec(c)[0];var nn=regex.exec(n)[0];if(cn!=nn-1){bpUniqueArrays.push(c)}}else{bpUniqueArrays.push(c)}}}}if(bpArrays.length===0||cssArrays.length===0){alert("Error: No Media Queries Found! The website you are accessing is not Responsive Design OR Bookmarklet was unable to access Cross Domain Stylesheets due to same-origin-policy.")}window.mqUniqueBP=\'<ul id="bpList" class="clearfix">\';bpUniqueArrays.forEach(function(e){if(e.match(/(width)/g)&&e.match(/\d+\.?\d*/)!=0){var t=e.match(/\d+\.?\d*/);mqUniqueBP=mqUniqueBP+"<li data-"+e.match(/(width|height)/g)+"="+Math.floor(t*100)/100+" data-unit="+e.match(/(px|em)/g)+\'><a href="javascript:void();"><input type="checkbox"/> \'+Math.floor(t*100)/100+" <span>"+e.match(/(px|em)/g)+"</span></a></li>"}});';
    if(script.readyState) {
      script.onreadystatechange = function() {
        if(script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null;
          show(win);
        }
      };
    } else {
      script.onload = function() {
        show(win);
      };
    }
    
    doc.getElementsByTagName('head')[0].appendChild(script);
  }
});