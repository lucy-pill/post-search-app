// Zustand
import usePostStore from '../zustand';

// Packages
import { useNavigate } from 'react-router-dom';

// Assets
import { Container } from '../assets/styles/components/Post.styled';

export default function Post({ id, title, content, type }) {
  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate(`/${type}/${id}`);
  };
  return (
    <Container onClick={onClickHandle}>
      <h3 className='post__span--container--title'>
        <span className='post__span--container--id'>{id}.</span>
        &nbsp;{title}
      </h3>
      <span className='post__span--container--content'>{content}</span>
    </Container>
  );
}
