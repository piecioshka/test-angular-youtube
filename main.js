(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./static/static.module": [
		"./src/app/static/static.module.ts",
		"static-static-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'authors',
        loadChildren: './static/static.module#StaticModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n    width: 960px;\n    margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogOTYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\n    <header class=\"row\">\n        <div class=\"col-7\">\n            <h1 routerLink='/'>\n                {{ title }}\n            </h1>\n            <p class=\"page-lead\">\n                {{ description }}\n            </p>\n        </div>\n        <div class=\"col-5\">\n            <app-search-form\n                class=\"text-right\"\n            ></app-search-form>\n        </div>\n    </header>\n\n    <router-outlet></router-outlet>\n\n    <footer class=\"text-center bg-light py-2\">\n        Copyright 2019 &copy; <a routerLink=\"/authors\">Autorzy</a>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'YouTube';
        this.description = 'Portal z filmami';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _logic_logic_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/logic.module */ "./src/app/logic/logic.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'test-angular-youtube' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _logic_logic_module__WEBPACK_IMPORTED_MODULE_4__["LogicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/logic/components/page-video-list/page-video-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/logic/components/page-video-list/page-video-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naWMvY29tcG9uZW50cy9wYWdlLXZpZGVvLWxpc3QvcGFnZS12aWRlby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naWMvY29tcG9uZW50cy9wYWdlLXZpZGVvLWxpc3QvcGFnZS12aWRlby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/logic/components/page-video-list/page-video-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/logic/components/page-video-list/page-video-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    pageName=\"Najnowsze filmy\"\n></app-breadcrumb>\n\n<app-video-list\n    [videos]=\"videos\"\n></app-video-list>\n"

/***/ }),

/***/ "./src/app/logic/components/page-video-list/page-video-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/logic/components/page-video-list/page-video-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PageVideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoListComponent", function() { return PageVideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/videos.service */ "./src/app/logic/services/videos.service.ts");



var PageVideoListComponent = /** @class */ (function () {
    function PageVideoListComponent(videosService) {
        this.videosService = videosService;
        this.videos = null;
    }
    PageVideoListComponent.prototype.ngOnInit = function () {
        this.setupVideos();
    };
    PageVideoListComponent.prototype.setupVideos = function () {
        var _this = this;
        this.videosService.fetchVideos()
            .subscribe(function (videos) {
            _this.videos = videos;
        });
    };
    PageVideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-video-list',
            template: __webpack_require__(/*! ./page-video-list.component.html */ "./src/app/logic/components/page-video-list/page-video-list.component.html"),
            styles: [__webpack_require__(/*! ./page-video-list.component.css */ "./src/app/logic/components/page-video-list/page-video-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_videos_service__WEBPACK_IMPORTED_MODULE_2__["VideosService"]])
    ], PageVideoListComponent);
    return PageVideoListComponent;
}());



/***/ }),

/***/ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-not-found/page-video-not-found.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naWMvY29tcG9uZW50cy9wYWdlLXZpZGVvLW5vdC1mb3VuZC9wYWdlLXZpZGVvLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ljL2NvbXBvbmVudHMvcGFnZS12aWRlby1ub3QtZm91bmQvcGFnZS12aWRlby1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-not-found/page-video-not-found.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    pageName=\"Błąd\"\n></app-breadcrumb>\n\n<div class=\"alert alert-danger\" role=\"alert\">\n    <h2>Ups...</h2>\n\n    <p>\n        Nie ma takiego filmu w naszej bazie.\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-not-found/page-video-not-found.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PageVideoNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoNotFoundComponent", function() { return PageVideoNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageVideoNotFoundComponent = /** @class */ (function () {
    function PageVideoNotFoundComponent() {
    }
    PageVideoNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-video-not-found',
            template: __webpack_require__(/*! ./page-video-not-found.component.html */ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-video-not-found.component.css */ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.css")]
        })
    ], PageVideoNotFoundComponent);
    return PageVideoNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/logic/components/page-video-profile/page-video-profile.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-profile/page-video-profile.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naWMvY29tcG9uZW50cy9wYWdlLXZpZGVvLXByb2ZpbGUvcGFnZS12aWRlby1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naWMvY29tcG9uZW50cy9wYWdlLXZpZGVvLXByb2ZpbGUvcGFnZS12aWRlby1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/logic/components/page-video-profile/page-video-profile.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-profile/page-video-profile.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    pageName=\"Film\"\n></app-breadcrumb>\n\n<app-video-profile\n    [video]=\"video\"\n></app-video-profile>\n"

