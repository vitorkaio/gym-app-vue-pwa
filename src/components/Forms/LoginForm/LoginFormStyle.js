import styled from 'vue-styled-components';
// import { default_color } from '@/components/styles/colors';

export const Container = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled('form')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

`;

export const Footer = styled('div')`
  height: 60px;
  padding-bottom: 0.1rem;
`;

export const InputItem = styled('div')`
  width: 90%;
  max-width: 500px;
  margin: 0.5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
