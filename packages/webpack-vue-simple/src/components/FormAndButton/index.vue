<template>
  <div v-if="!_show" style="width: 100%; height: 379px"></div>
  <Renderer
    v-show="_show"
    ref="_comRef"
    :props="{ ..._childProps }"
    :config="_config"
    :json="_json"
    :comDefs="_comDefs"
    :class="class"
    :className="className"
    :style="style"
    @_my-on-mounted="() => _myOnMounted()"
  />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import RendererComponent from '@mybricks/renderer-pc/toVue';
import { toJSON, config } from './config';
import JsonView from '@mybricks/comlib-pc-normal/es/JsonView';
import muiltInputJs from '@mybricks/comlib-basic/es/muiltInputJs';
import CustomButton from '@mybricks/comlib-pc-normal/es/CustomButton';
import FormContainer from '@mybricks/comlib-pc-normal/es/FormContainer';
import InputTextarea from '@mybricks/comlib-pc-normal/es/InputTextarea';

export default defineComponent<{
  class?: string;
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
}>({
  props: ['class', 'className', 'style'],
  components: {
    Renderer: RendererComponent,
  },
  emits: {
    u__puFt: (values: string) => {
      return true;
    },
    u_2rIgU: (values: string) => {
      return true;
    },
    handleCommit: (values: string) => {
      return true;
    },
  },
  defineExpose: ['input_test', 'input_get', 'setFormData'],
  setup(props, ctx) {
    const _comRef = ref();
    const _show = ref(false);

    return {
      _comRef,
      _show,
      _childProps: {
        u__puFt: (values: string) => {
          ctx.emit('u__puFt', values);
        },
        u_2rIgU: (values: string) => {
          ctx.emit('u_2rIgU', values);
        },
        handleCommit: (values: string) => {
          ctx.emit('handleCommit', values);
        },
      },
      _config: config,
      _json: toJSON,
      _comDefs: {
        'mybricks.normal-pc.json-view': JsonView,
        'mybricks.basic-comlib._muilt-inputJs': muiltInputJs,
        'mybricks.normal-pc.custom-button': CustomButton,
        'mybricks.normal-pc.form-container': FormContainer,
        'mybricks.normal-pc.input-textarea': InputTextarea,
      },
    };
  },
  methods: {
    input_test(params: string) {
      this._getRef(params, 'input_test', null).then((ref) => {
        ref.input_test(params);
      });
    },
    input_get(params: string) {
      return this._comRef.currentRef.__veauryReactRef__.input_get(params);
    },
    setFormData(params: string) {
      this._getRef(params, 'setFormData', null).then((ref) => {
        ref.setFormData(params);
      });
    },

    _myOnMounted() {
      setTimeout(() => {
        this._show = true;
      }, 0);
    },
    _getRef(params, key, res) {
      return new Promise((resolve, reject) => {
        if (this._comRef.currentRef && this._comRef.currentRef[key]) {
          if (res) {
            res(this._comRef.currentRef);
          } else {
            resolve(this._comRef.currentRef);
          }
        } else {
          setTimeout(() => {
            this._getRef(params, key, res).then(() => {
              resolve(this._comRef.currentRef);
            });
          }, 0);
        }
      });
    },
  },
});
</script>

<style>
@import 'antd/dist/antd.css';
</style>
