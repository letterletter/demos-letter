importScripts("./crypto-js.min.js");

console.log("Background script is running");

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translate",
    title: "Translate '%s'",
    contexts: ["selection"]
  });
});

function md5(string) {
  // 这里可以使用一个现成的 MD5 库，比如 CryptoJS
  return CryptoJS.MD5(string).toString();
}

function calculateSign(appid, q, salt, secret) {
  const signString = appid + q + salt + secret;
  return md5(signString);
}

const appId = 20211120001004516;
const salt = '1234568'
const  secret = 'XXX'
function formatText(text) {
  return text.replace(/\s+/g, '\n');
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
  const selectedText = info.selectionText;
  console.log(`Selected text: ${selectedText}`, tab);
  const targetLanguage = 'zh-CN'; // 目标语言，例如中文
  const sign = calculateSign(appId, selectedText, salt, 'LG4cPOkuSQpnfy9Ced61')
  const url = `https://fanyi-api.baidu.com/api/trans/vip/translate?q=${selectedText}&from=auto&to=zh&appid=20211120001004516&salt=1234568&sign=${sign}`
  console.log('url ==', url, 'sign', sign)
    fetch( url)
    .then(response => response.json())
    .then(data => {
      const translatedText = data.trans_result[0].dst ?? "出现错误" // data.data.translations[0].translatedText;
      // chrome.scripting.executeScript({
      //   target: { tabId: tab.id },
      //   function: showTranslation,
      //   args: [translatedText]
      // });
      console.log('翻译后', translatedText)
      // showTooltip(translatedText);
      chrome.tabs.sendMessage(tab.id, {action: "showTranslation", text: translatedText}, (response) => {
        console.log("Response from content script:", response);
    });

    })
    .catch(error => console.error('Error:', error));
  // 调用翻译 API
  // fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${encodeURIComponent(selectedText)}&target=${targetLanguage}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     const translatedText = data.data.translations[0].translatedText;
  //     chrome.scripting.executeScript({
  //       target: { tabId: info.tabId },
  //       function: showTranslation,
  //       args: [translatedText]
  //     });
  //   })
  //   .catch(error => console.error('Error:', error));
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