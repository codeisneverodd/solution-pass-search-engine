import Image from 'next/image';
import Link from 'next/link';
import { tw } from 'utils/tailwindMerge';
import defaultUserImg from 'public/icons/user.png';
import { LevelCircle } from 'components/LevelCircle';

type ResultWriteProps<T extends React.ElementType> = {} & Component<T>;

export function ResultWrite({ children, className, ...restProps }: ResultWriteProps<'div'>) {
  interface Data {
    level: ProbLevel;
    title: string;
  }
  const data: Data = { level: 0, title: '징검다리' };
  return (
    <div className={tw('flex', className)} {...restProps}>
      <Link href="/">
        <Image src={defaultUserImg} width={36} height={36} alt="프로필 이미지" />
      </Link>
      <div className="ml-4 w-[520px] rounded border-gray bg-fg px-2.5 pt-3 pb-2.5">
        <div className="mb-4 flex items-center">
          <LevelCircle level={data.level} className="h-[22px] w-[22px] text-[10px]" />
          <span className="ml-3 text-[12px] font-bold">{data.title}</span>
        </div>
        <textarea className="h-[252px] w-full rounded bg-bg"></textarea>
        <button className="no-style-btn h-5 w-[96px] rounded bg-blue text-[10px] font-bold text-white ">제출</button>
      </div>
    </div>
  );
}
