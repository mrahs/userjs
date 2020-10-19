WebCmd.CmdUtils.createCommand({
  names: ['imacro'],
  desc: 'Runs an imacro from your favorites',
  author: {
    name: 'Anas H. Sulaiman (AHS.PW)',
    homepage: 'http://ahs.pw/'
  },
  license: 'GNU GPLv3',
  execute: function(args) {
    if (!args) return;
    WebCmd.Utils.Bookmarks.imacros(function(imacros){
      if (!imacros) return;
      WebCmd.Utils.Tabs.Active.url = imacros[0].url;
    });
  },
  preview: function(args) {
    var pre = document.createElement('pre');
    
    WebCmd.Utils.Bookmarks.imacros(function(imacros){
      if (!imacros) return;
      pre.innerText = imacros[0].url;
      WebCmd.Utils.preview(imacros[0].title + '<br>' + pre.outerHTML, true);
    });
  }
});
