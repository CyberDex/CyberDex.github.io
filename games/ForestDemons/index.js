/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/configs.js":
/*!************************!*\
  !*** ./src/configs.js ***!
  \************************/
/*! exports provided: DPR, gameConfig, tilesConfig, tileConfig, Debug, CHECK_DIRECTION, MIN_MATCHES, DEMON_FRAMES, EXPLOSION_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DPR", function() { return DPR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameConfig", function() { return gameConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tilesConfig", function() { return tilesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileConfig", function() { return tileConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DIRECTION", function() { return CHECK_DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_MATCHES", function() { return MIN_MATCHES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMON_FRAMES", function() { return DEMON_FRAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPLOSION_KEYS", function() { return EXPLOSION_KEYS; });
var DPR = window.devicePixelRatio;
var gameConfig = {
  width: window.innerWidth < 1440 ? window.innerWidth : 1440,
  height: window.innerHeight < 720 ? window.innerHeight : 720,
  gameDiv: 'gameDiv',
  backgroundColor: '000000'
};
gameConfig.zoom = gameConfig.height / 720;
var tilesConfig = {
  rowsNumber: 7,
  colsNumber: 10,
  offsetX: 0 * gameConfig.zoom,
  offsetY: 100 * gameConfig.zoom
};
var tileConfig = {
  tileWidth: 64 * gameConfig.zoom,
  tileHeight: 72 * gameConfig.zoom,
  tileSpace: 0
};
tilesConfig.offsetX = (gameConfig.width - tilesConfig.colsNumber * tileConfig.tileWidth) / 2;
var CHECK_DIRECTION = {
  NONE: 0,
  UP: 1,
  RIGHT: 2,
  DOWN: 4,
  LEFT: 8,
  HORIZONTAL: 10,
  VERTICAL: 5,
  ALL: 15
};
var MIN_MATCHES = 3;
var DEMON_FRAMES = ['Orange', 'Yellow', 'Purple', 'Green', 'LightBlue', 'Blue'];
var EXPLOSION_KEYS = ['explosionpink', 'explosionred'];
var Debug = true;


/***/ }),

/***/ "./src/demons.js":
/*!***********************!*\
  !*** ./src/demons.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demons; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ "./src/configs.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _explosions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explosions */ "./src/explosions.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Demons =
