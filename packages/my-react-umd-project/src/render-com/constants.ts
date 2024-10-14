import React from 'react'
import ReactDOM from 'react-dom'
import * as MUI from '@m-ui/react'
import * as MUIIcon from '@m-ui/icons'
import * as ESProComponents from '@es/pro-components'
import * as ESProComponentsFields from '@es/pro-components-fields'

export const schema = {
  "schemaVersion": "0.0.1",
  "view": {
      "type": "@es/tianhe-basic-materials::Root",
      "id": "root",
      "name": "页面",
      "children": [
          {
              "id": "comp_SS9nNMIN-uATKCQdhtS3Y",
              "type": "@es/tianhe-basic-materials::Button",
              "name": "按钮",
              "children": [],
              "props": {
                  "label": "查询",
                  "type": "default",
                  "ghost": false,
                  "danger": false,
                  "htmlType": "button",
                  "shape": "",
                  "size": "",
                  "prefixIcon": "",
                  "suffixIcon": "",
                  "disabled": false,
                  "loading": false,
                  "definedFlag": false,
                  "buttonShowContent": {
                      "type": "array",
                      "value": [
                          {
                              "type": "render-fn",
                              "value": []
                          }
                      ]
                  },
                  "style": false,
                  "__$condition$__": {
                      "type": "static",
                      "value": {
                          "render": true,
                          "visible": true
                      }
                  },
                  "__$loop$__": {
                      "type": "static",
                      "value": {
                          "items": [
                              1,
                              2,
                              3
                          ]
                      }
                  },
                  "__$reconfirm$__": {
                      "type": "static",
                      "value": {
                          "type": "modal",
                          "text": "确定继续吗？"
                      }
                  },
                  "onClick": {
                      "type": "bp",
                      "path": [
                          "model",
                          "click"
                      ]
                  }
              }
          },
          {
              "id": "comp_L0n64LLs_O-ZUmw_lsmrG",
              "type": "@es/tianhe-basic-materials::Text",
              "name": "文本",
              "children": [],
              "props": {
                  "label": {
                      "type": "bp",
                      "path": [
                          "model",
                          "props",
                          "label"
                      ]
                  },
                  "contentType": "text",
                  "fontFamily": "",
                  "fontSize": "14px",
                  "textAlign": "center",
                  "ellipsisRows": 10,
                  "textDecoration": "none",
                  "__$condition$__": {
                      "type": "static",
                      "value": {
                          "render": true,
                          "visible": true
                      }
                  },
                  "__$loop$__": {
                      "type": "static",
                      "value": {
                          "items": [
                              1,
                              2,
                              3
                          ]
                      }
                  }
              }
          },
          {
              "id": "comp_BnNpR86rXGVFUkA_PNgZY",
              "type": "@es/tianhe-basic-materials::Button",
              "name": "按钮",
              "children": [],
              "props": {
                  "label": {
                      "type": "bp",
                      "path": [
                          "model",
                          "props",
                          "btnTitle"
                      ]
                  },
                  "type": "default",
                  "ghost": false,
                  "danger": false,
                  "htmlType": "button",
                  "shape": "",
                  "size": "",
                  "prefixIcon": "",
                  "suffixIcon": "",
                  "disabled": false,
                  "loading": false,
                  "definedFlag": false,
                  "buttonShowContent": {
                      "type": "array",
                      "value": [
                          {
                              "type": "render-fn",
                              "value": []
                          }
                      ]
                  },
                  "style": false,
                  "__$condition$__": {
                      "type": "static",
                      "value": {
                          "render": true,
                          "visible": true
                      }
                  },
                  "__$loop$__": {
                      "type": "static",
                      "value": {
                          "items": [
                              1,
                              2,
                              3
                          ]
                      }
                  },
                  "__$reconfirm$__": {
                      "type": "static",
                      "value": {
                          "type": "modal",
                          "text": "确定继续吗？"
                      }
                  }
              }
          },
          {
              "id": "comp_nzrOI0J-XnMJfoN8Jr0Yc",
              "type": "@es/tianhe-basic-materials::Text",
              "name": "文本",
              "children": [],
              "props": {
                  "label": "我是文字",
                  "contentType": "text",
                  "fontFamily": "",
                  "fontSize": "14px",
                  "textAlign": "center",
                  "ellipsisRows": 10,
                  "textDecoration": "none",
                  "__$condition$__": {
                      "type": "static",
                      "value": {
                          "render": true,
                          "visible": true
                      }
                  },
                  "__$loop$__": {
                      "type": "static",
                      "value": {
                          "items": [
                              1,
                              2,
                              3
                          ]
                      }
                  }
              }
          }
      ],
      "props": {
          "configs": [
              {
                  "title": "属性标题",
                  "name": "label",
                  "type": "文本",
                  "setter": "StringSetter",
                  "id": "u_4tjz29"
              },
              {
                  "title": "属性标题",
                  "name": "btnTitle",
                  "type": "文本",
                  "setter": "StringSetter",
                  "id": "u_70if0z"
              }
          ]
      }
  },
  "modelTs": "\n/**\n * 请在此处编写页面逻辑（TypeScript 语法）\n * @see https://docs.corp.com/k/home/VP522ZoMnT9o/fcACloyvkbkW5KJZScO5tEcOp\n * @see https://www.typescriptlang.org/\n */\ninterface IProps {\n  label: string;\n  btnTitle: string;\n  getRef: (pageModel: PageModel) => void;\n}\nclass PageModel {\n  utils!: IUtils\n  props: IProps\n  data = {\n    label: '云组件内部label',\n    title: '云组件标题'\n  }\n  constructor(props: IProps) {\n  console.log('pageModel props', props);   this.props = props;\n    if (typeof this.props?.getRef === 'function') {\n      this.props.getRef?.(this) //暴露云组件pageModel实例\n    }\n  }\n  click() {\n    console.log('按钮点击')\n  }\n  // 定义数据，一般绑定到组件的属性上\n  // num = 1\n\n  // 定义方法，一般绑定到组件的事件上\n  // updateNum (): void {\n  //   this.num = ++this.num\n  // }\n}\n",
  "modelName": "PageModel",
  "model": "class PageModel {\n    utils;\n    props;\n    data = {\n        label: '云组件内部label',\n        title: '云组件标题'\n    };\n    constructor(props) {\n  console.log('pageModel props', props);      this.props = props;\n        if (typeof this.props?.getRef === 'function') {\n            this.props.getRef?.(this); //暴露云组件pageModel实例\n        }\n    }\n    click() {\n        console.log('按钮点击');\n    }\n}\n",
  "modelTsDeclaration": "/**\n * 请在此处编写页面逻辑（TypeScript 语法）\n * @see https://docs.corp.com/k/home/VP522ZoMnT9o/fcACloyvkbkW5KJZScO5tEcOp\n * @see https://www.typescriptlang.org/\n */\ninterface IProps {\n    label: string;\n    btnTitle: string;\n    getRef: (pageModel: PageModel) => void;\n}\ndeclare class PageModel {\n    utils: IUtils;\n    props: IProps;\n    data: {\n        label: string;\n        title: string;\n    };\n    constructor(props: IProps);\n    click(): void;\n}\n",
  "editTime": 15420000,
  "materialLibs": [
      {
          "name": "@es/tianhe-basic-materials",
          "schemaUrl": "https://p2.adkwai.com/kos/nlav12572/production/@es/tianhe-basic-materials@0.0.149/dist/component.library.material.json"
      },
      {
          "name": "@es/tianhe-pro-materials",
          "schemaUrl": "https://p2.adkwai.com/kos/nlav12572/production/@es/tianhe-pro-materials@0.0.91/dist/component.library.material.json"
      }
  ]
}



export const deps = [
  {
    exportName: 'react',
    value: React,
    type: 'cjs',
  },
  {
    exportName: 'react-dom',
    value: ReactDOM,
    type: 'cjs',
  },
  {
    value: React,
    type: 'cjs',
    exportName: 'React',
  },
  {
    value: ReactDOM,
    type: 'cjs',
    exportName: 'ReactDom',
  },
  // {
  //   value: moment,
  //   type: 'cjs',
  //   exportName: 'moment',
  // },
  {
    value: MUI,
    type: 'cjs',
    exportName: '@m-ui/react',
  },
  {
    value: MUIIcon,
    type: 'cjs',
    exportName: '@m-ui/icons',
  },
  {
    value: ESProComponents,
    type: 'cjs',
    exportName: '@es/pro-components',
  },
  {
    value: ESProComponentsFields,
    type: 'cjs',
    exportName: '@es/pro-components-fields',
  },
]
