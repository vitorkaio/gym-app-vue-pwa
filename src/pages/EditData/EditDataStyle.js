import styled from 'vue-styled-components';
import { default_color } from '@/components/styles/colors';

// const props = { height: Number };

/* export const Container = styled('div', props)`
  width: 100%;
  height: ${props => props.height}vh;
  display: flex;
  flex-direction: column;
  background-color: ${default_color};
  position: fixed;
  z-index: 99;
`; */

export const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${default_color};
`;

export const Content = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ImgContent = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* padding: 0.5rem; */
`;

export const FormContent = styled('div')`
  display: flex;
`;

export const Footer = styled('div')`
  height: 46px;
  padding-right: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`; 
