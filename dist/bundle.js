/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n* {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  font-size: 10px;\n  font-family: \"Poppins\";\n  background-color: #F9F9F9;\n  color: #0A0A0B;\n}\n\n#app {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100vw;\n}\n\n.app__header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  position: relative;\n  height: 100px;\n  width: 100%;\n  border-bottom: 1px solid #61636B;\n}\n.app__header .header__nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 100%;\n  width: 80%;\n}\n\n.app__content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 90%;\n  z-index: 999;\n}\n.app__content .content__header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n}\n.app__content .content__header .header__search__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n.app__content .header__title {\n  margin-top: 2rem;\n  font-size: 2.5rem;\n  font-weight: 200;\n  text-align: center;\n}\n.app__content .header__title span {\n  font-weight: 400;\n  transition: all 0.5s;\n  --border-width: 0.2rem;\n  --animation-speed: 0.2s;\n  border: var(--border-width) solid transparent;\n}\n.app__content .header__title span:hover {\n  color: #EA680B;\n}\n.app__content .header__title span:focus:before, .app__content .header__title span:hover:before {\n  animation: beforeBorders var(--animation-speed) forwards ease-in-out;\n}\n.app__content .header__title span:focus:after, .app__content .header__title span:hover:after {\n  animation: afterBorders var(--animation-speed) forwards ease-in-out;\n}\n.app__content .header__title span:hover {\n  animation: borderColors var(--animation-speed) forwards;\n  outline: none;\n}\n.app__content .content__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 110px 0 90px 0;\n  width: 100%;\n}\n\n.home__title {\n  font-size: 5rem;\n  font-weight: 200;\n  text-align: center;\n  line-height: 7.5rem;\n  margin-bottom: 2rem;\n  padding: 0 2rem;\n  cursor: default;\n}\n.home__title span {\n  font-weight: 600;\n  --border-width: 0.5rem;\n  --animation-speed: 0.15s;\n  border: var(--border-width) solid transparent;\n}\n.home__title span:focus:before, .home__title span:hover:before {\n  animation: beforeBorders var(--animation-speed) forwards ease-in-out;\n}\n.home__title span:focus:after, .home__title span:hover:after {\n  animation: afterBorders var(--animation-speed) forwards ease-in-out;\n}\n.home__title span:hover {\n  animation: borderColors var(--animation-speed) forwards;\n  outline: none;\n}\n\n.app__subtitle {\n  color: #61636B;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n@keyframes beforeBorders {\n  0% {\n    top: calc(var(--border-width) * -1);\n    left: 50%;\n    bottom: auto;\n    right: auto;\n    width: 0;\n    height: var(--border-width);\n  }\n  33% {\n    top: calc(var(--border-width) * -1);\n    left: calc(var(--border-width) * -1);\n    bottom: auto;\n    right: auto;\n    width: calc(var(--border-width) + 50%);\n    height: var(--border-width);\n  }\n  66% {\n    top: calc(var(--border-width) * -1);\n    left: calc(var(--border-width) * -1);\n    bottom: auto;\n    right: auto;\n    width: var(--border-width);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n  100% {\n    top: auto;\n    left: calc(var(--border-width) * -1);\n    bottom: calc(var(--border-width) * -1);\n    right: auto;\n    width: calc(var(--border-width) + 50%);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n}\n@keyframes afterBorders {\n  0% {\n    top: calc(var(--border-width) * -1);\n    left: auto;\n    bottom: auto;\n    right: 50%;\n    width: 0;\n    height: var(--border-width);\n  }\n  33% {\n    top: calc(var(--border-width) * -1);\n    left: auto;\n    bottom: auto;\n    right: calc(var(--border-width) * -1);\n    width: calc(var(--border-width) + 50%);\n    height: var(--border-width);\n  }\n  66% {\n    top: calc(var(--border-width) * -1);\n    left: auto;\n    bottom: auto;\n    right: calc(var(--border-width) * -1);\n    width: var(--border-width);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n  100% {\n    top: auto;\n    left: auto;\n    bottom: calc(var(--border-width) * -1);\n    right: calc(var(--border-width) * -1);\n    width: calc(var(--border-width) + 50%);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n}\n@keyframes borderColors {\n  0% {\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n  }\n  33% {\n    border-top-color: #EA680B;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n  }\n  66% {\n    border-top-color: #EA680B;\n    border-right-color: #EA680B;\n    border-bottom-color: transparent;\n    border-left-color: #EA680B;\n  }\n  100% {\n    border-top-color: #EA680B;\n    border-right-color: #EA680B;\n    border-bottom-color: #EA680B;\n    border-left-color: #EA680B;\n  }\n}\n.nav__logo {\n  text-decoration: none;\n  font-size: 3rem;\n  font-weight: 600;\n  color: #0A0A0B;\n  transition: all 0.2s;\n}\n.nav__logo:hover {\n  color: #EA680B;\n}\n.nav__menu {\n  position: absolute;\n  z-index: 9999;\n  right: 0;\n  background: #F9F9F9;\n  top: 100px;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n  transform: translate3d(100%, 0, 0);\n  transition: transform 250ms ease-in-out;\n}\n.nav__menu li {\n  opacity: 0;\n  list-style: none;\n  padding: 1rem 0;\n  font-weight: 400;\n  overflow: hidden;\n  letter-spacing: 0.05rem;\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n}\n.nav__menu li a {\n  text-decoration: none;\n  display: inline-flex;\n  display: inline-flex;\n  color: #0A0A0B;\n  font-size: 2rem;\n  height: 100%;\n  padding: 0.4rem;\n  transition: all 0.3s;\n}\n.nav__menu li a:hover {\n  color: #EA680B;\n  transform: translateY(-0.3rem);\n}\n.nav__burger {\n  display: flex;\n  width: 3.5rem;\n  height: 3rem;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 0.5rem;\n  cursor: pointer;\n  transition: padding 100ms ease;\n}\n.nav__burger.is-expanded {\n  padding: calc(1rem - 1px) 0.5rem;\n}\n.nav__burger.is-expanded + .nav__menu {\n  transform: translate3d(0, 0, 0);\n}\n.nav__burger.is-expanded + .nav__menu li {\n  opacity: 1;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(1) {\n  transition-delay: 275ms;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(2) {\n  transition-delay: 300ms;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(3) {\n  transition-delay: 325ms;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(4) {\n  transition-delay: 350ms;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(5) {\n  transition-delay: 375ms;\n}\n.nav__burger__line {\n  background-color: #0A0A0B;\n  display: inline-block;\n  height: 2px;\n  width: 100%;\n  transition: all 100ms ease;\n}\n:hover > .nav__burger__line {\n  background-color: #EA680B;\n}\n.nav__burger.is-expanded .nav__burger__line:nth-of-type(2) {\n  transform: rotate(-45deg);\n  position: relative;\n}\n.nav__burger.is-expanded .nav__burger__line:first-of-type, .nav__burger.is-expanded .nav__burger__line:last-of-type {\n  opacity: 0;\n}\n\n.content__btn {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  bottom: 2rem;\n  border-radius: 45px;\n  width: 16rem;\n  height: 4.5rem;\n  border: 1px solid #0A0A0B;\n  background-color: #F9F9F9;\n  color: #0A0A0B;\n  font-family: \"Poppins\";\n  font-size: 2rem;\n  font-weight: 200;\n  outline: 0;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.content__btn:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 0.5rem -0.4rem #EA680B;\n  transform: translateY(-0.8rem);\n}\n\n.aux__btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  position: fixed;\n  display: inline-flex;\n  left: 0.5rem;\n  border-radius: 50%;\n  width: 3.5rem;\n  height: 3.5rem;\n  border: 1px solid #0A0A0B;\n  background-color: #F9F9F9;\n  color: #0A0A0B;\n  font-family: \"Poppins\";\n  font-size: 2rem;\n  font-weight: 200;\n  outline: 0;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.aux__btn:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 1rem -0.4rem #EA680B;\n}\n\n.header__search {\n  border-radius: 45px;\n  height: 3.5rem;\n  width: 80%;\n  padding: 1rem;\n  border: 1px solid;\n  outline: 0;\n  margin-top: 2rem;\n  cursor: pointer;\n  text-align: center;\n  position: relative;\n  border-color: #0A0A0B;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.header__search:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 0.5rem -0.4rem #EA680B;\n}\n.header__search:focus {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 1.2rem -0.4rem #EA680B;\n}\n\n.header__search__container {\n  position: relative;\n}\n\n.header__preditions {\n  position: absolute;\n  display: block;\n  top: 6.5rem;\n  width: 100%;\n  overflow-y: scroll;\n  max-height: 20rem;\n  background-color: #F9F9F9;\n  font-size: 1.3rem;\n  box-shadow: 0 0.5rem 1.8rem -0.4rem #EA680B;\n}\n.header__preditions li {\n  padding: 0.8rem 2rem;\n  cursor: pointer;\n}\n.header__preditions li:hover {\n  background-color: #EA680B;\n}\n\n.card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 80%;\n  height: 35rem;\n  margin: 1rem 0;\n  background-color: #0A0A0B;\n}\n.card .card__figure {\n  height: 45%;\n  width: 100%;\n  overflow: hidden;\n}\n.card .card__figure .figure__img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  image-resolution: 72dpi;\n}\n.card .card__caption {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  height: 50%;\n  width: 100%;\n  padding: 3em;\n}\n.card .card__caption .caption__title {\n  color: #F9F9F9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  text-align: center;\n  font-size: 2rem;\n  height: 60%;\n  width: 100%;\n  padding: 2rem 0;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.card .card__caption .caption__title:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 0.5rem -0.4rem #EA680B;\n}\n.card .card__caption .caption__date, .card .card__caption .caption__author {\n  color: #F9F9F9;\n  align-self: flex-end;\n  font-size: 1.2rem;\n}\n\n.tag__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 4rem;\n  font-size: 2rem;\n  width: 100%;\n  color: #0A0A0B;\n}\n.tag__container .tag__element {\n  padding: 1rem 0;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tag__container .tag__element:hover {\n  color: #EA680B;\n  transform: translateY(-0.3rem);\n}\n\n.form__input {\n  border-radius: 45px;\n  height: 3.5rem;\n  width: 80%;\n  padding: 1rem;\n  border: 1px solid;\n  outline: 0;\n  margin-top: 2rem;\n  cursor: pointer;\n  text-align: center;\n}\n\n.form__icon {\n  font-size: 5rem;\n  margin-top: 2.5rem;\n  color: #EA680B;\n}\n\n.input--base {\n  border-color: #0A0A0B;\n  transition: all 0.2s;\n}\n.input--base:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 0.5rem -0.4rem #EA680B;\n}\n.input--base:focus {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 1.2rem -0.4rem #EA680B;\n}\n\n.input--wrong {\n  border-color: red;\n  box-shadow: 0 0.5rem 1.2rem -0.4rem #EB190A;\n}\n\n.input--good {\n  border-color: green;\n  box-shadow: 0 0.5rem 1.2rem -0.4rem #1CC819;\n}\n\n.form__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 90%;\n}\n\n.figure {\n  height: 25rem;\n  width: 100vw;\n  overflow: hidden;\n}\n.figure .figure__image {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  image-resolution: 72dpi;\n}\n\n.post__content {\n  background-color: white;\n  padding: 2rem 1rem;\n  margin: 2rem 0 1rem 0;\n  font-size: 1.5rem;\n  font-weight: 300;\n  line-height: 2.2rem;\n}\n.post__content p {\n  padding: 1rem 0;\n}\n\n.post__info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  font-size: 1.2rem;\n  font-weight: 400;\n  padding: 2rem 1.5rem;\n  color: #EA680B;\n  background-color: white;\n}\n\n.post__comments {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  margin-top: 2rem;\n  padding-bottom: 10rem;\n}\n.post__comments .comment__card {\n  background-color: white;\n  margin: 0.8rem 0;\n  padding: 1rem 1rem;\n  width: 100%;\n}\n.post__comments .comment__card .comment__content {\n  font-size: 1.4rem;\n  font-weight: 200;\n  padding: 1rem 0;\n}\n.post__comments .comment__card .comment__author, .post__comments .comment__card .comment__date {\n  font-size: 1.2rem;\n  font-weight: 400;\n  padding: 0.5rem 0;\n}\n.post__comments .comment__card .comment__author {\n  color: #EA680B;\n  font-weight: 400;\n  padding: 0.5rem 0;\n}\n.post__comments .form__container {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.post__comments .form__container .form__input {\n  width: 100%;\n  height: 8rem;\n  border-radius: 0;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_reset.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/utilities/_variables.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_main.scss","webpack://./src/scss/components/_navBar.scss","webpack://./src/scss/components/_mainBtn.scss","webpack://./src/scss/components/_auxBtn.scss","webpack://./src/scss/components/_search.scss","webpack://./src/scss/components/_card.scss","webpack://./src/scss/components/_tags.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/components/_postView.scss"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n* {\n\tbox-sizing: border-box;\n}\n\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, button {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n* {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  font-size: 10px;\n  font-family: \"Poppins\";\n  background-color: #F9F9F9;\n  color: #0A0A0B;\n}\n\n#app {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100vw;\n}\n\n.app__header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  position: relative;\n  height: 100px;\n  width: 100%;\n  border-bottom: 1px solid #61636B;\n}\n.app__header .header__nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 100%;\n  width: 80%;\n}\n\n.app__content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 90%;\n  z-index: 999;\n}\n.app__content .content__header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n}\n.app__content .content__header .header__search__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n.app__content .header__title {\n  margin-top: 2rem;\n  font-size: 2.5rem;\n  font-weight: 200;\n  text-align: center;\n}\n.app__content .header__title span {\n  font-weight: 400;\n  transition: all 0.5s;\n  --border-width: 0.2rem;\n  --animation-speed: 0.2s;\n  border: var(--border-width) solid transparent;\n}\n.app__content .header__title span:hover {\n  color: #EA680B;\n}\n.app__content .header__title span:focus:before, .app__content .header__title span:hover:before {\n  animation: beforeBorders var(--animation-speed) forwards ease-in-out;\n}\n.app__content .header__title span:focus:after, .app__content .header__title span:hover:after {\n  animation: afterBorders var(--animation-speed) forwards ease-in-out;\n}\n.app__content .header__title span:hover {\n  animation: borderColors var(--animation-speed) forwards;\n  outline: none;\n}\n.app__content .content__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 110px 0 90px 0;\n  width: 100%;\n}\n\n.home__title {\n  font-size: 5rem;\n  font-weight: 200;\n  text-align: center;\n  line-height: 7.5rem;\n  margin-bottom: 2rem;\n  padding: 0 2rem;\n  cursor: default;\n}\n.home__title span {\n  font-weight: 600;\n  --border-width: 0.5rem;\n  --animation-speed: 0.15s;\n  border: var(--border-width) solid transparent;\n}\n.home__title span:focus:before, .home__title span:hover:before {\n  animation: beforeBorders var(--animation-speed) forwards ease-in-out;\n}\n.home__title span:focus:after, .home__title span:hover:after {\n  animation: afterBorders var(--animation-speed) forwards ease-in-out;\n}\n.home__title span:hover {\n  animation: borderColors var(--animation-speed) forwards;\n  outline: none;\n}\n\n.app__subtitle {\n  color: #61636B;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n@keyframes beforeBorders {\n  0% {\n    top: calc(var(--border-width) * -1);\n    left: 50%;\n    bottom: auto;\n    right: auto;\n    width: 0;\n    height: var(--border-width);\n  }\n  33% {\n    top: calc(var(--border-width) * -1);\n    left: calc(var(--border-width) * -1);\n    bottom: auto;\n    right: auto;\n    width: calc(var(--border-width) + 50%);\n    height: var(--border-width);\n  }\n  66% {\n    top: calc(var(--border-width) * -1);\n    left: calc(var(--border-width) * -1);\n    bottom: auto;\n    right: auto;\n    width: var(--border-width);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n  100% {\n    top: auto;\n    left: calc(var(--border-width) * -1);\n    bottom: calc(var(--border-width) * -1);\n    right: auto;\n    width: calc(var(--border-width) + 50%);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n}\n@keyframes afterBorders {\n  0% {\n    top: calc(var(--border-width) * -1);\n    left: auto;\n    bottom: auto;\n    right: 50%;\n    width: 0;\n    height: var(--border-width);\n  }\n  33% {\n    top: calc(var(--border-width) * -1);\n    left: auto;\n    bottom: auto;\n    right: calc(var(--border-width) * -1);\n    width: calc(var(--border-width) + 50%);\n    height: var(--border-width);\n  }\n  66% {\n    top: calc(var(--border-width) * -1);\n    left: auto;\n    bottom: auto;\n    right: calc(var(--border-width) * -1);\n    width: var(--border-width);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n  100% {\n    top: auto;\n    left: auto;\n    bottom: calc(var(--border-width) * -1);\n    right: calc(var(--border-width) * -1);\n    width: calc(var(--border-width) + 50%);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n}\n@keyframes borderColors {\n  0% {\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n  }\n  33% {\n    border-top-color: #EA680B;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n  }\n  66% {\n    border-top-color: #EA680B;\n    border-right-color: #EA680B;\n    border-bottom-color: transparent;\n    border-left-color: #EA680B;\n  }\n  100% {\n    border-top-color: #EA680B;\n    border-right-color: #EA680B;\n    border-bottom-color: #EA680B;\n    border-left-color: #EA680B;\n  }\n}\n.nav__logo {\n  text-decoration: none;\n  font-size: 3rem;\n  font-weight: 600;\n  color: #0A0A0B;\n  transition: all 0.2s;\n}\n.nav__logo:hover {\n  color: #EA680B;\n}\n.nav__menu {\n  position: absolute;\n  z-index: 9999;\n  right: 0;\n  background: #F9F9F9;\n  top: 100px;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n  transform: translate3d(100%, 0, 0);\n  transition: transform 250ms ease-in-out;\n}\n.nav__menu li {\n  opacity: 0;\n  list-style: none;\n  padding: 1rem 0;\n  font-weight: 400;\n  overflow: hidden;\n  letter-spacing: 0.05rem;\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n}\n.nav__menu li a {\n  text-decoration: none;\n  display: inline-flex;\n  display: inline-flex;\n  color: #0A0A0B;\n  font-size: 2rem;\n  height: 100%;\n  padding: 0.4rem;\n  transition: all 0.3s;\n}\n.nav__menu li a:hover {\n  color: #EA680B;\n  transform: translateY(-0.3rem);\n}\n.nav__burger {\n  display: flex;\n  width: 3.5rem;\n  height: 3rem;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 0.5rem;\n  cursor: pointer;\n  transition: padding 100ms ease;\n}\n.nav__burger.is-expanded {\n  padding: calc(1rem - 1px) 0.5rem;\n}\n.nav__burger.is-expanded + .nav__menu {\n  transform: translate3d(0, 0, 0);\n}\n.nav__burger.is-expanded + .nav__menu li {\n  opacity: 1;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(1) {\n  transition-delay: 275ms;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(2) {\n  transition-delay: 300ms;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(3) {\n  transition-delay: 325ms;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(4) {\n  transition-delay: 350ms;\n}\n.nav__burger.is-expanded + .nav__menu li:nth-of-type(5) {\n  transition-delay: 375ms;\n}\n.nav__burger__line {\n  background-color: #0A0A0B;\n  display: inline-block;\n  height: 2px;\n  width: 100%;\n  transition: all 100ms ease;\n}\n:hover > .nav__burger__line {\n  background-color: #EA680B;\n}\n.nav__burger.is-expanded .nav__burger__line:nth-of-type(2) {\n  transform: rotate(-45deg);\n  position: relative;\n}\n.nav__burger.is-expanded .nav__burger__line:first-of-type, .nav__burger.is-expanded .nav__burger__line:last-of-type {\n  opacity: 0;\n}\n\n.content__btn {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  bottom: 2rem;\n  border-radius: 45px;\n  width: 16rem;\n  height: 4.5rem;\n  border: 1px solid #0A0A0B;\n  background-color: #F9F9F9;\n  color: #0A0A0B;\n  font-family: \"Poppins\";\n  font-size: 2rem;\n  font-weight: 200;\n  outline: 0;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.content__btn:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 0.5rem -0.4rem #EA680B;\n  transform: translateY(-0.8rem);\n}\n\n.aux__btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  position: fixed;\n  display: inline-flex;\n  left: 0.5rem;\n  border-radius: 50%;\n  width: 3.5rem;\n  height: 3.5rem;\n  border: 1px solid #0A0A0B;\n  background-color: #F9F9F9;\n  color: #0A0A0B;\n  font-family: \"Poppins\";\n  font-size: 2rem;\n  font-weight: 200;\n  outline: 0;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.aux__btn:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 1rem -0.4rem #EA680B;\n}\n\n.header__search {\n  border-radius: 45px;\n  height: 3.5rem;\n  width: 80%;\n  padding: 1rem;\n  border: 1px solid;\n  outline: 0;\n  margin-top: 2rem;\n  cursor: pointer;\n  text-align: center;\n  position: relative;\n  border-color: #0A0A0B;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.header__search:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 0.5rem -0.4rem #EA680B;\n}\n.header__search:focus {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 1.2rem -0.4rem #EA680B;\n}\n\n.header__search__container {\n  position: relative;\n}\n\n.header__preditions {\n  position: absolute;\n  display: block;\n  top: 6.5rem;\n  width: 100%;\n  overflow-y: scroll;\n  max-height: 20rem;\n  background-color: #F9F9F9;\n  font-size: 1.3rem;\n  box-shadow: 0 0.5rem 1.8rem -0.4rem #EA680B;\n}\n.header__preditions li {\n  padding: 0.8rem 2rem;\n  cursor: pointer;\n}\n.header__preditions li:hover {\n  background-color: #EA680B;\n}\n\n.card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 80%;\n  height: 35rem;\n  margin: 1rem 0;\n  background-color: #0A0A0B;\n}\n.card .card__figure {\n  height: 45%;\n  width: 100%;\n  overflow: hidden;\n}\n.card .card__figure .figure__img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  image-resolution: 72dpi;\n}\n.card .card__caption {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  height: 50%;\n  width: 100%;\n  padding: 3em;\n}\n.card .card__caption .caption__title {\n  color: #F9F9F9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  text-align: center;\n  font-size: 2rem;\n  height: 60%;\n  width: 100%;\n  padding: 2rem 0;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.card .card__caption .caption__title:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 0.5rem -0.4rem #EA680B;\n}\n.card .card__caption .caption__date, .card .card__caption .caption__author {\n  color: #F9F9F9;\n  align-self: flex-end;\n  font-size: 1.2rem;\n}\n\n.tag__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 4rem;\n  font-size: 2rem;\n  width: 100%;\n  color: #0A0A0B;\n}\n.tag__container .tag__element {\n  padding: 1rem 0;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tag__container .tag__element:hover {\n  color: #EA680B;\n  transform: translateY(-0.3rem);\n}\n\n.form__input {\n  border-radius: 45px;\n  height: 3.5rem;\n  width: 80%;\n  padding: 1rem;\n  border: 1px solid;\n  outline: 0;\n  margin-top: 2rem;\n  cursor: pointer;\n  text-align: center;\n}\n\n.form__icon {\n  font-size: 5rem;\n  margin-top: 2.5rem;\n  color: #EA680B;\n}\n\n.input--base {\n  border-color: #0A0A0B;\n  transition: all 0.2s;\n}\n.input--base:hover {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 0.5rem -0.4rem #EA680B;\n}\n.input--base:focus {\n  border-color: #EA680B;\n  box-shadow: 0 0.5rem 1.2rem -0.4rem #EA680B;\n}\n\n.input--wrong {\n  border-color: red;\n  box-shadow: 0 0.5rem 1.2rem -0.4rem #EB190A;\n}\n\n.input--good {\n  border-color: green;\n  box-shadow: 0 0.5rem 1.2rem -0.4rem #1CC819;\n}\n\n.form__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 90%;\n}\n\n.figure {\n  height: 25rem;\n  width: 100vw;\n  overflow: hidden;\n}\n.figure .figure__image {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  image-resolution: 72dpi;\n}\n\n.post__content {\n  background-color: white;\n  padding: 2rem 1rem;\n  margin: 2rem 0 1rem 0;\n  font-size: 1.5rem;\n  font-weight: 300;\n  line-height: 2.2rem;\n}\n.post__content p {\n  padding: 1rem 0;\n}\n\n.post__info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  font-size: 1.2rem;\n  font-weight: 400;\n  padding: 2rem 1.5rem;\n  color: #EA680B;\n  background-color: white;\n}\n\n.post__comments {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  margin-top: 2rem;\n  padding-bottom: 10rem;\n}\n.post__comments .comment__card {\n  background-color: white;\n  margin: 0.8rem 0;\n  padding: 1rem 1rem;\n  width: 100%;\n}\n.post__comments .comment__card .comment__content {\n  font-size: 1.4rem;\n  font-weight: 200;\n  padding: 1rem 0;\n}\n.post__comments .comment__card .comment__author, .post__comments .comment__card .comment__date {\n  font-size: 1.2rem;\n  font-weight: 400;\n  padding: 0.5rem 0;\n}\n.post__comments .comment__card .comment__author {\n  color: #EA680B;\n  font-weight: 400;\n  padding: 0.5rem 0;\n}\n.post__comments .form__container {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.post__comments .form__container .form__input {\n  width: 100%;\n  height: 8rem;\n  border-radius: 0;\n}","* {\n    box-sizing: border-box;\n    \n}\n\nhtml, body {\n    font-size: 10px;\n    font-family: 'Poppins';\n    background-color: $white;\n    color: $black;\n}\n\n#app {\n    @include flexCenter(column);\n    overflow: hidden;\n    width: 100vw;\n}\n","$white: #F9F9F9;\n$black: #0A0A0B;\n$gray: #61636B;\n$orange: #EA680B;\n$green: #1CC819;\n$red: #EB190A;\n\n$w_thin: 200;\n$w_light: 300;\n$w_regular: 400;\n$w_bold: 600;\n\n\n@mixin  flexCenter ($direction) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: $direction;\n}\n\n@mixin generalInput {\n    border-radius: 45px;\n    height: 3.5rem;\n    width: 80%;\n    padding: 1rem;\n    border: 1px solid;\n    outline: 0;\n    margin-top: 2rem;\n    cursor: pointer;\n    text-align: center;\n}\n\n@mixin generalTitle {\n    margin-top: 2rem;\n    font-size: 2.5rem;\n    font-weight: $w_thin;\n    text-align: center;\n}",".app__header {\n    @include flexCenter(row);\n    position: relative;\n    height: 100px;\n    width: 100%;\n    border-bottom: 1px solid $gray;\n\n    .header__nav {\n        @include flexCenter(row);\n        justify-content: space-between;\n        height: 100%;\n        width: 80%;\n    }\n}",".app__content {\n    // overflow: hidden;\n    @include flexCenter(column);\n    position: relative;\n    height: 100%;\n    width: 90%;\n    z-index: 999;\n    .content__header {\n        @include flexCenter(column);\n        height: 100px;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        .header__search__container {\n            @include flexCenter(column);\n            width: 100%;\n            \n        }\n        \n    }\n    .header__title {\n        @include generalTitle();\n        span {\n            font-weight: $w_regular;\n            transition: all 0.5s;\n            &:hover {\n                color: $orange\n            }\n            --border-width: 0.2rem;\n            --animation-speed: 0.2s;\n            border: var(--border-width) solid transparent;\n            &:focus:before,\n            &:hover:before {\n                animation: beforeBorders var(--animation-speed) forwards ease-in-out;\n            }\n            &:focus:after,\n            &:hover:after {\n                animation: afterBorders var(--animation-speed) forwards ease-in-out;\n            }\n            &:hover {\n                animation: borderColors var(--animation-speed)  forwards;\n                outline: none;\n            }\n            }\n    }\n    \n    .content__container {\n        @include flexCenter(column);\n        margin: 110px 0 90px 0;\n        width: 100%;\n        // position: relative;\n    }\n}\n\n.home__title {\n    font-size: 5rem;\n    font-weight: $w_thin;\n    text-align: center;\n    line-height: 7.5rem;\n    margin-bottom: 2rem;\n    padding: 0 2rem;\n    cursor: default;\n    & span {\n        font-weight: $w_bold;\n        --border-width: 0.5rem;\n        --animation-speed: 0.15s;\n        border: var(--border-width) solid transparent;\n        &:focus:before,\n        &:hover:before {\n            animation: beforeBorders var(--animation-speed) forwards ease-in-out;\n        }\n        &:focus:after,\n        &:hover:after {\n            animation: afterBorders var(--animation-speed) forwards ease-in-out;\n        }\n        &:hover {\n            animation: borderColors var(--animation-speed)  forwards;\n            outline: none;\n        }\n    }\n}\n\n.app__subtitle {\n    color: $gray;\n    font-size: 1.2rem;\n    font-weight: $w_regular;\n}\n\n\n@keyframes beforeBorders {\n  0% {\n    top: calc(var(--border-width) * -1);\n    left: 50%;\n    bottom: auto;\n    right: auto;\n    width: 0;\n    height: var(--border-width);\n  }\n  33% {    \n    top: calc(var(--border-width) * -1);\n    left: calc(var(--border-width) * -1);\n    bottom: auto;\n    right: auto;\n    width: calc(var(--border-width) + 50%);\n    height: var(--border-width);\n  }\n  66% {\n    top: calc(var(--border-width) * -1);\n    left: calc(var(--border-width) * -1);\n    bottom: auto;\n    right: auto;\n    width: var(--border-width);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n  100% {\n    top: auto;\n    left: calc(var(--border-width) * -1);\n    bottom: calc(var(--border-width) * -1);\n    right: auto;\n    width: calc(var(--border-width) + 50%);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n}\n\n@keyframes afterBorders {\n  0% {\n    top: calc(var(--border-width) * -1);\n    left: auto;\n    bottom: auto;\n    right: 50%;\n    width: 0;\n    height: var(--border-width);\n  }\n  33% {    \n    top: calc(var(--border-width) * -1);\n    left: auto;\n    bottom: auto;\n    right: calc(var(--border-width) * -1);\n    width: calc(var(--border-width) + 50%);\n    height: var(--border-width);\n  }\n  66% {\n    top: calc(var(--border-width) * -1);\n    left: auto;\n    bottom: auto;\n    right: calc(var(--border-width) * -1);\n    width: var(--border-width);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n  100% {\n    top: auto;\n    left: auto;\n    bottom: calc(var(--border-width) * -1);\n    right: calc(var(--border-width) * -1);\n    width: calc(var(--border-width) + 50%);\n    height: calc((var(--border-width) * 2) + 100%);\n  }\n}\n\n@keyframes borderColors {\n  0% {\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n  }\n  33% {\n    border-top-color: $orange;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n\n  }\n  66% {\n    border-top-color: $orange;\n    border-right-color: $orange;\n    border-bottom-color: transparent;\n    border-left-color: $orange;\n  }\n  100% {\n    border-top-color: $orange;\n    border-right-color: $orange;\n    border-bottom-color: $orange;\n    border-left-color: $orange;\n  }\n}",".nav {\n    &__logo {\n        text-decoration: none;\n        font-size: 3rem;\n        font-weight: $w_bold;\n        color: $black;\n        transition: all 0.2s;\n            &:hover {\n                color: $orange\n            }\n    }\n    &__menu {\n    //   overflow: hidden;\n      position: absolute;\n      z-index: 9999;\n      right: 0;\n      background: $white;\n      top: 100px;\n      padding: 2rem;\n      text-align: center;\n      width: 100%;\n      transform: translate3d(100%, 0, 0);\n      transition: transform 250ms ease-in-out;\n      li {\n        opacity: 0;\n        list-style: none;\n        padding: 1rem 0;\n        font-weight: 400;\n        overflow: hidden;\n        letter-spacing: .05rem;\n        cursor: pointer;\n        transition: all 250ms ease-in-out;\n        a {\n            text-decoration: none;\n            display: inline-flex;\n            display: inline-flex;\n            color: $black;\n            font-size: 2rem;\n            height: 100%;\n            padding: 0.4rem;\n            transition: all 0.3s;\n            &:hover {\n                color: $orange;\n              // font-size: 2.2rem;\n                transform: translateY(-0.3rem);\n            }\n        }\n      }\n    }\n    \n    \n      &__burger {\n        display: flex;\n        width: 3.5rem;\n        height: 3rem;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n        // border: 1px solid $black;\n        // border-radius: 3px;\n        padding: 0.5rem;\n        cursor: pointer;\n        transition: padding 100ms ease;\n        &.is-expanded {\n          padding: calc(1rem - 1px) 0.5rem;\n          \n          & + .nav__menu {\n            transform: translate3d(0, 0, 0);\n            \n            li {\n              opacity: 1;\n              @for $i from 1 through 5 {\n                &:nth-of-type(#{$i}) {\n                  transition-delay: #{$i * 25 + 250}ms;\n                } \n              }\n            }\n          }\n        }\n      }\n      &__burger__line {\n        :hover > & {\n            background-color: $orange;\n        }\n        background-color: $black;\n        display: inline-block;\n        height: 2px;\n        width: 100%;\n        transition: all 100ms ease;\n        .nav__burger.is-expanded & {\n          &:nth-of-type(2) {\n            transform: rotate(-45deg);\n            position: relative;\n            // &::after {\n            //   content: \"\";\n            //   background: $black;\n            //   width: 100%;\n            //   height: 3px;\n            //   position: absolute;\n            //   display: inline-block;\n            //   transform: rotate(-90deg);\n            // }\n          }\n          &:first-of-type,\n          &:last-of-type {\n            opacity: 0;\n          }\n        }\n    \n    }\n}\n\n\n\n\n\n",".content__btn {\n    position: absolute;\n    @include flexCenter(row);\n    bottom: 2rem;\n    border-radius: 45px;\n    width: 16rem;\n    height: 4.5rem;\n    // padding: 1rem 2.5rem;\n    border: 1px solid $black;\n    background-color: $white;\n    color: $black;\n    font-family: 'Poppins';\n    font-size: 2rem;\n    font-weight: $w-thin;\n    outline: 0;\n    cursor: pointer;\n    transition: all 0.2s;\n    &:hover {\n        border-color: $orange;\n        box-shadow: 0 0.5rem 0.5rem -0.4rem $orange;\n        transform: translateY(-0.8rem);\n    }\n}",".aux__btn {\n    @include flexCenter(row);\n    position: fixed;\n    display: inline-flex;\n    // top: 11.8rem;\n    left: 0.5rem;\n    border-radius: 50%;\n    width: 3.5rem;\n    height: 3.5rem;\n    // padding: 1rem 2.5rem;\n    border: 1px solid $black;\n    background-color: $white;\n    color: $black;\n    font-family: 'Poppins';\n    font-size: 2rem;\n    font-weight: $w-thin;\n    outline: 0;\n    cursor: pointer;\n    transition: all 0.3s;\n    &:hover {\n        border-color: $orange;\n        box-shadow: 0 0.5rem 1rem -0.4rem $orange;\n    }\n}",".header__search {\n    @include generalInput();\n    position: relative;\n    border-color: $black;\n    cursor: pointer;\n    transition: all 0.2s;\n    &:hover {\n        border-color: $orange;\n        // transform: translateY(-0.8rem);\n        box-shadow: 0 0.5rem 0.5rem -0.4rem $orange;\n        \n    }\n    &:focus {\n        border-color: $orange;\n        box-shadow: 0 0.5rem 1.2rem -0.4rem $orange;\n    }\n}\n\n.header__search__container {\n    position: relative;\n}\n\n.header__preditions {\n    position: absolute;\n    display: block;\n    top: 6.5rem;\n    // height: 20rem;\n    width: 100%;\n    overflow-y: scroll;\n    max-height: 20rem;\n    background-color: $white;\n    font-size: 1.3rem;\n    box-shadow: 0 0.5rem 1.8rem -0.4rem $orange;\n    \n    li {\n        padding: 0.8rem 2rem;\n        cursor: pointer;\n        &:hover {\n            background-color: $orange;\n        }\n    }\n}",".card {\n        @include flexCenter(column);\n        justify-content: space-between;\n        width: 80%;\n        height: 35rem;\n        margin: 1rem 0;\n\n        background-color: $black;\n\n        .card__figure {\n            height: 45%;\n            width: 100%;\n            overflow: hidden;\n\n            .figure__img {\n                object-fit: cover;\n                width: 100%;\n                height: 100%;\n                image-resolution: 72dpi;\n            }\n        }\n        \n        .card__caption {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: space-between;\n            height: 50%;\n            width: 100%;\n            padding: 3em;\n\n            .caption__title {\n                color: $white;\n                @include flexCenter(row);\n                text-align: center;\n                font-size: 2rem;\n                height: 60%;\n                width: 100%;\n                padding: 2rem 0;\n                cursor: pointer;\n                transition: all 0.2s;\n                &:hover {\n                    border-color: $orange;\n                    // transform: translateY(-0.8rem);\n                    box-shadow: 0 0.5rem 0.5rem -0.4rem $orange;\n                    \n                }\n            }\n\n            .caption__date, .caption__author {\n                color: $white;\n                align-self: flex-end;\n                font-size: 1.2rem;\n            }\n            \n        }\n    }",".tag__container {\n    @include flexCenter(column);\n    margin-top: 4rem;\n    font-size: 2rem;\n    width: 100%;\n    color: $black;\n    .tag__element {\n        padding: 1rem 0;\n        cursor: pointer;\n        transition: all 0.2s;\n            &:hover {\n                color: $orange;\n                transform: translateY(-0.3rem);\n            }\n    }\n}","\n\n// .form__title {\n//     @include generalTitle();\n//     margin-top: 0;\n//     margin-bottom: 2rem;\n// }\n\n.form__input {\n    @include generalInput();\n}\n\n.form__icon {\n    font-size: 5rem;\n    margin-top: 2.5rem;\n    color: $orange;\n}\n\n.input--base {\n    border-color: $black;\n    transition: all 0.2s;\n    &:hover {\n        border-color: $orange;\n        box-shadow: 0 0.5rem 0.5rem -0.4rem $orange;\n    }\n    &:focus {\n        border-color: $orange;\n        box-shadow: 0 0.5rem 1.2rem -0.4rem $orange;\n    }\n}\n\n.input--wrong {\n    border-color: red;\n    box-shadow: 0 0.5rem 1.2rem -0.4rem $red;\n}\n.input--good {\n    border-color: green;\n    box-shadow: 0 0.5rem 1.2rem -0.4rem $green;\n}\n\n.form__container {\n    @include flexCenter(column);\n    width: 90%;\n}",".figure {\n    height: 25rem;\n    width: 100vw;\n    // margin-left: calc(50% - 50vw);\n    overflow: hidden;\n\n    .figure__image {\n        object-fit: cover;\n        width: 100%;\n        height: 100%;\n        image-resolution: 72dpi;\n    }\n}\n\n.post__content {\n    background-color: white;\n    padding: 2rem 1rem;\n    margin: 2rem 0 1rem 0;\n    font-size: 1.5rem;\n    font-weight: $w_light;\n    line-height: 2.2rem;\n    p {\n        padding: 1rem 0;\n    }\n}\n\n.post__info {\n    @include flexCenter(row);\n    justify-content: space-between;\n    width: 100%;\n    font-size: 1.2rem;\n    font-weight: $w_regular;\n    padding: 2rem 1.5rem;\n    color: $orange;\n    background-color: white;\n}\n\n.post__comments {\n    @include flexCenter(column);\n    position: relative;\n    margin-top: 2rem;\n    padding-bottom: 10rem;\n    .comment__card {\n        background-color: white;\n        margin: 0.8rem 0;\n        padding: 1rem 1rem;\n        width: 100%;\n        .comment__content {\n            font-size: 1.4rem;\n            font-weight: $w_thin;\n            padding: 1rem 0;\n        }\n        .comment__author, .comment__date {\n            font-size: 1.2rem;\n            font-weight: $w_regular;\n            padding: 0.5rem 0;\n        }\n        .comment__author {\n            color: $orange;\n            font-weight: $w_regular;\n            padding: 0.5rem 0;\n        }\n    }\n\n    .form__container {\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        .form__input {\n            width: 100%;\n            height: 8rem;\n            // border: 0.1rem solid $gray;\n            border-radius: 0;\n        }\n    }\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _js_layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/layout/_header */ "./src/js/layout/_header.js");
/* harmony import */ var _js_layout_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/layout/_main */ "./src/js/layout/_main.js");
/* harmony import */ var _js_utilities_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/utilities/_router */ "./src/js/utilities/_router.js");






// MAIN APP HANDLE
const app = () => {
    const app$$ = document.querySelector('#app');

    // Create main structure
    (0,_js_layout_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)(app$$);
    (0,_js_layout_main__WEBPACK_IMPORTED_MODULE_2__.createMain)(app$$);
}
app();

// window.onload = () => {
//     app();
// }

/***/ }),