/*#__PURE__*/
function () {
  function Demons(scene) {
    _classCallCheck(this, Demons);

    _defineProperty(this, "scene", null);

    _defineProperty(this, "_demonsArr", null);

    this.scene = scene;
    this._demonsArr = [];
    this.scene.events.on('createDemon', this._setDemon, this);
  }

  _createClass(Demons, [{
    key: "initData",
    value: function initData(allDemons) {
      var _demonsArr = this._demonsArr;

      for (var i = 0; i < allDemons.length; i++) {
        var demon = allDemons[i];
        var row = demon.row,
            col = demon.col,
            x = demon.x,
            y = demon.y;

        if (!_demonsArr[row]) {
          _demonsArr[row] = [];
        }

        _demonsArr[row][col] = demon;
      }
    }
  }, {
    key: "_setDemon",
    value: function _setDemon(demon, row, col) {
      var _demonsArr = this._demonsArr;

      if (!_demonsArr[row]) {
        _demonsArr[row] = [];
      }

      _demonsArr[row][col] = demon;
    }
  }, {
    key: "getDemon",
    value: function getDemon(row, col) {
      return this._demonsArr[row][col];
    }
  }, {
    key: "trySwap",
    value: function trySwap(fromDemon, toDemon) {
      this._swap(fromDemon, toDemon);

      return this._animateSwap(fromDemon, toDemon);
    }
  }, {
    key: "_swap",
    value: function _swap(fromDemon, toDemon) {
      var fromRow = fromDemon.row,
          fromCol = fromDemon.col;
      var toRow = toDemon.row,
          toCol = toDemon.col;
      var _demonsArr = this._demonsArr; // swap them in the array

      _demonsArr[fromRow][fromCol] = toDemon;
      _demonsArr[toRow][toCol] = fromDemon; // swap their respective properties

      _util__WEBPACK_IMPORTED_MODULE_2__["default"].swapRowCol(fromDemon, toDemon);
    }
  }, {
    key: "undoSwap",
    value: function undoSwap(fromDemon, toDemon) {
      this._swap(toDemon, fromDemon);

      this.scene.invalidSwapSound.play();
      return this._animateSwap(toDemon, fromDemon);
    }
  }, {
    key: "_animateSwap",
    value: function _animateSwap(demon1, demon2) {
      var tween1 = this.scene.tweens.add({
        targets: demon2,
        x: demon1.x,
        y: demon1.y,
        duration: 200,
        ease: 'Power1'
      });
      var tween2 = this.scene.tweens.add({
        targets: demon1,
        x: demon2.x,
        y: demon2.y,
        duration: 200,
        ease: 'Power1'
      });
      return Promise.all([_util__WEBPACK_IMPORTED_MODULE_2__["default"].pifyTween(tween1), _util__WEBPACK_IMPORTED_MODULE_2__["default"].pifyTween(tween2)]);
    }
  }, {
    key: "getMatches",
    value: function getMatches(demon, direct) {
      var horizontalMatches = this._getMatchHorizontally(demon, direct);

      var verticalMatches = this._getMatchVertically(demon, direct);

      var matches = _util__WEBPACK_IMPORTED_MODULE_2__["default"].unionSet(horizontalMatches, verticalMatches);
      return matches;
    }
  }, {
    key: "_getMatchHorizontally",
    value: function _getMatchHorizontally(demon, direct) {
      var matchesSet = new Set();
      var row = demon.row,
          col = demon.col,
          frameKey = demon.frameKey;
      var isBitSet = _util__WEBPACK_IMPORTED_MODULE_2__["default"].isBitSet;
      var horizontalMatches;

      if (isBitSet(direct, _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].HORIZONTAL)) {
        horizontalMatches = this.getHorizontalMatches(row, col, -1, 1, frameKey);
      } else if (isBitSet(direct, _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].RIGHT)) {
        horizontalMatches = this.getHorizontalMatches(row, col, 0, 1, frameKey);
      } else if (isBitSet(direct, _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].LEFT)) {
        horizontalMatches = this.getHorizontalMatches(row, col, -1, 0, frameKey);
      }

      _util__WEBPACK_IMPORTED_MODULE_2__["default"].addArrToSet(matchesSet, horizontalMatches);

      if (matchesSet.size < _configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1) {
        matchesSet.clear();
      } else {
        matchesSet.add(demon);
      }

      return matchesSet;
    }
  }, {
    key: "_getMatchVertically",
    value: function _getMatchVertically(demon, direct) {
      var matchesSet = new Set();
      var row = demon.row,
          col = demon.col,
          frameKey = demon.frameKey;
      var isBitSet = _util__WEBPACK_IMPORTED_MODULE_2__["default"].isBitSet;
      var verticalMatches;

      if (isBitSet(direct, _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].VERTICAL)) {
        verticalMatches = this.getVerticalMatches(row, col, -1, 1, frameKey);
      } else if (isBitSet(direct, _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].UP)) {
        verticalMatches = this.getVerticalMatches(row, col, -1, 0, frameKey);
      } else if (isBitSet(direct, _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].DOWN)) {
        verticalMatches = this.getVerticalMatches(row, col, 0, 1, frameKey);
      }

      _util__WEBPACK_IMPORTED_MODULE_2__["default"].addArrToSet(matchesSet, verticalMatches);

      if (matchesSet.size < _configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1) {
        matchesSet.clear();
      } else {
        matchesSet.add(demon);
      }

      return matchesSet;
    }
  }, {
    key: "getHorizontalMatches",
    value: function getHorizontalMatches(row, col, startDeltaCol, endDeltaCol, frame) {
      var colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber;
      var _demonsArr = this._demonsArr;
      var startCol = col + (_configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1) * startDeltaCol;
      var endCol = col + (_configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1) * endDeltaCol;
      var matchesList = [];
      if (startCol < 0) startCol = 0;
      if (endCol >= colsNumber) endCol = colsNumber - 1;

      for (var c = col - 1; c >= startCol; c--) {
        var checkDemon = _demonsArr[row][c];

        if (checkDemon.frameKey !== frame) {
          break;
        }

        matchesList.push(checkDemon);
      }

      for (var _c = col + 1; _c <= endCol; _c++) {
        var _checkDemon = _demonsArr[row][_c];

        if (_checkDemon.frameKey !== frame) {
          break;
        }

        matchesList.push(_checkDemon);
      }

      if (matchesList.length < _configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1) {
        return;
      }

      return matchesList;
    }
  }, {
    key: "getVerticalMatches",
    value: function getVerticalMatches(row, col, startDeltaRow, endDeltaRow, frame) {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber;
      var _demonsArr = this._demonsArr;
      var startRow = row + (_configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1) * startDeltaRow;
      var endRow = row + (_configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1) * endDeltaRow;
      var matchesList = [];
      if (startRow < 0) startRow = 0;
      if (endRow >= rowsNumber) endRow = rowsNumber - 1;

      for (var r = row - 1; r >= startRow; r--) {
        var checkDemon = _demonsArr[r][col];

        if (checkDemon.frameKey !== frame) {
          break;
        }

        matchesList.push(checkDemon);
      }

      for (var _r = row + 1; _r <= endRow; _r++) {
        var _checkDemon2 = _demonsArr[_r][col];

        if (_checkDemon2.frameKey !== frame) {
          break;
        }

        matchesList.push(_checkDemon2);
      }

      if (matchesList.length < _configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1) {
        return;
      }

      return matchesList;
    }
  }, {
    key: "checkPotentialMatches",
    value: function checkPotentialMatches() {
      var _demonArr = this._demonsArr;
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber,
          colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber;
      var potentialMatches = [];

      for (var row = 0; row < rowsNumber; row++) {
        for (var col = 0; col < colsNumber; col++) {
          var matchThree = void 0;
          /*  example  *\
           * *  *  * * *
           * &  *  * & *
           & * .&. & * & 
           * &  *  * & *
           * *  *  * * *
          \*  example  */

          matchThree = _util__WEBPACK_IMPORTED_MODULE_2__["default"].checkHorizontal1(row, col, _demonArr);
          if (matchThree !== null) potentialMatches.push(matchThree);
          matchThree = _util__WEBPACK_IMPORTED_MODULE_2__["default"].checkHorizontal2(row, col, _demonArr);
          if (matchThree !== null) potentialMatches.push(matchThree);
          matchThree = _util__WEBPACK_IMPORTED_MODULE_2__["default"].checkHorizontal2(row, col, _demonArr);
          if (matchThree !== null) potentialMatches.push(matchThree);
          /* example *\
           * * & * * *
           * & * & * *
           * * & * * *
           * * & * * * 
           * & * & * *
           * * & * * *
          \* example */

          matchThree = _util__WEBPACK_IMPORTED_MODULE_2__["default"].checkVertical1(row, col, _demonArr);
          if (matchThree !== null) potentialMatches.push(matchThree);
          matchThree = _util__WEBPACK_IMPORTED_MODULE_2__["default"].checkVertical1(row, col, _demonArr);
          if (matchThree !== null) potentialMatches.push(matchThree);
          matchThree = _util__WEBPACK_IMPORTED_MODULE_2__["default"].checkVertical1(row, col, _demonArr);
          if (matchThree !== null) potentialMatches.push(matchThree);

          if (potentialMatches.length >= 3) {
            return phaser__WEBPACK_IMPORTED_MODULE_0__["Utils"].Array.GetRandom(potentialMatches);
          }

          if (row >= rowsNumber / 2 && potentialMatches.length > 0) {
            return phaser__WEBPACK_IMPORTED_MODULE_0__["Utils"].Array.GetRandom(potentialMatches);
          }
        }
      }

      return null;
    }
  }, {
    key: "remove",
    value: function remove(demon, callback) {
      var row = demon.row,
          col = demon.col;
      this._demonsArr[row][col] = null;
      _explosions__WEBPACK_IMPORTED_MODULE_3__["default"].explosionsArr[row][col].playAnim(callback);
    }
  }, {
    key: "quickCollapse",
    value: function quickCollapse(cols) {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber;
      var _demonArr = this._demonsArr;
      var collapseInfo = [];

      for (var col in cols) {
        var tmp = [];

        for (var row = 0; row < rowsNumber; row++) {
          tmp.push(_demonArr[row][col]);
        }

        this._quickPartition(tmp, _demonArr, col, collapseInfo);
      }

      return collapseInfo;
    }
  }, {
    key: "_quickPartition",
    value: function _quickPartition(arr, demonArr, col, collapseInfo) {
      var r = arr.length - 1;
      var q = r;

      for (var u = r - 1; u >= 0; u--) {
        if (arr[u] != null && arr[q] == null) {
          demonArr[q][col] = demonArr[u][col];
          demonArr[q][col].row = q;
          demonArr[u][col] = null;
          collapseInfo.push(demonArr[q][col]);
          arr[q] = arr[u];
          arr[u] = null;
          q--;
        }

        if (arr[u] == null && arr[q] != null) {
          q = u;
        }
      }
    }
  }, {
    key: "getEmptyRowsOnCol",
    value: function getEmptyRowsOnCol(col) {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber;
      var _demonArr = this._demonsArr;
      var emptyRows = 0;

      for (var row = 0; row < rowsNumber; row++) {
        if (_demonArr[row][col] !== null) {
          break;
        }

        emptyRows++;
      }

      return emptyRows;
    }
  }]);

  return Demons;
}();



