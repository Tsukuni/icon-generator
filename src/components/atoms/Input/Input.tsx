import * as React from 'react';
import styled from 'styled-components';

type InputType = {
  name: string;
  type: string;
  value: string | number;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({ name, type, value, placeholder, onChange }) => (
  <InputBox
    name={name}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange} />
);

const InputBox = styled.input`
  position: relative;
  display: block;
  background: #fff;
  border: solid 1px #ddd;
  font-size: 16px;
  border-radius: 3px;
  padding: 10px 12px;
  width: 100%;
  box-sizing: border-box;
  min-height: 39px;
  &:focus {
    outline: none;
    border-color: #0d6780;
  }
`

export default Input;
