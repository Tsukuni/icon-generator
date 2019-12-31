import * as React from 'react';
import styled from 'styled-components';

import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import HintText from '../../atoms/HintText';

type InputForm = {
  labelText: string;
  hintText?: string;
  placeholder?: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputForm> = ({ labelText, hintText, placeholder, name, type, value, onChange }) => (
  <Form>
    <Label>{labelText}</Label>
    <HintText>{hintText}</HintText>
    <Input name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} />
  </Form>
)

const Form = styled.div`
  position: relative;
  margin: 24px 0 0 0;
  vertical-align: middle;
  &:nth-of-type(1) {
    margin-top: 0;
  }
`

export default InputForm;
