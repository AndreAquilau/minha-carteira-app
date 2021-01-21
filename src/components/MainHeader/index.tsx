import React, { useMemo, useState } from 'react';
import SwitchTheme from '../SwitchTheme';
import { Container, Profile, UserName, Welcome } from './styles';
import emojis from '../../util/emojis';

const MainHeader: React.FC = (): JSX.Element => {
  const emoji = useMemo(() => {
    const index = Math.round(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  const [getChecked, setChecked] = useState(false);

  return (
    <Container>
      <SwitchTheme />
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>André Da Silva</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
