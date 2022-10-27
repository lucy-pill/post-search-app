import styled from 'styled-components';

export const Container = styled.div`
  width: 73px;
  height: auto;
  padding: 10.5px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: rgb(243, 244, 246);
  }
  .category__span--text {
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: ${(props) => props.theme.lineHeight.sm};
    color: ${(props) => (props.selected ? 'rgb(59, 130, 246)' : 'black')};
    :hover {
      color: rgb(142, 191, 245);
    }
  }
`;