import * as React from 'react';
import styled from 'styled-components';

type IconType = {
  src?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const Icon: React.FC<IconType> = ({ src, onClick }) => (
  <Image src={src} alt="icon" onClick={onClick}/>
);

const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
`

export default Icon;
