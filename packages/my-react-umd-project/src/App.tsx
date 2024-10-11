// import React from 'react'
import React  from 'react';

import { data } from './constants';

function App() {
  // const { label = '1111', image} = props
  // const [count, setCount] = useState(0)
  console.log('data', data)
  return (
    <div>
     <div>Hello Ceshi1 第二个</div>
     <div>{JSON.stringify(data)}</div>
     {/* <div>{label}</div>
     {image && <div>{image}</div>} */}
    </div>
  )
}

export default App

