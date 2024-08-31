import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { ConfigProvider, message } from 'antd';
import { BrowserRouter, Route, Routes, Outlet, NavLink, Link } from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
const Layout = () => (
  <div>
    <h1>My Manage App</h1>
    <Link to={'/test'}> Manage test</Link>
    <Link to={'/description'}>description</Link>
    <Outlet />
  </div>
);

const App = () => {

  return (
    <BrowserRouter basename="/app2">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>hello Manage</div>} />
          <Route path="test" element={<div>test</div>} />
          <Route path="description" element={<div>descriptioin</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

};
export default App;
