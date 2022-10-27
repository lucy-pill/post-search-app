import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 35px;
  .main__div--search--container {
    margin-top: 50px;
  }
  .main__div--data--container {
    width: 100%;
    max-width: 930px;
    margin-top: 50px;
    .main__div--data--navi--container {
      width: 100%;
      height: auto;
      display: flex;
      border-bottom: 1px solid #cecece;
    }
    .main__div--data--post--container {
      width: 100%;
      height: auto;
      min-height: 37px;
      margin-top: 15px;
      border-radius: 5px;
      padding: 17.5px;
      border: 1px solid #cecece;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1) inset;
    }
  }
`;
