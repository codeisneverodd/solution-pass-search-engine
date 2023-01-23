import { tw } from 'utils/tailwindMerge';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import { levelColors } from '../../../styles/colors';
import Image from 'next/image';
import Link from 'next/link';
import defaultUserImg from 'public/icons/user.png';

type ResultSolProps<T extends React.ElementType> = {} & Component<T>;

export function ResultSol({ children, className, ...restProps }: ResultSolProps<'div'>) {
  interface Data {
    username: string;
  }
  interface Data {
    level: ProbLevel;
    title: string;
    code: string;
  }

  const data: Data = { username: 'codeisneverodd', level: 0, title: '징검다리', code: '' };
  return (
    <div className={tw('w-[572px]pt-3', className)} {...restProps}>
      <div className="flex h-[40px] w-full items-center">
        <Link className="" href="/">
          <Image src={defaultUserImg} alt="프로필 이미지" width={36} height={36} />
        </Link>
        <span className="ml-3 text-[14px] font-bold ">{data.username}</span>
      </div>
      <div className={tw('ml-12 w-[524px] overflow-hidden rounded', className)} {...restProps}>
        <div
          className={tw('flex h-7 w-full items-center px-4 text-[12px] text-white', className)}
          style={{ backgroundColor: levelColors[data.level] }}
          {...restProps}
        >
          <span className="font-bungee">{data.level}</span>
          <span className="ml-2 flex-1">{data.title}</span>
          <DocumentDuplicateIcon className="h-4 w-4" />
        </div>
        <div className="h-[286px] w-full bg-fg">{data.code}</div>
      </div>
    </div>
  );
}
