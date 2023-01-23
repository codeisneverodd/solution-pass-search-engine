import { tw } from 'utils/tailwindMerge';
import { TypeSelectBar } from './TypeSelectBar';

type SearchResultProps<T extends React.ElementType> = {} & Component<T>;

export function SearchResult({ children, className, ...restProps }: SearchResultProps<'div'>) {
  return (
    <div className={tw('', className)} {...restProps}>
      <TypeSelectBar />
      {children}
    </div>
  );
}