/***/ }),

/***/ "./src/app/logic/components/page-video-profile/page-video-profile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-profile/page-video-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PageVideoProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoProfileComponent", function() { return PageVideoProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/videos.service */ "./src/app/logic/services/videos.service.ts");




var PageVideoProfileComponent = /** @class */ (function () {
    function PageVideoProfileComponent(router, activatedRoute, videosService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.videosService = videosService;
        this.video = null;
    }
    PageVideoProfileComponent.prototype.ngOnInit = function () {
        this.setupVideoProfile();
    };
    PageVideoProfileComponent.prototype.setupVideoProfile = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var videoId, video;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        videoId = params['id'];
                        return [4 /*yield*/, this.videosService.fetchVideoById(videoId)];
                    case 1:
                        video = _a.sent();
                        if (video) {
                            this.video = video;
                        }
                        else {
                            this.redirectToNotFoundPage();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PageVideoProfileComponent.prototype.redirectToNotFoundPage = function () {
        this.router.navigateByUrl('/video-not-found');
    };
    PageVideoProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-page-video-profile',
            template: __webpack_require__(/*! ./page-video-profile.component.html */ "./src/app/logic/components/page-video-profile/page-video-profile.component.html"),
            styles: [__webpack_require__(/*! ./page-video-profile.component.css */ "./src/app/logic/components/page-video-profile/page-video-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_videos_service__WEBPACK_IMPORTED_MODULE_3__["VideosService"]])
    ], PageVideoProfileComponent);
    return PageVideoProfileComponent;
}());



/***/ }),

/***/ "./src/app/logic/components/page-video-search/page-video-search.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-search/page-video-search.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naWMvY29tcG9uZW50cy9wYWdlLXZpZGVvLXNlYXJjaC9wYWdlLXZpZGVvLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ljL2NvbXBvbmVudHMvcGFnZS12aWRlby1zZWFyY2gvcGFnZS12aWRlby1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/logic/components/page-video-search/page-video-search.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-search/page-video-search.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb\n    pageName=\"Wyszukiwarka\"\n></app-breadcrumb>\n\n<app-video-list\n    [videos]=\"videos\"\n></app-video-list>\n"

/***/ }),

/***/ "./src/app/logic/components/page-video-search/page-video-search.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/logic/components/page-video-search/page-video-search.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PageVideoSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoSearchComponent", function() { return PageVideoSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/videos.service */ "./src/app/logic/services/videos.service.ts");




var PageVideoSearchComponent = /** @class */ (function () {
    function PageVideoSearchComponent(activatedRoute, videosService) {
        this.activatedRoute = activatedRoute;
        this.videosService = videosService;
        this.videos = null;
    }
    PageVideoSearchComponent.prototype.ngOnInit = function () {
        this.setupVideoSearch();
    };
    PageVideoSearchComponent.prototype.setupVideoSearch = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var videoTitle, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        videoTitle = params['phrase'];
                        this.videos = null;
                        _a = this;
                        return [4 /*yield*/, this.videosService.fetchVideoByTitle(videoTitle)];
                    case 1:
                        _a.videos = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PageVideoSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-page-video-search',
            template: __webpack_require__(/*! ./page-video-search.component.html */ "./src/app/logic/components/page-video-search/page-video-search.component.html"),
            styles: [__webpack_require__(/*! ./page-video-search.component.css */ "./src/app/logic/components/page-video-search/page-video-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_videos_service__WEBPACK_IMPORTED_MODULE_3__["VideosService"]])
    ], PageVideoSearchComponent);
    return PageVideoSearchComponent;
}());



/***/ }),

