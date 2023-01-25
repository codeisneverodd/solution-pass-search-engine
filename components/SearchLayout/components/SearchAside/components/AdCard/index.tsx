import { Card } from '../Card';
import Image from 'next/image';
import { tw } from 'utils/tailwindMerge';
import AdProgrammersImg from 'public/ads/ad_programmers.png';

type AdCardProps<T extends React.ElementType> = {} & Component<T>;

export function AdCard({ children, className, ...restProps }: AdCardProps<typeof Card>) {
  return (
    <Card className={tw('', className)} {...restProps}>
      <Image className="h-full w-full" src={AdProgrammersImg} width={300} height={92} alt="프로그래머스" />
    </Card>
  );
}
