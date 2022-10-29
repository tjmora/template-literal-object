# Template Literal Object

An object that can represent a template string literal, including all its string parts and 
all the interpolations.

## Installation

`npm i @tjmora/template-literal-object`

## Usage

<details>
<summary>Typescript</summary>

```typescript
import TLO from "@tjmora/template-literal-object"

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

test(obj1.stringParts as any as TemplateStringsArray, ...obj1.interpolations)
// This logs the following:
// [
//  '\n  Hello\n  ',
//  '\n  Asia\n  ',
//  '\n\n  Hello\n  ',
//  '\n  the Philippines\n  ',
//  '\n'
//]
//[ 'World and', 101, 'World and', 102 ]
```
</details>

<details>
<summary>Javascript</summary>

```javascript
const { TLO } = require("@tjmora/template-literal-object");

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
  console.log(stringParts);
  console.log(interpolations);
}

test(obj1.stringParts, ...obj1.interpolations);
```

</details>

### USAGE for styled-components

Use the `styled` method instead of the `set` method. The `styled` method has a more 
limited allowed types for interpolations.

<details>
<summary>Typescript</summary>

```typescript
import TLO from "@tjmora/template-literal-object"
import styled from "styled-components"

const DefaultStyle = TLO.styled`
  display: block;
  width: 100%;
  background-color: ${props => props.theme.card.color.background};
`

const SomeStyleFromSomewhereElse = TLO.styled`
  display: inline-block;
  color: ${props => props.theme.card.color.textPrimary};
`

DefaultStyle.append(SomeStyleFromSomewhereElse)

const CardComponent = styled.div(
  DefaultStyle.stringParts as any as TemplateStringsArray, 
  ...DefaultStyle.interpolations
)
```

</details>

<details>
<summary>Javascript</summary>

```javascript
const { TLO } = require("@tjmora/template-literal-object");
import styled from "styled-components";

const DefaultStyle = TLO.styled`
  display: block;
  width: 100%;
  background-color: ${props => props.theme.card.color.background};
`;

const SomeStyleFromSomewhereElse = TLO.styled`
  display: inline-block;
  color: ${props => props.theme.card.color.textPrimary};
`;

DefaultStyle.append(SomeStyleFromSomewhereElse);

const CardComponent = styled.div(
  DefaultStyle.stringParts, 
  ...DefaultStyle.interpolations
);
```

</details>

### VS Code extension for TLO.styled

The extension is available at the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=tjmora.vscode-tlo-styled).
