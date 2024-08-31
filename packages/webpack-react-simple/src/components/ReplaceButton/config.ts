/**
* 以下内容由 MyBricks 平台生成
* 地址："https://my.mybricks.world/mybricks-app-pc-cdm/index.html?id=562381922820165"
*/
const toJSON = {
  "themes": {
    "comThemes": {}
  },
  "global": {
    "comsReg": {},
    "consReg": {},
    "pinRels": {},
    "pinProxies": {},
    "fxFrames": []
  },
  "scenes": [
    {
      "-v": "1.0.19",
      "deps": [
        {
          "namespace": "mybricks.normal-pc.button2",
          "version": "0.0.1"
        }
      ],
      "coms": {
        "u_Ee27r": {
          "id": "u_Ee27r",
          "def": {
            "namespace": "mybricks.normal-pc.button2",
            "version": "0.0.1"
          },
          "title": "按钮",
          "model": {
            "data": {
              "text": "替换按钮"
            },
            "inputAry": [],
            "outputAry": [],
            "outputEvents": {
              "click": [
                {
                  "type": "defined",
                  "options": {},
                  "active": true
                }
              ],
              "dbClick": [
                {
                  "type": "defined",
                  "options": {},
                  "active": true
                }
              ]
            },
            "style": {
              "display": "flex",
              "left": 20,
              "top": 28,
              "widthAuto": true,
              "width": "fit-content",
              "heightAuto": true,
              "height": "fit-content",
              "widthFact": 88,
              "heightFact": 32,
              "maxWidth": "fit-content",
              "zIndex": 1,
              "position": "relative",
              "visibility": "visible",
              "flexDirection": "column",
              "inSmartLayout": true,
              "flexShrink": 1,
              "margin": "28px 0px 0px 20px"
            }
          },
          "style": {
            "width": 88,
            "height": 32
          }
        }
      },
      "id": "u_Yllw1",
      "title": "组件",
      "type": "normal",
      "comsAutoRun": {},
      "_inputs": [],
      "_outputs": [],
      "inputs": [],
      "outputs": [],
      "cons": {},
      "pinRels": {
        "u_Ee27r-dynamicTitle": [
          "setDynamicTitleDone"
        ],
        "u_Ee27r-dynamicDisabled": [
          "setDynamicDisabledDone"
        ],
        "u_Ee27r-setDynamicStyle": [
          "setDynamicStyleDone"
        ]
      },
      "pinProxies": {},
      "pinValueProxies": {},
      "slot": {
        "id": "u_Yllw1",
        "title": "组件",
        "showType": "module",
        "layoutTemplate": [
          {
            "id": "u_Ee27r",
            "name": "u_3inSC",
            "def": {
              "namespace": "mybricks.normal-pc.button2",
              "version": "0.0.1"
            },
            "brother": [],
            "child": null
          }
        ],
        "comAry": [
          {
            "id": "u_Ee27r",
            "name": "u_3inSC",
            "def": {
              "namespace": "mybricks.normal-pc.button2",
              "version": "0.0.1"
            }
          }
        ],
        "style": {
          "zoom": 1,
          "layout": "smart",
          "justifyContent": "flex-start",
          "alignItems": "flex-start",
          "width": 300,
          "widthFull": true,
          "height": 200,
          "heightAuto": true,
          "widthFact": 300,
          "heightFact": 200
        }
      }
    }
  ],
  "plugins": {
    "@mybricks/plugins/service": []
  },
  "_v": "2024-diff",
  "hasPermissionFn": "(function()%20%7B%20var%20_RTFN_%3B%20%0A%22use%20strict%22%3B%0A%0A_RTFN_%20%3D%20undefined%3B%0A%3B%20return%20_RTFN_%3B%20%7D)()"
}


const executeEnv = "test";
const envList:string[] = [];
const i18nLangContent = undefined;
const getCurrentLocale = () => { return navigator.language; }

const config = { executeEnv, envList, i18nLangContent, locale: getCurrentLocale() }

export { toJSON, config };