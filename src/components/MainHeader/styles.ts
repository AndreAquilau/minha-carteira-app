import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;

  //Config Display
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  //Colors
  background-color: ${(props) => props.theme.colors?.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors?.gray};
`;

export const Profile = styled.div`
  //Config Display
  display: flex;
  flex-direction: column;

  //Colors
  color: ${(props) => props.theme.colors?.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
