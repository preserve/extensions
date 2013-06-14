base_iframe_url = "https://preserve.io/bookmarks/new?simple=true"

$ ->
  # Query the Chrome Tabs for one which is active in our current window.
  # Within the Callback (which returns an array of tabs) we will get the URL.
  chrome.tabs.query { "currentWindow": true, "active": true }, (tabs) ->
    # We've got to select the first Tab so we can get it's URL.
    tab = _.first tabs
    iframe_url = base_iframe_url + "&title=" + encodeURIComponent(tab.title) + "&url=" + encodeURIComponent(tab.url)
    $('#new_bookmark_frame').attr 'src', iframe_url
