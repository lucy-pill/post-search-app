// React
import { useEffect, useCallback, Fragment } from 'react';

// Zustand
import usePostStore from '../zustand/index';

// Packages
import { useInView } from 'react-intersection-observer';

// Hooks
import usePostFetch from '../hooks/usePostFetch';
import useSearchFetch from '../hooks/useSearchFetch';
import useDidMountEffect from '../hooks/useDidMountEffect';

// Components
import Post from '../components/Post';
import Search from '../components/Search';
import Category from '../components/Category';

// Utils
import debounce from '../utils/debounce';

// Assets
import { Container } from '../assets/styles/pages/Main.styled';

export default function Main() {
  const keyword = usePostStore((state) => state.keyword);
  const ctg = usePostStore((state) => state.ctg);

  const [ref, inView] = useInView({ threshold: 0.4 });

  const {
    data: aData,
    fetchNextPage: aPostFetchNextPage,
    hasNextPage: aPostHasNextPage,
  } = usePostFetch(['aPost'], 'a');

  const {
    data: bData,
    fetchNextPage: bPostFetchNextPage,
    hasNextPage: bPostHasNextPage,
  } = usePostFetch(['bPost'], 'b');

  const {
    data: aSearchData,
    fetchNextPage: aSearchFetchNextPage,
    hasNextPage: aSearchHasNextPage,
    remove: removeASearch,
    refetch: refetchASearch,
  } = useSearchFetch(['aSearch'], 'a', keyword);

  const {
    data: bSearchData,
    fetchNextPage: bSearchFetchNextPage,
    hasNextPage: bSearchHasNextPage,
    remove: removeBSearch,
    refetch: refetchBSearch,
  } = useSearchFetch(['bSearch'], 'b', keyword);

  const searchNewKeyword = useCallback(
    debounce((ctg) => {
      if (ctg === 'a') {
        removeASearch();
        refetchASearch();
      } else {
        removeBSearch();
        refetchBSearch();
      }
    }, 150),
    []
  );

  useEffect(() => {
    if (keyword === '') {
      if (ctg === 'a') {
        if (inView & aPostHasNextPage) {
          aPostFetchNextPage();
        }
      } else {
        if (inView & bPostHasNextPage) {
          bPostFetchNextPage();
        }
      }
    } else {
      if (ctg === 'a') {
        if (inView & aSearchHasNextPage) {
          aSearchFetchNextPage();
        }
      } else {
        if (inView & bSearchHasNextPage) {
          bSearchFetchNextPage();
        }
      }
    }
  }, [inView]);

  useDidMountEffect(() => {
    if (keyword !== '') {
      if (ctg === 'a') {
        searchNewKeyword('a');
      } else {
        searchNewKeyword('b');
      }
    }
  }, [keyword]);

  useEffect(() => {
    if (keyword !== '') {
      if (ctg === 'a') {
        refetchASearch();
      } else {
        refetchBSearch();
      }
    }
  }, [ctg]);

  return (
    <Container>
      <div className='main__div--search--container'>
        <Search />
      </div>
      <div className='main__div--data--container'>
        <div className='main__div--data--navi--container'>
          <Category text={'A Posts'} selected={ctg === 'a' ? true : false} />
          <Category text={'B Posts'} selected={ctg === 'b' ? true : false} />
        </div>
        <div className='main__div--data--post--container'>
          {keyword !== ''
            ? ctg === 'a'
              ? aSearchData?.pages.map((page, idx) => {
                  return (
                    <Fragment key={idx}>
                      {page?.map((post) => {
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
              : bSearchData?.pages.map((page, idx) => {
                  return (
                    <Fragment key={idx}>
                      {page?.map((post) => {
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
            : ctg === 'a'
            ? aData?.pages.map((page, idx) => {
                return (
                  <Fragment key={idx}>
                    {page?.map((post) => {
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
            : bData?.pages.map((page, idx) => {
                return (
                  <Fragment key={idx}>
                    {page?.map((post) => {
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
