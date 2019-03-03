(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/core/app-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/core/app.routes.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var options = {};
if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].enableRoutingHashStrategy) {
    options.useHash = true;
}
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["routes"], options)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/app.module.ts":
/*!************************************!*\
  !*** ./src/app/core/app.module.ts ***!
  \************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/core/components/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/core/app-routing.module.ts");
/* harmony import */ var _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-home/page-home.component */ "./src/app/core/pages/page-home/page-home.component.ts");
/* harmony import */ var _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-contact/page-contact.component */ "./src/app/core/pages/page-contact/page-contact.component.ts");
/* harmony import */ var _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-movie-list/page-movie-list.component */ "./src/app/core/pages/page-movie-list/page-movie-list.component.ts");
/* harmony import */ var _pages_page_movie_not_found_page_movie_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-movie-not-found/page-movie-not-found.component */ "./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.ts");
/* harmony import */ var _pages_page_movie_profile_page_movie_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-movie-profile/page-movie-profile.component */ "./src/app/core/pages/page-movie-profile/page-movie-profile.component.ts");
/* harmony import */ var _pages_page_search_page_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page-search/page-search.component */ "./src/app/core/pages/page-search/page-search.component.ts");
/* harmony import */ var _pages_page_user_registration_page_user_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-user-registration/page-user-registration.component */ "./src/app/core/pages/page-user-registration/page-user-registration.component.ts");
/* harmony import */ var _pages_page_user_login_page_user_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-user-login/page-user-login.component */ "./src/app/core/pages/page-user-login/page-user-login.component.ts");
/* harmony import */ var _pages_page_user_logout_page_user_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/page-user-logout/page-user-logout.component */ "./src/app/core/pages/page-user-logout/page-user-logout.component.ts");
/* harmony import */ var _pages_page_author_list_page_author_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/page-author-list/page-author-list.component */ "./src/app/core/pages/page-author-list/page-author-list.component.ts");
/* harmony import */ var _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user-menu/user-menu.component */ "./src/app/core/components/user-menu/user-menu.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/core/components/menu/menu.component.ts");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "./src/app/core/components/movie-list/movie-list.component.ts");
/* harmony import */ var _components_movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/movie-list-item/movie-list-item.component */ "./src/app/core/components/movie-list-item/movie-list-item.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/core/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/core/components/header/header.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_9__["PageHomeComponent"],
                _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_10__["PageContactComponent"],
                _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_11__["PageMovieListComponent"],
                _pages_page_movie_not_found_page_movie_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageMovieNotFoundComponent"],
                _pages_page_movie_profile_page_movie_profile_component__WEBPACK_IMPORTED_MODULE_13__["PageMovieProfileComponent"],
                _pages_page_search_page_search_component__WEBPACK_IMPORTED_MODULE_14__["PageSearchComponent"],
                _pages_page_user_registration_page_user_registration_component__WEBPACK_IMPORTED_MODULE_15__["PageUserRegistrationComponent"],
                _pages_page_user_login_page_user_login_component__WEBPACK_IMPORTED_MODULE_16__["PageUserLoginComponent"],
                _pages_page_user_logout_page_user_logout_component__WEBPACK_IMPORTED_MODULE_17__["PageUserLogoutComponent"],
                _pages_page_author_list_page_author_list_component__WEBPACK_IMPORTED_MODULE_18__["PageAuthorListComponent"],
                _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_19__["UserMenuComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__["MenuComponent"],
                _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_21__["MovieListComponent"],
                _components_movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_22__["MovieListItemComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_23__["PageNotFoundComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: 'test-angular-youtube' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/app.routes.ts":
/*!************************************!*\
  !*** ./src/app/core/app.routes.ts ***!
  \************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var src_app_core_pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/pages/page-home/page-home.component */ "./src/app/core/pages/page-home/page-home.component.ts");
/* harmony import */ var src_app_core_pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pages/page-contact/page-contact.component */ "./src/app/core/pages/page-contact/page-contact.component.ts");
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-movie-list/page-movie-list.component */ "./src/app/core/pages/page-movie-list/page-movie-list.component.ts");
/* harmony import */ var _pages_page_movie_not_found_page_movie_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-movie-not-found/page-movie-not-found.component */ "./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.ts");
/* harmony import */ var _pages_page_movie_profile_page_movie_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-movie-profile/page-movie-profile.component */ "./src/app/core/pages/page-movie-profile/page-movie-profile.component.ts");
/* harmony import */ var _pages_page_search_page_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-search/page-search.component */ "./src/app/core/pages/page-search/page-search.component.ts");
/* harmony import */ var _pages_page_author_list_page_author_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-author-list/page-author-list.component */ "./src/app/core/pages/page-author-list/page-author-list.component.ts");
/* harmony import */ var _pages_page_user_registration_page_user_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-user-registration/page-user-registration.component */ "./src/app/core/pages/page-user-registration/page-user-registration.component.ts");
/* harmony import */ var _pages_page_user_login_page_user_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-user-login/page-user-login.component */ "./src/app/core/pages/page-user-login/page-user-login.component.ts");
/* harmony import */ var _pages_page_user_logout_page_user_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-user-logout/page-user-logout.component */ "./src/app/core/pages/page-user-logout/page-user-logout.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/core/pages/page-not-found/page-not-found.component.ts");












