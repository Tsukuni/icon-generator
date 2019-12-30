import * as React from 'react';
import styled from 'styled-components';

type CardType = {
  style?: object;
  children: any;
}

const Card: React.FC<CardType> = ({ style, children }) => (
  <Wrapper theme={{ style }}>{children}</Wrapper>
)

const Wrapper = styled.div`
  background: white;
  border-radius: 4px;
  padding: 24px;
  margin: auto;
  ${props => props.theme.style};
`

export default Card;
