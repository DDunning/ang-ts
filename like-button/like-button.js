"use strict";
exports.__esModule = true;
exports.LikeButtonComponent = void 0;
var LikeButtonComponent = /** @class */ (function () {
    function LikeButtonComponent(_likes) {
        this._likes = _likes;
        this._isSelected = false;
    }
    LikeButtonComponent.prototype.Clicked = function () {
        if (this._isSelected) {
            this._likes -= 1;
            this._isSelected = false;
        }
        else {
            this._likes += 1;
            this._isSelected = true;
        }
    };
    Object.defineProperty(LikeButtonComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeButtonComponent.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: false,
        configurable: true
    });
    return LikeButtonComponent;
}());
exports.LikeButtonComponent = LikeButtonComponent;
