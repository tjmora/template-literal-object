const TLO = require("@tjmora/template-literal-object").default;

let obj1 = TLO.set`
  Hello
  ${"World" + " and"}
  Asia
  ${100 + 1}
`;

let obj2 = TLO.set`
  Hello
  ${"World" + " and"}
  the Philippines
  ${100 + 2}
`;

obj1.append(obj2);

function test(stringParts, ...interpolations) {
  return (
    stringParts.reduce((acc, cur) => acc + cur + ";", "") +
    interpolations.reduce((acc, cur) => acc + cur + ";", "")
  );
}

console.assert(
  test(...obj1.parts()) ===
    "\n  Hello\n  ;\n  Asia\n  ;\n\n  Hello\n  ;\n  the Philippines\n  ;\n;World and;101;World and;102;"
);