/***/ "./src/app/logic/components/video-list-item/video-list-item.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/logic/components/video-list-item/video-list-item.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n    width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naWMvY29tcG9uZW50cy92aWRlby1saXN0LWl0ZW0vdmlkZW8tbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ljL2NvbXBvbmVudHMvdmlkZW8tbGlzdC1pdGVtL3ZpZGVvLWxpc3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/logic/components/video-list-item/video-list-item.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/logic/components/video-list-item/video-list-item.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"video\">\n    <div class=\"card\">\n        <a\n            [routerLink]=\"['/video/' + video.id]\"\n        >\n            <img\n                class=\"card-img-top\"\n                [src]=\"video.thumb_url\"\n            />\n        </a>\n\n        <div class=\"card-body\">\n            <h3 class=\"card-title\">\n                {{ video.title }}\n                <small *ngIf=\"video.year\">\n                    ( {{ video.year }} )\n                </small>\n            </h3>\n\n            <p\n                *ngIf=\"video.duration\"\n                class=\"card-text\"\n            >\n                Czas trwania: {{ video.duration }} minut\n            </p>\n\n            <p>{{ video.description }}</p>\n\n            <a\n                [routerLink]=\"['/video/' + video.id]\"\n                class=\"btn btn-primary\"\n            >\n                Zobacz profil\n            </a>\n        </div>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/logic/components/video-list-item/video-list-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/logic/components/video-list-item/video-list-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VideoListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListItemComponent", function() { return VideoListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoListItemComponent = /** @class */ (function () {
    function VideoListItemComponent() {
        this.video = null;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListItemComponent.prototype, "video", void 0);
    VideoListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-list-item',
            template: __webpack_require__(/*! ./video-list-item.component.html */ "./src/app/logic/components/video-list-item/video-list-item.component.html"),
            styles: [__webpack_require__(/*! ./video-list-item.component.css */ "./src/app/logic/components/video-list-item/video-list-item.component.css")]
        })
    ], VideoListItemComponent);
    return VideoListItemComponent;
}());



/***/ }),

/***/ "./src/app/logic/components/video-list/video-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/logic/components/video-list/video-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naWMvY29tcG9uZW50cy92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpYy9jb21wb25lbnRzL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/logic/components/video-list/video-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/logic/components/video-list/video-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p\n    *ngIf=\"!videos\"\n    class=\"alert alert-info\"\n    role=\"alert\"\n>\n    Trwa pobieranie filmów...\n</p>\n\n<div\n    *ngIf=\"videos?.length === 0\"\n    class=\"alert alert-warning\"\n    role=\"alert\"\n>\n    <h2>Ups...</h2>\n\n    <p>\n        Lista filmów jest pusta!\n    </p>\n</div>\n\n<div class=\"row\">\n    <div\n        *ngIf=\"videos?.length > 0\"\n        class=\"col-12 text-center\"\n    >\n        <button\n            (click)=\"sortAscending()\"\n            class=\"badge badge-warning small mr-1\"\n        >\n            Alfabetycznie\n        </button>\n\n        <button\n            (click)=\"sortDescending()\"\n            class=\"badge badge-info small\"\n        >\n            Odwrotnie\n        </button>\n    </div>\n</div>\n\n<ul class=\"list-unstyled d-inline-flex flex-wrap\">\n    <li\n        *ngFor=\"let video of videos | paginate: { itemsPerPage: 3, currentPage: page }\"\n        class=\"m-1\"\n    >\n        <app-video-list-item\n            [video]=\"video\"\n        ></app-video-list-item>\n    </li>\n</ul>\n\n<div class=\"text-center\">\n    <pagination-controls\n        (pageChange)=\"page = $event\"\n    ></pagination-controls>\n</div>\n"

/***/ }),

