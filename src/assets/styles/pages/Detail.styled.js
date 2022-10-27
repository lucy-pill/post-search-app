import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 35px;
  .detail__div--container {
    width: 100%;
    height: auto;
    max-width: 930px;
    margin-top: 70px;
    margin-bottom: 14px;
    padding: 35px;
    border: 1px solid rgb(229, 231, 235);
    .detail__div--container--title {
      width: 100%;
      display: flex;
      justify-content: center;
      .detail__span--container--title {
        width: auto;
        height: auto;
        font-size: ${(props) => props.theme.fontSize.xxxxl};
        line-height: ${(props) => props.theme.lineHeight.base};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        margin-bottom: 35px;
      }
    }
    .detail__div--container--content {
      width: 100%;
      height: auto;
      .detail__span--container--content {
        width: auto;
        height: auto;
        font-size: ${(props) => props.theme.fontSize.base};
        line-height: ${(props) => props.theme.lineHeight.base};
      }
    }
  }
  .detail__div--container--btn {
    width: 100%;
    height: auto;
    max-width: 930px;
    .detail__button--container--btn {
      width: auto;
      height: auto;
      padding: 10.5px 28px;
      border: none;
      border-radius: 5px;
      background-color: rgb(64, 135, 247);
      color: #ffffff;
      cursor: pointer;
      font-size: ${(props) => props.theme.fontSize.base};
      :hover {
        background-color: rgba(64, 135, 247, 0.5);
      }
    }
  }
`;