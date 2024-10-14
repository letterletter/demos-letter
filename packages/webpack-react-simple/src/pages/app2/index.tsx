import React, { useCallback, useRef, } from 'react';
import { createRoot } from 'react-dom/client';
import ReplaceButton from './components/ReplaceButton/index';
import ImageAndButton from './components/ImageAndButton2/index'
import ImageAndTable from './components/ImageAndTable';
import App from './App';
// import { say } from 'node_modules/simple-ts-letter-f1/src/index';
import { say } from 'simple-ts-letter-f1';
import './index.css'
// const a = 10
// const App: React.FC = () => {
//     const testRef = useRef()
//     const buttonRef = useRef()

//     const handleClick = () => {
//       const flatRes = ['a', 'b', 'c', 'd', 5, [ 'e', 'f', 'g'], ['h', 'i']].flat()
//       const index =  flatRes.findIndex(i => i  === 'h')
//       let s = 'lallalala'
//       console.log('doubledNumbers squaredArray', flatRes, index, s.padEnd(2, '1'))
//       console.log(say([1,2,3,4,]), say([1,2,3,-1]))
//     }
//     const handleSetSource = useCallback(() => {
//       console.log('设置数据源')
//       if(testRef.current) {
//         testRef.current.u_xY_io?.([{name: '1', title: '2' ,application: '应用2'}, {name: '2', title: '2' ,application: '应32'}, {name: '4', title: '11' ,application: '应用4'}])
//       }
//     }, [testRef.current])

//     const handleSetForm = useCallback(() => {
//       if(buttonRef.current) {
//         buttonRef.current.setFormData?.({name: 'letter---WFF', title: '组件外部设置'})
//       }
//     }, [buttonRef.current])

//     const handleCommit = (value) => {
//       console.log('内部表单提交数据', value)
//     }
//     return <div>
//       <div className='normalText' onClick={handleClick}>打印日志</div>
//       <div onClick={handleSetSource}>设置数据源</div>
//       <div onClick={handleSetForm}>设置表单数据</div>
//     <div style={{ border: '1px solid green', width: '600px', height: '800px'}}>
//       <ReplaceButton />
//       <ImageAndButton ref={buttonRef} handleCommit={handleCommit} />
//     </div>
//       {/* <ImageAndTable
//         style={{ width: '400px'}}
//         ref={testRef}
//         imageSrc='https://cdnfile.corp.com/kc/files/a/kael-mui-demo/chrome-plugin-upload/2024-03-18/1710742986903.43b4a409c3f6dc08.svg'
//         buttonLabel='按钮文字'
//         textLabel='普通文本'
//         /> */}
//     </div>;
// };

createRoot(document.getElementById('root') as HTMLElement).render(<App />);