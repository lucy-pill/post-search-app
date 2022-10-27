// Packages
import { useInfiniteQuery } from 'react-query';

// Utils
import { getPostsApi } from '../utils/api/post';

const getPosts = async (category, page) => {
  return await getPostsApi(category, page).then((res) => res.data);
};

const usePostFetch = (key, category) => {
  return useInfiniteQuery(
    key,
    ({ pageParam = 0 }) => getPosts(category, pageParam),
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
};

export default usePostFetch;
