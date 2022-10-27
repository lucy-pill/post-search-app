import styled from 'styled-components';

export const Container = styled.div`
  width: 24rem;
  height: auto;
  .search__div--container {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${(props) =>
      props.focused ? '1px solid rgb(89, 148, 244)' : '1px solid #cecece'};
    border-radius: 5px;
    :hover {
      border: 1px solid rgb(89, 148, 244);
    }
    .search__svg--icon {
      font-size: ${(props) => props.theme.fontSize.xl};
    }
    .search__div--box {
      width: 20rem;
      height: auto;
      position: relative;
      .search__input--box--text {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        font-size: ${(props) => props.theme.fontSize.base};
        line-height: ${(props) => props.theme.lineHeight.base};
        padding: 0 30px 0 5px;
        border: none;
      }
      .search__div--box--icon {
        position: absolute;
        top: 0;
        right: 5px;
        transform: translateY(-50%);
        width: auto;
        height: auto;
        font-size: ${(props) => props.theme.fontSize.xl};
        cursor: pointer;
        .search__svg--box--icon {
          color: rgb(89, 148, 244);
        }
      }
    }
  }
`;