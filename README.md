## Projeto Opensource Minha Carteira

App desenvolvido para gerenciamento de dispesas e receitas.

## List emoji html

<p style="font-size:100px">&#128540;</p>
[HTML Smiley Emoji](https://www.w3schools.com/charsets/ref_emoji_smileys.asp)

## Global Styles in Styled-Component
>StylesGlobal.ts
```ts
import {createGlobalStyles} from 'styled-components';
export default createGlobalStyles`
// Reset CSS
`;
```

## Theme in Styled-Components
### Step One
>theme.d.ts
```ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      black: string,
      gray: string,
      white: string
    }
  }
}
```
#### Step Two
>App.tsx
```ts
import React from 'react';
import Routes from '../routes';
import StylesGlobal from '../styles/StylesGlobal';
import {ThemeProvider} from 'styled-components';

export default App (): JSX.Element => {
  return (
    <ThemeProvider>
      <StylesGlobal/>
      <Routes/>
    </ThemeProvider>
  )
}
```

#### Step Three
>styles.ts
```ts
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
`;

```

## useMemo
<p>usado para armazena valores</p>

```ts
import React, {useMemo} from 'react';
import emojis from '../../util/emojis';
import {Container} from './styles'

const emoji: string = useMemo(() => {
  const index = Math.floor(Math.random * emojis.length);
  return emojis[index];
}, [])

export default (): JSX.Element => {
  return (
    <Container>
      <h1>{emoji}</h1>
    </Container>
  )
}
```

## Lib react-switch // Button Switch
```bash
yarn add react-switch
```
