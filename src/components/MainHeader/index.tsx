import React, { useMemo } from 'react';
import { Container, Profile, UserName, Welcome } from './styles';
import emojis from '../../util/emojis';

const MainHeader: React.FC = (): JSX.Element => {
  const emoji = useMemo(() => {
    const index = Math.round(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <h1>Toogle</h1>

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>André Da Silva</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
