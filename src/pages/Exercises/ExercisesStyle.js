import styled from 'vue-styled-components';
import { default_color } from '@/components/styles/colors';


export const Container = styled('div')`
  width: 100%;
  height: 100vh;
  background-color: ${default_color};

  display: flex;
  flex-direction: column;
`;

export const Content = styled('div')`
  flex: 2;
  display: flex;
  overflow-y: scroll;
`;

export const Footer = styled('div')`
  height: 46px;
  padding-right: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`; 