/***/ "./src/js/components/_auxBtn.js":
/*!**************************************!*\
  !*** ./src/js/components/_auxBtn.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auxBtn": () => /* binding */ auxBtn
/* harmony export */ });
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");


// The main button
const auxBtn = (parent, text, callback, props, propsArg) => {
    const btn$$ = document.createElement('button');
    btn$$.classList.add('aux__btn');
    btn$$.setAttribute('type', 'button');
    btn$$.innerHTML = `${text}`;
    if (props) {
        btn$$.setAttribute(`${props}`, `${propsArg}`);
    }
    btn$$.addEventListener('click', () => {
        callback();
    })
    // btnPositionWrapper(btn$$);
    ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, btn$$);
    
    stickyBtn(btn$$);
    window.addEventListener('scroll', () => {
        stickyBtn(btn$$);
    });
}


const stickyBtn = (btn) => {
    let y = window.scrollY;
    let defaultTop = 11.8;
    if (y == 0) {
        btn.style.setProperty(`top`, `${defaultTop}rem`)
    } 
    else if (y > 100) {
        btn.style.setProperty(`top`, `${defaultTop-10.5}rem`)
    }
}


/***/ }),

/***/ "./src/js/components/_mainBtn.js":
/*!***************************************!*\
  !*** ./src/js/components/_mainBtn.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainBtn": () => /* binding */ mainBtn
