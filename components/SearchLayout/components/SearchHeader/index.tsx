import { useSearchProb } from 'hooks/search/useSearchProb';
import { useSearchType } from 'hooks/search/useSearchType';
import Link from 'next/link';
import { tw } from 'utils/tailwindMerge';
import Image from 'next/image';
import defaultUserImg from 'public/icons/user.png';
import logoImg from 'public/logo_square.png';

type SearchHeaderProps<T extends React.ElementType> = {} & Component<T>;

export function SearchHeader({ children, className, ...restProps }: SearchHeaderProps<'header'>) {
  const { searchProbs } = useSearchProb();
  const { selectSearchType: selectSearchResultType, searchType: searchResultType } = useSearchType();

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
