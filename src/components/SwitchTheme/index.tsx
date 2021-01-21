import React, { useState } from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';
import { useTheme } from '../../App';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

const SwitchTheme: React.FC = (): JSX.Element => {
  const [getChecked, setChecked] = useState(false);
  const { getTheme, setTheme } = useTheme();

  return (
    <Container>
      <ToggleLabel>Dark</ToggleLabel>
      <ToggleSelector
        checked={getChecked}
        width={45}
        height={20}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={(e) => {
          if (getChecked) {
            setChecked(false);
            setTheme(dark.title);
          } else {
            setChecked(true);
            setTheme(light.title);
          }
        }}
      />
      <ToggleLabel>Light</ToggleLabel>
    </Container>
  );
};

export default SwitchTheme;
