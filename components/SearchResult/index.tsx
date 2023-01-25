import { tw } from 'utils/tailwindMerge';
import { TypeSelectBar } from './components/TypeSelectBar';
import { ResultProb } from './components/ResultProb/index';
import { ResultSol } from './components/ResultSol';
import { ResultWrite } from './components/ResultWrite';
import { useSearchResultType } from 'hooks/global/useSearchResultType';

type SearchResultProps<T extends React.ElementType> = {} & Component<T>;

export function SearchResult({ children, className, ...restProps }: SearchResultProps<'div'>) {
  const { searchResultType } = useSearchResultType();
  const Result = searchResultType === 'prob' ? ResultProb : searchResultType === 'sol' ? ResultSol : ResultWrite;

  return (
    <div className={tw('', className)} {...restProps}>
      <TypeSelectBar />
      <Result />
    </div>
  );
}
