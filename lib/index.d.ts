export default class TLO {
    stringParts: string[];
    interpolations: any[];
    constructor(stringParts: TemplateStringsArray, ...interpolations: any[]);
    append(other: TLO): this;
    literal(): [TemplateStringsArray, ...any[]];
    static set(stringParts: TemplateStringsArray, ...interpolations: any[]): TLO;
    static styled(stringParts: TemplateStringsArray, ...interpolations: (string | number | ((prop: any) => {}))[]): TLO;
}
