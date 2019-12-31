import * as React from 'react';
import styled from 'styled-components';
import IconSettingBox from '../../organisms/IconSettingBox';
import Title from '../../atoms/Title';

type IconGeneratorType = {
  file?: string;
  iconState: any;
  iconName: string;
  onChangeIconState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  onClickSaveButton: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const IconGenerator: React.FC<IconGeneratorType> = ({ file, iconState, iconName, onChangeIconState, onChangeFile, onClickIcon, onClickSaveButton }) => (
  <Container>
    <Title size="regular" style={{ color: 'white', textAlign: 'center' }}>それっぽいの作れるやつ</Title>
    <IconSettingBox
      file={file}
      iconState={iconState}
      iconName={iconName}
      onClickIcon={onClickIcon}
      onChangeIconState={onChangeIconState}
      onChangeFile={onChangeFile}
      onClickSaveButton={onClickSaveButton}
    />
  </Container>
);

const Container = styled.div`
  margin: 40px auto;
`

export default IconGenerator;
