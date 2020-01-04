import styled from 'vue-styled-components';
import { accent_color, default_color } from '@/components/styles/colors';

export const Container = styled('div')`
  width: 100%;
  height: 56px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${default_color};
`;

export const CenterTitle = styled('div')`
  flex: 2;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Title = styled('span')`
  font-size: 22px;
  font-weight: bold;
  color: ${accent_color}
`;

export const LeftIcon = styled('div')`
  flex: 1;
  margin-left: 15px;
`;

export const RightIcons = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
`;
