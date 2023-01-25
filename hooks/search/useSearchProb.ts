import { chosungIncludes, hangulIncludes } from '@toss/hangul';
import { atom, useRecoilState, useResetRecoilState } from 'recoil';
import { dummyData } from '../common/useDummyData';

export const resultProbsAtom = atom({
  key: 'resultProbsAtom',
  default: dummyData.probs as Prob[],
});

export const useSearchProb = () => {
  const [searchedProbs, setSearchedProbs] = useRecoilState(resultProbsAtom);
  const resetResult = useResetRecoilState(resultProbsAtom);

  const searchProbs = (keyword: string) => {
    if (keyword === '') resetResult();
    setSearchedProbs(
      dummyData.probs.filter((p) => {
        const origin = p.title.trim().replace(' ', '');
        const target = keyword.trim().replace(' ', '');
        return hangulIncludes(origin, target) || chosungIncludes(origin, target);
      }),
    );
  };

  return { searchedProbs, searchProbs };
};
