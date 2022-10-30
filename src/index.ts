export default class TLO {
  public stringParts: string[] = [];
  public interpolations: any[] = [];
  public constructor(
    stringParts: TemplateStringsArray,
    ...interpolations: any[]
  ) {
    this.stringParts.push(...stringParts);
    this.interpolations.push(...interpolations);
    return this;
  }
  public append(other: TLO) {
    if (this.stringParts.length > this.interpolations.length) {
      this.stringParts[this.stringParts.length - 1] += other.stringParts[0];
      this.stringParts.push(...other.stringParts.slice(1));
    } else this.stringParts.push(...other.stringParts);
    this.interpolations.push(...other.interpolations);
    return this;
  }
  static set(stringParts: TemplateStringsArray, ...interpolations: any[]) {
    return new TLO(stringParts, ...interpolations);
  }
  static styled(
    stringParts: TemplateStringsArray,
    ...interpolations: (string | number | ((prop: any) => {}))[]
  ) {
    return new TLO(stringParts, ...interpolations);
  }
}