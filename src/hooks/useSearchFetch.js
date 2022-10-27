// Packages
import { useInfiniteQuery } from 'react-query';

// Utils
import { getSearchPostApi } from '../utils/api/search';

const getASearchPosts = async (category, page, keyword) => {
  return await getSearchPostApi(category, page, keyword).then((res) => res.data);
};

const useFetchASearch = (key, category, keyword) => {
  return useInfiniteQuery(
    key,
    ({ pageParam = 0 }) => getASearchPosts(category, pageParam, keyword),
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

export default useFetchASearch;
