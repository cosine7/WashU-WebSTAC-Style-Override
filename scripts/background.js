const events = {
  insertCSS(tabId) {
    chrome.scripting.insertCSS({
      target: { tabId },
      files: ['styles/style.css']
    })
  }
}

chrome.runtime.onMessage.addListener((event, sender, sendResponse) => {
  sender.tab && sendResponse(events[event]?.(sender.tab.id))
})