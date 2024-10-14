import React, { useEffect, lazy, useState, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { RenderComCDN } from './constants'
import * as MUI from '@m-ui/react'
import * as MUIIcon from '@m-ui/icons'
import * as ESProComponents from '@es/pro-components'
import RemoteApp from './components/remoteApp'
import * as Lodash from 'lodash'

import * as ESProComponentsFields from '@es/pro-components-fields'
import UMdApp from './components/umdComApp'
// import App from './App'
// vite打包, APp 那个

import { RendererJsDemo } from './LoadJsCom'
import { FetchJsDemo } from './fetchComp'
import { deps, getLocalDeps } from './constants'
import { loadCjs, loadJSPure } from './loadCjs'
// // import {} from '@'

console.log('reactDom', ReactDOM)
const container = document.getElementById('root')
// react 18
// const root = ReactDOM.createRoot(container)

// root.render(<MyApp />)

// react 17

ReactDOM.render(<MyApp />, document.getElementById('root'));
function MyApp() {
  return <RendererDemo />
}

// window['react'] = React
// window['react-dom'] = ReactDOM
// window['@m-ui/react'] = MUI
// window['@m-ui/icons'] = MUIIcon
// window['@es/pro-components'] = ESProComponents
// window['@es/pro-components-fields'] = ESProComponentsFields
// window['lodash'] = Lodash
// {
//   exportName: 'lodash',
//   value: Lodash,
//   type: 'cjs',
// },
// {
//   exportName: 'lodash-es',
//   value: LodashES,
//   type: 'cjs',
// },

function RendererDemo() {
  let newDeps = getLocalDeps(deps, {})

  const [Com, setCom] = useState(undefined)


  return (
    <div>
      <div>Hello</div>
      {/* ------- RendererJsDemo OK --------  */}
      {/* <FetchJsDemo /> */}
      {/* ------- RendererJsDemo OK --------  */}
      {/* <RendererJsDemo  /> */}
     {/* ------- RemoteApp OK --------- */}
      <RemoteApp />
      {/* <TestApp /> */}
      {/* <UMdApp /> */}
      <div>ll</div>
      {/* <Test label='啦啦啦' btnLabel="测试按钮" /> */}
      {/* {Com && <Com label='啦啦啦' btnLabel="测试按钮"   />} */}
  
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Comp3 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Comp4 />
      </Suspense> */}
      {/* <Demo /> */}
      {/* <MyTestComponent label='啦啦啦' btnLabel="测试按钮" /> */}
    {/* <Button /> */}
      {/* <XXX label='啦啦啦' btnLabel="测试按钮" /> */}
    </div>
  )
}



