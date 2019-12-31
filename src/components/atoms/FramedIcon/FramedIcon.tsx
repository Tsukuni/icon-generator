import * as React from 'react';
import styled from 'styled-components';
import { ICON_SIZE, ICON_SIZE_SP } from '../../../utils/constants';

type FramedIconType = {
  src?: string;
  frameColor?: string;
  frameBorder?: number;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const FramedIcon: React.FC<FramedIconType> = ({ src, frameColor, frameBorder, onClick }) => (
  <IconBox theme={{ frameColor, frameBorder }}>
    <Image src={src} alt="icon" onClick={onClick}/>
  </IconBox>
);

const IconBox = styled.div`
  position: relative;
  background-color: ${props => props.theme.frameColor || 'orange'};
  width: ${props => props.theme.frameBorder ? ICON_SIZE + props.theme.frameBorder : ICON_SIZE + 4}px;
  height: ${props => props.theme.frameBorder ? ICON_SIZE + props.theme.frameBorder : ICON_SIZE + 4}px;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
  @media (max-width: 400px) {
    width: ${props => props.theme.frameBorder ? ICON_SIZE_SP + props.theme.frameBorder : ICON_SIZE_SP + 4}px;
    height: ${props => props.theme.frameBorder ? ICON_SIZE_SP + props.theme.frameBorder : ICON_SIZE_SP + 4}px;
  }
`

const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 400px) {
    width: ${ICON_SIZE_SP}px;
    height: ${ICON_SIZE_SP}px;
  }
`

export default FramedIcon;
