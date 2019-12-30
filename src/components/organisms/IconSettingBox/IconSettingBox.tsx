import * as React from 'react';
import styled from 'styled-components';

import IconForm from '../../molecules/IconForm';
import InputForm from '../../molecules/InputForm';

type IconSettingBoxType = {
  file?: string;
  iconState: any;
  iconName: string;
  onChangeIconState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const IconSettingBox: React.FC<IconSettingBoxType> = ({ file, iconState, iconName, onChangeIconState, onChangeFile, onClickIcon }) => (
  <>
    <IconForm
      src={file}
      iconLabel={iconState.label}
      iconName={iconName}
      onClick={onClickIcon}
      onChange={onChangeFile}
    />
    <InputForm
      labelText='名前'
      value={iconState.label}
      name='label'
      type='text'
      onChange={onChangeIconState}
    />
  </>
);

export default IconSettingBox;
