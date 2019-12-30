import * as React from 'react';
import FramedIcon from '../../atoms/FramedIcon';
import styled from 'styled-components';
import FileInput from '../../atoms/FileInput';
import { ICON_SIZE } from '../../../utils/constants';

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
        <FramedIcon src={src} onClick={onClick} frameColor={iconState.frameColor} frameBorder={iconState.frameBorder}/>
        <IconLabel color={iconState.frameColor}>{iconState.iconLabel}</IconLabel>
      </FramedIconBox> :
      <EmptyIcon onClick={onClick}>
        <Label>クリックしてください</Label>
      </EmptyIcon>
    }
    <FileInput name={iconName} onChange={onChange} hidden={true} />
  </>
)

const FramedIconBox = styled.div`
  position: relative;
`

const IconLabel = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 0;
  width: ${ICON_SIZE}px;
  font-weight: bold;
  background-color: white;
  color: ${props => props.color || 'orange'};
  text-align: center;
`

const EmptyIcon = styled.div`
  position: relative;
  background-color: lightgrey;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  border-radius: 50%;
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
`

export default IconForm;