var routes = [
    {
        path: '',
        component: src_app_core_pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__["PageHomeComponent"]
    },
    {
        path: 'contact',
        component: src_app_core_pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_1__["PageContactComponent"]
    },
    {
        path: 'movies',
        children: [
            {
                path: '',
                component: _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["PageMovieListComponent"]
            },
            {
                path: 'not-found',
                component: _pages_page_movie_not_found_page_movie_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageMovieNotFoundComponent"]
            },
            {
                path: ':id',
                component: _pages_page_movie_profile_page_movie_profile_component__WEBPACK_IMPORTED_MODULE_5__["PageMovieProfileComponent"]
            }
        ]
    },
    {
        path: 'search',
        children: [
            {
                path: ':query',
                component: _pages_page_search_page_search_component__WEBPACK_IMPORTED_MODULE_6__["PageSearchComponent"]
            }
        ]
    },
    {
        path: 'user',
        children: [
            {
                path: 'register',
                component: _pages_page_user_registration_page_user_registration_component__WEBPACK_IMPORTED_MODULE_8__["PageUserRegistrationComponent"]
            },
            {
                path: 'login',
                component: _pages_page_user_login_page_user_login_component__WEBPACK_IMPORTED_MODULE_9__["PageUserLoginComponent"]
            },
            {
                path: 'logout',
                component: _pages_page_user_logout_page_user_logout_component__WEBPACK_IMPORTED_MODULE_10__["PageUserLogoutComponent"]
            }
        ]
    },
    {
        path: 'authors',
        children: [
            {
                path: '',
                component: _pages_page_author_list_page_author_list_component__WEBPACK_IMPORTED_MODULE_7__["PageAuthorListComponent"]
            }
        ],
        canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
    },
];


/***/ }),

/***/ "./src/app/core/components/app/app.component.css":
/*!*******************************************************!*\
  !*** ./src/app/core/components/app/app.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n    width: 960px;\n    margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDk2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/components/app/app.component.html":
/*!********************************************************!*\
  !*** ./src/app/core/components/app/app.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\n    <app-user-menu></app-user-menu>\n\n    <app-header></app-header>\n\n    <app-menu></app-menu>\n\n    <router-outlet></router-outlet>\n\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/app/app.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/app/app.component.ts ***!
  \******************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/core/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/core/components/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center bg-light py-2 my-4\">\n    Copyright 2019 &copy;\n    <a routerLink=\"/authors\">Autorzy</a>\n\n    <span *ngIf=\"!isAuthorizedUser\">\n        (Dostęp tylko dla zalogowanych)\n    </span>\n</footer>\n"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(auth) {
        this.auth = auth;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FooterComponent.prototype, "isAuthorizedUser", {
        get: function () {
            return this.auth.isUserLogged();
        },
        enumerable: true,
        configurable: true
    });
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/header/header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"row\">\n    <div class=\"col-6\">\n        <h1 routerLink='/'>YouTube</h1>\n        <p class=\"page-lead\">Zobacz swoje ulubione filmy!</p>\n    </div>\n    <div class=\"col-6\">\n        <app-search-form class=\"text-right\"></app-search-form>\n    </div>\n</header>\n"

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/menu/menu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/core/components/menu/menu.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/components/menu/menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/menu/menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"py-3\">\n    <ul class=\"nav\">\n        <li class=\"nav-item pr-1\">\n            <a\n                class=\"btn btn-outline-primary\"\n                routerLink=\"/\"\n                routerLinkActive=\"btn-primary text-white\"\n                [routerLinkActiveOptions]=\"{ exact: true }\"\n            >\n                Strona główna\n            </a>\n        </li>\n        <li class=\"nav-item pr-1\">\n            <a\n                class=\"btn btn-outline-primary\"\n                routerLink=\"/movies\"\n                routerLinkActive=\"btn-primary text-white\"\n                [routerLinkActiveOptions]=\"{ exact: true }\"\n            >\n                Filmy\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"btn btn-outline-primary\"\n                routerLink=\"/contact\"\n                routerLinkActive=\"btn-primary text-white\"\n                [routerLinkActiveOptions]=\"{ exact: true }\"\n            >\n                Kontakt\n            </a>\n        </li>\n    </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/components/menu/menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/menu/menu.component.ts ***!
  \********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/core/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/core/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/components/movie-list-item/movie-list-item.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/core/components/movie-list-item/movie-list-item.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n    width: 300px;\n}\n\nimg {\n    height: 225px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21vdmllLWxpc3QtaXRlbS9tb3ZpZS1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tb3ZpZS1saXN0LWl0ZW0vbW92aWUtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogMjI1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/components/movie-list-item/movie-list-item.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/movie-list-item/movie-list-item.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"movie\">\n    <div class=\"card\">\n        <a [routerLink]=\"['/movies/' + movie.id]\">\n            <app-image\n                class=\"card-img-top\"\n                [src]=\"movie.thumb_url\"\n            ></app-image>\n        </a>\n\n        <div class=\"card-body\">\n            <h3 class=\"card-title\">\n                {{ movie.title }}\n                <small *ngIf=\"movie.year\">({{ movie.year }})</small>\n            </h3>\n\n            <p\n                *ngIf=\"movie.duration\"\n                class=\"card-text\"\n            >\n                Czas trwania: {{ movie.duration }} minut\n            </p>\n\n            <a\n                [routerLink]=\"['/movies/' + movie.id]\"\n                class=\"btn btn-primary\"\n            >\n                Zobacz profil\n            </a>\n        </div>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/core/components/movie-list-item/movie-list-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/movie-list-item/movie-list-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: MovieListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListItemComponent", function() { return MovieListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieListItemComponent = /** @class */ (function () {
    function MovieListItemComponent() {
        this.movie = null;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieListItemComponent.prototype, "movie", void 0);
    MovieListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list-item',
            template: __webpack_require__(/*! ./movie-list-item.component.html */ "./src/app/core/components/movie-list-item/movie-list-item.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-item.component.css */ "./src/app/core/components/movie-list-item/movie-list-item.component.css")]
        })
    ], MovieListItemComponent);
    return MovieListItemComponent;
}());



/***/ }),

