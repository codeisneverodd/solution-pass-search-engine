type DarkModeBtnProps<T extends React.ElementType> = {} & Component<T>;
import { ChangeEventHandler, useLayoutEffect, useRef } from 'react';
import { tw } from 'utils/tailwindMerge';

export function DarkModeToggleBtn({ children, className, ...restProps }: DarkModeBtnProps<'label'>) {
  const handleDarkModeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'light';
    document.documentElement.classList.toggle('dark', localStorage.theme === 'dark');
  };
  return (
    <label className={tw('relative inline-block h-[34px] w-[60px]', className)} {...restProps}>
      <input type="checkbox" className="h-0 w-0 opacity-0" onChange={handleDarkModeChange} />
      <span className="absolute inset-0 cursor-pointer rounded-[34px] bg-darkGray transition-all group-[.dark]/root:bg-lightGray"></span>
      <span className="absolute left-[4px] bottom-[4px] h-[26px] w-[26px] cursor-pointer rounded-full border-2 border-darkGray bg-white transition-all group-[.dark]/root:translate-x-[26px] group-[.dark]/root:bg-white "></span>
    </label>
  );
}
