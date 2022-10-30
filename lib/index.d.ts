export default class TLO {
    private stringParts;
    private interpolations;
    constructor(stringParts: TemplateStringsArray, ...interpolations: any[]);
    append(other: TLO): this;
    parts(): [TemplateStringsArray, ...any[]];
    static set(stringParts: TemplateStringsArray, ...interpolations: any[]): TLO;
    static styled(stringParts: TemplateStringsArray, ...interpolations: (string | number | ((prop: any) => {}))[]): TLO;
}
