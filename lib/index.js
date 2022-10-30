"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TLO {
    constructor(stringParts, ...interpolations) {
        this.stringParts = [];
        this.interpolations = [];
        this.stringParts.push(...stringParts);
        this.interpolations.push(...interpolations);
        return this;
    }
    append(other) {
        if (this.stringParts.length > this.interpolations.length) {
            this.stringParts[this.stringParts.length - 1] += other.stringParts[0];
            this.stringParts.push(...other.stringParts.slice(1));
        }
        else
            this.stringParts.push(...other.stringParts);
        this.interpolations.push(...other.interpolations);
        return this;
    }
    static set(stringParts, ...interpolations) {
        return new TLO(stringParts, ...interpolations);
    }
    static styled(stringParts, ...interpolations) {
        return new TLO(stringParts, ...interpolations);
    }
}
exports.default = TLO;