/* harmony export */ });
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");


// The main button
const mainBtn = (parent, text, callback, props, propsArg) => {
    const btn$$ = document.createElement('button');
    btn$$.classList.add('content__btn');
    btn$$.setAttribute('type', 'button');
    btn$$.innerHTML = `${text}`;
    if (props) {
        btn$$.setAttribute(`${props}`, `${propsArg}`);
    }
    btn$$.addEventListener('click', () => {
        callback();
    })
    // btnPositionWrapper(btn$$);
    ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, btn$$);
}

/***/ }),

/***/ "./src/js/components/_navBar.js":
/*!**************************************!*\
  !*** ./src/js/components/_navBar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBar": () => /* binding */ navBar
/* harmony export */ });
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");





// NavBar
const navBar = (parent) => {
    const nav$$ = document.createElement('header__nav');
    nav$$.classList.add('header__nav')
    const logo$$ = document.createElement('a');
    logo$$.classList.add('nav__logo');
    logo$$.setAttribute('href', 'javascript:void(0)');
    logo$$.setAttribute('data-function', 'fn-home');
    logo$$.innerText = 'myBlog';
    const burger$$ = document.createElement('div');
    burger$$.classList.add('nav__burger');
    burger$$.setAttribute('data-function', 'fn-toggleMenu');
    for (let index = 0; index < 3; index++) {
        const span$$ = document.createElement('span');
        span$$.classList.add('nav__burger__line');
        burger$$.appendChild(span$$);
    }
    burger$$.addEventListener('click', () => {
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(burger$$, 'is-expanded');
    })
    logo$$.addEventListener('click', () => {
        _utilities_data__WEBPACK_IMPORTED_MODULE_1__.logState.state === false ? _utilities_router__WEBPACK_IMPORTED_MODULE_2__.router.load('landing') : _utilities_router__WEBPACK_IMPORTED_MODULE_2__.router.load('home');
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.removeClass)(burger$$, 'is-expanded')
    })
    ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(nav$$, logo$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(nav$$, burger$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, nav$$);
    navLinks(nav$$, burger$$);
}

