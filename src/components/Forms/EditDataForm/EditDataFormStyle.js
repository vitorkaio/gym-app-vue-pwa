import styled from 'vue-styled-components';
// import { default_color } from '@/components/styles/colors';

export const Container = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InputForms = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

export const ActionsForms = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;
