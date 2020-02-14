function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-principal-principal-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal/principal.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal/principal.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrincipalPrincipalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>principal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/principal/principal-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/principal/principal-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PrincipalPageRoutingModule */

  /***/
  function srcAppPagesPrincipalPrincipalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalPageRoutingModule", function () {
      return PrincipalPageRoutingModule;
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


    var _principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./principal.page */
    "./src/app/pages/principal/principal.page.ts");

    var routes = [{
      path: '',
      component: _principal_page__WEBPACK_IMPORTED_MODULE_3__["PrincipalPage"]
    }];

    var PrincipalPageRoutingModule = function PrincipalPageRoutingModule() {
      _classCallCheck(this, PrincipalPageRoutingModule);
    };

    PrincipalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrincipalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/principal/principal.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/principal/principal.module.ts ***!
    \*****************************************************/

  /*! exports provided: PrincipalPageModule */

  /***/
  function srcAppPagesPrincipalPrincipalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function () {
      return PrincipalPageModule;
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


    var _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./principal-routing.module */
    "./src/app/pages/principal/principal-routing.module.ts");
    /* harmony import */


    var _principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./principal.page */
    "./src/app/pages/principal/principal.page.ts");

    var PrincipalPageModule = function PrincipalPageModule() {
      _classCallCheck(this, PrincipalPageModule);
    };

    PrincipalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrincipalPageRoutingModule"]],
      declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalPage"]]
    })], PrincipalPageModule);
    /***/
  },

  /***/
  "./src/app/pages/principal/principal.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/principal/principal.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrincipalPrincipalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaW5jaXBhbC9wcmluY2lwYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/principal/principal.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/principal/principal.page.ts ***!
    \***************************************************/

  /*! exports provided: PrincipalPage */

  /***/
  function srcAppPagesPrincipalPrincipalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalPage", function () {
      return PrincipalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrincipalPage =
    /*#__PURE__*/
    function () {
      function PrincipalPage() {
        _classCallCheck(this, PrincipalPage);
      }

      _createClass(PrincipalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrincipalPage;
    }();

    PrincipalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-principal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./principal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal/principal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./principal.page.scss */
      "./src/app/pages/principal/principal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PrincipalPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-principal-principal-module-es5.js.map