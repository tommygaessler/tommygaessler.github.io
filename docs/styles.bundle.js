webpackJsonp([2],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Youtube Embed */\n\n.video-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin-top: 0;\n}\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n  width: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n/* Twitter Embed */\n\n.twitter-tweet {\n  display: block;\n  margin: auto;\n}\n\n/* Project Share Buttons */\n\n.linkedin {\n  border: none;\n  background: #0074b1;\n  color: #fff;\n  border-radius: 4px;\n  font-weight: 500;\n  box-sizing: border-box;\n  padding: 0px 8px 0px 8px;\n  vertical-align: top;\n  zoom: 1;\n  margin-left: 5px;\n}\n\n.linkedin:active, .linkedin:focus, .linkedin:hover {\n\n}\n\n.x-twitter {\n  border: none;\n  background-color: #000000;\n  color: #fff;\n  border-radius: 4px;\n  font-weight: 500;\n  box-sizing: border-box;\n  padding: 0px 8px 0px 8px;\n  vertical-align: top;\n  zoom: 1;\n}\n\n.x-twitter:active, .x-twitter:focus, .x-twitter:hover {\n  background-color: #333333;\n}\n\n.facebook {\n  border: none;\n  background: #4267b2;\n  color: #fff;\n  border-radius: 4px;\n  font-weight: 500;\n  box-sizing: border-box;\n  padding: 0px 8px 0px 8px;\n  vertical-align: top;\n  zoom: 1;\n  margin-left: 5px;\n}\n\n.facebook:hover {\n  background: #365899;\n}\n\n.facebook:active {\n  background: #577fbc;\n}\n\n.share-buttons-desktop {\n  position: absolute;\n  top: 19px;\n  right: 19px;\n}\n\n.share-buttons-mobile {\n  display: none;\n}\n\n.x-twitter:focus {\n  outline: none;\n}\n\n.facebook:focus {\n  outline: none;\n}\n\n/* Global Styles */\n\nh1 {\n  font-size: 34px;\n  margin-bottom: 40px;\n}\n\nh2 {\n  font-size: 24px;\n}\n\na {\n  cursor: pointer;\n}\n\na:hover {\n  text-decoration: none;\n}\n\na:visted {\n  color: #2196f3;\n  text-decoration: none;\n}\n\na:focus {\n  color: #2196f3;\n  text-decoration: none;\n  outline: none;\n}\n\n.navbar {\n  display: none;\n}\n\n.navbar-brand img {\n  height: 23px;\n  width: auto;\n  display: inline;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.navbar-toggle {\n  margin-right: 5px;\n  border: none;\n}\n\n/* Navbar Animations */\n\n.navbar-toggle .icon-bar:nth-of-type(2) {\n\ttop: 1px;\n}\n\n.navbar-toggle .icon-bar:nth-of-type(3) {\n  top: 2px;\n}\n\n.navbar-toggle .icon-bar {\n\tposition: relative;\n\ttransition: all 300ms ease-in-out;\n}\n\n.navbar-toggle.active .icon-bar:nth-of-type(1) {\n\ttop: 6px;\n\t-webkit-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n}\n\n.navbar-toggle.active .icon-bar:nth-of-type(2) {\n\tbackground-color: transparent;\n}\n\n.navbar-toggle.active .icon-bar:nth-of-type(3) {\n\ttop: -6px;\n\t-webkit-transform: rotate(-45deg);\n\t        transform: rotate(-45deg);\n}\n\n\n/*-------- side --------*/\n\n.profile-pic {\n  width: 70%;\n  border-radius: 50%;\n  border: 1px solid white;\n  z-index: 1;\n}\n\n.background-image {\n  width: 30%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-position: center;\n  background-size: cover;\n  z-index: -1;\n  opacity: 0.6;\n}\n\n.side {\n  width: 30%;\n  height: 100%;\n  padding: 6%;\n  padding-top: 30px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  color: white;\n  text-align: center;\n  /*overflow-y: scroll;*/\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 2;\n  text-shadow: 0px 0px 5px #333;\n}\n\n.side h3 {\n  font-size: 25px;\n}\n\n.side h3 a {\n  color: white;\n}\n\n.page-links a {\n  display: block;\n  color: white;\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n\n.social-links {\n  text-align: center;\n}\n\n.social-links a {\n  color: white;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-size: 25px !important;\n}\n\n.social-links a:link {\n  text-decoration: none;\n}\n\n.social-links a:visited {\n  text-decoration: none;\n}\n\n.social-links a:hover {\n  text-decoration: none;\n}\n\n.social-links a:active {\n  text-decoration: none;\n}\n\n/*-------- main --------*/\n\n.main {\n  padding: 20px 150px;\n  margin-left: 30%;\n  width: 70%;\n  float: left;\n  /*margin-bottom: 40px;*/\n}\n\np {\n  font-size: 17px;\n  line-height: 25px;\n}\n\n/*-------- media queries --------*/\n\n@media (max-width: 983px) {\n  .main {\n    padding: 20px 50px;\n  }\n}\n\n@media (max-width: 846px) {\n\n  .no-mobile {\n    display: none;\n  }\n\n  .share-buttons-desktop {\n    display: none;\n  }\n\n  .share-buttons-mobile {\n    display: block;\n  }\n\n  p {\n    font-size: 16px;\n  }\n\n  .navbar {\n    display: block;\n    margin-bottom: 0;\n    width: 100%;\n  }\n\n  h3 {\n    margin-top: 10px;\n  }\n\n  .page-links {\n    display: none;\n  }\n\n  hr {\n    display: none;\n  }\n\n  .profile-pic {\n    margin-top: 20px;\n    width: 80px;\n  }\n\n  .background-image {\n    width: 100%;\n    height: 200px;\n    position: absolute;\n    top: 0;\n    background-position: center;\n  }\n\n  .side {\n    width: 100%;\n    height: 200px;\n    position: relative;\n    padding: 0;\n    top: 0;\n  }\n\n  .main {\n    position: relative;\n    margin: 0;\n    float: none;\n    width: 100%;\n    padding: 0;\n    margin-bottom: 60px;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map