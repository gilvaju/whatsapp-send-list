(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "3d16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/DataForm.vue?vue&type=template&id=4a21ad99&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"q-pa-md"},[_vm._m(0),_c('div',{staticClass:"row q-mb-xl"},[_c('div',{staticClass:"col-12"},[_c('q-input',{staticClass:"q-mb-sm",attrs:{"filled":"","dense":"","type":"textarea","placeholder":"Utilize [nome] para ser subistituído pelo nome do contato"},model:{value:(_vm.message),callback:function ($$v) {_vm.message=$$v},expression:"message"}}),_c('q-btn',{staticClass:"q-mb-sm",staticStyle:{"width":"100%"},attrs:{"color":"primary","label":"Enviar mensagem para todos"},on:{"click":_vm.sendForall}}),_c('q-btn',{staticStyle:{"width":"100%"},attrs:{"color":"secondary","label":"Importar CSV"},on:{"click":function($event){_vm.prompt = true}}})],1)]),_c('q-dialog',{attrs:{"persistent":""},model:{value:(_vm.prompt),callback:function ($$v) {_vm.prompt=$$v},expression:"prompt"}},[_c('q-card',{staticStyle:{"min-width":"350px"}},[_c('q-card-section'),_c('q-card-section',{staticClass:"q-pt-none"},[_c('q-input',{staticClass:"q-mb-sm",attrs:{"filled":"","dense":"","type":"textarea","placeholder":"Cole aqui o conteúdo do seu arquivo csv"},model:{value:(_vm.csvContent),callback:function ($$v) {_vm.csvContent=$$v},expression:"csvContent"}})],1),_c('q-card-actions',{staticClass:"text-primary justify-between",attrs:{"align":"center"}},[_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"outline":"","label":"Fechar","color":"red"}}),_c('q-btn',{attrs:{"outline":"","color":"primary","label":"Importar"},on:{"click":_vm.importCsv}})],1)],1)],1),_c('q-form',{staticClass:"q-gutter-md",on:{"submit":_vm.onSubmit}},[_c('div',{staticClass:"row justify-between"},[_c('div',{staticClass:"col-6"},[_c('q-input',{attrs:{"dense":"","filled":"","label":"Nome","hint":"Nome e Sobrenome","lazy-rules":"","rules":[ function (val) { return val && val.length > 0 || 'Ops, digite algo!'; }]},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_c('div',{staticClass:"col-5"},[_c('q-input',{attrs:{"dense":"","filled":"","type":"number","label":"Número","hint":"DDD e o 9º Dígito","lazy-rules":"","rules":[
          function (val) { return val !== null && val !== '' || 'Ops, digite algo'; },
          function (val) { return val.length === 11 || 'Ops, digite um número com 11 dígitos'; }
        ]},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}})],1)]),_c('div',{staticClass:"row justify-between text-right"},[_c('q-btn',{staticStyle:{"width":"100%"},attrs:{"size":"md","label":"Adicionar número a lista","type":"submit","outline":"","color":"dark"}})],1)]),_c('div',{staticClass:"q-pa-md"},[_c('q-expansion-item',{attrs:{"icon":"perm_identity","label":"Listagem de Contatos","caption":"Clique para visualizar"},model:{value:(_vm.expanded),callback:function ($$v) {_vm.expanded=$$v},expression:"expanded"}},[_c('q-list',{attrs:{"bordered":"","separator":""}},[_vm._l((_vm.persons),function(person){return [_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":""},on:{"click":function($event){return _vm.onClick(person.url)}}},[_c('q-item-section',[_vm._v(_vm._s(person.name))])],1)]})],2)],1)],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row q-mb-sm"},[_c('p',{staticClass:"q-ma-none text-caption text-weight-light",staticStyle:{"font-size":"0.6rem"}},[_vm._v("\n        * Não armazenamos nenhum contato em nossos servidores\n      ")])])}]


// CONCATENATED MODULE: ./src/pages/DataForm.vue?vue&type=template&id=4a21ad99&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/DataForm.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DataFormvue_type_script_lang_js_ = ({
  name: 'DataForm',
  data: function data() {
    return {
      name: null,
      phone: null,
      persons: [],
      accept: false,
      expanded: true,
      message: '',
      csvContent: '',
      alert: false,
      confirm: false,
      prompt: false,
      address: ''
    };
  },
  methods: {
    onClick: function onClick(url) {
      window.open(url);
    },
    sendForall: function sendForall() {
      var message = this.message;
      this.persons.forEach(function (element, index, array) {
        var messageTransform = message.replace('[nome]', element.name);
        var messageEmcoded = encodeURI(messageTransform);
        window.open(element.url + '&text=' + messageEmcoded);
      }, message);
    },
    importCsv: function importCsv() {
      var _this = this;

      var allText = this.csvContent;
      var allTextLines = allText.split(/\r\n|\n/);
      allTextLines.forEach(function (element, index, array) {
        if (element !== 'nome,telefone') {
          var data = element.split(',');

          _this.persons.push({
            name: data[0],
            phone: data[1],
            url: 'http://api.whatsapp.com/send?phone=55' + data[1]
          });
        }
      });
      this.prompt = !this.prompt;
      this.$q.notify({
        message: 'Conteúdo importado',
        color: 'green'
      });
    },
    onSubmit: function onSubmit() {
      this.persons.push({
        name: this.name,
        phone: this.phone,
        url: 'http://api.whatsapp.com/send?phone=55' + this.phone
      });
      this.$q.notify({
        message: 'Número adicionado a lista',
        color: 'green'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/pages/DataForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_DataFormvue_type_script_lang_js_ = (DataFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 6 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js + 1 modules
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js + 1 modules
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js + 2 modules
var QExpansionItem = __webpack_require__("3b73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__("714f");

// CONCATENATED MODULE: ./src/pages/DataForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_DataFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DataForm = __webpack_exports__["default"] = (component.exports);












runtime_auto_import_default()(component, 'components', {QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QCardActions: QCardActions["a" /* default */],QForm: QForm["a" /* default */],QExpansionItem: QExpansionItem["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */]})



runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */],Ripple: Ripple["a" /* default */]})


/***/ })

}]);
//# sourceMappingURL=5.5baab651.js.map