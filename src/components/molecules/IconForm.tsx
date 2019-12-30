import * as React from 'react';
import Icon from '../atoms/Icon';
import styled from 'styled-components';
import FileInput from '../atoms/FileInput';

type IconFormType = {
  src?: string;
  iconName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const IconForm: React.FC<IconFormType> = ({ src, iconName, onClick, onChange }) => (
  <>
    {src ? <Icon src={src} onClick={onClick}/> :
      <EmptyIcon onClick={onClick}>
        クリックしてください
      </EmptyIcon>
    }
    <FileInput name={iconName} onChange={onChange} hidden={true} />
  </>
)

const EmptyIcon = styled.div`
  background-color: lightgrey;
  width: 160px;
  height: 160px;
  border-radius: 50%;
`

export default IconForm;
