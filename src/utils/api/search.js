import basic from '../axios/basic';

export const getSearchPostApi = (category, page, keyword) => {
  return basic.get(
    `/recruit/116361/${category}-posts?page=${page}&search=${keyword}`
  );
};
