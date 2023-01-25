import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { useSearchProb } from 'hooks/search/useSearchProb';
import { useSelectProb } from 'hooks/search/useSelectProb';
import Link from 'next/link';
import { levelColors } from 'styles/colors';
import { tw } from 'utils/tailwindMerge';
type ResultProbProps<T extends React.ElementType> = {} & Component<T>;

export function ResultProb({ children, className, ...restProps }: ResultProbProps<'table'>) {
  const { searchedProbs } = useSearchProb();
  const { selectProb } = useSelectProb();
  const styles = {
    row: 'flex items-center bg-fg border-b-[1px] border-gray',
    col1: 'w-[32px] text-center ml-4',
    col2: 'flex-1 pl-4',
    col3: 'w-[48px]',
  };

  return (
    <table className={tw('w-[572px]', className)} {...restProps}>
      <thead>
        <tr className={tw('h-8 rounded-t  text-[10px] text-gray', styles.row)}>
          <th className={tw('', styles.col1)}>난이도</th>
          <th className={tw('text-center', styles.col2)}>제목</th>
          <th className={tw('', styles.col3)}>정답</th>
        </tr>
      </thead>
      <tbody>
        {searchedProbs.map(({ level, title, id }, i) => (
          <tr
            key={id}
            className={tw(
              'h-11 text-[16px]',
              i === searchedProbs.length - 1 ? 'rounded-b border-none' : '',
              styles.row,
            )}
            onClick={() => selectProb(id)}
          >
            <td className={tw('font-bold', styles.col1)} style={{ color: levelColors[level] }}>
              {level}
            </td>
            <td className={tw('', styles.col2)}>{title}</td>
            <td className={tw('centered flex', styles.col3)}>
              <Link href="/">
                <ArrowRightCircleIcon className="h-5 w-5 fill-text" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
