import * as React from 'react';
import styled from 'styled-components';

type HintTextType = {
  children: any,
}

const HintText: React.FC<HintTextType> = ({ children }) => (
  <Hint>{children}</Hint>
);

const Hint = styled.p`
  color: #aaaaaa;
  margin: 4px 0;
  font-size: 8px;
`

export default HintText;