// Creates menu for burger
const navLinks = (parent, burger) => {
    const menu$$ = document.createElement('div');
    menu$$.classList.add('nav__menu');
    menu$$.setAttribute('tabindex', '-1')
    ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.resizeContentWrapper)(menu$$);
    const mUl$$ = document.createElement('ul');
    _utilities_data__WEBPACK_IMPORTED_MODULE_1__.logState.state === false ? getNavLinks(mUl$$, burger, _utilities_data__WEBPACK_IMPORTED_MODULE_1__.links.not_logged) : getNavLinks(mUl$$, burger, _utilities_data__WEBPACK_IMPORTED_MODULE_1__.links.logged);
    const app$$ = document.querySelector('#app');
    app$$.addEventListener('click', () => {
        if (mUl$$) {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(mUl$$);
        }
        _utilities_data__WEBPACK_IMPORTED_MODULE_1__.logState.state === false ? getNavLinks(mUl$$, burger, _utilities_data__WEBPACK_IMPORTED_MODULE_1__.links.not_logged) : getNavLinks(mUl$$, burger, _utilities_data__WEBPACK_IMPORTED_MODULE_1__.links.logged);
    })
    
    ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(menu$$, mUl$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, menu$$);
}

// Creates links from array for menu -> burger
const getNavLinks = (parent, burger, links) => {
    for (const key in links) {
        const mLi$$ = document.createElement('li');
        const a$$ = document.createElement('a');
        a$$.setAttribute('href', 'javascript:void(0)');
        a$$.innerText = `${links[key].name}`;
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(mLi$$, a$$);
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, mLi$$);
        a$$.addEventListener('click', () => {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(burger, 'is-expanded');
            links[key].fn.call();
        })
    }
}

