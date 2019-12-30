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
      iconState={iconState}
      iconName={iconName}
      onClick={onClickIcon}
      onChange={onChangeFile}
    />
    <InputForm
      labelText='名前'
      value={iconState.iconLabel}
      name='iconLabel'
      type='text'
      onChange={onChangeIconState}
    />
    <InputForm
      labelText='色'
      value={iconState.frameColor}
      name='frameColor'
      type='text'
      onChange={onChangeIconState}
    />
    <InputForm
      labelText='ボーダー'
      value={iconState.frameBorder}
      name='frameBorder'
      type='text'
      onChange={onChangeIconState}
    />
  </>
);

export default IconSettingBox;
