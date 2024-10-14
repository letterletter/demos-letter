import React from 'react'
import { UmdComponent } from './umdComp'
import ReactDOM from 'react-dom'
import * as MUI from '@m-ui/react'
import * as MUIIcon from '@m-ui/icons'
import * as ESProComponents from '@es/pro-components'
import * as ESProComponentsFields from '@es/pro-components-fields'

window['react'] = React
window['react-dom'] = ReactDOM
window['@m-ui/react'] = MUI
window['@m-ui/icons'] = MUIIcon
// window['@es/pro-components'] = ESProComponents
// window['@es/pro-components-fields'] = ESProComponentsFields
console.log('window ---组件册', window)
// window['react'] = window.React;
// window['react-dom'] = window.ReactDOM;
const urls = [
  'https://unpkg.com/react-draggable@4.4.4/build/web/react-draggable.min.js',
  // RenderCom 
  'https://cdnfile.corp.kuaishou.com/kc/files/a/kael-mui-demo/chrome-plugin-upload/2024-10-12/1728743964776.7f0006d30ba1c360.js',
  // Vite Demo
  'https://cdnfile.corp.kuaishou.com/kc/files/a/kael-mui-demo/chrome-plugin-upload/2024-10-13/1728799903328.9c86c9cafa0fbd61.js',
]
const App = () => {
  // rul[0], urls[3]可以被解析，但在kael引擎用不了
  return <div>
    <div>动态组件示例：</div>
    <UmdComponent url={urls[2]}
      umdProps={{
        onDrag(e) {
          console.log(e)
        }
    }}>
      <div style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}></div>
    </UmdComponent>
  </div>
}

export default App;