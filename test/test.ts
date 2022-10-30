import TLO from "../lib"

let obj1 = TLO.set`
  Hello
  ${"World" + " and"}
  Asia
  ${100 + 1}
`

let obj2 = TLO.set`
  Hello
  ${"World" + " and"}
  the Philippines
  ${100 + 2}
`

obj1.append(obj2)

function test(stringParts: TemplateStringsArray, ...interpolations: any[]) {
  console.log(stringParts)
  console.log(interpolations)
}

test(...obj1.parts())
