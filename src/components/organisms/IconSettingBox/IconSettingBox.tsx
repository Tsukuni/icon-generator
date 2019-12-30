import * as React from 'react';
import styled from 'styled-components';
import Card from '../../atoms/Card';
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
  <Card style={{ width: '80%' }}>
    <GridList>
      <GridItem>
        <IconForm
          src={file}
          iconState={iconState}
          iconName={iconName}
          onClick={onClickIcon}
          onChange={onChangeFile}
        />
      </GridItem>
      <GridItem>
        <InputForm
          labelText='名前'
          value={iconState.iconLabel}
          name='iconLabel'
          type='text'
          onChange={onChangeIconState}
        />
        <InputForm
          labelText='枠の色'
          value={iconState.frameColor}
          name='frameColor'
          type='text'
          onChange={onChangeIconState}
        />
        <InputForm
          labelText='枠の太さ'
          value={iconState.frameBorder}
          name='frameBorder'
          type='text'
          onChange={onChangeIconState}
        />
      </GridItem>
    </GridList>
  </Card>
);

const GridList = styled.div`
  display: flex;
  width: 100%;
`

const GridItem = styled.div`
  width: 50%;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 16px;
`

export default IconSettingBox;
