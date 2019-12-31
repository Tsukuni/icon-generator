import * as React from 'react';
import styled from 'styled-components';
import Card from '../../atoms/Card';
import IconForm from '../../molecules/IconForm';
import InputForm from '../../molecules/InputForm';
import Button from '../../atoms/Button';

type IconSettingBoxType = {
  file?: string;
  iconState: any;
  iconName: string;
  onChangeIconState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const IconSettingBox: React.FC<IconSettingBoxType> = ({ file, iconState, iconName, onChangeIconState, onChangeFile, onClickIcon }) => (
  <Card style={{ width: '60%', maxWidth: '550px', minWidth: '250px' }}>
    <GridList>
      <GridItem>
        <IconForm
          src={file}
          iconState={iconState}
          iconName={iconName}
          onClick={onClickIcon}
          onChange={onChangeFile}
        />
        <ButtonWrapper>
          <Button label='保存' onClick={() => "a"} />
        </ButtonWrapper>
      </GridItem>
      <GridItem>
        <InputForm
          labelText='名前'
          placeholder='TSUKUNIN'
          value={iconState.iconLabel}
          name='iconLabel'
          type='text'
          onChange={onChangeIconState}
        />
        <InputForm
          labelText='枠の色'
          hintText='カラーコード入れてね'
          placeholder='#fff or orange'
          value={iconState.frameColor}
          name='frameColor'
          type='text'
          onChange={onChangeIconState}
        />
        <InputForm
          labelText='枠の太さ'
          hintText='1px〜30pxの間で入力してね。単位はいらないよ'
          placeholder='4'
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

const ButtonWrapper = styled.div`
  margin-top: 49px;
`

export default IconSettingBox;
