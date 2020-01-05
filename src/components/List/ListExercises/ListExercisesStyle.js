import styled from 'vue-styled-components';

export const Container = styled('div')`
  flex: 1;
  overflow-y: scroll;
`;

export const ListWrapper = styled('div')`
  margin: 1rem 0.6rem;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const Title = styled('span')`
  font-size: 14;
  font-weight: bold;
`;

export const ListContent = styled('div')`
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ItemContent = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    margin-left: 0.2rem;
  }

`;

export const ItemText = styled('span')`
  font-size: 12px;
  font-weight: 800;
`;

export const ListFooter = styled('div')`
  padding: 0.5rem 0 0.5rem 0.2rem;
  word-wrap: break-word;
  text-justify: auto;
`;

export const FooterItemText = styled('span')`
  font-size: 10px;
  font-weight: 500;

`;
