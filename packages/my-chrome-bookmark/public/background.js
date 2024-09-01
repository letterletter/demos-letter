chrome.runtime.onInstalled.addListener(() => {
  console.log("Bookmark Manager Installed");
});

// 获取书签
chrome.bookmarks.getTree((bookmarks) => {
  chrome.storage.local.set({ bookmarks });
  console.log("Bookmarks:", bookmarks);
});

// 监听来自 popup 的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getBookmarks") {
      chrome.storage.local.get("bookmarks", (data) => {
          sendResponse({ bookmarks: data.bookmarks });
      });
      return true; // 需要返回 true 以指示异步响应
  }
});