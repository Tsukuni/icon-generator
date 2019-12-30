import * as React from 'react';
import styled from 'styled-components';

type TitleType = {
  size: string;
  children: string;
  style?: object;
}

const Title: React.FC<TitleType> = ({ size = 'regular', children, style }) => (
  <Heading theme={{ size, style }}>{children}</Heading>
)

const Heading = styled.h1`
  font-size: ${props => sizeBuilder(props.theme.size)}px;
  font-weight: 500;
  margin: 0 0 24px;
  ${props => props.theme.style};
`
const sizeBuilder = (size: string) => {
  switch (size) {
    case 'small':
      return 18;
    case 'regular':
      return 24;
    case 'large':
      return 30;
    case 'xlarge':
      return 42;
    default:
      return 24;
  }
}

export default Title;
