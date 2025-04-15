'use client';

import ArrowRight from '@/shared/assets/icons/arrow-right.svg';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen(state: boolean): void;
}
export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      className={clsx(
        'absolute h-[calc(100dvh-var(--header-min-height))] bg-snow-mist w-full top-[var(--header-min-height)] transition-all duration-300',
        isOpen && 'visible right-0',
        !isOpen && 'invisible right-full'
      )}
    >
      <div className="w-full h-full px-5 py-6 ">
        <nav>
          <ul className="flex flex-col gap-3 [&>li]:inline-block">
            <li className="w-full bg-white p-3 font-inter font-bold text-base align-middle">
              <Link
                href={'#'}
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
            </li>
            <li className="w-full cursor-pointer">
              <details className="marker:hidden group p-3 bg-white">
                <summary className="font-inter font-bold text-base text-clay flex justify-between items-center">
                  Ресурсы
                  <Image
                    className="group-open:rotate-90"
                    src={ArrowRight}
                    alt=""
                  />
                </summary>
                <ul className="[&>li]:inline-block grid gap-2 mt-3">
                  <li className="font-inter text-base text-clay">
                    <Link className="block" href={'/test'}>
                      Ресурсы 1
                    </Link>
                  </li>
                  <li className="font-inter text-base text-clay">
                    <Link className="block" href={'/test'}>
                      Ресурсы 2
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="w-full bg-white p-3 font-inter font-bold text-base align-middle">
              <Link className="block" href={'#'}>
                DMV Help
              </Link>
            </li>
            <li className="w-full bg-white p-3 font-inter font-bold text-base align-middle">
              <Link className="block" href={'#'}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
