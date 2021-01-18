(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
    typeof define === 'function' && define.amd ? define(['vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.immoc_datav = factory(global.Vue));
}(this, (function (vue) { 'use strict';

    var script = {
      name: 'TestComponent',
      setup: function setup() {
        var message = "来自组件test1";
        var count = vue.ref(1);
        var doubleCount = vue.computed(function () {
          return count.value * 2;
        });

        var add = function add() {
          count.value++;
        };

        return {
          message: message,
          doubleCount: doubleCount,
          add: add
        };
      }
    };

    var _withId = /*#__PURE__*/vue.withScopeId("data-v-4d24f8af");

    vue.pushScopeId("data-v-4d24f8af");

    var _hoisted_1 = {
      "class": "test"
    };

    vue.popScopeId();

    var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
      return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("div", _hoisted_1, vue.toDisplayString($setup.message) + " - " + vue.toDisplayString($setup.doubleCount), 1
      /* TEXT */
      ), vue.createVNode("button", {
        onClick: _cache[1] || (_cache[1] = function () {
          return $setup.add && $setup.add.apply($setup, arguments);
        })
      }, "add")]);
    });

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".test[data-v-4d24f8af] {\n  color: red;\n}";
    styleInject(css_248z);

    script.render = render;
    script.__scopeId = "data-v-4d24f8af";
    script.__file = "src/components/test/Test.vue";

    function Test (Vue) {
      Vue.component(script.name, script);
    }

    var script$1 = {
      name: 'TestComponent2',
      setup: function setup() {
        var message = "来自组件test2";
        var count = vue.ref(1);
        var doubleCount = vue.computed(function () {
          return count.value * 2;
        });

        var add = function add() {
          count.value++;
        };

        return {
          message: message,
          doubleCount: doubleCount,
          add: add
        };
      }
    };

    var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-80a5831e");

    vue.pushScopeId("data-v-80a5831e");

    var _hoisted_1$1 = {
      "class": "test"
    };

    vue.popScopeId();

    var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
      return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("div", _hoisted_1$1, vue.toDisplayString($setup.message) + " - " + vue.toDisplayString($setup.doubleCount), 1
      /* TEXT */
      ), vue.createVNode("button", {
        onClick: _cache[1] || (_cache[1] = function () {
          return $setup.add && $setup.add.apply($setup, arguments);
        })
      }, "add")]);
    });

    var css_248z$1 = ".test[data-v-80a5831e] {\n  color: blue;\n}";
    styleInject(css_248z$1);

    script$1.render = render$1;
    script$1.__scopeId = "data-v-80a5831e";
    script$1.__file = "src/components/test2/Test2.vue";

    function Test2 (Vue) {
      Vue.component(script$1.name, script$1);
    }

    function index (Vue) {
      Vue.use(Test);
      Vue.use(Test2);
    }

    return index;

})));
