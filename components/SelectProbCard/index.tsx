import { LevelCircle } from 'components/LevelCircle';
import Link from 'next/link';
import { tw } from 'utils/tailwindMerge';
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';

type SelectProbCardProps<T extends React.ElementType> = {} & Component<T>;
type Data = { level: ProbLevel; title: string };
export function SelectProbCard({ children, className, ...restProps }: SelectProbCardProps<'div'>) {
  const data: Data = {
    level: 3,
    title: '징검다리',
  };

  return (
    <section className={tw('h-[116px] w-[332px] rounded-[20px] bg-fg  py-3 px-4', className)} {...restProps}>
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
    </section>
  );
}
