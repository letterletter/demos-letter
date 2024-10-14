// eslint-disable-next-line dirs/filenames
import React from 'react'
import ReactDOM from 'react-dom'
import { UmdComponent } from './umdComp'

window['react'] = React
window['react-dom'] = ReactDOM

console.log('window ---组件册', window)
// window['react'] = window.React;
// window['react-dom'] = window.ReactDOM;

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
