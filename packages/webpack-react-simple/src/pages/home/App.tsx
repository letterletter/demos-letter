import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { ConfigProvider, message } from 'antd';
import { BrowserRouter, Route, Routes, Outlet, NavLink, Link } from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
const Layout = () => (
  <div>
    <h1>My App</h1>
    <Link to={'/contact'}>concat</Link>
    <Link to={'/blogs'}>blogs</Link>
    <Outlet />
  </div>
);

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>hello</div>} />
          <Route path="blogs" element={<div>blogs</div>} />
          <Route path="contact" element={<div>concact</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

	// return (
	// 	<ConfigProvider locale={zhCN}>
	// 		<BrowserRouter>
	// 			{/* <Main> */}
	// 				<Routes >
	// 					<Route path="/" element={<div> HELLO</div>} >
  //           <Route path="about" element={<div> ABOUT</div>} />
  //           </Route>

	// 					{/* <Route path="/detail" element={<Detail />} />
	// 					<Route path="/schema" element={<ComponentSchema />} />
	// 					<Route path="/lib-detail" element={<MaterialLibDetail />} /> */}
	// 				</Routes>
	// 			{/* </Main> */}
	// 		</BrowserRouter>
	// 	</ConfigProvider>
	// );
};
export default App;