/***/ }),

/***/ "./src/js/components/_postCard.js":
/*!****************************************!*\
  !*** ./src/js/components/_postCard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postCards": () => /* binding */ postCards
/* harmony export */ });
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");







// Each post card for each function --- only shows the 10 most recent posts
const postCards = async (parent, posts) => {
    let users = await (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.fetchData)(_utilities_data__WEBPACK_IMPORTED_MODULE_0__.urlsToFetch.users);
    let numOfPost = 10;
    let shownResults = posts.slice(0, numOfPost).map(
        post => {
            const card$$ = document.createElement('div');
            card$$.classList.add('card');
            const figure$$ = document.createElement('figure');
            figure$$.classList.add('card__figure');
            const img$$ = document.createElement('img');
            img$$.classList.add('figure__img');
            img$$.setAttribute('loading', 'lazy');
            img$$.src = post.img;
            const caption$$ = document.createElement('div');
            caption$$.classList.add('card__caption');
            const title$$ = document.createElement('h3');
            title$$.classList.add('caption__title');
            title$$.innerHTML = `${post.title}`;
            const date$$ = document.createElement('p');
            date$$.classList.add('caption__date');
            date$$.innerHTML = `${post.created_date}`;
            const author$$ = document.createElement('p');
            author$$.classList.add('caption__author');
            let author;
            for (const user in users) {
                if (users[user].id === post.author) {
                    author = `${users[user].user_name}`;
                    author$$.innerHTML = author;
                }
            }
            let props = [post, author];
            title$$.addEventListener('click', () => {
                _utilities_router__WEBPACK_IMPORTED_MODULE_2__.router.load('post', props);
                window.scrollTo(0, 0);
            })
            ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.appendTo)(figure$$, img$$);
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.appendTo)(caption$$, title$$);
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.appendTo)(caption$$, date$$);
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.appendTo)(caption$$, author$$);
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.appendTo)(card$$, figure$$);
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.appendTo)(card$$, caption$$);
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.appendTo)(parent, card$$);
        }
    )
}

/***/ }),

/***/ "./src/js/components/_search.js":
/*!**************************************!*\
  !*** ./src/js/components/_search.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => /* binding */ search
/* harmony export */ });
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");
/* harmony import */ var _searchResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_searchResult */ "./src/js/components/_searchResult.js");







// The search Bar
const search = async (parent, posts) => {
    const searchContainer$$ = document.createElement('div');
    searchContainer$$.classList.add('header__search__container');
    const elClass = 'header__search';
    let searchArr = _utilities_data__WEBPACK_IMPORTED_MODULE_1__.inputElements.search;
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.createInput)(searchContainer$$, searchArr, elClass);
    const predictions$$ = document.createElement('ul');
    predictions$$.classList.add('header__preditions');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(searchContainer$$, predictions$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, searchContainer$$);

    const searchInput$$ = document.querySelector('.header__search');
    searchInput$$.addEventListener('input', () => {
        const main$$ = document.querySelector('.app__content');
        let value = searchInput$$.value.toLowerCase();
        let filteredData = posts.filter(element => element.title.toLowerCase().includes(value.toLowerCase()));
        if (value != '') {
            getPredicitons(filteredData, predictions$$, searchInput$$, main$$);
            (0,_searchResult__WEBPACK_IMPORTED_MODULE_3__.searchResults)(main$$, filteredData);
        }
        if (value == '') {
            let filteredData = [];
            getPredicitons(filteredData, predictions$$);
            (0,_searchResult__WEBPACK_IMPORTED_MODULE_3__.searchResults)(main$$, posts);
        }
    })
}

const getPredicitons = (arr, parent, input, parentSearch) => {
    console.log(arr);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.removeChildsIf)(parent)
    let arrSearch = [];
    parent.style.display = 'block';
    arr.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.title;
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, li);
        li.addEventListener('click', (e) => {
            input.value = element.title;
            arrSearch.push(element);
            (0,_searchResult__WEBPACK_IMPORTED_MODULE_3__.searchResults)(parentSearch, arrSearch);
            parent.style.display = 'none';
        })
    });

}

/***/ }),

/***/ "./src/js/components/_searchResult.js":
/*!********************************************!*\
  !*** ./src/js/components/_searchResult.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchResults": () => /* binding */ searchResults
/* harmony export */ });
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");
/* harmony import */ var _auxBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_auxBtn */ "./src/js/components/_auxBtn.js");
/* harmony import */ var _mainBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mainBtn */ "./src/js/components/_mainBtn.js");
/* harmony import */ var _postCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_postCard */ "./src/js/components/_postCard.js");








// Search result page
const searchResults = (parent, posts) => {
    console.log(posts);
    const containerToRemove$$ = document.querySelector('.content__container');
    const btnToRemove$$ = document.querySelector('button');
    if (containerToRemove$$) {
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.removeElement)(containerToRemove$$);
    }
    if (btnToRemove$$) {
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.removeElement)(btnToRemove$$);
    }
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.sortDates)(posts);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, container$$);
    (0,_postCard__WEBPACK_IMPORTED_MODULE_4__.postCards)(container$$, posts)
    ;(0,_mainBtn__WEBPACK_IMPORTED_MODULE_3__.mainBtn)(parent, `<i class='bx bx-arrow-to-top'></i>`, () => {
        ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.scrollToTop)();
    });
    (0,_auxBtn__WEBPACK_IMPORTED_MODULE_2__.auxBtn)(parent, `<i class='bx bx-arrow-to-left'></i>`, () => {
        _utilities_router__WEBPACK_IMPORTED_MODULE_1__.router.load('home');
    })
}

/***/ }),

/***/ "./src/js/layout/_header.js":
/*!**********************************!*\
  !*** ./src/js/layout/_header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => /* binding */ createHeader
/* harmony export */ });
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _components_navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_navBar */ "./src/js/components/_navBar.js");




const createHeader = (parent) => {
    // .app__header
    const header$$ = document.createElement('header');
    header$$.classList.add('app__header');
    _utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo(parent, header$$);
    (0,_components_navBar__WEBPACK_IMPORTED_MODULE_1__.navBar)(header$$);
}




/***/ }),

