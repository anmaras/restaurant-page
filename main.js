"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/about-style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/about-style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff2 */ "./src/fonts/SemiCondW05-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff */ "./src/fonts/SemiCondW05-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/Brice-Bold.otf */ "./src/fonts/Brice-Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCond-Demi.ttf */ "./src/fonts/SemiCond-Demi.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/summer.jpg */ "./src/imgs/summer.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"SemiCond-Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\") local(Arial),\n    local(Helvetica);\n}\n\n@font-face {\n  font-family: \"Brice-Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"opentype\") local(Arial),\n    local(Helvetica);\n}\n@font-face {\n  font-family: \"SemiCond-Demi\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"opentype\") local(Arial),\n    local(Helvetica);\n}\n/* About main container */\n.about-container {\n  background-color: var(--main-bg-color);\n  padding: 0rem 3.4rem;\n  display: grid;\n  grid-template-rows: minmax(auto, calc(100vh - 14rem)) max-content 1fr;\n  row-gap: 8rem;\n}\n\n/* FIRST SECTION */\n.about-container_first-section {\n  grid-row: 1/2;\n  position: relative;\n}\n\n.about-container_first-section .img {\n  border-radius: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  height: 100%;\n}\n\n.about-container_first-section .title {\n  font-family: \"Brice-Black\";\n  font-size: 10rem;\n  text-shadow: 3px 3px var(--text-clr);\n  -webkit-text-fill-color: var(--footer-text-clr);\n  -webkit-text-stroke-color: var(--footer-bg-clr);\n  -webkit-text-stroke-width: 2px;\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  width: max-content;\n}\n\n/* SECOND SECTION */\n\n.about-container_second-section {\n  grid-row: 2/3;\n  text-align: center;\n}\n\n.about-container_second-section h2 {\n  font-family: \"Brice-Black\";\n  font-size: 7rem;\n  color: var(--button-bg-clr);\n  text-shadow: 3px 3px var(--text-clr);\n  -webkit-text-stroke: 2px var(--text-clr);\n}\n\n.about-container_second-section .img {\n  margin-top: 8rem;\n  width: 95%;\n}\n\n/* THIRD SECTION */\n\n.about-container_third-section {\n  grid-row: 3/4;\n  width: 40%;\n  margin: auto;\n  margin-bottom: 8rem;\n}\n.about-container_third-section h3 {\n  font-family: \"SemiCond-Black\";\n  text-align: center;\n  text-transform: uppercase;\n  color: var(--footer-bg-clr);\n  font-size: 2rem;\n  letter-spacing: 1px;\n}\n\n.about-container_third-section p {\n  text-align: center;\n  font-family: \"SemiCond-Demi\";\n  color: var(--footer-bg-clr);\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: 1px;\n  margin: 1.6rem 0rem;\n}\n", "",{"version":3,"sources":["webpack://./src/css/about-style.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B;;oBAEkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B;oBACkB;AACpB;AACA;EACE,4BAA4B;EAC5B;oBACkB;AACpB;AACA,yBAAyB;AACzB;EACE,sCAAsC;EACtC,oBAAoB;EACpB,aAAa;EACb,qEAAqE;EACrE,aAAa;AACf;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,yDAA2C;EAC3C,sBAAsB;EACtB,4BAA4B;EAC5B,kCAAkC;EAClC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,oCAAoC;EACpC,+CAA+C;EAC/C,+CAA+C;EAC/C,8BAA8B;;EAE9B,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;;EAEhC,kBAAkB;AACpB;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,2BAA2B;EAC3B,oCAAoC;EACpC,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA,kBAAkB;;AAElB;EACE,aAAa;EACb,UAAU;EACV,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,yBAAyB;EACzB,2BAA2B;EAC3B,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,2BAA2B;EAC3B,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;AACrB","sourcesContent":["@font-face {\n  font-family: \"SemiCond-Black\";\n  src: url(\"/src/fonts/SemiCondW05-Black.woff2\") format(\"woff2\"),\n    url(\"/src/fonts/SemiCondW05-Black.woff\") format(\"woff\") local(Arial),\n    local(Helvetica);\n}\n\n@font-face {\n  font-family: \"Brice-Black\";\n  src: url(\"/src/fonts/Brice-Bold.otf\") format(\"opentype\") local(Arial),\n    local(Helvetica);\n}\n@font-face {\n  font-family: \"SemiCond-Demi\";\n  src: url(\"/src/fonts/SemiCond-Demi.ttf\") format(\"opentype\") local(Arial),\n    local(Helvetica);\n}\n/* About main container */\n.about-container {\n  background-color: var(--main-bg-color);\n  padding: 0rem 3.4rem;\n  display: grid;\n  grid-template-rows: minmax(auto, calc(100vh - 14rem)) max-content 1fr;\n  row-gap: 8rem;\n}\n\n/* FIRST SECTION */\n.about-container_first-section {\n  grid-row: 1/2;\n  position: relative;\n}\n\n.about-container_first-section .img {\n  border-radius: 50px;\n  background-image: url(/src/imgs/summer.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  height: 100%;\n}\n\n.about-container_first-section .title {\n  font-family: \"Brice-Black\";\n  font-size: 10rem;\n  text-shadow: 3px 3px var(--text-clr);\n  -webkit-text-fill-color: var(--footer-text-clr);\n  -webkit-text-stroke-color: var(--footer-bg-clr);\n  -webkit-text-stroke-width: 2px;\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  width: max-content;\n}\n\n/* SECOND SECTION */\n\n.about-container_second-section {\n  grid-row: 2/3;\n  text-align: center;\n}\n\n.about-container_second-section h2 {\n  font-family: \"Brice-Black\";\n  font-size: 7rem;\n  color: var(--button-bg-clr);\n  text-shadow: 3px 3px var(--text-clr);\n  -webkit-text-stroke: 2px var(--text-clr);\n}\n\n.about-container_second-section .img {\n  margin-top: 8rem;\n  width: 95%;\n}\n\n/* THIRD SECTION */\n\n.about-container_third-section {\n  grid-row: 3/4;\n  width: 40%;\n  margin: auto;\n  margin-bottom: 8rem;\n}\n.about-container_third-section h3 {\n  font-family: \"SemiCond-Black\";\n  text-align: center;\n  text-transform: uppercase;\n  color: var(--footer-bg-clr);\n  font-size: 2rem;\n  letter-spacing: 1px;\n}\n\n.about-container_third-section p {\n  text-align: center;\n  font-family: \"SemiCond-Demi\";\n  color: var(--footer-bg-clr);\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: 1px;\n  margin: 1.6rem 0rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer-style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer-style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff2 */ "./src/fonts/SemiCondW05-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff */ "./src/fonts/SemiCondW05-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"SemiCondW05-Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), local(Arial),\n    local(Helvetica);\n}\n\n#footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 1rem;\n  background-color: var(--footer-bg-clr);\n}\n\n.footer-text,\n.footer-date {\n  color: var(--footer-text-clr);\n  font-family: \"SemiCondW05-Black\";\n  letter-spacing: 0.5rem;\n}\n\n.footer-icon {\n  cursor: pointer;\n  filter: invert(100%);\n}\n\n.footer-icon:hover {\n  transform: scale(1.1);\n  transition: 0.25s;\n}\n", "",{"version":3,"sources":["webpack://./src/css/footer-style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC;;oBAEkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,sCAAsC;AACxC;;AAEA;;EAEE,6BAA6B;EAC7B,gCAAgC;EAChC,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB","sourcesContent":["@font-face {\n  font-family: \"SemiCondW05-Black\";\n  src: url(\"/src/fonts/SemiCondW05-Black.woff2\") format(\"woff2\"),\n    url(\"/src/fonts/SemiCondW05-Black.woff\") format(\"woff\"), local(Arial),\n    local(Helvetica);\n}\n\n#footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 1rem;\n  background-color: var(--footer-bg-clr);\n}\n\n.footer-text,\n.footer-date {\n  color: var(--footer-text-clr);\n  font-family: \"SemiCondW05-Black\";\n  letter-spacing: 0.5rem;\n}\n\n.footer-icon {\n  cursor: pointer;\n  filter: invert(100%);\n}\n\n.footer-icon:hover {\n  transform: scale(1.1);\n  transition: 0.25s;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header-style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header-style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff2 */ "./src/fonts/SemiCondW05-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff */ "./src/fonts/SemiCondW05-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"SemiCondW05-Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), local(Arial),\n    local(Helvetica);\n}\n\n/* Nav Container style */\n.nav-container {\n  padding: 2rem;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(5, max-content);\n  align-items: center;\n  justify-content: center;\n  column-gap: 1.6rem;\n  background-color: var(--main-bg-color);\n}\n/* Nav icon style */\n.nav-icon {\n  max-width: 60px;\n}\n\n/* Nav position set for undeline */\n.nav__page-link {\n  position: relative;\n}\n\n/* Nav btn and div */\n.nav-btn,\n.nav__page-link {\n  font-family: \"SemiCondW05-Black\";\n  color: var(--text-clr);\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\n.nav-btn {\n  padding: 0.5rem 2.4rem;\n  border: 3px solid var(--text-clr);\n  background-color: var(--button-bg-clr);\n  border-radius: 8px;\n}\n\n.nav-btn:hover {\n  transition: 0.2s;\n  background-color: var(--button-bg-hover-clr);\n}\n\n/* Underline Animation  */\n.nav__page-link::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  border-radius: 10px;\n  background-color: var(--button-bg-clr);\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transition: 0.25s ease-in-out;\n}\n\n.nav__page-link:hover::after {\n  transform: scaleX(1);\n}\n", "",{"version":3,"sources":["webpack://./src/css/header-style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC;;oBAEkB;AACpB;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6CAA6C;EAC7C,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,sCAAsC;AACxC;AACA,mBAAmB;AACnB;EACE,eAAe;AACjB;;AAEA,kCAAkC;AAClC;EACE,kBAAkB;AACpB;;AAEA,oBAAoB;AACpB;;EAEE,gCAAgC;EAChC,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,4CAA4C;AAC9C;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,sCAAsC;EACtC,OAAO;EACP,SAAS;EACT,oBAAoB;EACpB,6BAA6B;AAC/B;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["@font-face {\n  font-family: \"SemiCondW05-Black\";\n  src: url(\"/src/fonts/SemiCondW05-Black.woff2\") format(\"woff2\"),\n    url(\"/src/fonts/SemiCondW05-Black.woff\") format(\"woff\"), local(Arial),\n    local(Helvetica);\n}\n\n/* Nav Container style */\n.nav-container {\n  padding: 2rem;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(5, max-content);\n  align-items: center;\n  justify-content: center;\n  column-gap: 1.6rem;\n  background-color: var(--main-bg-color);\n}\n/* Nav icon style */\n.nav-icon {\n  max-width: 60px;\n}\n\n/* Nav position set for undeline */\n.nav__page-link {\n  position: relative;\n}\n\n/* Nav btn and div */\n.nav-btn,\n.nav__page-link {\n  font-family: \"SemiCondW05-Black\";\n  color: var(--text-clr);\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\n.nav-btn {\n  padding: 0.5rem 2.4rem;\n  border: 3px solid var(--text-clr);\n  background-color: var(--button-bg-clr);\n  border-radius: 8px;\n}\n\n.nav-btn:hover {\n  transition: 0.2s;\n  background-color: var(--button-bg-hover-clr);\n}\n\n/* Underline Animation  */\n.nav__page-link::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  border-radius: 10px;\n  background-color: var(--button-bg-clr);\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transition: 0.25s ease-in-out;\n}\n\n.nav__page-link:hover::after {\n  transform: scaleX(1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff2 */ "./src/fonts/SemiCondW05-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff */ "./src/fonts/SemiCondW05-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCond-Demi.ttf */ "./src/fonts/SemiCond-Demi.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/Brice-RegularExpanded.otf */ "./src/fonts/Brice-RegularExpanded.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/Brice-Bold.otf */ "./src/fonts/Brice-Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/mainbg.png */ "./src/imgs/mainbg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/drawing.svg */ "./src/imgs/drawing.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/truck.svg */ "./src/imgs/truck.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"SemiCond-Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), local(Arial),\n    local(Helvetica);\n}\n@font-face {\n  font-family: \"SemiCond-Demi\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"opentype\"), local(Arial),\n    local(Helvetica);\n}\n@font-face {\n  font-family: \"Brice-Expanded\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"opentype\"),\n    local(Arial), local(Helvetica);\n}\n\n@font-face {\n  font-family: \"Brice-Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"opentype\"), local(Arial),\n    local(Helvetica);\n}\n\n/* First Section */\n\n.home-container {\n  background-color: var(--main-bg-color);\n  padding: 0rem 3.4rem;\n  display: grid;\n  grid-template-rows: minmax(auto, calc(100vh - 14rem)) auto auto;\n  row-gap: 8rem;\n}\n\n/* Bg Img Potition */\n.home-container_first-section {\n  /* Relative for the title inside */\n  position: relative;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 25px;\n}\n\n/* Home Title Potition Inside Img */\n.home-container_first-section div {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Home Title Style Group h1 and first h2 Styles */\n.home-container_first-section_title:first-child h1,\n.home-container_first-section_title h2:nth-child(2) {\n  font-family: \"Brice-Black\";\n  color: var(--button-bg-clr);\n  -webkit-text-stroke: 2px var(--text-clr);\n  text-shadow: 5px 5px 1px var(--text-clr);\n}\n\n/* Home Title Style h1*/\n.home-container_first-section_title:first-child h1 {\n  font-size: 15rem;\n  /* fixed heigth because the font bottom margin */\n  height: 130px;\n}\n\n/* Home Title Style h2 second*/\n.home-container_first-section_title h2:nth-child(2) {\n  font-size: 10rem;\n  /* fixed heigth because the font bottom margin */\n  height: 95px;\n}\n\n/* Home Title Style h2 thrid*/\n.home-container_first-section_title h2:nth-child(3) {\n  font-size: 6.6rem;\n  font-family: \"Brice-Black\";\n  -webkit-text-stroke: 1px var(--text-clr);\n  color: var(--main-bg-color);\n}\n\n/* SECOND SECTION */\n\n/* Second section container potitioning */\n\n.home-container_second-section {\n  text-align: center;\n}\n\n/* Second section mission title  */\n.home-second-section_mission > h1 {\n  margin-bottom: 2.4rem;\n\n  font-family: \"Brice-Black\";\n  font-size: 5.6rem;\n  color: var(--button-bg-clr);\n  -webkit-text-stroke: 2px var(--text-clr);\n  text-shadow: 2.5px 2.5px var(--text-clr);\n}\n\n/* Second section mission p  */\n.home-second-section_mission > p {\n  margin: auto;\n\n  font-family: \"SemiCond-Demi\";\n  color: var(--footer-bg-clr);\n  line-height: 1.5;\n  width: 50%;\n  max-width: 800px;\n}\n\n/* THIRD SECTION */\n\n/* Third section container  potitioning*/\n.home-third-section_locations {\n  margin-bottom: 8rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(10rem, 50rem));\n  grid-auto-rows: 700px;\n  justify-content: center;\n  gap: 2rem;\n}\n\n/* Third section container children position */\n.home-third-section_locations .restaurant,\n.home-third-section_locations .truck {\n  padding: 3.6rem;\n\n  border: 8px solid var(--footer-bg-clr);\n  border-radius: 25px;\n  background-color: var(--default-clr);\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n/* Third section container children  icons potition */\n.home-third-section_locations .restaurant .icon,\n.home-third-section_locations .truck .icon {\n  width: 100%;\n  height: 100%;\n  max-height: 250px;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.home-third-section_locations .restaurant .icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.home-third-section_locations .truck .icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n\n/* Third section container children  text style */\n.home-third-section_locations .restaurant .title,\n.home-third-section_locations .truck .title {\n  font-family: \"Brice-Expanded\";\n  font-size: 2.7rem;\n  color: var(--footer-bg-clr);\n  word-break: normal;\n}\n\n.home-third-section_locations .restaurant .hours p,\n.home-third-section_locations .truck .hours p {\n  font-family: \"SemiCond-Demi\";\n  font-size: 1.8rem;\n  color: var(--footer-bg-clr);\n}\n.home-third-section_locations .restaurant .hours p > span,\n.home-third-section_locations .truck .hours p > span {\n  font-family: \"SemiCond-Demi\";\n  color: var(--footer-bg-clr);\n  font-size: 1, 6rem;\n  text-transform: capitalize;\n}\n\n/* Third section container children  btn style */\n.home-third-section_locations .restaurant .btn,\n.home-third-section_locations .truck .btn {\n  padding: 0.5rem 2.4rem;\n  width: 50%;\n  min-width: 198px;\n\n  font-family: \"SemiCond-Demi\";\n  color: var(--footer-bg-clr);\n\n  border: 3px solid var(--text-clr);\n  background-color: var(--button-bg-clr);\n  border-radius: 8px;\n}\n\n.home-third-section_locations .restaurant .btn:hover,\n.home-third-section_locations .truck .btn:hover {\n  transition: 0.2s;\n  background-color: var(--button-bg-hover-clr);\n}\n", "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B;;oBAEkB;AACpB;AACA;EACE,4BAA4B;EAC5B;oBACkB;AACpB;AACA;EACE,6BAA6B;EAC7B;kCACgC;AAClC;;AAEA;EACE,0BAA0B;EAC1B;oBACkB;AACpB;;AAEA,kBAAkB;;AAElB;EACE,sCAAsC;EACtC,oBAAoB;EACpB,aAAa;EACb,+DAA+D;EAC/D,aAAa;AACf;;AAEA,oBAAoB;AACpB;EACE,kCAAkC;EAClC,kBAAkB;EAClB,yDAA2C;EAC3C,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA,mCAAmC;AACnC;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;AAClC;;AAEA,kDAAkD;AAClD;;EAEE,0BAA0B;EAC1B,2BAA2B;EAC3B,wCAAwC;EACxC,wCAAwC;AAC1C;;AAEA,uBAAuB;AACvB;EACE,gBAAgB;EAChB,gDAAgD;EAChD,aAAa;AACf;;AAEA,8BAA8B;AAC9B;EACE,gBAAgB;EAChB,gDAAgD;EAChD,YAAY;AACd;;AAEA,6BAA6B;AAC7B;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,wCAAwC;EACxC,2BAA2B;AAC7B;;AAEA,mBAAmB;;AAEnB,yCAAyC;;AAEzC;EACE,kBAAkB;AACpB;;AAEA,kCAAkC;AAClC;EACE,qBAAqB;;EAErB,0BAA0B;EAC1B,iBAAiB;EACjB,2BAA2B;EAC3B,wCAAwC;EACxC,wCAAwC;AAC1C;;AAEA,8BAA8B;AAC9B;EACE,YAAY;;EAEZ,4BAA4B;EAC5B,2BAA2B;EAC3B,gBAAgB;EAChB,UAAU;EACV,gBAAgB;AAClB;;AAEA,kBAAkB;;AAElB,wCAAwC;AACxC;EACE,mBAAmB;EACnB,aAAa;EACb,6DAA6D;EAC7D,qBAAqB;EACrB,uBAAuB;EACvB,SAAS;AACX;;AAEA,8CAA8C;AAC9C;;EAEE,eAAe;;EAEf,sCAAsC;EACtC,mBAAmB;EACnB,oCAAoC;EACpC,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA,qDAAqD;AACrD;;EAEE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,2BAA2B;EAC3B,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,yDAA4C;AAC9C;AACA;EACE,yDAA0C;AAC5C;;AAEA,iDAAiD;AACjD;;EAEE,6BAA6B;EAC7B,iBAAiB;EACjB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;;EAEE,4BAA4B;EAC5B,iBAAiB;EACjB,2BAA2B;AAC7B;AACA;;EAEE,4BAA4B;EAC5B,2BAA2B;EAC3B,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA,gDAAgD;AAChD;;EAEE,sBAAsB;EACtB,UAAU;EACV,gBAAgB;;EAEhB,4BAA4B;EAC5B,2BAA2B;;EAE3B,iCAAiC;EACjC,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;EAChB,4CAA4C;AAC9C","sourcesContent":["@font-face {\n  font-family: \"SemiCond-Black\";\n  src: url(\"/src/fonts/SemiCondW05-Black.woff2\") format(\"woff2\"),\n    url(\"/src/fonts/SemiCondW05-Black.woff\") format(\"woff\"), local(Arial),\n    local(Helvetica);\n}\n@font-face {\n  font-family: \"SemiCond-Demi\";\n  src: url(\"/src/fonts/SemiCond-Demi.ttf\") format(\"opentype\"), local(Arial),\n    local(Helvetica);\n}\n@font-face {\n  font-family: \"Brice-Expanded\";\n  src: url(\"/src/fonts/Brice-RegularExpanded.otf\") format(\"opentype\"),\n    local(Arial), local(Helvetica);\n}\n\n@font-face {\n  font-family: \"Brice-Black\";\n  src: url(\"/src/fonts/Brice-Bold.otf\") format(\"opentype\"), local(Arial),\n    local(Helvetica);\n}\n\n/* First Section */\n\n.home-container {\n  background-color: var(--main-bg-color);\n  padding: 0rem 3.4rem;\n  display: grid;\n  grid-template-rows: minmax(auto, calc(100vh - 14rem)) auto auto;\n  row-gap: 8rem;\n}\n\n/* Bg Img Potition */\n.home-container_first-section {\n  /* Relative for the title inside */\n  position: relative;\n  background-image: url(/src/imgs/mainbg.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 25px;\n}\n\n/* Home Title Potition Inside Img */\n.home-container_first-section div {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Home Title Style Group h1 and first h2 Styles */\n.home-container_first-section_title:first-child h1,\n.home-container_first-section_title h2:nth-child(2) {\n  font-family: \"Brice-Black\";\n  color: var(--button-bg-clr);\n  -webkit-text-stroke: 2px var(--text-clr);\n  text-shadow: 5px 5px 1px var(--text-clr);\n}\n\n/* Home Title Style h1*/\n.home-container_first-section_title:first-child h1 {\n  font-size: 15rem;\n  /* fixed heigth because the font bottom margin */\n  height: 130px;\n}\n\n/* Home Title Style h2 second*/\n.home-container_first-section_title h2:nth-child(2) {\n  font-size: 10rem;\n  /* fixed heigth because the font bottom margin */\n  height: 95px;\n}\n\n/* Home Title Style h2 thrid*/\n.home-container_first-section_title h2:nth-child(3) {\n  font-size: 6.6rem;\n  font-family: \"Brice-Black\";\n  -webkit-text-stroke: 1px var(--text-clr);\n  color: var(--main-bg-color);\n}\n\n/* SECOND SECTION */\n\n/* Second section container potitioning */\n\n.home-container_second-section {\n  text-align: center;\n}\n\n/* Second section mission title  */\n.home-second-section_mission > h1 {\n  margin-bottom: 2.4rem;\n\n  font-family: \"Brice-Black\";\n  font-size: 5.6rem;\n  color: var(--button-bg-clr);\n  -webkit-text-stroke: 2px var(--text-clr);\n  text-shadow: 2.5px 2.5px var(--text-clr);\n}\n\n/* Second section mission p  */\n.home-second-section_mission > p {\n  margin: auto;\n\n  font-family: \"SemiCond-Demi\";\n  color: var(--footer-bg-clr);\n  line-height: 1.5;\n  width: 50%;\n  max-width: 800px;\n}\n\n/* THIRD SECTION */\n\n/* Third section container  potitioning*/\n.home-third-section_locations {\n  margin-bottom: 8rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(10rem, 50rem));\n  grid-auto-rows: 700px;\n  justify-content: center;\n  gap: 2rem;\n}\n\n/* Third section container children position */\n.home-third-section_locations .restaurant,\n.home-third-section_locations .truck {\n  padding: 3.6rem;\n\n  border: 8px solid var(--footer-bg-clr);\n  border-radius: 25px;\n  background-color: var(--default-clr);\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n/* Third section container children  icons potition */\n.home-third-section_locations .restaurant .icon,\n.home-third-section_locations .truck .icon {\n  width: 100%;\n  height: 100%;\n  max-height: 250px;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.home-third-section_locations .restaurant .icon {\n  background-image: url(/src/imgs/drawing.svg);\n}\n.home-third-section_locations .truck .icon {\n  background-image: url(/src/imgs/truck.svg);\n}\n\n/* Third section container children  text style */\n.home-third-section_locations .restaurant .title,\n.home-third-section_locations .truck .title {\n  font-family: \"Brice-Expanded\";\n  font-size: 2.7rem;\n  color: var(--footer-bg-clr);\n  word-break: normal;\n}\n\n.home-third-section_locations .restaurant .hours p,\n.home-third-section_locations .truck .hours p {\n  font-family: \"SemiCond-Demi\";\n  font-size: 1.8rem;\n  color: var(--footer-bg-clr);\n}\n.home-third-section_locations .restaurant .hours p > span,\n.home-third-section_locations .truck .hours p > span {\n  font-family: \"SemiCond-Demi\";\n  color: var(--footer-bg-clr);\n  font-size: 1, 6rem;\n  text-transform: capitalize;\n}\n\n/* Third section container children  btn style */\n.home-third-section_locations .restaurant .btn,\n.home-third-section_locations .truck .btn {\n  padding: 0.5rem 2.4rem;\n  width: 50%;\n  min-width: 198px;\n\n  font-family: \"SemiCond-Demi\";\n  color: var(--footer-bg-clr);\n\n  border: 3px solid var(--text-clr);\n  background-color: var(--button-bg-clr);\n  border-radius: 8px;\n}\n\n.home-third-section_locations .restaurant .btn:hover,\n.home-third-section_locations .truck .btn:hover {\n  transition: 0.2s;\n  background-color: var(--button-bg-hover-clr);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu-style.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu-style.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff2 */ "./src/fonts/SemiCondW05-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCondW05-Black.woff */ "./src/fonts/SemiCondW05-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/Brice-Bold.otf */ "./src/fonts/Brice-Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/SemiCond-Demi.ttf */ "./src/fonts/SemiCond-Demi.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/table.jpg */ "./src/imgs/table.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/base.png */ "./src/imgs/base.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/protein.png */ "./src/imgs/protein.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/sauce.png */ "./src/imgs/sauce.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"SemiCond-Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\") local(Arial),\n    local(Helvetica);\n}\n\n@font-face {\n  font-family: \"Brice-Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"opentype\") local(Arial),\n    local(Helvetica);\n}\n@font-face {\n  font-family: \"SemiCond-Demi\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"opentype\") local(Arial),\n    local(Helvetica);\n}\n\n/* FIRST SECTION */\n\n.menu-container {\n  background-color: var(--main-bg-color);\n\n  padding: 0rem 3.4rem;\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: minmax(auto, calc(100vh - 14rem)) max-content;\n  row-gap: 8rem;\n}\n\n.menu-container_first-section {\n  position: relative;\n}\n\n.menu-container_first-section .img {\n  border-radius: 25px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  height: 100%;\n}\n\n.menu-container_first-section .title {\n  font-family: \"Brice-Black\";\n  text-transform: uppercase;\n  font-size: 10rem;\n  color: var(--main-bg-color);\n  text-shadow: 3px 3px var(--text-clr);\n  -webkit-text-stroke: 2px var(--footer-bg-clr);\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Second Section container */\n\n.menu-container_second-section {\n  width: 100%;\n  border-radius: 25px;\n  padding: 3rem 10%;\n  min-width: fit-content;\n  background-color: var(--menu-section-color);\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-bottom: 8rem;\n}\n\n/* Second Section Mains container */\n.menu-main {\n  flex: 1;\n  padding: 2.4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.menu-main,\n.menu-sides {\n  border: 8px solid var(--footer-bg-clr);\n  border-radius: 25px;\n  background-color: var(--main-bg-color);\n}\n\n.list-main_container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n}\n\n.list-main_container .step,\n.list-main_container .title,\n.list-side_container > p {\n  font-family: \"Brice-Black\";\n  font-size: 4rem;\n  text-transform: uppercase;\n}\n\n.list-main_container .step {\n  color: var(--button-bg-clr);\n}\n\n.list-main_container .title {\n  color: var(--footer-bg-clr);\n}\n\n/* Second Section Icons */\n\n.list-main_container .icon.base {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.list-main_container .icon.protein {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.list-main_container .icon.sauces {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n\n.list-main_container .icon {\n  justify-self: center;\n  align-self: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  min-width: 100px;\n  min-height: 100px;\n  grid-column: 2/3;\n  grid-row: 1/3;\n}\n\n/* List item text */\n\n.list-main_container .list {\n  grid-column: 1/-1;\n  grid-row: 3/4;\n}\n.list-item > p:first-child {\n  font-size: 2rem;\n  font-family: \"SemiCond-Black\";\n  letter-spacing: 1px;\n  color: var(--button-bg-clr);\n  text-transform: uppercase;\n}\n\n.list-item > p,\n.list-item.sauces > p {\n  color: var(--footer-bg-clr);\n  font-size: 1.8rem;\n  text-transform: capitalize;\n}\n\n.list-item > p {\n  font-family: \"SemiCond-Demi\";\n}\n\n.list-item.sauces > p {\n  font-family: \"SemiCond-Black\";\n}\n\n/* Second Section Menu Sides */\n\n.menu-sides {\n  flex: 2;\n  min-width: 365px;\n  padding: 2.4rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.list-side_container .list .list-item {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-auto-flow: column;\n}\n\n.list-side_container > p {\n  color: var(--footer-bg-clr);\n}\n\n.list-side_container li > p:nth-child(3) {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n", "",{"version":3,"sources":["webpack://./src/css/menu-style.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B;;oBAEkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B;oBACkB;AACpB;AACA;EACE,4BAA4B;EAC5B;oBACkB;AACpB;;AAEA,kBAAkB;;AAElB;EACE,sCAAsC;;EAEtC,oBAAoB;EACpB,iBAAiB;EACjB,aAAa;EACb,iEAAiE;EACjE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,yDAA0C;EAC1C,sBAAsB;EACtB,4BAA4B;EAC5B,kCAAkC;EAClC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;EACzB,gBAAgB;EAChB,2BAA2B;EAC3B,oCAAoC;EACpC,6CAA6C;;EAE7C,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;AAClC;;AAEA,6BAA6B;;AAE7B;EACE,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,sBAAsB;EACtB,2CAA2C;;EAE3C,aAAa;EACb,eAAe;EACf,SAAS;EACT,mBAAmB;AACrB;;AAEA,mCAAmC;AACnC;EACE,OAAO;EACP,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,sCAAsC;EACtC,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sCAAsC;AACxC;;AAEA;;;EAGE,0BAA0B;EAC1B,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,yBAAyB;;AAEzB;EACE,yDAAyC;AAC3C;;AAEA;EACE,yDAA4C;AAC9C;AACA;EACE,yDAA0C;AAC5C;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,4BAA4B;EAC5B,wBAAwB;EACxB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA,mBAAmB;;AAEnB;EACE,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;EACnB,2BAA2B;EAC3B,yBAAyB;AAC3B;;AAEA;;EAEE,2BAA2B;EAC3B,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA,8BAA8B;;AAE9B;EACE,OAAO;EACP,gBAAgB;EAChB,eAAe;;EAEf,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf","sourcesContent":["@font-face {\n  font-family: \"SemiCond-Black\";\n  src: url(\"/src/fonts/SemiCondW05-Black.woff2\") format(\"woff2\"),\n    url(\"/src/fonts/SemiCondW05-Black.woff\") format(\"woff\") local(Arial),\n    local(Helvetica);\n}\n\n@font-face {\n  font-family: \"Brice-Black\";\n  src: url(\"/src/fonts/Brice-Bold.otf\") format(\"opentype\") local(Arial),\n    local(Helvetica);\n}\n@font-face {\n  font-family: \"SemiCond-Demi\";\n  src: url(\"/src/fonts/SemiCond-Demi.ttf\") format(\"opentype\") local(Arial),\n    local(Helvetica);\n}\n\n/* FIRST SECTION */\n\n.menu-container {\n  background-color: var(--main-bg-color);\n\n  padding: 0rem 3.4rem;\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: minmax(auto, calc(100vh - 14rem)) max-content;\n  row-gap: 8rem;\n}\n\n.menu-container_first-section {\n  position: relative;\n}\n\n.menu-container_first-section .img {\n  border-radius: 25px;\n  background-image: url(/src/imgs/table.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  height: 100%;\n}\n\n.menu-container_first-section .title {\n  font-family: \"Brice-Black\";\n  text-transform: uppercase;\n  font-size: 10rem;\n  color: var(--main-bg-color);\n  text-shadow: 3px 3px var(--text-clr);\n  -webkit-text-stroke: 2px var(--footer-bg-clr);\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Second Section container */\n\n.menu-container_second-section {\n  width: 100%;\n  border-radius: 25px;\n  padding: 3rem 10%;\n  min-width: fit-content;\n  background-color: var(--menu-section-color);\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-bottom: 8rem;\n}\n\n/* Second Section Mains container */\n.menu-main {\n  flex: 1;\n  padding: 2.4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.menu-main,\n.menu-sides {\n  border: 8px solid var(--footer-bg-clr);\n  border-radius: 25px;\n  background-color: var(--main-bg-color);\n}\n\n.list-main_container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n}\n\n.list-main_container .step,\n.list-main_container .title,\n.list-side_container > p {\n  font-family: \"Brice-Black\";\n  font-size: 4rem;\n  text-transform: uppercase;\n}\n\n.list-main_container .step {\n  color: var(--button-bg-clr);\n}\n\n.list-main_container .title {\n  color: var(--footer-bg-clr);\n}\n\n/* Second Section Icons */\n\n.list-main_container .icon.base {\n  background-image: url(/src/imgs/base.png);\n}\n\n.list-main_container .icon.protein {\n  background-image: url(/src/imgs/protein.png);\n}\n.list-main_container .icon.sauces {\n  background-image: url(/src/imgs/sauce.png);\n}\n\n.list-main_container .icon {\n  justify-self: center;\n  align-self: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 100%;\n  min-width: 100px;\n  min-height: 100px;\n  grid-column: 2/3;\n  grid-row: 1/3;\n}\n\n/* List item text */\n\n.list-main_container .list {\n  grid-column: 1/-1;\n  grid-row: 3/4;\n}\n.list-item > p:first-child {\n  font-size: 2rem;\n  font-family: \"SemiCond-Black\";\n  letter-spacing: 1px;\n  color: var(--button-bg-clr);\n  text-transform: uppercase;\n}\n\n.list-item > p,\n.list-item.sauces > p {\n  color: var(--footer-bg-clr);\n  font-size: 1.8rem;\n  text-transform: capitalize;\n}\n\n.list-item > p {\n  font-family: \"SemiCond-Demi\";\n}\n\n.list-item.sauces > p {\n  font-family: \"SemiCond-Black\";\n}\n\n/* Second Section Menu Sides */\n\n.menu-sides {\n  flex: 2;\n  min-width: 365px;\n  padding: 2.4rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.list-side_container .list .list-item {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-auto-flow: column;\n}\n\n.list-side_container > p {\n  color: var(--footer-bg-clr);\n}\n\n.list-side_container li > p:nth-child(3) {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/shared-style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/shared-style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --text-clr: #254653;\n  --button-bg-clr: #f3a161;\n  --button-bg-hover-clr: #f0d876;\n  --footer-text-clr: #ffffff;\n  --footer-bg-clr: #254653;\n  --main-bg-color: #fff8f2;\n  --default-clr: #ffffff;\n  --menu-section-color: #f0d876;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  min-height: 100vh;\n  font-size: 1.8rem;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\n#header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n", "",{"version":3,"sources":["webpack://./src/css/shared-style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,wBAAwB;EACxB,8BAA8B;EAC9B,0BAA0B;EAC1B,wBAAwB;EACxB,wBAAwB;EACxB,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,WAAW;AACb","sourcesContent":[":root {\n  --text-clr: #254653;\n  --button-bg-clr: #f3a161;\n  --button-bg-hover-clr: #f0d876;\n  --footer-text-clr: #ffffff;\n  --footer-bg-clr: #254653;\n  --main-bg-color: #fff8f2;\n  --default-clr: #ffffff;\n  --menu-section-color: #f0d876;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  min-height: 100vh;\n  font-size: 1.8rem;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\n#header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/about-style.css":
/*!*********************************!*\
  !*** ./src/css/about-style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/about-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/footer-style.css":
/*!**********************************!*\
  !*** ./src/css/footer-style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/footer-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/header-style.css":
/*!**********************************!*\
  !*** ./src/css/header-style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu-style.css":
/*!********************************!*\
  !*** ./src/css/menu-style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/shared-style.css":
/*!**********************************!*\
  !*** ./src/css/shared-style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./shared-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/shared-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_footerDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/footerDate */ "./src/js/functions/footerDate.js");
