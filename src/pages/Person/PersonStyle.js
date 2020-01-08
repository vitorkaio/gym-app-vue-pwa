import styled from 'vue-styled-components';
import { accent_color } from '@/components/styles/colors';

export const Container = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ImgContent = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;
  /* padding: 0.5rem; */
`;

export const InfoContent = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 3rem;
  margin-top: 5rem;
`;

export const ItemInfo = styled('div')`
  margin: 0.3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ItemInfoTitle = styled('span')`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${accent_color};
`;

export const ItemInfoText = styled('span')`
  font-size: 1.2rem;
  font-weight: 500;
  
  margin-left: 0.7rem;

`;

export const LogoutButton = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
`;
