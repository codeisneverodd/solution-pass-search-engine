import { useProbSearch } from 'hooks/global/useProbSearch';
import { useSearchResultType } from 'hooks/global/useSearchResultType';
import Image from 'next/image';
import Link from 'next/link';
import defaultUserImg from 'public/icons/user.png';
import logoImg from 'public/logo_square.png';
import { RecoilRoot } from 'recoil';
import { tw } from 'utils/tailwindMerge';

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
type SearchHeaderProps<T extends React.ElementType> = {} & Component<T>;

function Header({ children, className, ...restProps }: SearchHeaderProps<'header'>) {
  const { searchProbs } = useProbSearch();
  const { selectSearchResultType, searchResultType } = useSearchResultType();

  return (
    <header
      className={tw('fixed top-0 flex h-[80px] w-full min-w-[1280px] items-center  bg-bg pl-5 pr-4 ', className)}
      {...restProps}
    >
      <Link className="mr-20 " href="/">
        <Image src={logoImg} alt="Solution Pass 로고" width={36} height={36} />
      </Link>
      <input
        className="h-[40px] w-[620px] rounded-full bg-fg pl-6 text-[16px] shadow-google outline-none"
        onChange={(e) => {
          searchProbs(e.target.value);
          if (searchResultType !== 'prob') selectSearchResultType('prob');
        }}
      />
      <Link className="ml-auto" href="/">
        <Image src={defaultUserImg} alt="프로필 이미지" width={32} height={32} />
      </Link>
    </header>
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

type AsideProps<T extends React.ElementType> = {} & Component<T>;

function Aside({ children, className, ...restProps }: AsideProps<'aside'>) {
  return (
    <aside className={tw('ml-9 mt-12', className)} {...restProps}>
      {children}
    </aside>
  );
}

SearchLayout.Header = Header;
SearchLayout.Main = Main;
SearchLayout.Aside = Aside;