/* harmony import */ var _src_icons_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/icons/github.svg */ "./src/icons/github.svg");
/* harmony import */ var _functions_hyperlinkGitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/hyperlinkGitHub */ "./src/js/functions/hyperlinkGitHub.js");




function footerComponent() {
  const footer = document.createElement("footer");
  footer.id = "footer";
  const markup = `
  <div class="footer-text">Antonis Maras</div>
    <img src="${_src_icons_github_svg__WEBPACK_IMPORTED_MODULE_1__}" class="footer-icon" alt=" github icon" />
    <div class="footer-date">${(0,_functions_footerDate__WEBPACK_IMPORTED_MODULE_0__["default"])()}</div>
  `;
  footer.insertAdjacentHTML("beforeend", markup);
  footer.childNodes[3].addEventListener("click", _functions_hyperlinkGitHub__WEBPACK_IMPORTED_MODULE_2__["default"]);

  return footer;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerComponent);


/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_replaceContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/replaceContent */ "./src/js/functions/replaceContent.js");
/* harmony import */ var _home_antonis_the_odin_project_restaurant_page_src_imgs_discoCheetah_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/imgs/discoCheetah.png */ "./src/imgs/discoCheetah.png");



function navContainer() {
  const nav = document.createElement("nav");

  nav.className = "nav-container";

  const markup = ` <img src="${_home_antonis_the_odin_project_restaurant_page_src_imgs_discoCheetah_png__WEBPACK_IMPORTED_MODULE_1__}" class="nav-icon" />
    <div class="nav__page-link">HOME</div>
    <div class="nav__page-link">MENU</div>
    <div class="nav__page-link">ABOUT</div>
    <div class="nav-btn">ORDER ONLINE</div>  
   `;

  nav.insertAdjacentHTML("beforeend", markup);

  const buttons = nav.childNodes;

  buttons.forEach((button) => {
    button.addEventListener("click", _functions_replaceContent__WEBPACK_IMPORTED_MODULE_0__["default"]);
  });

  return nav;
}

