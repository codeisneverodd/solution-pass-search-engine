import { levelColors } from 'styles/colors';
import { tw } from 'utils/tailwindMerge';

type LevelCircleProps<T extends React.ElementType> = {
  level: Prob['level'];
} & Component<T>;

export function LevelCircle({ children, className, level, ...restProps }: LevelCircleProps<'div'>) {
  return (
    <div
      className={tw(`centered h-7 w-7 rounded-full font-bungee text-[16px] text-white`, className)}
      style={{ backgroundColor: levelColors[level] }}
      {...restProps}
    >
      {level}
    </div>
  );
}
