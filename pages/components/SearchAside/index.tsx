import { tw } from 'utils/tailwindMerge';
import { AdCard } from './components/AdCard';
import { SelectProbCard } from './components/SelectProbCard';

type AsideProps<T extends React.ElementType> = {} & Component<T>;

export function SearchAside({ children, className, ...restProps }: AsideProps<'aside'>) {
  return (
    <aside className={tw('ml-9 mt-12 flex h-[688px] w-[332px] flex-col gap-[20px]', className)} {...restProps}>
      {children}
    </aside>
  );
}

SearchAside.AdCard = AdCard;
SearchAside.SelectProbCard = SelectProbCard;
