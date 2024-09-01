document.addEventListener('mouseup', async () => {
  const selection = window.getSelection().toString().trim();
  if (selection) {
    const translation = await getTranslation(selection);
    showPopup(selection, translation);
  }
});

async function getTranslation(text) {
  const apiKey = '你的百度翻译API密钥'; // 请替换为你的API密钥
  const url = `https://fanyi-api.baidu.com/api/trans/vip/translate?q=${encodeURIComponent(text)}&from=auto&to=zh&appid=你的appid&salt=随机数&sign=签名`;

  const response = await fetch(url);
  const data = await response.json();
  if (data.trans_result) {
    return data.trans_result[0].dst;
  } else {
    return '翻译失败';
  }
}

function showPopup(text, translation) {
  const popup = document.createElement('div');
  popup.style.position = 'absolute';
  popup.style.background = 'white';
  popup.style.border = '1px solid black';
  popup.style.padding = '10px';
  popup.style.zIndex = 10000;
  popup.innerText = `${text} -> ${translation}`;

  document.body.appendChild(popup);
  
  const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
  popup.style.top = `${rect.bottom + window.scrollY}px`;
  popup.style.left = `${rect.left + window.scrollX}px`;

  setTimeout(() => {
    document.body.removeChild(popup);
  }, 3000); // 3秒后自动消失
}
