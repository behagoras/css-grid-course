import React from 'react';
import styled from 'styled-components';

const Parent = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  /* background: red; */
  border:1px solid blue;
  display: grid;
  grid-template-columns:200px 1fr;
  grid-template-rows:100px 1fr 100px;
  grid-gap: 8px;
  grid-template-areas: "sidebar header"
                        "sidebar content"
                        "sidebar footer";
  @media screen and (max-width:800px){
    grid-template-columns: 1fr;
    grid-template-areas: "header"
                        "content"
                        "footer";
  }
`;

const Header = styled.div`
  border:1px solid red;
  grid-area: header;
  display: grid;
  grid-template-columns: 200px 1fr;
  justify-content:space-between;
  padding: 10px;
  @media screen and (max-width:800px){
    grid-template-columns: 200px 50px;;
  }
`;
const Sidebar = styled.div`
  background:blue;
  border:1px solid red;
  grid-area:sidebar;
`;
const Content = styled.div`
  background: pink;
  border:1px solid red;
  grid-area: content;
`;
const Footer = styled.div`
  background: yellow;
  border:1px solid red;
  grid-area: footer;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & li {
    list-style-type: none;
    margin-right: 8px;
  }
  @media screen and (max-width:800px){
    display: none;
  }
`;

const Hamburger = styled.div`
  background: red;
  display: none;
  /* width:50px;
  height:50px; */
  border: 1px solid blue;
  @media screen and (max-width:800px){
    display: block
  }
`;

const Logo = styled.div`
  background: lightcoral;
`;

const FlexItems = () => {
  return (
    <Parent>
      <Header>
        <Logo />
        <Menu>
          <li>Boton 1</li>
          <li>Boton 2</li>
          <li>Boton 3</li>
          <li>Boton 4</li>
        </Menu>
        <Hamburger />
      </Header>
      <Sidebar />
      <Content />
      <Footer />
    </Parent>
  );
};

export default FlexItems;