/***/ "./src/app/core/components/movie-list/movie-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/components/movie-list/movie-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/movie-list/movie-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/movie-list/movie-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p\n    *ngIf=\"!movies\"\n    class=\"alert alert-info\"\n    role=\"alert\"\n>\n    Trwa pobieranie filmów...\n</p>\n\n<div\n    *ngIf=\"movies?.length === 0\"\n    class=\"alert alert-warning\"\n    role=\"alert\"\n>\n    <h2>Ups...</h2>\n\n    <p>Lista filmów jest pusta!</p>\n</div>\n\n<div class=\"row mb-3\">\n    <div\n        *ngIf=\"movies?.length > 0\"\n        class=\"col-12 text-right\"\n    >\n        <span class=\"mr-1\">\n            Sortowanie:\n        </span>\n\n        <button\n            (click)=\"sortAscending()\"\n            class=\"btn btn-outline-primary mr-1\"\n        >\n            🔼\n        </button>\n\n        <button\n            (click)=\"sortDescending()\"\n            class=\"btn btn-outline-primary\"\n        >\n            🔽\n        </button>\n    </div>\n</div>\n\n<div id=\"movie-list\">\n    <ul class=\"list-unstyled d-flex flex-wrap justify-content-between\">\n        <li\n            *ngFor=\"let movie of movies | paginate: { itemsPerPage: perPage, currentPage: page }\"\n            class=\"mb-4\"\n        >\n            <app-movie-list-item [movie]=\"movie\"></app-movie-list-item>\n        </li>\n    </ul>\n</div>\n\n<div class=\"text-center\" *ngIf=\"shouldDisplayPagination\">\n    <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/movie-list/movie-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/movie-list/movie-list.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent() {
        this.perPage = 6;
        this.page = 1;
        this.movies = null;
    }
    MovieListComponent.prototype.sortAscending = function () {
        this.movies = this.movies.sort(this.ascending);
    };
    MovieListComponent.prototype.sortDescending = function () {
        var _this = this;
        this.movies = this.movies.sort(function (a, b) {
            return _this.ascending(a, b) * (-1);
        });
    };
    MovieListComponent.prototype.ascending = function (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    };
    Object.defineProperty(MovieListComponent.prototype, "shouldDisplayPagination", {
        get: function () {
            if (!this.movies) {
                return false;
            }
            return this.movies.length > this.perPage;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieListComponent.prototype, "perPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieListComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MovieListComponent.prototype, "movies", void 0);
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/core/components/movie-list/movie-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/core/components/movie-list/movie-list.component.css")]
        })
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/core/components/user-menu/user-menu.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/user-menu/user-menu.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/user-menu/user-menu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/user-menu/user-menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark flex-row-reverse\">\n    <div *ngIf=\"!userIsLogged\">\n        <ul class=\"nav\">\n            <li class=\"nav-item pr-2\">\n                <a\n                    class=\"btn btn-secondary btn-sm\"\n                    routerLink=\"/user/register\"\n                >\n                    Register\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a\n                    class=\"btn btn-secondary btn-sm\"\n                    routerLink=\"/user/login\"\n                >\n                    Login\n                </a>\n            </li>\n        </ul>\n    </div>\n\n    <div *ngIf=\"userIsLogged\">\n        <ul class=\"nav\">\n            <li class=\"nav-item pr-2\">\n                <span class=\"badge badge-warning\">\n                    {{ userName }}\n                </span>\n            </li>\n            <li class=\"nav-item\">\n                <a\n                    class=\"btn btn-secondary btn-sm\"\n                    routerLink=\"/user/logout\"\n                >\n                    Logout\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/components/user-menu/user-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/user-menu/user-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");





var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.userIsLogged = false;
        this.userName = null;
    }
    UserMenuComponent.prototype.ngOnInit = function () {
        this.updateUserLoggedStatus();
    };
    UserMenuComponent.prototype.updateUserLoggedStatus = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.userIsLogged = _this.auth.isUserLogged();
            _this.userName = _this.auth.getUserName();
        });
    };
    UserMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/core/components/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.css */ "./src/app/core/components/user-menu/user-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");




