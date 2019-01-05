(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-static-module"],{

/***/ "./src/app/static/components/author-list/author-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/static/components/author-list/author-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9jb21wb25lbnRzL2F1dGhvci1saXN0L2F1dGhvci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/static/components/author-list/author-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/static/components/author-list/author-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    pageName=\"Autorzy\"\n></app-breadcrumb>\n\n<p>\n    Lista autorów projektu:\n</p>\n\n<ul>\n    <li>\n        Piotr Kowalski <a href=\"https://twitter.com/piecioshka\">@piecioshka</a>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/static/components/author-list/author-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/static/components/author-list/author-list.component.ts ***!
  \************************************************************************/
/*! exports provided: AuthorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListComponent", function() { return AuthorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthorListComponent = /** @class */ (function () {
    function AuthorListComponent() {
    }
    AuthorListComponent.prototype.ngOnInit = function () {
    };
    AuthorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-author-list',
            template: __webpack_require__(/*! ./author-list.component.html */ "./src/app/static/components/author-list/author-list.component.html"),
            styles: [__webpack_require__(/*! ./author-list.component.css */ "./src/app/static/components/author-list/author-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthorListComponent);
    return AuthorListComponent;
}());



/***/ }),

/***/ "./src/app/static/static-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/static/static-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StaticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRoutingModule", function() { return StaticRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/author-list/author-list.component */ "./src/app/static/components/author-list/author-list.component.ts");




var routes = [
    {
        path: '',
        component: _components_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_3__["AuthorListComponent"]
    }
];
var StaticRoutingModule = /** @class */ (function () {
    function StaticRoutingModule() {
    }
    StaticRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StaticRoutingModule);
    return StaticRoutingModule;
}());



/***/ }),

/***/ "./src/app/static/static.module.ts":
/*!*****************************************!*\
  !*** ./src/app/static/static.module.ts ***!
  \*****************************************/
/*! exports provided: StaticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticModule", function() { return StaticModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/author-list/author-list.component */ "./src/app/static/components/author-list/author-list.component.ts");
/* harmony import */ var _static_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-routing.module */ "./src/app/static/static-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var StaticModule = /** @class */ (function () {
    function StaticModule() {
    }
    StaticModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_3__["AuthorListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _static_routing_module__WEBPACK_IMPORTED_MODULE_4__["StaticRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ]
        })
    ], StaticModule);
    return StaticModule;
}());



/***/ })

}]);
//# sourceMappingURL=static-static-module.js.map