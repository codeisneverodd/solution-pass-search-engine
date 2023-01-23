import { tw } from 'utils/tailwindMerge';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { levelColors } from 'styles/colors';
type ResultProbProps<T extends React.ElementType> = {} & Component<T>;

export function ResultProb({ children, className, ...restProps }: ResultProbProps<'table'>) {
  interface Data {
    level: ProbLevel;
    title: string;
    id: string;
  }
  const data = [
    {
      level: 3,
      title: '징검다리',
      id: '123123',
    },
    {
      level: 2,
      title: '방의 개수',
      id: '12455112',
    },
    ,
    {
      level: 1,
      title: '시험장 나누기',
      id: '55533',
    },
  ] as Data[];
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
        {data.map(({ level, title, id }, i) => (
          <tr
            key={id}
            className={tw('h-11 text-[16px]', i === data.length - 1 ? 'rounded-b border-none' : '', styles.row)}
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
      {children}
    </table>
  );
}
