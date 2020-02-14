(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-panel-panel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/panel/panel.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/panel/panel.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"principal\">\r\n    <ion-grid>\r\n      <ion-row >\r\n        <ion-col class=\"sidebar\" >\r\n          <app-side-bar></app-side-bar>\r\n        </ion-col>\r\n        <ion-col class=\"dashboard\">\r\n          <app-dashboard></app-dashboard>\r\n        </ion-col>\r\n        <ion-col class=\"profilebar\">\r\n          <app-profile-bar></app-profile-bar>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/panel/panel-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/panel/panel-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PanelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelPageRoutingModule", function() { return PanelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _panel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel.page */ "./src/app/pages/panel/panel.page.ts");




const routes = [
    {
        path: '',
        component: _panel_page__WEBPACK_IMPORTED_MODULE_3__["PanelPage"]
    }
];
let PanelPageRoutingModule = class PanelPageRoutingModule {
};
PanelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PanelPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/panel/panel.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/panel/panel.module.ts ***!
  \*********************************************/
/*! exports provided: PanelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelPageModule", function() { return PanelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _panel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel-routing.module */ "./src/app/pages/panel/panel-routing.module.ts");
/* harmony import */ var _panel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel.page */ "./src/app/pages/panel/panel.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let PanelPageModule = class PanelPageModule {
};
PanelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _panel_routing_module__WEBPACK_IMPORTED_MODULE_5__["PanelPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_panel_page__WEBPACK_IMPORTED_MODULE_6__["PanelPage"]]
    })
], PanelPageModule);



/***/ }),

/***/ "./src/app/pages/panel/panel.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/panel/panel.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".principal {\n  top: 0px;\n}\n\n.sidebar {\n  position: absolute;\n  left: 0px;\n  width: 237.13px;\n}\n\n.dashboard {\n  position: absolute;\n  width: 765.87px;\n  left: 237.13px;\n  right: 0px;\n  top: 0px;\n}\n\n.profilebar {\n  position: absolute;\n  width: 277px;\n  left: 1003px;\n  right: 140px;\n  top: 0px;\n}\n\n.achievements {\n  position: absolute;\n  left: 237.13px;\n  right: 0px;\n  top: 0px;\n}\n\n.campaign {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFuZWwvQzpcXFVzZXJzXFxnZnJhblxcRGVza3RvcFxcVEVDQV9IZXJva3VcXHB1YmxpYy9zcmNcXGFwcFxccGFnZXNcXHBhbmVsXFxwYW5lbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhbmVsL3BhbmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLFFBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNHLGtCQUFBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0FKOztBREVBO0VBQ0csa0JBQUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFuZWwvcGFuZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIC8vd2lkdGg6IDEyODBweDtcclxuICAgIC8vaGVpZ2h0OiA4MDBweDtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcbi5zaWRlYmFye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDIzNy4xM3B4O1xyXG4gICAgLy8gdG9wOjBweDtcclxufVxyXG4uZGFzaGJvYXJke1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNzY1Ljg3cHg7XHJcbiAgICBsZWZ0OjIzNy4xM3B4OztcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6MHB4O1xyXG59XHJcbi5wcm9maWxlYmFye1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjc3cHg7XHJcbiAgICBsZWZ0OjEwMDNweDtcclxuICAgIHJpZ2h0OiAxNDBweDsgIFxyXG4gICAgdG9wOjBweDtcclxufVxyXG4uYWNoaWV2ZW1lbnRzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MjM3LjEzcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOjBweDtcclxufVxyXG4uY2FtcGFpZ24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDowcHg7XHJcbn0iLCIucHJpbmNpcGFsIHtcbiAgdG9wOiAwcHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAyMzcuMTNweDtcbn1cblxuLmRhc2hib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDc2NS44N3B4O1xuICBsZWZ0OiAyMzcuMTNweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5wcm9maWxlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjc3cHg7XG4gIGxlZnQ6IDEwMDNweDtcbiAgcmlnaHQ6IDE0MHB4O1xuICB0b3A6IDBweDtcbn1cblxuLmFjaGlldmVtZW50cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjM3LjEzcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuXG4uY2FtcGFpZ24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/panel/panel.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/panel/panel.page.ts ***!
  \*******************************************/
/*! exports provided: PanelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelPage", function() { return PanelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PanelPage = class PanelPage {
    constructor() { }
    ngOnInit() {
    }
};
PanelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./panel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/panel/panel.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./panel.page.scss */ "./src/app/pages/panel/panel.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PanelPage);

/*
<ion-content class="principal">
    <ion-grid>
      <ion-row >
        <ion-col class="sidebar" >
          <app-side-bar></app-side-bar>
        </ion-col>
        <ion-col class="dashboard">
          <app-dashboard></app-dashboard>
        </ion-col>
        <ion-col class="profilebar">
          <app-profile-bar></app-profile-bar>
        </ion-col>
      </ion-row>
    </ion-grid>

</ion-content>

    */ 


/***/ })

}]);
//# sourceMappingURL=pages-panel-panel-module-es2015.js.map