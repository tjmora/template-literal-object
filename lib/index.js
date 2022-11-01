var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TLO = /** @class */ (function () {
    function TLO(stringParts) {
        var _a, _b;
        var interpolations = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolations[_i - 1] = arguments[_i];
        }
        this.stringParts = [];
        this.interpolations = [];
        (_a = this.stringParts).push.apply(_a, stringParts);
        (_b = this.interpolations).push.apply(_b, interpolations);
        return this;
    }
    TLO.prototype.append = function (other) {
        var _a, _b;
        this.stringParts[this.stringParts.length - 1] += other.stringParts[0];
        (_a = this.stringParts).push.apply(_a, other.stringParts.slice(1));
        (_b = this.interpolations).push.apply(_b, other.interpolations);
        return this;
    };
    TLO.prototype.parts = function () {
        return __spreadArray([this.stringParts], this.interpolations, true);
    };
    TLO.set = function (stringParts) {
        var interpolations = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolations[_i - 1] = arguments[_i];
        }
        return new (TLO.bind.apply(TLO, __spreadArray([void 0, stringParts], interpolations, false)))();
    };
    TLO.styled = function (stringParts) {
        var interpolations = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolations[_i - 1] = arguments[_i];
        }
        return new (TLO.bind.apply(TLO, __spreadArray([void 0, stringParts], interpolations, false)))();
    };
    return TLO;
}());
export default TLO;
//# sourceMappingURL=index.js.map