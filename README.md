## Projeto Opensource Minha Carteira

App desenvolvido para gerenciamento de dispesas e receitas.

### List emoji html

<p style="font-size:100px">&#128540;</p>
[HTML Smiley Emoji](https://www.w3schools.com/charsets/ref_emoji_smileys.asp)

### Global Styles in Styled-Components
>StylesGlobal.ts
```ts
import {createGlobalStyles} from 'styled-components';
export default createGlobalStyles`
// Reset CSS
`;
```

### Theme in Styled-Components
#### Step One
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
import dark from '../styles/themes/dark';

export default App (): JSX.Element => {
  return (
    <ThemeProvider theme={dark}>
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

### useMemo
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

### Lib react-switch // Button Switch

> yarn add react-switch

```tsx
import React, {useState} from 'react';
import Switch from 'react-switch';
import { Container } from './styles';

const App: React.FC = (): JSX.Element => {
  const [getChecked, setChecked] = useState(false);
  return (
    <Container>
      <h1>Off</h1>
      <Switch
        offColor="#bfbfbf"
        onColor="#e44c4e"
        checked={getChecked}
        width={45}
        height={20}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={(e) => {
          if (!getChecked) {
            setChecked(true);
          } else {
            setChecked(false);
          }
        }}
      ></Switch>
      <h1>On</h1>
    </Container>
  )
}
```


### Integração de componente pronto ¨Lib¨ com Styled-Components
> styles.ts
```ts
import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors?.white};
`;

export const ToggleLabel = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
/*
  Passa como parâmetro para o styled um componente e para a propriedade attrs uma interface
  genérica do componente que é os props do componente.

  Obs: usa integração quando usar comeponente de terceiros.
*/
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors?.info,
    offColor: theme.colors?.warning,
  }),
)<ReactSwitchProps>``;

```
> index.tsx
```tsx
import React, {useState} from 'react';
import { Container, ToggleSelector } from './styles';

const App: React.FC = (): JSX.Element => {
  const [getChecked, setChecked] = useState(false);
  return (
    <Container>
      <h1>Off</h1>
      <ToggleSelector
        checked={getChecked}
        width={45}
        height={20}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={(e) => {
          if (!getChecked) {
            setChecked(true);
          } else {
            setChecked(false);
          }
        }}
      ></ToggleSelector>
      <h1>On</h1>
    </Container>
  )
}
```

