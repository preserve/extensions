base_iframe_url = "https://preserve.io/bookmarks/new?simple=true"

@load_inline_bookmark_window = (info, tab) ->
  # Temporary, until we add an inline version.
  our_url = if info.linkUrl?
    info.linkUrl
  else
    info.pageUrl
  our_title = if info.selectionText?
    info.selectionText
  else
    tab.title
  iframe_url = base_iframe_url + "&title=" + encodeURIComponent(our_title) + "&url=" + encodeURIComponent(our_url)
  chrome.windows.create
    url: iframe_url
    height: 250
    width: 600
    focused: true
    type: 'panel'

@load_popup_bookmark_window = (info, tab) ->
  iframe_url = base_iframe_url + "&title=" + encodeURIComponent(tab.title) + "&url=" + encodeURIComponent(info.srcUrl)
  chrome.windows.create
    url: iframe_url
    height: 250
    width: 600
    focused: true
    type: 'panel'

@define_context = (context, type) ->
  chrome.contextMenus.create {
    'title': "Preserve this #{context}"
    'contexts': [context]
    'onclick': if type is 'inline'
      @load_inline_bookmark_window
    else
      @load_popup_bookmark_window
  }

@define_context(context, 'inline') for context in ['page', 'link']
@define_context(context, 'popup') for context in ['image', 'audio', 'video']
