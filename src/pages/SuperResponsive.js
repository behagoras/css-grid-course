import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  /* background: red; */
  border:1px solid blue;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px,1fr));
  grid-gap: 8px;
`;

const Element = styled.div`
  border:1px solid red;
`;

const SuperResponsive = () => {
  return (
    <List>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
      <Element>Hola</Element>
    </List>
  );
};

export default SuperResponsive;
