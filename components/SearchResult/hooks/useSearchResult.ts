import { atom, useRecoilState } from 'recoil';

const selectedResultAtom = atom({
  key: 'selectedResultAtom',
  default: 'prob' as SearchResult,
});

export const useSearchResultType = () => {
  const [selectedType, setSelectedType] = useRecoilState(selectedResultAtom);

  const select = (type: SearchResult) => {
    setSelectedType(type);
  };
  return { selectedType, select };
};