function headerComponent() {
  const header = document.createElement("header");

  header.id = "header";

  header.append(navContainer());

  return header;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerComponent);


/***/ }),

/***/ "./src/js/functions/footerDate.js":
/*!****************************************!*\
  !*** ./src/js/functions/footerDate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function date() {
  return new Date().getFullYear();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (date);


/***/ }),

/***/ "./src/js/functions/hyperlinkGitHub.js":
/*!*********************************************!*\
  !*** ./src/js/functions/hyperlinkGitHub.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hyperLinkGithub() {
  location.href = "https://github.com/anmaras/restaurant-page";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hyperLinkGithub);


/***/ }),

/***/ "./src/js/functions/replaceContent.js":
/*!********************************************!*\
  !*** ./src/js/functions/replaceContent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/about */ "./src/js/pages/about.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ "./src/js/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/menu */ "./src/js/pages/menu.js");




function replaceContent() {
  const MENU = "MENU";
  const HOME = "HOME";
  const ABOUT = "ABOUT";
  let content = "";

  if (this.textContent === HOME) {
    content = (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else if (this.textContent === MENU) {
    content = (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } else if (this.textContent === ABOUT) {
    content = (0,_pages_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
  } else return;
  document.querySelector("#main").replaceChildren(content);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceContent);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_shared_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/shared-style.css */ "./src/css/shared-style.css");
/* harmony import */ var _css_header_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/header-style.css */ "./src/css/header-style.css");
/* harmony import */ var _css_footer_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/footer-style.css */ "./src/css/footer-style.css");
/* harmony import */ var _css_about_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/about-style.css */ "./src/css/about-style.css");
/* harmony import */ var _css_menu_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/menu-style.css */ "./src/css/menu-style.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/home.css */ "./src/css/home.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pageLoad */ "./src/js/pageLoad.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer */ "./src/js/components/footer.js");










document.body.append((0,_components_header__WEBPACK_IMPORTED_MODULE_6__["default"])(), (0,_pageLoad__WEBPACK_IMPORTED_MODULE_7__["default"])(), (0,_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"])());


/***/ }),

/***/ "./src/js/pageLoad.js":
/*!****************************!*\
  !*** ./src/js/pageLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/js/pages/home.js");


function mainComponent() {
  const main = document.createElement("main");
  main.id = "main";

  main.append((0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])());

  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainComponent);


/***/ }),

/***/ "./src/js/pages/about.js":
/*!*******************************!*\
  !*** ./src/js/pages/about.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_imgs_timeline2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/imgs/timeline2.png */ "./src/imgs/timeline2.png");


const timelineText = [
  {
    title: `2014, Lower Mainland`,
    text: `Coming from Seoul, we knew that we wanted to bring authentic Korean dishes to YVR, 
           but with a Western twist. We started selling Korean tacos and burritos at our small trailer, 
           driving all across Greater Vancouver, the Lower Mainland.`,
  },
  {
    title: `2017, Vancouver`,
    text: `The food truck hit the streets offering real food fast and 
            has since become a favorite for foodies and food truck goers in Vancouver.`,
  },
  {
    title: `2019, Davie Village`,
    text: `The four-on-the-floor neighborhood was one on our radar for a brick-and-mortar shop 
           because of the vibe and diversity in Davie Village.Disco Cheetah is the definition of a fast-casual Korean Cuisine 
           that puts our heart and soul into what we cook and what we serve.`,
  },
];

function aboutStoryText() {
  let markup = "";
  for (let i = 0; i < timelineText.length; i++) {
    markup += `<h3 class="title">${timelineText[i].title}</h3>
               <p class="text">${timelineText[i].text}</p>`;
  }
  return markup;
}

