chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  // returns active tab only
  let activeTab = tabs[0];
  let activeTabUrl = activeTab.url
  console.log(activeTabUrl)
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "validate",
    "title": "validate",
    "contexts": ["selection"]
  })
  console.log('test')
})

chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId == "validate" && clickData.selectionText) {
    let review = clickData.selectionText;
    console.log(review)
  }
})
