# @tjmora/template-literal-object

An object that can represent a template string literal, including all its string parts and
all the interpolations.

## Installation

`npm i @tjmora/template-literal-object`

## Usage

```typescript
import TLO from "@tjmora/template-literal-object"; // for Typescript
// const TLO = require("@tjmora/template-literal-object").default; // for Javascript

// Let's define a tag function for demo
function test(stringParts: TemplateStringsArray, ...interpolations: any[]) {
  console.log(stringParts);
  console.log(interpolations);
}

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

obj1.append(obj2); // appends obj2 to obj1

test(...obj1.parts());
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

### USAGE in CSS-in-JS libraries (e.g., styled-components)

Use the `styled` method instead of the `set` method. The `styled` method has a more
limited set of allowed types for interpolations. 

> **_NOTE:_** There's also a 
> [syntax highlighter and IntelliSense for TLO.styled](https://marketplace.visualstudio.com/items?itemName=tjmora.vscode-tlo-styled).
> One more reason to use the `styled` method instead of the `set` method when dealing with CSS-in-JS.

```typescript
import TLO from "@tjmora/template-literal-object"; // for Typescript
// const TLO = require("@tjmora/template-literal-object").default; // for Javascript
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

const SomeComponent = styled.div(...DefaultStyle.parts());
```
