import * as React from 'react';
import FramedIcon from '../../atoms/FramedIcon';
import styled from 'styled-components';
import FileInput from '../../atoms/FileInput';

type IconFormType = {
  src?: string;
  iconLabel?: string;
  iconName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const IconForm: React.FC<IconFormType> = ({ src, iconLabel, iconName, onClick, onChange }) => (
  <>
    {src ?
      <FramedIconBox>
        <FramedIcon src={src} onClick={onClick} />
        <IconLabel>{iconLabel}</IconLabel>
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
  width: 120px;
  font-weight: bold;
  background-color: white;
  color: orange;
  text-align: center;
`

const EmptyIcon = styled.div`
  position: relative;
  background-color: lightgrey;
  width: 120px;
  height: 120px;
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
  width: 120px;
`

export default IconForm;
