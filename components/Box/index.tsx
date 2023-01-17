import { tw } from 'utils/tailwindMerge';

type BoxProps<T extends React.ElementType> = {} & Component<T>;

export function Box({ children, className, ...restProps }: BoxProps<'div'>) {
  return (
    <div className={tw('rounded bg-white px-4 py-2 dark:bg-darkGray', className)} {...restProps}>
      {children}
    </div>
  );
}
