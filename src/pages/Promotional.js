import React from 'react';
import styled from 'styled-components';

import { Promotional1 } from '../assets/images/imageRepository';

const PromotionalWrapper = styled.div`
  width: 100%;
  height: 640px;
  object-fit: cover;
  background: url(${Promotional1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:grid;
  grid-template-columns:1fr repeat(3, 2fr) 1fr;
  grid-template-rows:.5fr repeat(3, 1fr) .5fr;

`;

const Title = styled.h1`
  font-size: 72px;
  color: #FFFFFF;
  text-shadow: 0px 1px 4px rgba(0,0,0,0.46);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 100%;
  grid-column-start: 4;
  grid-row-start: 2;
`;

export default function Promotional() {
  return (
    <PromotionalWrapper>
      <Title>
        <span>
          Social media made easy, for business.
        </span>
      </Title>
    </PromotionalWrapper>
  );
}
