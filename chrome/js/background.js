// Generated by CoffeeScript 1.3.3
(function() {
  var base_iframe_url, context, _i, _j, _len, _len1, _ref, _ref1;

  base_iframe_url = "https://preserve.io/bookmarks/new?simple=true";

  this.load_inline_bookmark_window = function(info, tab) {
    var iframe_url, our_title, our_url;
    our_url = info.linkUrl != null ? info.linkUrl : info.pageUrl;
    our_title = info.selectionText != null ? info.selectionText : tab.title;
    iframe_url = base_iframe_url + "&title=" + encodeURIComponent(our_title) + "&url=" + encodeURIComponent(our_url);
    return chrome.windows.create({
      url: iframe_url,
      height: 250,
      width: 600,
      focused: true,
      type: 'panel'
    });
  };

  this.load_popup_bookmark_window = function(info, tab) {
    var iframe_url;
    iframe_url = base_iframe_url + "&title=" + encodeURIComponent(tab.title) + "&url=" + encodeURIComponent(info.srcUrl);
    return chrome.windows.create({
      url: iframe_url,
      height: 250,
      width: 600,
      focused: true,
      type: 'panel'
    });
  };

  this.define_context = function(context, type) {
    return chrome.contextMenus.create({
      'title': "Preserve this " + context,
      'contexts': [context],
      'onclick': type === 'inline' ? this.load_inline_bookmark_window : this.load_popup_bookmark_window
    });
  };

  _ref = ['page', 'link'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    context = _ref[_i];
    this.define_context(context, 'inline');
  }

  _ref1 = ['image', 'audio', 'video'];
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    context = _ref1[_j];
    this.define_context(context, 'popup');
  }

}).call(this);