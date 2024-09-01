
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showTranslation") {
      showTranslation(request.text);
      sendResponse({status: "success"});
  }
});

function showTranslation(translatedText) {
  const tooltip = document.createElement("div");
  tooltip.innerText = translatedText;
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "white";
  tooltip.style.border = "1px solid black";
  tooltip.style.padding = "5px";
  tooltip.style.zIndex = "1000";
  
  document.body.appendChild(tooltip);

  const selection = window.getSelection().getRangeAt(0).getBoundingClientRect();
  tooltip.style.left = `${selection.x}px`;
  tooltip.style.top = `${selection.y + selection.height}px`;

  setTimeout(() => {
    tooltip.remove();
  }, 3000); // 3秒后移除
}