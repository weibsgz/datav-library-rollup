# Vue 组件库 rollUp 打包

### 步骤总览

1. 配置好 ROLLUP 可以打包 VUE 组件 `src/index.js` 注册组件
2. `./example/index.html` 引入 vue.js 和 ROLLUP 打包出来的组件代码看看可以正常使用
   本地如果报错 `bundle.umd.js:17 Uncaught TypeError: Cannot read property 'withScopeId' of undefined`
   引入的 JS 如果报错 是因为打包出来 JS 的源码中要修改`factory(global.vue))` 改成 `factory(global.Vue))` v 大写
3. 本地 npm link 组件库 使之本地全局映射在 nodejs 下一个快捷方式
4. 在要应用组件库额项目中 link 就可以直接使用了

### 插件安装

//为了集成 node_modules 外部仓库，插件

1. cnpm i -D rollup-plugin-node-resolve

//选择安装：使可以用 import，export 语法 node 默认只支持 commonjs 标准(module.exports) 2. cnpm i -g @babel/node  
 cnpm i -g @babel/core
cnpm i -D @babel/preset-env

//以上都是 babel-node 的安装依赖
//这样才可以运行 babel-node src/index.js

3. 安装 babel 插件(转 ES6 为 ES2015 代码)
   npm i -D rollup-plugin-babel

4. 支持打包 JSON 文件
   npm i -D rollup-plugin-json

5. 压缩
   npm i rollup-plugin-terser --save-dev

6. 识别 commonjs
   npm i -D rollup-plugin-commonjs

### 支持 VUE

1. npm i -D rollup-plugin-vue

2. npm i -D rollup-plugin-postcss

3. npm i -D sass

### 安装 ESLINT (做成组件库在 vueCLI 中使用要求组件库必须有 eslint)

1. npm i eslint -D

2. 执行 `./node_modules/.bin/eslint --init`

   1. to Check syntax only
   2. javascrpt modules(imprt / export)
   3. vue.js
   4. no
   5. browser
   6. javassvript
   7. yes

3. 成功提示： Successfully created .eslintrc.js file in D:\学习\imooc\datav-library-rollup

4. 配置 package.json 命令 增加 "lint":"eslint ./src"

---

# 使用组件库(本地 npm run link)

### npm link(本地创建组件库，生成本地全局的 node 插件，在 nodejs 目录下)

1. package.json 中配置 main:(引入的 JS) files(需要包含的文件夹) keywords（关键字）

2. 执行 `npm link` 这就在你本地的 nodejs 目录下 D:\nodejs\node_modules\datav-libs-dev
   生成了一个链接到你项目的快捷方式，以后每次 npm run build 都会打包到这里了

3. 进入到要使用的项目目录下 执行 `npm link datav-libs-dev` 这样就链接上了本地的组件库

4. 在要使用的项目中 main.js 中就可以引入了
   main.js

```
import datav from 'datav-libs-dev'

createApp(App).use(store).use(router).use(datav).mount('#app')

// 按需加载 vue-cli 中处理了按需加载的方式 否则还要去安装 babel-plugin-component (参考element ui 按需加载)
// import datav1 from 'datav-libs-dev/src/components/test'

```

5. 然后就可以在任意组件中使用了 ` <test-component></test-component>`

6. 并且在组件库中任意修改代码 都会直接同步到应用的项目中，不需要再次 npm run link

### 兼容 VUE2.X

1. 如果是用 VUE2 的语法开发组件库 目前来说 VUE3 的项目是可以支持的， 反之如果是 VUE3 开发的组件库，
   VUE2 的项目是不支持的

2. 如果要兼容 VUE2.x 项目需要
   - 删除组件库的 node_modules `rm -rf node_modules`
   - 插件降级 rollup-plugin-vue 5.0.0
   - 去掉 @vue/compiler-sfc
   - 增加 "vue-template-compiler": "^2.6.12"
3. compositon API 是不支持的 还要用原来的方式
