function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  \r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/avatar-select.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/avatar-select.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarSelectAvatarSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid>\r\n    <ion-row >\r\n      <ion-col class=\"titulo\">\r\n          <ion-label color=\"atomik\">{{titulo}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n          <!--En esta seccion va el segment para seleccionar el tipo de avatar-->\r\n          <ion-item>\r\n            <ion-segment>\r\n              <ion-segment-button value=\"estudiante\" checked=\"this.visibleStudent\">\r\n              <ion-label>{{tipo1}}</ion-label>\r\n            </ion-segment-button >\r\n            <ion-segment-button value=\"docente\" checked=\"!this.visibleStudent\">\r\n              <ion-label>{{tipo2}}</ion-label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n          </ion-item>       \r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <!--En esta seccion va los subcomponentes para seleccionar el avatar por tipo y sexo-->\r\n        <app-professor-avatar tipo1=\"Femenino\" tipo2=\"Masculino\" mensaje=\"Escoge un avatar para tu cuenta\" comando=\"Comencemos\" *ngIf=\"visibleProfessor\" (newProfessorEvent)=\"setAvatarUser($event)\"></app-professor-avatar>\r\n        <app-student-avatar tipo1=\"Femenino\" tipo2=\"Masculino\" mensaje=\"Escoge un avatar para tu cuenta\" comando=\"Comencemos\" *ngIf=\"visibleStudent\" (newStudentEvent)=\"setAvatarUser($event)\"></app-student-avatar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  \r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/professor-avatar/man-avatar/man-avatar.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/professor-avatar/man-avatar/man-avatar.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarSelectProfessorAvatarManAvatarManAvatarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-segment (ionChange)=\"selectAvatar($event)\">\r\n          <ion-segment-button value=\"assets/img/avatar/masculino/docente/docente1.png\">\r\n            <ion-img src=\"assets/img/avatar/masculino/docente/docente1.png\"></ion-img>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"assets/img/avatar/masculino/docente/docente2.png\">\r\n          <ion-img src=\"assets/img/avatar/masculino/docente/docente2.png\"></ion-img>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"assets/img/avatar/masculino/docente/docente3.png\">\r\n          <ion-img src=\"assets/img/avatar/masculino/docente/docente3.png\"></ion-img>\r\n        </ion-segment-button>  \r\n\r\n        <ion-segment-button value=\"assets/img/avatar/masculino/docente/docente4.png\">\r\n          <ion-img src=\"assets/img/avatar/masculino/docente/docente4.png\"></ion-img>\r\n        </ion-segment-button>        \r\n      </ion-segment>    \r\n      </ion-col>\r\n    </ion-row> \r\n\r\n    <ion-row>\r\n      <ion-col class=\"btnEmpecemos\">\r\n        <ion-button shape=\"round\" (click)=\"create()\">{{comando}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/professor-avatar/professor-avatar.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/professor-avatar/professor-avatar.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarSelectProfessorAvatarProfessorAvatarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"mensaje\">\r\n        <ion-label>{{mensaje}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row >\r\n      <ion-col>\r\n        <app-woman-avatar comando=\"Comencemos\" (newWomanEvent)=\"create($event)\" *ngIf=\"this.visibleFemenino\"></app-woman-avatar>\r\n        <app-man-avatar comando=\"Comencemos\" (newManEvent)=\"create($event)\" *ngIf=\"this.visibleMasculino\"></app-man-avatar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarSelectProfessorAvatarWomanAvatarWomanAvatarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-segment (ionChange)=\"selectAvatar($event)\">\r\n          <ion-segment-button value=\"assets/img/avatar/femenino/docente/docente1.png\">\r\n            <ion-img src=\"assets/img/avatar/femenino/docente/docente1.png\"></ion-img>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"assets/img/avatar/femenino/docente/docente2.png\">\r\n          <ion-img src=\"assets/img/avatar/femenino/docente/docente2.png\"></ion-img>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"assets/img/avatar/femenino/docente/docente3.png\">\r\n          <ion-img src=\"assets/img/avatar/femenino/docente/docente3.png\"></ion-img>\r\n        </ion-segment-button>  \r\n\r\n        <ion-segment-button value=\"assets/img/avatar/femenino/docente/docente4.png\">\r\n          <ion-img src=\"assets/img/avatar/femenino/docente/docente4.png\"></ion-img>\r\n        </ion-segment-button>        \r\n      </ion-segment>       \r\n      </ion-col>\r\n    </ion-row> \r\n    <ion-row>\r\n      <ion-col class=\"btnEmpecemos\">\r\n        <ion-button shape=\"round\" (click)=\"create()\">{{comando}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>        \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/student-avatar/boy-avatar/boy-avatar.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/student-avatar/boy-avatar/boy-avatar.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarSelectStudentAvatarBoyAvatarBoyAvatarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>   \r\n        <ion-segment (ionChange)=\"selectAvatar($event)\">\r\n          <ion-segment-button value=\"assets/img/avatar/masculino/estudiante/estudiante1.png\">\r\n            <ion-img src=\"assets/img/avatar/masculino/estudiante/estudiante1.png\"></ion-img>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"assets/img/avatar/masculino/estudiante/estudiante2.png\">\r\n          <ion-img src=\"assets/img/avatar/masculino/estudiante/estudiante2.png\"></ion-img>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"assets/img/avatar/masculino/estudiante/estudiante3.png\">\r\n          <ion-img src=\"assets/img/avatar/masculino/estudiante/estudiante3.png\"></ion-img>\r\n        </ion-segment-button>  \r\n\r\n        <ion-segment-button value=\"assets/img/avatar/masculino/estudiante/estudiante4.png\">\r\n          <ion-img src=\"assets/img/avatar/masculino/estudiante/estudiante4.png\"></ion-img>\r\n        </ion-segment-button>        \r\n      </ion-segment>            \r\n      </ion-col>\r\n    </ion-row> \r\n    <ion-row>\r\n      <ion-col class=\"btnEmpecemos\">\r\n        <ion-button shape=\"round\" (click)=\"create()\">{{comando}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>        \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/student-avatar/girl-avatar/girl-avatar.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/student-avatar/girl-avatar/girl-avatar.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarSelectStudentAvatarGirlAvatarGirlAvatarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>        \r\n        <ion-segment (ionChange)=\"selectAvatar($event)\">\r\n          <ion-segment-button value=\"assets/img/avatar/femenino/estudiante/estudiante1.png\">\r\n            <ion-img src=\"assets/img/avatar/femenino/estudiante/estudiante1.png\"></ion-img>\r\n          </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"assets/img/avatar/femenino/estudiante/estudiante2.png\">\r\n          <ion-img src=\"assets/img/avatar/femenino/estudiante/estudiante2.png\"></ion-img>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"assets/img/avatar/femenino/estudiante/estudiante3.png\">\r\n          <ion-img src=\"assets/img/avatar/femenino/estudiante/estudiante3.png\"></ion-img>\r\n        </ion-segment-button>  \r\n\r\n        <ion-segment-button value=\"assets/img/avatar/femenino/estudiante/estudiante4.png\">\r\n          <ion-img src=\"assets/img/avatar/femenino/estudiante/estudiante4.png\"></ion-img>\r\n        </ion-segment-button>  \r\n         \r\n      </ion-segment>          \r\n      </ion-col>\r\n    </ion-row> \r\n    <ion-row>\r\n      <ion-col class=\"btnEmpecemos\">\r\n        <ion-button shape=\"round\" (click)=\"create()\">{{comando}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>        \r\n  </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/student-avatar/student-avatar.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/student-avatar/student-avatar.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarSelectStudentAvatarStudentAvatarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"mensaje\">\r\n        <ion-label>{{mensaje}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n          <app-girl-avatar comando=\"Comencemos\" (newGirlEvent)=\"create($event)\" *ngIf=\"this.visibleFemenino\"></app-girl-avatar>\r\n          <app-boy-avatar comando=\"Comencemos\" (newBoyEvent)=\"create($event)\" *ngIf=\"this.visibleMasculino\"></app-boy-avatar>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBannerBannerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid >\r\n    <ion-row >\r\n      <ion-img src=\"assets/img/logo/logo150ppp.png\" class=\"logo\"></ion-img>      \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"titulo\">\r\n        <ion-label >{{titulo}}</ion-label>    \r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"texto\"> \r\n        <ion-text>{{texto}}</ion-text>           \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row >\r\n      <ion-img src=\"assets/img/ilustraciones/inicioSesion.png\" class=\"ilustracion\"></ion-img>      \r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/campaign-mode/campaign-mode/campaign-mode.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/campaign-mode/campaign-mode/campaign-mode.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCampaignModeCampaignModeCampaignModeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n    <ion-grid class=\"grid\" fixed>\r\n      <ion-row fixed>\r\n        <ion-col>\r\n              \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row fixed>\r\n        <ion-col>\r\n          <ion-label class=\"title\">{{title}}</ion-label>\r\n        </ion-col>\r\n      </ion-row >\r\n      <ion-row fixed>\r\n        <ion-col class=\"textContent\">\r\n          <div class=\"textContent\">\r\n            <ion-label class=\"text\" text-wrap>{{text}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row fixed>\r\n          <ion-col >\r\n            <div class=\"subtitle-content\">\r\n              <ion-label class=\"subtitle\" text-wrap>{{subtitle}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-row>\r\n            <ion-toolbar mode=\"md\" class=\"toolbar\">\r\n                <ion-segment  #segments  mode=\"md\" >\r\n                    <ion-segment-button *ngFor=\"let subject of subjects ; let i = index\" value=\"{{subject.name}}\" class=\"ion-segment-button\" (click)=\"selectedTab(i)\">\r\n                        <ion-label class=\"tab-title\" style=\"text-transform: none;\">{{subject.name}}</ion-label>\r\n                      </ion-segment-button>\r\n                </ion-segment>\r\n              </ion-toolbar>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 33px;\">\r\n          <ion-col size=\"6\" *ngFor=\"let practice of practices ; let i = index\">\r\n              <ion-item class=\"item\" lines=\"none\">\r\n                <ion-row>\r\n                  <svg height=\"70\" width=\"70\">\r\n                      <circle cx=\"35\" cy=\"35\" r=\"35\" stroke-width=\"0\" [ngClass]=\"{'first-circle':i%4==0, 'second-circle':i%4==1, 'third-circle':i%4==2, 'fourth-circle':i%4==3}\"/>\r\n                    </svg>\r\n                  <ion-label class=\"practice-title\">{{practice.name}}</ion-label>\r\n                </ion-row>\r\n              </ion-item>\r\n          </ion-col>\r\n          </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/campaign-mode/subtema/subtema.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/campaign-mode/subtema/subtema.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCampaignModeSubtemaSubtemaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n    <ion-grid class=\"grid\" fixed>\r\n      <ion-row fixed>\r\n        <ion-col>\r\n              \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row fixed>\r\n          <ion-col>\r\n            <div class=\"subtitle-content\">\r\n              <ion-label class=\"path-title\" text-wrap>{{subject}}</ion-label>\r\n              <ion-icon src=\"assets/icon/arrow-right.svg\"></ion-icon>\r\n              <ion-label class=\"path-title-final\" text-wrap>{{theme}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      <ion-row>\r\n          <ion-card class=\"card\">  \r\n              <ion-img src=\"assets/img/all/tema1.svg\" class=\"img\" float-left></ion-img>\r\n              <ion-card-header>\r\n                <ion-card-title class=\"card-title\">Card Title</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"card-content\">\r\n                Keep close to Nature's heart... and break clear away, once in awhile,\r\n                and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n              </ion-card-content>\r\n              <ion-button >Leer más</ion-button>\r\n            </ion-card>\r\n      </ion-row>\r\n        \r\n    </ion-grid>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/achievements/achievements.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/achievements/achievements.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlPanelAchievementsAchievementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid class=\"grid\">\r\n    <ion-row fixed>\r\n      <ion-col>\r\n            \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row fixed>\r\n      <ion-col>\r\n        <ion-label class=\"title\">{{title}}</ion-label>\r\n      </ion-col>\r\n    </ion-row >\r\n    <ion-row fixed>\r\n      <ion-col class=\"textContent\">\r\n        <div class=\"textContent\">\r\n          <ion-label class=\"text\" text-wrap>{{text}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n        <ng-container\r\n          *ngIf=\"achievements?.length > 0; then medals; else noMedals\">\r\n        </ng-container>\r\n    \r\n  </ion-grid>\r\n</div>\r\n  \r\n\r\n  <ng-template #medals>\r\n      <ion-row class=\"cardsRow\" *ngIf=\"achievements?.length > 0\">\r\n          <ion-col *ngFor=\"let achievement of achievements \" >\r\n              <ion-card class=\"card\" >\r\n                  <ion-card-header justify-content-center>\r\n                    <ion-img src=\"assets/img/all/medalla.svg\" class=\"img\"></ion-img>\r\n                  </ion-card-header>\r\n                  <ion-card-content center text-center class=\"task-content\">\r\n                      <ion-label center class=\"task\">{{achievement.task}}</ion-label>\r\n                  </ion-card-content>\r\n              </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n    </ng-template>\r\n  \r\n  \r\n    <ng-template #noMedals>\r\n        <ion-row fixed class=\"no-medals-container\">\r\n            <ion-col fixed justify-content-center class=\"no-medals-container\">\r\n                <ion-card class=\"no-medals-card\" >\r\n                    <ion-card-header justify-content-center class=\"no-medals-header\">\r\n                        <ion-img src=\"assets/img/all/medallaGris.svg\" class=\"no-medals-img\"></ion-img>\r\n                        <ion-card-title class=\"no-medals-header\">Aún no tienes medallas</ion-card-title>\r\n                        <ion-card-subtitle class=\"no-medals-text\">Completa asignaturas para conseguirlas.</ion-card-subtitle> \r\n                    </ion-card-header>\r\n                </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n      </ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard-achievements/dashboard-achievements.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard-achievements/dashboard-achievements.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlPanelDashboardDashboardAchievementsDashboardAchievementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col no-padding justify-content-start align-items-start>\r\n        <ion-label class=\"subtitle\">Logros</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"auto\">\r\n        <ion-button shape=\"round\" fill=\"outline\" class=\"button\" name=\"seeMorePractice\" >\r\n            <ion-label text-capitalize class=\"buttonFont\">Ver más</ion-label>\r\n        </ion-button>\r\n      </ion-col>\r\n  </ion-row>\r\n        <ion-row>\r\n          <ion-col *ngFor=\"let achievement of achievements ; let i = index\" class=\"col\" text-center>\r\n            <ion-row text-center>\r\n              <ion-img src=\"assets/img/all/medallaPanelControl.svg\" class=\"medalla\"></ion-img>  \r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-label class=\"achievement\">{{achievement.name}}</ion-label>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-label class=\"task\">{{achievement.task}}</ion-label>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard-ranking/dashboard-ranking.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard-ranking/dashboard-ranking.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlPanelDashboardDashboardRankingDashboardRankingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <ion-label class=\"subtitle\">Ranking semanal</ion-label>\r\n    <ion-grid >\r\n      <ion-row *ngFor=\"let student of students ; let i = index\" class=\"svg\">\r\n        <ion-label [style.top.px]=\"getTop(i)\"  class=\"label\">{{student.name}}</ion-label>\r\n        <svg [style.left.px]=\"181\" [style.top.px]=\"getTopLine(i)\" width=\"143.37px\" height=\"6.87px\" class=\"svg\">\r\n            <rect [style.left.px]=\"181\" [style.top.px]=\"getTopLine(i)\" width=\"143.37px\" height=\"6.87px\" style=\"fill:rgb(255, 185, 70);stroke-width:0;stroke:rgb(0,0,0)\" />\r\n          </svg>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard-recent/dashboard-recent.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard-recent/dashboard-recent.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlPanelDashboardDashboardRecentDashboardRecentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid class=\"grid\">\r\n    <ion-row>\r\n      <ion-label class=\"subtitle\">Reciente</ion-label>\r\n      <ion-button shape=\"round\" fill=\"outline\" class=\"button\" name=\"seeMorePractice\" >\r\n          <ion-label text-capitalize class=\"buttonFont\">Ver más</ion-label>\r\n      </ion-button>\r\n    </ion-row>\r\n    <ion-row class=\"row\">   \r\n      <ion-col col-3 *ngFor=\"let practice of practices ; let i = index\">\r\n          <ion-card class=\"card\" [ngClass]=\"{'firstCard':i==0, 'secondCard':i==1, 'thirdCard':i==2}\">\r\n              <ion-card-header>\r\n                  <ion-card-title class=\"cardTitle\">{{practice.name}}</ion-card-title>\r\n                  <ion-card-subtitle class=\"cardSubtitle\">{{practice.percentage}}% realizada</ion-card-subtitle>\r\n              </ion-card-header>\r\n          </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlPanelDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg\">\r\n  <ion-grid>\r\n    <ion-row class=\"labels\">\r\n        <ion-label class=\"title\">Bienvenida, Fernanda!</ion-label>\r\n        <ion-label class=\"question\">¿Qué te gustaría aprender hoy?</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <app-dashboard-recent class=\"recent\"></app-dashboard-recent>\r\n    </ion-row>\r\n    <ion-row>\r\n        <app-dashboard-ranking class=\"ranking\"></app-dashboard-ranking>\r\n        <app-dashboard-achievements class=\"achievements\"></app-dashboard-achievements>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/recent/recent.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/recent/recent.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlPanelRecentRecentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n    <ion-grid class=\"grid\">\r\n      <ion-row fixed>\r\n        <ion-col>\r\n              \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row fixed>\r\n        <ion-col>\r\n          <ion-label class=\"title\">{{title}}</ion-label>\r\n        </ion-col>\r\n      </ion-row >\r\n      <ion-row fixed>\r\n        <ion-col class=\"textContent\">\r\n          <div class=\"textContent\">\r\n            <ion-label class=\"text\" text-wrap>{{text}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n       <ion-row class=\"row\">   \r\n        <ion-col class=\"card-container\"size=\"auto\" col-4 *ngFor=\"let practice of practices ; let i = index\">\r\n            <ion-card class=\"card\" [ngClass]=\"{'firstCard':i%3==0, 'secondCard':i%3==1, 'thirdCard':i%3==2}\">\r\n                <ion-card-header>\r\n                    <ion-card-title class=\"cardTitle\">{{practice.name}}</ion-card-title>\r\n                    <ion-card-subtitle class=\"cardSubtitle\">{{practice.percentage}}% realizada</ion-card-subtitle>\r\n                </ion-card-header>\r\n            </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n    </ion-grid>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/curtain/curtain.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/curtain/curtain.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCurtainCurtainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid (click)=\"goTo()\"> \r\n    <ion-row>\r\n      <ion-col class=\"principal\">\r\n        <ion-img src=\"assets/img/logo/logoCortina.png\" class=\"logo\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <div class=\"centrarTitulo\">\r\n    <ion-label class=\"tituloLogin\" color=\"atomik\">{{titulo}}</ion-label>\r\n  </div>\r\n  <ion-grid >\r\n    <ion-row >\r\n      <ion-col class=\"input\"> \r\n          <ion-item>\r\n              <ion-label position=\"floating\">{{usuario}}</ion-label>\r\n              <ion-input (ionInput)=\"setEmail($event)\"></ion-input>\r\n            </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"input\">\r\n          <ion-item>\r\n              <ion-label position=\"floating\">{{clave}}</ion-label>\r\n              <ion-input type=\"password\" (ionInput)=\"setPassword($event)\"></ion-input>\r\n            </ion-item>\r\n      </ion-col>      \r\n    </ion-row>\r\n    <ion-row class=\"centrar\">\r\n      <ion-col >\r\n          <ion-button shape=\"round\" class=\"btnLogin\" color=\"atomik\" (click)=\"login()\">{{titulo}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"centrar\">\r\n      <ion-col>\r\n        <ion-label>o</ion-label>        \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"centrar\">\r\n      <ion-col>\r\n        <ion-button fill=\"clear\" (click)=\"goToRegistro()\">Registrarse</ion-button>        \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img src=\"assets/img/logo/logoMenu.png\" class=\"logo\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-icon></ion-icon>\r\n      <ion-label>{{section1}}</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-icon></ion-icon>\r\n      <ion-label>{{section2}}</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-icon></ion-icon>\r\n      <ion-label>{{section3}}</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-icon></ion-icon>\r\n      <ion-label>{{section4}}</ion-label>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid>\r\n    \r\n  </ion-grid>\r\n</div>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-bar/personal-info/personal-info.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-bar/personal-info/personal-info.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileBarPersonalInfoPersonalInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label class=\"subtitle\">{{title}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col >\r\n        <ion-item lines=\"none\" class=\"item\">\r\n          <ion-icon src=\"assets/icon/personal-info/email.svg\"></ion-icon>\r\n          <ion-label class=\"data\">{{authenticationService.getUserDetails().email}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n            <ion-icon src=\"assets/icon/personal-info/userId.svg\"></ion-icon>\r\n          <ion-label class=\"data\">{{calculateAge(authenticationService.getUserDetails().fechaNacimiento)}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>    \r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n            <ion-icon src=\"assets/icon/personal-info/graduationCap.svg\"></ion-icon>\r\n          <ion-label class=\"data\">{{authenticationService.getUserDetails().grado}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>  \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-bar/profile-bar.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-bar/profile-bar.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileBarProfileBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row class=\"imagen\"> \r\n      <ion-col>\r\n        <ion-img [src]=\"authenticationService.getUserDetails().avatar\" class=\"avatar\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>    \r\n\r\n    <ion-row class=\"nombreUsuario\">\r\n      <ion-col >\r\n        <ion-label class=\"name\">{{authenticationService.getUserDetails().nombre}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <app-personal-info class=\"personalInfo\" ></app-personal-info>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n          <app-reminder-info ></app-reminder-info>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row nowrap >\r\n      <ion-col class=\"logout\"  >\r\n        <ion-item lines=\"none\">\r\n            <ion-icon src=\"assets/icon/personal-info/logout.svg\"></ion-icon>\r\n            <ion-label class=\"logoutLabel\">Cerrar Sesion</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-bar/reminder-info/reminder-info.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-bar/reminder-info/reminder-info.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileBarReminderInfoReminderInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"subtitle\">{{title}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row *ngFor=\"let reminder of reminders ; let i = index\">\r\n        <ion-col >\r\n          <ion-item>\r\n            <ion-icon src=\"assets/icon/personal-info/remainder.svg\"></ion-icon>\r\n            <ion-label class=\"reminder\">{{reminder.reminder}}</ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/professor-form/professor-form.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/professor-form/professor-form.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterFormProfessorFormProfessorFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <form>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{nombre}}</ion-label>\r\n            <ion-input type=\"text\" name=\"nombre\"(ionInput)=\"setNombre($event)\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-segment (ionChange)=\"setSexo($event)\">\r\n              <ion-segment-button value=\"Femenino\">\r\n              <ion-label>{{genero1}}</ion-label>\r\n              <ion-icon name=\"Woman\"></ion-icon>\r\n            </ion-segment-button>\r\n\r\n            <ion-segment-button value=\"Masculino\">\r\n              <ion-label>{{genero2}}</ion-label>\r\n              <ion-icon name=\"Man\"></ion-icon>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{fecha}}</ion-label>\r\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" value=\"2020-02-20\" placeholder=\"Seleccione su fecha\" (ionChange)=\"setFechaNacimiento($event)\"></ion-datetime>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{especialidad}}</ion-label>\r\n            <ion-input type=\"text\" name=\"especialidad\" (ionInput)=\"setEspecialidad($event)\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{email}}</ion-label>\r\n            <ion-input type=\"email\" name=\"email\" (ionInput)=\"setEmail($event)\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{password}}</ion-label>\r\n            <ion-input type=\"password\" name=\"password\" (ionInput)=\"setPassword($event)\"></ion-input>\r\n          </ion-item> \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col class=\"btnRegisterLocation\">\r\n          <ion-button shape=\"round\"(click)=\"create()\" class=\"btnRegister\">{{botonRegistro}}</ion-button>\r\n        </ion-col>\r\n      </ion-row> \r\n\r\n      <ion-row>\r\n        <ion-col class=\"optionalText\">\r\n          <ion-label>o</ion-label> \r\n        </ion-col>  \r\n      </ion-row>\r\n\r\n      <ion-row >\r\n        <ion-col class=\"btnLogin\">\r\n          <ion-button fill=\"clear\" (click)=\"goToInicio()\">{{botonLogin}}</ion-button> \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>  \r\n  </form> \r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/register-form.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/register-form.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterFormRegisterFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <pre>\r\n  </pre>\r\n  <div class=\"title\">\r\n    <ion-label class=\"textTitle\">{{titulo}}</ion-label>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row class=\"userType\">\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-segment (ionChange)=\"selectForm($event)\">\r\n            <ion-segment-button value=\"Estudiante\" checked >\r\n            <ion-label>{{tipo1}}</ion-label>\r\n          </ion-segment-button>\r\n\r\n          <ion-segment-button value=\"Docente\">\r\n            <ion-label>{{tipo2}}</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row >\r\n      <ion-col>\r\n        <app-professor-form nombre=\"Nombre\" genero1=\"Femenino\" genero2=\"Masculino\" fecha=\"Fecha Nacimiento\" especialidad=\"Especialidad\" email=\"Email\" password=\"Clave\" botonRegistro=\"Registrarse\" botonLogin=\"Iniciar Sesión\" (createNewDocenteEvent)=\"create($event)\" (dataColected)=\"setDataColected($event)\" *ngIf=\"visibleProfessor\"></app-professor-form>  \r\n        <app-student-form nombre=\"Nombre\" genero1=\"Femenino\" genero2=\"Masculino\" fecha=\"Fecha Nacimiento\" gradoCurso=\"Grado de curso\" email=\"Email\" institucion=\"Institución\" password=\"Clave\" botonRegistro=\"Registrarse\" botonLogin=\"Iniciar Sesión\" (createNewStudentEvent)=\"createStudent($event)\" (dataColected)=\"setDataColected($event)\" *ngIf=\"visibleStudent\"></app-student-form> \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/student-form/student-form.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/student-form/student-form.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterFormStudentFormStudentFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <form>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{nombre}}</ion-label>\r\n            <ion-input type=\"text\" name=\"nombre\" (ionInput)=\"setNombre($event)\" clearInput></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-segment (ionChange)=\"setSexo($event)\">\r\n              <ion-segment-button value=\"Femenino\">\r\n              <ion-label>{{genero1}}</ion-label>\r\n              <ion-icon name=\"Woman\"></ion-icon>\r\n            </ion-segment-button>\r\n\r\n            <ion-segment-button value=\"Masculino\">\r\n              <ion-label>{{genero2}}</ion-label>\r\n              <ion-icon name=\"Man\"></ion-icon>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{fecha}}</ion-label>\r\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" value=\"2020-02-20\" placeholder=\"Seleccione su fecha\" (ionChange)=\"setFechaNacimiento($event)\"></ion-datetime>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{gradoCurso}}</ion-label>\r\n            <ion-input type=\"text\" name=\"gradoCurso\" (ionInput)=\"setGradoCurso($event)\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{email}}</ion-label>\r\n            <ion-input type=\"email\" name=\"email\" (ionInput)=\"setEmail($event)\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{institucion}}</ion-label>\r\n            <ion-input type=\"text\" name=\"institucion\" (ionInput)=\"setInstitucion($event)\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>      \r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{password}}</ion-label>\r\n            <ion-input type=\"password\" name=\"password\" (ionInput)=\"setPassword($event)\"></ion-input>\r\n          </ion-item> \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col class=\"btnRegisterLocation\">\r\n          <ion-button shape=\"round\"(click)=\"create()\" class=\"btnRegister\">{{botonRegistro}}</ion-button>\r\n        </ion-col>\r\n      </ion-row> \r\n\r\n      <ion-row>\r\n        <ion-col class=\"optionalText\">\r\n          <ion-label>o</ion-label> \r\n        </ion-col>  \r\n      </ion-row>\r\n\r\n      <ion-row >\r\n        <ion-col class=\"btnLogin\">\r\n          <ion-button fill=\"clear\" (click)=\"goToInicio()\">{{botonLogin}}</ion-button> \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>  \r\n  </form> \r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/menu-bar/menu-bar.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/menu-bar/menu-bar.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarMenuBarMenuBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"principal\">\r\n  <ion-grid>\r\n    <ion-row >\r\n      <ion-col>\r\n         <ion-img src=\"assets/img/logo/logoMenu.png\" class=\"logoDimensions\"></ion-img>       \r\n      </ion-col>\r\n    </ion-row>  \r\n    <div class=\"menuOptions\">\r\n      <ion-row  class=\"item\" [ngClass]=\"{ 'itemSelect': selectedOption == opcion1 }\">\r\n        <ion-col>\r\n          <ion-item value=\"panel\" lines=\"none\" color=\"Atomik\" (click)=\"goPanel()\" >\r\n              <ion-icon slot=\"start\" id=\"dashboardIcon\" ></ion-icon>\r\n              <ion-label fill=\"clear\"  >{{opcion1}}</ion-label>          \r\n          </ion-item>\r\n        </ion-col>        \r\n      </ion-row>\r\n      <ion-row  class=\"item\" [ngClass]=\"{ 'itemSelect': selectedOption == opcion2 }\">\r\n          <ion-col >\r\n            <ion-item lines=\"none\" color=\"Atomik\" (click)=\"goCampania()\">\r\n                <ion-icon slot=\"start\" id=\"campaignIcon\"></ion-icon>\r\n              <ion-label>{{opcion2}}</ion-label>            \r\n            </ion-item>\r\n          </ion-col>        \r\n      </ion-row>\r\n      <ion-row  class=\"item\" [ngClass]=\"{ 'itemSelect': selectedOption == opcion3 }\">\r\n          <ion-col>\r\n            <ion-item lines=\"none\" color=\"Atomik\" (click)=\"goLibre()\">\r\n              <ion-icon slot=\"start\" id=\"freeModeIcon\"></ion-icon>\r\n              <ion-label>{{opcion3}}</ion-label>            \r\n            </ion-item>\r\n          </ion-col>        \r\n      </ion-row>\r\n      <ion-row  class=\"item\" [ngClass]=\"{ 'itemSelect': selectedOption == opcion4 }\">\r\n        <ion-col>\r\n          <ion-item lines=\"none\" color=\"Atomik\" (click)=\"goFichas()\">\r\n              <ion-icon slot=\"start\" id=\"notesIcon\"></ion-icon>\r\n            <ion-label>{{opcion4}}</ion-label>          \r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"configuraciones\" [ngClass]=\"{ 'item': true}\">\r\n        <ion-col>\r\n          <ion-item lines=\"none\" color=\"Atomik\" (click)=\"goConfiguraciones()\">\r\n            <ion-icon slot=\"start\" id=\"settingsIcon\"></ion-icon>\r\n            <ion-label>{{opcion5}}</ion-label>         \r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>      \r\n    </div> \r\n\r\n\r\n  </ion-grid>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarSideBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-grid> \r\n    <ion-row>\r\n      <app-menu-bar opcion1=\"Panel de control\" opcion2=\"Modo campaña\" opcion3=\"Modo libre\" opcion4=\"Mis fichas\" opcion5=\"Configuraciones\" selectedOption=\"Panel de control\"></app-menu-bar>\r\n    </ion-row> \r\n  </ion-grid>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-type/user-type.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-type/user-type.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserTypeUserTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <ion-segment (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button checked>  \r\n      <ion-label>{{type1}}</ion-label>\r\n      <ion-icon name=\"briefcase\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n        <ion-label>{{type2}}</ion-label>\r\n        <ion-icon name=\"contacts\"></ion-icon>\r\n      </ion-segment-button>\r\n  </ion-segment>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    }, {
      path: 'inicio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-inicio-inicio-module */
        "pages-inicio-inicio-module").then(__webpack_require__.bind(null,
        /*! ./pages/inicio/inicio.module */
        "./src/app/pages/inicio/inicio.module.ts")).then(function (m) {
          return m.InicioPageModule;
        });
      }
    }, {
      path: 'registro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registro-registro-module */
        "pages-registro-registro-module").then(__webpack_require__.bind(null,
        /*! ./pages/registro/registro.module */
        "./src/app/pages/registro/registro.module.ts")).then(function (m) {
          return m.RegistroPageModule;
        });
      }
    }, {
      path: 'avatar',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-avatar-avatar-module */
        "pages-avatar-avatar-module").then(__webpack_require__.bind(null,
        /*! ./pages/avatar/avatar.module */
        "./src/app/pages/avatar/avatar.module.ts")).then(function (m) {
          return m.AvatarPageModule;
        });
      }
    }, {
      path: 'panel',
      //canActivate: [AuthGuardService],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-panel-panel-module */
        "pages-panel-panel-module").then(__webpack_require__.bind(null,
        /*! ./pages/panel/panel.module */
        "./src/app/pages/panel/panel.module.ts")).then(function (m) {
          return m.PanelPageModule;
        });
      }
    }, {
      path: 'cortina',
      //canActivate: [AuthGuardService],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-cortina-cortina-module */
        "pages-cortina-cortina-module").then(__webpack_require__.bind(null,
        /*! ./pages/cortina/cortina.module */
        "./src/app/pages/cortina/cortina.module.ts")).then(function (m) {
          return m.CortinaPageModule;
        });
      }
    }, {
      path: 'notificaciones',
      //canActivate: [AuthGuardService],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-notificaciones-notificaciones-module */
        "pages-notificaciones-notificaciones-module").then(__webpack_require__.bind(null,
        /*! ./pages/notificaciones/notificaciones.module */
        "./src/app/pages/notificaciones/notificaciones.module.ts")).then(function (m) {
          return m.NotificacionesPageModule;
        });
      }
    }, {
      path: 'principal',
      //canActivate: [AuthGuardService],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-principal-principal-module */
        "pages-principal-principal-module").then(__webpack_require__.bind(null,
        /*! ./pages/principal/principal.module */
        "./src/app/pages/principal/principal.module.ts")).then(function (m) {
          return m.PrincipalPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_estudiante_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/estudiante.service */
    "./src/app/services/estudiante.service.ts");
    /* harmony import */


    var _services_docente_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/docente.service */
    "./src/app/services/docente.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _services_estudiante_service__WEBPACK_IMPORTED_MODULE_12__["EstudianteService"], _services_docente_service__WEBPACK_IMPORTED_MODULE_13__["DocenteService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/avatar-select/avatar-select.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/avatar-select/avatar-select.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAvatarSelectAvatarSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centrar {\n  text-align: center; }\n\n.centrarTitulo {\n  margin-top: 50px;\n  text-align: center; }\n\n.titulo {\n  font-size: xx-large;\n  font-weight: bolder;\n  text-align: center; }\n\n.texto {\n  margin-top: 70px;\n  text-align: center; }\n\n.selectorAvatar {\n  margin-top: 20px; }\n\n.avatarSection {\n  margin-top: 40px; }\n\n.avatar {\n  height: 150px;\n  width: 150px; }\n\n.btnSeleccionar {\n  margin-top: 60px;\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGF2YXRhci1zZWxlY3RcXGF2YXRhci1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFLdEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L2F2YXRhci1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJhcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2VudHJhclRpdHVsb3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG59XHJcblxyXG4udGV4dG97XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VsZWN0b3JBdmF0YXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYXZhdGFyU2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLmF2YXRhcnsgIFxyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIFxyXG59XHJcblxyXG4uYnRuU2VsZWNjaW9uYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/avatar-select/avatar-select.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/avatar-select/avatar-select.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AvatarSelectComponent */

  /***/
  function srcAppComponentsAvatarSelectAvatarSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarSelectComponent", function () {
      return AvatarSelectComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var AvatarSelectComponent =
    /*#__PURE__*/
    function () {
      function AvatarSelectComponent(navCtrl, usuarioService, authenticationService) {
        _classCallCheck(this, AvatarSelectComponent);

        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this.authenticationService = authenticationService;
        this.visibleProfessor = false;
        this.visibleStudent = false;
        this.tipoUsuario = authenticationService.getUserDetails().tipo;
        this.visibleProfessor = this.tipoUsuario == 'Docente';
        this.visibleStudent = !this.visibleProfessor;
        console.log(this.tipoUsuario);
        console.log(this.visibleProfessor);
        console.log(this.visibleStudent);
      }

      _createClass(AvatarSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Ingresar el avatar seleccionado por el usuario
         * @param usuario Json con id y avatar del usuario
         */

      }, {
        key: "setAvatarUser",
        value: function setAvatarUser(usuario) {
          usuario._id = this.authenticationService.getUserDetails()._id;

          if (usuario.avatar != 'none') {
            this.usuarioService.updateAvatar(usuario).then(function (status) {
              console.log(status);
            }).catch(function (err) {
              console.log(err);
            });
            localStorage.clear();
            this.goToInicio();
          } else {
            console.log("Seleccione un avatar");
          }
        }
      }, {
        key: "checked",
        value: function checked() {
          console.log(this.tipoUsuario);
          return true;
        }
      }, {
        key: "goToInicio",
        value: function goToInicio() {
          this.navCtrl.navigateForward('/inicio');
        }
      }]);

      return AvatarSelectComponent;
    }();

    AvatarSelectComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AvatarSelectComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AvatarSelectComponent.prototype, "tipo1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AvatarSelectComponent.prototype, "tipo2", void 0);
    AvatarSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-avatar-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./avatar-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/avatar-select.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./avatar-select.component.scss */
      "./src/app/components/avatar-select/avatar-select.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], AvatarSelectComponent);
    /***/
  },

  /***/
  "./src/app/components/avatar-select/professor-avatar/man-avatar/man-avatar.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/components/avatar-select/professor-avatar/man-avatar/man-avatar.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAvatarSelectProfessorAvatarManAvatarManAvatarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar {\n  height: 150px;\n  width: 150px; }\n\n.btnAvatar {\n  width: 139px;\n  height: 129px;\n  top: 20px;\n  text-align: center; }\n\n.btnEmpecemos {\n  width: 215px;\n  height: 47px;\n  top: 80px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L3Byb2Zlc3Nvci1hdmF0YXIvbWFuLWF2YXRhci9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhdmF0YXItc2VsZWN0XFxwcm9mZXNzb3ItYXZhdGFyXFxtYW4tYXZhdGFyXFxtYW4tYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFFSSxZQUFZO0VBQ1osYUFBYTtFQUViLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxZQUFZO0VBQ1osWUFBWTtFQUVaLFNBQVM7RUFDVCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyLXNlbGVjdC9wcm9mZXNzb3ItYXZhdGFyL21hbi1hdmF0YXIvbWFuLWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7ICBcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBcclxufVxyXG4uYnRuQXZhdGFye1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTM5cHg7XHJcbiAgICBoZWlnaHQ6IDEyOXB4O1xyXG4gICAgLy9sZWZ0OiA1NzZweDtcclxuICAgIHRvcDogMjBweDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bkVtcGVjZW1vc3tcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIxNXB4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgLy9sZWZ0OiA3ODBweDtcclxuICAgIHRvcDogODBweDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/avatar-select/professor-avatar/man-avatar/man-avatar.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/avatar-select/professor-avatar/man-avatar/man-avatar.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ManAvatarComponent */

  /***/
  function srcAppComponentsAvatarSelectProfessorAvatarManAvatarManAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManAvatarComponent", function () {
      return ManAvatarComponent;
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


    var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../models/usuario */
    "./src/app/models/usuario.ts");

    var ManAvatarComponent =
    /*#__PURE__*/
    function () {
      function ManAvatarComponent() {
        _classCallCheck(this, ManAvatarComponent);

        this.newManEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newUsuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
      }

      _createClass(ManAvatarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectAvatar",
        value: function selectAvatar(event) {
          this.newUsuario.avatar = event.target.value;
        }
      }, {
        key: "create",
        value: function create() {
          this.newManEvent.emit(this.newUsuario);
        }
      }]);

      return ManAvatarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ManAvatarComponent.prototype, "comando", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ManAvatarComponent.prototype, "newManEvent", void 0);
    ManAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-man-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./man-avatar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/professor-avatar/man-avatar/man-avatar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./man-avatar.component.scss */
      "./src/app/components/avatar-select/professor-avatar/man-avatar/man-avatar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ManAvatarComponent);
    /***/
  },

  /***/
  "./src/app/components/avatar-select/professor-avatar/professor-avatar.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/avatar-select/professor-avatar/professor-avatar.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAvatarSelectProfessorAvatarProfessorAvatarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnAvatar {\n  width: 139px;\n  height: 129px;\n  top: 20px;\n  text-align: center; }\n\n.btnEmpecemos {\n  width: 215px;\n  height: 47px;\n  top: 80px;\n  text-align: center; }\n\n.mensaje {\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L3Byb2Zlc3Nvci1hdmF0YXIvQzpcXFVzZXJzXFxnZnJhblxcRG9jdW1lbnRzXFxDQUlKSENHXFxhcHBSZXBhc29cXHB1YmxpYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXZhdGFyLXNlbGVjdFxccHJvZmVzc29yLWF2YXRhclxccHJvZmVzc29yLWF2YXRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixhQUFhO0VBRWIsU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUV0QjtFQUVJLFlBQVk7RUFDWixZQUFZO0VBRVosU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUVsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyLXNlbGVjdC9wcm9mZXNzb3ItYXZhdGFyL3Byb2Zlc3Nvci1hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuQXZhdGFye1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTM5cHg7XHJcbiAgICBoZWlnaHQ6IDEyOXB4O1xyXG4gICAgLy9sZWZ0OiA1NzZweDtcclxuICAgIHRvcDogMjBweDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bkVtcGVjZW1vc3tcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIxNXB4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgLy9sZWZ0OiA3ODBweDtcclxuICAgIHRvcDogODBweDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1lbnNhamV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIC8vIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIC8vYm90dG9tOiAyMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/avatar-select/professor-avatar/professor-avatar.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/avatar-select/professor-avatar/professor-avatar.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ProfessorAvatarComponent */

  /***/
  function srcAppComponentsAvatarSelectProfessorAvatarProfessorAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessorAvatarComponent", function () {
      return ProfessorAvatarComponent;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var ProfessorAvatarComponent =
    /*#__PURE__*/
    function () {
      function ProfessorAvatarComponent(authenticationService) {
        _classCallCheck(this, ProfessorAvatarComponent);

        this.authenticationService = authenticationService;
        this.newProfessorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleMasculino = false;
        this.visibleFemenino = false;
        this.tipo = this.authenticationService.getUserDetails().sexo;
        this.visibleFemenino = this.tipo == 'Femenino';
        this.visibleMasculino = !this.visibleFemenino;
        console.log(this.tipo);
        console.log(this.visibleFemenino);
        console.log(this.visibleMasculino);
      }

      _createClass(ProfessorAvatarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setVisibleAvatar",
        value: function setVisibleAvatar() {
          if (localStorage.getItem('sexo') == 'Femenino') {
            this.visibleFemenino = true;
          } else {
            this.visibleMasculino = true;
          }
        }
      }, {
        key: "create",
        value: function create(usuario) {
          this.newProfessorEvent.emit(usuario);
        }
      }, {
        key: "selectType",
        value: function selectType(event) {
          this.setVisible();
        }
      }, {
        key: "setVisible",
        value: function setVisible() {
          if (this.visibleFemenino === false) {
            this.visibleFemenino = true;
            this.visibleMasculino = false;
          } else {
            this.visibleFemenino = false;
            this.visibleMasculino = true;
          }
        }
      }]);

      return ProfessorAvatarComponent;
    }();

    ProfessorAvatarComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorAvatarComponent.prototype, "tipo1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorAvatarComponent.prototype, "tipo2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorAvatarComponent.prototype, "comando", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorAvatarComponent.prototype, "mensaje", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfessorAvatarComponent.prototype, "newProfessorEvent", void 0);
    ProfessorAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-professor-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./professor-avatar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/professor-avatar/professor-avatar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./professor-avatar.component.scss */
      "./src/app/components/avatar-select/professor-avatar/professor-avatar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], ProfessorAvatarComponent);
    /***/
  },

  /***/
  "./src/app/components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAvatarSelectProfessorAvatarWomanAvatarWomanAvatarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar {\n  height: 150px;\n  width: 150px; }\n\n.btnAvatar {\n  width: 139px;\n  height: 129px;\n  top: 20px;\n  text-align: center; }\n\n.btnEmpecemos {\n  width: 215px;\n  height: 47px;\n  top: 80px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L3Byb2Zlc3Nvci1hdmF0YXIvd29tYW4tYXZhdGFyL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGF2YXRhci1zZWxlY3RcXHByb2Zlc3Nvci1hdmF0YXJcXHdvbWFuLWF2YXRhclxcd29tYW4tYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFFSSxZQUFZO0VBQ1osYUFBYTtFQUViLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFFSSxZQUFZO0VBQ1osWUFBWTtFQUVaLFNBQVM7RUFDVCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyLXNlbGVjdC9wcm9mZXNzb3ItYXZhdGFyL3dvbWFuLWF2YXRhci93b21hbi1hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyeyAgXHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgXHJcbn1cclxuLmJ0bkF2YXRhcntcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEzOXB4O1xyXG4gICAgaGVpZ2h0OiAxMjlweDtcclxuICAgIC8vbGVmdDogNTc2cHg7XHJcbiAgICB0b3A6IDIwcHg7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuRW1wZWNlbW9ze1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjE1cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAvL2xlZnQ6IDc4MHB4O1xyXG4gICAgdG9wOiA4MHB4OyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: WomanAvatarComponent */

  /***/
  function srcAppComponentsAvatarSelectProfessorAvatarWomanAvatarWomanAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WomanAvatarComponent", function () {
      return WomanAvatarComponent;
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


    var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../models/usuario */
    "./src/app/models/usuario.ts");

    var WomanAvatarComponent =
    /*#__PURE__*/
    function () {
      function WomanAvatarComponent() {
        _classCallCheck(this, WomanAvatarComponent);

        this.newWomanEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newUsuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
      }

      _createClass(WomanAvatarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectAvatar",
        value: function selectAvatar(event) {
          this.newUsuario.avatar = event.target.value;
        }
      }, {
        key: "create",
        value: function create() {
          this.newWomanEvent.emit(this.newUsuario);
        }
      }]);

      return WomanAvatarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], WomanAvatarComponent.prototype, "comando", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WomanAvatarComponent.prototype, "newWomanEvent", void 0);
    WomanAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-woman-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./woman-avatar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./woman-avatar.component.scss */
      "./src/app/components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], WomanAvatarComponent);
    /***/
  },

  /***/
  "./src/app/components/avatar-select/student-avatar/boy-avatar/boy-avatar.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/avatar-select/student-avatar/boy-avatar/boy-avatar.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAvatarSelectStudentAvatarBoyAvatarBoyAvatarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar {\n  height: 150px;\n  width: 150px; }\n\n.btnAvatar {\n  width: 139px;\n  height: 129px;\n  top: 20px;\n  text-align: center; }\n\n.btnEmpecemos {\n  width: 215px;\n  height: 47px;\n  top: 80px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L3N0dWRlbnQtYXZhdGFyL2JveS1hdmF0YXIvQzpcXFVzZXJzXFxnZnJhblxcRG9jdW1lbnRzXFxDQUlKSENHXFxhcHBSZXBhc29cXHB1YmxpYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXZhdGFyLXNlbGVjdFxcc3R1ZGVudC1hdmF0YXJcXGJveS1hdmF0YXJcXGJveS1hdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUVJLFlBQVk7RUFDWixhQUFhO0VBRWIsU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUd0QjtFQUVJLFlBQVk7RUFDWixZQUFZO0VBRVosU0FBUztFQUNULGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L3N0dWRlbnQtYXZhdGFyL2JveS1hdmF0YXIvYm95LWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7ICBcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBcclxufVxyXG4uYnRuQXZhdGFye1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTM5cHg7XHJcbiAgICBoZWlnaHQ6IDEyOXB4O1xyXG4gICAgLy9sZWZ0OiA1NzZweDtcclxuICAgIHRvcDogMjBweDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5FbXBlY2Vtb3N7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMTVweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIC8vbGVmdDogNzgwcHg7XHJcbiAgICB0b3A6IDgwcHg7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/avatar-select/student-avatar/boy-avatar/boy-avatar.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/avatar-select/student-avatar/boy-avatar/boy-avatar.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: BoyAvatarComponent */

  /***/
  function srcAppComponentsAvatarSelectStudentAvatarBoyAvatarBoyAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoyAvatarComponent", function () {
      return BoyAvatarComponent;
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


    var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../models/usuario */
    "./src/app/models/usuario.ts");

    var BoyAvatarComponent =
    /*#__PURE__*/
    function () {
      function BoyAvatarComponent() {
        _classCallCheck(this, BoyAvatarComponent);

        this.newBoyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newUsuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
      }

      _createClass(BoyAvatarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectAvatar",
        value: function selectAvatar(event) {
          this.newUsuario.avatar = event.target.value;
        }
      }, {
        key: "create",
        value: function create() {
          this.newBoyEvent.emit(this.newUsuario);
        }
      }]);

      return BoyAvatarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], BoyAvatarComponent.prototype, "comando", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BoyAvatarComponent.prototype, "newBoyEvent", void 0);
    BoyAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boy-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boy-avatar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/student-avatar/boy-avatar/boy-avatar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boy-avatar.component.scss */
      "./src/app/components/avatar-select/student-avatar/boy-avatar/boy-avatar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BoyAvatarComponent);
    /***/
  },

  /***/
  "./src/app/components/avatar-select/student-avatar/girl-avatar/girl-avatar.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/components/avatar-select/student-avatar/girl-avatar/girl-avatar.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAvatarSelectStudentAvatarGirlAvatarGirlAvatarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar {\n  height: 150px;\n  width: 150px; }\n\n.btnAvatar {\n  width: 139px;\n  height: 129px;\n  top: 20px;\n  text-align: center; }\n\n.btnEmpecemos {\n  width: 215px;\n  height: 47px;\n  top: 80px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L3N0dWRlbnQtYXZhdGFyL2dpcmwtYXZhdGFyL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGF2YXRhci1zZWxlY3RcXHN0dWRlbnQtYXZhdGFyXFxnaXJsLWF2YXRhclxcZ2lybC1hdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUVJLFlBQVk7RUFDWixhQUFhO0VBRWIsU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUd0QjtFQUVJLFlBQVk7RUFDWixZQUFZO0VBRVosU0FBUztFQUNULGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L3N0dWRlbnQtYXZhdGFyL2dpcmwtYXZhdGFyL2dpcmwtYXZhdGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcnsgIFxyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIFxyXG59XHJcbi5idG5BdmF0YXJ7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMzlweDtcclxuICAgIGhlaWdodDogMTI5cHg7XHJcbiAgICAvL2xlZnQ6IDU3NnB4O1xyXG4gICAgdG9wOiAyMHB4OyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bkVtcGVjZW1vc3tcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIxNXB4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgLy9sZWZ0OiA3ODBweDtcclxuICAgIHRvcDogODBweDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/avatar-select/student-avatar/girl-avatar/girl-avatar.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/avatar-select/student-avatar/girl-avatar/girl-avatar.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: GirlAvatarComponent */

  /***/
  function srcAppComponentsAvatarSelectStudentAvatarGirlAvatarGirlAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GirlAvatarComponent", function () {
      return GirlAvatarComponent;
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


    var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../models/usuario */
    "./src/app/models/usuario.ts");

    var GirlAvatarComponent =
    /*#__PURE__*/
    function () {
      function GirlAvatarComponent() {
        _classCallCheck(this, GirlAvatarComponent);

        this.newGirlEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newUsuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
      }

      _createClass(GirlAvatarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectAvatar",
        value: function selectAvatar(event) {
          this.newUsuario.avatar = event.target.value;
        }
      }, {
        key: "create",
        value: function create() {
          this.newGirlEvent.emit(this.newUsuario);
        }
      }]);

      return GirlAvatarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], GirlAvatarComponent.prototype, "comando", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GirlAvatarComponent.prototype, "newGirlEvent", void 0);
    GirlAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-girl-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./girl-avatar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/student-avatar/girl-avatar/girl-avatar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./girl-avatar.component.scss */
      "./src/app/components/avatar-select/student-avatar/girl-avatar/girl-avatar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GirlAvatarComponent);
    /***/
  },

  /***/
  "./src/app/components/avatar-select/student-avatar/student-avatar.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/avatar-select/student-avatar/student-avatar.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAvatarSelectStudentAvatarStudentAvatarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnAvatar {\n  width: 139px;\n  height: 129px;\n  top: 20px;\n  text-align: center; }\n\n.btnEmpecemos {\n  width: 215px;\n  height: 47px;\n  top: 80px;\n  text-align: center; }\n\n.mensaje {\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0L3N0dWRlbnQtYXZhdGFyL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGF2YXRhci1zZWxlY3RcXHN0dWRlbnQtYXZhdGFyXFxzdHVkZW50LWF2YXRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixhQUFhO0VBRWIsU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUV0QjtFQUVJLFlBQVk7RUFDWixZQUFZO0VBRVosU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUVsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyLXNlbGVjdC9zdHVkZW50LWF2YXRhci9zdHVkZW50LWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5BdmF0YXJ7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMzlweDtcclxuICAgIGhlaWdodDogMTI5cHg7XHJcbiAgICAvL2xlZnQ6IDU3NnB4O1xyXG4gICAgdG9wOiAyMHB4OyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuRW1wZWNlbW9ze1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjE1cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAvL2xlZnQ6IDc4MHB4O1xyXG4gICAgdG9wOiA4MHB4OyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVuc2FqZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgLy8gZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgLy9ib3R0b206IDIwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/avatar-select/student-avatar/student-avatar.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/avatar-select/student-avatar/student-avatar.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: StudentAvatarComponent */

  /***/
  function srcAppComponentsAvatarSelectStudentAvatarStudentAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAvatarComponent", function () {
      return StudentAvatarComponent;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var StudentAvatarComponent =
    /*#__PURE__*/
    function () {
      function StudentAvatarComponent(authenticationService) {
        _classCallCheck(this, StudentAvatarComponent);

        this.authenticationService = authenticationService;
        this.newStudentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleMasculino = false;
        this.visibleFemenino = true;
        this.tipo = this.authenticationService.getUserDetails().sexo;
        this.visibleFemenino = this.tipo == 'Femenino';
        this.visibleMasculino = !this.visibleFemenino;
        console.log(this.tipo);
        console.log(this.visibleFemenino);
        console.log(this.visibleMasculino);
      }

      _createClass(StudentAvatarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setVisibleAvatar();
        }
      }, {
        key: "setVisibleAvatar",
        value: function setVisibleAvatar() {
          if (this.authenticationService.getUserDetails().sexo == 'Femenino') {
            this.visibleFemenino = true;
            this.visibleMasculino = false;
          } else {
            this.visibleFemenino = false;
            this.visibleMasculino = true;
          }
        }
      }, {
        key: "create",
        value: function create(usuario) {
          this.newStudentEvent.emit(usuario);
        }
      }, {
        key: "selectType",
        value: function selectType(event) {
          this.setVisible();
        }
      }, {
        key: "setVisible",
        value: function setVisible() {
          if (this.visibleFemenino === false) {
            this.visibleFemenino = true;
            this.visibleMasculino = false;
          } else {
            this.visibleFemenino = false;
            this.visibleMasculino = true;
          }
        }
      }]);

      return StudentAvatarComponent;
    }();

    StudentAvatarComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentAvatarComponent.prototype, "tipo1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentAvatarComponent.prototype, "tipo2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentAvatarComponent.prototype, "comando", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentAvatarComponent.prototype, "mensaje", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], StudentAvatarComponent.prototype, "newStudentEvent", void 0);
    StudentAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-avatar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-select/student-avatar/student-avatar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-avatar.component.scss */
      "./src/app/components/avatar-select/student-avatar/student-avatar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], StudentAvatarComponent);
    /***/
  },

  /***/
  "./src/app/components/banner/banner.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/banner/banner.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBannerBannerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 467px;\n  height: 800px;\n  border: 0px;\n  margin: 0px;\n  top: 0px;\n  left: 0px;\n  background: #5570FF; }\n\n.titulo {\n  color: floralwhite;\n  font-weight: bolder;\n  font-size: xx-large;\n  margin-top: 250px;\n  text-align: center; }\n\n.texto {\n  color: floralwhite;\n  margin-top: 20px;\n  text-align: center; }\n\n.logo {\n  position: absolute;\n  width: 56px;\n  height: 79px;\n  left: 33px;\n  top: 48px; }\n\n.ilustracion {\n  position: absolute;\n  width: 667px;\n  height: 624px;\n  left: -187px;\n  top: 272px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvQzpcXFVzZXJzXFxnZnJhblxcRG9jdW1lbnRzXFxDQUlKSENHXFxhcHBSZXBhc29cXHB1YmxpYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcYmFubmVyXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBRVgsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBS3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUtiO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0NjdweDtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgLy9sZWZ0OiAtMjBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4OyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzU1NzBGRjtcclxufVxyXG4udGl0dWxve1xyXG4gICAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG5cclxufVxyXG4udGV4dG97XHJcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA3OXB4O1xyXG4gICAgbGVmdDogMzNweDtcclxuICAgIHRvcDogNDhweDtcclxuXHJcblxyXG59XHJcblxyXG4uaWx1c3RyYWNpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNjY3cHg7XHJcbiAgICBoZWlnaHQ6IDYyNHB4O1xyXG4gICAgbGVmdDogLTE4N3B4O1xyXG4gICAgdG9wOiAyNzJweDsgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/banner/banner.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/banner/banner.component.ts ***!
    \*******************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppComponentsBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BannerComponent =
    /*#__PURE__*/
    function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], BannerComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], BannerComponent.prototype, "texto", void 0);
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-banner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./banner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./banner.component.scss */
      "./src/app/components/banner/banner.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BannerComponent);
    /***/
  },

  /***/
  "./src/app/components/campaign-mode/campaign-mode/campaign-mode.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/campaign-mode/campaign-mode/campaign-mode.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCampaignModeCampaignModeCampaignModeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  margin-left: 107px;\n  margin-right: 470px; }\n\n.grid {\n  margin-right: 235px;\n  border-right: 235px; }\n\n.title {\n  width: 320px;\n  height: 40px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 35px;\n  letter-spacing: 0.01em;\n  color: #5570FF; }\n\n.textContent {\n  width: 353px;\n  margin-top: 5px; }\n\n.text {\n  width: 353px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.subtitle-content {\n  width: 353px;\n  margin-top: 57px;\n  margin-bottom: 57px; }\n\n.subtitle {\n  width: 146px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 23px;\n  line-height: 29px;\n  letter-spacing: 0.01em;\n  color: #5570FF; }\n\n.tab-title {\n  height: 30px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n  letter-spacing: 0.01em;\n  color: #5570FF; }\n\n.tabs-div {\n  height: fixed;\n  margin-right: 235px;\n  border-right: 235px; }\n\n.tabs {\n  position: absolute; }\n\n.toolbar {\n  color: white;\n  background-color: white; }\n\n.ion-segment-button {\n  color: white; }\n\n.practice-title {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin-bottom: auto;\n  margin-top: auto;\n  margin-left: 27px; }\n\n.item {\n  box-shadow: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px; }\n\n.first-circle {\n  fill: #FFB946; }\n\n.second-circle {\n  fill: #2ED47A; }\n\n.third-circle {\n  fill: #F7685B; }\n\n.fourth-circle {\n  fill: #885AF8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW1wYWlnbi1tb2RlL2NhbXBhaWduLW1vZGUvQzpcXFVzZXJzXFxnZnJhblxcRG9jdW1lbnRzXFxDQUlKSENHXFxhcHBSZXBhc29cXHB1YmxpYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FtcGFpZ24tbW9kZVxcY2FtcGFpZ24tbW9kZVxcY2FtcGFpZ24tbW9kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFNdkI7RUFFSSxtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWTtFQUNaLGVBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFHbEI7RUFFSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW1wYWlnbi1tb2RlL2NhbXBhaWduLW1vZGUvY2FtcGFpZ24tbW9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWwge1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQ3MHB4O1xyXG4gICAgLy9tYXJnaW4tbGVmdDogMTA3cHg7XHJcbiAgICAgIFxyXG4gICAgLy9kaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgICAvL2Rpc3BsYXk6IGdyaWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAyMzVweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBjb2xvcjogIzU1NzBGRjtcclxufVxyXG5cclxuLnRleHRDb250ZW50IHtcclxuICAgIHdpZHRoOiAzNTNweDtcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICB3aWR0aDogMzUzcHg7XHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBjb2xvcjogIzMzNEQ2RTtcclxufVxyXG5cclxuLnN1YnRpdGxlLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDM1M3B4O1xyXG4gICAgbWFyZ2luLXRvcDo1N3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1N3B4O1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gICAgd2lkdGg6IDE0NnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgY29sb3I6ICM1NTcwRkY7XHJcbn1cclxuXHJcbi50YWItdGl0bGUge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjNTU3MEZGO1xyXG59XHJcblxyXG4udGFicy1kaXYge1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMzVweDtcclxuICAgIGJvcmRlci1yaWdodDogMjM1cHg7XHJcblxyXG59XHJcbi50YWJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnByYWN0aWNlLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBjb2xvcjogIzMzNEQ2RTtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3cHg7XHJcbn1cclxuLml0ZW0ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmZpcnN0LWNpcmNsZSB7XHJcbiAgICBmaWxsOiAjRkZCOTQ2O1xyXG59XHJcbi5zZWNvbmQtY2lyY2xlIHtcclxuICAgIGZpbGw6ICMyRUQ0N0E7XHJcbn1cclxuLnRoaXJkLWNpcmNsZSB7XHJcbiAgICBmaWxsOiAjRjc2ODVCO1xyXG59XHJcbi5mb3VydGgtY2lyY2xlIHtcclxuICAgIGZpbGw6ICM4ODVBRjg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/campaign-mode/campaign-mode/campaign-mode.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/campaign-mode/campaign-mode/campaign-mode.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CampaignModeComponent */

  /***/
  function srcAppComponentsCampaignModeCampaignModeCampaignModeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignModeComponent", function () {
      return CampaignModeComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var CampaignModeComponent =
    /*#__PURE__*/
    function () {
      function CampaignModeComponent() {
        _classCallCheck(this, CampaignModeComponent);

        this.title = "Modo Campaña";
        this.subtitle = "Asignaturas";
        this.text = "El modo campaña es una sección donde sumarás experiencia al realizar las actividades que la profesora crea y así podrás adquirir conocimiento y avanzar en el ranking semanal.";
        this.practices = [];
        this.subjects = [];
      }

      _createClass(CampaignModeComponent, [{
        key: "selectedTab",
        value: function selectedTab(index) {
          console.log("selectedTab", index); // CHANGE PRACTICES VALUE HERE
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.practices = [{
            "name": "Enfermedades gástricas"
          }, {
            "name": "Enfermedades gástricas"
          }, {
            "name": "Enfermedades gástricas"
          }, {
            "name": "Enfermedades gástricas"
          }];
          this.subjects = [{
            "name": "Ciencias"
          }, {
            "name": "Estudios Sociales"
          }, {
            "name": "Español"
          }];
        }
      }]);

      return CampaignModeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], CampaignModeComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('segments', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CampaignModeComponent.prototype, "segments", void 0);
    CampaignModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-campaign-mode',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./campaign-mode.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/campaign-mode/campaign-mode/campaign-mode.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./campaign-mode.component.scss */
      "./src/app/components/campaign-mode/campaign-mode/campaign-mode.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CampaignModeComponent);
    /***/
  },

  /***/
  "./src/app/components/campaign-mode/subtema/subtema.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/campaign-mode/subtema/subtema.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCampaignModeSubtemaSubtemaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".path-title {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  letter-spacing: 0.01em;\n  color: #485CC5; }\n\n.path-title-final {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n  letter-spacing: 0.01em;\n  color: #5570FF; }\n\n.card {\n  width: 366px;\n  height: 181px; }\n\n.card-title {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #4357BF; }\n\n.card-content {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.img {\n  width: 70px;\n  height: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW1wYWlnbi1tb2RlL3N1YnRlbWEvQzpcXFVzZXJzXFxnZnJhblxcRG9jdW1lbnRzXFxDQUlKSENHXFxhcHBSZXBhc29cXHB1YmxpYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FtcGFpZ24tbW9kZVxcc3VidGVtYVxcc3VidGVtYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2xCO0VBRUksWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUV0QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFFdEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbXBhaWduLW1vZGUvc3VidGVtYS9zdWJ0ZW1hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhdGgtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgY29sb3I6ICM0ODVDQzU7XHJcblxyXG59XHJcbi5wYXRoLXRpdGxlLWZpbmFsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBjb2xvcjogIzU1NzBGRjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzY2cHg7XHJcbiAgICBoZWlnaHQ6IDE4MXB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG5cclxuICAgIGNvbG9yOiAjNDM1N0JGO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuXHJcbiAgICBjb2xvcjogIzMzNEQ2RTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/campaign-mode/subtema/subtema.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/campaign-mode/subtema/subtema.component.ts ***!
    \***********************************************************************/

  /*! exports provided: SubtemaComponent */

  /***/
  function srcAppComponentsCampaignModeSubtemaSubtemaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubtemaComponent", function () {
      return SubtemaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubtemaComponent =
    /*#__PURE__*/
    function () {
      function SubtemaComponent() {
        _classCallCheck(this, SubtemaComponent);

        this.subject = "Ciencias";
        this.theme = "Sistema Digestivo";
      }

      _createClass(SubtemaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubtemaComponent;
    }();

    SubtemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subtema',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subtema.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/campaign-mode/subtema/subtema.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subtema.component.scss */
      "./src/app/components/campaign-mode/subtema/subtema.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SubtemaComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./banner/banner.component */
    "./src/app/components/banner/banner.component.ts");
    /* harmony import */


    var _user_type_user_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-type/user-type.component */
    "./src/app/components/user-type/user-type.component.ts");
    /* harmony import */


    var _avatar_select_avatar_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./avatar-select/avatar-select.component */
    "./src/app/components/avatar-select/avatar-select.component.ts");
    /* harmony import */


    var _avatar_select_student_avatar_student_avatar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./avatar-select/student-avatar/student-avatar.component */
    "./src/app/components/avatar-select/student-avatar/student-avatar.component.ts");
    /* harmony import */


    var _avatar_select_professor_avatar_professor_avatar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./avatar-select/professor-avatar/professor-avatar.component */
    "./src/app/components/avatar-select/professor-avatar/professor-avatar.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./register-form/register-form.component */
    "./src/app/components/register-form/register-form.component.ts");
    /* harmony import */


    var _register_form_professor_form_professor_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./register-form/professor-form/professor-form.component */
    "./src/app/components/register-form/professor-form/professor-form.component.ts");
    /* harmony import */


    var _register_form_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./register-form/student-form/student-form.component */
    "./src/app/components/register-form/student-form/student-form.component.ts");
    /* harmony import */


    var _curtain_curtain_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./curtain/curtain.component */
    "./src/app/components/curtain/curtain.component.ts");
    /* harmony import */


    var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./side-bar/side-bar.component */
    "./src/app/components/side-bar/side-bar.component.ts");
    /* harmony import */


    var _side_bar_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./side-bar/menu-bar/menu-bar.component */
    "./src/app/components/side-bar/menu-bar/menu-bar.component.ts");
    /* harmony import */


    var _profile_bar_profile_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./profile-bar/profile-bar.component */
    "./src/app/components/profile-bar/profile-bar.component.ts");
    /* harmony import */


    var _profile_bar_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./profile-bar/personal-info/personal-info.component */
    "./src/app/components/profile-bar/personal-info/personal-info.component.ts");
    /* harmony import */


    var _control_panel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./control-panel/dashboard/dashboard.component */
    "./src/app/components/control-panel/dashboard/dashboard.component.ts");
    /* harmony import */


    var _control_panel_dashboard_dashboard_achievements_dashboard_achievements_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./control-panel/dashboard/dashboard-achievements/dashboard-achievements.component */
    "./src/app/components/control-panel/dashboard/dashboard-achievements/dashboard-achievements.component.ts");
    /* harmony import */


    var _control_panel_dashboard_dashboard_ranking_dashboard_ranking_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./control-panel/dashboard/dashboard-ranking/dashboard-ranking.component */
    "./src/app/components/control-panel/dashboard/dashboard-ranking/dashboard-ranking.component.ts");
    /* harmony import */


    var _control_panel_dashboard_dashboard_recent_dashboard_recent_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./control-panel/dashboard/dashboard-recent/dashboard-recent.component */
    "./src/app/components/control-panel/dashboard/dashboard-recent/dashboard-recent.component.ts");
    /* harmony import */


    var _control_panel_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./control-panel/achievements/achievements.component */
    "./src/app/components/control-panel/achievements/achievements.component.ts");
    /* harmony import */


    var _control_panel_recent_recent_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./control-panel/recent/recent.component */
    "./src/app/components/control-panel/recent/recent.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/components/notifications/notifications.component.ts");
    /* harmony import */


    var _profile_bar_reminder_info_reminder_info_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./profile-bar/reminder-info/reminder-info.component */
    "./src/app/components/profile-bar/reminder-info/reminder-info.component.ts");
    /* harmony import */


    var _campaign_mode_campaign_mode_campaign_mode_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./campaign-mode/campaign-mode/campaign-mode.component */
    "./src/app/components/campaign-mode/campaign-mode/campaign-mode.component.ts");
    /* harmony import */


    var _campaign_mode_subtema_subtema_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./campaign-mode/subtema/subtema.component */
    "./src/app/components/campaign-mode/subtema/subtema.component.ts");
    /* harmony import */


    var _avatar_select_professor_avatar_man_avatar_man_avatar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./avatar-select/professor-avatar/man-avatar/man-avatar.component */
    "./src/app/components/avatar-select/professor-avatar/man-avatar/man-avatar.component.ts");
    /* harmony import */


    var _avatar_select_professor_avatar_woman_avatar_woman_avatar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./avatar-select/professor-avatar/woman-avatar/woman-avatar.component */
    "./src/app/components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component.ts");
    /* harmony import */


    var _avatar_select_student_avatar_boy_avatar_boy_avatar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./avatar-select/student-avatar/boy-avatar/boy-avatar.component */
    "./src/app/components/avatar-select/student-avatar/boy-avatar/boy-avatar.component.ts");
    /* harmony import */


    var _avatar_select_student_avatar_girl_avatar_girl_avatar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./avatar-select/student-avatar/girl-avatar/girl-avatar.component */
    "./src/app/components/avatar-select/student-avatar/girl-avatar/girl-avatar.component.ts"); //import { DashboardComponent } from './dashboard/dashboard.component';
    //import { NotificationsComponent } from './dashboard/notifications/notifications.component';
    //import { AchievementsComponent } from './dashboard/achievements/achievements.component';


    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _user_type_user_type_component__WEBPACK_IMPORTED_MODULE_6__["UserTypeComponent"], _avatar_select_avatar_select_component__WEBPACK_IMPORTED_MODULE_7__["AvatarSelectComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_11__["RegisterFormComponent"], _register_form_professor_form_professor_form_component__WEBPACK_IMPORTED_MODULE_12__["ProfessorFormComponent"], _register_form_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_13__["StudentFormComponent"], _avatar_select_student_avatar_student_avatar_component__WEBPACK_IMPORTED_MODULE_8__["StudentAvatarComponent"], _avatar_select_professor_avatar_professor_avatar_component__WEBPACK_IMPORTED_MODULE_9__["ProfessorAvatarComponent"], _curtain_curtain_component__WEBPACK_IMPORTED_MODULE_14__["CurtainComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_15__["SideBarComponent"], _side_bar_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_16__["MenuBarComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_25__["NotificationsComponent"], _profile_bar_profile_bar_component__WEBPACK_IMPORTED_MODULE_17__["ProfileBarComponent"], _profile_bar_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_18__["PersonalInfoComponent"], _profile_bar_reminder_info_reminder_info_component__WEBPACK_IMPORTED_MODULE_26__["ReminderInfoComponent"], _control_panel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], _control_panel_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_23__["AchievementsComponent"], _control_panel_recent_recent_component__WEBPACK_IMPORTED_MODULE_24__["RecentComponent"], _control_panel_dashboard_dashboard_achievements_dashboard_achievements_component__WEBPACK_IMPORTED_MODULE_20__["DashboardAchievementsComponent"], _control_panel_dashboard_dashboard_ranking_dashboard_ranking_component__WEBPACK_IMPORTED_MODULE_21__["DashboardRankingComponent"], _control_panel_dashboard_dashboard_recent_dashboard_recent_component__WEBPACK_IMPORTED_MODULE_22__["DashboardRecentComponent"], _campaign_mode_campaign_mode_campaign_mode_component__WEBPACK_IMPORTED_MODULE_27__["CampaignModeComponent"], _campaign_mode_subtema_subtema_component__WEBPACK_IMPORTED_MODULE_28__["SubtemaComponent"], _avatar_select_professor_avatar_man_avatar_man_avatar_component__WEBPACK_IMPORTED_MODULE_29__["ManAvatarComponent"], _avatar_select_professor_avatar_woman_avatar_woman_avatar_component__WEBPACK_IMPORTED_MODULE_30__["WomanAvatarComponent"], _avatar_select_student_avatar_boy_avatar_boy_avatar_component__WEBPACK_IMPORTED_MODULE_31__["BoyAvatarComponent"], _avatar_select_student_avatar_girl_avatar_girl_avatar_component__WEBPACK_IMPORTED_MODULE_32__["GirlAvatarComponent"]],
      exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _user_type_user_type_component__WEBPACK_IMPORTED_MODULE_6__["UserTypeComponent"], _avatar_select_avatar_select_component__WEBPACK_IMPORTED_MODULE_7__["AvatarSelectComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_11__["RegisterFormComponent"], _register_form_professor_form_professor_form_component__WEBPACK_IMPORTED_MODULE_12__["ProfessorFormComponent"], _register_form_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_13__["StudentFormComponent"], _avatar_select_student_avatar_student_avatar_component__WEBPACK_IMPORTED_MODULE_8__["StudentAvatarComponent"], _avatar_select_professor_avatar_professor_avatar_component__WEBPACK_IMPORTED_MODULE_9__["ProfessorAvatarComponent"], _curtain_curtain_component__WEBPACK_IMPORTED_MODULE_14__["CurtainComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_15__["SideBarComponent"], _side_bar_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_16__["MenuBarComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_25__["NotificationsComponent"], _control_panel_dashboard_dashboard_achievements_dashboard_achievements_component__WEBPACK_IMPORTED_MODULE_20__["DashboardAchievementsComponent"], _control_panel_dashboard_dashboard_ranking_dashboard_ranking_component__WEBPACK_IMPORTED_MODULE_21__["DashboardRankingComponent"], _control_panel_dashboard_dashboard_recent_dashboard_recent_component__WEBPACK_IMPORTED_MODULE_22__["DashboardRecentComponent"], _profile_bar_profile_bar_component__WEBPACK_IMPORTED_MODULE_17__["ProfileBarComponent"], _profile_bar_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_18__["PersonalInfoComponent"], _profile_bar_reminder_info_reminder_info_component__WEBPACK_IMPORTED_MODULE_26__["ReminderInfoComponent"], _control_panel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], _control_panel_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_23__["AchievementsComponent"], _control_panel_recent_recent_component__WEBPACK_IMPORTED_MODULE_24__["RecentComponent"], _campaign_mode_campaign_mode_campaign_mode_component__WEBPACK_IMPORTED_MODULE_27__["CampaignModeComponent"], _campaign_mode_subtema_subtema_component__WEBPACK_IMPORTED_MODULE_28__["SubtemaComponent"], _avatar_select_professor_avatar_man_avatar_man_avatar_component__WEBPACK_IMPORTED_MODULE_29__["ManAvatarComponent"], _avatar_select_professor_avatar_woman_avatar_woman_avatar_component__WEBPACK_IMPORTED_MODULE_30__["WomanAvatarComponent"], _avatar_select_student_avatar_boy_avatar_boy_avatar_component__WEBPACK_IMPORTED_MODULE_31__["BoyAvatarComponent"], _avatar_select_student_avatar_girl_avatar_girl_avatar_component__WEBPACK_IMPORTED_MODULE_32__["GirlAvatarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/control-panel/achievements/achievements.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/control-panel/achievements/achievements.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlPanelAchievementsAchievementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  margin-left: 107px; }\n\n.title {\n  width: 320px;\n  height: 40px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 35px;\n  letter-spacing: 0.01em;\n  color: #5570FF; }\n\n.textContent {\n  width: 302px;\n  margin-top: 5px; }\n\n.text {\n  width: 302px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.task {\n  width: 169.1px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  background: #E1E5FA;\n  color: #5570FF;\n  width: auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-left: 0%;\n  margin-right: 0%; }\n\n.task-content {\n  width: 164.81px; }\n\n.card {\n  width: 164.81px;\n  height: 221.47px;\n  background: #E1E5FA;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.img {\n  width: 104.79px;\n  height: 127.81px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.no-medals-img {\n  width: 156.44px;\n  height: 190.81px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.cardsRow {\n  margin-top: 24px; }\n\n.no-medals-header {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #5570FF; }\n\n.no-medals-text {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #6F9CD6; }\n\n.no-medals-card {\n  position: absolute;\n  width: 201.34px;\n  top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  border: none !important;\n  box-shadow: none; }\n\n.no-medals-container {\n  display: grid;\n  margin-left: auto;\n  margin-right: auto; }\n\n.grid {\n  display: grid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLXBhbmVsL2FjaGlldmVtZW50cy9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250cm9sLXBhbmVsXFxhY2hpZXZlbWVudHNcXGFjaGlldmVtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osZUFBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCx3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWUsRUFBQTs7QUFJbkI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtcGFuZWwvYWNoaWV2ZW1lbnRzL2FjaGlldmVtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwN3B4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjNTU3MEZGO1xyXG59XHJcblxyXG4udGV4dENvbnRlbnQge1xyXG4gICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIHdpZHRoOiAzMDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjMzM0RDZFO1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgICB3aWR0aDogMTY5LjFweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTFFNUZBO1xyXG4gICAgY29sb3I6ICM1NTcwRkY7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxufVxyXG5cclxuLnRhc2stY29udGVudCB7XHJcbiAgICB3aWR0aDogMTY0LjgxcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAxNjQuODFweDtcclxuICAgIGhlaWdodDogMjIxLjQ3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTFFNUZBO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogMTA0Ljc5cHg7XHJcbiAgICBoZWlnaHQ6IDEyNy44MXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5uby1tZWRhbHMtaW1nIHtcclxuICAgIHdpZHRoOiAxNTYuNDRweDtcclxuICAgIGhlaWdodDogMTkwLjgxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhcmRzUm93IHtcclxuICAgIG1hcmdpbi10b3A6MjRweDtcclxuICAgIFxyXG59XHJcblxyXG4ubm8tbWVkYWxzLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgY29sb3I6ICM1NTcwRkY7XHJcbn1cclxuXHJcbi5uby1tZWRhbHMtdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBjb2xvcjogIzZGOUNENjtcclxufVxyXG5cclxuLm5vLW1lZGFscy1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMDEuMzRweDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubm8tbWVkYWxzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/control-panel/achievements/achievements.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/control-panel/achievements/achievements.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AchievementsComponent */

  /***/
  function srcAppComponentsControlPanelAchievementsAchievementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function () {
      return AchievementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AchievementsComponent =
    /*#__PURE__*/
    function () {
      function AchievementsComponent() {
        _classCallCheck(this, AchievementsComponent);

        this.title = "Logros";
        this.text = "En esta sección podrás ver tus logros en los cursos. Completa actividades y ganarás más";
        this.achievements = [
          /*
          {
          "task" : "Completar 3 actividades"
          },
          {
          "task" : "Primero en el ranking"
          },
          {
          "task" : "Completar 2 cursos exitosamente"
          }*/
        ];
      }

      _createClass(AchievementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AchievementsComponent;
    }();

    AchievementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-achievements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./achievements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/achievements/achievements.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./achievements.component.scss */
      "./src/app/components/control-panel/achievements/achievements.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AchievementsComponent);
    /***/
  },

  /***/
  "./src/app/components/control-panel/dashboard/dashboard-achievements/dashboard-achievements.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/components/control-panel/dashboard/dashboard-achievements/dashboard-achievements.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlPanelDashboardDashboardAchievementsDashboardAchievementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subtitle {\n  position: absolute;\n  width: 122.39px;\n  height: 21.76px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 23px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.col {\n  top: 17.34px;\n  width: 77px;\n  align-self: center;\n  text-align: center; }\n\n.item {\n  width: 75px;\n  height: 100.86px; }\n\n.medalla {\n  position: absolute;\n  width: 49.91px;\n  height: 60.87px;\n  top: 17.34px;\n  align-self: center;\n  text-align: center; }\n\n.achievement {\n  position: absolute;\n  width: 68px;\n  height: 10px;\n  top: 84px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 12px;\n  line-height: 15px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #4562FE; }\n\n.task {\n  position: absolute;\n  width: 72px;\n  height: 17px;\n  top: 101.26px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 9px;\n  line-height: 11px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #4562FE; }\n\n.button {\n  width: 77.97px;\n  height: 23.57px;\n  color: #5570FF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLXBhbmVsL2Rhc2hib2FyZC9kYXNoYm9hcmQtYWNoaWV2ZW1lbnRzL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRyb2wtcGFuZWxcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWFjaGlldmVtZW50c1xcZGFzaGJvYXJkLWFjaGlldmVtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBRXRCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBRXRCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1wYW5lbC9kYXNoYm9hcmQvZGFzaGJvYXJkLWFjaGlldmVtZW50cy9kYXNoYm9hcmQtYWNoaWV2ZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMjIuMzlweDtcclxuICAgIGhlaWdodDogMjEuNzZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjMzM0RDZFO1xyXG59XHJcbi5jb2wge1xyXG4gICAgdG9wOiAxNy4zNHB4O1xyXG4gICAgd2lkdGg6IDc3cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLml0ZW0ge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMC44NnB4O1xyXG59XHJcbi5tZWRhbGxhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0OS45MXB4O1xyXG4gICAgaGVpZ2h0OiA2MC44N3B4O1xyXG4gICAgdG9wOiAxNy4zNHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hY2hpZXZlbWVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHRvcDogODRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuXHJcbiAgICBjb2xvcjogIzQ1NjJGRTtcclxufVxyXG4udGFzayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNzJweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIHRvcDogMTAxLjI2cHg7XHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuXHJcbiAgICBjb2xvcjogIzQ1NjJGRTtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIHdpZHRoOiA3Ny45N3B4O1xyXG4gICAgaGVpZ2h0OiAyMy41N3B4O1xyXG4gICAgY29sb3I6ICM1NTcwRkY7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/control-panel/dashboard/dashboard-achievements/dashboard-achievements.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/components/control-panel/dashboard/dashboard-achievements/dashboard-achievements.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: DashboardAchievementsComponent */

  /***/
  function srcAppComponentsControlPanelDashboardDashboardAchievementsDashboardAchievementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardAchievementsComponent", function () {
      return DashboardAchievementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardAchievementsComponent =
    /*#__PURE__*/
    function () {
      function DashboardAchievementsComponent() {
        _classCallCheck(this, DashboardAchievementsComponent);

        this.achievements = [{
          "name": "Persistente",
          "task": "Completar 3 actividades"
        }, {
          "name": "Ganador",
          "task": "Primero en el ranking"
        }, {
          "name": "Excelencia",
          "task": "Completar 2 cursos exitosamente"
        }];
      }

      _createClass(DashboardAchievementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardAchievementsComponent;
    }();

    DashboardAchievementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard-achievements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard-achievements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard-achievements/dashboard-achievements.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard-achievements.component.scss */
      "./src/app/components/control-panel/dashboard/dashboard-achievements/dashboard-achievements.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DashboardAchievementsComponent);
    /***/
  },

  /***/
  "./src/app/components/control-panel/dashboard/dashboard-ranking/dashboard-ranking.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/control-panel/dashboard/dashboard-ranking/dashboard-ranking.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlPanelDashboardDashboardRankingDashboardRankingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subtitle {\n  position: absolute;\n  width: 170.76px;\n  height: 23.55px;\n  left: 0px;\n  top: 0px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 23px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.label {\n  position: absolute;\n  width: 183px;\n  height: 17px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #42648F; }\n\n.rectangle {\n  position: absolute;\n  width: 143.37px;\n  height: 6.87px;\n  left: 524.72px;\n  top: 522.11px;\n  background: #FFB946;\n  box-shadow: 0px 4px 4px rgba(252, 162, 15, 0.2);\n  border-radius: 30px; }\n\n.lines {\n  left: 181.72px; }\n\n.item {\n  width: 326px;\n  height: 27.47px; }\n\n.svg {\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLXBhbmVsL2Rhc2hib2FyZC9kYXNoYm9hcmQtcmFua2luZy9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250cm9sLXBhbmVsXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1yYW5raW5nXFxkYXNoYm9hcmQtcmFua2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBRVIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFFdEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUVaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBRXRCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsYUFBYTtFQUViLG1CQUFtQjtFQUNuQiwrQ0FBK0M7RUFDL0MsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLFlBQVk7RUFDWixlQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtcGFuZWwvZGFzaGJvYXJkL2Rhc2hib2FyZC1yYW5raW5nL2Rhc2hib2FyZC1yYW5raW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNzAuNzZweDtcclxuICAgIGhlaWdodDogMjMuNTVweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuXHJcbiAgICBjb2xvcjogIzMzNEQ2RTtcclxufVxyXG4ubGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE4M3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuXHJcbiAgICBjb2xvcjogIzQyNjQ4RjtcclxufVxyXG4ucmVjdGFuZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNDMuMzdweDtcclxuICAgIGhlaWdodDogNi44N3B4O1xyXG4gICAgbGVmdDogNTI0LjcycHg7XHJcbiAgICB0b3A6IDUyMi4xMXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNGRkI5NDY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDI1MiwgMTYyLCAxNSwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLmxpbmVzIHtcclxuICAgIGxlZnQ6IDE4MS43MnB4O1xyXG59XHJcbi5pdGVtIHtcclxuICAgIHdpZHRoOjMyNnB4IDtcclxuICAgIGhlaWdodDoyNy40N3B4O1xyXG59XHJcbi5zdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/control-panel/dashboard/dashboard-ranking/dashboard-ranking.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/control-panel/dashboard/dashboard-ranking/dashboard-ranking.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: DashboardRankingComponent */

  /***/
  function srcAppComponentsControlPanelDashboardDashboardRankingDashboardRankingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRankingComponent", function () {
      return DashboardRankingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardRankingComponent =
    /*#__PURE__*/
    function () {
      function DashboardRankingComponent() {
        _classCallCheck(this, DashboardRankingComponent);

        this.students = [{
          "name": "Fernanda Madrigal Cordero",
          "percentage": 97
        }, {
          "name": "Ana Peréz Briceño",
          "percentage": 88
        }, {
          "name": "Carlos Mata Masís",
          "percentage": 70
        }, {
          "name": "Rebeca Castro Figueroa",
          "percentage": 65
        }, {
          "name": "Vanesa Brenes Villalobos",
          "percentage": 60
        }, {
          "name": "Camila Leiva Ugalde",
          "percentage": 50
        }];
      }

      _createClass(DashboardRankingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getTop",
        value: function getTop(i) {
          console.log(i);
          return 39 + i * 17 + i * 12;
        }
      }, {
        key: "getTopLine",
        value: function getTopLine(i) {
          console.log(i);
          return 44 + i * 17 + i * 12;
        }
      }]);

      return DashboardRankingComponent;
    }();

    DashboardRankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard-ranking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard-ranking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard-ranking/dashboard-ranking.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard-ranking.component.scss */
      "./src/app/components/control-panel/dashboard/dashboard-ranking/dashboard-ranking.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DashboardRankingComponent);
    /***/
  },

  /***/
  "./src/app/components/control-panel/dashboard/dashboard-recent/dashboard-recent.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/control-panel/dashboard/dashboard-recent/dashboard-recent.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlPanelDashboardDashboardRecentDashboardRecentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subtitle {\n  position: absolute;\n  width: 87.6px;\n  height: 17.88px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 23px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.button {\n  position: absolute;\n  width: 77.97px;\n  height: 23.57px;\n  left: 551px;\n  top: 0px;\n  color: #5570FF; }\n\n.card {\n  position: absolute;\n  width: 196.66px;\n  height: 125.04px;\n  top: 279px;\n  background: #FFFFFF; }\n\n.row {\n  width: 100%;\n  height: 100%; }\n\n.cardTitle {\n  position: absolute;\n  width: 187px;\n  height: 56px;\n  left: 10px;\n  top: 29px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 23px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF; }\n\n.cardSubtitle {\n  position: absolute;\n  width: 130px;\n  height: 17px;\n  left: 13px;\n  top: 93px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF; }\n\n.firstCard {\n  position: absolute;\n  width: 190px;\n  height: 127px;\n  left: -5.32px;\n  top: -0.28px;\n  top: 36.43px;\n  background: #24B064;\n  border-radius: 10px; }\n\n.secondCard {\n  position: absolute;\n  width: 190px;\n  height: 127px;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: 0%;\n  left: 199.54px;\n  top: 36.43px;\n  background: #885AF8;\n  border-radius: 10px; }\n\n.thirdCard {\n  position: absolute;\n  width: 190px;\n  height: 127px;\n  top: 0px;\n  left: 404px;\n  top: 36.43px;\n  background: #F7685B;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLXBhbmVsL2Rhc2hib2FyZC9kYXNoYm9hcmQtcmVjZW50L0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRyb2wtcGFuZWxcXGRhc2hib2FyZFxcZGFzaGJvYXJkLXJlY2VudFxcZGFzaGJvYXJkLXJlY2VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBRVQsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFFdEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBRVQsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFFdEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUVaLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLXBhbmVsL2Rhc2hib2FyZC9kYXNoYm9hcmQtcmVjZW50L2Rhc2hib2FyZC1yZWNlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDg3LjZweDtcclxuICAgIGhlaWdodDogMTcuODhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjMzM0RDZFO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc3Ljk3cHg7XHJcbiAgICBoZWlnaHQ6IDIzLjU3cHg7XHJcbiAgICBsZWZ0OiA1NTFweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgY29sb3I6ICM1NTcwRkY7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE5Ni42NnB4O1xyXG4gICAgaGVpZ2h0OiAxMjUuMDRweDtcclxuICAgIHRvcDogMjc5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcbi5yb3cge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcbi5jYXJkVGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE4N3B4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHRvcDogMjlweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNhcmRTdWJ0aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgdG9wOiA5M3B4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmZpcnN0Q2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBoZWlnaHQ6IDEyN3B4O1xyXG4gICAgbGVmdDogLTUuMzJweDtcclxuICAgIHRvcDogLTAuMjhweDtcclxuICAgIHRvcDogMzYuNDNweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjMjRCMDY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uc2Vjb25kQ2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBoZWlnaHQ6IDEyN3B4O1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGxlZnQ6IDE5OS41NHB4O1xyXG4gICAgdG9wOiAzNi40M3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzg4NUFGODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnRoaXJkQ2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBoZWlnaHQ6IDEyN3B4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiA0MDRweDtcclxuICAgIHRvcDogMzYuNDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNGNzY4NUI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/control-panel/dashboard/dashboard-recent/dashboard-recent.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/control-panel/dashboard/dashboard-recent/dashboard-recent.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: DashboardRecentComponent */

  /***/
  function srcAppComponentsControlPanelDashboardDashboardRecentDashboardRecentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRecentComponent", function () {
      return DashboardRecentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardRecentComponent =
    /*#__PURE__*/
    function () {
      function DashboardRecentComponent() {
        _classCallCheck(this, DashboardRecentComponent);

        this.practices = [{
          "name": "Enfermedades gástricas",
          "percentage": 90
        }, {
          "name": "Enfermedades gástricas",
          "percentage": 70
        }, {
          "name": "Enfermedades gástricas",
          "percentage": 30
        }];
      }

      _createClass(DashboardRecentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardRecentComponent;
    }();

    DashboardRecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard-recent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard-recent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard-recent/dashboard-recent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard-recent.component.scss */
      "./src/app/components/control-panel/dashboard/dashboard-recent/dashboard-recent.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DashboardRecentComponent);
    /***/
  },

  /***/
  "./src/app/components/control-panel/dashboard/dashboard.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/control-panel/dashboard/dashboard.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlPanelDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  background: #E5E5E5;\n  width: 765.87;\n  height: 800px;\n  top: 0px; }\n\n.bg {\n  position: absolute;\n  width: 766px;\n  height: 800px;\n  top: 0px;\n  background: rgba(232, 234, 250, 0.19); }\n\n.title {\n  position: absolute;\n  width: 401px;\n  height: 36px;\n  left: 102px;\n  top: 151px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 35px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.question {\n  position: absolute;\n  width: 315px;\n  height: 25px;\n  left: 102px;\n  top: 195px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #42648F; }\n\n.subtitle {\n  position: absolute;\n  width: 87.6px;\n  height: 17.88px;\n  left: 102px;\n  top: 247.1px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 23px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.button {\n  position: absolute;\n  width: 77.97px;\n  height: 23.57px;\n  top: 242.57px;\n  left: 653px; }\n\n.buttonFont {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #5570FF; }\n\n.list {\n  position: absolute;\n  left: 102px;\n  top: 279px; }\n\n.recent {\n  position: absolute;\n  left: 102px;\n  top: 242.57px; }\n\n.ranking {\n  position: absolute;\n  width: 326px;\n  height: 208px;\n  left: 106px;\n  top: 476px; }\n\n.achievements {\n  position: absolute;\n  width: 258px;\n  height: 146.04px;\n  left: 472px;\n  top: 476px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLXBhbmVsL2Rhc2hib2FyZC9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250cm9sLXBhbmVsXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLFFBRUosRUFBQTs7QUFDQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFFBQVE7RUFDUixxQ0FBcUMsRUFBQTs7QUFFekM7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUVmO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBRXRCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFVBQVMsRUFBQTs7QUFFYjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLXBhbmVsL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgYmFja2dyb3VuZDogI0U1RTVFNTtcclxuICAgIHdpZHRoOiA3NjUuODc7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgdG9wOjBweFxyXG5cclxufVxyXG4uYmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc2NnB4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDIzNCwgMjUwLCAwLjE5KTtcclxufVxyXG4udGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDAxcHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBsZWZ0OiAxMDJweDtcclxuICAgIHRvcDogMTUxcHg7XHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgY29sb3I6ICMzMzRENkU7XHJcbn1cclxuLnF1ZXN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMTVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxlZnQ6IDEwMnB4O1xyXG4gICAgdG9wOiAxOTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjNDI2NDhGO1xyXG59XHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODcuNnB4O1xyXG4gICAgaGVpZ2h0OiAxNy44OHB4O1xyXG4gICAgbGVmdDogMTAycHg7XHJcbiAgICB0b3A6IDI0Ny4xcHg7XHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBjb2xvcjogIzMzNEQ2RTtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3Ny45N3B4O1xyXG4gICAgaGVpZ2h0OiAyMy41N3B4O1xyXG4gICAgdG9wOiAyNDIuNTdweDtcclxuICAgIGxlZnQ6IDY1M3B4O1xyXG59XHJcbi5idXR0b25Gb250IHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgY29sb3I6ICM1NTcwRkY7XHJcbn1cclxuLmxpc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxMDJweDtcclxuICAgIHRvcDoyNzlweDtcclxufVxyXG4ucmVjZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwMnB4O1xyXG4gICAgdG9wOiAyNDIuNTdweDtcclxufVxyXG4ucmFua2luZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzI2cHg7XHJcbiAgICBoZWlnaHQ6IDIwOHB4O1xyXG4gICAgbGVmdDogMTA2cHg7XHJcbiAgICB0b3A6IDQ3NnB4O1xyXG5cclxufVxyXG4uYWNoaWV2ZW1lbnRze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1OHB4O1xyXG4gICAgaGVpZ2h0OiAxNDYuMDRweDtcclxuICAgIGxlZnQ6IDQ3MnB4O1xyXG4gICAgdG9wOiA0NzZweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/control-panel/dashboard/dashboard.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/control-panel/dashboard/dashboard.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsControlPanelDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/components/control-panel/dashboard/dashboard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/control-panel/recent/recent.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/control-panel/recent/recent.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlPanelRecentRecentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  margin-left: 107px; }\n\n.grid {\n  display: grid; }\n\n.title {\n  width: 320px;\n  height: 40px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 35px;\n  letter-spacing: 0.01em;\n  color: #5570FF; }\n\n.textContent {\n  width: 302px;\n  margin-top: 5px; }\n\n.text {\n  width: 302px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.card-container {\n  width: 200px; }\n\n.card {\n  width: 196.66px;\n  height: 125.04px;\n  background: #FFFFFF; }\n\n.row {\n  width: 100%;\n  height: 100%;\n  margin-top: 20px; }\n\n.cardTitle {\n  position: absolute;\n  width: 187px;\n  height: 56px;\n  left: 10px;\n  top: 29px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 23px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF; }\n\n.cardSubtitle {\n  position: absolute;\n  width: 130px;\n  height: 17px;\n  left: 13px;\n  top: 93px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF; }\n\n.firstCard {\n  width: 190px;\n  height: 127px;\n  background: #24B064;\n  border-radius: 10px; }\n\n.secondCard {\n  width: 190px;\n  height: 127px;\n  background: #885AF8;\n  border-radius: 10px; }\n\n.thirdCard {\n  width: 190px;\n  height: 127px;\n  background: #F7685B;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLXBhbmVsL3JlY2VudC9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250cm9sLXBhbmVsXFxyZWNlbnRcXHJlY2VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWTtFQUNaLGVBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFFSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVU7RUFDVixZQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFFVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUV0QixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFFVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUV0QixjQUFjLEVBQUE7O0FBRWxCO0VBRUksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBRUksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBRUksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtcGFuZWwvcmVjZW50L3JlY2VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwN3B4O1xyXG4gICAgLy9kaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjNTU3MEZGO1xyXG59XHJcblxyXG4udGV4dENvbnRlbnQge1xyXG4gICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIHdpZHRoOiAzMDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjMzM0RDZFO1xyXG59XHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTk2LjY2cHg7XHJcbiAgICBoZWlnaHQ6IDEyNS4wNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxufVxyXG4ucm93IHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAvL2Rpc3BsYXk6IGdyaWQ7XHJcbn1cclxuXHJcbi5jYXJkVGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE4N3B4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHRvcDogMjlweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNhcmRTdWJ0aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgdG9wOiA5M3B4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmZpcnN0Q2FyZCB7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIGhlaWdodDogMTI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjRCMDY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uc2Vjb25kQ2FyZCB7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIGhlaWdodDogMTI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg1QUY4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udGhpcmRDYXJkIHtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjdweDtcclxuICAgIGJhY2tncm91bmQ6ICNGNzY4NUI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/control-panel/recent/recent.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/control-panel/recent/recent.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RecentComponent */

  /***/
  function srcAppComponentsControlPanelRecentRecentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecentComponent", function () {
      return RecentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecentComponent =
    /*#__PURE__*/
    function () {
      function RecentComponent() {
        _classCallCheck(this, RecentComponent);

        this.title = "Recientes";
        this.text = "En esta sección podrás observar algunas actividades que has realizado recientemente";
        this.practices = [{
          "name": "Enfermedades gástricas",
          "percentage": 90
        }, {
          "name": "Enfermedades gástricas",
          "percentage": 70
        }, {
          "name": "Enfermedades gástricas",
          "percentage": 30
        }];
      }

      _createClass(RecentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecentComponent;
    }();

    RecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-panel/recent/recent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recent.component.scss */
      "./src/app/components/control-panel/recent/recent.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RecentComponent);
    /***/
  },

  /***/
  "./src/app/components/curtain/curtain.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/curtain/curtain.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCurtainCurtainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  width: 1280px;\n  height: 800px;\n  background: #5570FF; }\n\n.logo {\n  position: absolute;\n  width: 541px;\n  height: 560px;\n  left: 377px;\n  top: 69px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJ0YWluL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGN1cnRhaW5cXGN1cnRhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1cnRhaW4vY3VydGFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICM1NTcwRkY7ICAgIFxyXG59XHJcbi5sb2dve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDU0MXB4O1xyXG4gICAgaGVpZ2h0OiA1NjBweDtcclxuICAgIGxlZnQ6IDM3N3B4O1xyXG4gICAgdG9wOiA2OXB4OyAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/curtain/curtain.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/curtain/curtain.component.ts ***!
    \*********************************************************/

  /*! exports provided: CurtainComponent */

  /***/
  function srcAppComponentsCurtainCurtainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurtainComponent", function () {
      return CurtainComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var CurtainComponent =
    /*#__PURE__*/
    function () {
      function CurtainComponent(navCtrl) {
        _classCallCheck(this, CurtainComponent);

        this.navCtrl = navCtrl;
      }

      _createClass(CurtainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goTo",
        value: function goTo() {
          this.navCtrl.navigateForward('/registro');
        }
      }]);

      return CurtainComponent;
    }();

    CurtainComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    CurtainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-curtain',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./curtain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/curtain/curtain.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./curtain.component.scss */
      "./src/app/components/curtain/curtain.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], CurtainComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tituloLogin {\n  font-size: xx-large;\n  font-weight: bolder;\n  text-align: center; }\n\n.centrarTitulo {\n  margin-top: 180px;\n  text-align: center; }\n\n.centrar {\n  text-align: center; }\n\n.input {\n  margin-top: 15px;\n  text-align: center; }\n\n.btnLogin {\n  width: 217px;\n  height: 53px;\n  left: 787px;\n  top: 424px;\n  background: #5570FF;\n  border-radius: 30px; }\n\n.labelUsuario {\n  position: absolute;\n  width: 123px;\n  height: 18px;\n  left: 586px;\n  top: 337px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  /* identical to box height */\n  color: #334D6E; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUVWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFFakIsNEJBQUE7RUFFQSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aXR1bG9Mb2dpbntcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uY2VudHJhclRpdHVsb3tcclxuICAgIG1hcmdpbi10b3A6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uY2VudHJhcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uYnRuTG9naW57XHJcbiAgICB3aWR0aDogMjE3cHg7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICBsZWZ0OiA3ODdweDtcclxuICAgIHRvcDogNDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU3MEZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBcclxufVxyXG5cclxuLmxhYmVsVXN1YXJpb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMjNweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGxlZnQ6IDU4NnB4O1xyXG4gICAgdG9wOiAzMzdweDtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBcclxuICAgIGNvbG9yOiAjMzM0RDZFO1xyXG59XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _models_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/usuario */
    "./src/app/models/usuario.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(navCtrl, usuarioService, authenticationService) {
        _classCallCheck(this, LoginComponent);

        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this.authenticationService = authenticationService;
        this.newUser = new _models_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setEmail",
        value: function setEmail(event) {
          this.newUser.email = event.target.value;
        }
      }, {
        key: "setPassword",
        value: function setPassword(event) {
          this.newUser.password = event.target.value;
        }
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          this.usuarioService.loginUser(this.newUser).then(function (data) {
            console.log(data.token);

            _this2.authenticationService.saveToken(data.token);

            _this2.navCtrl.navigateForward('/panel');
          }).catch(function (err) {// Acción o mensaje de alerta porque el login es incorrecto
          });
        }
      }, {
        key: "goToRegistro",
        value: function goToRegistro() {
          this.navCtrl.navigateForward('/registro');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LoginComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LoginComponent.prototype, "usuario", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LoginComponent.prototype, "clave", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/login/login.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/menu/menu.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 237.13px;\n  height: 800px;\n  left: 0px;\n  top: 0px;\n  background: #5570FF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsUUFBUTtFQUNSLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIzNy4xM3B4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU1NzBGRjsgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuComponent.prototype, "section1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuComponent.prototype, "section2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuComponent.prototype, "section3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuComponent.prototype, "section4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuComponent.prototype, "section5", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/components/menu/menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/components/notifications/notifications.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/notifications/notifications.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotificationsNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  position: absolute;\n  width: 320px;\n  height: 40px;\n  left: 344px;\n  top: 112px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 35px;\n  letter-spacing: 0.01em;\n  color: #5570FF; }\n\n.date {\n  position: absolute;\n  width: 241px;\n  height: 20px;\n  left: 107.87px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 20px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.notification {\n  position: absolute;\n  width: 343px;\n  height: 17px;\n  left: 157.87px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.icon {\n  position: absolute;\n  left: 27.73%;\n  right: 70.23%;\n  top: 28.75%;\n  bottom: 67.25%;\n  background: #5570FF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5vdGlmaWNhdGlvbnNcXG5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUVWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBRXRCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBRWQsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBRXRCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUVkLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDogMzQ0cHg7XHJcbiAgICB0b3A6IDExMnB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgY29sb3I6ICM1NTcwRkY7XHJcbn1cclxuLmRhdGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI0MXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGVmdDogMTA3Ljg3cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjMzM0RDZFO1xyXG59XHJcbi5ub3RpZmljYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDM0M3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgbGVmdDogMTU3Ljg3cHg7XHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgY29sb3I6ICMzMzRENkU7XHJcbn1cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjcuNzMlO1xyXG4gICAgcmlnaHQ6IDcwLjIzJTtcclxuICAgIHRvcDogMjguNzUlO1xyXG4gICAgYm90dG9tOiA2Ny4yNSU7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzU1NzBGRjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/notifications/notifications.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/notifications/notifications.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppComponentsNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationsComponent =
    /*#__PURE__*/
    function () {
      function NotificationsComponent() {
        _classCallCheck(this, NotificationsComponent);

        this.notifications = [{
          "date": "Hoy, 09 noviembre  2019",
          "activities": [],
          "notes": [{
            "name": "Enfermedades gástricas."
          }]
        }, {
          "date": "Ayer, 08 noviembre 2019",
          "activities": [{
            "name": "Sinónimos y antónimos"
          }],
          "notes": [{
            "name": "Sinónimos y antónimos"
          }]
        }, {
          "date": "Viernes, 25 octubre 2019",
          "activities": [{
            "name": "Enfermedades gástricas."
          }],
          "notes": []
        }];
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], NotificationsComponent.prototype, "titulo", void 0);
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.scss */
      "./src/app/components/notifications/notifications.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/components/profile-bar/personal-info/personal-info.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/profile-bar/personal-info/personal-info.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileBarPersonalInfoPersonalInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subtitle {\n  width: 149px;\n  height: 16px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin-left: 10px; }\n\n.icon {\n  margin-left: -5px; }\n\n.item {\n  margin: 0px;\n  border: 0px;\n  --inner-border-width: 0px;\n  --border-width:0px;\n  height: 32px; }\n\n.data {\n  width: 175px;\n  height: 20px;\n  margin: 0px;\n  border: 0px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWJhci9wZXJzb25hbC1pbmZvL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2ZpbGUtYmFyXFxwZXJzb25hbC1pbmZvXFxwZXJzb25hbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBcUI7RUFDckIsa0JBQWU7RUFFZixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1iYXIvcGVyc29uYWwtaW5mby9wZXJzb25hbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcclxuICAgIHdpZHRoOiAxNDlweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBjb2xvcjogIzMzNEQ2RTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxufVxyXG4uaWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDsgXHJcbn1cclxuLml0ZW0ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDowcHg7XHJcbiAgICBcclxuICAgIGhlaWdodDogMzJweDtcclxufVxyXG4uZGF0YSB7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgY29sb3I6ICMzMzRENkU7ICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/profile-bar/personal-info/personal-info.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/profile-bar/personal-info/personal-info.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: PersonalInfoComponent */

  /***/
  function srcAppComponentsProfileBarPersonalInfoPersonalInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function () {
      return PersonalInfoComponent;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var PersonalInfoComponent =
    /*#__PURE__*/
    function () {
      function PersonalInfoComponent(authenticationService) {
        _classCallCheck(this, PersonalInfoComponent);

        this.authenticationService = authenticationService;
        this.title = "Datos personales";
      }

      _createClass(PersonalInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Convierte de un string de fecha nacimiento a la edad
         * @param birthday string de fecha nacimiento con formato yyyy-mm-ddThh:mm:sssZ
         */

      }, {
        key: "calculateAge",
        value: function calculateAge(birthday) {
          var result = Math.abs(new Date(Date.now() - new Date(birthday).getTime()).getUTCFullYear() - 1970).toString();
          return result == '1' ? result + " año" : result + " años";
        }
      }]);

      return PersonalInfoComponent;
    }();

    PersonalInfoComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    PersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-personal-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./personal-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-bar/personal-info/personal-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./personal-info.component.scss */
      "./src/app/components/profile-bar/personal-info/personal-info.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], PersonalInfoComponent);
    /***/
  },

  /***/
  "./src/app/components/profile-bar/profile-bar.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/profile-bar/profile-bar.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileBarProfileBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 277px;\n  height: 801px;\n  top: 0px; }\n\n.imagen {\n  margin-top: 60px;\n  margin-left: 80px; }\n\n.avatar {\n  width: 100px;\n  height: 100px;\n  border-style: solid;\n  border-color: #5570FF;\n  border-radius: 15px; }\n\n.nombreUsuario {\n  margin-top: 40px;\n  text-align: center; }\n\n.name {\n  width: 223px;\n  height: 26px;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #334D6E; }\n\n.personalInfo {\n  margin-top: 0px; }\n\n.logout {\n  -webkit-box-align: end;\n          align-items: flex-end; }\n\n.logoutLabel {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  margin-left: 10px;\n  color: #334D6E; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWJhci9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9maWxlLWJhclxccHJvZmlsZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFFYixRQUFRLEVBQUE7O0FBRVo7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUVaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBRXRCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksc0JBQ0o7VUFESSxxQkFDSixFQUFBOztBQUNBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1iYXIvcHJvZmlsZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI3N3B4O1xyXG4gICAgaGVpZ2h0OiA4MDFweDtcclxuICAgIC8vbGVmdDogMTQzcHg7XHJcbiAgICB0b3A6IDBweDsgXHJcbn1cclxuLmltYWdlbntcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxufVxyXG4uYXZhdGFye1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDsgXHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU3MEZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLm5vbWJyZVVzdWFyaW97XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICB3aWR0aDogMjIzcHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG5cclxuICAgIGNvbG9yOiAjMzM0RDZFO1xyXG59XHJcbiBcclxuLnBlcnNvbmFsSW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kXHJcbn1cclxuLmxvZ291dExhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICMzMzRENkU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/profile-bar/profile-bar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/profile-bar/profile-bar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProfileBarComponent */

  /***/
  function srcAppComponentsProfileBarProfileBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileBarComponent", function () {
      return ProfileBarComponent;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var ProfileBarComponent =
    /*#__PURE__*/
    function () {
      function ProfileBarComponent(authenticationService) {
        _classCallCheck(this, ProfileBarComponent);

        this.authenticationService = authenticationService;
      }

      _createClass(ProfileBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileBarComponent;
    }();

    ProfileBarComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    ProfileBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-bar/profile-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-bar.component.scss */
      "./src/app/components/profile-bar/profile-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], ProfileBarComponent);
    /***/
  },

  /***/
  "./src/app/components/profile-bar/reminder-info/reminder-info.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/profile-bar/reminder-info/reminder-info.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileBarReminderInfoReminderInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subtitle {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin-left: 10px; }\n\n.icon {\n  margin-left: -5px; }\n\n.reminder {\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWJhci9yZW1pbmRlci1pbmZvL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2ZpbGUtYmFyXFxyZW1pbmRlci1pbmZvXFxyZW1pbmRlci1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1iYXIvcmVtaW5kZXItaW5mby9yZW1pbmRlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBjb2xvcjogIzMzNEQ2RTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxufVxyXG4uaWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDsgXHJcbn1cclxuLnJlbWluZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGNvbG9yOiAjMzM0RDZFO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG5cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/profile-bar/reminder-info/reminder-info.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/profile-bar/reminder-info/reminder-info.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ReminderInfoComponent */

  /***/
  function srcAppComponentsProfileBarReminderInfoReminderInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReminderInfoComponent", function () {
      return ReminderInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReminderInfoComponent =
    /*#__PURE__*/
    function () {
      function ReminderInfoComponent() {
        _classCallCheck(this, ReminderInfoComponent);

        this.title = "Recordatorios";
        this.reminders = [{
          "reminder": "Tarea pendiente asignatura ciencias"
        }, {
          "reminder": "Tarea pendiente asignatura ciencias"
        }, {
          "reminder": "Tarea pendiente asignatura ciencias"
        }];
      }

      _createClass(ReminderInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReminderInfoComponent;
    }();

    ReminderInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reminder-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reminder-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-bar/reminder-info/reminder-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reminder-info.component.scss */
      "./src/app/components/profile-bar/reminder-info/reminder-info.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ReminderInfoComponent);
    /***/
  },

  /***/
  "./src/app/components/register-form/professor-form/professor-form.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/register-form/professor-form/professor-form.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterFormProfessorFormProfessorFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnRegister {\n  width: 215px;\n  height: 47px; }\n\n.btnRegisterLocation {\n  top: 30px;\n  text-align: center; }\n\n.optionalText {\n  top: 25px;\n  text-align: center; }\n\n.btnLogin {\n  top: 11px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL3Byb2Zlc3Nvci1mb3JtL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlZ2lzdGVyLWZvcm1cXHByb2Zlc3Nvci1mb3JtXFxwcm9mZXNzb3ItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyLWZvcm0vcHJvZmVzc29yLWZvcm0vcHJvZmVzc29yLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuUmVnaXN0ZXJ7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMTVweDtcclxuICAgIGhlaWdodDogNDdweDtcclxufVxyXG4uYnRuUmVnaXN0ZXJMb2NhdGlvbntcclxuICAgIHRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdGlvbmFsVGV4dHtcclxuICAgIHRvcDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bkxvZ2lue1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/register-form/professor-form/professor-form.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/register-form/professor-form/professor-form.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProfessorFormComponent */

  /***/
  function srcAppComponentsRegisterFormProfessorFormProfessorFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessorFormComponent", function () {
      return ProfessorFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _models_docente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/docente */
    "./src/app/models/docente.ts");

    var ProfessorFormComponent =
    /*#__PURE__*/
    function () {
      function ProfessorFormComponent(navCtrl) {
        _classCallCheck(this, ProfessorFormComponent);

        this.navCtrl = navCtrl;
        this.createNewDocenteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newDocente = new _models_docente__WEBPACK_IMPORTED_MODULE_3__["Docente"]();
      }

      _createClass(ProfessorFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setNombre",
        value: function setNombre(event) {
          this.newDocente.nombre = event.target.value;
        }
      }, {
        key: "setSexo",
        value: function setSexo(event) {
          this.newDocente.sexo = event.target.value;
        }
      }, {
        key: "setFechaNacimiento",
        value: function setFechaNacimiento(event) {
          this.newDocente.fechaNacimiento = event.target.value;
        }
      }, {
        key: "setEspecialidad",
        value: function setEspecialidad(event) {
          this.newDocente.especialidad = event.target.value;
        }
      }, {
        key: "setEmail",
        value: function setEmail(event) {
          localStorage.setItem('email', event.target.value);
        }
      }, {
        key: "setPassword",
        value: function setPassword(event) {
          localStorage.setItem('password', event.target.value);
        }
        /**
         * Llama a las funcion liga a ella en el componente padre para que se encargue del registro del docente y su respetivo usuario
         */

      }, {
        key: "create",
        value: function create() {
          delete this.newDocente._id;
          this.createNewDocenteEvent.emit(this.newDocente);
          this.newDocente = new _models_docente__WEBPACK_IMPORTED_MODULE_3__["Docente"]();
        }
        /**
         * Lleva a la pantalla de inicio cuando se clickea el botón de iniciar sesión
         */

      }, {
        key: "goToInicio",
        value: function goToInicio() {
          this.navCtrl.navigateForward(['/inicio']);
        }
      }]);

      return ProfessorFormComponent;
    }();

    ProfessorFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorFormComponent.prototype, "nombre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorFormComponent.prototype, "genero1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorFormComponent.prototype, "genero2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorFormComponent.prototype, "fecha", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorFormComponent.prototype, "especialidad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorFormComponent.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorFormComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorFormComponent.prototype, "botonRegistro", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProfessorFormComponent.prototype, "botonLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfessorFormComponent.prototype, "createNewDocenteEvent", void 0);
    ProfessorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-professor-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./professor-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/professor-form/professor-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./professor-form.component.scss */
      "./src/app/components/register-form/professor-form/professor-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], ProfessorFormComponent);
    /***/
  },

  /***/
  "./src/app/components/register-form/register-form.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/register-form/register-form.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterFormRegisterFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".textTitle {\n  font-size: xx-large;\n  font-weight: bolder;\n  color: #5570FF; }\n\n.title {\n  text-align: center; }\n\n.userType {\n  top: 49px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL0M6XFxVc2Vyc1xcZ2ZyYW5cXERvY3VtZW50c1xcQ0FJSkhDR1xcYXBwUmVwYXNvXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlZ2lzdGVyLWZvcm1cXHJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0VGl0bGV7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjNTU3MEZGO1xyXG59XHJcbi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udXNlclR5cGV7XHJcbiAgICB0b3A6IDQ5cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/register-form/register-form.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/register-form/register-form.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RegisterFormComponent */

  /***/
  function srcAppComponentsRegisterFormRegisterFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function () {
      return RegisterFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_docente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/docente.service */
    "./src/app/services/docente.service.ts");
    /* harmony import */


    var _services_estudiante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/estudiante.service */
    "./src/app/services/estudiante.service.ts");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _models_docente__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/docente */
    "./src/app/models/docente.ts");
    /* harmony import */


    var _models_usuario__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../models/usuario */
    "./src/app/models/usuario.ts");

    var RegisterFormComponent =
    /*#__PURE__*/
    function () {
      function RegisterFormComponent(navCtrl, docenteService, estudianteService, usuarioService, authenticationService) {
        _classCallCheck(this, RegisterFormComponent);

        this.navCtrl = navCtrl;
        this.docenteService = docenteService;
        this.estudianteService = estudianteService;
        this.usuarioService = usuarioService;
        this.authenticationService = authenticationService;
        this.newAvatarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleProfessor = false;
        this.visibleStudent = true;
        this.docentes = [];
        this.docentePrueba = new _models_docente__WEBPACK_IMPORTED_MODULE_7__["Docente"]();
        this.dataColected = false;
      }

      _createClass(RegisterFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectForm",
        value: function selectForm(event) {
          this.newAvatarEvent.emit(event);
          this.setVisible();
        }
        /**
         * Registro del docente y su cuenta de usuario con las credenciales para hacer login en el sistema
         * @param newDocente Objeto Docente con los datos obtenidos del form que viene del componente professor-form
         */

      }, {
        key: "create",
        value: function create(newDocente) {
          var _this3 = this;

          this.docenteService.createDocente(newDocente).then(function (docente) {
            console.log(docente);
            var newUsuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
            delete newUsuario._id;
            newUsuario.idUsuario = docente._id;
            newUsuario.email = localStorage.getItem('email');
            localStorage.removeItem('email');
            newUsuario.password = localStorage.getItem('password');
            localStorage.removeItem('password');
            newUsuario.tipo = "Docente";

            _this3.usuarioService.createUser(newUsuario).then(function (data) {
              _this3.authenticationService.saveToken(data.token);

              console.log("Detalles de usuario (token) => \n", _this3.authenticationService.getUserDetails());

              _this3.gotoAvatar();
            }).catch(function (err) {
              console.log("Error creando usuario => ", err);

              _this3.docenteService.deleteDocente(docente._id).then(function (res) {
                console.log(res);
              }).catch(function (err) {
                console.log(err);
              });
            });
          }).catch(function (err) {
            console.log("Error creando docente => ", err);
          });
        }
        /**
         * Registro del estudiante y su cuenta de usuario con las credenciales para hacer login en el sistema
         * @param newEstudiante Objeto Estudiante con los datos obtenidos del form que viene del componente student-form
         */

      }, {
        key: "createStudent",
        value: function createStudent(newEstudiante) {
          var _this4 = this;

          this.estudianteService.createEstudiante(newEstudiante).then(function (estudiante) {
            var newUsuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
            delete newUsuario._id;
            newUsuario.idUsuario = estudiante._id;
            newUsuario.email = localStorage.getItem('email');
            localStorage.removeItem('email');
            newUsuario.password = localStorage.getItem('password');
            localStorage.removeItem('password');
            newUsuario.tipo = "Estudiante";

            _this4.usuarioService.createUser(newUsuario).then(function (data) {
              _this4.authenticationService.saveToken(data.token);

              console.log("Detalles de usuario (token) => \n", _this4.authenticationService.getUserDetails());

              _this4.gotoAvatar();
            }).catch(function (err) {
              console.log("Error creando usuario => ", err);

              _this4.estudianteService.deleteEstudiante(estudiante._id).then(function (res) {
                console.log(res);
              }).catch(function (err) {
                console.log(err);
              });
            });
          }).catch(function (err) {
            console.log("Error creando estudiante => ", err);
          });
        }
        /* En este caso el status es el id que se almaceno
        create(docente: Docente) {
          console.log('register-form-component createDocente');
          console.log(docente);
          this.docenteService.createDocente(docente)
          .then(status => {localStorage.setItem('id', status.toString()); })
          .catch(err => console.log(err));
          localStorage.setItem('sexo', docente.sexo);
          localStorage.setItem('tipo', 'Docente');
          // console.log(this.idUsuario);
          this.gotoAvatar();
        }
            createStudent(estudiante: Estudiante) {
          console.log('register-form-component createStudent');
          console.log(estudiante);
          this.estudianteService.createEstudiante(estudiante)
          .then(status => {localStorage.setItem('id', status.toString()); })
          .catch(err => console.log(err));
          localStorage.setItem('sexo', estudiante.sexo);
          localStorage.setItem('tipo', 'Estudiante');
          this.gotoAvatar();
        }*/

        /**
         * ???
         */

      }, {
        key: "setVisible",
        value: function setVisible() {
          if (this.visibleStudent === false) {
            this.visibleStudent = true;
            this.visibleProfessor = false;
          } else {
            this.visibleStudent = false;
            this.visibleProfessor = true;
          }
        }
        /**
         * Meto que si el registro del Docente/Estudiante y su usuario son exitoso pasan a la pagina de escogencia del avatar para su cuenta
         */

      }, {
        key: "gotoAvatar",
        value: function gotoAvatar() {
          this.navCtrl.navigateForward('/avatar');
        }
      }, {
        key: "setDataColected",
        value: function setDataColected(colected) {
          this.dataColected = colected;
        }
      }]);

      return RegisterFormComponent;
    }();

    RegisterFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_docente_service__WEBPACK_IMPORTED_MODULE_3__["DocenteService"]
      }, {
        type: _services_estudiante_service__WEBPACK_IMPORTED_MODULE_4__["EstudianteService"]
      }, {
        type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterFormComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterFormComponent.prototype, "tipo1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], RegisterFormComponent.prototype, "tipo2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RegisterFormComponent.prototype, "newAvatarEvent", void 0);
    RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/register-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-form.component.scss */
      "./src/app/components/register-form/register-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_docente_service__WEBPACK_IMPORTED_MODULE_3__["DocenteService"], _services_estudiante_service__WEBPACK_IMPORTED_MODULE_4__["EstudianteService"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])], RegisterFormComponent);
    /***/
  },

  /***/
  "./src/app/components/register-form/student-form/student-form.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/register-form/student-form/student-form.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterFormStudentFormStudentFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnRegister {\n  width: 215px;\n  height: 47px; }\n\n.btnRegisterLocation {\n  top: 30px;\n  text-align: center; }\n\n.optionalText {\n  top: 25px;\n  text-align: center; }\n\n.btnLogin {\n  top: 11px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL3N0dWRlbnQtZm9ybS9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZWdpc3Rlci1mb3JtXFxzdHVkZW50LWZvcm1cXHN0dWRlbnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyLWZvcm0vc3R1ZGVudC1mb3JtL3N0dWRlbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5SZWdpc3RlcntcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIxNXB4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG59XHJcbi5idG5SZWdpc3RlckxvY2F0aW9ue1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0aW9uYWxUZXh0e1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuTG9naW57XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/register-form/student-form/student-form.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/register-form/student-form/student-form.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: StudentFormComponent */

  /***/
  function srcAppComponentsRegisterFormStudentFormStudentFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentFormComponent", function () {
      return StudentFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _models_estudiante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/estudiante */
    "./src/app/models/estudiante.ts");

    var StudentFormComponent =
    /*#__PURE__*/
    function () {
      function StudentFormComponent(navCtrl) {
        _classCallCheck(this, StudentFormComponent);

        this.navCtrl = navCtrl;
        this.createNewStudentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataColected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newEstudiante = new _models_estudiante__WEBPACK_IMPORTED_MODULE_3__["Estudiante"]();
      }

      _createClass(StudentFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setNombre",
        value: function setNombre(event) {
          this.newEstudiante.nombre = event.target.value;
        }
      }, {
        key: "setSexo",
        value: function setSexo(event) {
          this.newEstudiante.sexo = event.target.value;
        }
      }, {
        key: "setFechaNacimiento",
        value: function setFechaNacimiento(event) {
          this.newEstudiante.fechaNacimiento = event.target.value;
        }
      }, {
        key: "setGradoCurso",
        value: function setGradoCurso(event) {
          this.newEstudiante.grado = event.target.value;
        }
      }, {
        key: "setEmail",
        value: function setEmail(event) {
          localStorage.setItem('email', event.target.value);
        }
      }, {
        key: "setInstitucion",
        value: function setInstitucion(event) {
          this.newEstudiante.institucion = event.target.value;
        }
      }, {
        key: "setPassword",
        value: function setPassword(event) {
          localStorage.setItem('password', event.target.value);
        }
        /**
         * Llama a las funcion liga a ella en el componente padre para que se encargue del registro del estudiante y su respetivo usuario
         */

      }, {
        key: "create",
        value: function create() {
          delete this.newEstudiante._id;
          this.createNewStudentEvent.emit(this.newEstudiante);
          this.newEstudiante = new _models_estudiante__WEBPACK_IMPORTED_MODULE_3__["Estudiante"]();
          this.dataColected.emit(true);
        }
        /**
         * Lleva a la pantalla de inicio cuando se clickea el botón de iniciar sesión
         */

      }, {
        key: "goToInicio",
        value: function goToInicio() {
          this.navCtrl.navigateForward('/inicio');
        }
      }]);

      return StudentFormComponent;
    }();

    StudentFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "nombre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "genero1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "genero2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "fecha", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "gradoCurso", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "institucion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "botonRegistro", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StudentFormComponent.prototype, "botonLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], StudentFormComponent.prototype, "createNewStudentEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], StudentFormComponent.prototype, "dataColected", void 0);
    StudentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/student-form/student-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-form.component.scss */
      "./src/app/components/register-form/student-form/student-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], StudentFormComponent);
    /***/
  },

  /***/
  "./src/app/components/side-bar/menu-bar/menu-bar.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/side-bar/menu-bar/menu-bar.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarMenuBarMenuBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 237.13px;\n  height: 800px;\n  left: 0px;\n  top: 0px;\n  background: #5570FF; }\n\n.menuOptions {\n  margin-top: 50px; }\n\n.logoDimensions {\n  text-align: center;\n  width: 100px;\n  height: 100px;\n  margin-top: 30px;\n  margin-left: 60px; }\n\n.item {\n  cursor: pointer;\n  background: #5570FF;\n  color: #ffffff;\n  font-size: large; }\n\n.item ion-item:hover, .itemSelect {\n  color: #80AAE1; }\n\n.item ion-label {\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: -5%;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #80AAE1; }\n\n.item ion-item:hover ion-label, .itemSelect ion-label {\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: -5%;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF; }\n\n.item #dashboardIcon {\n  content: url('dashboardColor.svg'); }\n\n.item #freeModeIcon {\n  content: url('freeModeColor.svg'); }\n\n.item #notesIcon {\n  content: url('NotesColor.svg'); }\n\n.item #campaignIcon {\n  content: url('campaignColor.svg'); }\n\n.item #settingsIcon {\n  content: url('settingsColor.svg'); }\n\n.item ion-item:hover #dashboardIcon, .itemSelect #dashboardIcon {\n  content: url('dashboard.svg'); }\n\n.item ion-item:hover #freeModeIcon, .itemSelect #freeModeIcon {\n  content: url('freeMode.svg'); }\n\n.item ion-item:hover #notesIcon, .itemSelect #notesIcon {\n  content: url('Notes.svg'); }\n\n.item ion-item:hover #campaignIcon, .itemSelect #campaignIcon {\n  content: url('campaign.svg'); }\n\n.configuraciones {\n  margin-top: 270px; }\n\n.configuraciones ion-item:hover {\n  color: #f1f1f1;\n  font-size: large; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9tZW51LWJhci9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlLWJhclxcbWVudS1iYXJcXG1lbnUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztFQUNULFFBQVE7RUFDUixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBRVgsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFFdEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBRVgsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFFdEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtDQUF1RCxFQUFBOztBQUUzRDtFQUNJLGlDQUFzRCxFQUFBOztBQUUxRDtFQUNJLDhCQUFtRCxFQUFBOztBQUV2RDtFQUNJLGlDQUFzRCxFQUFBOztBQUUxRDtFQUNJLGlDQUFzRCxFQUFBOztBQUUxRDtFQUNJLDZCQUFrRCxFQUFBOztBQUV0RDtFQUNJLDRCQUFpRCxFQUFBOztBQUVyRDtFQUNJLHlCQUE4QyxFQUFBOztBQUVsRDtFQUNJLDRCQUFpRCxFQUFBOztBQUVyRDtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvbWVudS1iYXIvbWVudS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIzNy4xM3B4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU1NzBGRjsgIFxyXG59XHJcbi5tZW51T3B0aW9uc3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmxvZ29EaW1lbnNpb25ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG4uaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU3MEZGOyAgXHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuXHJcbn1cclxuLml0ZW0gaW9uLWl0ZW06aG92ZXIsIC5pdGVtU2VsZWN0IHtcclxuICAgIGNvbG9yOiAjODBBQUUxO1xyXG59XHJcbi5pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBib3R0b206IC01JTtcclxuXHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgY29sb3I6ICM4MEFBRTE7XHJcblxyXG59XHJcbi5pdGVtIGlvbi1pdGVtOmhvdmVyIGlvbi1sYWJlbCwgLml0ZW1TZWxlY3QgaW9uLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIGJvdHRvbTogLTUlO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLml0ZW0gI2Rhc2hib2FyZEljb24ge1xyXG4gICAgY29udGVudDogdXJsKFwic3JjL2Fzc2V0cy9pY29uL21lbnUvZGFzaGJvYXJkQ29sb3Iuc3ZnXCIpO1xyXG59XHJcbi5pdGVtICNmcmVlTW9kZUljb24ge1xyXG4gICAgY29udGVudDogdXJsKFwic3JjL2Fzc2V0cy9pY29uL21lbnUvZnJlZU1vZGVDb2xvci5zdmdcIik7XHJcbn1cclxuLml0ZW0gI25vdGVzSWNvbiB7XHJcbiAgICBjb250ZW50OiB1cmwoXCJzcmMvYXNzZXRzL2ljb24vbWVudS9Ob3Rlc0NvbG9yLnN2Z1wiKTtcclxufVxyXG4uaXRlbSAjY2FtcGFpZ25JY29uIHtcclxuICAgIGNvbnRlbnQ6IHVybChcInNyYy9hc3NldHMvaWNvbi9tZW51L2NhbXBhaWduQ29sb3Iuc3ZnXCIpO1xyXG59XHJcbi5pdGVtICNzZXR0aW5nc0ljb24ge1xyXG4gICAgY29udGVudDogdXJsKFwic3JjL2Fzc2V0cy9pY29uL21lbnUvc2V0dGluZ3NDb2xvci5zdmdcIik7XHJcbn1cclxuLml0ZW0gaW9uLWl0ZW06aG92ZXIgI2Rhc2hib2FyZEljb24sIC5pdGVtU2VsZWN0ICNkYXNoYm9hcmRJY29uIHtcclxuICAgIGNvbnRlbnQ6IHVybChcInNyYy9hc3NldHMvaWNvbi9tZW51L2Rhc2hib2FyZC5zdmdcIik7XHJcbn1cclxuLml0ZW0gaW9uLWl0ZW06aG92ZXIgI2ZyZWVNb2RlSWNvbiwgLml0ZW1TZWxlY3QgI2ZyZWVNb2RlSWNvbiB7XHJcbiAgICBjb250ZW50OiB1cmwoXCJzcmMvYXNzZXRzL2ljb24vbWVudS9mcmVlTW9kZS5zdmdcIik7XHJcbn1cclxuLml0ZW0gaW9uLWl0ZW06aG92ZXIgI25vdGVzSWNvbiwgLml0ZW1TZWxlY3QgI25vdGVzSWNvbiB7XHJcbiAgICBjb250ZW50OiB1cmwoXCJzcmMvYXNzZXRzL2ljb24vbWVudS9Ob3Rlcy5zdmdcIik7XHJcbn1cclxuLml0ZW0gaW9uLWl0ZW06aG92ZXIgI2NhbXBhaWduSWNvbiwgLml0ZW1TZWxlY3QgI2NhbXBhaWduSWNvbiB7XHJcbiAgICBjb250ZW50OiB1cmwoXCJzcmMvYXNzZXRzL2ljb24vbWVudS9jYW1wYWlnbi5zdmdcIik7XHJcbn1cclxuLmNvbmZpZ3VyYWNpb25lc3tcclxuICAgIG1hcmdpbi10b3A6IDI3MHB4O1xyXG59XHJcbi5jb25maWd1cmFjaW9uZXMgaW9uLWl0ZW06aG92ZXJ7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/menu-bar/menu-bar.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/side-bar/menu-bar/menu-bar.component.ts ***!
    \********************************************************************/

  /*! exports provided: MenuBarComponent */

  /***/
  function srcAppComponentsSideBarMenuBarMenuBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function () {
      return MenuBarComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var MenuBarComponent =
    /*#__PURE__*/
    function () {
      function MenuBarComponent(navCtrl) {
        _classCallCheck(this, MenuBarComponent);

        this.navCtrl = navCtrl;
      }

      _createClass(MenuBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goPanel",
        value: function goPanel() {
          this.selectedOption = this.opcion1;
          this.navCtrl.navigateForward('/panel');
        }
      }, {
        key: "goCampania",
        value: function goCampania() {
          this.selectedOption = this.opcion2;
          this.navCtrl.navigateForward('/inicio');
        }
      }, {
        key: "goLibre",
        value: function goLibre() {
          this.selectedOption = this.opcion3;
          this.navCtrl.navigateForward('/registro');
        }
      }, {
        key: "goFichas",
        value: function goFichas() {
          this.selectedOption = this.opcion4;
          this.navCtrl.navigateForward('/panel');
        }
      }, {
        key: "goConfiguraciones",
        value: function goConfiguraciones() {
          this.selectedOption = this.opcion5;
          this.navCtrl.navigateForward('/panel');
        }
      }]);

      return MenuBarComponent;
    }();

    MenuBarComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuBarComponent.prototype, "opcion1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuBarComponent.prototype, "opcion2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuBarComponent.prototype, "opcion3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuBarComponent.prototype, "opcion4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuBarComponent.prototype, "opcion5", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuBarComponent.prototype, "selectedOption", void 0);
    MenuBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/menu-bar/menu-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-bar.component.scss */
      "./src/app/components/side-bar/menu-bar/menu-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], MenuBarComponent);
    /***/
  },

  /***/
  "./src/app/components/side-bar/side-bar.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/side-bar/side-bar.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarSideBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".principal {\n  position: absolute;\n  width: 237.13px;\n  height: 800px;\n  left: 0px;\n  top: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9DOlxcVXNlcnNcXGdmcmFuXFxEb2N1bWVudHNcXENBSUpIQ0dcXGFwcFJlcGFzb1xccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlLWJhclxcc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjM3LjEzcHg7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICAvL2JhY2tncm91bmQ6ICM1NTcwRkY7ICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/side-bar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/side-bar/side-bar.component.ts ***!
    \***********************************************************/

  /*! exports provided: SideBarComponent */

  /***/
  function srcAppComponentsSideBarSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
      return SideBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SideBarComponent =
    /*#__PURE__*/
    function () {
      function SideBarComponent() {
        _classCallCheck(this, SideBarComponent);
      }

      _createClass(SideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SideBarComponent;
    }();

    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-bar.component.scss */
      "./src/app/components/side-bar/side-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SideBarComponent);
    /***/
  },

  /***/
  "./src/app/components/user-type/user-type.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/user-type/user-type.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserTypeUserTypeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci10eXBlL3VzZXItdHlwZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/user-type/user-type.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-type/user-type.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserTypeComponent */

  /***/
  function srcAppComponentsUserTypeUserTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTypeComponent", function () {
      return UserTypeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserTypeComponent =
    /*#__PURE__*/
    function () {
      function UserTypeComponent() {
        _classCallCheck(this, UserTypeComponent);
      }

      _createClass(UserTypeComponent, [{
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          console.log('Segment changed', ev);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserTypeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], UserTypeComponent.prototype, "type1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], UserTypeComponent.prototype, "type2", void 0);
    UserTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-type',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-type.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-type/user-type.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-type.component.scss */
      "./src/app/components/user-type/user-type.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UserTypeComponent);
    /***/
  },

  /***/
  "./src/app/models/docente.ts":
  /*!***********************************!*\
    !*** ./src/app/models/docente.ts ***!
    \***********************************/

  /*! exports provided: Docente */

  /***/
  function srcAppModelsDocenteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Docente", function () {
      return Docente;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Docente = function Docente() {
      var _id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var nombre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var sexo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var fechaNacimiento = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var especialidad = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var editable = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      _classCallCheck(this, Docente);

      this._id = _id;
      this.nombre = nombre;
      this.sexo = sexo;
      this.fechaNacimiento = fechaNacimiento;
      this.especialidad = especialidad;
      this.editable = editable;
    };
    /***/

  },

  /***/
  "./src/app/models/estudiante.ts":
  /*!**************************************!*\
    !*** ./src/app/models/estudiante.ts ***!
    \**************************************/

  /*! exports provided: Estudiante */

  /***/
  function srcAppModelsEstudianteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Estudiante", function () {
      return Estudiante;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Estudiante = function Estudiante() {
      var _id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var nombre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var sexo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var fechaNacimiento = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var grado = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var institucion = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
      var editable = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      _classCallCheck(this, Estudiante);

      this._id = _id;
      this.nombre = nombre;
      this.sexo = sexo;
      this.fechaNacimiento = fechaNacimiento;
      this.grado = grado;
      this.institucion = institucion;
      this.editable = editable;
    };
    /***/

  },

  /***/
  "./src/app/models/usuario.ts":
  /*!***********************************!*\
    !*** ./src/app/models/usuario.ts ***!
    \***********************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppModelsUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Usuario = function Usuario() {
      var _id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var idUsuario = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var password = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var tipo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var avatar = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'none';
      var editable = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      _classCallCheck(this, Usuario);

      this._id = _id;
      this.idUsuario = idUsuario;
      this.email = email;
      this.password = password;
      this.tipo = tipo;
      this.avatar = avatar;
      this.editable = editable;
    };
    /***/

  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
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


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(auth, router) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/inicio');
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, router) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
      }

      _createClass(AuthenticationService, [{
        key: "saveToken",
        value: function saveToken(token) {
          localStorage.setItem('token', token);
          this.token = token;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          if (!this.token) {
            this.token = localStorage.getItem('token');
          }

          return this.token;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = '';
          window.localStorage.removeItem('token');
          this.router.navigateByUrl('/inicio');
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var token = this.getToken();
          var payload;

          if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
          } else {
            return null;
          }
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var user = this.getUserDetails();

          if (user) {
            return user.exp > Date.now() / 1000;
          } else {
            return false;
          }
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/docente.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/docente.service.ts ***!
    \*********************************************/

  /*! exports provided: DocenteService */

  /***/
  function srcAppServicesDocenteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocenteService", function () {
      return DocenteService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_docente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/docente */
    "./src/app/models/docente.ts");

    var DocenteService =
    /*#__PURE__*/
    function () {
      function DocenteService(http) {
        _classCallCheck(this, DocenteService);

        this.http = http;
        this.URL_API = 'http://localhost:3000/api/docentes';
        this.docenteSeleccionado = new _models_docente__WEBPACK_IMPORTED_MODULE_3__["Docente"]();
      }
      /**
       * Servicio de sollicitud al servidor de creacion de un docente
       * @param docente JSON con datos del docente
       */


      _createClass(DocenteService, [{
        key: "createDocente",
        value: function createDocente(docente) {
          return this.http.post(this.URL_API, docente).toPromise();
        }
        /**
         * Servicio de solicitud al servidor de eliminacion de un docente
         * @param _id ID de un docente
         */

      }, {
        key: "deleteDocente",
        value: function deleteDocente(_id) {
          return this.http.delete(this.URL_API + "/".concat(_id)).toPromise();
        }
      }, {
        key: "getDocentes",
        value: function getDocentes() {
          return this.http.get(this.URL_API).toPromise();
        }
      }, {
        key: "getDocente",
        value: function getDocente(_id) {
          return this.http.get(this.URL_API + "/".concat(_id)).toPromise();
        }
      }, {
        key: "updateDocente",
        value: function updateDocente(docente) {
          this.http.put(this.URL_API + "/".concat(docente._id), docente).toPromise();
        }
      }]);

      return DocenteService;
    }();

    DocenteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DocenteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], DocenteService);
    /***/
  },

  /***/
  "./src/app/services/estudiante.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/estudiante.service.ts ***!
    \************************************************/

  /*! exports provided: EstudianteService */

  /***/
  function srcAppServicesEstudianteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudianteService", function () {
      return EstudianteService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EstudianteService =
    /*#__PURE__*/
    function () {
      function EstudianteService(http) {
        _classCallCheck(this, EstudianteService);

        this.http = http;
        this.URL_API = 'http://localhost:3000/api/estudiantes';
      }
      /**
       * Servicio de sollicitud al servidor de creacion de un estudiante
       * @param estudiante JSON con datos del estudiante
       */


      _createClass(EstudianteService, [{
        key: "createEstudiante",
        value: function createEstudiante(estudiante) {
          return this.http.post(this.URL_API, estudiante).toPromise();
        }
        /**
         * Servicio de solicitud al servidor de eliminacion de un estudiante
         * @param _id ID de un estudiante
         */

      }, {
        key: "deleteEstudiante",
        value: function deleteEstudiante(_id) {
          return this.http.delete(this.URL_API + "/".concat(_id)).toPromise();
        }
      }, {
        key: "getEstudiantes",
        value: function getEstudiantes() {
          return this.http.get(this.URL_API).toPromise();
        }
      }, {
        key: "getEstudiante",
        value: function getEstudiante(_id) {
          return this.http.get(this.URL_API + "/".concat(_id)).toPromise();
        }
      }, {
        key: "updateEstudiante",
        value: function updateEstudiante(estudiante) {
          this.http.put(this.URL_API + "/".concat(estudiante._id), estudiante).toPromise();
        }
      }]);

      return EstudianteService;
    }();

    EstudianteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EstudianteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], EstudianteService);
    /***/
  },

  /***/
  "./src/app/services/usuario.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/usuario.service.ts ***!
    \*********************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UsuarioService =
    /*#__PURE__*/
    function () {
      function UsuarioService(http) {
        _classCallCheck(this, UsuarioService);

        this.http = http;
        this.URL_API = 'http://localhost:3000/api/users';
      }
      /**
       * Servicio de creacion de un usuario
       * @param user JSON con datos del usuario
       */


      _createClass(UsuarioService, [{
        key: "createUser",
        value: function createUser(user) {
          return this.http.post(this.URL_API + '/signup', user).toPromise();
        }
        /**
         * Servicio para asignar el avatar del usuario
         * @param user Json con el id del usuario y el avatar
         */

      }, {
        key: "updateAvatar",
        value: function updateAvatar(user) {
          return this.http.put(this.URL_API + '/put_avatar', user).toPromise();
        }
      }, {
        key: "loginUser",
        value: function loginUser(user) {
          return this.http.post(this.URL_API + '/signin', user).toPromise();
        }
      }, {
        key: "createUsuario",
        value: function createUsuario(usuario) {
          return this.http.post(this.URL_API, usuario).toPromise();
        }
      }, {
        key: "getUsuarioLogin",
        value: function getUsuarioLogin(email, password) {
          return this.http.get(this.URL_API + "/".concat(email) + "/".concat(password));
        }
      }, {
        key: "getUsuarios",
        value: function getUsuarios() {
          return this.http.get(this.URL_API, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.getItem('token'))
            }
          }).toPromise();
        }
      }, {
        key: "getUsuario",
        value: function getUsuario(_id) {
          return this.http.get(this.URL_API + "/".concat(_id)).toPromise();
        }
      }, {
        key: "updateUsuario",
        value: function updateUsuario(usuario) {
          this.http.put(this.URL_API + "/".concat(usuario._id), usuario).toPromise();
        }
      }, {
        key: "deleteUsuario",
        value: function deleteUsuario(_id) {
          return this.http.delete(this.URL_API + "/".concat(_id)).toPromise();
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UsuarioService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\gfran\Documents\CAIJHCG\appRepaso\public\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map