// React
import { useState, useEffect, Fragment } from 'react';

// Packages
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';

// Components
import Post from '../components/Post';
import Search from '../components/Search';
import Navigator from '../components/Navigator';

import styled from 'styled-components';

export default function Main() {
  const [ctg, setCtg] = useState('a');
  const [page, setPage] = useState(0);

  const [ref, inView] = useInView({ threshold: 0.4 });

  const getAPost = async (page) => {
    return await axios
      .get(`https://recruit-api.yonple.com/recruit/116361/a-posts?page=${page}`)
      .then((res) => res.data);
  };
  const getBPost = async (page) => {
    return await axios
      .get(`https://recruit-api.yonple.com/recruit/116361/b-posts?page=${page}`)
      .then((res) => res.data);
  };

  const {
    data,
    status,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['posts'],
    async ({ pageParam = 0 }) => {
      if (ctg === 'a') return await getAPost(pageParam);
      else return await getBPost(pageParam);
    }
    //
  );

  // const handleScroll = () => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     setPage((page) => page + 1);
  //     console.log('bottom');
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log('BackEnd has next page.');
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <div className='main__div--search--container'>
        <Search />
      </div>
      <div className='main__div--data--container'>
        <div className='main__div--data--navi--container'>
          <Navigator
            text={'A Posts'}
            ctg={ctg}
            setCtg={setCtg}
            setPage={setPage}
            selected={ctg === 'a' ? true : false}
          />
          <Navigator
            text={'B Posts'}
            ctg={ctg}
            setCtg={setCtg}
            setPage={setPage}
            selected={ctg === 'b' ? true : false}
          />
        </div>
        <div className='main__div--data--post--container'>
          {data?.pages?.map((page, idx) => {
            return (
              <Fragment key={idx}>
                {page.map((post) => {
                  return (
                    <Post
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      content={post.content}
                      type={post.type}
                    />
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className='main__div--container--footer' ref={ref} />
    </Container>
  );
}

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
      margin-top: 25px;
      border: 1px solid red;
      border-radius: 5px;
      padding: 17.5px;
    }
  }
  .main__div--container--footer {
      display: none;
    }
`;
