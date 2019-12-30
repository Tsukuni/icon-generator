import * as React from 'react';

type FileInputType = {
  name: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hidden?: boolean;
}

const FileInput: React.FC<FileInputType> = ({ name, value, onChange, hidden }) => (
  <input name={name} type='file' value={value} onChange={onChange} hidden={hidden} />
);

export default FileInput;
