<!-- ChildComponent.vue -->
<template>
  <div>
    <button @click="triggerCustomEvent">triggerCustomEvent</button>
  </div>
</template>

<script>
import { defineExpose, defineEmits } from 'vue';

export default {
  data() {
    return {
      counter: 0
    };
  },
  emits: ['customEvent'],
  methods: {
    incrementCounter() {
      this.counter++;
    },
    triggerCustomEvent() {
      this.$emit('customEvent', 'some data');
    }
  },
  // setup() {
  //   const incrementCounter = () => {
  //     this.incrementCounter();
  //   };

  //   defineExpose({
  //     incrementCounter
  //   });
  // }
}
</script>
