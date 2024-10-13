// eslint-disable-next-line dirs/filenames
import React from 'react'
import ReactDOM from 'react-dom'
import { UmdComponent } from './umdComp'

window['react'] = React
window['react-dom'] = ReactDOM

console.log('window ---组件册', window)
// window['react'] = window.React;
// window['react-dom'] = window.ReactDOM;
const urls = [
  'https://unpkg.com/react-draggable@4.4.4/build/web/react-draggable.min.js',
  // RenderCom
  'https://cdnfile.corp.kuaishou.com/kc/files/a/kael-mui-demo/chrome-plugin-upload/2024-10-12/1728743964776.7f0006d30ba1c360.js',
  // Vite Demo
  'https://cdnfile.corp.kuaishou.com/kc/files/a/kael-mui-demo/chrome-plugin-upload/2024-10-13/1728799903328.9c86c9cafa0fbd61.js',
  'https://cdnfile.corp.kuaishou.com/kc/files/a/kael-mui-demo/chrome-plugin-upload/2024-10-11/1728625605777.45ba73bd31ac5db9.js',
]
const App = () => {
  // rul[0], urls[3]可以被解析，但在kael引擎用不了
  return (
    <div>
      <div>动态组件示例：</div>
      <UmdComponent
        url={urls[3]}
        umdProps={{
          onDrag(e) {
            console.log(e)
          },
        }}
      >
        <div
          style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}
        ></div>
      </UmdComponent>
    </div>
  )
}

export default App
