import { tw } from 'utils/tailwindMerge';
import { SearchResult } from './components/SearchResult';

type MainProps<T extends React.ElementType> = {} & Component<T>;

export function SearchMain({ children, className, ...restProps }: MainProps<'main'>) {
  return (
    <main className={tw('ml-[136px] px-6', className)} {...restProps}>
      {children}
    </main>
  );
}

SearchMain.Result = SearchResult;
