import * as React from 'react';
import styled from 'styled-components';
import { ICON_SIZE, ICON_SIZE_SP } from '../../../utils/constants';

type FramedIconType = {
  src?: string;
  frameColor?: string;
  frameBorder?: number;
  iconLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const FramedIcon: React.FC<FramedIconType> = ({ src, iconLabel, frameColor, frameBorder, onClick }) => (
  <IconBox id="framedIcon" theme={{ frameColor, frameBorder }}>
    <Image src={src} alt="icon" onClick={onClick}/>
    <IconLabel color={frameColor}>{iconLabel}</IconLabel>
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

const IconLabel = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 4px;
  width: 100%;
  font-weight: 600;
  color: ${props => props.color || 'orange'};
  text-align: center;
  text-shadow:0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white,0 0 2px white;
`

export default FramedIcon;
