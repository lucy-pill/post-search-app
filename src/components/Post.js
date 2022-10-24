import styled from 'styled-components';

export default function Post({ id, title, content, type }) {
  return (
    <Container>
      <h3 className='post__span--container--title'>
        <span className='post__span--container--id'>{id}.</span>
        &nbsp;{title}
      </h3>
      <span className='post__span--container--content'>{content}</span>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  padding: 17.5px;
  cursor: pointer;
  :hover {
    background-color: rgb(229, 231, 235);
  }
  .post__span--container--title {
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: ${(props) => props.theme.lineHeight.base};
    .post__span--container--id {
      color: rgb(59, 130, 246);
    }
  }
  .post__span--container--content {
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: ${(props) => props.theme.lineHeight.sm};
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;
