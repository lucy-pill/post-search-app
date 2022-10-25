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
  const globalCtg = window.sessionStorage.getItem('ctg');
  
  const [keyword, setKeyword] = useState('');
  const [ctg, setCtg] = useState(globalCtg !== null ? globalCtg : 'a');

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

  const aPostData = useInfiniteQuery(
    ['aPosts'],
    ({ pageParam = 0 }) => getAPost(pageParam),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 10) {
          return pages.length;
        } else {
          return undefined;
        }
      },
    }
  );

  const bPostData = useInfiniteQuery(
    ['bPosts'],
    ({ pageParam = 0 }) => getBPost(pageParam),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 10) {
          return pages.length;
        } else {
          return undefined;
        }
      },
    }
  );

  useEffect(() => {
    if (keyword === '') {
      if (ctg === 'a') {
        if (inView & aPostData.hasNextPage) {
          aPostData.fetchNextPage();
        }
      } else {
        if (inView & bPostData.hasNextPage) {
          bPostData.fetchNextPage();
        }
      }
    }
  }, [inView]);

  useEffect(() => {}, [keyword]);

  return (
    <Container>
      <div className='main__div--search--container'>
        <Search keyword={keyword} setKeyword={setKeyword} />
      </div>
      <div className='main__div--data--container'>
        <div className='main__div--data--navi--container'>
          <Navigator
            text={'A Posts'}
            ctg={ctg}
            setCtg={setCtg}
            selected={ctg === 'a' ? true : false}
          />
          <Navigator
            text={'B Posts'}
            ctg={ctg}
            setCtg={setCtg}
            selected={ctg === 'b' ? true : false}
          />
        </div>
        <div className='main__div--data--post--container'>
          {keyword !== '' ? (
            <></>
          ) : ctg === 'a' ? (
            aPostData.data?.pages.map((page, idx) => {
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
            })
          ) : (
            bPostData.data?.pages.map((page, idx) => {
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
            })
          )}
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
      margin-top: 15px;
      border: 1px solid red;
      border-radius: 5px;
      padding: 17.5px;
    }
  }
`;
