import { atom, useRecoilState } from 'recoil';

const searchResultTypeAtom = atom({
  key: 'searchResultTypeAtom',
  default: 'prob' as SearchResult,
});

export const useSearchResultType = () => {
  const [searchResultType, setSearchResultType] = useRecoilState(searchResultTypeAtom);

  const selectSearchResultType = (type: SearchResult) => {
    setSearchResultType(type);
  };

  return { searchResultType, selectSearchResultType };
};
