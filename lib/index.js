export default class TLO {
    constructor(stringParts, ...interpolations) {
        this.stringParts = [];
        this.interpolations = [];
        this.stringParts.push(...stringParts);
        this.interpolations.push(...interpolations);
        return this;
    }
    append(other) {
        this.stringParts[this.stringParts.length - 1] += other.stringParts[0];
        this.stringParts.push(...other.stringParts.slice(1));
        this.interpolations.push(...other.interpolations);
        return this;
    }
    parts() {
        return [this.stringParts, ...this.interpolations];
    }
    static set(stringParts, ...interpolations) {
        return new TLO(stringParts, ...interpolations);
    }
    static styled(stringParts, ...interpolations) {
        return new TLO(stringParts, ...interpolations);
    }
}
