import React from 'react';
import Aside from '../components/Aside';
import Content from '../components/Content';
import MainHeader from '../components/MainHeader';
import { Grid } from './styles';

const Layout: React.FC = (): JSX.Element => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content />
    </Grid>
  );
};

export default Layout;
