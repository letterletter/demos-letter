chrome.runtime.onInstalled.addListener(() => {
  console.log("Bookmark Manager Installed");
});

// 获取书签
chrome.bookmarks.getTree((bookmarks) => {
  chrome.storage.local.set({ bookmarks });
});