function about() {
  const about = document.createElement("div");
  about.className = "about-container";

  const markup = ` <section class="about-container_first-section">
      <div class="img"></div>
      <h1 class="title">ABOUT US</h1>
    </section>

    <section class="about-container_second-section">
      <h2 class="title">OUR STORY</h2>
      <img src="${_src_imgs_timeline2_png__WEBPACK_IMPORTED_MODULE_0__}" alt="summer image" class="img" />
    </section>
    <section class="about-container_third-section">${aboutStoryText()}</section>
`;

  about.insertAdjacentHTML("beforeend", markup);
  return about;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function home() {
  const container = document.createElement("div");
  container.className = "home-container";

  const markup = `
<section class="home-container_first-section">
      <div class="home-container_first-section_title">
        <h1>DISCO</h1>
        <h2>CHEETAH</h2>
        <h2>KOREAN GRILL</h2>
      </div>
    </section>

    <section class="home-container_second-section">
      <div class="home-second-section_mission">
        <h1>SERVING REAL FOOD, FAST!</h1>
        <p>
          We cook up bright, bold Korean dishes that are totally unique in
          Vancouver, you won’t find our flavors and colors anywhere else. And we
          serve it all hot, fast and in a format that’s affordable and
          comfortable for urban Vancouverites to enjoy.
        </p>
      </div>
    </section>
    
    <section class="home-container_third-section">
      <div class="home-third-section_locations">
        <div class="restaurant">
          <div class="icon"></div>
          <h2 class="title">VISIT OUR RESTAURANT</h2>
          <div class="hours">
            <p>MONDAY - THURSDAY <span> 11AM – 10PM </span></p>
            <p>FRIDAY - SUNDAY <span>11AM - 11PM</span></p>
          </div>
          <div class="btn">HOURS & LOCATION</div>
        </div>
        <div class="truck">
          <div class="icon"></div>
          <h2 class="title">VISIT OUR FOOD TRUCK</h2>
          <div class="hours">
            <p>MONDAY - FRIDAY 11AM-2PM <span>at robson square</span></p>
            <p>SATURDAY -SUNDAY <span>at events around the city</span></p>
          </div>
          <div class="btn">STREET FOOD APP</div>
        </div>
      </div>
    </section>`;

  container.insertAdjacentHTML("beforeend", markup);

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/js/pages/menu.js":
/*!******************************!*\
  !*** ./src/js/pages/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* MAIN 1 */
let mainObject = [
  {
    baseStep: "step 1:",
    baseTitle: "base",
    product: [
      {
        item: "rice bowl",
        ingredients:
          "Multigrain Rice,Greens,Corn,Edamame,Pickled Red Cabbage,Scallion,Oriental Vinaigrette",
      },
      {
        item: "salad bowl",
        ingredients:
          "Greens, Corn, Edamame, Pickled Red Cabbage, Picked Red Radis",
      },
      {
        item: "fries",
        ingredients: "Seasoned Fries, Pickled, Red Radish, Scallion",
      },
      {
        item: "wrap",
        ingredients:
          "Multigrain Rice, Greens, Pickled Red Cabbage, Napa Cabbage Kimchi",
      },
    ],
  },
  {
    baseStep: "step 2:",
    baseTitle: "protein",
    product: [
      {
        item: "korean fried chicken",
        ingredients: "Battered Boneless Chicken Thigh",
      },
      {
        item: "nokdu falafel",
        ingredients: "Mung Bean Falafel, Garlic, Scallion",
      },
      {
        item: "van tofu",
        ingredients: "Fried Tofu, Gochujang Tomato Sauce",
      },
      {
        item: "bulgogi beef",
        ingredients: "Stir-fried Beef, K-BBQ Marinade",
      },
      {
        item: "spicy pork",
        ingredients: "Stir-fried Pork Capicola, Gochujang-Pineapple Marinade",
      },
    ],
  },
  {
    baseStep: "step 3:",
    baseTitle: "sauces",
    product: [
      { item: "Vegan Plum Mayo" },
      { item: "Garlic Mayo" },
      { item: "Sweet Chili Glaze" },
      { item: "Chili Mayo" },
      { item: "Chili Chili" },
      { item: "Oriental Vinaigrette" },
      { item: "Honey Beet" },
      { item: "Almond Butter" },
    ],
  },
];

/* SIDES */

let sidesObjects = [
  {
    title: "add-ons",
    products: [
      { item: "Napa Cabbage Kimchi", price: "$2.00" },
      { item: "Pickled Red Radish", price: "$2.00" },
      { item: "Mozzarella & Cheddar Cheese", price: "$2.00" },
      { item: "Extra Sauce or Dressing", price: "$1.00" },
    ],
  },
  {
    title: "drinks",
    products: [
      { item: "Pop or Water", price: "$2.00" },
      { item: "Iced Tea", price: "$4.00" },
      { item: "Ginger Beer", price: "$5.00" },
      { item: "Kombuchag", price: "$6.00" },
      { item: "Milk Tea", price: "$6.00" },
    ],
  },
  {
    title: "side & share",
    products: [
      {
        item: "disco cheetah sampler",
        price: "$29.99",
        ingredients:
          "5 Dipping Sauce,5 Fried Chicken Bites,3 Wings,5 Falafel Bites,Fries,Pickled Radish,Scallion",
      },
      {
        item: "BAO",
        price: "$6.99",
        ingredients: "1 Protein, 1 Sauce, Pickled Radish, Scallion",
      },
      {
        item: "nokdu falafel bite",
        price: "$5.99",
        ingredients: "1 Dipping Sauce, Scallio",
      },
      { item: "just fries", price: "$4 .99", ingredients: "1 Dipping Sauce" },
    ],
  },
  {
    title: "korean fried chicken",
    products: [
      {
        item: "fried chicken sampler",
        price: "$39.99",
        ingredients:
          "5 Dipping Sauces,5 Fried Chicken Bites,2 Thighs,2 Drumsticks,3 Whole Wings,Fries,Pickled Red Radish,Scallion",
      },
      {
        item: "fried chicken bite",
        price: "$10.99",
        ingredients:
          "1 Dipping Sauce, 5 Chicken Bites, Pickled Radish, Scallion",
      },
      {
        item: "whole wings",
        price: "$6.99",
        ingredients:
          "1 Dipping Sauce, 3 Whole Wings, Pickled Red Radish, Scallion",
      },
      {
        item: "thigh & drumstick",
        price: "$8.99",
        ingredients:
          "2 Dipping Sauces, 1 Thigh, 1 Drumstick, Pickled Red Radish, Scallion",
      },
      {
        item: "thigh",
        price: "$4.99",
        ingredients: "1 Dipping Sauce, 1 Thigh, Pickled Red Radish, Scallion",
      },
      {
        item: "drumstick",
        price: "$4.99",
        ingredients:
          "1 Dipping Sauce, 1 Drumstick, Pickled Red Radish, Scallion",
      },
    ],
  },
];

/* Main Menu Markup Functions */

function mainMenuRenderList() {
  let markup = "";
  for (let i = 0; i < mainObject.length; i++) {
    markup += `<div class="list-main_container ">
    <p class="step">${mainObject[i].baseStep}</p>
    <p class="title">${mainObject[i].baseTitle}</p>
    <div class="icon ${mainObject[i].baseTitle}"></div>
    <ul class="list">
    ${mainMenuListItems(
      i,
      mainObject[i].product.length,
      mainObject[i].product[i]
    )}
    </ul>
    </div>`;
  }
  return markup;
}

function mainMenuListItems(i, mainObjectLength, product) {
  let markup = "";

  for (let z = 0; z < mainObjectLength; z++) {
    if (product.ingredients !== undefined) {
      markup += `<li class="list-item">
     <p>${mainObject[i].product[z].item}</p>
     <p>${mainObject[i].product[z].ingredients}</p>
        </li>`;
    } else {
      markup += `<li class="list-item ${mainObject[i].baseTitle}">
     <p>${mainObject[i].product[z].item}</p>
        </li>`;
    }
  }
  return markup;
}

/* Side Menu Markup Functions */

function sidersRenderList() {
  let markup = "";
  for (let i = 0; i < sidesObjects.length; i++) {
    markup += `<div class="list-side_container ${sidesObjects[i].title
      .split(" ")
      .splice(0, 1)}">
      <p class="title">${sidesObjects[i].title}</p>
      <ul class="list">
      ${sidersListItems(
        i,
        sidesObjects[i].products.length,
        sidesObjects[i].products[i]
      )}
      </ul>
    </div>`;
  }
  return markup;
}

function sidersListItems(i, productsLength, product) {
  let markup = "";

  for (let z = 0; z < productsLength; z++) {
    if (product.ingredients !== undefined) {
      markup += `<li class="list-item">
          <p>${sidesObjects[i].products[z].item}</p>
          <p>${sidesObjects[i].products[z].price}</p>
          <p>${sidesObjects[i].products[z].ingredients}</p>
        </li>`;
    } else {
      markup += `<li class="list-item">
          <p>${sidesObjects[i].products[z].item}</p>
          <p>${sidesObjects[i].products[z].price}</p>
          </li>`;
    }
  }
  return markup;
}

function menu() {
  const menu = document.createElement("div");
  menu.className = "menu-container";

  const markup = `
<section class="menu-container_first-section">
      <div class="img"></div>
      <h1 class="title">menus</h1>
    </section>

    <section class="menu-container_second-section">
      <div class="menu-main">${mainMenuRenderList()}</div>
      <div class="menu-sides">${sidersRenderList()}</div>
    </section>`;

  menu.insertAdjacentHTML("beforeend", markup);

  return menu;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/fonts/Brice-Bold.otf":
/*!**********************************!*\
  !*** ./src/fonts/Brice-Bold.otf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88870cae05c6d559a098.otf";

/***/ }),

/***/ "./src/fonts/Brice-RegularExpanded.otf":
/*!*********************************************!*\
  !*** ./src/fonts/Brice-RegularExpanded.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c689cb261e4af047666b.otf";

/***/ }),

/***/ "./src/fonts/SemiCond-Demi.ttf":
/*!*************************************!*\
  !*** ./src/fonts/SemiCond-Demi.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2e25bef93fa5e712877.ttf";

/***/ }),

/***/ "./src/fonts/SemiCondW05-Black.woff":
/*!******************************************!*\
  !*** ./src/fonts/SemiCondW05-Black.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01f96e584a750a76cdab.woff";

/***/ }),

/***/ "./src/fonts/SemiCondW05-Black.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/SemiCondW05-Black.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7734efb6b210116a7bf.woff2";

/***/ }),

/***/ "./src/icons/github.svg":
/*!******************************!*\
  !*** ./src/icons/github.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00be78b3f908ef21bdd1.svg";

/***/ }),

/***/ "./src/imgs/base.png":
/*!***************************!*\
  !*** ./src/imgs/base.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbd8b84ea7e03060aaff.png";

/***/ }),

/***/ "./src/imgs/discoCheetah.png":
/*!***********************************!*\
  !*** ./src/imgs/discoCheetah.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "473a2d144a24f96f9864.png";

/***/ }),

/***/ "./src/imgs/drawing.svg":
/*!******************************!*\
  !*** ./src/imgs/drawing.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "193e0c227888385d2f07.svg";

/***/ }),

/***/ "./src/imgs/mainbg.png":
/*!*****************************!*\
  !*** ./src/imgs/mainbg.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7c9637fda929b39d9b8.png";

/***/ }),

/***/ "./src/imgs/protein.png":
/*!******************************!*\
  !*** ./src/imgs/protein.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11d1424202b28feec8f7.png";

/***/ }),

/***/ "./src/imgs/sauce.png":
/*!****************************!*\
  !*** ./src/imgs/sauce.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "749e8ad61ded220498a1.png";

/***/ }),

/***/ "./src/imgs/summer.jpg":
/*!*****************************!*\
  !*** ./src/imgs/summer.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "763ffeb90463c4e6a625.jpg";

/***/ }),

/***/ "./src/imgs/table.jpg":
/*!****************************!*\
  !*** ./src/imgs/table.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0859351f130567846ea.jpg";

/***/ }),

/***/ "./src/imgs/timeline2.png":
/*!********************************!*\
  !*** ./src/imgs/timeline2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2264418d7eded2d6f1b9.png";

/***/ }),

