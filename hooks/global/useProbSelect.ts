import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { dummyData } from './useDummyData';
import { useSearchResultType } from './useSearchResultType';

const selectedProbAtom = atom({
  key: 'selectedProbAtom',
  default: null as Prob | null,
});

export const useProbSelect = () => {
  const [selectedProb, setSelectedProb] = useRecoilState(selectedProbAtom);
  const { selectSearchResultType } = useSearchResultType();

  const selectProb = (probId: Prob['id']) => {
    const prob = dummyData.probs.find((prob) => prob.id === probId);
    if (prob) setSelectedProb(prob);
    selectSearchResultType('sol');
  };

  return { selectedProb, selectProb };
};
