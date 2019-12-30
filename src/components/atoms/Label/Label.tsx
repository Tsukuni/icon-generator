import * as React from 'react';
import styled from 'styled-components';

type LabelType = {
  children: any,
  projectClass?: string
}

const Label: React.FC<LabelType> = ({ children }) => (
  <Box>{children}</Box>
)

const Box = styled.div`
  display: block;
  margin: 0 0 4px 0;
  font-weight: bold;
`

export default Label;
