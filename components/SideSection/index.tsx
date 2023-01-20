import { LevelCircle } from 'components/LevelCircle';
import Link from 'next/link';
import { tw } from 'utils/tailwindMerge';
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import AdProgrammersImg from 'public/ads/ad_programmers.png';

type SideSectionProps<T extends React.ElementType> = {} & Component<T>;

export function SideSection({ children, className, ...restProps }: SideSectionProps<'section'>) {
  return (
    <section className={tw('flex h-[688px] w-[332px] flex-col gap-[20px]', className)} {...restProps}>
      {children}
    </section>
  );
}

type SectionCardProps<T extends React.ElementType> = {} & Component<T>;

function Card({ children, className, ...restProps }: SectionCardProps<'div'>) {
  return (
    <div className={tw('h-[116px] w-[332px] rounded-[20px] bg-fg  py-3 px-4', className)} {...restProps}>
      {children}
    </div>
  );
}

type SelectProbCardProps<T extends React.ElementType> = {} & Component<T>;

function SelectProbCard({ children, className, ...restProps }: SelectProbCardProps<typeof Card>) {
  type Data = { level: ProbLevel; title: string };

  const data: Data = {
    level: 3,
    title: '징검다리',
  };
  return (
    <Card className={tw('', className)} {...restProps}>
      <h3 className="mb-4 text-[18px] font-bold">선택된 문제</h3>
      <div className="flex">
        <LevelCircle level={data.level} className="mr-6" />
        <span className="flex-1">{data.title}</span>
        <Link href="/write" className="mr-3">
          <PencilSquareIcon className="h-6 w-6" />
        </Link>
        <button className="no-style-btn">
          <XCircleIcon className="h-6 w-6" />
        </button>
      </div>
    </Card>
  );
}

SideSection.SelectProbCard = SelectProbCard;

type AdCardProps<T extends React.ElementType> = {} & Component<T>;

function AdCard({ children, className, ...restProps }: AdCardProps<typeof Card>) {
  return (
    <Card className={tw('', className)} {...restProps}>
      <Image className="h-full w-full" src={AdProgrammersImg} width={300} height={92} alt="프로그래머스" />
    </Card>
  );
}

SideSection.AdCard = AdCard;
