function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-avatar-avatar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAvatarAvatarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n          <app-banner titulo=\"Bienvenido\" texto=\"Introduce tus datos y empieza hoy mismo ha aprender.\"></app-banner>\r\n      </ion-col>\r\n      <ion-col class=\"avatarComponent\">\r\n        <app-avatar-select titulo=\"Crea una Cuenta\" tipo1=\"Estudiante\" tipo2=\"Docente\"></app-avatar-select >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/avatar/avatar-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AvatarPageRoutingModule */

  /***/
  function srcAppPagesAvatarAvatarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarPageRoutingModule", function () {
      return AvatarPageRoutingModule;
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


    var _avatar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./avatar.page */
    "./src/app/pages/avatar/avatar.page.ts");

    var routes = [{
      path: '',
      component: _avatar_page__WEBPACK_IMPORTED_MODULE_3__["AvatarPage"]
    }];

    var AvatarPageRoutingModule = function AvatarPageRoutingModule() {
      _classCallCheck(this, AvatarPageRoutingModule);
    };

    AvatarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AvatarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/avatar/avatar.module.ts ***!
    \***********************************************/

  /*! exports provided: AvatarPageModule */

  /***/
  function srcAppPagesAvatarAvatarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarPageModule", function () {
      return AvatarPageModule;
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


    var _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./avatar-routing.module */
    "./src/app/pages/avatar/avatar-routing.module.ts");
    /* harmony import */


    var _avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./avatar.page */
    "./src/app/pages/avatar/avatar.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var AvatarPageModule = function AvatarPageModule() {
      _classCallCheck(this, AvatarPageModule);
    };

    AvatarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AvatarPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_avatar_page__WEBPACK_IMPORTED_MODULE_6__["AvatarPage"]]
    })], AvatarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/avatar/avatar.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAvatarAvatarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatarComponent {\n  top: 94px;\n  right: 104px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXZhdGFyL0M6XFxVc2Vyc1xcZ2ZyYW5cXERlc2t0b3BcXFRFQ0FfSGVyb2t1XFxwdWJsaWMvc3JjXFxhcHBcXHBhZ2VzXFxhdmF0YXJcXGF2YXRhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F2YXRhci9hdmF0YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXZhdGFyL2F2YXRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyQ29tcG9uZW50e1xyXG4gICAgdG9wOiA5NHB4O1xyXG4gICAgcmlnaHQ6MTA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIuYXZhdGFyQ29tcG9uZW50IHtcbiAgdG9wOiA5NHB4O1xuICByaWdodDogMTA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/avatar/avatar.page.ts ***!
    \*********************************************/

  /*! exports provided: AvatarPage */

  /***/
  function srcAppPagesAvatarAvatarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarPage", function () {
      return AvatarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AvatarPage =
    /*#__PURE__*/
    function () {
      function AvatarPage() {
        _classCallCheck(this, AvatarPage);
      }

      _createClass(AvatarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AvatarPage;
    }();

    AvatarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./avatar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./avatar.page.scss */
      "./src/app/pages/avatar/avatar.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AvatarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-avatar-avatar-module-es5.js.map