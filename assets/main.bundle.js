webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<flash-messages>\n</flash-messages>\n\n<div class=\"col-10 offset-1\">\n\n  <app-navigation></app-navigation>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_category_cat_gallery_cat_gallery_component__ = __webpack_require__("../../../../../src/app/components/category/cat-gallery/cat-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_routing_routing_module__ = __webpack_require__("../../../../../src/app/shared/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_validate_service__ = __webpack_require__("../../../../../src/app/shared/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_gallery_service__ = __webpack_require__("../../../../../src/app/shared/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_shopping_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_order_service__ = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_pipes_truncate_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/truncate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_category_cat_item_cat_item_component__ = __webpack_require__("../../../../../src/app/components/category/cat-item/cat-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_errors_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/errors/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_category_cat_item_item_opinions_item_opinions_component__ = __webpack_require__("../../../../../src/app/components/category/cat-item/item-opinions/item-opinions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_address_details_address_details_component__ = __webpack_require__("../../../../../src/app/components/address-details/address-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_order_submit_order_submit_component__ = __webpack_require__("../../../../../src/app/components/order-submit/order-submit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_category_cat_gallery_cat_gallery_component__["a" /* CatGalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_pipes_truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_17__components_category_cat_item_cat_item_component__["a" /* CatItemComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_errors_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_category_cat_item_item_opinions_item_opinions_component__["a" /* ItemOpinionsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_address_details_address_details_component__["a" /* AddressDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_order_submit_order_submit_component__["a" /* OrderSubmitComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__shared_services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_12__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__shared_services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_14__shared_services_shopping_service__["a" /* ShoppingService */], __WEBPACK_IMPORTED_MODULE_15__shared_services_order_service__["a" /* OrderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/address-details/address-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/address-details/address-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-3\">\n\n  <h2 class=\"text-center \"> Delivery address </h2>\n  <div class=\" mb-5\">\n\n    <a [routerLink]=\"['/shopping-cart']\">\n      <button class=\"btn btn-outline-primary float-left\" type=\"submit\">\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> &ensp;Back\n      </button>\n    </a>\n    <a [routerLink]=\"['/order-submit']\">\n      <button class=\"btn btn-outline-primary float-right\" (click)=\"submitAddress()\" [disabled]=\"addressForm.invalid\" type=\"submit\">\n        Next &ensp;\n        <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n      </button>\n    </a>\n  </div>\n</div>\n\n<div class=\"row my-5\">\n  <div class=\"col-md-6\">\n    <hr>\n    <h3>Enter address</h3>\n    <form #addressForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Address</label>\n        <input class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" maxlength=\"30\" type=\"text\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Postal Code</label>\n        <input class=\"form-control\" [(ngModel)]=\"postalCode\" name=\"postalCode\" maxlength=\"10\" type=\"text\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>City</label>\n        <input class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" maxlength=\"30\" type=\"text\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Country</label>\n        <input class=\"form-control\" [(ngModel)]=\"country\" name=\"country\" maxlength=\"30\" type=\"text\" required>\n      </div>\n    </form>\n  </div>\n  <div class=\"col-md-6\">\n    <hr>\n    <h3>Previously used addresses</h3>\n    <h5 *ngIf=\"user.addressList?.length === 0\"> There are no addresses yet</h5>\n    <div class=\"row\" *ngFor=\"let fullAddress of user.addressList;let i = index\" (click)=\"setAddress(i)\">\n      <div class=\"col-12 p-2 highlight\">\n        <h5>\n          <strong>{{fullAddress.postalCode}}, {{fullAddress.city}}</strong>\n        </h5>\n        <h5>{{fullAddress.address}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/address-details/address-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shopping_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressDetailsComponent = (function () {
    function AddressDetailsComponent(authService, shoppingService, router) {
        this.authService = authService;
        this.shoppingService = shoppingService;
        this.router = router;
        this.user = {};
    }
    AddressDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
                if (_this.user.lastAddress) {
                    _this.address = profile.user.lastAddress.address;
                    _this.postalCode = profile.user.lastAddress.postalCode;
                    _this.city = profile.user.lastAddress.city;
                    _this.country = profile.user.lastAddress.country;
                }
                if (profile.user.shoppingCart.length == 0)
                    _this.router.navigate(['/shopping-cart']);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    AddressDetailsComponent.prototype.setAddress = function (i) {
        this.address = this.user.addressList[i].address,
            this.postalCode = this.user.addressList[i].postalCode,
            this.city = this.user.addressList[i].city,
            this.country = this.user.addressList[i].country;
    };
    AddressDetailsComponent.prototype.submitAddress = function () {
        var fullAddress = {
            address: this.address,
            postalCode: this.postalCode,
            city: this.city,
            country: this.country
        };
        this.shoppingService.setLastAddress(this.user, fullAddress)
            .subscribe(function (data) { return data; });
    };
    AddressDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-address-details',
            template: __webpack_require__("../../../../../src/app/components/address-details/address-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/address-details/address-details.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_shopping_service__["a" /* ShoppingService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddressDetailsComponent);
    return AddressDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/category/cat-gallery/cat-gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item{\n    width: 100%;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/cat-gallery/cat-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center my-4\">\n  <h2>\n    <strong>{{category | uppercase }}</strong>\n  </h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-2 my-1\">\n    <div class=\"form-group\">\n      <label>Subcategory</label>\n      <select class=\"form-control\" (change)=\"filterChange()\" [(ngModel)]=\"selectedSubcategory\" name=\"selectedSubcategory\">\n        <option>Show all</option>\n        <option *ngFor=\"let subcategory of subcategories\">{{subcategory}}</option>\n\n      </select>\n    </div>\n  </div>\n  <div class=\"col-md-2 my-1\">\n    <div class=\"form-group\">\n      <label>Brand</label>\n      <select class=\"form-control\" (change)=\"filterChange()\" [(ngModel)]=\"selectedBrand\" name=\"selectedBrand\">\n        <option>Show all</option>\n        <option *ngFor=\"let brand of brands\">{{brand}}</option>\n\n      </select>\n    </div>\n  </div>\n  <div class=\"col-md-2 my-1\">\n    <div class=\"form-group\">\n      <label>Price-Min:</label>\n      <input class=\"form-control form-control\" (change)=\"filterChange()\" [(ngModel)]=\"minPrice\" name=\"minPrice\" type=\"number\" step=\"10\"\n        placeholder=\"0\" max=\"{{maxPrice}}\" min=\"0\">\n    </div>\n  </div>\n  <div class=\"col-md-2 my-1\">\n    <div class=\"form-group\">\n      <label>Price-Max:</label>\n      <input class=\"form-control form-control\" (change)=\"filterChange()\" [(ngModel)]=\"maxPrice\" name=\"maxPrice\" type=\"number\" step=\"10\"\n        placeholder=\"3000\" min=\"{{minPrice}}\">\n    </div>\n  </div>\n  <div class=\"col-md-2 my-1\">\n    <div class=\"form-group\">\n      <label>Size</label>\n      <select class=\"form-control\" (change)=\"filterChange()\" [(ngModel)]=\"selectedSize\" name=\"selectedSize\">\n        <option>Show all</option>\n        <option *ngFor=\"let size of sizes\">{{size}}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"col-md-2 my-1\">\n    <div class=\"form-group\">\n      <label class=\"red\">Search...</label>\n      <input class=\"form-control red\" type=\"text\" placeholder=\"Search phase\" (keyup)=\"filterChange()\" [(ngModel)]=\"searchPhase\"\n        name=\"searchPhase\">\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-3 my-2\" *ngFor=\"let item of itemsFiltered\">\n    <a [routerLink]=\"['/item', item._id]\">\n      <img class=\"item-img\" src=\"{{item.imgs[0]}}\">\n\n      <h5>\n        <strong>{{item.brand}}</strong>\n      </h5>\n      <h5>{{item.name | truncate}} </h5>\n      <div class=\"float-right\">\n        <h5 [ngClass]=\"{'sale': item.newPrice}\">\n          PLN {{item.price }}\n          <label class=\"red\" *ngIf=\"item.newPrice\"> &nbsp;PLN {{item.newPrice }}</label>\n        </h5>\n\n      </div>\n    </a>\n  </div>\n</div>\n<div *ngIf=\"itemsFiltered?.length === 0\" class=\"text-center m-5\">\n  <p class=\"fa fa-search\" style=\"font-size:200px;\" aria-hidden=\"true\"> </p>\n  <h1>No results found.</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/category/cat-gallery/cat-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_gallery_service__ = __webpack_require__("../../../../../src/app/shared/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatGalleryComponent = (function () {
    function CatGalleryComponent(galleryService, router, activatedRoute) {
        this.galleryService = galleryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.items = [];
        this.itemsFiltered = [];
        this.selectedSubcategory = "Show all";
        this.selectedBrand = "Show all";
        this.selectedSize = "Show all";
        this.searchPhase = "";
    }
    CatGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.switchMap(function (params) {
            _this.category = params['category'];
            return _this.galleryService.getItemsByCat(params['category']);
        })
            .subscribe(function (items) {
            _this.items = items;
            _this.itemsFiltered = items;
            _this.subcategories = [];
            _this.sizes = [];
            _this.brands = [];
            _this.minPrice = 0;
            _this.maxPrice = 3000;
            var _loop_1 = function (item) {
                if (!_this.subcategories.some(function (x) { return x === item.subcategory; })) {
                    _this.subcategories.push(item.subcategory);
                }
                if (!_this.brands.some(function (x) { return x === item.brand; })) {
                    _this.brands.push(item.brand);
                }
                var _loop_2 = function (i) {
                    if (!_this.sizes.some(function (x) { return x === item.sizes[i].size; })) {
                        _this.sizes.push(item.sizes[i].size);
                    }
                };
                for (var i = 0; i < item.sizes.length; i++) {
                    _loop_2(i);
                }
            };
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                _loop_1(item);
            }
            //If no items in category goto 404
            if (_this.items.length <= 0)
                _this.router.navigate(['/404']);
        });
    };
    CatGalleryComponent.prototype.filterChange = function () {
        var _this = this;
        if (this.minPrice < 0 || this.minPrice > this.maxPrice)
            this.minPrice = 0;
        if (this.maxPrice < 0 || this.maxPrice < this.minPrice || this.maxPrice > 3000)
            this.maxPrice = 3000;
        this.itemsFiltered = this.items.filter(function (item) {
            return item.price >= _this.minPrice
                && item.price <= _this.maxPrice
                && (item.subcategory == _this.selectedSubcategory || _this.selectedSubcategory == "Show all")
                && (item.brand == _this.selectedBrand || _this.selectedBrand == "Show all")
                && (item.sizes.some(function (x) { return x.size == _this.selectedSize && x.available > 0; }) || _this.selectedSize == "Show all")
                && (item.brand.toLowerCase().includes(_this.searchPhase.toLowerCase())
                    || item.name.toLowerCase().includes(_this.searchPhase.toLowerCase()));
        });
    };
    CatGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cat-gallery',
            template: __webpack_require__("../../../../../src/app/components/category/cat-gallery/cat-gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/cat-gallery/cat-gallery.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_gallery_service__["a" /* GalleryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CatGalleryComponent);
    return CatGalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/category/cat-item/cat-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/cat-item/cat-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\">\n  <div class=\"row\">\n    <div class=\"col-md-1 my-3  hidden-md\">\n      <img (click)=\"selectImage(i)\" *ngFor=\"let img of item.imgs; let i= index\" class=\"item-img  my-2\" src=\"{{img}}\">\n    </div>\n\n    <div class=\"col-md-5 my-3\">\n      <img class=\"item-img my-2\" src=\"{{item.imgs[imageSelected]}}\">\n    </div>\n\n    <div class=\"col-md-5 offset-md-1 my-5\">\n      <h3>\n        <strong>{{item.brand}}</strong>\n      </h3>\n      <h5>{{item.name}}</h5>\n      <h4 [ngClass]=\"{'sale': item.newPrice}\">\n        PLN {{item.price }}\n        <label class=\"red\" *ngIf=\"item.newPrice\"> &nbsp;PLN {{item.newPrice }}</label>\n      </h4>\n\n      <form (submit)=\"addToCart(sizeSelect.value); buyForm.reset()\" #buyForm=\"ngForm\">\n        <div class=\"form-group my-5\">\n\n          <h3 *ngIf=\"sizeSelect.dirty && available > 0\">Available in stock: {{available}}</h3>\n          <h3 *ngIf=\"sizeSelect.dirty && available == 0\">This size is unavailable</h3>\n          <h3 *ngIf=\"!sizeSelect.dirty\">Choose size</h3>\n\n          <select class=\"form-control\" #sizeSelect=\"ngModel\" (change)=\"onSizeSelect(sizeSelect.value)\" [(ngModel)]=\"sizeSelected\" name=\"sizeSelected\"\n            required>\n            <option *ngFor=\"let size of item.sizes; let i = index\" [value]=\"i\">{{size.size}}</option>\n          </select>\n          <button *ngIf=\"authService.loggedIn()\" class=\"btn btn-outline-primary my-2\" [disabled]=\"buyForm.invalid || available == 0\"\n            style=\"width:100%;\" type=\"submit\">Add to cart</button>\n          <h3 class=\"my-3 \" *ngIf=\"!authService.loggedIn()\">Log in to continue shopping</h3>\n        </div>\n      </form>\n\n      <h4>\n        <strong>Details</strong>\n      </h4>\n      <h5 *ngFor=\"let detail of item.details\">{{detail}}</h5>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-5 offset-md-1\">\n      <h2>\n        <strong>Opinions ({{item.opinions.length}})</strong>\n      </h2>\n      <h4 *ngIf=\"item.opinions.length == 0\">There are no reviews for this product yet</h4>\n\n      <div *ngFor=\"let opinion of item.opinions; let i = index\">\n        <h1 class=\"float-right\" *ngIf=\"authService.loggedIn() && (opinion.user_id == user_id)\" (click)=\"opinionDelete(i)\">\n          <a>\n            <i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\n          </a>\n        </h1>\n        <h6>\n          <strong>{{opinion.name}} </strong>\n        </h6>\n        <p>{{opinion.opinionText}}</p>\n      </div>\n    </div>\n    <div class=\"col-md-5 offset-md-1\">\n      <app-item-opinions (onOpinionAdded)=\"onOpinionAdded($event)\"></app-item-opinions>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/category/cat-item/cat-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_gallery_service__ = __webpack_require__("../../../../../src/app/shared/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_shopping_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CatItemComponent = (function () {
    function CatItemComponent(galleryService, authService, activatedRoute, flashMessagesService, shoppingService, router) {
        this.galleryService = galleryService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.flashMessagesService = flashMessagesService;
        this.shoppingService = shoppingService;
        this.router = router;
        this.shoppingCart = [];
        this.imageSelected = 0;
    }
    CatItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.switchMap(function (params) { return _this.galleryService.getItemById(params['_id']); })
            .subscribe(function (item) {
            if (item.notFound)
                _this.router.navigate(['/404']);
            else {
                _this.item = item;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
                _this.user_id = profile.user.id;
                _this.shoppingCart = profile.user.shoppingCart;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    CatItemComponent.prototype.addToCart = function (sizeSelected) {
        var _this = this;
        this.galleryService.getItemById(this.item._id)
            .subscribe(function (item) {
            _this.available = item.sizes[sizeSelected].available;
            if (_this.available > 0) {
                var itemAdded = {
                    _id: _this.item._id,
                    brand: _this.item.brand,
                    name: _this.item.name,
                    price: _this.item.price,
                    newPrice: undefined,
                    sizes: _this.item.sizes,
                    img: _this.item.imgs[0],
                    sizeSelected: _this.item.sizes[sizeSelected].size,
                    quantity: 1
                };
                if (_this.item.newPrice) {
                    itemAdded.newPrice = _this.item.newPrice;
                }
                var itemFromCart = (_this.shoppingCart.find(function (x) { return x._id === _this.item._id
                    && x.sizeSelected === _this.item.sizes[sizeSelected].size; }));
                for (var _i = 0, _a = _this.shoppingCart; _i < _a.length; _i++) {
                    var item_1 = _a[_i];
                    if (item_1 === itemFromCart) {
                        itemAdded.quantity = itemFromCart.quantity + 1;
                        _this.shoppingService.removeFromCart(_this.user, _this.shoppingCart.indexOf(itemFromCart))
                            .subscribe(function (data) { return data; });
                    }
                }
                _this.shoppingService.addToCart(_this.user, itemAdded)
                    .subscribe(function (data) { return data; });
                _this.flashMessagesService.show('Item added to cart', { cssClass: 'alert-success', timeout: 1500 });
            }
            else {
                _this.flashMessagesService.show('Sorry, the product has run out', { cssClass: 'alert-danger', timeout: 1500 });
            }
        });
    };
    CatItemComponent.prototype.onSizeSelect = function () {
        var _this = this;
        if (this.item) {
            this.available = this.item.sizes[this.sizeSelected].available;
            var itemFromCart = (this.shoppingCart.find(function (x) { return x._id === _this.item._id
                && x.sizeSelected === _this.item.sizes[_this.sizeSelected].size; }));
            if (itemFromCart)
                this.available -= itemFromCart.quantity;
        }
    };
    CatItemComponent.prototype.onOpinionAdded = function (opinion) {
        this.item.opinions.push(opinion);
        this.galleryService.updateOpinions(this.item)
            .subscribe(function (data) { return data; });
    };
    CatItemComponent.prototype.opinionDelete = function (index) {
        this.item.opinions.splice(index, 1);
        this.galleryService.updateOpinions(this.item)
            .subscribe(function (data) { return data; });
    };
    CatItemComponent.prototype.selectImage = function (i) {
        this.imageSelected = i;
    };
    CatItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cat-item',
            template: __webpack_require__("../../../../../src/app/components/category/cat-item/cat-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/cat-item/cat-item.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_gallery_service__["a" /* GalleryService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_shopping_service__["a" /* ShoppingService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CatItemComponent);
    return CatItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/category/cat-item/item-opinions/item-opinions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n    resize: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/cat-item/item-opinions/item-opinions.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2><strong>Add your opinion </strong></h2>\n\n  <form (submit)=\"onOpinionSubmit(); opinionForm.reset()\" #opinionForm=\"ngForm\">\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" [(ngModel)]=\"opinionText\" name=\"opinionText\" maxlength=\"140\" rows=\"4\" required></textarea>\n      <button class=\"btn btn-outline-primary my-2\" [disabled]=\"opinionForm.invalid\" style=\"width:100%;\" type=\"submit\">Add opinion!</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/category/cat-item/item-opinions/item-opinions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemOpinionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemOpinionsComponent = (function () {
    function ItemOpinionsComponent(authService) {
        this.authService = authService;
        this.name = "";
        this.opinionText = "";
        this.onOpinionAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ItemOpinionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
                _this.name = (profile.user.firstName + ' ' + profile.user.lastName);
                _this.user_id = profile.user.id;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    ItemOpinionsComponent.prototype.onOpinionSubmit = function (opinionForm) {
        var opinion = { user_id: this.user_id, name: this.name, opinionText: this.opinionText };
        this.onOpinionAdded.emit(opinion);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ItemOpinionsComponent.prototype, "onOpinionAdded", void 0);
    ItemOpinionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-item-opinions',
            template: __webpack_require__("../../../../../src/app/components/category/cat-item/item-opinions/item-opinions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/cat-item/item-opinions/item-opinions.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]])
    ], ItemOpinionsComponent);
    return ItemOpinionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/errors/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/errors/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center m-5\" >\n  <p class=\"fa fa-bomb\" style=\"font-size:200px;\" aria-hidden=\"true\">404 </p>\n  <h1>Congratulations. You broke it.</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/errors/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/components/errors/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/errors/not-found/not-found.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"mt-5\">\n  <hr class=\"featurette-divider\">\n  <div class=\"row mx-0\">\n    <div class=\"col-md-4 px-5\">\n      <h5>Payment methods</h5>\n      <div class=\"row px-2\">\n        <h1>\n          <i class=\"fa fa-cc-visa px-2\" aria-hidden=\"true\"></i>\n        </h1>\n        <h1>\n          <i class=\"fa fa-cc-paypal px-2\" aria-hidden=\"true\"></i>\n        </h1>\n        <h1>\n          <i class=\"fa fa-cc-mastercard px-2\" aria-hidden=\"true\"></i>\n        </h1>\n      </div>\n    </div>\n    <div class=\"col-md-4 px-5\">\n      <h5>Free delivery and 100 days return</h5>\n      <div class=\"row px-2\">\n        <h1>\n          <i class=\"fa fa-truck px-2\" aria-hidden=\"true\"></i>\n        </h1>\n        <h1>\n          <i class=\"fa fa-calendar px-2\" aria-hidden=\"true\"></i>\n        </h1>\n        <h1>\n          <i class=\"fa fa-reply px-2\" aria-hidden=\"true\"></i>\n        </h1>\n      </div>\n    </div>\n    <div class=\"col-md-4 px-5\">\n      <h5>Follow us on</h5>\n      <div class=\"row px-2\">\n        <h1>\n          <i class=\"fa fa-facebook-square px-2\" aria-hidden=\"true\"></i>\n        </h1>\n        <h1>\n          <i class=\"fa fa-instagram px-2\" aria-hidden=\"true\"></i>\n        </h1>\n        <h1>\n          <i class=\"fa fa-twitter-square px-2\" aria-hidden=\"true\"></i>\n        </h1>\n      </div>\n    </div>\n  </div>\n  <p class=\"text-center\">&copy; 2017 Jakub Zaręba</p>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-5 \">\n  <div class=\"my-5 text-center \">\n    <h1 class=\"title\">\n      <strong> GoldShack</strong>\n    </h1>\n    <h3 class=\"font-italic\">Let's start with the basics of building a man's wardrobe...</h3>\n  </div>\n  <div class=\"slideshow-container\">\n    <div class=\"\" *ngFor=\"let image of images; let i = index\">\n      <div [ngClass]=\"{'hiddenSlides':selectedImageIndex !== i ,'fadeIn ' : selectedImageIndex === i}\">\n        <a [routerLink]=\"['/category', image.category]\">\n          <div class=\"text hidden-md\">{{image.text}}</div>\n          <img src=\"{{image.url}}\" style=\"width:100%\">\n        </a>\n      </div>\n    </div>\n    <a class=\"prev\" (click)=\"previousImage()\">&#10094;</a>\n    <a class=\"next\" (click)=\"nextImage()\">&#10095;</a>\n  </div>\n  <div class=\"text-center font-italic hidden-md m-5\">\n    <h4>\"A man's clothing not only determines whether he feels comfortable or fashionable.</h4>\n    <p>Men's fashion gives you unlimited choices to create your image and even show some of your character, so it's so important.\n      The clothes tell the most about the man, with his help we can get the result of his choice if we can properly use the\n      knowledge of clothes and fashion.\"</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
        this.selectedImageIndex = 0;
        this.images = [{
                url: "https://static.pexels.com/photos/297933/pexels-photo-297933.jpeg",
                category: "clothing",
                text: "Men's clothing, men's clothes tailored to your needs."
            },
            {
                url: "https://static.pexels.com/photos/404168/pexels-photo-404168.jpeg",
                category: "footwear",
                text: "Men's shoes give character to the whole stylization and this is what you pay attention to at the first moment. Meet comfortable and modern models that will make you look even better."
            },
            {
                url: "https://static.pexels.com/photos/685530/pexels-photo-685530.jpeg",
                category: "sport",
                text: "Properly selected men's sports clothing and footwear today is almost half of the success in each discipline! "
            },
            {
                url: "https://static.pexels.com/photos/322207/pexels-photo-322207.jpeg",
                category: "accessories",
                text: "Men's accessories and accessories that tempt with a flash and encourage high quality."
            }];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.nextImage();
        }, 7000);
    };
    HomePageComponent.prototype.nextImage = function () {
        if (this.selectedImageIndex + 1 < this.images.length) {
            this.selectedImageIndex = this.selectedImageIndex + 1;
        }
        else
            this.selectedImageIndex = 0;
    };
    HomePageComponent.prototype.previousImage = function () {
        if (this.selectedImageIndex - 1 >= 0) {
            this.selectedImageIndex = this.selectedImageIndex - 1;
        }
        else
            this.selectedImageIndex = this.images.length - 1;
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n      <h2>GoldShack</h2>\n    </a>\n  </div>\n  <div class=\"col-md-8 \">\n    <form class=\"form-inline my-2 float-right\" #loginForm=\"ngForm\" (submit)=\"onLoginSubmit()\">\n      <input class=\"form-control mr-sm-2\" *ngIf=\"!authService.loggedIn()\" [(ngModel)]=\"email\" name=\"email\" type=\"text\" placeholder=\"Email\"\n        required>\n      <input class=\"form-control mr-sm-2\" *ngIf=\"!authService.loggedIn()\" [(ngModel)]=\"password\" name=\"password\" type=\"password\"\n        placeholder=\"Password\" required>\n      <button class=\"btn btn-outline-primary my-2 \" *ngIf=\"!authService.loggedIn()\" type=\"submit\" [disabled]=\"loginForm.invalid\">Log in</button>\n      <a class=\"mx-2\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/registration']\">\n        <h1>\n          <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n        </h1>\n      </a>\n      <a [routerLink]=\"['/shopping-cart']\" *ngIf=\"authService.loggedIn()\">\n        <h1>\n          <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n        </h1>\n      </a>\n      <a class=\"mx-2\" [routerLink]=\"['/profile']\" *ngIf=\"authService.loggedIn()\">\n        <h1>\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n        </h1>\n      </a>\n      <button class=\"btn btn-outline-primary my-2 \" *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" type=\"submit\">Log out</button>\n    </form>\n  </div>\n</div>\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <button [ngClass]=\"{'collapsed':isCollapsed == true}\" class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div [ngClass]=\"{'show': isCollapsed == false}\" class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" (click)=\"onClick()\" [routerLink]=\"['/category/clothing']\">Clothing</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" (click)=\"onClick()\" [routerLink]=\"['/category/footwear']\">Footwear</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" (click)=\"onClick()\" [routerLink]=\"['/category/sport']\">Sport</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" (click)=\"onClick()\" [routerLink]=\"['/category/accessories']\">Accessories</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link red\" (click)=\"onClick()\" [routerLink]=\"['/category/sale']\">Sale!</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = (function () {
    function NavigationComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.onClick = function () {
        this.isCollapsed = true;
    };
    NavigationComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password,
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 1500
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 1500
                });
            }
        });
    };
    NavigationComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/']);
        return false;
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/order-submit/order-submit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order-submit/order-submit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-3\">\n  <h2 class=\"text-center \"> Order submition </h2>\n  <div class=\" mb-5\">\n    <a [routerLink]=\"['/address-details']\">\n      <button class=\"btn btn-outline-primary float-left\" type=\"submit\">\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> &ensp;Back\n      </button>\n    </a>\n  </div>\n</div>\n\n<div class=\"row my-5\">\n  <div class=\"col-md-7 \">\n    <hr>\n    <h3>Items in cart</h3>\n    <table class=\"table table-hover \">\n      <tbody>\n        <tr *ngFor=\"let item of user.shoppingCart;let i = index\">\n          <td style=\"width:120px\">\n            <a [routerLink]=\"['/item', item._id]\">\n              <img class=\"item-img-small\" src=\"{{item.img}}\">\n            </a>\n          </td>\n          <td>\n            <h5>\n              <strong>{{item.brand}}</strong>\n            </h5>\n            <h5>{{item.name | truncate}}\n            </h5>\n            <h5>Size: {{item.sizeSelected}}</h5>\n            <h5>Quantity: x{{item.quantity}}</h5>\n            <h4 *ngIf=\"!item.newPrice\">{{item.price | currency:'PLN '}}</h4>\n            <h4 class=\"red\" *ngIf=\"item.newPrice\"> {{item.newPrice | currency:'PLN '}}</h4>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-md-5\">\n    <hr>\n    <h3>Delivery info</h3>\n    <h5> {{user.firstName}} {{user.lastName}}</h5>\n    <h5> {{lastAddress?.address}}</h5>\n    <h5> {{lastAddress?.postalCode}} , {{lastAddress?.city}} </h5>\n    <h5>\n      <strong>{{lastAddress?.country}}</strong>\n    </h5>\n    <h2 class=\"mt-5 mb-3\"> Total price : {{totalPrice| currency:'PLN '}} </h2>\n    <button class=\"btn btn-outline-primary\" style=\"width:100%;\" (click)=\"submitOrder()\" type=\"submit\">\n      Submit order&ensp;\n      <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/order-submit/order-submit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSubmitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shopping_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_order_service__ = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_gallery_service__ = __webpack_require__("../../../../../src/app/shared/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderSubmitComponent = (function () {
    function OrderSubmitComponent(authService, galleryService, shoppingService, flashMessagesService, orderService, router) {
        this.authService = authService;
        this.galleryService = galleryService;
        this.shoppingService = shoppingService;
        this.flashMessagesService = flashMessagesService;
        this.orderService = orderService;
        this.router = router;
        this.user = {};
        this.order = {};
        this.totalPrice = 0;
    }
    OrderSubmitComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                if (profile.user.shoppingCart.length === 0)
                    _this.router.navigate(['/shopping-cart']);
                _this.user = profile.user;
                _this.lastAddress = profile.user.lastAddress;
                for (var _i = 0, _a = profile.user.shoppingCart; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.newPrice)
                        _this.totalPrice += (item.quantity * item.newPrice);
                    else
                        _this.totalPrice += (item.quantity * item.price);
                }
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    OrderSubmitComponent.prototype.submitOrder = function () {
        var newOrder = {
            userId: this.user.id,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            date: Date.now(),
            shoppingCart: this.user.shoppingCart,
            totalPrice: this.totalPrice,
            fullAddress: this.user.lastAddress
        };
        var _loop_1 = function (itemFromCart) {
            var size = itemFromCart.sizes.find(function (x) { return x.size === itemFromCart.sizeSelected; });
            var index = itemFromCart.sizes.indexOf(size);
            itemFromCart.sizes[index].available -= itemFromCart.quantity;
            this_1.galleryService.updateAvailability(itemFromCart)
                .subscribe(function (item) { return item; }, function (err) {
                console.log(err);
                return false;
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = newOrder.shoppingCart; _i < _a.length; _i++) {
            var itemFromCart = _a[_i];
            _loop_1(itemFromCart);
        }
        this.orderService.addOrder(newOrder).subscribe(function (data) { return data; });
        this.shoppingService.clearCart(this.user).subscribe(function (data) { return data; });
        this.shoppingService.addAddress(this.user, this.user.lastAddress)
            .subscribe(function (data) { return data; });
        this.flashMessagesService.show('Your order has been submitted', { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/profile']);
    };
    OrderSubmitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-submit',
            template: __webpack_require__("../../../../../src/app/components/order-submit/order-submit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/order-submit/order-submit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_gallery_service__["a" /* GalleryService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_shopping_service__["a" /* ShoppingService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], OrderSubmitComponent);
    return OrderSubmitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3\">\n  <div class=\"col-md-3\">\n\n    <h3>User info</h3>\n    <hr>\n    <h6>\n      <strong> Frist name : </strong>{{user.firstName}}\n    </h6>\n    <h6>\n      <strong>Last name : </strong>{{user.lastName}}\n    </h6>\n    <h6>\n      <strong>Email : </strong>{{user.email}}\n    </h6>\n    <h6>\n      <strong>Adress list :</strong>\n    </h6>\n    <div *ngFor=\"let fullAddress of user.addressList;let i = index\">\n      <hr>\n      <h6>\n        <strong>{{fullAddress.postalCode}}, {{fullAddress.city}}</strong>\n      </h6>\n      <h6>{{fullAddress.address}}</h6>\n    </div>\n  </div>\n  <div class=\"col-md-9\">\n    <h3>Order history</h3>\n\n    <div *ngIf=\"orders?.length === 0\">\n      <hr>\n      <h5>No orders in history</h5>\n    </div>\n\n    <div *ngFor=\"let order of orders; let i = index\">\n      <hr>\n      <div class=\"row\">\n\n        <div class=\"col-md-3\">\n          <h5 *ngIf=\"i === 0\" class=\"hidden-md\">Order no.</h5>\n          <h6 class=\"red\"> {{order._id }} </h6>\n          <h6> {{order.date | date: 'MMM d, y, hh:mm a'}} </h6>\n\n        </div>\n\n        <div class=\"col-md-6\">\n          <h5 *ngIf=\"i === 0\" class=\"hidden-md\">Items</h5>\n          <span *ngFor=\"let item of order.shoppingCart;let i = index\">\n            <a [routerLink]=\"['/item', item._id]\">\n              <h6>{{i+1}}.\n                <strong>{{item.brand}}</strong> {{item.name}},\n                <strong>size: {{item.sizeSelected}}</strong>\n                <label *ngIf=\"item.quantity > 1\">, quantity: x{{item.quantity}}</label>\n              </h6>\n            </a>\n          </span>\n        </div>\n        <div class=\"col-md-3\">\n          <h5 *ngIf=\"i === 0\" class=\"hidden-md\">Status</h5>\n          <h6>\n            realization\n          </h6>\n          <h6>\n            <strong>Cancel </strong>\n          </h6>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_order_service__ = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, orderService, router) {
        this.authService = authService;
        this.orderService = orderService;
        this.router = router;
        this.user = {};
        this.orders = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                if (!_this.authService.loggedIn()) {
                    _this.router.navigate(['/']);
                }
                _this.user = profile.user;
                _this.orderService.getOrdersByUserId(_this.user.id).subscribe(function (orders) {
                    _this.orders = orders;
                });
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3 p-4\">\n    <h1 class=\"text-center\">Welcome to GoldShack!</h1>\n    <hr class=\"featurette-divider\">\n    <form (submit)=\"onRegisterSubmit()\" #registerForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label>First name</label>\n        <input class=\"form-control\" [(ngModel)]=\"firstName\" name=\"firstName\" type=\"text\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Last name</label>\n        <input class=\"form-control\" [(ngModel)]=\"lastName\" name=\"lastName\" type=\"text\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Email address</label>\n        <input class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" type=\"email\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" required>\n        <small class=\"form-text text-muted\">Please enter at least 6 characters.</small>\n      </div>\n      <div class=\"form-group\">\n        <label>Confirm password</label>\n        <input class=\"form-control \" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" required>\n      </div>\n      <div class=\"form-group\">\n        <small class=\"form-text text-muted my-4\">\n          <input [(ngModel)]=\"agree\" name=\"agree\" type=\"checkbox\" style=\"width:20px;height:20px;\" required> Click here to indicate that you have read and agree to the terms presented in the Terms and Conditions agreement.\n        </small>\n        <button class=\"btn btn-outline-primary \" style=\"width:100%;\" type=\"submit\" [disabled]=\"registerForm.invalid\">Register</button>\n\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_validate_service__ = __webpack_require__("../../../../../src/app/shared/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = (function () {
    function RegistrationComponent(validateService, authService, flashMessagesService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']);
        }
    };
    RegistrationComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        //Creates new user based on form data
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
        };
        // Required Fields  
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 1500 });
            return false;
        }
        // Compare Passwords  
        if (!this.validateService.comparePasswords(user)) {
            this.flashMessagesService.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 1500 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail((user.email).toString())) {
            this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 1500 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 1500 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
            }
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/registration/registration.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"shoppingCart?.length > 0\">\n  <div class=\"my-3\">\n    <h2 class=\"text-center\">\n      Shopping cart: {{totalPrice| currency:'PLN '}}\n    </h2>\n    <a [routerLink]=\"['/address-details']\">\n      <button class=\"btn btn-outline-primary float-right\" type=\"submit\">\n        Next &ensp;\n        <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n      </button>\n    </a>\n  </div>\n  <div class=\"row my-5\">\n    <div class=\"col-md-6 p-2 \" *ngFor=\"let item of user.shoppingCart;let i = index\">\n      <hr>\n      <div class=\"row\">\n\n        <div class=\"col-5\">\n          <a [routerLink]=\"['/item', item._id]\">\n            <img class=\"item-img\" src=\"{{item.img}}\">\n          </a>\n        </div>\n        <div class=\"col-5\">\n          <h5>\n            <strong>{{item.brand}}</strong>\n          </h5>\n          <h5>{{item.name | truncate}}\n          </h5>\n          <h5>Size: {{item.sizeSelected}}</h5>\n          <h5>Quantity: x{{item.quantity}}</h5>\n          <h4 *ngIf=\"!item.newPrice\">{{item.price | currency:'PLN '}}</h4>\n          <h4 class=\"red\" *ngIf=\"item.newPrice\"> {{item.newPrice | currency:'PLN '}}</h4>\n        </div>\n        <div class=\"col-1\">\n          <h1>\n            <a (click)=\"removeFromCart(i)\">\n              <i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\n            </a>\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"shoppingCart?.length == 0\" class=\"text-center m-5\">\n  <p class=\"fa fa-shopping-cart\" style=\"font-size:200px;\" aria-hidden=\"true\"> </p>\n  <h1>Your shopping cart is empty.</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_shopping_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(authService, shoppingService, flashMessagesService, router) {
        this.authService = authService;
        this.shoppingService = shoppingService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.totalPrice = 0;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
                _this.shoppingCart = profile.user.shoppingCart;
                for (var _i = 0, _a = _this.shoppingCart; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.newPrice)
                        _this.totalPrice += (item.quantity * item.newPrice);
                    else
                        _this.totalPrice += (item.quantity * item.price);
                }
                if (!_this.authService.loggedIn()) {
                    _this.router.navigate(['/']);
                }
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    ShoppingCartComponent.prototype.removeFromCart = function (itemRemoved) {
        if (this.shoppingCart[itemRemoved].newPrice)
            this.totalPrice -= (this.shoppingCart[itemRemoved].quantity * this.shoppingCart[itemRemoved].newPrice);
        else
            this.totalPrice -= (this.shoppingCart[itemRemoved].quantity * this.shoppingCart[itemRemoved].price);
        this.shoppingService.removeFromCart(this.user, itemRemoved)
            .subscribe(function (data) { return data; });
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_shopping_service__["a" /* ShoppingService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/truncate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value) {
        var limit = 12;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_category_cat_item_cat_item_component__ = __webpack_require__("../../../../../src/app/components/category/cat-item/cat-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_category_cat_gallery_cat_gallery_component__ = __webpack_require__("../../../../../src/app/components/category/cat-gallery/cat-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_errors_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/errors/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_address_details_address_details_component__ = __webpack_require__("../../../../../src/app/components/address-details/address-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_order_submit_order_submit_component__ = __webpack_require__("../../../../../src/app/components/order-submit/order-submit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'category/:category', component: __WEBPACK_IMPORTED_MODULE_6__components_category_cat_gallery_cat_gallery_component__["a" /* CatGalleryComponent */] },
    { path: 'item/:_id', component: __WEBPACK_IMPORTED_MODULE_5__components_category_cat_item_cat_item_component__["a" /* CatItemComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__["a" /* RegistrationComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_7__components_errors_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_9__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'address-details', component: __WEBPACK_IMPORTED_MODULE_10__components_address_details_address_details_component__["a" /* AddressDetailsComponent */] },
    { path: 'order-submit', component: __WEBPACK_IMPORTED_MODULE_11__components_order_submit_order_submit_component__["a" /* OrderSubmitComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: '**', redirectTo: '/404' },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // this.isDev = true;
        this.isDev = false;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        sessionStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev)
            return 'http://localhost:3000/' + ep;
        else
            return ep;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryService = (function () {
    function GalleryService(http) {
        this.http = http;
        // this.isDev = true;
        this.isDev = false;
    }
    GalleryService.prototype.updateOpinions = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('items/updateOpinions/');
        return this.http.put(ep + item._id, item, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GalleryService.prototype.updateAvailability = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        console.log(item);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('items/updateAvailability/');
        return this.http.put(ep + item._id, item, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GalleryService.prototype.getItemById = function (_id) {
        var ep = this.prepEndpoint('items/getItemById/');
        return this.http.get(ep + _id)
            .map(function (res) { return res.json(); });
    };
    GalleryService.prototype.getItemsByCat = function (category) {
        var ep = this.prepEndpoint('items/getItemByCat/');
        return this.http.get(ep + category)
            .map(function (res) { return res.json(); });
    };
    GalleryService.prototype.prepEndpoint = function (ep) {
        if (this.isDev)
            return 'http://localhost:3000/' + ep;
        else
            return ep;
    };
    GalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
        // this.isDev = true;
        this.isDev = false;
    }
    OrderService.prototype.addOrder = function (order) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('orders/addOrder');
        return this.http.post(ep, order, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.getOrdersByUserId = function (id) {
        var ep = this.prepEndpoint('orders/getOrdersByUserId/');
        return this.http.get(ep + id)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.prepEndpoint = function (ep) {
        if (this.isDev)
            return 'http://localhost:3000/' + ep;
        else
            return ep;
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/shopping.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingService = (function () {
    function ShoppingService(http) {
        this.http = http;
        // this.isDev = true;
        this.isDev = false;
    }
    //updates user.addressList - data from form in address-details
    ShoppingService.prototype.addAddress = function (user, fullAddress) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/updateAddressList/');
        //checks whether the address already exists in addtessList
        var addressExist = user.addressList.some(function (x) {
            return x.address === fullAddress.address &&
                x.postalCode === fullAddress.postalCode &&
                x.city === fullAddress.city &&
                x.country === fullAddress.country;
        });
        if (!addressExist) {
            user.addressList.push(fullAddress);
        }
        return this.http.put(ep + user.id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ShoppingService.prototype.setLastAddress = function (user, lastAddress) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/setLastAddress/');
        user.lastAddress = lastAddress;
        return this.http.put(ep + user.id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Adds item to user.shoppingCart 
    ShoppingService.prototype.addToCart = function (user, itemAdded) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/updateCart/');
        user.shoppingCart.push(itemAdded);
        return this.http.put(ep + user.id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ShoppingService.prototype.removeFromCart = function (user, itemRemoved) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/updateCart/');
        user.shoppingCart.splice(itemRemoved, 1);
        return this.http.put(ep + user.id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ShoppingService.prototype.clearCart = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/updateCart/');
        user.shoppingCart = [];
        return this.http.put(ep + user.id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ShoppingService.prototype.prepEndpoint = function (ep) {
        if (this.isDev)
            return 'http://localhost:3000/' + ep;
        else
            return ep;
    };
    ShoppingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ShoppingService);
    return ShoppingService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    //Checks if form is properly fulfilled 
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstName == undefined || user.lastName == undefined || user.email == undefined
            || user.password == undefined || user.confirmPassword == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    //Checks if given email is valid
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    //Checks if passwords match
    ValidateService.prototype.comparePasswords = function (user) {
        if (user.password !== user.confirmPassword) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map