import create from 'zustand';

const usePostStore = create((set) => ({
  keyword: '',
  ctg: 'a',
  setCtg: (newCtg) => {
    set({ ctg: newCtg });
  },
  setKeyword: (newKeyword) => {
    set({ keyword: newKeyword });
  },
}));

export default usePostStore;
