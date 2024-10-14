import React, { useEffect, lazy, useState, Suspense } from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
// vite打包, APp 那个
import { RenderComCDN } from './constants'

import { deps, getLocalDeps } from './constants'
import { loadCjs, loadJSPure } from './loadCjs'
import { fetchComponent } from './fetchCom'
// const testComponentCDN = 'https://cdnfile.corp.kuaishou.com/kc/files/a/kael-mui-demo/chrome-plugin-upload/2024-10-10/1728549620663.29107bb955701aaa.js'
// // import {} from '@'

export function RendererJsDemo() {
  let newDeps = getLocalDeps(deps, {})

  const [Com, setCom] = useState(undefined)

  const Comp4 = lazy(() => loadJSPure(RenderComCDN, newDeps))
  // console.log(json)
  useEffect(() => {
    console.log('111')
    loadJSPure(RenderComCDN, newDeps).then(res => {
      console.log('res === loadJs ',res)
      setCom(res.default)
    })

  }, [])
  console.log('Com', Com)
  const testProp = {
    label1: '测试111',
    label2: '测试222',
    label3: '测试333'
  }
  return (
    <div>
      <div>Demo Load JsPure</div>
      <div>ll</div>
      {Com && <Com />}
      <Suspense fallback={<div>Loading...</div>}>
        <Comp4 {...testProp} />
      </Suspense>
    </div>
  )
}