/***/ }),

/***/ "./src/explosions.js":
/*!***************************!*\
  !*** ./src/explosions.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Explosions = {
  explosionsArr: [],
  initData: function initData(allExplosions) {
    var explosionsArr = this.explosionsArr;

    for (var i = 0; i < allExplosions.length; i++) {
      var explosionSprite = allExplosions[i];
      var row = explosionSprite.row,
          col = explosionSprite.col;

      if (!explosionsArr[row]) {
        explosionsArr[row] = explosionSprite;
      }

      explosionsArr[row][col] = explosionSprite;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Explosions);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scenes_boot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/boot */ "./src/scenes/boot.js");
/* harmony import */ var _scenes_preload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/preload */ "./src/scenes/preload.js");
/* harmony import */ var _scenes_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game */ "./src/scenes/game.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configs */ "./src/configs.js");





var config = {
  type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.CANVAS,
  parent: _configs__WEBPACK_IMPORTED_MODULE_4__["gameConfig"].gameDiv,
  width: _configs__WEBPACK_IMPORTED_MODULE_4__["gameConfig"].width,
  height: _configs__WEBPACK_IMPORTED_MODULE_4__["gameConfig"].height,
  scene: [_scenes_boot__WEBPACK_IMPORTED_MODULE_1__["default"], _scenes_preload__WEBPACK_IMPORTED_MODULE_2__["default"], _scenes_game__WEBPACK_IMPORTED_MODULE_3__["default"]],
  zoom: _configs__WEBPACK_IMPORTED_MODULE_4__["gameConfig"].zoom,
  autoResize: true,
  resolution: _configs__WEBPACK_IMPORTED_MODULE_4__["DPR"] || 1,
  backgroundColor: _configs__WEBPACK_IMPORTED_MODULE_4__["gameConfig"].backgroundColor
};
new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game(config);

/***/ }),

/***/ "./src/scenes/boot.js":
/*!****************************!*\
  !*** ./src/scenes/boot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BootScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BootScene =
/*#__PURE__*/
function (_Scene) {
  _inherits(BootScene, _Scene);

  function BootScene() {
    _classCallCheck(this, BootScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(BootScene).call(this, {
      key: 'Boot'
    }));
  }

  _createClass(BootScene, [{
    key: "preload",
    value: function preload() {
      this.load.setPath('./assets/images');
      this.load.image('logo', "logo.png");
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start('Preload');
    }
  }]);

  return BootScene;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"]);



/***/ }),

