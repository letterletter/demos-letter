(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MyReactUMDProject = factory(global.react));
})(this, (function (React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var data = {
    AAA: '111',
    BBB: '222'
  };

  // import React from 'react'
  function App() {
    // const { label = '1111', image} = props
    // const [count, setCount] = useState(0)
    console.log('data', data);
    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", null, "Hello Ceshi1 \u7B2C\u4E8C\u4E2A"), /*#__PURE__*/React__default["default"].createElement("div", null, JSON.stringify(data)));
  }

  return App;

}));
