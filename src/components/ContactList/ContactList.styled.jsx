import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 8px;
  height: 180px;
  width: 250px;
  margin: 0 auto;
  position: fixed;
  top: 56%;
  left: 20;
  overflow: auto;
  overflow-y: scroll;
  scrollbar-width: 1px;
  scrollbar-color: transparent transparent;
  font-size: 14px;
  ::-webkit-scrollbar {
    width: 0.5em;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const Item = styled.li``;

export const Button = styled.button`
  margin-left: 10px;
  outline: none;
  border: none;
  font-size: 10px;
  color: #fff;
  background-color: #ff0000;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #d30202;
  }
`;
