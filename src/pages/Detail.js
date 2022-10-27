// React
import axios from 'axios';

// Packages
import { useQuery } from 'react-query';
import { useParams, useNavigate, Link } from 'react-router-dom';

// Assets
import { Container } from '../assets/styles/pages/Detail.styled';

export default function Detail() {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const getPost = async () => {
    return await axios
      .get(`https://recruit-api.yonple.com/recruit/116361/${type}-posts/${id}`)
      .then((res) => res.data);
  };

  const { status, data, remove, refetch } = useQuery('post', getPost);

  const onClickHandle = () => {
    remove();
    refetch();
    navigate(-1, { replace: true });
  };

  return (
    <Container>
      <div className='detail__div--container'>
        {status === 'loading' ? (
          <></>
        ) : (
          <>
            <div className='detail__div--container--title'>
              <span className='detail__span--container--title'>
                {data?.title}
              </span>
            </div>
            <div className='detail__div--container--content'>
              <span className='detail__span--container--content'>
                {data?.content}
              </span>
            </div>
          </>
        )}
      </div>
      <div className='detail__div--container--btn'>
        <button
          className='detail__button--container--btn'
          onClick={onClickHandle}
        >
          뒤로가기
        </button>
      </div>
    </Container>
  );
}