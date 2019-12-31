import * as React from 'react';
import styled from 'styled-components';

type ButtonType = {
  label: string;
  onClick: any;
  theme?: object;
}

const Button: React.FC<ButtonType> = ({ label, onClick, theme }) => (
  <ButtonTag onClick={onClick} theme={theme}>{label}</ButtonTag>
);


const ButtonTag = styled.button`
  display: block;
  width: 100%;
  padding: 12px 24px;
  margin: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: rgb(19, 59, 28);
  border-color: rgb(19, 59, 28);
  background-color: white;
  text-align: center;
  outline: none;
  border-radius: 3px;
  transition: all 0.2s;
  &:hover {
    background-color: rgb(19, 59, 28);
    border: solid 1px transparent;
    color: white;
  }
`

export default Button
