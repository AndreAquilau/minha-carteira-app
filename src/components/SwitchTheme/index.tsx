import React, { useState } from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

const SwitchTheme: React.FC = (): JSX.Element => {
  const [getChecked, setChecked] = useState(false);

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
          if (!getChecked) {
            setChecked(true);
          } else {
            setChecked(false);
          }
        }}
      />
      <ToggleLabel>Light</ToggleLabel>
    </Container>
  );
};

export default SwitchTheme;
