const path = require('path')
const resolve = require('rollup-plugin-node-resolve') 
const babel = require('rollup-plugin-babel') 
const json = require('rollup-plugin-json') 
const vuePlugin = require('rollup-plugin-vue')
const poscss = require('rollup-plugin-postcss')
const commonjs = require('rollup-plugin-commonjs')

module.exports = {
    input: path.resolve(__dirname, './src/index.js'),
    //打包 umd 和 es 两种模块
    output: [
        {
            file: path.resolve(__dirname, './dist/bundle.umd.js'),
            format: 'umd',
            name: 'immoc_datav', //必须指定一个chunkname,
            globals:{
                vue:'vue'
            }
        },
        {
            file: path.resolve(__dirname, './dist/bundle.es.js'),
            format: 'es',
            name: 'immoc_datav', //必须指定一个chunkname
            globals:{
                vue:'vue'
            }
        }
    ],
    plugins: [
        vuePlugin(), //必须写在前边，要不template里边报错，太JB坑了我2天
        resolve({
            preferBuiltins: true
          }),
        babel({
            exclude:'node_modules/**',
            runtimeHelpers: true,
            plugins: [
              ['@babel/transform-runtime', {
                regenerator: true
              }]
            ]
        }),
        json(),
        
        commonjs(),
        poscss({
            plugins:[]
        })
    ],
    external:['vue']   //不要让VUE打包到bundle中 ，冗余
}