import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 6em;
  margin-left: 6em;
  margin-right: 6em;
`; 
export const About = () => (
  <GridWrapper>
    <h2>Developed by Sardendu Bharti, More detail will appear here</h2>
  </GridWrapper>
)