/***/ "./src/app/logic/components/video-list/video-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/logic/components/video-list/video-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
        this.page = 1;
        this.videos = null;
    }
    VideoListComponent.prototype.sortAscending = function () {
        this.videos = this.videos.sort(this.ascending);
    };
    VideoListComponent.prototype.sortDescending = function () {
        var _this = this;
        this.videos = this.videos.sort(function (a, b) {
            return _this.ascending(a, b) * (-1);
        });
    };
    VideoListComponent.prototype.ascending = function (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VideoListComponent.prototype, "videos", void 0);
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! ./video-list.component.html */ "./src/app/logic/components/video-list/video-list.component.html"),
            styles: [__webpack_require__(/*! ./video-list.component.css */ "./src/app/logic/components/video-list/video-list.component.css")]
        })
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/logic/components/video-profile/video-profile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/logic/components/video-profile/video-profile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n:host iframe {\n    border: none;\n    width: 300px;\n    height: 170px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naWMvY29tcG9uZW50cy92aWRlby1wcm9maWxlL3ZpZGVvLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9sb2dpYy9jb21wb25lbnRzL3ZpZGVvLXByb2ZpbGUvdmlkZW8tcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdCBpZnJhbWUge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxNzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/logic/components/video-profile/video-profile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/logic/components/video-profile/video-profile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p\n    *ngIf=\"!video\"\n    class=\"alert alert-info\"\n    role=\"alert\"\n>\n    Trwa pobieranie danych na temat wybranego filmu...\n</p>\n\n<div\n    *ngIf=\"video\"\n    class=\"row\"\n>\n    <div class=\"col-3\">\n        <img\n            class=\"img-thumbnail rounded float-left\"\n            [src]=\"video.thumb_url\"\n        />\n    </div>\n\n    <div class=\"col-5\">\n        <h2>\n            {{ video.title }}\n            <small *ngIf=\"video.year\">\n                ( {{ video.year }} )\n            </small>\n        </h2>\n\n        <p *ngIf=\"video.duration\">\n            Czas trwania: {{ video.duration }} minut\n        </p>\n\n        <p>\n            {{ video.description }}\n        </p>\n    </div>\n\n    <div class=\"col-4\">\n        <iframe\n            class=\"row\"\n            [src]=\"getVideoUrl()\"\n        ></iframe>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/logic/components/video-profile/video-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/logic/components/video-profile/video-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: VideoProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProfileComponent", function() { return VideoProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/videos.service */ "./src/app/logic/services/videos.service.ts");





var VideoProfileComponent = /** @class */ (function () {
    function VideoProfileComponent(sanitizer, videosService, route, router) {
        this.sanitizer = sanitizer;
        this.videosService = videosService;
        this.route = route;
        this.router = router;
        this.video = null;
    }
    VideoProfileComponent.prototype.ngOnInit = function () {
        this.setupVideoProfile();
    };
    VideoProfileComponent.prototype.setupVideoProfile = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var videoId, video;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        videoId = params['id'];
                        return [4 /*yield*/, this.videosService.fetchVideoById(videoId)];
                    case 1:
                        video = _a.sent();
                        if (!video) {
                            return [2 /*return*/, this.router.navigate(['video-not-found'])];
                        }
                        this.video = video;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    VideoProfileComponent.prototype.getVideoUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video_url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoProfileComponent.prototype, "video", void 0);
    VideoProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-profile',
            template: __webpack_require__(/*! ./video-profile.component.html */ "./src/app/logic/components/video-profile/video-profile.component.html"),
            styles: [__webpack_require__(/*! ./video-profile.component.css */ "./src/app/logic/components/video-profile/video-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_videos_service__WEBPACK_IMPORTED_MODULE_4__["VideosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VideoProfileComponent);
    return VideoProfileComponent;
}());



/***/ }),

/***/ "./src/app/logic/logic-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/logic/logic-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LogicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicRoutingModule", function() { return LogicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_page_video_list_page_video_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-video-list/page-video-list.component */ "./src/app/logic/components/page-video-list/page-video-list.component.ts");
/* harmony import */ var _components_page_video_profile_page_video_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-video-profile/page-video-profile.component */ "./src/app/logic/components/page-video-profile/page-video-profile.component.ts");
/* harmony import */ var _components_page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-video-not-found/page-video-not-found.component */ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.ts");
/* harmony import */ var _components_page_video_search_page_video_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-video-search/page-video-search.component */ "./src/app/logic/components/page-video-search/page-video-search.component.ts");







var routes = [
    {
        path: '',
        component: _components_page_video_list_page_video_list_component__WEBPACK_IMPORTED_MODULE_3__["PageVideoListComponent"]
    },
    {
        path: 'video/:id',
        component: _components_page_video_profile_page_video_profile_component__WEBPACK_IMPORTED_MODULE_4__["PageVideoProfileComponent"]
    },
    {
        path: 'video-not-found',
        component: _components_page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageVideoNotFoundComponent"]
    },
    {
        path: 'video-search/:phrase',
        component: _components_page_video_search_page_video_search_component__WEBPACK_IMPORTED_MODULE_6__["PageVideoSearchComponent"]
    },
];
var LogicRoutingModule = /** @class */ (function () {
    function LogicRoutingModule() {
    }
    LogicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], LogicRoutingModule);
    return LogicRoutingModule;
}());



/***/ }),

/***/ "./src/app/logic/logic.module.ts":
/*!***************************************!*\
  !*** ./src/app/logic/logic.module.ts ***!
  \***************************************/
