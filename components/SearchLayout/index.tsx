import { RecoilRoot } from 'recoil';
import { tw } from 'utils/tailwindMerge';
import { SearchAside } from './components/SearchAside';
import { SearchHeader } from './components/SearchHeader';
import { SearchMain } from './components/SearchMain';

type SearchLayoutProps<T extends React.ElementType> = {} & Component<T>;

export function SearchLayout({ children, className, ...restProps }: SearchLayoutProps<'div'>) {
  return (
    <RecoilRoot>
      <div className={tw('mt-20 flex w-full', className)} {...restProps}>
        {children}
      </div>
    </RecoilRoot>
  );
}

SearchLayout.Header = SearchHeader;
SearchLayout.Main = SearchMain;
SearchLayout.Aside = SearchAside;
