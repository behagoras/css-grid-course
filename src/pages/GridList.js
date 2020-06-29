import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  /* background: red; */
  border:1px solid blue;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(auto-fit, minmax(100px,1fr)); */
  grid-gap: 8px;
`;

const Element1 = styled.div`
  background: green;
`;
const Element2 = styled.div`
  background: blue;
  grid-column-start: span 2;
`;

const SuperResponsive = () => {
  return (
    <List>
      <Element1>Hola</Element1>
      <Element2>Hola</Element2>
      <Element1>Hola</Element1>
      <Element2>Hola</Element2>
      <Element1>Hola</Element1>
      <Element1>Hola</Element1>
      <Element1>Hola</Element1>
      <Element1>Hola</Element1>
      <Element2>Hola</Element2>
    </List>
  );
};

export default SuperResponsive;