/***/ "./src/scenes/game.js":
/*!****************************!*\
  !*** ./src/scenes/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ "./src/configs.js");
/* harmony import */ var _sprites_demon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprites/demon */ "./src/sprites/demon.js");
/* harmony import */ var _demons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demons */ "./src/demons.js");
/* harmony import */ var _sprites_explosion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprites/explosion */ "./src/sprites/explosion.js");
/* harmony import */ var _explosions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../explosions */ "./src/explosions.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var ts_pify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-pify */ "./node_modules/ts-pify/dist/src/index.js");
/* harmony import */ var ts_pify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_pify__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var GameScene =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameScene, _Scene);

  function GameScene() {
    var _this;

    _classCallCheck(this, GameScene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameScene).call(this, {
      key: 'Game'
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_width", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_height", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_demonContainer", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_demons", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_swipeFromRow", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_swipeFromCol", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectionDemon", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_newDemonPositions", null);

    return _this;
  }

  _createClass(GameScene, [{
    key: "init",
    value: function init() {
      var config = this.sys.game.config;
      this._width = config.width;
      this._height = config.height;
      this._zoom = config.zoom;
      this._demons = new _demons__WEBPACK_IMPORTED_MODULE_3__["default"](this);
      this._newDemonPositions = new Map();
      this.swapSound = this.sound.add('swapSound');
      this.matchSound = this.sound.add('matchSound');
      this.invalidSwapSound = this.sound.add('invalidSwapSound');
    }
  }, {
    key: "create",
    value: function create() {
      this.add.image(this._width / 2, this._height / 2, 'background').setScale(this._zoom);

      this._setupPositions(); //horisontal positions of thr cols


      this._initTiles();

      this._initDemons();

      this.add.image(0, 0, 'leftTop').setOrigin(0, 0).setScale(this._zoom);
      this.add.image(0, this._height, 'leftBottom').setOrigin(0, 1).setScale(this._zoom);
      this.add.image(this._width, 0, 'rightTree').setOrigin(1, 0).setScale(this._zoom);
      this.add.image(this._width, this._height, 'rightBottom').setOrigin(1, 1).setScale(this._zoom);

      this._checkPotentialMatches(); //shows the suggestion to user after 1 second


      this.input.topOnly = true;
      this.input.on('pointerdown', this._onPointerDown, this);
      this.input.on('pointermove', this._onPointerMove, this);
      this.input.on('pointerup', this._onPointerUp, this);
    }
  }, {
    key: "_setupPositions",
    value: function _setupPositions() {
      var colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber;
      var _newDemonPositions = this._newDemonPositions;

      for (var col = 0; col < colsNumber; col++) {
        var point = _util__WEBPACK_IMPORTED_MODULE_6__["default"].rowColToPoint(-1, col);

        _newDemonPositions.set(col, point);
      }
    }
  }, {
    key: "_initTiles",
    value: function _initTiles() {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber,
          colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber,
          offsetX = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].offsetX,
          offsetY = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].offsetY;
      var tilesContainer = this.add.container(offsetX, offsetY);
      var explosionGroup = this.add.group();

      for (var row = 0; row < rowsNumber; row++) {
        for (var col = 0; col < colsNumber; col++) {
          var point = _util__WEBPACK_IMPORTED_MODULE_6__["default"].rowColToPoint(row, col);
          var tile = this.add.image(point.x, point.y, 'demons', 'Tile');
          tile.setScale(this._zoom);
          tile.setOrigin(0, 0);
          var explosionSprite = new _sprites_explosion__WEBPACK_IMPORTED_MODULE_4__["default"](this, row, col, point.x, point.y, 'explosion');
          tilesContainer.add(tile);
          explosionGroup.add(explosionSprite, true);
        }
      }

      _explosions__WEBPACK_IMPORTED_MODULE_5__["default"].initData(explosionGroup.getChildren());
    }
  }, {
    key: "_initDemons",
    value: function _initDemons() {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber,
          colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber,
          offsetX = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].offsetX,
          offsetY = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].offsetY;
      var _demons = this._demons;

      var _demonContainer = this._demonContainer = this.add.container(offsetX, offsetY);

      for (var row = 0; row < rowsNumber; row++) {
        for (var col = 0; col < colsNumber; col++) {
          var point = _util__WEBPACK_IMPORTED_MODULE_6__["default"].rowColToPoint(row, col);
          var frame = phaser__WEBPACK_IMPORTED_MODULE_0__["Utils"].Array.GetRandom(_configs__WEBPACK_IMPORTED_MODULE_1__["DEMON_FRAMES"]);

          while (col >= _configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1 && _demons.getHorizontalMatches(row, col, -1, 0, frame) || row >= _configs__WEBPACK_IMPORTED_MODULE_1__["MIN_MATCHES"] - 1 && _demons.getVerticalMatches(row, col, -1, 0, frame)) {
            frame = phaser__WEBPACK_IMPORTED_MODULE_0__["Utils"].Array.GetRandom(_configs__WEBPACK_IMPORTED_MODULE_1__["DEMON_FRAMES"]);
          }

          var demon = new _sprites_demon__WEBPACK_IMPORTED_MODULE_2__["default"](this, row, col, point.x, point.y, 'demons', frame);

          _demonContainer.add(demon);
        }
      }
    }
  }, {
    key: "_checkPotentialMatches",
    value: function _checkPotentialMatches() {
      var _this2 = this;

      //shows the suggestion to user after 1 second
      setTimeout(function () {
        var potentialMatches = _this2._demons.checkPotentialMatches();

        if (potentialMatches) {
          _this2.tweens.add({
            targets: potentialMatches,
            alpha: 0.3,
            yoyo: true,
            repeat: 3,
            duration: 800
          });
        }
      }, 1000);
    }
  }, {
    key: "_onPointerDown",
    value: function _onPointerDown(pointer, currentlyOver) {
      var demon = currentlyOver[0];

      if (demon) {
        this._swipeFromRow = demon.row;
        this._swipeFromCol = demon.col;
        demon.addHighLighted();
        this.selectionDemon = demon;
      }
    }
  }, {
    key: "_onPointerMove",
    value: function _onPointerMove(pointer, currentlyOver) {
      if (this._swipeFromRow === null) return;

      if (currentlyOver.length) {
        var toDemon = currentlyOver[0];
        var isNeighbor = _util__WEBPACK_IMPORTED_MODULE_6__["default"].isNeighbor(this.selectionDemon, toDemon);

        if (isNeighbor) {
          this._trySwap(this.selectionDemon, toDemon);

          this.selectionDemon.removeHighLighted();
        }
      }
    }
  }, {
    key: "_onPointerUp",
    value: function _onPointerUp(pointer, demon) {
      this._swipeFromRow = null;
      this._swipeFromCol = null;

      if (this.selectionDemon) {
        this.selectionDemon.removeHighLighted();
      }

      this.selectionDemon = null;
    }
  }, {
    key: "_trySwap",
    value: function _trySwap(fromDemon, toDemon) {
      var _this3 = this;

      this._swipeFromRow = null;
      this._swipeFromCol = null;
      this.swapSound.play();
      var _demons = this._demons;

      _demons.trySwap(fromDemon, toDemon).then(function () {
        var _Util$calcCheckDirect = _util__WEBPACK_IMPORTED_MODULE_6__["default"].calcCheckDirects(fromDemon.row - toDemon.row, fromDemon.col - toDemon.col),
            fromCheckDirect = _Util$calcCheckDirect.fromCheckDirect,
            toCheckDirect = _Util$calcCheckDirect.toCheckDirect;

        if (!fromDemon.isSameDemon(toDemon)) {
          var fromDemonMatches = _demons.getMatches(fromDemon, fromCheckDirect);

          var toDemonMatches = _demons.getMatches(toDemon, toCheckDirect);

          var totalMatches = _util__WEBPACK_IMPORTED_MODULE_6__["default"].unionSet(fromDemonMatches, toDemonMatches);

          if (totalMatches.size !== 0) {
            return _this3._removeMatchDemons(totalMatches);
          }
        }

        return _this3._undoSwap(fromDemon, toDemon);
      }).then(function (res) {
        if (res.act == 'remove') {
          _this3._chainMatch(res.removedCols);
        }
      });
    }
  }, {
    key: "_chainMatch",
    value: function _chainMatch(removedCols) {
      var _this4 = this;

      var _demons = this._demons; // collapse

      var collapseArr = _demons.quickCollapse(removedCols); // create new demon


      var newDemonsArr = this._createNewDemons(removedCols);

      var needCheckDemons = collapseArr.concat(newDemonsArr); // drop

      this._dropAnim(needCheckDemons).then(function () {
        var matchesList = [];
        needCheckDemons.forEach(function (demon) {
          var matches = _demons.getMatches(demon, _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].HORIZONTAL | _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].DOWN);

          matchesList.push(matches);
        });
        return _this4._unionAndRemove(matchesList);
      }).then(function (res) {
        if (res && res.act == 'remove') {
          _this4._chainMatch(res.removedCols);
        }
      });
    }
  }, {
    key: "_unionAndRemove",
    value: function _unionAndRemove(matchesList) {
      var totalMatches = _util__WEBPACK_IMPORTED_MODULE_6__["default"].unionSet.apply(_util__WEBPACK_IMPORTED_MODULE_6__["default"], _toConsumableArray(matchesList));

      if (totalMatches.size !== 0) {
        return this._removeMatchDemons(totalMatches);
      }
    }
  }, {
    key: "_removeMatchDemons",
    value: function _removeMatchDemons(totalMatches) {
      var _demons = this._demons;
      var _demonContainer = this._demonContainer;
      var pifyOpts = {
        errorFirst: false,
        context: this._demons
      };
      var removePromises = [];
      var cols = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = totalMatches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var matchDemon = _step.value;
          cols[matchDemon.col] = true;
          var p = ts_pify__WEBPACK_IMPORTED_MODULE_7___default()(_demons.remove, pifyOpts)(matchDemon);
          removePromises.push(p);

          _demonContainer.remove(matchDemon, true);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.matchSound.play();
      return Promise.all(removePromises).then(function () {
        return {
          act: 'remove',
          removedCols: cols
        };
      });
    }
  }, {
    key: "_undoSwap",
    value: function _undoSwap(fromDemon, toDemon) {
      return this._demons.undoSwap(fromDemon, toDemon).then(function () {
        return {
          act: 'undo'
        };
      });
    }
  }, {
    key: "_dropAnim",
    value: function _dropAnim(movedDemons) {
      var dropPromises = [];

      for (var i = 0; i < movedDemons.length; i++) {
        var demon = movedDemons[i];
        var row = demon.row,
            col = demon.col;
        var point = _util__WEBPACK_IMPORTED_MODULE_6__["default"].rowColToPoint(row, col, 0.5);
        var tween = this.tweens.add({
          targets: demon,
          y: point.y,
          duration: 300
        });
        dropPromises.push(_util__WEBPACK_IMPORTED_MODULE_6__["default"].pifyTween(tween));
      }

      return Promise.all(dropPromises);
    }
  }, {
    key: "_createNewDemons",
    value: function _createNewDemons(cols) {
      var newDemonsInfo = [];
      var _demons = this._demons;
      var _newDemonPositions = this._newDemonPositions;

      for (var col in cols) {
        col = Number(col);

        var emptyRows = _demons.getEmptyRowsOnCol(col);

        for (var row = emptyRows - 1; row >= 0; row--) {
          var point = _newDemonPositions.get(col);

          var newDemon = new _sprites_demon__WEBPACK_IMPORTED_MODULE_2__["default"](this, row, col, point.x, point.y, 'demons');

          this._demonContainer.add(newDemon);

          newDemonsInfo.push(newDemon);
        }
      }

      return newDemonsInfo;
    }
  }]);

  return GameScene;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"]);