var console = {
    log: debug__WEBPACK_IMPORTED_MODULE_2__('youtube:auth-guard')
};
var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth) {
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var status = this.auth.isUserLogged();
        console.log("status=" + status);
        return status;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/models/user-model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/user-model.ts ***!
  \*******************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(username, email, password, sex) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.sex = sex;
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/core/pages/page-author-list/page-author-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/core/pages/page-author-list/page-author-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1hdXRob3ItbGlzdC9wYWdlLWF1dGhvci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/pages/page-author-list/page-author-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/core/pages/page-author-list/page-author-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    [segments]=\"['Autorzy']\"\n></app-breadcrumb>\n\n<p>\n    Lista autorów projektu:\n</p>\n\n<ul>\n    <li>\n        Piotr Kowalski <a href=\"https://twitter.com/piecioshka\">@piecioshka</a>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/core/pages/page-author-list/page-author-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/page-author-list/page-author-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageAuthorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAuthorListComponent", function() { return PageAuthorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageAuthorListComponent = /** @class */ (function () {
    function PageAuthorListComponent() {
    }
    PageAuthorListComponent.prototype.ngOnInit = function () {
    };
    PageAuthorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-author-list',
            template: __webpack_require__(/*! ./page-author-list.component.html */ "./src/app/core/pages/page-author-list/page-author-list.component.html"),
            styles: [__webpack_require__(/*! ./page-author-list.component.css */ "./src/app/core/pages/page-author-list/page-author-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageAuthorListComponent);
    return PageAuthorListComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-contact/page-contact.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/pages/page-contact/page-contact.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1jb250YWN0L3BhZ2UtY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/pages/page-contact/page-contact.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/pages/page-contact/page-contact.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    [segments]=\"['Kontakt']\"\n></app-breadcrumb>\n\n<p>Formularz kontaktowy...</p>\n"

/***/ }),

/***/ "./src/app/core/pages/page-contact/page-contact.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/pages/page-contact/page-contact.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContactComponent", function() { return PageContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageContactComponent = /** @class */ (function () {
    function PageContactComponent() {
    }
    PageContactComponent.prototype.ngOnInit = function () {
    };
    PageContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-contact',
            template: __webpack_require__(/*! ./page-contact.component.html */ "./src/app/core/pages/page-contact/page-contact.component.html"),
            styles: [__webpack_require__(/*! ./page-contact.component.css */ "./src/app/core/pages/page-contact/page-contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageContactComponent);
    return PageContactComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-home/page-home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/core/pages/page-home/page-home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1ob21lL3BhZ2UtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/pages/page-home/page-home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/pages/page-home/page-home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb></app-breadcrumb>\n\n<app-movie-list\n    [perPage]=\"perPage\"\n    [movies]=\"promoMovies\"\n></app-movie-list>\n"

/***/ }),

/***/ "./src/app/core/pages/page-home/page-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/pages/page-home/page-home.component.ts ***!
  \*************************************************************/
/*! exports provided: PageHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeComponent", function() { return PageHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/core/services/movies.service.ts");



var PageHomeComponent = /** @class */ (function () {
    function PageHomeComponent(movies) {
        this.movies = movies;
        this.perPage = 3;
        this.promoMovies = [];
    }
    PageHomeComponent.prototype.ngOnInit = function () {
        this.setupMovies();
    };
    PageHomeComponent.prototype.setupMovies = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var allMovies;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.movies.fetchMoviesPromise()];
                    case 1:
                        allMovies = _a.sent();
                        allMovies.length = this.perPage;
                        this.promoMovies = allMovies;
                        return [2 /*return*/];
                }
            });
        });
    };
    PageHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-home',
            template: __webpack_require__(/*! ./page-home.component.html */ "./src/app/core/pages/page-home/page-home.component.html"),
            styles: [__webpack_require__(/*! ./page-home.component.css */ "./src/app/core/pages/page-home/page-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], PageHomeComponent);
    return PageHomeComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-movie-list/page-movie-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/pages/page-movie-list/page-movie-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1tb3ZpZS1saXN0L3BhZ2UtbW92aWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/pages/page-movie-list/page-movie-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/page-movie-list/page-movie-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    [segments]=\"['Filmy']\"\n></app-breadcrumb>\n\n<app-movie-list\n    [movies]=\"allMovies\"\n></app-movie-list>\n"

/***/ }),

/***/ "./src/app/core/pages/page-movie-list/page-movie-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/page-movie-list/page-movie-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: PageMovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMovieListComponent", function() { return PageMovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/core/services/movies.service.ts");



var PageMovieListComponent = /** @class */ (function () {
    function PageMovieListComponent(movies) {
        this.movies = movies;
        this.allMovies = null;
    }
    PageMovieListComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.movies.fetchMoviesPromise()];
                    case 1:
                        _a.allMovies = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageMovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-movie-list',
            template: __webpack_require__(/*! ./page-movie-list.component.html */ "./src/app/core/pages/page-movie-list/page-movie-list.component.html"),
            styles: [__webpack_require__(/*! ./page-movie-list.component.css */ "./src/app/core/pages/page-movie-list/page-movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], PageMovieListComponent);
    return PageMovieListComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9wYWdlLW1vdmllLW5vdC1mb3VuZC9wYWdlLW1vdmllLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1tb3ZpZS1ub3QtZm91bmQvcGFnZS1tb3ZpZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    [segments]=\"['Nie znaleziono filmu']\"\n></app-breadcrumb>\n\n<div class=\"alert alert-danger\" role=\"alert\">\n    <h2>Ups...</h2>\n\n    <p>\n        Nie ma takiego filmu w naszej bazie.\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PageMovieNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMovieNotFoundComponent", function() { return PageMovieNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageMovieNotFoundComponent = /** @class */ (function () {
    function PageMovieNotFoundComponent() {
    }
    PageMovieNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-movie-not-found',
            template: __webpack_require__(/*! ./page-movie-not-found.component.html */ "./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-movie-not-found.component.css */ "./src/app/core/pages/page-movie-not-found/page-movie-not-found.component.css")]
        })
    ], PageMovieNotFoundComponent);
    return PageMovieNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-movie-profile/page-movie-profile.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/core/pages/page-movie-profile/page-movie-profile.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\niframe {\n    width: 100%;\n    height: 300px;\n    border: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9wYWdlLW1vdmllLXByb2ZpbGUvcGFnZS1tb3ZpZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2VzL3BhZ2UtbW92aWUtcHJvZmlsZS9wYWdlLW1vdmllLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlcjogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/pages/page-movie-profile/page-movie-profile.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/core/pages/page-movie-profile/page-movie-profile.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    [segments]=\"['Filmy', movie?.title || '...']\"\n></app-breadcrumb>\n\n<p\n    *ngIf=\"!movie\"\n    class=\"alert alert-info\"\n    role=\"alert\"\n>\n    Trwa pobieranie danych na temat wybranego filmu...\n</p>\n\n<div\n    *ngIf=\"movie\"\n    class=\"row\"\n>\n    <div class=\"col-5\">\n        <h2>\n            {{ movie.title }}\n            <small *ngIf=\"movie.year\">\n                ( {{ movie.year }} )\n            </small>\n        </h2>\n\n        <p *ngIf=\"movie.duration\">\n            Czas trwania: {{ movie.duration }} minut\n        </p>\n\n        <p>\n            {{ movie.description }}\n        </p>\n    </div>\n\n    <div class=\"col-7\">\n        <iframe\n            class=\"row\"\n            [src]=\"getVideoUrl()\"\n        ></iframe>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/pages/page-movie-profile/page-movie-profile.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/pages/page-movie-profile/page-movie-profile.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PageMovieProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMovieProfileComponent", function() { return PageMovieProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/core/services/movies.service.ts");





var PageMovieProfileComponent = /** @class */ (function () {
    function PageMovieProfileComponent(sanitizer, movies, route, router) {
        this.sanitizer = sanitizer;
        this.movies = movies;
        this.route = route;
        this.router = router;
        this.movie = null;
    }
    PageMovieProfileComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setupVideoProfile();
                return [2 /*return*/];
            });
        });
    };
    PageMovieProfileComponent.prototype.setupVideoProfile = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var videoId, movie;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        videoId = params['id'];
                        return [4 /*yield*/, this.movies.fetchMovieById(videoId)];
                    case 1:
                        movie = _a.sent();
                        if (movie) {
                            this.movie = movie;
                        }
                        else {
                            this.redirectToNotFoundPage();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PageMovieProfileComponent.prototype.redirectToNotFoundPage = function () {
        this.router.navigateByUrl('/movies/not-found');
    };
    PageMovieProfileComponent.prototype.getVideoUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.movie_url);
    };
    PageMovieProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-movie-profile',
            template: __webpack_require__(/*! ./page-movie-profile.component.html */ "./src/app/core/pages/page-movie-profile/page-movie-profile.component.html"),
            styles: [__webpack_require__(/*! ./page-movie-profile.component.css */ "./src/app/core/pages/page-movie-profile/page-movie-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageMovieProfileComponent);
    return PageMovieProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/pages/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/pages/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    [segments]=\"['404']\"\n></app-breadcrumb>\n\n<h2>Ups...</h2>\n\n<p>\n    Nie ma takiej strony. Wróć na\n    <a routerLink=\"/\">stronę główną</a>.\n</p>\n"

/***/ }),

/***/ "./src/app/core/pages/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/pages/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/core/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/core/pages/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-search/page-search.component.css":
/*!******************************************************************!*\
  !*** ./src/app/core/pages/page-search/page-search.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9wYWdlLXNlYXJjaC9wYWdlLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1zZWFyY2gvcGFnZS1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/pages/page-search/page-search.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/pages/page-search/page-search.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    [segments]=\"['Wyszukiwarka']\"\n></app-breadcrumb>\n\n<app-movie-list\n    [movies]=\"foundMovies\"\n></app-movie-list>\n"

/***/ }),

/***/ "./src/app/core/pages/page-search/page-search.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/pages/page-search/page-search.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSearchComponent", function() { return PageSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/core/services/movies.service.ts");





var PageSearchComponent = /** @class */ (function () {
    function PageSearchComponent(route, router, movies) {
        this.route = route;
        this.router = router;
        this.movies = movies;
        this.foundMovies = null;
    }
    PageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayResults();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.displayResults();
        });
    };
    PageSearchComponent.prototype.displayResults = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        query = this.route.snapshot.paramMap.get('query');
                        _a = this;
                        return [4 /*yield*/, this.movies.search(query)];
                    case 1:
                        _a.foundMovies = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-page-search',
            template: __webpack_require__(/*! ./page-search.component.html */ "./src/app/core/pages/page-search/page-search.component.html"),
            styles: [__webpack_require__(/*! ./page-search.component.css */ "./src/app/core/pages/page-search/page-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"]])
    ], PageSearchComponent);
    return PageSearchComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-user-login/page-user-login.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/pages/page-user-login/page-user-login.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS11c2VyLWxvZ2luL3BhZ2UtdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/pages/page-user-login/page-user-login.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/page-user-login/page-user-login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    [segments]=\"['Użytkownik', 'Logowanie']\"\n></app-breadcrumb>\n\n<p\n    class=\"alert alert-danger\"\n    *ngIf=\"authError\"\n>\n    {{ authError }}\n</p>\n\n<form\n    [formGroup]=\"loginFormGroup\"\n    (ngSubmit)=\"onSubmit()\"\n>\n    <div class=\"form-group\">\n        <label>\n            E-mail\n            <sup class=\"text-danger\">*</sup>\n        </label>\n        <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"email\"\n            [class.is-invalid]=\"validateField('email')\"\n        >\n        <app-field-errors\n            [formGroupRef]=\"loginFormGroup\"\n            fieldName=\"email\"\n            *ngIf=\"validateField('email')\"\n        ></app-field-errors>\n    </div>\n\n    <div class=\"form-group\">\n        <label>\n            Password\n            <sup class=\"text-danger\">*</sup>\n        </label>\n        <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"password\"\n            [class.is-invalid]=\"validateField('password')\"\n        >\n        <app-field-errors\n            [formGroupRef]=\"loginFormGroup\"\n            fieldName=\"password\"\n            *ngIf=\"validateField('password')\"\n        ></app-field-errors>\n    </div>\n\n    <div class=\"form-group\">\n        <button\n            type=\"submit\"\n            class=\"btn btn-primary\"\n            [disabled]=\"loginFormGroup.invalid\"\n        >\n            Login\n        </button>\n    </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/core/pages/page-user-login/page-user-login.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/page-user-login/page-user-login.component.ts ***!
  \*************************************************************************/