/***/ "./src/js/layout/_main.js":
/*!********************************!*\
  !*** ./src/js/layout/_main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => /* binding */ createMain
/* harmony export */ });
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");





// Main content
const createMain = (parent) => {
    // .app__content
    const main$$ = document.createElement('section');
    main$$.classList.add('app__content');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.resizeContentWrapper)(main$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, main$$);
    // console.log(main$$);
    // parent.addEventListener('', listener);
    

    // Logo click handle
    // const logo$$ = document.querySelector('[data-function="fn-home"]');
    // const burger$$ = document.querySelector('[data-function="fn-toggleMenu"]');
    // logo$$.addEventListener('click', () => {
    //     removeClass(burger$$, 'is-expanded');
    //     // logState.state == false ? home(main$$) : loggedView(main$$);;
    // })
}






/***/ }),

/***/ "./src/js/routes/_home.js":
/*!********************************!*\
  !*** ./src/js/routes/_home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => /* binding */ homePage
/* harmony export */ });
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _components_mainBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_mainBtn */ "./src/js/components/_mainBtn.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/_search */ "./src/js/components/_search.js");
/* harmony import */ var _components_postCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/_postCard */ "./src/js/components/_postCard.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");









const homePage = async (parent) => {
    let posts = await (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.fetchData)(_utilities_data__WEBPACK_IMPORTED_MODULE_1__.urlsToFetch.posts);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.removeChildsIf)(parent);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    let title;
    _utilities_data__WEBPACK_IMPORTED_MODULE_1__.logState.state === false ? title = `Hi, <span>guest</span>` : title = `Hi, <span>${_utilities_data__WEBPACK_IMPORTED_MODULE_1__.logState.user}</span>`;
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.sectionTitle)(header$$, title);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, header$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, container$$);
    postTags(container$$, posts);
    (0,_components_search__WEBPACK_IMPORTED_MODULE_3__.search)(header$$, posts);
    (0,_components_mainBtn__WEBPACK_IMPORTED_MODULE_2__.mainBtn)(container$$, 'recent posts', () => {
        _utilities_router__WEBPACK_IMPORTED_MODULE_5__.router.load('recents', posts);
    })
}

const postTags = (parent, posts) => {
    let tags = getTags(posts);
    showTags(parent, tags, posts);
}

// Gets all tags in api
const getTags = (posts) => {
    let tags = [];
    for (let post in posts) {
        post = posts[post];
        for (let key in post) {
            if (key === 'tags') {
                key = post[key]
                for (let tag in key) {
                    tag = key[tag];
                    if (!tags.includes(tag)) {
                        tags.push(tag);
                    }
                }
            }
        }
    }
    return tags;
}

// Shown tags
const showTags = (parent, tags, posts) => {
    // select 6 tags to show + order a to z
    let numOfTags = 6;
    let shownResults = tags.slice(0, numOfTags)
    shownResults.sort((a, b) => a.localeCompare(b));
    // print results
    const h3$$ = document.createElement('h3');
    h3$$.classList.add('app__subtitle');
    h3$$.innerHTML = 'here are some trending topics';
    const tagContainer$$ = document.createElement('div');
    tagContainer$$.classList.add('tag__container');
    shownResults.forEach(element => {
        const tag$$ = document.createElement('p');
        tag$$.classList.add('tag__element');
        tag$$.innerHTML = `${element}`;
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(tagContainer$$, tag$$);
        tag$$.addEventListener('click', () => {
            let postWithTag = getPostByTag(element, posts);
            const main$$ = document.querySelector('.app__content');
            // tagPosts(main$$, postWithTag, element);
            _utilities_router__WEBPACK_IMPORTED_MODULE_5__.router.load('tagPosts', postWithTag, element)
        });
    });
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, h3$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, tagContainer$$);
}

// Gets post by tag
const getPostByTag = (tag, posts) => {
    let postByTag = [];
    for (let post in posts) {
        post = posts[post];
        for (let key in post) {
            if (key === 'tags') {
                key = post[key]
                if (key != null) {
                    if (key.includes(tag)) {
                        postByTag.push(post);
                    };
                }
            }
        }
    }
    return postByTag;
}

/***/ }),

/***/ "./src/js/routes/_landing.js":
/*!***********************************!*\
  !*** ./src/js/routes/_landing.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "landingPage": () => /* binding */ landingPage
/* harmony export */ });
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _components_mainBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_mainBtn */ "./src/js/components/_mainBtn.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");







const landingPage = (parent) => {
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.removeChildsIf)(parent);
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    const h1$$ = document.createElement('h1');
    h1$$.classList.add('home__title');
    h1$$.innerHTML = 'Welcome to <span>myBlog</span>';
    const h3$$ = document.createElement('h3');
    h3$$.classList.add('app__subtitle');
    h3$$.innerText = 'made for real bloggers';
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(container$$, h1$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(container$$, h3$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_0__.appendTo)(parent, container$$);
    (0,_components_mainBtn__WEBPACK_IMPORTED_MODULE_1__.mainBtn)(container$$, 'start!', () => {
        _utilities_router__WEBPACK_IMPORTED_MODULE_2__.router.load('home');
    })
}

/***/ }),

/***/ "./src/js/routes/_post.js":
/*!********************************!*\
  !*** ./src/js/routes/_post.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postPage": () => /* binding */ postPage
/* harmony export */ });
/* harmony import */ var _components_auxBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/_auxBtn */ "./src/js/components/_auxBtn.js");
/* harmony import */ var _components_mainBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_mainBtn */ "./src/js/components/_mainBtn.js");
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");








const postPage = async (parent, props) => {
    let post = await (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.fetchData)(`${_utilities_data__WEBPACK_IMPORTED_MODULE_2__.urlsToFetch.posts}/${props[0].id}`);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.removeChildsIf)(parent);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');

    const figure$$ = document.createElement('figure');
    figure$$.classList.add('figure')
    const img$$ = document.createElement('img');
    img$$.classList.add('figure__image');
    img$$.src = `${post.img}`;
    const postContent$$ = document.createElement('div');
    postContent$$.classList.add('post__content')
    postContent$$.innerHTML = `${props[0].content}`;
    const postInfo$$ = document.createElement('div');
    postInfo$$.classList.add('post__info');
    postInfo$$.innerHTML = `
    <p>${post.created_date} - ${post.created_time}</p>
    <p>${props[1]}</p>`;
    const postCommentsContainer$$ = document.createElement('div');
    postCommentsContainer$$.classList.add('post__comments');
    
    
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.sectionTitle)(header$$, `${post.title}`, 'header__title');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(figure$$, img$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(container$$, figure$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(container$$, postContent$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(container$$, postInfo$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(container$$, postCommentsContainer$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(parent, header$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(parent, container$$);
    let postComments = await getComments(props[0].id);
    console.log(postComments);
    commentCard(postCommentsContainer$$, postComments);
    
    if (_utilities_data__WEBPACK_IMPORTED_MODULE_2__.logState.state === true) {
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.createForm)(postCommentsContainer$$, 'postComment');
        (0,_components_mainBtn__WEBPACK_IMPORTED_MODULE_1__.mainBtn)(container$$, 'submit', () =>{
            console.log('hey')
        }, 'form', 'userForm')
    } else {
        postCommentsContainer$$.style.setProperty('padding-bottom', '0');
    }
    (0,_components_auxBtn__WEBPACK_IMPORTED_MODULE_0__.auxBtn)(parent, `<i class='bx bx-arrow-to-left'></i>`, () => {
        _utilities_router__WEBPACK_IMPORTED_MODULE_4__.router.load('recents');
    })
}


const commentCard = async (parent, comments) => {
    for (let comment in comments) {
        const comentCard$$ = document.createElement('div');
        comentCard$$.classList.add('comment__card');
        comment = comments[comment];
        const commentContent$$ = document.createElement('p');
        commentContent$$.classList.add('comment__content');
        const commentAuthor$$ = document.createElement('p');
        commentAuthor$$.classList.add('comment__author');
        const commentDate$$ = document.createElement('p');
        commentDate$$.classList.add('comment__date');


        commentContent$$.innerText = comment.content;
        commentAuthor$$.innerText = await getUser(comment.user);
        commentDate$$.innerText = comment.created_date;

        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(comentCard$$, commentContent$$)
        ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(comentCard$$, commentAuthor$$)
        ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(comentCard$$, commentDate$$)
        ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.appendTo)(parent, comentCard$$);
    }

}


const getUser = async (id) => {
    let users = await (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.fetchData)(_utilities_data__WEBPACK_IMPORTED_MODULE_2__.urlsToFetch.users);
    for (let user in users) {
        user = users[user];
        if (user.id === id) {
            return user.user_name;
        }
    }
}


const getComments = async (id) => {
    let comments = await (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.fetchData)(_utilities_data__WEBPACK_IMPORTED_MODULE_2__.urlsToFetch.comments);
    let postComents = [];
    // console.log(comments);
    for (let comment in comments) {
        comment = comments[comment];
        if (comment.post === id) {
            postComents.push(comment);
        }
    }
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_3__.sortDates)(postComents);
    return postComents;
}

/***/ }),

/***/ "./src/js/routes/_recents.js":
/*!***********************************!*\
  !*** ./src/js/routes/_recents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "recentPosts": () => /* binding */ recentPosts
/* harmony export */ });
/* harmony import */ var _components_auxBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/_auxBtn */ "./src/js/components/_auxBtn.js");
/* harmony import */ var _components_mainBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_mainBtn */ "./src/js/components/_mainBtn.js");
/* harmony import */ var _components_postCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_postCard */ "./src/js/components/_postCard.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/_search */ "./src/js/components/_search.js");
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");











// Recent posts page
const recentPosts = async (parent, posts) => {
    if (!posts) {
        posts = await (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_5__.fetchData)(_utilities_data__WEBPACK_IMPORTED_MODULE_4__.urlsToFetch.posts);
    }
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_5__.sortDates)(posts);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_5__.removeChildsIf)(parent);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_5__.sectionTitle)(header$$, 'recent posts', 'header__title');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_5__.appendTo)(parent, header$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_5__.appendTo)(parent, container$$);
    (0,_components_postCard__WEBPACK_IMPORTED_MODULE_2__.postCards)(container$$, posts)
    ;(0,_components_search__WEBPACK_IMPORTED_MODULE_3__.search)(header$$, posts);
    (0,_components_mainBtn__WEBPACK_IMPORTED_MODULE_1__.mainBtn)(parent, `<i class='bx bx-arrow-to-top'></i>`, () => {
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_5__.scrollToTop)();
    });
    (0,_components_auxBtn__WEBPACK_IMPORTED_MODULE_0__.auxBtn)(parent, `<i class='bx bx-arrow-to-left'></i>`, () => {
        _utilities_router__WEBPACK_IMPORTED_MODULE_6__.router.load('home');
    })
}