/***/ }),

/***/ "./src/scenes/preload.js":
/*!*******************************!*\
  !*** ./src/scenes/preload.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreloadScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var PreloadScene =
/*#__PURE__*/
function (_Scene) {
  _inherits(PreloadScene, _Scene);

  function PreloadScene() {
    var _this;

    _classCallCheck(this, PreloadScene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PreloadScene).call(this, {
      key: 'Preload'
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_width", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_height", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startButton", void 0);

    return _this;
  }

  _createClass(PreloadScene, [{
    key: "preload",
    value: function preload() {
      this.load.setPath('./assets/images');
      this.load.image('leftBottom', "leftBottom.png");
      this.load.image('leftTop', "leftTop.png");
      this.load.image('rightBottom', "rightBottom.png");
      this.load.image('rightTree', "rightTree.png");
      this.load.image('background', "background.png");
      this.load.multiatlas({
        key: 'demons',
        url: 'demons.json',
        path: 'assets/images'
      });
      this.load.multiatlas('explosion', 'explosion.json', 'assets/images');
      this.load.setPath('./assets/sounds');
      this.load.audio('swapSound', 'Chomp.wav');
      this.load.audio('invalidSwapSound', 'Error.wav');
      this.load.audio('matchSound', 'Ka-Ching.wav');
      this.load.audio('fallingCookieSound', 'Scrape.wav');
      this.load.audio('addCookieSound', 'Drip.wav');
      this.load.audio('bgMusic', 'Mining-by-Moonlight.mp3');
    }
  }, {
    key: "init",
    value: function init() {
      var config = this.sys.game.config;
      this._width = config.width;
      this._height = config.height;
      this.add.image(this._width / 2, this._height / 4, 'logo').setScale(this._zoom);
      this._startButton = this.add.text(this._width / 2, this._height / 2, "Loading...", {
        fontFamily: "Arial Black",
        fontSize: 32,
        color: "#FFFFFF",
        align: 'center',
        boundsAlignH: "center",
        boundsAlignV: "middle"
      }).setOrigin(0.5);
      this.linkToApp = {};

      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
        //iPhone Version:
        this.linkToApp.name = "Download from AppStore";
        this.linkToApp.link = "https://itunes.apple.com";
      } else if (navigator.userAgent.match(/android/i)) {
        //Android Version:
        this.linkToApp.name = "Download from PlayMarket";
        this.linkToApp.link = "https://play.google.com";
      }

      if (this.linkToApp.name && this.linkToApp.link) {
        this.add.text(this._width / 2, this._height / 2 + 55, this.linkToApp.name, {
          fontFamily: "Arial Black",
          fontSize: 24,
          color: "#FFFFFF"
        }).setOrigin(0.5).setInteractive().on('pointerup', function () {
          window.open(this.linkToApp.link, '_blank');
        }, this);
      }
    }
  }, {
    key: "create",
    value: function create() {
      this.anims.create({
        key: 'explosionpink',
        frames: this.anims.generateFrameNames('explosion', {
          prefix: 'explosionpink_',
          start: 0,
          end: 4,
          zeroPad: 2,
          suffix: '.png'
        }),
        frameRate: 20
      });
      this.anims.create({
        key: 'explosionred',
        frames: this.anims.generateFrameNames('explosion', {
          prefix: 'explosionred_',
          start: 0,
          end: 4,
          zeroPad: 2,
          suffix: '.png'
        }),
        frameRate: 20
      });
      this.bgSound = this.sound.add('bgMusic');
      this.bgSound.play();

      if (navigator.userAgent.match(/Windows/i)) {
        this.scene.start('Game');
      } else {
        this._startButton.setText('Play The Game!!!').setInteractive().on('pointerup', function () {
          this.scene.start('Game');
        }, this);
      }
    }
  }]);

  return PreloadScene;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"]);



/***/ }),

