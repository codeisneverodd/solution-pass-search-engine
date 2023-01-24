import Image from 'next/image';
import Link from 'next/link';
import { tw } from 'utils/tailwindMerge';
import defaultUserImg from 'public/icons/user.png';
import { LevelCircle } from 'components/LevelCircle';
import { useUser } from 'hooks/global/useUser';
import { useSearch } from 'hooks/global/useSearch';
import { dummyData } from 'pages/dummy';

type ResultWriteProps<T extends React.ElementType> = {} & Component<T>;

export function ResultWrite({ children, className, ...restProps }: ResultWriteProps<'div'>) {
  const { user } = useUser();
  const { selectedProbId } = useSearch();
  const selectedProb = dummyData.probs.find((prob) => prob.id == selectedProbId);

  return (
    <div className={tw('flex', className)} {...restProps}>
      <Link href="/">
        <Image
          src={user.profileImg ?? defaultUserImg}
          className="rounded-full"
          width={36}
          height={36}
          alt="프로필 이미지"
        />
      </Link>
      {selectedProb ? (
        <div className="ml-4 w-[520px] rounded border-gray bg-fg px-2.5 pt-3 pb-2.5">
          <div className="mb-4 flex items-center">
            <LevelCircle level={selectedProb.level} className="h-[22px] w-[22px] text-[10px]" />
            <span className="ml-3 text-[12px] font-bold">{selectedProb.title}</span>
          </div>
          <textarea className="h-[252px] w-full rounded bg-bg outline-none"></textarea>
          <button className="no-style-btn float-right h-5 w-[96px] rounded bg-blue text-[10px] font-bold text-white ">
            제출
          </button>
        </div>
      ) : (
        <div>문제 없음</div>
      )}
    </div>
  );
}
