import { LevelCircle } from 'components/LevelCircle';
import { tw } from 'utils/tailwindMerge';

type SelectProbCardProps<T extends React.ElementType> = {} & Component<T>;

export function SelectProbCard({ children, className, ...restProps }: SelectProbCardProps<'div'>) {
  const data = {
    level: 3,
  };

  return (
    <section className={tw('h-[116px] w-[332px] py-3 px-4', className)} {...restProps}>
      <h3>선택된 문제</h3>
      <div className="flex">
        <LevelCircle level={data.level} />
      </div>
    </section>
  );
}
