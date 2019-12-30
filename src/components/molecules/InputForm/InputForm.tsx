import * as React from 'react';
import styled from 'styled-components';

import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

type InputForm = {
  labelText: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputForm> = ({ labelText, name, type, value, onChange }) => (
  <Form>
    <Label>{labelText}</Label>
    <Input name={name} type={type} value={value} onChange={onChange} />
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