/***/ "./src/sprites/demon.js":
/*!******************************!*\
  !*** ./src/sprites/demon.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demon; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ "./src/configs.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Demon =
/*#__PURE__*/
function (_GameObjects$Sprite) {
  _inherits(Demon, _GameObjects$Sprite);

  function Demon(gameScene, row, col, x, y, textureKey, frame) {
    var _this;

    _classCallCheck(this, Demon);

    var tileWidth = _configs__WEBPACK_IMPORTED_MODULE_1__["tileConfig"].tileWidth,
        tileHeight = _configs__WEBPACK_IMPORTED_MODULE_1__["tileConfig"].tileHeight;

    if (!frame) {
      frame = phaser__WEBPACK_IMPORTED_MODULE_0__["Utils"].Array.GetRandom(_configs__WEBPACK_IMPORTED_MODULE_1__["DEMON_FRAMES"]);
    }

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Demon).call(this, gameScene, x + tileWidth / 2, y + tileHeight / 2, textureKey, frame));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "row", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "col", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "frameKey", '');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_highlighted", false);

    _this.setScale(_configs__WEBPACK_IMPORTED_MODULE_1__["gameConfig"].zoom);

    _this.row = row;
    _this.col = col;
    _this.frameKey = frame;

    _this.setInteractive();

    _this.input.cursor = 'pointer';
    gameScene.events.emit('createDemon', _assertThisInitialized(_assertThisInitialized(_this)), row, col);
    return _this;
  }

  _createClass(Demon, [{
    key: "isSameDemon",
    value: function isSameDemon(otherDemon) {
      return this.frameKey === otherDemon.frameKey;
    }
  }, {
    key: "addHighLighted",
    value: function addHighLighted() {
      this.setFrame(this.frameKey + '-Highlighted');
    }
  }, {
    key: "removeHighLighted",
    value: function removeHighLighted() {
      this.setFrame(this.frameKey);
    }
  }]);

  return Demon;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["GameObjects"].Sprite);



/***/ }),

/***/ "./src/sprites/explosion.js":
/*!**********************************!*\
  !*** ./src/sprites/explosion.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Explosion; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ "./src/configs.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Explosion =
/*#__PURE__*/
function (_GameObjects$Sprite) {
  _inherits(Explosion, _GameObjects$Sprite);

  function Explosion(gameScene, row, col, x, y, textureKey) {
    var _this;

    _classCallCheck(this, Explosion);

    var tileWidth = _configs__WEBPACK_IMPORTED_MODULE_1__["tileConfig"].tileWidth,
        tileHeight = _configs__WEBPACK_IMPORTED_MODULE_1__["tileConfig"].tileHeight;
    var offsetX = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].offsetX,
        offsetY = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].offsetY;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Explosion).call(this, gameScene, x + offsetX + tileWidth / 2, y + offsetY + tileHeight / 2, textureKey, 'explosionred_04.png'));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "row", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "col", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "completeCallback", null);

    _this.setScale(_configs__WEBPACK_IMPORTED_MODULE_1__["gameConfig"].zoom);

    _this.row = row;
    _this.col = col;

    _this.on('animationcomplete', _this._hide, _assertThisInitialized(_assertThisInitialized(_this)));

    _this.visible = false;
    return _this;
  }

  _createClass(Explosion, [{
    key: "_show",
    value: function _show() {
      this.visible = true;
    }
  }, {
    key: "_hide",
    value: function _hide() {
      this.visible = false;

      if (this.completeCallback) {
        var completeCallback = this.completeCallback;
        this.completeCallback = null;
        completeCallback();
      }
    }
  }, {
    key: "playAnim",
    value: function playAnim(cb) {
      var animationKey = phaser__WEBPACK_IMPORTED_MODULE_0__["Utils"].Array.GetRandom(_configs__WEBPACK_IMPORTED_MODULE_1__["EXPLOSION_KEYS"]);
      this.completeCallback = cb;

      this._show();

      this.play(animationKey);
    }
  }]);

  return Explosion;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["GameObjects"].Sprite);