/***/ }),

/***/ "./src/js/routes/_signin.js":
/*!**********************************!*\
  !*** ./src/js/routes/_signin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signInForm": () => /* binding */ signInForm
/* harmony export */ });
/* harmony import */ var _components_mainBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/_mainBtn */ "./src/js/components/_mainBtn.js");
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");








const signInForm = async () => {
    const main$$ = document.querySelector('.app__content');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.removeChildsIf)(main$$);
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.sectionTitle)(container$$, 'sign In', 'form__title');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.createForm)(container$$, 'signIn');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.appendTo)(main$$, container$$);
    let users = await (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.fetchData)(_utilities_data__WEBPACK_IMPORTED_MODULE_1__.urlsToFetch.users);
    (0,_components_mainBtn__WEBPACK_IMPORTED_MODULE_0__.mainBtn)(main$$, `sign In`, () => {
        const form = document.querySelector('#userForm');
        form.reportValidity();
        fnSignIn(users);
    }, 'form', 'userForm')
}

const fnSignIn = (users) => {
    const inputs$$ = document.querySelectorAll('.form__input');
    console.log(users);
    const usrInput$$ = inputs$$[0];
    const pswInput$$ = inputs$$[1];
    pswInput$$.addEventListener('input', () => {
        (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.defaultInput)(pswInput$$);
    })
    for (let user in users) {
        user = users[user];
        if (user.user_name == usrInput$$.value && user.password == pswInput$$.value) {
            console.log('right');
            _utilities_data__WEBPACK_IMPORTED_MODULE_1__.logState.state = true;
            _utilities_data__WEBPACK_IMPORTED_MODULE_1__.logState.user = user.user_name;
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsGood)(usrInput$$);
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsGood)(pswInput$$);
            pswInput$$.setCustomValidity('');
            const thisTimeout = setTimeout(() => {
                _utilities_router__WEBPACK_IMPORTED_MODULE_3__.router.load('home');
            }, 1200);
            return
        } else if (user.user_name == usrInput$$.value && user.password != pswInput$$.value) {
            console.log('incorrect password');
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsWrong)(pswInput$$);
            pswInput$$.setCustomValidity('Incorrect password!');
        }
    }

}

/***/ }),

/***/ "./src/js/routes/_signup.js":
/*!**********************************!*\
  !*** ./src/js/routes/_signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signUpForm": () => /* binding */ signUpForm
/* harmony export */ });
/* harmony import */ var _components_mainBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/_mainBtn */ "./src/js/components/_mainBtn.js");
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");






// Sign up page
const signUpForm = async () => {
    const main$$ = document.querySelector('.app__content');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.removeChildsIf)(main$$);
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.sectionTitle)(container$$, 'sign Up', 'form__title');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.createForm)(container$$, 'signUp');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.appendTo)(main$$, container$$);
    let users = await (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.fetchData)(_utilities_data__WEBPACK_IMPORTED_MODULE_1__.urlsToFetch.users);
    // let posts = await fetchData(urlsToFetch[1].url);

    const form = document.querySelector('#userForm');
    console.log(form);
    let userNames = [];
    console.log(userNames);
    let emails = [];
    for (let user in users) {
        user = users[user];
        userNames.push(user.user_name);
        emails.push(user.email);
    }
    signUpCheckPasswords(form);
    signUpCheckUserName(form, userNames);
    signUpCheckEmail(form, emails);
    (0,_components_mainBtn__WEBPACK_IMPORTED_MODULE_0__.mainBtn)(main$$, `sign Up`, () => {
        form.reportValidity();
        fnSignUp(form, users);
    }, 'form', 'userForm')
}

const signUpCheckPasswords = (form) => {
    const pwd$$ = form.querySelector('[data-function="password"]');
    const checkPwd$$ = form.querySelector('[data-function="check_password"]');
    checkPwd$$.addEventListener('input', () => {
        if (checkPwd$$.value == '') {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.defaultInput)(checkPwd$$);
        } else if (checkPwd$$.value != pwd$$.value || checkPwd$$ < 8) {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsWrong)(checkPwd$$);
        } else if (checkPwd$$.value == pwd$$.value) {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsGood)(checkPwd$$);
        }
    })
    pwd$$.addEventListener('input', () => {
        if (pwd$$.value == '') {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.defaultInput)(pwd$$);
        } else if (pwd$$.value.length < 8) {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsWrong)(pwd$$);
        } else if (pwd$$.value.length >= 8) {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsGood)(pwd$$);
        }
        if (checkPwd$$.value == '') {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.defaultInput)(checkPwd$$);
        } else if (checkPwd$$.value != pwd$$.value || checkPwd$$ < 8) {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsWrong)(checkPwd$$);
        } else if (checkPwd$$.value == pwd$$.value) {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsGood)(checkPwd$$);
        }
    })
    pwd$$.addEventListener('input', () => {
        if (pwd$$.value == checkPwd$$.value) {
            checkPwd$$.setCustomValidity('');
        } else {
            checkPwd$$.setCustomValidity('Passwords must match');
        }
    })
    checkPwd$$.addEventListener('input', () => {
        if (pwd$$.value == checkPwd$$.value) {
            checkPwd$$.setCustomValidity('');
        } else {
            checkPwd$$.setCustomValidity('Passwords must match!');
        }
    })
}


const signUpCheckUserName = (form, userNames) => {
    const usrName$$ = form.querySelector('[data-function="username"]');
    usrName$$.addEventListener('input', () => {
        if (!userNames.includes(usrName$$.value)) {
            usrName$$.setCustomValidity('');
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsGood)(usrName$$);
        } else {
            usrName$$.setCustomValidity('User already exists!');
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsWrong)(usrName$$);
        }
        if (usrName$$.value == '') {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.defaultInput)(usrName$$)
        }
    })
}

const signUpCheckEmail = (form, emails) => {
    const email$$ = form.querySelector('[data-function="email"]');
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    email$$.addEventListener('input', () => {
        if (re.test(email$$.value)) {
            if (!emails.includes(email$$.value)) {
                email$$.setCustomValidity('')
                ;(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsGood)(email$$);
            } else {
                email$$.setCustomValidity('Email already exist!');
                (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsWrong)(email$$);
            }
        } else {
            email$$.setCustomValidity('Email not valid!');
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.inputIsWrong)(email$$);
        }
        if (email$$.value == '') {
            (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.defaultInput)(email$$);
        }
    })
}

const fnSignUp = async (form, users) => {
    // const main$$ = document.querySelector('.app__content');
    const usrName$$ = form.querySelector('[data-function="username"]');
    const firstName$$ = form.querySelector('[data-function="first_name"]');
    const lastName$$ = form.querySelector('[data-function="last_name"]');
    const pwd$$ = form.querySelector('[data-function="password"]');
    // const checkPwd$$ = form.querySelector('[data-function="check_password"]');
    const email$$ = form.querySelector('[data-function="email"]');
    const newUser = {
        "id": 0,
        "user_name": `${usrName$$.value}`,
        "password": `${pwd$$.value}`,
        "first_name": `${firstName$$.value}`,
        "last_name": `${lastName$$.value}`,
        "email": `${email$$.value}`,
        "role": "blogger"
    }
    if (form.checkValidity()) {
        console.log('form is valid');
        const alert = await signUpMessage();
        postToApi(newUser);
    } else {
        console.log('form is invalid');
    }
    console.log(newUser);
}

const signUpMessage = async () => {
    alert('Welcome to myBlog App.\nDon\'t forget to sign In :)')

}

const postToApi = (element) => {
    fetch(_utilities_data__WEBPACK_IMPORTED_MODULE_1__.urlsToFetch.users, {
            method: "POST",
            body: JSON.stringify(element),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}


/***/ }),

/***/ "./src/js/routes/_tagPost.js":
/*!***********************************!*\
  !*** ./src/js/routes/_tagPost.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagPosts": () => /* binding */ tagPosts
/* harmony export */ });
/* harmony import */ var _components_mainBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/_mainBtn */ "./src/js/components/_mainBtn.js");
/* harmony import */ var _components_postCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_postCard */ "./src/js/components/_postCard.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_search */ "./src/js/components/_search.js");
/* harmony import */ var _utilities_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _utilities_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/_router */ "./src/js/utilities/_router.js");










// Post with tag page
const tagPosts = async (parent, posts, tag) => {
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_4__.removeChildsIf)(parent);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_4__.sortDates)(posts);
    const header$$ = document.createElement('header');
    header$$.classList.add('content__header');
    const container$$ = document.createElement('article');
    container$$.classList.add('content__container');
    let title = `${tag} posts`;
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_4__.sectionTitle)(header$$, title, 'header__title');
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_4__.appendTo)(parent, header$$);
    (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_4__.appendTo)(parent, container$$);
    (0,_components_postCard__WEBPACK_IMPORTED_MODULE_1__.postCards)(container$$, posts)
    let mainPost = await (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_4__.fetchData)(_utilities_data__WEBPACK_IMPORTED_MODULE_3__.urlsToFetch.posts);
    (0,_components_search__WEBPACK_IMPORTED_MODULE_2__.search)(header$$, mainPost);
    (0,_components_mainBtn__WEBPACK_IMPORTED_MODULE_0__.mainBtn)(parent, `<i class='bx bx-arrow-to-left'></i>`, () => {
        _utilities_router__WEBPACK_IMPORTED_MODULE_5__.router.load('home');
    })
}



/***/ }),

/***/ "./src/js/utilities/_data.js":
/*!***********************************!*\
  !*** ./src/js/utilities/_data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logState": () => /* binding */ logState,
/* harmony export */   "inputElements": () => /* binding */ inputElements,
/* harmony export */   "urlsToFetch": () => /* binding */ urlsToFetch,
/* harmony export */   "links": () => /* binding */ links
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions */ "./src/js/utilities/_functions.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_router */ "./src/js/utilities/_router.js");



// Log state
let logState = {
    "state": false,
    "user": ""
};


// API links


const urlsToFetch = {
    "users": "http://localhost:3030/users",
    "posts": "http://localhost:3030/posts",
    "comments": "http://localhost:3030/comments"
}

