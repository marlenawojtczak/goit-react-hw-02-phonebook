import styled from 'styled-components';
import phoneImage from './phone.png';

export const Container = styled.div`
  font-family: 'Roboto Flex';
  width: 300px;
  height: 640px;
  background-image: url(${phoneImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 270px;
  position: relative;
`;

export const AppTitle = styled.h1`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
`;

export const ListTitle = styled.h2`
  position: fixed;
  top: 40%;
  left: 0;
  width: 100%;
`;
