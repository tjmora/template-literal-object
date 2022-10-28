export declare class TLO {
    stringParts: string[];
    interpolations: any[];
    constructor(stringParts: TemplateStringsArray, ...interpolations: any[]);
    append(other: TLO): this;
    static set(stringParts: TemplateStringsArray, ...interpolations: any[]): TLO;
    static styled(stringParts: TemplateStringsArray, ...interpolations: (string | number | ((prop: any) => {}))[]): TLO;
}
export default TLO;
