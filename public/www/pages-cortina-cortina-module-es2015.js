(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cortina-cortina-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cortina/cortina.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cortina/cortina.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <app-curtain></app-curtain>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/cortina/cortina-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cortina/cortina-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CortinaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CortinaPageRoutingModule", function() { return CortinaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cortina_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cortina.page */ "./src/app/pages/cortina/cortina.page.ts");




const routes = [
    {
        path: '',
        component: _cortina_page__WEBPACK_IMPORTED_MODULE_3__["CortinaPage"]
    }
];
let CortinaPageRoutingModule = class CortinaPageRoutingModule {
};
CortinaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CortinaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cortina/cortina.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/cortina/cortina.module.ts ***!
  \*************************************************/
/*! exports provided: CortinaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CortinaPageModule", function() { return CortinaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cortina_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cortina-routing.module */ "./src/app/pages/cortina/cortina-routing.module.ts");
/* harmony import */ var _cortina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cortina.page */ "./src/app/pages/cortina/cortina.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let CortinaPageModule = class CortinaPageModule {
};
CortinaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cortina_routing_module__WEBPACK_IMPORTED_MODULE_5__["CortinaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_cortina_page__WEBPACK_IMPORTED_MODULE_6__["CortinaPage"]]
    })
], CortinaPageModule);



/***/ }),

/***/ "./src/app/pages/cortina/cortina.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/cortina/cortina.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvcnRpbmEvY29ydGluYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/cortina/cortina.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/cortina/cortina.page.ts ***!
  \***********************************************/
/*! exports provided: CortinaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CortinaPage", function() { return CortinaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CortinaPage = class CortinaPage {
    constructor() { }
    ngOnInit() {
    }
};
CortinaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cortina',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cortina.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cortina/cortina.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cortina.page.scss */ "./src/app/pages/cortina/cortina.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CortinaPage);



/***/ })

}]);
//# sourceMappingURL=pages-cortina-cortina-module-es2015.js.map