import styled from 'vue-styled-components';

import { accent_color_secondary, text_color } from '@/components/styles/colors';

export const Container = styled('div')`
  margin-top: 1rem;
  padding-left: 0.8rem;
  padding-right: 1.1rem;
  height: 60px;

  display: flex;
  flex-direction: row;

  &:after {
  background: #90EE90;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
  }

`;

export const Mark = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3px;
`;

export const MarkInside = styled('div')`
  background-color: ${accent_color_secondary};
  width: 3px;
  height: 40px;
`;

export const CenterComponent = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 0.8rem;  
`;

export const RightComponent = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled('span')`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 1rem;
  color: ${text_color};
`;
