<template>
  <div class="wrapper">
    <!-- <h2 @click="test">Vue 项目 Demo</h2> -->
    <SimpleButton @customEvent="handleCustomEvent" />
    <div @click="setFormData">设置表单数据</div>
    <FormAndButton ref="formBtnRef" @handleCommit="hleCommit"  />

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formBtnRef = ref()
// import TabAndButton from './components/TabAndButton/index.vue'
import FormAndButton from './components/FormAndButton/index.vue'
import SimpleButton from './components/SimpleButton/index.vue'
// import { say } from 'simple-ts-letter-f1';
import './app.css'
function test () {
  const flatRes = ['a', 'b', 'c', 'd', 5, [ 'e', 'f', 'g'], ['h', 'i']]
  const index =  flatRes.findIndex(i => i  === 'h')
  const i2 = flatRes.find(i => i ==='a')
  console.log('doubledNumbers squaredArray', flatRes, index, Object.values({ "DD": "1", "EE": "2"}))
  flatRes.fill(0, 2, 4);
  // console.log('call say', say([1,2,3,4]), say([1,2,3,-1]))
}
function hleCommit (value) {
  console.log('commit ---- ', value)
}

function handleCustomEvent (value) {
  console.log('父组件传递处理方法', value)
}
function setFormData(){
  formBtnRef.value?.setFormData({
    name: 'wufan',
    title: '测试测试测试',
})
}
</script>
<style scoped>
</style>