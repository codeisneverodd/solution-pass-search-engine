import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { LevelCircle } from 'components/LevelCircle';
import { useSelectProb } from 'hooks/search/useSelectProb';
import Link from 'next/link';
import { tw } from 'utils/tailwindMerge';
import { Card } from '../Card';

type SelectProbCardProps<T extends React.ElementType> = {} & Component<T>;

export function SelectProbCard({ children, className, ...restProps }: SelectProbCardProps<typeof Card>) {
  const { selectedProb } = useSelectProb();

  return (
    <Card className={tw('', className)} {...restProps}>
      <h3 className="mb-4 text-[18px] font-bold">선택된 문제</h3>
      <div className="flex items-center">
        {selectedProb ? (
          <>
            <LevelCircle level={selectedProb.level} className="mr-6" />
            <span className="flex-1">{selectedProb.title}</span>
            <Link href="/write" className="mr-3">
              <PencilSquareIcon className="h-6 w-6" />
            </Link>
            <button className="no-style-btn">
              <XCircleIcon className="h-6 w-6" />
            </button>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </Card>
  );
}
