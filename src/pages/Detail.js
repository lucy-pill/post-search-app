// React
import axios from 'axios';
import { useEffect } from 'react';

// Packages
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

export default function Detail() {
  const { type, id } = useParams();

  const getPost = async () => {
    return await axios.get(
      `https://recruit-api.yonple.com/recruit/116361/${type}-posts/${id}`
    );
  };

  const { status, data, error } = useQuery('post', getPost);

  return (
    <Container>
      <div className='detail__div--container'></div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .detail__div--container {
    width: 100%;
    height: auto;
    max-width: 930px;
    margin-top: 70px;
    margin-bottom: 14px;
    border: 1px solid rgb(229, 231, 235);
  }
`;
