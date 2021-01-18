import Test2 from './Test2.vue'
//注册全局组件 然后再index.html中使用
export default function(Vue) {
  Vue.component(Test2.name, Test2)
}