import basic from '../axios/basic';

export const getPostsApi = (category, page) => {
  return basic.get(`/recruit/116361/${category}-posts?page=${page}`);
};
