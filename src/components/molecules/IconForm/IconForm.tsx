import * as React from 'react';
import FramedIcon from '../../atoms/FramedIcon';
import styled from 'styled-components';
import FileInput from '../../atoms/FileInput';
import { ICON_SIZE, ICON_SIZE_SP } from '../../../utils/constants';

type IconFormType = {
  src?: string;
  iconState: any;
  iconName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const IconForm: React.FC<IconFormType> = ({ src, iconState, iconName, onClick, onChange }) => (
  <>
    {src ?
      <FramedIconBox>
        <FramedIcon src={src} onClick={onClick} iconLabel={iconState.iconLabel} frameColor={iconState.frameColor} frameBorder={iconState.frameBorder}/>
      </FramedIconBox> :
      <EmptyIcon onClick={onClick}>
        <Label>画像選択してね</Label>
      </EmptyIcon>
    }
    <FileInput name={iconName} onChange={onChange} hidden={true} />
  </>
)

const FramedIconBox = styled.div`
  position: relative;
`

const EmptyIcon = styled.div`
  position: relative;
  background-color: lightgrey;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  border-radius: 50%;
  margin: auto;
  @media (max-width: 400px) {
    width: ${ICON_SIZE_SP}px;
    height: ${ICON_SIZE_SP}px;
  }
`
const Label = styled.span`
  display: inline-block;
  text-align: center;
  position: absolute;
  font-size: 8px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 8px;
  width: ${ICON_SIZE}px;
  @media (max-width: 400px) {
    width: ${ICON_SIZE_SP}px;
  }
`

export default IconForm;
