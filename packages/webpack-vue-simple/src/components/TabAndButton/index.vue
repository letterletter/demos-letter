<template>
  <div v-if="!_show" style="width: 100%; height: 200px"></div>
  <Renderer
    v-show="_show"
    ref="_comRef"
    :props="{ ..._childProps }"
    :config="_config"
    :json="_json"
    :comDefs="_comDefs"
    @_my-on-mounted="() => _myOnMounted()"
  />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import RendererComponent from '@mybricks/renderer-pc/toVue';
import { toJSON, config } from './config';
import CustomButton from '@mybricks/comlib-pc-normal/es/Button2';

export default defineComponent<{}>({
  components: {
    Renderer: RendererComponent,
  },
  emits: {},
  defineExpose: [],
  setup(props, ctx) {
    const _comRef = ref();
    const _show = ref(false);

    return {
      _comRef,
      _show,
      _childProps: {},
      _config: config,
      _json: toJSON,
      _comDefs: { 'mybricks.normal-pc.button2': CustomButton },
    };
  },
  methods: {
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