/*! exports provided: PageUserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUserLoginComponent", function() { return PageUserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validators_forbiddenEmail_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/forbiddenEmail.validator */ "./src/app/core/validators/forbiddenEmail.validator.ts");






var PageUserLoginComponent = /** @class */ (function () {
    function PageUserLoginComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        // loginFormGroup = new FormGroup({
        //   email: new FormControl('', [
        //     Validators.required,
        //     Validators.minLength(3),
        //     forbiddenEmail
        //   ]),
        //   password: new FormControl('', Validators.required),
        // });
        this.loginFormGroup = this.fb.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _validators_forbiddenEmail_validator__WEBPACK_IMPORTED_MODULE_5__["forbiddenEmail"]
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                ]],
        });
        this.authError = null;
    }
    Object.defineProperty(PageUserLoginComponent.prototype, "email", {
        get: function () {
            return this.loginFormGroup.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageUserLoginComponent.prototype, "password", {
        get: function () {
            return this.loginFormGroup.get('password');
        },
        enumerable: true,
        configurable: true
    });
    PageUserLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            // this.email.setValue('piecioshka@gmail.com');
            // this.password.setValue('123komputer');
            _this.loginFormGroup.setValue({
                email: 'piecioshka@gmail.com',
                password: '123komputer'
            });
            // this.loginFormGroup.patchValue({
            //   email: 'piecioshka@gmail.com',
            // });
        }, 1000);
    };
    PageUserLoginComponent.prototype.validateField = function (fieldName) {
        var field = this.loginFormGroup.get(fieldName);
        return field.errors && field.touched;
    };
    PageUserLoginComponent.prototype.onSubmit = function () {
        var data = this.loginFormGroup.getRawValue();
        var status = this.auth.authenticate(data);
        if (status) {
            this.router.navigate(['/movies']);
        }
        else {
            this.authError = 'Login was failed. Unauthorized';
        }
    };
    PageUserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-user-login',
            template: __webpack_require__(/*! ./page-user-login.component.html */ "./src/app/core/pages/page-user-login/page-user-login.component.html"),
            styles: [__webpack_require__(/*! ./page-user-login.component.css */ "./src/app/core/pages/page-user-login/page-user-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PageUserLoginComponent);
    return PageUserLoginComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-user-logout/page-user-logout.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/page-user-logout/page-user-logout.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageUserLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUserLogoutComponent", function() { return PageUserLogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");




var PageUserLogoutComponent = /** @class */ (function () {
    function PageUserLogoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    PageUserLogoutComponent.prototype.ngOnInit = function () {
        this.auth.destroyUserSession();
        this.backToHome();
    };
    PageUserLogoutComponent.prototype.backToHome = function () {
        this.router.navigateByUrl('/');
    };
    PageUserLogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-user-logout',
            template: '',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageUserLogoutComponent);
    return PageUserLogoutComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-user-registration/page-user-registration.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/core/pages/page-user-registration/page-user-registration.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9wYWdlLXVzZXItcmVnaXN0cmF0aW9uL3BhZ2UtdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2VzL3BhZ2UtdXNlci1yZWdpc3RyYXRpb24vcGFnZS11c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/pages/page-user-registration/page-user-registration.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/pages/page-user-registration/page-user-registration.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    [segments]=\"['Użytkownik', 'Rejestracja']\"\n></app-breadcrumb>\n\n<div class=\"row\">\n    <!-- <pre>{{ userRegistrationForm.value | json }}</pre> -->\n    <!-- <pre>{{ userRegistrationForm.form.errors }}</pre> -->\n</div>\n\n<div class=\"row\">\n    <p class=\"col-md-12\">\n        Jeśli masz już konto to\n        <a routerLink=\"/user/login\">Zaloguj się</a>\n    </p>\n</div>\n\n<div class=\"row\">\n    <form\n        #userRegistrationForm=\"ngForm\"\n        class=\"col-md-7\"\n        (ngSubmit)=\"submit(userRegistrationForm.value)\"\n        novalidate\n    >\n        <div class=\"form-group\">\n            <label>\n                Username\n                <sup class=\"text-danger\">*</sup>\n            </label>\n            <input\n                #username=\"ngModel\"\n                [(ngModel)]=\"userModel.username\"\n                required\n                type=\"text\"\n                class=\"form-control\"\n                [class.is-invalid]=\"username.invalid && username.touched\"\n                name=\"username\"\n                maxlength=\"3\"\n                minlength=\"2\"\n            >\n            <div\n                class=\"text-danger\"\n                *ngIf=\"username.touched\"\n            >\n                <small *ngIf=\"username.errors?.required\">Username field is required</small>\n                <small *ngIf=\"username.errors?.minlength\">Username length is to small</small>\n                <small *ngIf=\"username.errors?.maxlength\">Username length is to big</small>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label>\n                E-mail\n                <sup class=\"text-danger\">*</sup>\n            </label>\n            <input\n                #email=\"ngModel\"\n                [(ngModel)]=\"userModel.email\"\n                required\n                type=\"email\"\n                class=\"form-control\"\n                [class.is-invalid]=\"email.invalid && email.touched\"\n                name=\"email\"\n            >\n            <small\n                class=\"text-danger\"\n                *ngIf=\"email.invalid && email.touched\"\n            >\n                Email field is required\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label>\n                Password\n                <sup class=\"text-danger\">*</sup>\n            </label>\n            <input\n                #password=\"ngModel\"\n                [(ngModel)]=\"userModel.password\"\n                required\n                type=\"text\"\n                class=\"form-control\"\n                [class.is-invalid]=\"password.invalid && password.touched\"\n                name=\"password\"\n            >\n            <small\n                class=\"text-danger\"\n                *ngIf=\"password.invalid && password.touched\"\n            >\n                Password field is required\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label>\n                Sex\n                <sup class=\"text-danger\">*</sup>\n            </label>\n            <select\n                #sex=\"ngModel\"\n                [(ngModel)]=\"userModel.sex\"\n                required\n                class=\"form-control\"\n                [class.is-invalid]=\"sex.invalid && sex.touched\"\n                name=\"sex\"\n            >\n                <option value>Select</option>\n                <option value=\"m\">Male</option>\n                <option value=\"f\">Female</option>\n            </select>\n            <small\n                class=\"text-danger\"\n                *ngIf=\"sex.invalid && sex.touched\"\n            >\n                Sex field is required\n            </small>\n        </div>\n\n        <div class=\"form-group form-inline\">\n            <button\n                type=\"submit\"\n                class=\"btn btn-primary mr-1\"\n                [disabled]=\"userRegistrationForm.invalid\"\n            >\n                Submit\n            </button>\n\n            <button\n                type=\"reset\"\n                class=\"btn btn-danger\"\n            >\n                Reset\n            </button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/core/pages/page-user-registration/page-user-registration.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/core/pages/page-user-registration/page-user-registration.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PageUserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUserRegistrationComponent", function() { return PageUserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/core/models/user-model.ts");




var PageUserRegistrationComponent = /** @class */ (function () {
    function PageUserRegistrationComponent(http) {
        this.http = http;
        this.userModel = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]('xxx', 'zxc', '123komputer', 'm');
        this.url = 'http://localhost:3000';
    }
    PageUserRegistrationComponent.prototype.ngOnInit = function () {
    };
    PageUserRegistrationComponent.prototype.validateEmail = function (email) {
        return (/@/).test(email);
    };
    PageUserRegistrationComponent.prototype.submit = function (data) {
        this.http.post(this.url, data)
            .subscribe(function (response) {
            console.log('=== success ===');
            console.log(response);
        }, function (error) {
            console.error('=== error ===');
            console.error(error);
        });
    };
    PageUserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-user-registration',
            template: __webpack_require__(/*! ./page-user-registration.component.html */ "./src/app/core/pages/page-user-registration/page-user-registration.component.html"),
            styles: [__webpack_require__(/*! ./page-user-registration.component.css */ "./src/app/core/pages/page-user-registration/page-user-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageUserRegistrationComponent);
    return PageUserRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stores_users_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/users-store.service */ "./src/app/core/stores/users-store.service.ts");
/* harmony import */ var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");




var AuthService = /** @class */ (function () {
    function AuthService(usersStore, localStorageService) {
        this.usersStore = usersStore;
        this.localStorageService = localStorageService;
    }
    // Uwierzytelnienie
    AuthService.prototype.authenticate = function (userCredentials) {
        var status = this.usersStore.check(userCredentials);
        if (status) {
            this.localStorageService.create('user-logged', true);
            this.localStorageService.create('user', { login: userCredentials.email });
        }
        return status;
    };
    AuthService.prototype.getUserName = function () {
        var user = this.localStorageService.read('user');
        if (typeof user === 'object' && user != null && user.hasOwnProperty('login')) {
            return user.login;
        }
    };
    AuthService.prototype.isUserLogged = function () {
        var data = this.localStorageService.read('user-logged');
        return Boolean(data);
    };
    AuthService.prototype.destroyUserSession = function () {
        this.localStorageService.delete('user-logged');
        this.localStorageService.delete('user');
        return true;
    };
    // Rejestracja użytkownika
    AuthService.prototype.register = function (userModel) {
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stores_users_store_service__WEBPACK_IMPORTED_MODULE_2__["UsersStoreService"],
            src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/movies.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/movies.service.ts ***!
  \*************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_helpers_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/helpers/delay */ "./src/app/shared/helpers/delay.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
    }
    MoviesService.prototype.fetchMoviesPromise = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].moviesUrl).toPromise();
    };
    MoviesService.prototype.fetchMovieByIdPromise = function (movieId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var movies;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchMoviesPromise()];
                    case 1:
                        movies = _a.sent();
                        return [2 /*return*/, movies.find(function (movie) {
                                return movie.id === movieId;
                            })];
                }
            });
        });
    };
    // -------------------------------------------------------------------------
    MoviesService.prototype.fetchMovies = function () {
        var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].moviesUrl;
        return this.http.get(endpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(20));
    };
    MoviesService.prototype.fetchMovieById = function (videoId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var movies, found;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchMovies().toPromise()];
                    case 1:
                        movies = _a.sent();
                        found = movies.find(function (movie) {
                            return movie.id === videoId;
                        });
                        return [4 /*yield*/, Object(_shared_helpers_delay__WEBPACK_IMPORTED_MODULE_4__["delay"])(200)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, found];
                }
            });
        });
    };
    MoviesService.prototype.search = function (title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var movies;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchMovies().toPromise()];
                    case 1:
                        movies = _a.sent();
                        return [4 /*yield*/, Object(_shared_helpers_delay__WEBPACK_IMPORTED_MODULE_4__["delay"])(200)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, movies.filter(function (movie) {
                                return new RegExp(title, 'i').test(movie.title);
                            })];
                }
            });
        });
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/core/stores/users-store.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/stores/users-store.service.ts ***!
  \****************************************************/