/*! exports provided: LogicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicModule", function() { return LogicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _logic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic-routing.module */ "./src/app/logic/logic-routing.module.ts");
/* harmony import */ var _components_page_video_list_page_video_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-video-list/page-video-list.component */ "./src/app/logic/components/page-video-list/page-video-list.component.ts");
/* harmony import */ var _components_page_video_profile_page_video_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-video-profile/page-video-profile.component */ "./src/app/logic/components/page-video-profile/page-video-profile.component.ts");
/* harmony import */ var _components_page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-video-not-found/page-video-not-found.component */ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.ts");
/* harmony import */ var _components_page_video_search_page_video_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-video-search/page-video-search.component */ "./src/app/logic/components/page-video-search/page-video-search.component.ts");
/* harmony import */ var _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/video-list/video-list.component */ "./src/app/logic/components/video-list/video-list.component.ts");
/* harmony import */ var _components_video_list_item_video_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/video-list-item/video-list-item.component */ "./src/app/logic/components/video-list-item/video-list-item.component.ts");
/* harmony import */ var _components_video_profile_video_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/video-profile/video-profile.component */ "./src/app/logic/components/video-profile/video-profile.component.ts");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/videos.service */ "./src/app/logic/services/videos.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");















var LogicModule = /** @class */ (function () {
    function LogicModule() {
    }
    LogicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_page_video_list_page_video_list_component__WEBPACK_IMPORTED_MODULE_6__["PageVideoListComponent"],
                _components_page_video_profile_page_video_profile_component__WEBPACK_IMPORTED_MODULE_7__["PageVideoProfileComponent"],
                _components_page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageVideoNotFoundComponent"],
                _components_page_video_search_page_video_search_component__WEBPACK_IMPORTED_MODULE_9__["PageVideoSearchComponent"],
                _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_10__["VideoListComponent"],
                _components_video_list_item_video_list_item_component__WEBPACK_IMPORTED_MODULE_11__["VideoListItemComponent"],
                _components_video_profile_video_profile_component__WEBPACK_IMPORTED_MODULE_12__["VideoProfileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _logic_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogicRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _services_videos_service__WEBPACK_IMPORTED_MODULE_13__["VideosService"]
            ],
            exports: []
        })
    ], LogicModule);
    return LogicModule;
}());



/***/ }),

/***/ "./src/app/logic/services/videos.service.ts":
/*!**************************************************!*\
  !*** ./src/app/logic/services/videos.service.ts ***!
  \**************************************************/
/*! exports provided: VideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosService", function() { return VideosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_helpers_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/helpers/delay */ "./src/app/shared/helpers/delay.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var VideosService = /** @class */ (function () {
    function VideosService(http) {
        this.http = http;
    }
    VideosService.prototype.fetchVideos = function () {
        var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backendURL;
        return this.http.get(endpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(100));
    };
    VideosService.prototype.fetchVideoById = function (videoId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var videos, found;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchVideos().toPromise()];
                    case 1:
                        videos = _a.sent();
                        found = videos.find(function (video) {
                            return video.id === videoId;
                        });
                        return [4 /*yield*/, Object(_shared_helpers_delay__WEBPACK_IMPORTED_MODULE_4__["delay"])(500)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, found];
                }
            });
        });
    };
    VideosService.prototype.fetchVideoByTitle = function (title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var videos;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchVideos().toPromise()];
                    case 1:
                        videos = _a.sent();
                        return [4 /*yield*/, Object(_shared_helpers_delay__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, videos.filter(function (video) {
                                return new RegExp(title, 'i').test(video.title);
                            })];
                }
            });
        });
    };
    VideosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VideosService);
    return VideosService;
}());



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

module.exports = "<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            Start\n        </li>\n\n        <li class=\"breadcrumb-item active\">\n            {{ pageName }}\n        </li>\n    </ol>\n</nav>\n"

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
        this.pageName = null;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BreadcrumbComponent.prototype, "pageName", void 0);
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

/***/ "./src/app/shared/components/search-form/search-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/search-form/search-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n:host input {\n    width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuOmhvc3QgaW5wdXQge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/search-form/search-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/search-form/search-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary text-white p-3\">\n    <h3>\n        Wyszukiwarka\n    </h3>\n\n    <input\n        #phrase\n        (keyup.enter)=\"handleEnter(phrase.value)\"\n        placeholder=\"Wpisz tytuł filmu i naciśnij ENTER\"\n        autofocus\n    />\n</div>\n"

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
        this.router.navigateByUrl("/video-search/" + phrase);
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
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search-form/search-form.component */ "./src/app/shared/components/search-form/search-form.component.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"],
                _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__["SearchFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"],
                _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__["SearchFormComponent"]
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
    backendURL: 'https://piecioshka.github.com/test-angular-youtube/assets/db.json'
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main.js.map