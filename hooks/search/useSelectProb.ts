import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { dummyData } from '../common/useDummyData';
import { useSearchType } from './useSearchType';

const selectedProbAtom = atom({
  key: 'selectedProbAtom',
  default: null as Prob | null,
});

export const useSelectProb = () => {
  const [selectedProb, setSelectedProb] = useRecoilState(selectedProbAtom);
  const { selectSearchType: selectSearchResultType } = useSearchType();

  const selectProb = (probId: Prob['id']) => {
    const prob = dummyData.probs.find((prob) => prob.id === probId);
    if (prob) setSelectedProb(prob);
    selectSearchResultType('sol');
  };

  return { selectedProb, selectProb };
};
