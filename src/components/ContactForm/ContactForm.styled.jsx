import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 20%;
`;
export const Label = styled.label`
  display: flex;
  margin: 0 auto;
`;

export const Input = styled.input`
  margin-left: ${props => (props.first ? '23px' : '8px')};
`;

export const Button = styled.button`
  width: 240px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  outline: none;
  border: none;
  color: #fff;
  background-color: #009c4b;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #00953c;
  }
`;