/*! exports provided: UsersStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersStoreService", function() { return UsersStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersStoreService = /** @class */ (function () {
    function UsersStoreService() {
        this.users = [
            { email: 'piecioshka@gmail.com', password: '123komputer' },
            { email: 'kontakt@youtube.com', password: '123komputer' },
        ];
    }
    UsersStoreService.prototype.check = function (userCredentials) {
        return this.users.find(function (user) {
            return user.email === userCredentials.email
                && user.password === userCredentials.password;
        }) !== undefined;
    };
    UsersStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsersStoreService);
    return UsersStoreService;
}());



/***/ }),

/***/ "./src/app/core/validators/forbiddenEmail.validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/validators/forbiddenEmail.validator.ts ***!
  \*************************************************************/
/*! exports provided: forbiddenEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenEmail", function() { return forbiddenEmail; });
function forbiddenEmail(control) {
    var forbiddenEmails = [
        'a@a.a'
    ];
    var status = forbiddenEmails.includes(control.value);
    return status
        ? { forbiddenEmail: true }
        : null;
}


/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">Start</li>\n\n        <li\n            class=\"breadcrumb-item\"\n            *ngFor=\"let segment of segments; let last = last\"\n            [class.active]=\"last\"\n        >\n            {{ segment }}\n        </li>\n    </ol>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.segments = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BreadcrumbComponent.prototype, "segments", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/shared/components/breadcrumb/breadcrumb.component.css")]
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/field-errors/field-errors.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/field-errors/field-errors.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkLWVycm9ycy9maWVsZC1lcnJvcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/field-errors/field-errors.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/field-errors/field-errors.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-danger\">\n    <small *ngIf=\"field.errors?.required\">Field \"{{ fieldName }}\" is required</small>\n    <small *ngIf=\"field.errors?.minlength\">Field \"{{ fieldName }}\" is to small</small>\n    <small *ngIf=\"field.errors?.forbiddenEmail\">Field \"{{ fieldName }}\" contains forbidden email</small>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/field-errors/field-errors.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/field-errors/field-errors.component.ts ***!
  \**************************************************************************/
