import * as React from 'react';

type InputType = {
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({ name, type, value, onChange }) => (
  <input name={name} type={type} value={value} onChange={onChange} />
);

export default Input;
