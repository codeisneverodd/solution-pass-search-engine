import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import { dummyData } from 'hooks/global/useDummyData';
import { useProbSelect } from 'hooks/global/useProbSelect';
import Image from 'next/image';
import Link from 'next/link';
import defaultUserImg from 'public/icons/user.png';
import { tw } from 'utils/tailwindMerge';
import { levelColors } from '../../../../styles/colors';

type ResultSolProps<T extends React.ElementType> = {} & Component<T>;

export function ResultSol({ children, className, ...restProps }: ResultSolProps<'div'>) {
  const { selectedProb } = useProbSelect();
  const { user, sols } = dummyData;

  return (
    <div className={tw('w-[572px]pt-3', className)} {...restProps}>
      <div className="flex h-[40px] w-full items-center">
        <Link className="" href="/">
          <Image
            src={user.profileImg ?? defaultUserImg}
            className="rounded-full"
            alt="프로필 이미지"
            width={36}
            height={36}
          />
        </Link>
        <span className="ml-3 text-[14px] font-bold ">{user.username}</span>
      </div>
      {selectedProb ? (
        sols
          .filter((sol) => sol.probId === selectedProb.id)
          .map((sol) => (
            <div key={sol.id} className={tw('ml-12 w-[524px] overflow-hidden rounded', className)} {...restProps}>
              <div
                className={tw('flex h-7 w-full items-center px-4 text-[12px] text-white', className)}
                style={{ backgroundColor: levelColors[selectedProb.level] }}
                {...restProps}
              >
                <span className="font-bungee">{selectedProb.level}</span>
                <span className="ml-2 flex-1">{selectedProb.title}</span>
                <DocumentDuplicateIcon className="h-4 w-4 cursor-pointer" />
              </div>
              <div className="h-[286px] w-full bg-fg">{sol.code}</div>
            </div>
          ))
      ) : (
        <div>선택되지 않음</div>
      )}
    </div>
  );
}