/*! exports provided: FieldErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldErrorsComponent", function() { return FieldErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FieldErrorsComponent = /** @class */ (function () {
    function FieldErrorsComponent() {
        this.formGroupRef = null;
        this.fieldName = null;
    }
    Object.defineProperty(FieldErrorsComponent.prototype, "field", {
        get: function () {
            return this.formGroupRef.get(this.fieldName);
        },
        enumerable: true,
        configurable: true
    });
    FieldErrorsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], FieldErrorsComponent.prototype, "formGroupRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FieldErrorsComponent.prototype, "fieldName", void 0);
    FieldErrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-field-errors',
            template: __webpack_require__(/*! ./field-errors.component.html */ "./src/app/shared/components/field-errors/field-errors.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./field-errors.component.css */ "./src/app/shared/components/field-errors/field-errors.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldErrorsComponent);
    return FieldErrorsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/image/image.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/image/image.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\nimg {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/image/image.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/image/image.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img>\n"

/***/ }),

/***/ "./src/app/shared/components/image/image.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/image/image.component.ts ***!
  \************************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);



var console = {
    log: debug__WEBPACK_IMPORTED_MODULE_2__('youtube:image:log')
};
// localStorage.debug = '*'
// localStorage.debug = 'youtube:*';
// localStorage.debug = 'youtube:image:*';
var ImageComponent = /** @class */ (function () {
    function ImageComponent($el) {
        this.$el = $el;
        this.src = null;
    }
    ImageComponent.prototype.ngOnInit = function () {
        this.updateSource();
    };
    ImageComponent.prototype.updateSource = function () {
        var _this = this;
        // Pobieramy ref. do obrazka w DOM
        var $image = this.$el.nativeElement.querySelector('img');
        // Tworzymy instancję "słuchacza"
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    console.log("Image is visible in viewport: " + _this.src);
                    // Ładujemy obrazek
                    entry.target.setAttribute('src', _this.src);
                    // Kończymy obserwować widoczność obrazka
                    observer.disconnect();
                }
            });
        });
        // Zaczynamy słuchać na
        observer.observe($image);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageComponent.prototype, "src", void 0);
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/shared/components/image/image.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/shared/components/image/image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search-form/search-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/search-form/search-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n:host input {\n    width: 300px;\n    padding: 2px 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuOmhvc3QgaW5wdXQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiAycHggNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/search-form/search-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/search-form/search-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary text-white p-3\">\n    <h3>Znajdź swój ulubiony film</h3>\n\n    <input\n        #phrase\n        (keyup.enter)=\"handleEnter(phrase.value)\"\n        placeholder=\"Wpisz tytuł filmu i naciśnij ENTER\"\n        autofocus\n    >\n\n    <button\n        class=\"btn btn-warning ml-2\"\n        (click)=\"handleEnter(phrase.value)\"\n    >\n        Wyszukaj\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/search-form/search-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/search-form/search-form.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(router) {
        this.router = router;
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.handleEnter = function (phrase) {
        phrase = phrase.trim();
        if (!phrase) {
            return;
        }
        this.router.navigateByUrl("/search/" + phrase);
    };
    SearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/shared/components/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/shared/components/search-form/search-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/helpers/delay.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/helpers/delay.ts ***!
  \*****************************************/
/*! exports provided: delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}


/***/ }),

