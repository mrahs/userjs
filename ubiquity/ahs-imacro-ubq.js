feed.title  = _("iMacros");
feed.author = _("Anas H. Sulaiman (AHS.PW)");

Cu.import('resource://gre/modules/PlacesUtils.jsm');
var noun_type_imacro = {
  label: 'title',
  noExternalCalls: true,
  cacheTime: 0,
  suggest: function(text, html, cb, selected) {
    if (!text) return [];
    return CmdUtils.grepSuggs(text, this.list);
  },
  list: null,
  load: function(reload) {
    var list = [];
    var {bookmarks, history} = PlacesUtils;
    var query = history.getNewQuery();
    var options = history.getNewQueryOptions();
    query.onlyBookmarked = true;
    query.searchTerms = 'imacros:';
    options.queryType = options.QUERY_TYPE_BOOKMARKS;
    options.sortingMode = options.SORT_BY_TITLE_DESCENDING;
    var {root} = history.executeQuery(query, options);
    root.containerOpen = true;
    for (var i = root.childCount; i--;) {
      var node = root.getChild(i);
      if (/^imacros:/.test(node.uri) &&
        !bookmarks.getKeywordForBookmark(node.itemId))
        list.push(CmdUtils.makeSugg(node.title, null, node.uri));
    }
    root.containerOpen = false;
    this.list = list;
    return this;
  }
}.load();

CmdUtils.CreateCommand({
  names: ['run imacro', 'imacro'],
  description: 'Runs an imacro from your favorites',
  help: 'Enter nothing to reload the list',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  icon: 'chrome://ubiquity/skin/icons/script_lightning.png',
  argument: {
    object: noun_type_imacro
  },
  execute: function({object}) {
    if (object.data) CmdUtils.getWindow().location = object.data;
    else {
      noun_type_imacro.load();
      displayMessage({
        title: 'iMacros',
        text: 'Reloaded'
      });
    }
  },
  preview: function(pbl, {object: {data}}) {
    pbl.innerHTML =
      data ? '<pre class="bookmarklet" style="white-space:pre-wrap">' +
      Utils.escapeHtml(data) + '</pre>' : this.previewDefault();
  }
});
