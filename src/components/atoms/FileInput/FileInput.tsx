import * as React from 'react';

type FileInputType = {
  name: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputType> = ({ name, value, onChange }) => (
  <input name={name} type='file' value={value} onChange={onChange} />
);

export default FileInput;
