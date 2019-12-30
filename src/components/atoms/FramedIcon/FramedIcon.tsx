import * as React from 'react';
import styled from 'styled-components';

type FramedIconType = {
  src?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const FramedIcon: React.FC<FramedIconType> = ({ src, onClick }) => (
  <IconBox>
    <Image src={src} alt="icon" onClick={onClick}/>
  </IconBox>
);

const IconBox = styled.div`
  position: relative;
  background-color: orange;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 116px;
  height: 116px;
  border-radius: 50%;
  object-fit: cover;
`

export default FramedIcon;
