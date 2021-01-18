<template>
  <div>
      <div class="test">{{message}} - {{doubleCount}}</div>
      <button @click = add>add</button>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
    name:'TestComponent2',
    setup() {
        const message = "来自组件test2";
        let count = ref(1);
        const doubleCount = computed(()=>count.value * 2)
        const add = ()=>{
            count.value++
        }
        return {
            message,doubleCount,
            add
        }
    }
}
</script>

<style lang="scss" scoped>
    .test {
        color:blue;
    }
</style>