browser.tabs.onUpdated.addListener(function(id, info, thistab) {
  if(info.status == "loading" && info.url) {
    getCurrentWindowTabs().then((tabs) => {
      for (let tab of tabs) {
        if(info.url == tab.url && thistab.id != tab.id) {
          browser.tabs.remove(tab.id);
        }
      }
    });
  }
});

browser.tabs.onCreated.addListener(handleCreated);

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}