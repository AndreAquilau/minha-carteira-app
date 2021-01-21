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

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors?.info,
    offColor: theme.colors?.warning,
  }),
)<ReactSwitchProps>``;
