export default class TLO {
  private stringParts: string[] = [];
  private interpolations: any[] = [];
  public constructor(
    stringParts: TemplateStringsArray,
    ...interpolations: any[]
  ) {
    this.stringParts.push(...stringParts);
    this.interpolations.push(...interpolations);
    return this;
  }
  public append(other: TLO) {
    this.stringParts[this.stringParts.length - 1] += other.stringParts[0];
    this.stringParts.push(...other.stringParts.slice(1));
    this.interpolations.push(...other.interpolations);
    return this;
  }
  public parts(): [TemplateStringsArray, ...any[]] {
    return [this.stringParts as any as TemplateStringsArray, ...this.interpolations];
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