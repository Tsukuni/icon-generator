import * as React from 'react';
import IconSettingBox from '../../organisms/IconSettingBox';

type IconGeneratorType = {
  file?: string;
  iconState: any;
  iconName: string;
  onChangeIconState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const IconGenerator: React.FC<IconGeneratorType> = ({ file, iconState, iconName, onChangeIconState, onChangeFile, onClickIcon }) => (
  <>
    <IconSettingBox
      file={file}
      iconState={iconState}
      iconName={iconName}
      onClickIcon={onClickIcon}
      onChangeIconState={onChangeIconState}
      onChangeFile={onChangeFile}
    />
  </>
);

export default IconGenerator;
