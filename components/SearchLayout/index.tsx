import { SearchHeader } from 'components/SearchHeader';
import { tw } from 'utils/tailwindMerge';

type SearchLayoutProps<T extends React.ElementType> = {} & Component<T>;

export function SearchLayout({ children, className, ...restProps }: SearchLayoutProps<'div'>) {
  return (
    <>
      <SearchHeader />
      <div className={tw('mt-20 flex w-full', className)} {...restProps}>
        {children}
      </div>
    </>
  );
}

type MainProps<T extends React.ElementType> = {} & Component<T>;

function Main({ children, className, ...restProps }: MainProps<'main'>) {
  return (
    <main className={tw('ml-[136px] px-6', className)} {...restProps}>
      {children}
    </main>
  );
}

SearchLayout.Main = Main;

type AsideProps<T extends React.ElementType> = {} & Component<T>;

function Aside({ children, className, ...restProps }: AsideProps<'aside'>) {
  return (
    <aside className={tw('ml-9 mt-12', className)} {...restProps}>
      {children}
    </aside>
  );
}

SearchLayout.Aside = Aside;
