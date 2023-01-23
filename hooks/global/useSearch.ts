import { chosungIncludes, hangulIncludes } from '@toss/hangul';
import { dummyData } from 'pages/dummy';
import { atom, useRecoilState } from 'recoil';

type Search = (keyword: string) => void;
type Select = (probId: Prob['id']) => void;

type UseSearch = () => {
  search: Search;
  select: Select;
  resultProbs: Prob[];
  resultSols: Sol[];
  selectedProbId: Prob['id'] | null;
};

export const resultProbsAtom = atom({
  key: 'resultProbsAtom',
  default: dummyData.probs as Prob[],
});
const resultSolsAtom = atom({
  key: 'resultSolsAtom',
  default: [] as Sol[],
});

const selectedProbIdAtom = atom({
  key: 'selectedProbId',
  default: null as Prob['id'] | null,
});

export const useSearch: UseSearch = () => {
  const [resultProbs, setResultProbs] = useRecoilState(resultProbsAtom);
  const [resultSols, setResultSols] = useRecoilState(resultSolsAtom);
  const [selectedProbId, setSelectedProbId] = useRecoilState(selectedProbIdAtom);

  const { probs, sols } = dummyData;

  const search: Search = (keyword) => {
    if (keyword === '') return setResultProbs(probs);
    setResultProbs(
      probs.filter((p) => {
        const origin = p.title.trim().replace(' ', '');
        const target = keyword.trim().replace(' ', '');
        return hangulIncludes(origin, target) || chosungIncludes(origin, target);
      }),
    );
  };
  const select: Select = (probId) => {
    setSelectedProbId(probId);
    setResultSols(sols.filter((d) => d.probId === selectedProbId));
  };

  return { resultProbs, resultSols, selectedProbId, search, select };
};
