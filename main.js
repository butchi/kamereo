'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('whatwg-fetch');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getColorArr(str) {
  if (str.match(/^#[0-9a-fA-F]+$/) || str.match(/^[a-zA-Z]+$/)) {
    return [str];
  } else {
    var ret = void 0;
    str = str.replace(/\'/g, '"');
    try {
      ret = JSON.parse(str);
    } catch (e) {
      console.error('invalid color.');
    }

    return ret;
  }
}

var KamereoCore = function () {
  function KamereoCore() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, KamereoCore);

    this.initialize(opts);
  }

  _createClass(KamereoCore, [{
    key: 'initialize',
    value: function initialize() {
      var _this = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.elm = opts.elm;

      this.src = this.elm.getAttribute('data-src');

      var fromOpt = opts.from;
      var toOpt = opts.to;

      var fromAttr = this.elm.getAttribute('data-color-from');
      var toAttr = this.elm.getAttribute('data-color-to');

      if (fromAttr) {
        this.fromArr = getColorArr(fromAttr);
      }
      if (fromOpt == null) {} else if (typeof fromOpt === 'string') {
        this.fromArr = [fromOpt];
      } else if (fromOpt instanceof Array) {
        this.fromArr = fromOpt;
      }

      if (toAttr) {
        this.toArr = getColorArr(toAttr);
      }
      if (toOpt == null) {} else if (typeof toOpt === 'string') {
        this.toArr = [toOpt];
      } else if (toOpt instanceof Array) {
        this.toArr = toOpt;
      }

      this.apply = opts.apply;

      fetch(this.src).then(function (response) {
        return response.text();
      }).then(function (svg) {
        var parser = new DOMParser();
        var dom = parser.parseFromString(svg, 'image/svg+xml');

        if (typeof _this.apply === 'function') {
          dom = _this.apply(dom);

          var serializer = new XMLSerializer();
          svg = serializer.serializeToString(dom);
        }

        var kamered = svg;

        if (_this.fromArr && _this.toArr) {
          if (_this.toArr.length === 1) {
            for (var i = 0; i < _this.fromArr.length; i++) {
              kamered = kamered.replace(_this.fromArr[i], _this.toArr[0]);
            }
          } else {
            var len = Math.min(_this.fromArr.length, _this.toArr.length);

            for (var _i = 0; _i < len; _i++) {
              kamered = kamered.replace(_this.fromArr[_i], _this.toArr[_i]);
            }
          }
        }

        var encoded = encodeURIComponent(kamered);

        _this.elm.style['background-image'] = 'url("data:image/svg+xml,' + encoded + '")';

        var _svg$match$slice = svg.match(/viewBox="([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+)"/).slice(3, 5),
            _svg$match$slice2 = _slicedToArray(_svg$match$slice, 2),
            w = _svg$match$slice2[0],
            h = _svg$match$slice2[1];

        _this.elm.style.width = w + 'px';
        _this.elm.style.height = h + 'px';
      });
    }
  }]);

  return KamereoCore;
}();

exports.default = KamereoCore;