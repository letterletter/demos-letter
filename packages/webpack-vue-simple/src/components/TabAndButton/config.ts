/**
* 以下内容由 MyBricks 平台生成
* 地址："https://my.mybricks.world/mybricks-app-pc-cdm/index.html?id=562434472988741"
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
        "u_u25gX": {
          "id": "u_u25gX",
          "def": {
            "namespace": "mybricks.normal-pc.button2",
            "version": "0.0.1"
          },
          "title": "按钮",
          "model": {
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
              "left": 18,
              "top": 10,
              "widthAuto": true,
              "width": "fit-content",
              "heightAuto": true,
              "height": "fit-content",
              "widthFact": 65,
              "heightFact": 32,
              "maxWidth": "fit-content",
              "zIndex": 1,
              "position": "relative",
              "visibility": "visible",
              "flexDirection": "column",
              "inSmartLayout": true,
              "flexShrink": 1,
              "margin": "10px 0px 0px 18px"
            }
          },
          "style": {
            "width": 65,
            "height": 32
          }
        }
      },
      "id": "u_nZnxZ",
      "title": "组件",
      "type": "normal",
      "comsAutoRun": {},
      "_inputs": [],
      "_outputs": [],
      "inputs": [],
      "outputs": [],
      "cons": {},
      "pinRels": {
        "u_u25gX-dynamicTitle": [
          "setDynamicTitleDone"
        ],
        "u_u25gX-dynamicDisabled": [
          "setDynamicDisabledDone"
        ],
        "u_u25gX-setDynamicStyle": [
          "setDynamicStyleDone"
        ]
      },
      "pinProxies": {},
      "pinValueProxies": {},
      "slot": {
        "id": "u_nZnxZ",
        "title": "组件",
        "showType": "module",
        "layoutTemplate": [
          {
            "id": "u_u25gX",
            "name": "u_cZ6xn",
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
            "id": "u_u25gX",
            "name": "u_cZ6xn",
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
};

const executeEnv = "test";
const envList:string[] = [];
const i18nLangContent = undefined;
const getCurrentLocale = () => { return navigator.language; }

const config = { executeEnv, envList, i18nLangContent, locale: getCurrentLocale() }

export { toJSON, config };