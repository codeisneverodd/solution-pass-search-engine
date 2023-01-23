import { tw } from 'utils/tailwindMerge';
import { BookOpenIcon, CodeBracketIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
type TypeSelectBarProps<T extends React.ElementType> = {} & Component<T>;

export function TypeSelectBar({ children, className, ...restProps }: TypeSelectBarProps<'div'>) {
  const types: SearchResultType[] = ['prob', 'sol', 'write'];
  type Data = { selectedType: SearchResultType };
  const data: Data = {
    selectedType: 'prob',
  };
  return (
    <div className={tw('mb-3', className)}>
      <div className="flex h-[32px] w-[572px] gap-4 bg-bg" {...restProps}>
        {types.map((type) => (
          <TypeCard key={type} type={type} className={type === data.selectedType ? 'text-blue' : ''} />
        ))}
      </div>
      <Slider
        style={{
          transform: `translateX(${types.findIndex((t) => t === data.selectedType) * 60}px)`,
        }}
      />
    </div>
  );
}

type TypeCardProps<T extends React.ElementType> = {
  type: SearchResultType;
} & Component<T>;

type Data = { [key in SearchResultType]: { Icon: typeof BookOpenIcon; title: string } };

const data: Data = {
  prob: {
    Icon: BookOpenIcon,
    title: '문제',
  },
  sol: {
    Icon: CodeBracketIcon,
    title: '정답',
  },
  write: {
    Icon: PencilSquareIcon,
    title: '제출',
  },
};
function TypeCard({ children, className, type, ...restProps }: TypeCardProps<'div'>) {
  const { Icon, title } = data[type];

  return (
    <div className={tw('flex h-[16px] w-[44px] items-center justify-between ', className)} {...restProps}>
      <Icon className="h-4 w-4 stroke-current" />
      <span className="text-[12px] font-bold">{title}</span>
    </div>
  );
}

TypeSelectBar.TypeCard = TypeCard;

type SliderProps<T extends React.ElementType> = {} & Component<T>;

function Slider({ children, className, ...restProps }: SliderProps<'div'>) {
  return <div className={tw('h-1 w-[44px] bg-blue', className)} {...restProps} />;
}

TypeSelectBar.Slider = Slider;
