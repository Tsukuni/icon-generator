import * as React from 'react';
import IconForm from '../../molecules/IconForm';

type InconGeneratorType = {
  file?: string;
  iconName: string;
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const IconGenerator: React.FC<InconGeneratorType> = ({ file, iconName, onChangeFile, onClickIcon }) => (
  <>
    <IconForm src={file} iconName={iconName} onClick={onClickIcon} onChange={onChangeFile} />
  </>
);

export default IconGenerator;