/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Util; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ "./src/configs.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "rowColToPoint",
    value: function rowColToPoint(row, col) {
      var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var tileWidth = _configs__WEBPACK_IMPORTED_MODULE_1__["tileConfig"].tileWidth,
          tileHeight = _configs__WEBPACK_IMPORTED_MODULE_1__["tileConfig"].tileHeight,
          tileSpace = _configs__WEBPACK_IMPORTED_MODULE_1__["tileConfig"].tileSpace;
      var x = col * tileWidth;
      var y = row * tileHeight + row * tileSpace;

      if (origin) {
        x += tileWidth * origin;
        y += tileHeight * origin;
      }

      return new phaser__WEBPACK_IMPORTED_MODULE_0__["Geom"].Point(x, y);
    }
  }, {
    key: "isNeighbor",
    value: function isNeighbor(demon1, demon2) {
      var neighbor = false;
      var deltaRow = demon2.row - demon1.row;
      var deltaCol = demon2.col - demon1.col;

      if (deltaCol == 0) {
        if (deltaRow == 1 || deltaRow == -1) {
          neighbor = true;
        }
      }

      if (deltaRow == 0) {
        if (deltaCol == 1 || deltaCol == -1) {
          neighbor = true;
        }
      }

      return neighbor;
    }
  }, {
    key: "calcCheckDirects",
    value: function calcCheckDirects(deltaRow, deltaCol) {
      var fromCheckDirect = _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].NONE;
      var toCheckDirect = _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].NONE;

      if (deltaCol == 0) {
        fromCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].HORIZONTAL;
        toCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].HORIZONTAL;

        if (deltaRow == 1) {
          fromCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].DOWN;
          toCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].UP;
        } else if (deltaRow == -1) {
          fromCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].UP;
          toCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].DOWN;
        }
      }

      if (deltaRow == 0) {
        fromCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].VERTICAL;
        toCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].VERTICAL;

        if (deltaCol == 1) {
          fromCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].LEFT;
          toCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].RIGHT;
        } else if (deltaCol == -1) {
          fromCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].RIGHT;
          toCheckDirect |= _configs__WEBPACK_IMPORTED_MODULE_1__["CHECK_DIRECTION"].LEFT;
        }
      }

      return {
        fromCheckDirect: fromCheckDirect,
        toCheckDirect: toCheckDirect
      };
    }
  }, {
    key: "swapRowCol",
    value: function swapRowCol(fromDemon, toDemon) {
      var tmp = fromDemon.row;
      fromDemon.row = toDemon.row;
      toDemon.row = tmp;
      tmp = fromDemon.col;
      fromDemon.col = toDemon.col;
      toDemon.col = tmp;
    }
  }, {
    key: "pifyTween",
    value: function pifyTween(tween) {
      return new Promise(function (resolve) {
        tween.setCallback('onComplete', function () {
          resolve();
        }, [], null);
      });
    }
  }, {
    key: "unionSet",
    value: function unionSet() {
      var _this = this;

      // return new Set([...set1, ...set2])
      var unioned = new Set();

      for (var _len = arguments.length, setArr = new Array(_len), _key = 0; _key < _len; _key++) {
        setArr[_key] = arguments[_key];
      }

      setArr.forEach(function (setItem) {
        _this.addArrToSet(unioned, setItem);
      });
      return unioned;
    }
  }, {
    key: "addArrToSet",
    value: function addArrToSet(setToAdd, arr) {
      if (arr) {
        arr.forEach(function (item) {
          setToAdd.add(item);
        });
      }
    }
  }, {
    key: "isBitSet",
    value: function isBitSet(n, mask) {
      if (n & mask) {
        return true;
      }

      return false;
    }
  }, {
    key: "checkHorizontal1",
    value: function checkHorizontal1(row, col, demonsArr) {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber,
          colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber;

      if (col <= colsNumber - 2) {
        if (demonsArr[row][col].isSameDemon(demonsArr[row][col + 1])) {
          /*  example  *\
           * *  *  * * *
           * *  *  * * *
           * * .&. & * * 
           * &  *  * * *
           * *  *  * * *
          \*  example  */
          if (row <= rowsNumber - 2 && col >= 1) {
            if (demonsArr[row][col].isSameDemon(demonsArr[row + 1][col - 1])) {
              return [demonsArr[row][col], demonsArr[row][col + 1], demonsArr[row + 1][col - 1]];
            }
          }
          /*  example  *\
           * *  *  * * *
           * &  *  * * *
           * * .&. & * * 
           * *  *  * * *
           * *  *  * * *
          \*  example  */


          if (row >= 1 && col >= 1) {
            if (demonsArr[row][col].isSameDemon(demonsArr[row - 1][col - 1])) {
              return [demonsArr[row][col], demonsArr[row][col + 1], demonsArr[row - 1][col - 1]];
            }
          }
        }
      }

      return null;
    }
  }, {
    key: "checkHorizontal2",
    value: function checkHorizontal2(row, col, demonsArr) {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber,
          colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber;

      if (col <= colsNumber - 3) {
        if (demonsArr[row][col].isSameDemon(demonsArr[row][col + 1])) {
          /*  example  *\
           * *  *  * * *
           * *  *  * * *
           * * .&. & * * 
           * *  *  * & *
           * *  *  * * *
          \*  example  */
          if (row <= rowsNumber - 2 && col <= colsNumber - 3) {
            if (demonsArr[row][col].isSameDemon(demonsArr[row + 1][col + 2])) {
              return [demonsArr[row][col], demonsArr[row][col + 1], demonsArr[row + 1][col + 2]];
            }
          }
          /*  example  *\
           * *  *  * * *
           * *  *  * & *
           * * .&. & * * 
           * *  *  * * *
           * *  *  * * *
          \*  example  */


          if (row >= 1 && col <= colsNumber - 3) {
            if (demonsArr[row][col].isSameDemon(demonsArr[row - 1][col + 2])) {
              return [demonsArr[row][col], demonsArr[row][col + 1], demonsArr[row - 1][col + 2]];
            }
          }
        }
      }

      return null;
    }
  }, {
    key: "checkHorizontal3",
    value: function checkHorizontal3(row, col, demonsArr) {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber,
          colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber;
      /*  example  *\
       * *  *  * * *
       * *  *  * * *
       * * .&. & * & 
       * *  *  * * *
       * *  *  * * *
      \*  example  */

      if (col <= colsNumber - 4) {
        if (demonsArr[row][col].isSameDemon(demonsArr[row][col + 1]) && demonsArr[row][col].isSameDemon(demonsArr[row][col + 3])) {
          return [demonsArr[row][col], demonsArr[row][col + 1], demonsArr[row][col + 3]];
        }
      }
      /*  example  *\
       * *  *  * * *
       * *  *  * * *
       & * .&. & * *
       * *  *  * * *
       * *  *  * * *
      \*  example  */


      if (col >= 2 && col <= colsNumber - 2) {
        if (demonsArr[row][col].isSameDemon(demonsArr[row][col + 1]) && demonsArr[row][col].isSameDemon(demonsArr[row][col - 2])) {
          return [demonsArr[row][col], demonsArr[row][col + 1], demonsArr[row][col - 2]];
        }
      }

      return null;
    }
  }, {
    key: "checkVertical1",
    value: function checkVertical1(row, col, demonsArr) {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber,
          colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber;

      if (row >= 1) {
        if (demonsArr[row][col].isSameDemon(demonsArr[row - 1][col])) {
          /* example *\
          * *  *  * * *
          * *  *  * * *
          * *  &  * * *
          * * .&. * * *
          * &  *  * * *
          * *  *  * * *
          \* example */
          if (row <= row - 2 && col >= 1) {
            if (demonsArr[row][col].isSameDemon(demonsArr[row + 1][col - 1])) {
              return [demonsArr[row][col], demonsArr[row - 1][col], demonsArr[row + 1][col - 1]];
            }
          }
          /* example *\
          * *  *  * * *
          * *  *  * * *
          * *  &  * * *
          * * .&. * * *
          * *  *  & * *
          * *  *  * * *
          \* example */


          if (row <= row - 2 && col <= colsNumber - 2) {
            if (demonsArr[row][col].isSameDemon(demonsArr[row + 1][col + 1])) {
              return [demonsArr[row][col], demonsArr[row - 1][col], demonsArr[row + 1][col + 1]];
            }
          }
        }
      }

      return null;
    }
  }, {
    key: "checkVertical2",
    value: function checkVertical2(row, col, demonsArr) {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber,
          colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber;

      if (row >= 2) {
        if (demonsArr[row][col].isSameDemon(demonsArr[row - 1][col])) {
          /* example *\
          * *  *  * * *
          * &  *  * * *
          * *  &  * * *
          * * .&. * * *
          * *  *  * * *
          * *  *  * * *
          \* example */
          if (col >= 1) {
            if (demonsArr[row][col].isSameDemon(demonsArr[row - 2][col - 1])) {
              return [demonsArr[row][col], demonsArr[row - 1][col], demonsArr[row - 2][col - 1]];
            }
          }
          /* example *\
          * *  *  * * *
          * *  *  & * *
          * *  &  * * *
          * * .&. * * *
          * *  *  * * *
          * *  *  * * *
          \* example */


          if (col <= colsNumber - 2) {
            if (demonsArr[row][col].isSameDemon(demonsArr[row - 2][col + 1])) {
              return [demonsArr[row][col], demonsArr[row - 1][col], demonsArr[row - 2][col + 1]];
            }
          }
        }
      }

      return null;
    }
  }, {
    key: "checkVertical3",
    value: function checkVertical3(row, col, demonsArr) {
      var rowsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].rowsNumber,
          colsNumber = _configs__WEBPACK_IMPORTED_MODULE_1__["tilesConfig"].colsNumber;

      if (row >= 3) {
        /* example *\
         * *  &  * * *
         * *  *  * * *
         * *  &  * * *
         * * .&. * * *
         * *  *  * * *
         * *  *  * * *
        \* example */
        if (demonsArr[row][col].isSameDemon(demonsArr[row - 1][col]) && demonsArr[row][col].isSameDemon(demonsArr[row - 3][col])) {
          return [demonsArr[row][col], demonsArr[row - 1][col], demonsArr[row - 3][col]];
        }
      }

      if (row >= 1 && row <= rowsNumber - 3) {
        /* example *\
         * *  *  * * *
         * *  *  * * *
         * *  &  * * *
         * * .&. * * *
         * *  *  * * *
         * *  &  * * *
        \* example */
        if (demonsArr[row][col].isSameDemon(demonsArr[row - 1][col]) && demonsArr[row][col].isSameDemon(demonsArr[row + 2][col])) {
          return [demonsArr[row][col], demonsArr[row - 1][col], demonsArr[row + 2][col]];
        }
      }

      return null;
    }
  }]);

  return Util;
}();



/***/ })

/******/ });
//# sourceMappingURL=index.js.map