function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-registro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistroRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"auto\">\r\n        <app-banner titulo=\"Bienvenidos\" texto=\"Introduce tus datos y empieza hoy mismo\"></app-banner>\r\n      </ion-col>\r\n      <ion-col>\r\n        <app-register-form titulo=\"Crea una Cuenta\" tipo1=\"Estudiante\" tipo2=\"Docente\"></app-register-form>\r\n      </ion-col> \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/registro/registro-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/registro/registro-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegistroPageRoutingModule */

  /***/
  function srcAppPagesRegistroRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function () {
      return RegistroPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/pages/registro/registro.page.ts");

    var routes = [{
      path: '',
      component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }];

    var RegistroPageRoutingModule = function RegistroPageRoutingModule() {
      _classCallCheck(this, RegistroPageRoutingModule);
    };

    RegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/registro/registro.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/registro/registro.module.ts ***!
    \***************************************************/

  /*! exports provided: RegistroPageModule */

  /***/
  function srcAppPagesRegistroRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function () {
      return RegistroPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-routing.module */
    "./src/app/pages/registro/registro-routing.module.ts");
    /* harmony import */


    var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/pages/registro/registro.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var RegistroPageModule = function RegistroPageModule() {
      _classCallCheck(this, RegistroPageModule);
    };

    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })], RegistroPageModule);
    /***/
  },

  /***/
  "./src/app/pages/registro/registro.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/registro/registro.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegistroRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  top: 94px;\n  right: 90px;\n}\n\n.banner {\n  left: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vQzpcXFVzZXJzXFxnZnJhblxcRGVza3RvcFxcVEVDQV9IZXJva3VcXHB1YmxpYy9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdHJvXFxyZWdpc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFNBQUE7RUFDQSxXQUFBO0FDQUo7O0FESUE7RUFDSSxTQUFBO0VBQ0EsUUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgXHJcbiAgICB0b3A6IDk0cHg7XHJcbiAgICByaWdodDogOTBweDtcclxuXHJcbn1cclxuXHJcbi5iYW5uZXJ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDsgICAgXHJcbn0iLCIuZm9ybSB7XG4gIHRvcDogOTRweDtcbiAgcmlnaHQ6IDkwcHg7XG59XG5cbi5iYW5uZXIge1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/registro/registro.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/registro/registro.page.ts ***!
    \*************************************************/

  /*! exports provided: RegistroPage */

  /***/
  function srcAppPagesRegistroRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPage", function () {
      return RegistroPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RegistroPage =
    /*#__PURE__*/
    function () {
      function RegistroPage() {
        _classCallCheck(this, RegistroPage);
      }

      _createClass(RegistroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegistroPage;
    }();

    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registro.page.scss */
      "./src/app/pages/registro/registro.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RegistroPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-registro-registro-module-es5.js.map