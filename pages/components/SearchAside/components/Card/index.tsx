import { tw } from 'utils/tailwindMerge';

type SectionCardProps<T extends React.ElementType> = {} & Component<T>;

export function Card({ children, className, ...restProps }: SectionCardProps<'div'>) {
  return (
    <div className={tw('h-[116px] w-[332px] rounded-[20px] bg-fg  py-3 px-4', className)} {...restProps}>
      {children}
    </div>
  );
}
