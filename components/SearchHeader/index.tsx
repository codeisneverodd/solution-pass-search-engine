import Image from 'next/image';
import Link from 'next/link';
import { tw } from 'utils/tailwindMerge';
import logoImg from 'public/logo_square.png';
import defaultUserImg from 'public/icons/user.png';

type SearchHeaderProps<T extends React.ElementType> = {} & Component<T>;

export function SearchHeader({ children, className, ...restProps }: SearchHeaderProps<'header'>) {
  return (
    <header className={tw('flex h-[80px] w-[1280px] items-center  bg-bg pl-5 pr-4 ', className)} {...restProps}>
      <Link className="mr-20 " href="/">
        <Image src={logoImg} alt="Solution Pass 로고" width={36} height={36} />
      </Link>
      <input className="mr-[476px] h-[40px] w-[620px] rounded-full bg-fg pl-6 text-[16px] shadow-google outline-none" />
      <Link className="" href="/">
        <Image src={defaultUserImg} alt="프로필 이미지" width={32} height={32} />
      </Link>
    </header>
  );
}
