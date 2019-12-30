import * as React from 'react';
import styled from 'styled-components';

type IconType = {
  src?: string;
}

const Icon: React.FC<IconType> = ({ src }) => (
  <Image src={src} alt="icon" />
);

const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
`

export default Icon;
