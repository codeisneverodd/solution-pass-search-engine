import { tw } from 'utils/tailwindMerge';

type LevelCircleProps<T extends React.ElementType> = {
  level: number;
} & Component<T>;

export function LevelCircle({ children, className, level, ...restProps }: LevelCircleProps<'div'>) {
  const levels = [0, 1, 2, 3, 4, 5].map((l) => `bg-level-${l}`);
  return (
    <div
      className={tw(`centered h-7 w-7 rounded-full font-bungee text-[16px] text-white`, `bg-level-${level}`, className)}
      {...restProps}
    >
      {level}
    </div>
  );
}