/***/ "./src/imgs/truck.svg":
/*!****************************!*\
  !*** ./src/imgs/truck.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00bf1c02c72d53e30469.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQsZ0NBQWdDLG1CQUFtQjtBQUNuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9hYm91dC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9mb290ZXItc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaGVhZGVyLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWVudS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zaGFyZWQtc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2Fib3V0LXN0eWxlLmNzcz9lODM1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvZm9vdGVyLXN0eWxlLmNzcz9lYjg0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaGVhZGVyLXN0eWxlLmNzcz9kMmUxIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaG9tZS5jc3M/MDg0NSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUtc3R5bGUuY3NzPzY0NzUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zaGFyZWQtc3R5bGUuY3NzPzY5OGYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9mdW5jdGlvbnMvZm9vdGVyRGF0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvZnVuY3Rpb25zL2h5cGVybGlua0dpdEh1Yi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvZnVuY3Rpb25zL3JlcGxhY2VDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9wYWdlcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL1NlbWlDb25kVzA1LUJsYWNrLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9TZW1pQ29uZFcwNS1CbGFjay53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9CcmljZS1Cb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvU2VtaUNvbmQtRGVtaS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltZ3Mvc3VtbWVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmQtQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpIGxvY2FsKEFyaWFsKSxcXG4gICAgbG9jYWwoSGVsdmV0aWNhKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kLURlbWlcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKSBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcbi8qIEFib3V0IG1haW4gY29udGFpbmVyICovXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDByZW0gMy40cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KGF1dG8sIGNhbGMoMTAwdmggLSAxNHJlbSkpIG1heC1jb250ZW50IDFmcjtcXG4gIHJvdy1nYXA6IDhyZW07XFxufVxcblxcbi8qIEZJUlNUIFNFQ1RJT04gKi9cXG4uYWJvdXQtY29udGFpbmVyX2ZpcnN0LXNlY3Rpb24ge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uIC5pbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uIC50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJyaWNlLUJsYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCB2YXIoLS10ZXh0LWNscik7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tZm9vdGVyLXRleHQtY2xyKTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMnB4O1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLyogU0VDT05EIFNFQ1RJT04gKi9cXG5cXG4uYWJvdXQtY29udGFpbmVyX3NlY29uZC1zZWN0aW9uIHtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1jb250YWluZXJfc2Vjb25kLXNlY3Rpb24gaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICBmb250LXNpemU6IDdyZW07XFxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNscik7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCB2YXIoLS10ZXh0LWNscik7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggdmFyKC0tdGV4dC1jbHIpO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyX3NlY29uZC1zZWN0aW9uIC5pbWcge1xcbiAgbWFyZ2luLXRvcDogOHJlbTtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi8qIFRISVJEIFNFQ1RJT04gKi9cXG5cXG4uYWJvdXQtY29udGFpbmVyX3RoaXJkLXNlY3Rpb24ge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcbn1cXG4uYWJvdXQtY29udGFpbmVyX3RoaXJkLXNlY3Rpb24gaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1CbGFja1xcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lcl90aGlyZC1zZWN0aW9uIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1EZW1pXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1mb290ZXItYmctY2xyKTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBtYXJnaW46IDEuNnJlbSAwcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Fib3V0LXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUE2QjtFQUM3Qjs7b0JBRWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCO29CQUNrQjtBQUNwQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCO29CQUNrQjtBQUNwQjtBQUNBLHlCQUF5QjtBQUN6QjtFQUNFLHNDQUFzQztFQUN0QyxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHFFQUFxRTtFQUNyRSxhQUFhO0FBQ2Y7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5REFBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLCtDQUErQztFQUMvQywrQ0FBK0M7RUFDL0MsOEJBQThCOztFQUU5QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7O0VBRWhDLGtCQUFrQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1CbGFja1xcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9TZW1pQ29uZFcwNS1CbGFjay53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIvc3JjL2ZvbnRzL1NlbWlDb25kVzA1LUJsYWNrLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9CcmljZS1Cb2xkLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKSBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1EZW1pXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL1NlbWlDb25kLURlbWkudHRmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpIGxvY2FsKEFyaWFsKSxcXG4gICAgbG9jYWwoSGVsdmV0aWNhKTtcXG59XFxuLyogQWJvdXQgbWFpbiBjb250YWluZXIgKi9cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgcGFkZGluZzogMHJlbSAzLjRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoYXV0bywgY2FsYygxMDB2aCAtIDE0cmVtKSkgbWF4LWNvbnRlbnQgMWZyO1xcbiAgcm93LWdhcDogOHJlbTtcXG59XFxuXFxuLyogRklSU1QgU0VDVElPTiAqL1xcbi5hYm91dC1jb250YWluZXJfZmlyc3Qtc2VjdGlvbiB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyX2ZpcnN0LXNlY3Rpb24gLmltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvaW1ncy9zdW1tZXIuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyX2ZpcnN0LXNlY3Rpb24gLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQnJpY2UtQmxhY2tcXFwiO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IHZhcigtLXRleHQtY2xyKTtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS1mb290ZXItdGV4dC1jbHIpO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4vKiBTRUNPTkQgU0VDVElPTiAqL1xcblxcbi5hYm91dC1jb250YWluZXJfc2Vjb25kLXNlY3Rpb24ge1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lcl9zZWNvbmQtc2VjdGlvbiBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIkJyaWNlLUJsYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogN3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmctY2xyKTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IHZhcigtLXRleHQtY2xyKTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB2YXIoLS10ZXh0LWNscik7XFxufVxcblxcbi5hYm91dC1jb250YWluZXJfc2Vjb25kLXNlY3Rpb24gLmltZyB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLyogVEhJUkQgU0VDVElPTiAqL1xcblxcbi5hYm91dC1jb250YWluZXJfdGhpcmQtc2VjdGlvbiB7XFxuICBncmlkLXJvdzogMy80O1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XFxufVxcbi5hYm91dC1jb250YWluZXJfdGhpcmQtc2VjdGlvbiBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kLUJsYWNrXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyX3RoaXJkLXNlY3Rpb24gcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kLURlbWlcXFwiO1xcbiAgY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIG1hcmdpbjogMS42cmVtIDByZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9TZW1pQ29uZFcwNS1CbGFjay53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvU2VtaUNvbmRXMDUtQmxhY2sud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmRXMDUtQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgbG9jYWwoQXJpYWwpLFxcbiAgICBsb2NhbChIZWx2ZXRpY2EpO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmctY2xyKTtcXG59XFxuXFxuLmZvb3Rlci10ZXh0LFxcbi5mb290ZXItZGF0ZSB7XFxuICBjb2xvcjogdmFyKC0tZm9vdGVyLXRleHQtY2xyKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmRXMDUtQmxhY2tcXFwiO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZvb3Rlci1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4uZm9vdGVyLWljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9vdGVyLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQzs7b0JBRWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmRXMDUtQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvU2VtaUNvbmRXMDUtQmxhY2sud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiL3NyYy9mb250cy9TZW1pQ29uZFcwNS1CbGFjay53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIGxvY2FsKEFyaWFsKSxcXG4gICAgbG9jYWwoSGVsdmV0aWNhKTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjhyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxufVxcblxcbi5mb290ZXItdGV4dCxcXG4uZm9vdGVyLWRhdGUge1xcbiAgY29sb3I6IHZhcigtLWZvb3Rlci10ZXh0LWNscik7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kVzA1LUJsYWNrXFxcIjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxufVxcblxcbi5mb290ZXItaWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuLmZvb3Rlci1pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvU2VtaUNvbmRXMDUtQmxhY2sud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL1NlbWlDb25kVzA1LUJsYWNrLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kVzA1LUJsYWNrXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIGxvY2FsKEFyaWFsKSxcXG4gICAgbG9jYWwoSGVsdmV0aWNhKTtcXG59XFxuXFxuLyogTmF2IENvbnRhaW5lciBzdHlsZSAqL1xcbi5uYXYtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIG1heC1jb250ZW50KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDEuNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG4vKiBOYXYgaWNvbiBzdHlsZSAqL1xcbi5uYXYtaWNvbiB7XFxuICBtYXgtd2lkdGg6IDYwcHg7XFxufVxcblxcbi8qIE5hdiBwb3NpdGlvbiBzZXQgZm9yIHVuZGVsaW5lICovXFxuLm5hdl9fcGFnZS1saW5rIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogTmF2IGJ0biBhbmQgZGl2ICovXFxuLm5hdi1idG4sXFxuLm5hdl9fcGFnZS1saW5rIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmRXMDUtQmxhY2tcXFwiO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY2xyKTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAyLjRyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0LWNscik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctY2xyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1ob3Zlci1jbHIpO1xcbn1cXG5cXG4vKiBVbmRlcmxpbmUgQW5pbWF0aW9uICAqL1xcbi5uYXZfX3BhZ2UtbGluazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1jbHIpO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXZfX3BhZ2UtbGluazpob3Zlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQzs7b0JBRWtCO0FBQ3BCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7QUFDQSxtQkFBbUI7QUFDbkI7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxvQkFBb0I7QUFDcEI7O0VBRUUsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRDQUE0QztBQUM5Qzs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxPQUFPO0VBQ1AsU0FBUztFQUNULG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kVzA1LUJsYWNrXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL1NlbWlDb25kVzA1LUJsYWNrLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi9zcmMvZm9udHMvU2VtaUNvbmRXMDUtQmxhY2sud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcblxcbi8qIE5hdiBDb250YWluZXIgc3R5bGUgKi9cXG4ubmF2LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtYXgtY29udGVudCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAxLjZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuLyogTmF2IGljb24gc3R5bGUgKi9cXG4ubmF2LWljb24ge1xcbiAgbWF4LXdpZHRoOiA2MHB4O1xcbn1cXG5cXG4vKiBOYXYgcG9zaXRpb24gc2V0IGZvciB1bmRlbGluZSAqL1xcbi5uYXZfX3BhZ2UtbGluayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIE5hdiBidG4gYW5kIGRpdiAqL1xcbi5uYXYtYnRuLFxcbi5uYXZfX3BhZ2UtbGluayB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kVzA1LUJsYWNrXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNscik7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMi40cmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGV4dC1jbHIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNscik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5uYXYtYnRuOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctaG92ZXItY2xyKTtcXG59XFxuXFxuLyogVW5kZXJsaW5lIEFuaW1hdGlvbiAgKi9cXG4ubmF2X19wYWdlLWxpbms6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctY2xyKTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2X19wYWdlLWxpbms6aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvU2VtaUNvbmRXMDUtQmxhY2sud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL1NlbWlDb25kVzA1LUJsYWNrLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL1NlbWlDb25kLURlbWkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9CcmljZS1SZWd1bGFyRXhwYW5kZWQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9CcmljZS1Cb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi9zcmMvaW1ncy9tYWluYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWdzL2RyYXdpbmcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWdzL3RydWNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmQtQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgbG9jYWwoQXJpYWwpLFxcbiAgICBsb2NhbChIZWx2ZXRpY2EpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmQtRGVtaVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpLCBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1FeHBhbmRlZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpLFxcbiAgICBsb2NhbChBcmlhbCksIGxvY2FsKEhlbHZldGljYSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpLCBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcblxcbi8qIEZpcnN0IFNlY3Rpb24gKi9cXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBwYWRkaW5nOiAwcmVtIDMuNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChhdXRvLCBjYWxjKDEwMHZoIC0gMTRyZW0pKSBhdXRvIGF1dG87XFxuICByb3ctZ2FwOiA4cmVtO1xcbn1cXG5cXG4vKiBCZyBJbWcgUG90aXRpb24gKi9cXG4uaG9tZS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbiB7XFxuICAvKiBSZWxhdGl2ZSBmb3IgdGhlIHRpdGxlIGluc2lkZSAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLyogSG9tZSBUaXRsZSBQb3RpdGlvbiBJbnNpZGUgSW1nICovXFxuLmhvbWUtY29udGFpbmVyX2ZpcnN0LXNlY3Rpb24gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi8qIEhvbWUgVGl0bGUgU3R5bGUgR3JvdXAgaDEgYW5kIGZpcnN0IGgyIFN0eWxlcyAqL1xcbi5ob21lLWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uX3RpdGxlOmZpcnN0LWNoaWxkIGgxLFxcbi5ob21lLWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uX3RpdGxlIGgyOm50aC1jaGlsZCgyKSB7XFxuICBmb250LWZhbWlseTogXFxcIkJyaWNlLUJsYWNrXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmctY2xyKTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB2YXIoLS10ZXh0LWNscik7XFxuICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxcHggdmFyKC0tdGV4dC1jbHIpO1xcbn1cXG5cXG4vKiBIb21lIFRpdGxlIFN0eWxlIGgxKi9cXG4uaG9tZS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbl90aXRsZTpmaXJzdC1jaGlsZCBoMSB7XFxuICBmb250LXNpemU6IDE1cmVtO1xcbiAgLyogZml4ZWQgaGVpZ3RoIGJlY2F1c2UgdGhlIGZvbnQgYm90dG9tIG1hcmdpbiAqL1xcbiAgaGVpZ2h0OiAxMzBweDtcXG59XFxuXFxuLyogSG9tZSBUaXRsZSBTdHlsZSBoMiBzZWNvbmQqL1xcbi5ob21lLWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uX3RpdGxlIGgyOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXNpemU6IDEwcmVtO1xcbiAgLyogZml4ZWQgaGVpZ3RoIGJlY2F1c2UgdGhlIGZvbnQgYm90dG9tIG1hcmdpbiAqL1xcbiAgaGVpZ2h0OiA5NXB4O1xcbn1cXG5cXG4vKiBIb21lIFRpdGxlIFN0eWxlIGgyIHRocmlkKi9cXG4uaG9tZS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbl90aXRsZSBoMjpudGgtY2hpbGQoMykge1xcbiAgZm9udC1zaXplOiA2LjZyZW07XFxuICBmb250LWZhbWlseTogXFxcIkJyaWNlLUJsYWNrXFxcIjtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCB2YXIoLS10ZXh0LWNscik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi8qIFNFQ09ORCBTRUNUSU9OICovXFxuXFxuLyogU2Vjb25kIHNlY3Rpb24gY29udGFpbmVyIHBvdGl0aW9uaW5nICovXFxuXFxuLmhvbWUtY29udGFpbmVyX3NlY29uZC1zZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogU2Vjb25kIHNlY3Rpb24gbWlzc2lvbiB0aXRsZSAgKi9cXG4uaG9tZS1zZWNvbmQtc2VjdGlvbl9taXNzaW9uID4gaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICBmb250LXNpemU6IDUuNnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmctY2xyKTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB2YXIoLS10ZXh0LWNscik7XFxuICB0ZXh0LXNoYWRvdzogMi41cHggMi41cHggdmFyKC0tdGV4dC1jbHIpO1xcbn1cXG5cXG4vKiBTZWNvbmQgc2VjdGlvbiBtaXNzaW9uIHAgICovXFxuLmhvbWUtc2Vjb25kLXNlY3Rpb25fbWlzc2lvbiA+IHAge1xcbiAgbWFyZ2luOiBhdXRvO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1EZW1pXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1mb290ZXItYmctY2xyKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLyogVEhJUkQgU0VDVElPTiAqL1xcblxcbi8qIFRoaXJkIHNlY3Rpb24gY29udGFpbmVyICBwb3RpdGlvbmluZyovXFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMge1xcbiAgbWFyZ2luLWJvdHRvbTogOHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwcmVtLCA1MHJlbSkpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDcwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi8qIFRoaXJkIHNlY3Rpb24gY29udGFpbmVyIGNoaWxkcmVuIHBvc2l0aW9uICovXFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMgLnJlc3RhdXJhbnQsXFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMgLnRydWNrIHtcXG4gIHBhZGRpbmc6IDMuNnJlbTtcXG5cXG4gIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtY2xyKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4vKiBUaGlyZCBzZWN0aW9uIGNvbnRhaW5lciBjaGlsZHJlbiAgaWNvbnMgcG90aXRpb24gKi9cXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAucmVzdGF1cmFudCAuaWNvbixcXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAudHJ1Y2sgLmljb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC5yZXN0YXVyYW50IC5pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxufVxcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC50cnVjayAuaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcbn1cXG5cXG4vKiBUaGlyZCBzZWN0aW9uIGNvbnRhaW5lciBjaGlsZHJlbiAgdGV4dCBzdHlsZSAqL1xcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC5yZXN0YXVyYW50IC50aXRsZSxcXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAudHJ1Y2sgLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQnJpY2UtRXhwYW5kZWRcXFwiO1xcbiAgZm9udC1zaXplOiAyLjdyZW07XFxuICBjb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxufVxcblxcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC5yZXN0YXVyYW50IC5ob3VycyBwLFxcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC50cnVjayAuaG91cnMgcCB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kLURlbWlcXFwiO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxufVxcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC5yZXN0YXVyYW50IC5ob3VycyBwID4gc3BhbixcXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAudHJ1Y2sgLmhvdXJzIHAgPiBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmQtRGVtaVxcXCI7XFxuICBjb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxuICBmb250LXNpemU6IDEsIDZyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLyogVGhpcmQgc2VjdGlvbiBjb250YWluZXIgY2hpbGRyZW4gIGJ0biBzdHlsZSAqL1xcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC5yZXN0YXVyYW50IC5idG4sXFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMgLnRydWNrIC5idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDIuNHJlbTtcXG4gIHdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDE5OHB4O1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1EZW1pXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1mb290ZXItYmctY2xyKTtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXRleHQtY2xyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1jbHIpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAucmVzdGF1cmFudCAuYnRuOmhvdmVyLFxcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC50cnVjayAuYnRuOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctaG92ZXItY2xyKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUE2QjtFQUM3Qjs7b0JBRWtCO0FBQ3BCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUI7b0JBQ2tCO0FBQ3BCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0I7a0NBQ2dDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCO29CQUNrQjtBQUNwQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0Usc0NBQXNDO0VBQ3RDLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsK0RBQStEO0VBQy9ELGFBQWE7QUFDZjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLHlEQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDOztBQUVBLGtEQUFrRDtBQUNsRDs7RUFFRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHdDQUF3QztFQUN4Qyx3Q0FBd0M7QUFDMUM7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCxhQUFhO0FBQ2Y7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCxZQUFZO0FBQ2Q7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3Q0FBd0M7RUFDeEMsMkJBQTJCO0FBQzdCOztBQUVBLG1CQUFtQjs7QUFFbkIseUNBQXlDOztBQUV6QztFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxxQkFBcUI7O0VBRXJCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHdDQUF3QztFQUN4Qyx3Q0FBd0M7QUFDMUM7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTs7RUFFWiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjs7QUFFbEIsd0NBQXdDO0FBQ3hDO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2REFBNkQ7RUFDN0QscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUEsOENBQThDO0FBQzlDOztFQUVFLGVBQWU7O0VBRWYsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsa0JBQWtCOztFQUVsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUEscURBQXFEO0FBQ3JEOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseURBQTRDO0FBQzlDO0FBQ0E7RUFDRSx5REFBMEM7QUFDNUM7O0FBRUEsaURBQWlEO0FBQ2pEOztFQUVFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQSxnREFBZ0Q7QUFDaEQ7O0VBRUUsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixnQkFBZ0I7O0VBRWhCLDRCQUE0QjtFQUM1QiwyQkFBMkI7O0VBRTNCLGlDQUFpQztFQUNqQyxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQiw0Q0FBNEM7QUFDOUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kLUJsYWNrXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL1NlbWlDb25kVzA1LUJsYWNrLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi9zcmMvZm9udHMvU2VtaUNvbmRXMDUtQmxhY2sud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1EZW1pXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL1NlbWlDb25kLURlbWkudHRmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpLCBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1FeHBhbmRlZFxcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9CcmljZS1SZWd1bGFyRXhwYW5kZWQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpLFxcbiAgICBsb2NhbChBcmlhbCksIGxvY2FsKEhlbHZldGljYSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9CcmljZS1Cb2xkLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKSwgbG9jYWwoQXJpYWwpLFxcbiAgICBsb2NhbChIZWx2ZXRpY2EpO1xcbn1cXG5cXG4vKiBGaXJzdCBTZWN0aW9uICovXFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgcGFkZGluZzogMHJlbSAzLjRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoYXV0bywgY2FsYygxMDB2aCAtIDE0cmVtKSkgYXV0byBhdXRvO1xcbiAgcm93LWdhcDogOHJlbTtcXG59XFxuXFxuLyogQmcgSW1nIFBvdGl0aW9uICovXFxuLmhvbWUtY29udGFpbmVyX2ZpcnN0LXNlY3Rpb24ge1xcbiAgLyogUmVsYXRpdmUgZm9yIHRoZSB0aXRsZSBpbnNpZGUgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2ltZ3MvbWFpbmJnLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi8qIEhvbWUgVGl0bGUgUG90aXRpb24gSW5zaWRlIEltZyAqL1xcbi5ob21lLWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uIGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4vKiBIb21lIFRpdGxlIFN0eWxlIEdyb3VwIGgxIGFuZCBmaXJzdCBoMiBTdHlsZXMgKi9cXG4uaG9tZS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbl90aXRsZTpmaXJzdC1jaGlsZCBoMSxcXG4uaG9tZS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbl90aXRsZSBoMjpudGgtY2hpbGQoMikge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNscik7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggdmFyKC0tdGV4dC1jbHIpO1xcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggMXB4IHZhcigtLXRleHQtY2xyKTtcXG59XFxuXFxuLyogSG9tZSBUaXRsZSBTdHlsZSBoMSovXFxuLmhvbWUtY29udGFpbmVyX2ZpcnN0LXNlY3Rpb25fdGl0bGU6Zmlyc3QtY2hpbGQgaDEge1xcbiAgZm9udC1zaXplOiAxNXJlbTtcXG4gIC8qIGZpeGVkIGhlaWd0aCBiZWNhdXNlIHRoZSBmb250IGJvdHRvbSBtYXJnaW4gKi9cXG4gIGhlaWdodDogMTMwcHg7XFxufVxcblxcbi8qIEhvbWUgVGl0bGUgU3R5bGUgaDIgc2Vjb25kKi9cXG4uaG9tZS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbl90aXRsZSBoMjpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIC8qIGZpeGVkIGhlaWd0aCBiZWNhdXNlIHRoZSBmb250IGJvdHRvbSBtYXJnaW4gKi9cXG4gIGhlaWdodDogOTVweDtcXG59XFxuXFxuLyogSG9tZSBUaXRsZSBTdHlsZSBoMiB0aHJpZCovXFxuLmhvbWUtY29udGFpbmVyX2ZpcnN0LXNlY3Rpb25fdGl0bGUgaDI6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtc2l6ZTogNi42cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggdmFyKC0tdGV4dC1jbHIpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4vKiBTRUNPTkQgU0VDVElPTiAqL1xcblxcbi8qIFNlY29uZCBzZWN0aW9uIGNvbnRhaW5lciBwb3RpdGlvbmluZyAqL1xcblxcbi5ob21lLWNvbnRhaW5lcl9zZWNvbmQtc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFNlY29uZCBzZWN0aW9uIG1pc3Npb24gdGl0bGUgICovXFxuLmhvbWUtc2Vjb25kLXNlY3Rpb25fbWlzc2lvbiA+IGgxIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiQnJpY2UtQmxhY2tcXFwiO1xcbiAgZm9udC1zaXplOiA1LjZyZW07XFxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNscik7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggdmFyKC0tdGV4dC1jbHIpO1xcbiAgdGV4dC1zaGFkb3c6IDIuNXB4IDIuNXB4IHZhcigtLXRleHQtY2xyKTtcXG59XFxuXFxuLyogU2Vjb25kIHNlY3Rpb24gbWlzc2lvbiBwICAqL1xcbi5ob21lLXNlY29uZC1zZWN0aW9uX21pc3Npb24gPiBwIHtcXG4gIG1hcmdpbjogYXV0bztcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmQtRGVtaVxcXCI7XFxuICBjb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi8qIFRISVJEIFNFQ1RJT04gKi9cXG5cXG4vKiBUaGlyZCBzZWN0aW9uIGNvbnRhaW5lciAgcG90aXRpb25pbmcqL1xcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIHtcXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMHJlbSwgNTByZW0pKTtcXG4gIGdyaWQtYXV0by1yb3dzOiA3MDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4vKiBUaGlyZCBzZWN0aW9uIGNvbnRhaW5lciBjaGlsZHJlbiBwb3NpdGlvbiAqL1xcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC5yZXN0YXVyYW50LFxcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC50cnVjayB7XFxuICBwYWRkaW5nOiAzLjZyZW07XFxuXFxuICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1mb290ZXItYmctY2xyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWNscik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLyogVGhpcmQgc2VjdGlvbiBjb250YWluZXIgY2hpbGRyZW4gIGljb25zIHBvdGl0aW9uICovXFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMgLnJlc3RhdXJhbnQgLmljb24sXFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMgLnRydWNrIC5pY29uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAucmVzdGF1cmFudCAuaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWdzL2RyYXdpbmcuc3ZnKTtcXG59XFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMgLnRydWNrIC5pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2ltZ3MvdHJ1Y2suc3ZnKTtcXG59XFxuXFxuLyogVGhpcmQgc2VjdGlvbiBjb250YWluZXIgY2hpbGRyZW4gIHRleHQgc3R5bGUgKi9cXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAucmVzdGF1cmFudCAudGl0bGUsXFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMgLnRydWNrIC50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJyaWNlLUV4cGFuZGVkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbiAgd29yZC1icmVhazogbm9ybWFsO1xcbn1cXG5cXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAucmVzdGF1cmFudCAuaG91cnMgcCxcXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAudHJ1Y2sgLmhvdXJzIHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1EZW1pXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbn1cXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAucmVzdGF1cmFudCAuaG91cnMgcCA+IHNwYW4sXFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMgLnRydWNrIC5ob3VycyBwID4gc3BhbiB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kLURlbWlcXFwiO1xcbiAgY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbiAgZm9udC1zaXplOiAxLCA2cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi8qIFRoaXJkIHNlY3Rpb24gY29udGFpbmVyIGNoaWxkcmVuICBidG4gc3R5bGUgKi9cXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAucmVzdGF1cmFudCAuYnRuLFxcbi5ob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zIC50cnVjayAuYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAyLjRyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgbWluLXdpZHRoOiAxOThweDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmQtRGVtaVxcXCI7XFxuICBjb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxuXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0LWNscik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctY2xyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmhvbWUtdGhpcmQtc2VjdGlvbl9sb2NhdGlvbnMgLnJlc3RhdXJhbnQgLmJ0bjpob3ZlcixcXG4uaG9tZS10aGlyZC1zZWN0aW9uX2xvY2F0aW9ucyAudHJ1Y2sgLmJ0bjpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWhvdmVyLWNscik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9TZW1pQ29uZFcwNS1CbGFjay53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvU2VtaUNvbmRXMDUtQmxhY2sud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvQnJpY2UtQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL1NlbWlDb25kLURlbWkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWdzL3RhYmxlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi9zcmMvaW1ncy9iYXNlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi9zcmMvaW1ncy9wcm90ZWluLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi9zcmMvaW1ncy9zYXVjZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kLUJsYWNrXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIikgbG9jYWwoQXJpYWwpLFxcbiAgICBsb2NhbChIZWx2ZXRpY2EpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQnJpY2UtQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKSBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1EZW1pXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIikgbG9jYWwoQXJpYWwpLFxcbiAgICBsb2NhbChIZWx2ZXRpY2EpO1xcbn1cXG5cXG4vKiBGSVJTVCBTRUNUSU9OICovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcblxcbiAgcGFkZGluZzogMHJlbSAzLjRyZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChhdXRvLCBjYWxjKDEwMHZoIC0gMTRyZW0pKSBtYXgtY29udGVudDtcXG4gIHJvdy1nYXA6IDhyZW07XFxufVxcblxcbi5tZW51LWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyX2ZpcnN0LXNlY3Rpb24gLmltZyB7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbiAudGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IHZhcigtLXRleHQtY2xyKTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB2YXIoLS1mb290ZXItYmctY2xyKTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi8qIFNlY29uZCBTZWN0aW9uIGNvbnRhaW5lciAqL1xcblxcbi5tZW51LWNvbnRhaW5lcl9zZWNvbmQtc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nOiAzcmVtIDEwJTtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LXNlY3Rpb24tY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XFxufVxcblxcbi8qIFNlY29uZCBTZWN0aW9uIE1haW5zIGNvbnRhaW5lciAqL1xcbi5tZW51LW1haW4ge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubWVudS1tYWluLFxcbi5tZW51LXNpZGVzIHtcXG4gIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4ubGlzdC1tYWluX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG59XFxuXFxuLmxpc3QtbWFpbl9jb250YWluZXIgLnN0ZXAsXFxuLmxpc3QtbWFpbl9jb250YWluZXIgLnRpdGxlLFxcbi5saXN0LXNpZGVfY29udGFpbmVyID4gcCB7XFxuICBmb250LWZhbWlseTogXFxcIkJyaWNlLUJsYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5saXN0LW1haW5fY29udGFpbmVyIC5zdGVwIHtcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmctY2xyKTtcXG59XFxuXFxuLmxpc3QtbWFpbl9jb250YWluZXIgLnRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1mb290ZXItYmctY2xyKTtcXG59XFxuXFxuLyogU2Vjb25kIFNlY3Rpb24gSWNvbnMgKi9cXG5cXG4ubGlzdC1tYWluX2NvbnRhaW5lciAuaWNvbi5iYXNlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxufVxcblxcbi5saXN0LW1haW5fY29udGFpbmVyIC5pY29uLnByb3RlaW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG59XFxuLmxpc3QtbWFpbl9jb250YWluZXIgLmljb24uc2F1Y2VzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIik7XFxufVxcblxcbi5saXN0LW1haW5fY29udGFpbmVyIC5pY29uIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8zO1xcbn1cXG5cXG4vKiBMaXN0IGl0ZW0gdGV4dCAqL1xcblxcbi5saXN0LW1haW5fY29udGFpbmVyIC5saXN0IHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuLmxpc3QtaXRlbSA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1CbGFja1xcXCI7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1jbHIpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmxpc3QtaXRlbSA+IHAsXFxuLmxpc3QtaXRlbS5zYXVjZXMgPiBwIHtcXG4gIGNvbG9yOiB2YXIoLS1mb290ZXItYmctY2xyKTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5saXN0LWl0ZW0gPiBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmQtRGVtaVxcXCI7XFxufVxcblxcbi5saXN0LWl0ZW0uc2F1Y2VzID4gcCB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kLUJsYWNrXFxcIjtcXG59XFxuXFxuLyogU2Vjb25kIFNlY3Rpb24gTWVudSBTaWRlcyAqL1xcblxcbi5tZW51LXNpZGVzIHtcXG4gIGZsZXg6IDI7XFxuICBtaW4td2lkdGg6IDM2NXB4O1xcbiAgcGFkZGluZzogMi40cmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5saXN0LXNpZGVfY29udGFpbmVyIC5saXN0IC5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4ubGlzdC1zaWRlX2NvbnRhaW5lciA+IHAge1xcbiAgY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbn1cXG5cXG4ubGlzdC1zaWRlX2NvbnRhaW5lciBsaSA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21lbnUtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCOztvQkFFa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUI7b0JBQ2tCO0FBQ3BCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUI7b0JBQ2tCO0FBQ3BCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxzQ0FBc0M7O0VBRXRDLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlFQUFpRTtFQUNqRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseURBQTBDO0VBQzFDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBQ3BDLDZDQUE2Qzs7RUFFN0Msa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDOztBQUVBLDZCQUE2Qjs7QUFFN0I7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsMkNBQTJDOztFQUUzQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsT0FBTztFQUNQLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBOzs7RUFHRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UseURBQXlDO0FBQzNDOztBQUVBO0VBQ0UseURBQTRDO0FBQzlDO0FBQ0E7RUFDRSx5REFBMEM7QUFDNUM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQSw4QkFBOEI7O0FBRTlCO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixlQUFlOztFQUVmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1CbGFja1xcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9TZW1pQ29uZFcwNS1CbGFjay53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIvc3JjL2ZvbnRzL1NlbWlDb25kVzA1LUJsYWNrLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9CcmljZS1Cb2xkLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKSBsb2NhbChBcmlhbCksXFxuICAgIGxvY2FsKEhlbHZldGljYSk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1EZW1pXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL1NlbWlDb25kLURlbWkudHRmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpIGxvY2FsKEFyaWFsKSxcXG4gICAgbG9jYWwoSGVsdmV0aWNhKTtcXG59XFxuXFxuLyogRklSU1QgU0VDVElPTiAqL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG5cXG4gIHBhZGRpbmc6IDByZW0gMy40cmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoYXV0bywgY2FsYygxMDB2aCAtIDE0cmVtKSkgbWF4LWNvbnRlbnQ7XFxuICByb3ctZ2FwOiA4cmVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uIC5pbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2ltZ3MvdGFibGUuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbiAudGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCcmljZS1CbGFja1xcXCI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IHZhcigtLXRleHQtY2xyKTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB2YXIoLS1mb290ZXItYmctY2xyKTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi8qIFNlY29uZCBTZWN0aW9uIGNvbnRhaW5lciAqL1xcblxcbi5tZW51LWNvbnRhaW5lcl9zZWNvbmQtc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nOiAzcmVtIDEwJTtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LXNlY3Rpb24tY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XFxufVxcblxcbi8qIFNlY29uZCBTZWN0aW9uIE1haW5zIGNvbnRhaW5lciAqL1xcbi5tZW51LW1haW4ge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubWVudS1tYWluLFxcbi5tZW51LXNpZGVzIHtcXG4gIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4ubGlzdC1tYWluX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG59XFxuXFxuLmxpc3QtbWFpbl9jb250YWluZXIgLnN0ZXAsXFxuLmxpc3QtbWFpbl9jb250YWluZXIgLnRpdGxlLFxcbi5saXN0LXNpZGVfY29udGFpbmVyID4gcCB7XFxuICBmb250LWZhbWlseTogXFxcIkJyaWNlLUJsYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5saXN0LW1haW5fY29udGFpbmVyIC5zdGVwIHtcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmctY2xyKTtcXG59XFxuXFxuLmxpc3QtbWFpbl9jb250YWluZXIgLnRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1mb290ZXItYmctY2xyKTtcXG59XFxuXFxuLyogU2Vjb25kIFNlY3Rpb24gSWNvbnMgKi9cXG5cXG4ubGlzdC1tYWluX2NvbnRhaW5lciAuaWNvbi5iYXNlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2ltZ3MvYmFzZS5wbmcpO1xcbn1cXG5cXG4ubGlzdC1tYWluX2NvbnRhaW5lciAuaWNvbi5wcm90ZWluIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2ltZ3MvcHJvdGVpbi5wbmcpO1xcbn1cXG4ubGlzdC1tYWluX2NvbnRhaW5lciAuaWNvbi5zYXVjZXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvaW1ncy9zYXVjZS5wbmcpO1xcbn1cXG5cXG4ubGlzdC1tYWluX2NvbnRhaW5lciAuaWNvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG59XFxuXFxuLyogTGlzdCBpdGVtIHRleHQgKi9cXG5cXG4ubGlzdC1tYWluX2NvbnRhaW5lciAubGlzdCB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGdyaWQtcm93OiAzLzQ7XFxufVxcbi5saXN0LWl0ZW0gPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VtaUNvbmQtQmxhY2tcXFwiO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmctY2xyKTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5saXN0LWl0ZW0gPiBwLFxcbi5saXN0LWl0ZW0uc2F1Y2VzID4gcCB7XFxuICBjb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4ubGlzdC1pdGVtID4gcCB7XFxuICBmb250LWZhbWlseTogXFxcIlNlbWlDb25kLURlbWlcXFwiO1xcbn1cXG5cXG4ubGlzdC1pdGVtLnNhdWNlcyA+IHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW1pQ29uZC1CbGFja1xcXCI7XFxufVxcblxcbi8qIFNlY29uZCBTZWN0aW9uIE1lbnUgU2lkZXMgKi9cXG5cXG4ubWVudS1zaWRlcyB7XFxuICBmbGV4OiAyO1xcbiAgbWluLXdpZHRoOiAzNjVweDtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubGlzdC1zaWRlX2NvbnRhaW5lciAubGlzdCAubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLmxpc3Qtc2lkZV9jb250YWluZXIgPiBwIHtcXG4gIGNvbG9yOiB2YXIoLS1mb290ZXItYmctY2xyKTtcXG59XFxuXFxuLmxpc3Qtc2lkZV9jb250YWluZXIgbGkgPiBwOm50aC1jaGlsZCgzKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS10ZXh0LWNscjogIzI1NDY1MztcXG4gIC0tYnV0dG9uLWJnLWNscjogI2YzYTE2MTtcXG4gIC0tYnV0dG9uLWJnLWhvdmVyLWNscjogI2YwZDg3NjtcXG4gIC0tZm9vdGVyLXRleHQtY2xyOiAjZmZmZmZmO1xcbiAgLS1mb290ZXItYmctY2xyOiAjMjU0NjUzO1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjZmZmOGYyO1xcbiAgLS1kZWZhdWx0LWNscjogI2ZmZmZmZjtcXG4gIC0tbWVudS1zZWN0aW9uLWNvbG9yOiAjZjBkODc2O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NoYXJlZC1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tdGV4dC1jbHI6ICMyNTQ2NTM7XFxuICAtLWJ1dHRvbi1iZy1jbHI6ICNmM2ExNjE7XFxuICAtLWJ1dHRvbi1iZy1ob3Zlci1jbHI6ICNmMGQ4NzY7XFxuICAtLWZvb3Rlci10ZXh0LWNscjogI2ZmZmZmZjtcXG4gIC0tZm9vdGVyLWJnLWNscjogIzI1NDY1MztcXG4gIC0tbWFpbi1iZy1jb2xvcjogI2ZmZjhmMjtcXG4gIC0tZGVmYXVsdC1jbHI6ICNmZmZmZmY7XFxuICAtLW1lbnUtc2VjdGlvbi1jb2xvcjogI2YwZDg3NjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoYXJlZC1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoYXJlZC1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGRhdGUgZnJvbSBcIi4uL2Z1bmN0aW9ucy9mb290ZXJEYXRlXCI7XG5pbXBvcnQgZ2l0aHViIGZyb20gXCIvc3JjL2ljb25zL2dpdGh1Yi5zdmdcIjtcbmltcG9ydCBoeXBlckxpbmtHaXRodWIgZnJvbSBcIi4uL2Z1bmN0aW9ucy9oeXBlcmxpbmtHaXRIdWJcIjtcblxuZnVuY3Rpb24gZm9vdGVyQ29tcG9uZW50KCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuaWQgPSBcImZvb3RlclwiO1xuICBjb25zdCBtYXJrdXAgPSBgXG4gIDxkaXYgY2xhc3M9XCJmb290ZXItdGV4dFwiPkFudG9uaXMgTWFyYXM8L2Rpdj5cbiAgICA8aW1nIHNyYz1cIiR7Z2l0aHVifVwiIGNsYXNzPVwiZm9vdGVyLWljb25cIiBhbHQ9XCIgZ2l0aHViIGljb25cIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItZGF0ZVwiPiR7ZGF0ZSgpfTwvZGl2PlxuICBgO1xuICBmb290ZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG1hcmt1cCk7XG4gIGZvb3Rlci5jaGlsZE5vZGVzWzNdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoeXBlckxpbmtHaXRodWIpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5leHBvcnQgZGVmYXVsdCBmb290ZXJDb21wb25lbnQ7XG4iLCJpbXBvcnQgcmVwbGFjZUNvbnRlbnQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9yZXBsYWNlQ29udGVudFwiO1xuaW1wb3J0IGRpc2NvQ2hlZXRhaCBmcm9tIFwiL2hvbWUvYW50b25pcy90aGVfb2Rpbl9wcm9qZWN0L3Jlc3RhdXJhbnQtcGFnZS9zcmMvaW1ncy9kaXNjb0NoZWV0YWgucG5nXCI7XG5cbmZ1bmN0aW9uIG5hdkNvbnRhaW5lcigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICBuYXYuY2xhc3NOYW1lID0gXCJuYXYtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgbWFya3VwID0gYCA8aW1nIHNyYz1cIiR7ZGlzY29DaGVldGFofVwiIGNsYXNzPVwibmF2LWljb25cIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJuYXZfX3BhZ2UtbGlua1wiPkhPTUU8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2X19wYWdlLWxpbmtcIj5NRU5VPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5hdl9fcGFnZS1saW5rXCI+QUJPVVQ8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2LWJ0blwiPk9SREVSIE9OTElORTwvZGl2PiAgXG4gICBgO1xuXG4gIG5hdi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbWFya3VwKTtcblxuICBjb25zdCBidXR0b25zID0gbmF2LmNoaWxkTm9kZXM7XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcGxhY2VDb250ZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gaGVhZGVyQ29tcG9uZW50KCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG5cbiAgaGVhZGVyLmFwcGVuZChuYXZDb250YWluZXIoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckNvbXBvbmVudDtcbiIsImZ1bmN0aW9uIGRhdGUoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGU7XG4iLCJmdW5jdGlvbiBoeXBlckxpbmtHaXRodWIoKSB7XG4gIGxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbm1hcmFzL3Jlc3RhdXJhbnQtcGFnZVwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoeXBlckxpbmtHaXRodWI7XG4iLCJpbXBvcnQgYWJvdXQgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0XCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi4vcGFnZXMvaG9tZVwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4uL3BhZ2VzL21lbnVcIjtcblxuZnVuY3Rpb24gcmVwbGFjZUNvbnRlbnQoKSB7XG4gIGNvbnN0IE1FTlUgPSBcIk1FTlVcIjtcbiAgY29uc3QgSE9NRSA9IFwiSE9NRVwiO1xuICBjb25zdCBBQk9VVCA9IFwiQUJPVVRcIjtcbiAgbGV0IGNvbnRlbnQgPSBcIlwiO1xuXG4gIGlmICh0aGlzLnRleHRDb250ZW50ID09PSBIT01FKSB7XG4gICAgY29udGVudCA9IGhvbWUoKTtcbiAgfSBlbHNlIGlmICh0aGlzLnRleHRDb250ZW50ID09PSBNRU5VKSB7XG4gICAgY29udGVudCA9IG1lbnUoKTtcbiAgfSBlbHNlIGlmICh0aGlzLnRleHRDb250ZW50ID09PSBBQk9VVCkge1xuICAgIGNvbnRlbnQgPSBhYm91dCgpO1xuICB9IGVsc2UgcmV0dXJuO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikucmVwbGFjZUNoaWxkcmVuKGNvbnRlbnQpO1xufVxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZUNvbnRlbnQ7XG4iLCJpbXBvcnQgXCIuLi9jc3Mvc2hhcmVkLXN0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2hlYWRlci1zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9mb290ZXItc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvYWJvdXQtc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvbWVudS1zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9ob21lLmNzc1wiO1xuaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IG1haW5Db21wb25lbnQgZnJvbSBcIi4vcGFnZUxvYWRcIjtcbmltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyQ29tcG9uZW50KCksIG1haW5Db21wb25lbnQoKSwgZm9vdGVyQ29tcG9uZW50KCkpO1xuIiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuXG5mdW5jdGlvbiBtYWluQ29tcG9uZW50KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICBtYWluLmFwcGVuZChob21lKCkpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWluQ29tcG9uZW50O1xuIiwiaW1wb3J0IHRpbWVsaW5lIGZyb20gXCIvc3JjL2ltZ3MvdGltZWxpbmUyLnBuZ1wiO1xuXG5jb25zdCB0aW1lbGluZVRleHQgPSBbXG4gIHtcbiAgICB0aXRsZTogYDIwMTQsIExvd2VyIE1haW5sYW5kYCxcbiAgICB0ZXh0OiBgQ29taW5nIGZyb20gU2VvdWwsIHdlIGtuZXcgdGhhdCB3ZSB3YW50ZWQgdG8gYnJpbmcgYXV0aGVudGljIEtvcmVhbiBkaXNoZXMgdG8gWVZSLCBcbiAgICAgICAgICAgYnV0IHdpdGggYSBXZXN0ZXJuIHR3aXN0LiBXZSBzdGFydGVkIHNlbGxpbmcgS29yZWFuIHRhY29zIGFuZCBidXJyaXRvcyBhdCBvdXIgc21hbGwgdHJhaWxlciwgXG4gICAgICAgICAgIGRyaXZpbmcgYWxsIGFjcm9zcyBHcmVhdGVyIFZhbmNvdXZlciwgdGhlIExvd2VyIE1haW5sYW5kLmAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogYDIwMTcsIFZhbmNvdXZlcmAsXG4gICAgdGV4dDogYFRoZSBmb29kIHRydWNrIGhpdCB0aGUgc3RyZWV0cyBvZmZlcmluZyByZWFsIGZvb2QgZmFzdCBhbmQgXG4gICAgICAgICAgICBoYXMgc2luY2UgYmVjb21lIGEgZmF2b3JpdGUgZm9yIGZvb2RpZXMgYW5kIGZvb2QgdHJ1Y2sgZ29lcnMgaW4gVmFuY291dmVyLmAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogYDIwMTksIERhdmllIFZpbGxhZ2VgLFxuICAgIHRleHQ6IGBUaGUgZm91ci1vbi10aGUtZmxvb3IgbmVpZ2hib3Job29kIHdhcyBvbmUgb24gb3VyIHJhZGFyIGZvciBhIGJyaWNrLWFuZC1tb3J0YXIgc2hvcCBcbiAgICAgICAgICAgYmVjYXVzZSBvZiB0aGUgdmliZSBhbmQgZGl2ZXJzaXR5IGluIERhdmllIFZpbGxhZ2UuRGlzY28gQ2hlZXRhaCBpcyB0aGUgZGVmaW5pdGlvbiBvZiBhIGZhc3QtY2FzdWFsIEtvcmVhbiBDdWlzaW5lIFxuICAgICAgICAgICB0aGF0IHB1dHMgb3VyIGhlYXJ0IGFuZCBzb3VsIGludG8gd2hhdCB3ZSBjb29rIGFuZCB3aGF0IHdlIHNlcnZlLmAsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBhYm91dFN0b3J5VGV4dCgpIHtcbiAgbGV0IG1hcmt1cCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpbmVUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFya3VwICs9IGA8aDMgY2xhc3M9XCJ0aXRsZVwiPiR7dGltZWxpbmVUZXh0W2ldLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRcIj4ke3RpbWVsaW5lVGV4dFtpXS50ZXh0fTwvcD5gO1xuICB9XG4gIHJldHVybiBtYXJrdXA7XG59XG5cbmZ1bmN0aW9uIGFib3V0KCkge1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0LmNsYXNzTmFtZSA9IFwiYWJvdXQtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgbWFya3VwID0gYCA8c2VjdGlvbiBjbGFzcz1cImFib3V0LWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW1nXCI+PC9kaXY+XG4gICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkFCT1VUIFVTPC9oMT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImFib3V0LWNvbnRhaW5lcl9zZWNvbmQtc2VjdGlvblwiPlxuICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5PVVIgU1RPUlk8L2gyPlxuICAgICAgPGltZyBzcmM9XCIke3RpbWVsaW5lfVwiIGFsdD1cInN1bW1lciBpbWFnZVwiIGNsYXNzPVwiaW1nXCIgLz5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJhYm91dC1jb250YWluZXJfdGhpcmQtc2VjdGlvblwiPiR7YWJvdXRTdG9yeVRleHQoKX08L3NlY3Rpb24+XG5gO1xuXG4gIGFib3V0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBtYXJrdXApO1xuICByZXR1cm4gYWJvdXQ7XG59XG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsImZ1bmN0aW9uIGhvbWUoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImhvbWUtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgbWFya3VwID0gYFxuPHNlY3Rpb24gY2xhc3M9XCJob21lLWNvbnRhaW5lcl9maXJzdC1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaG9tZS1jb250YWluZXJfZmlyc3Qtc2VjdGlvbl90aXRsZVwiPlxuICAgICAgICA8aDE+RElTQ088L2gxPlxuICAgICAgICA8aDI+Q0hFRVRBSDwvaDI+XG4gICAgICAgIDxoMj5LT1JFQU4gR1JJTEw8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJob21lLWNvbnRhaW5lcl9zZWNvbmQtc2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhvbWUtc2Vjb25kLXNlY3Rpb25fbWlzc2lvblwiPlxuICAgICAgICA8aDE+U0VSVklORyBSRUFMIEZPT0QsIEZBU1QhPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgY29vayB1cCBicmlnaHQsIGJvbGQgS29yZWFuIGRpc2hlcyB0aGF0IGFyZSB0b3RhbGx5IHVuaXF1ZSBpblxuICAgICAgICAgIFZhbmNvdXZlciwgeW91IHdvbuKAmXQgZmluZCBvdXIgZmxhdm9ycyBhbmQgY29sb3JzIGFueXdoZXJlIGVsc2UuIEFuZCB3ZVxuICAgICAgICAgIHNlcnZlIGl0IGFsbCBob3QsIGZhc3QgYW5kIGluIGEgZm9ybWF0IHRoYXTigJlzIGFmZm9yZGFibGUgYW5kXG4gICAgICAgICAgY29tZm9ydGFibGUgZm9yIHVyYmFuIFZhbmNvdXZlcml0ZXMgdG8gZW5qb3kuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImhvbWUtY29udGFpbmVyX3RoaXJkLXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJob21lLXRoaXJkLXNlY3Rpb25fbG9jYXRpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj48L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPlZJU0lUIE9VUiBSRVNUQVVSQU5UPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cnNcIj5cbiAgICAgICAgICAgIDxwPk1PTkRBWSAtIFRIVVJTREFZIDxzcGFuPiAxMUFNIOKAkyAxMFBNIDwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cD5GUklEQVkgLSBTVU5EQVkgPHNwYW4+MTFBTSAtIDExUE08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG5cIj5IT1VSUyAmIExPQ0FUSU9OPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHJ1Y2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPjwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+VklTSVQgT1VSIEZPT0QgVFJVQ0s8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Vyc1wiPlxuICAgICAgICAgICAgPHA+TU9OREFZIC0gRlJJREFZIDExQU0tMlBNIDxzcGFuPmF0IHJvYnNvbiBzcXVhcmU8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHA+U0FUVVJEQVkgLVNVTkRBWSA8c3Bhbj5hdCBldmVudHMgYXJvdW5kIHRoZSBjaXR5PC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuXCI+U1RSRUVUIEZPT0QgQVBQPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPmA7XG5cbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBtYXJrdXApO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG4iLCIvKiBNQUlOIDEgKi9cbmxldCBtYWluT2JqZWN0ID0gW1xuICB7XG4gICAgYmFzZVN0ZXA6IFwic3RlcCAxOlwiLFxuICAgIGJhc2VUaXRsZTogXCJiYXNlXCIsXG4gICAgcHJvZHVjdDogW1xuICAgICAge1xuICAgICAgICBpdGVtOiBcInJpY2UgYm93bFwiLFxuICAgICAgICBpbmdyZWRpZW50czpcbiAgICAgICAgICBcIk11bHRpZ3JhaW4gUmljZSxHcmVlbnMsQ29ybixFZGFtYW1lLFBpY2tsZWQgUmVkIENhYmJhZ2UsU2NhbGxpb24sT3JpZW50YWwgVmluYWlncmV0dGVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwic2FsYWQgYm93bFwiLFxuICAgICAgICBpbmdyZWRpZW50czpcbiAgICAgICAgICBcIkdyZWVucywgQ29ybiwgRWRhbWFtZSwgUGlja2xlZCBSZWQgQ2FiYmFnZSwgUGlja2VkIFJlZCBSYWRpc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaXRlbTogXCJmcmllc1wiLFxuICAgICAgICBpbmdyZWRpZW50czogXCJTZWFzb25lZCBGcmllcywgUGlja2xlZCwgUmVkIFJhZGlzaCwgU2NhbGxpb25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwid3JhcFwiLFxuICAgICAgICBpbmdyZWRpZW50czpcbiAgICAgICAgICBcIk11bHRpZ3JhaW4gUmljZSwgR3JlZW5zLCBQaWNrbGVkIFJlZCBDYWJiYWdlLCBOYXBhIENhYmJhZ2UgS2ltY2hpXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBiYXNlU3RlcDogXCJzdGVwIDI6XCIsXG4gICAgYmFzZVRpdGxlOiBcInByb3RlaW5cIixcbiAgICBwcm9kdWN0OiBbXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwia29yZWFuIGZyaWVkIGNoaWNrZW5cIixcbiAgICAgICAgaW5ncmVkaWVudHM6IFwiQmF0dGVyZWQgQm9uZWxlc3MgQ2hpY2tlbiBUaGlnaFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaXRlbTogXCJub2tkdSBmYWxhZmVsXCIsXG4gICAgICAgIGluZ3JlZGllbnRzOiBcIk11bmcgQmVhbiBGYWxhZmVsLCBHYXJsaWMsIFNjYWxsaW9uXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpdGVtOiBcInZhbiB0b2Z1XCIsXG4gICAgICAgIGluZ3JlZGllbnRzOiBcIkZyaWVkIFRvZnUsIEdvY2h1amFuZyBUb21hdG8gU2F1Y2VcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwiYnVsZ29naSBiZWVmXCIsXG4gICAgICAgIGluZ3JlZGllbnRzOiBcIlN0aXItZnJpZWQgQmVlZiwgSy1CQlEgTWFyaW5hZGVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwic3BpY3kgcG9ya1wiLFxuICAgICAgICBpbmdyZWRpZW50czogXCJTdGlyLWZyaWVkIFBvcmsgQ2FwaWNvbGEsIEdvY2h1amFuZy1QaW5lYXBwbGUgTWFyaW5hZGVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGJhc2VTdGVwOiBcInN0ZXAgMzpcIixcbiAgICBiYXNlVGl0bGU6IFwic2F1Y2VzXCIsXG4gICAgcHJvZHVjdDogW1xuICAgICAgeyBpdGVtOiBcIlZlZ2FuIFBsdW0gTWF5b1wiIH0sXG4gICAgICB7IGl0ZW06IFwiR2FybGljIE1heW9cIiB9LFxuICAgICAgeyBpdGVtOiBcIlN3ZWV0IENoaWxpIEdsYXplXCIgfSxcbiAgICAgIHsgaXRlbTogXCJDaGlsaSBNYXlvXCIgfSxcbiAgICAgIHsgaXRlbTogXCJDaGlsaSBDaGlsaVwiIH0sXG4gICAgICB7IGl0ZW06IFwiT3JpZW50YWwgVmluYWlncmV0dGVcIiB9LFxuICAgICAgeyBpdGVtOiBcIkhvbmV5IEJlZXRcIiB9LFxuICAgICAgeyBpdGVtOiBcIkFsbW9uZCBCdXR0ZXJcIiB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG4vKiBTSURFUyAqL1xuXG5sZXQgc2lkZXNPYmplY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiYWRkLW9uc1wiLFxuICAgIHByb2R1Y3RzOiBbXG4gICAgICB7IGl0ZW06IFwiTmFwYSBDYWJiYWdlIEtpbWNoaVwiLCBwcmljZTogXCIkMi4wMFwiIH0sXG4gICAgICB7IGl0ZW06IFwiUGlja2xlZCBSZWQgUmFkaXNoXCIsIHByaWNlOiBcIiQyLjAwXCIgfSxcbiAgICAgIHsgaXRlbTogXCJNb3p6YXJlbGxhICYgQ2hlZGRhciBDaGVlc2VcIiwgcHJpY2U6IFwiJDIuMDBcIiB9LFxuICAgICAgeyBpdGVtOiBcIkV4dHJhIFNhdWNlIG9yIERyZXNzaW5nXCIsIHByaWNlOiBcIiQxLjAwXCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiZHJpbmtzXCIsXG4gICAgcHJvZHVjdHM6IFtcbiAgICAgIHsgaXRlbTogXCJQb3Agb3IgV2F0ZXJcIiwgcHJpY2U6IFwiJDIuMDBcIiB9LFxuICAgICAgeyBpdGVtOiBcIkljZWQgVGVhXCIsIHByaWNlOiBcIiQ0LjAwXCIgfSxcbiAgICAgIHsgaXRlbTogXCJHaW5nZXIgQmVlclwiLCBwcmljZTogXCIkNS4wMFwiIH0sXG4gICAgICB7IGl0ZW06IFwiS29tYnVjaGFnXCIsIHByaWNlOiBcIiQ2LjAwXCIgfSxcbiAgICAgIHsgaXRlbTogXCJNaWxrIFRlYVwiLCBwcmljZTogXCIkNi4wMFwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcInNpZGUgJiBzaGFyZVwiLFxuICAgIHByb2R1Y3RzOiBbXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwiZGlzY28gY2hlZXRhaCBzYW1wbGVyXCIsXG4gICAgICAgIHByaWNlOiBcIiQyOS45OVwiLFxuICAgICAgICBpbmdyZWRpZW50czpcbiAgICAgICAgICBcIjUgRGlwcGluZyBTYXVjZSw1IEZyaWVkIENoaWNrZW4gQml0ZXMsMyBXaW5ncyw1IEZhbGFmZWwgQml0ZXMsRnJpZXMsUGlja2xlZCBSYWRpc2gsU2NhbGxpb25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwiQkFPXCIsXG4gICAgICAgIHByaWNlOiBcIiQ2Ljk5XCIsXG4gICAgICAgIGluZ3JlZGllbnRzOiBcIjEgUHJvdGVpbiwgMSBTYXVjZSwgUGlja2xlZCBSYWRpc2gsIFNjYWxsaW9uXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpdGVtOiBcIm5va2R1IGZhbGFmZWwgYml0ZVwiLFxuICAgICAgICBwcmljZTogXCIkNS45OVwiLFxuICAgICAgICBpbmdyZWRpZW50czogXCIxIERpcHBpbmcgU2F1Y2UsIFNjYWxsaW9cIixcbiAgICAgIH0sXG4gICAgICB7IGl0ZW06IFwianVzdCBmcmllc1wiLCBwcmljZTogXCIkNCAuOTlcIiwgaW5ncmVkaWVudHM6IFwiMSBEaXBwaW5nIFNhdWNlXCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwia29yZWFuIGZyaWVkIGNoaWNrZW5cIixcbiAgICBwcm9kdWN0czogW1xuICAgICAge1xuICAgICAgICBpdGVtOiBcImZyaWVkIGNoaWNrZW4gc2FtcGxlclwiLFxuICAgICAgICBwcmljZTogXCIkMzkuOTlcIixcbiAgICAgICAgaW5ncmVkaWVudHM6XG4gICAgICAgICAgXCI1IERpcHBpbmcgU2F1Y2VzLDUgRnJpZWQgQ2hpY2tlbiBCaXRlcywyIFRoaWdocywyIERydW1zdGlja3MsMyBXaG9sZSBXaW5ncyxGcmllcyxQaWNrbGVkIFJlZCBSYWRpc2gsU2NhbGxpb25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwiZnJpZWQgY2hpY2tlbiBiaXRlXCIsXG4gICAgICAgIHByaWNlOiBcIiQxMC45OVwiLFxuICAgICAgICBpbmdyZWRpZW50czpcbiAgICAgICAgICBcIjEgRGlwcGluZyBTYXVjZSwgNSBDaGlja2VuIEJpdGVzLCBQaWNrbGVkIFJhZGlzaCwgU2NhbGxpb25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwid2hvbGUgd2luZ3NcIixcbiAgICAgICAgcHJpY2U6IFwiJDYuOTlcIixcbiAgICAgICAgaW5ncmVkaWVudHM6XG4gICAgICAgICAgXCIxIERpcHBpbmcgU2F1Y2UsIDMgV2hvbGUgV2luZ3MsIFBpY2tsZWQgUmVkIFJhZGlzaCwgU2NhbGxpb25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwidGhpZ2ggJiBkcnVtc3RpY2tcIixcbiAgICAgICAgcHJpY2U6IFwiJDguOTlcIixcbiAgICAgICAgaW5ncmVkaWVudHM6XG4gICAgICAgICAgXCIyIERpcHBpbmcgU2F1Y2VzLCAxIFRoaWdoLCAxIERydW1zdGljaywgUGlja2xlZCBSZWQgUmFkaXNoLCBTY2FsbGlvblwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaXRlbTogXCJ0aGlnaFwiLFxuICAgICAgICBwcmljZTogXCIkNC45OVwiLFxuICAgICAgICBpbmdyZWRpZW50czogXCIxIERpcHBpbmcgU2F1Y2UsIDEgVGhpZ2gsIFBpY2tsZWQgUmVkIFJhZGlzaCwgU2NhbGxpb25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06IFwiZHJ1bXN0aWNrXCIsXG4gICAgICAgIHByaWNlOiBcIiQ0Ljk5XCIsXG4gICAgICAgIGluZ3JlZGllbnRzOlxuICAgICAgICAgIFwiMSBEaXBwaW5nIFNhdWNlLCAxIERydW1zdGljaywgUGlja2xlZCBSZWQgUmFkaXNoLCBTY2FsbGlvblwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuLyogTWFpbiBNZW51IE1hcmt1cCBGdW5jdGlvbnMgKi9cblxuZnVuY3Rpb24gbWFpbk1lbnVSZW5kZXJMaXN0KCkge1xuICBsZXQgbWFya3VwID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYWluT2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFya3VwICs9IGA8ZGl2IGNsYXNzPVwibGlzdC1tYWluX2NvbnRhaW5lciBcIj5cbiAgICA8cCBjbGFzcz1cInN0ZXBcIj4ke21haW5PYmplY3RbaV0uYmFzZVN0ZXB9PC9wPlxuICAgIDxwIGNsYXNzPVwidGl0bGVcIj4ke21haW5PYmplY3RbaV0uYmFzZVRpdGxlfTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvbiAke21haW5PYmplY3RbaV0uYmFzZVRpdGxlfVwiPjwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImxpc3RcIj5cbiAgICAke21haW5NZW51TGlzdEl0ZW1zKFxuICAgICAgaSxcbiAgICAgIG1haW5PYmplY3RbaV0ucHJvZHVjdC5sZW5ndGgsXG4gICAgICBtYWluT2JqZWN0W2ldLnByb2R1Y3RbaV1cbiAgICApfVxuICAgIDwvdWw+XG4gICAgPC9kaXY+YDtcbiAgfVxuICByZXR1cm4gbWFya3VwO1xufVxuXG5mdW5jdGlvbiBtYWluTWVudUxpc3RJdGVtcyhpLCBtYWluT2JqZWN0TGVuZ3RoLCBwcm9kdWN0KSB7XG4gIGxldCBtYXJrdXAgPSBcIlwiO1xuXG4gIGZvciAobGV0IHogPSAwOyB6IDwgbWFpbk9iamVjdExlbmd0aDsgeisrKSB7XG4gICAgaWYgKHByb2R1Y3QuaW5ncmVkaWVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbWFya3VwICs9IGA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgPHA+JHttYWluT2JqZWN0W2ldLnByb2R1Y3Rbel0uaXRlbX08L3A+XG4gICAgIDxwPiR7bWFpbk9iamVjdFtpXS5wcm9kdWN0W3pdLmluZ3JlZGllbnRzfTwvcD5cbiAgICAgICAgPC9saT5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrdXAgKz0gYDxsaSBjbGFzcz1cImxpc3QtaXRlbSAke21haW5PYmplY3RbaV0uYmFzZVRpdGxlfVwiPlxuICAgICA8cD4ke21haW5PYmplY3RbaV0ucHJvZHVjdFt6XS5pdGVtfTwvcD5cbiAgICAgICAgPC9saT5gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWFya3VwO1xufVxuXG4vKiBTaWRlIE1lbnUgTWFya3VwIEZ1bmN0aW9ucyAqL1xuXG5mdW5jdGlvbiBzaWRlcnNSZW5kZXJMaXN0KCkge1xuICBsZXQgbWFya3VwID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlc09iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBtYXJrdXAgKz0gYDxkaXYgY2xhc3M9XCJsaXN0LXNpZGVfY29udGFpbmVyICR7c2lkZXNPYmplY3RzW2ldLnRpdGxlXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAuc3BsaWNlKDAsIDEpfVwiPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7c2lkZXNPYmplY3RzW2ldLnRpdGxlfTwvcD5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3RcIj5cbiAgICAgICR7c2lkZXJzTGlzdEl0ZW1zKFxuICAgICAgICBpLFxuICAgICAgICBzaWRlc09iamVjdHNbaV0ucHJvZHVjdHMubGVuZ3RoLFxuICAgICAgICBzaWRlc09iamVjdHNbaV0ucHJvZHVjdHNbaV1cbiAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PmA7XG4gIH1cbiAgcmV0dXJuIG1hcmt1cDtcbn1cblxuZnVuY3Rpb24gc2lkZXJzTGlzdEl0ZW1zKGksIHByb2R1Y3RzTGVuZ3RoLCBwcm9kdWN0KSB7XG4gIGxldCBtYXJrdXAgPSBcIlwiO1xuXG4gIGZvciAobGV0IHogPSAwOyB6IDwgcHJvZHVjdHNMZW5ndGg7IHorKykge1xuICAgIGlmIChwcm9kdWN0LmluZ3JlZGllbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1hcmt1cCArPSBgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgPHA+JHtzaWRlc09iamVjdHNbaV0ucHJvZHVjdHNbel0uaXRlbX08L3A+XG4gICAgICAgICAgPHA+JHtzaWRlc09iamVjdHNbaV0ucHJvZHVjdHNbel0ucHJpY2V9PC9wPlxuICAgICAgICAgIDxwPiR7c2lkZXNPYmplY3RzW2ldLnByb2R1Y3RzW3pdLmluZ3JlZGllbnRzfTwvcD5cbiAgICAgICAgPC9saT5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrdXAgKz0gYDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgIDxwPiR7c2lkZXNPYmplY3RzW2ldLnByb2R1Y3RzW3pdLml0ZW19PC9wPlxuICAgICAgICAgIDxwPiR7c2lkZXNPYmplY3RzW2ldLnByb2R1Y3RzW3pdLnByaWNlfTwvcD5cbiAgICAgICAgICA8L2xpPmA7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXJrdXA7XG59XG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTmFtZSA9IFwibWVudS1jb250YWluZXJcIjtcblxuICBjb25zdCBtYXJrdXAgPSBgXG48c2VjdGlvbiBjbGFzcz1cIm1lbnUtY29udGFpbmVyX2ZpcnN0LXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbWdcIj48L2Rpdj5cbiAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+bWVudXM8L2gxPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWVudS1jb250YWluZXJfc2Vjb25kLXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LW1haW5cIj4ke21haW5NZW51UmVuZGVyTGlzdCgpfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtc2lkZXNcIj4ke3NpZGVyc1JlbmRlckxpc3QoKX08L2Rpdj5cbiAgICA8L3NlY3Rpb24+YDtcblxuICBtZW51Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBtYXJrdXApO1xuXG4gIHJldHVybiBtZW51O1xufVxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==