/***/ "./src/app/shared/services/local-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/local-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.create = function (key, value) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.read = function (key) {
        var result = localStorage.getItem(key);
        if (typeof result === 'string') {
            result = JSON.parse(result);
        }
        return result;
    };
    LocalStorageService.prototype.update = function () {
    };
    LocalStorageService.prototype.delete = function (key) {
        localStorage.removeItem(key);
        return true;
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/image/image.component */ "./src/app/shared/components/image/image.component.ts");
/* harmony import */ var _components_field_errors_field_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/field-errors/field-errors.component */ "./src/app/shared/components/field-errors/field-errors.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search-form/search-form.component */ "./src/app/shared/components/search-form/search-form.component.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_image_image_component__WEBPACK_IMPORTED_MODULE_4__["ImageComponent"],
                _components_field_errors_field_errors_component__WEBPACK_IMPORTED_MODULE_5__["FieldErrorsComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"],
                _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_7__["SearchFormComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: [
                _components_image_image_component__WEBPACK_IMPORTED_MODULE_4__["ImageComponent"],
                _components_field_errors_field_errors_component__WEBPACK_IMPORTED_MODULE_5__["FieldErrorsComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"],
                _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_7__["SearchFormComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    enableRoutingHashStrategy: true,
    moviesUrl: 'https://piecioshka.github.io/test-angular-youtube/assets/movies.json'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_core_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/core/app.module */ "./src/app/core/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_core_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/piecioshka/projects/test-angular-youtube/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.4b822a3d4c32c4492593.js.map