// Array of generates inputs
const inputElements = {
    "search": {
        "search": {
            "type": "text",
            "placeholder": "search",
            "name": "search"
        }
    },
    "signIn": {
        "username": {
            "type": "text",
            "placeholder": "username",
            "name": "username",
            "required": ""
        },
        "password": {
            "type": "password",
            "placeholder": "password",
            "name": "password",
            "required": ""
        },
    },
    "signUp": {
        "first_name": {
            "type": "text",
            "placeholder": "first name",
            "name": "first_name",
            "data-function": "first_name",
            "required": ""
        },
        "last_name": {
            "type": "text",
            "placeholder": "last name",
            "name": "last_name",
            "data-function": "last_name",
            "required": ""
        },
        "username": {
            "type": "text",
            "placeholder": "username",
            "name": "username",
            "data-function": "username",
            "required": ""
        },
        "password": {
            "type": "password",
            "placeholder": "password",
            "name": "password",
            "data-function": "password",
            "minlength": 8,
            "required": ""
        },
        "check_password": {
            "type": "password",
            "placeholder": "confirm password",
            "name": "check_password",
            "data-function": "check_password",
            // "minlength": 8,
            "required": ""
        },
        "email": {
            "type": "email",
            "placeholder": "email",
            "name": "email",
            "data-function": "email",
            "required": ""
        },
    },
    "postComment": {
        "comment": {
            "type": "text",
            "placeholder": "your comment",
            "name": "comment",
            "data-function": "comment",
            "required": ""
        }
    }

}



// Array of generated links
let links = {
    "logged": [{
            "name": "my account",
            "fn": ""
        },
        {
            "name": "sign Out",
            "fn": () => {
                ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.fnSignOut)()
            }
        }
    ],
    "not_logged": [{
            "name": "sign In",
            "fn": () => {
                _router__WEBPACK_IMPORTED_MODULE_1__.router.load('signin');
            }
        },
        {
            "name": "sign Up",
            "fn": () => {
                _router__WEBPACK_IMPORTED_MODULE_1__.router.load('signup');
            }
        }
    ]
}




/***/ }),

/***/ "./src/js/utilities/_functions.js":
/*!****************************************!*\
  !*** ./src/js/utilities/_functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => /* binding */ fetchData,
/* harmony export */   "toggleClass": () => /* binding */ toggleClass,
/* harmony export */   "removeClass": () => /* binding */ removeClass,
/* harmony export */   "inputIsWrong": () => /* binding */ inputIsWrong,
/* harmony export */   "inputIsGood": () => /* binding */ inputIsGood,
/* harmony export */   "defaultInput": () => /* binding */ defaultInput,
/* harmony export */   "resizeContentWrapper": () => /* binding */ resizeContentWrapper,
/* harmony export */   "appendTo": () => /* binding */ appendTo,
/* harmony export */   "removeElement": () => /* binding */ removeElement,
/* harmony export */   "removeAllChildNodes": () => /* binding */ removeAllChildNodes,
/* harmony export */   "removeChildsIf": () => /* binding */ removeChildsIf,
/* harmony export */   "sortDates": () => /* binding */ sortDates,
/* harmony export */   "scrollToTop": () => /* binding */ scrollToTop,
/* harmony export */   "sectionTitle": () => /* binding */ sectionTitle,
/* harmony export */   "createForm": () => /* binding */ createForm,
/* harmony export */   "createInput": () => /* binding */ createInput,
/* harmony export */   "fnSignOut": () => /* binding */ fnSignOut
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_data */ "./src/js/utilities/_data.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_router */ "./src/js/utilities/_router.js");



// UTILITY FUNCTIONS

// Fetch url
const fetchData = async (url) => {
    let result = await fetch(url)
    result = await result.json();
    return result;
}



// STYLE FUNCTIONS

// Toggle classes on element
const toggleClass = (element, elClass) => {
    element.classList.toggle(`${elClass}`);
}

// Removes class if exists in element
const removeClass = (element, elClass) => {
    if (element.classList.contains(`${elClass}`)) {
        element.classList.remove(`${elClass}`);
    }
}

// Wrong/invalid inputs style
const inputIsWrong = (input) => {
    input.classList.add('input--wrong');
    input.classList.remove('input--good');
    input.classList.remove('input--base');
}

// Good/valid inputs style
const inputIsGood = (input) => {
    input.classList.remove('input--wrong');
    input.classList.add('input--good');
    input.classList.remove('input--base');
}

// Default inputs style
const defaultInput = (input) => {
    input.classList.remove('input--wrong');
    input.classList.remove('input--good');
    input.classList.add('input--base');
}

const resizeContent = (content) => {
    content.style.setProperty(`min-height`, `calc(${window.innerHeight}px - 100px)`);
}

const resizeContentWrapper = (content) => {
    resizeContent(content)
    window.addEventListener('resize', () => {
        resizeContent(content);

    });
}


// LAYOUT FUNCTIONS

// Append element2 to element1
const appendTo = (el1, el2) => {
    el1.appendChild(el2);
}

// Remove element
const removeElement = (element) => {
    element.remove();
}

// Removes all children nodes from parent node
const removeAllChildNodes = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Removes all childs nodes if parent node exists
const removeChildsIf = (element) => {
    if (element) {
        removeAllChildNodes(element);
    }
}

// Sorts by date -- newer to older
const sortDates = (arr) => {
    return arr.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
}

// Scrolls to top
const scrollToTop = () => {
    const rootElement = document.documentElement;
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// Generates a section title and assigns class prop
const sectionTitle = (parentNode, title) => {
    const h2$$ = document.createElement('h2');
    h2$$.classList.add('header__title');
    h2$$.innerHTML = `${title}`;
    appendTo(parentNode, h2$$);
}

// Creates form -> signIn and signUp
const createForm = (parentNode, props) => {
    for (let form in _data__WEBPACK_IMPORTED_MODULE_0__.inputElements) {
        if (form === `${props}`) {
            if (props === 'search') {} else {
                form = _data__WEBPACK_IMPORTED_MODULE_0__.inputElements[form]
                const createForm$$ = document.createElement('form');
                createForm$$.classList.add('form__container');
                createForm$$.setAttribute('id', 'userForm');
                if (props === 'signIn') {
                    const icon$$ = document.createElement('span');
                    icon$$.innerHTML = `<i class='bx bxs-user'></i>`;
                    icon$$.classList.add('form__icon');
                    appendTo(createForm$$, icon$$);
                }
                if (props === 'signUp') {
                    const icon$$ = document.createElement('span');
                    icon$$.innerHTML = `<i class='bx bxs-user-plus' ></i>`;
                    icon$$.classList.add('form__icon');
                    appendTo(createForm$$, icon$$);
                }
                const elClass = 'form__input';
                const spClass = 'input--base';
                appendTo(parentNode, createForm$$);
                createInput(createForm$$, form, elClass, spClass);
            }
        }
    }
}

// Creates inputs from array
const createInput = (parent, arr, elClass, spClass) => {
    for (let input in arr) {
        input = arr[input];
        const createInput$$ = document.createElement('input');
        createInput$$.classList.add(`${elClass}`);
        if (spClass) {
            createInput$$.classList.add(`${spClass}`);
        }
        for (const attribute in input) {
            const attributeValue = input[attribute];
            createInput$$.setAttribute(`${attribute}`, `${attributeValue}`)
        }
        appendTo(parent, createInput$$);
    }
}

// Sign Out
const fnSignOut = async () => {
    const main$$ = document.querySelector('.app__content');
    logState.state = false;
    logState.user = '';
    window.confirm('You have been succesfully logged out!')
    _router__WEBPACK_IMPORTED_MODULE_1__.router.load('home');
}

/***/ }),

/***/ "./src/js/utilities/_router.js":
/*!*************************************!*\
  !*** ./src/js/utilities/_router.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => /* binding */ Router,
/* harmony export */   "router": () => /* binding */ router
/* harmony export */ });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_routes */ "./src/js/utilities/_routes.js");


class Router {
    constructor(paths, props) {
        this.paths = paths;
        this.props = props;
        this.initRouter();
    }
    initRouter() {
        const {
            location: {
                pathname = "/"
            }
        } = window;
        const URL = (pathname === "/" || pathname === '/index.html') ? "landing" : pathname.replace("/", "");
        if (URL === 'landing') {
            setTimeout(() => {
                this.load(URL);
            }, 200)
        
        } else {
                this.load(URL, props);
        }
        // setTimeout(() => {
        //     this.load(URL);
        // }, 200)
        // this.load(URL)
    }
    load(page, props) {
        const {
            paths
        } = this;
        const {
            path,
            template
        } = paths[page] || paths.error;
        const content$$ = document.querySelector('.app__content');
        template(content$$, props);
        window.history.replaceState(null, null, path);
    }
}

const router = new Router(_routes__WEBPACK_IMPORTED_MODULE_0__.routes);
// router.load('home'); //EXAMPLE

/***/ }),

/***/ "./src/js/utilities/_routes.js":
/*!*************************************!*\
  !*** ./src/js/utilities/_routes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => /* binding */ routes
/* harmony export */ });
/* harmony import */ var _routes_landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes/_landing */ "./src/js/routes/_landing.js");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/_home */ "./src/js/routes/_home.js");
/* harmony import */ var _routes_recents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/_recents */ "./src/js/routes/_recents.js");
/* harmony import */ var _routes_signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/_signin */ "./src/js/routes/_signin.js");
/* harmony import */ var _routes_signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/_signup */ "./src/js/routes/_signup.js");
/* harmony import */ var _routes_tagPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes/_tagPost */ "./src/js/routes/_tagPost.js");
/* harmony import */ var _routes_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes/_post */ "./src/js/routes/_post.js");











const routes = {
    landing: {
        path: "/",
        template: _routes_landing__WEBPACK_IMPORTED_MODULE_0__.landingPage,
    },
    home: {
        path: "/",
        template: _routes_home__WEBPACK_IMPORTED_MODULE_1__.homePage,
    },
    recents: {
        path: "/",
        template: _routes_recents__WEBPACK_IMPORTED_MODULE_2__.recentPosts,
    },
    tagPosts: {
        path: "/",
        template: _routes_tagPost__WEBPACK_IMPORTED_MODULE_5__.tagPosts,
    },
    signin: {
        path: "/",
        template: _routes_signin__WEBPACK_IMPORTED_MODULE_3__.signInForm,
    },
    signup: {
        path: "/",
        template: _routes_signup__WEBPACK_IMPORTED_MODULE_4__.signUpForm,
    },
    post: {
        path: "/",
        template: _routes_post__WEBPACK_IMPORTED_MODULE_6__.postPage,
    },
    edit: {
        path: "/",
        // template: homePage,
    },
    account: {
        path: "/",
        // template: homePage,
    },
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map