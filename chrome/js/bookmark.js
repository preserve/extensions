// Generated by CoffeeScript 1.3.3
(function() {
  var base_iframe_url;

  base_iframe_url = "https://preserve.io/bookmarks/new?simple=true";

  $(function() {
    return chrome.tabs.query({
      "currentWindow": true,
      "active": true
    }, function(tabs) {
      var iframe_url, tab;
      tab = _.first(tabs);
      iframe_url = base_iframe_url + "&title=" + encodeURIComponent(tab.title) + "&url=" + encodeURIComponent(tab.url);
      return $('#new_bookmark_frame').attr('src', iframe_url);
    });
  });

}).call(this);
