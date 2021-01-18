import Test from './Test.vue'
//注册全局组件 然后再index.html中使用
export default function(Vue) {
  Vue.component(Test.name, Test)
}