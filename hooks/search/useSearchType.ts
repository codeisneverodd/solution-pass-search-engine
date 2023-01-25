import { atom, useRecoilState } from 'recoil';

const searchTypeAtom = atom({
  key: 'searchTypeAtom',
  default: 'prob' as SearchType,
});

export const useSearchType = () => {
  const [searchType, setSearchType] = useRecoilState(searchTypeAtom);

  const selectSearchType = (type: SearchType) => {
    setSearchType(type);
  };

  return { searchType, selectSearchType };
};
