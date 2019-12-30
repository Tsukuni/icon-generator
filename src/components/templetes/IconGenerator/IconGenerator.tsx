import * as React from 'react';
import FileInput from '../../atoms/FileInput';

type InconGeneratorType = {
  file: any;
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconGenerator: React.FC<InconGeneratorType> = ({ file, onChangeFile }) => (
  <>
    <FileInput name='icon' value="" onChange={onChangeFile} />
    <img src={file} alt="" />
  </>
);

export default IconGenerator;
