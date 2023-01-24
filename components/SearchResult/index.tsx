import { tw } from 'utils/tailwindMerge';
import { TypeSelectBar } from './TypeSelectBar';
import { ResultProb } from './ResultProb/index';
import { useSearch } from 'hooks/global/useSearch';
import { useSearchResultType } from './hooks/useSearchResult';
import { ResultSol } from './ResultSol';
import { ResultWrite } from './ResultWrite';

type SearchResultProps<T extends React.ElementType> = {} & Component<T>;

export function SearchResult({ children, className, ...restProps }: SearchResultProps<'div'>) {
  const { selectedType } = useSearchResultType();
  const Result = selectedType === 'prob' ? ResultProb : selectedType === 'sol' ? ResultSol : ResultWrite;

  return (
    <div className={tw('', className)} {...restProps}>
      <TypeSelectBar />
      <Result />
    </div>
  );
}
