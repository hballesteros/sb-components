"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
var MyLabel = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'normal' : _b, _c = _a.label, label = _c === void 0 ? 'My Label' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, fontColor = _a.fontColor, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? 'transparent' : _e, _f = _a.allCaps, allCaps = _f === void 0 ? false : _f, props = __rest(_a, ["size", "label", "color", "fontColor", "backgroundColor", "allCaps"]);
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "label ".concat(size, " text-").concat(color, " ").concat(allCaps ? 'all-caps' : ''), style: { color: fontColor, backgroundColor: backgroundColor } }, props, { children: label })));
};
exports.MyLabel = MyLabel;
exports.default = exports.MyLabel;
