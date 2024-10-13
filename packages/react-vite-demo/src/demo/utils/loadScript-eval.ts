/* eslint-disable dirs/filenames */
export const importScript = (() => {
  // 自执行函数，创建一个闭包，保存 cache 结果（如果是用打包工具编写就大可不必这样，只需要在文件中定义一个 cache 变量即可）
  const cache = {}
  return (url) => {
    // 如果有缓存，则直接返回缓存内容
    if (cache[url]) return Promise.resolve(cache[url])

    // 发起 get 请求
    return fetch(url)
      .then(response => response.text())
      .then(text => {
        // 记录最后一个 window 的属性
        const lastWindowKey = Object.keys(window).pop()

        // eval 执行
        eval(text)

        // 获取最新 key
        const newLastWindowKey = Object.keys(window).pop()

        const res = lastWindowKey !== newLastWindowKey ? (window[newLastWindowKey]) : ({})
        const Com = res.default ? res.default : res
        cache[url] = Com

        return Com
      })
  }
})()