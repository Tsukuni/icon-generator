import * as React from 'react';
import FileInput from '../../atoms/FileInput';
import Icon from '../../atoms/Icon';

type InconGeneratorType = {
  file?: string;
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconGenerator: React.FC<InconGeneratorType> = ({ file, onChangeFile }) => (
  <>
    <FileInput name='icon' value="" onChange={onChangeFile} />
    <Icon src={file} />
  </>
);

export default IconGenerator;
