'use client';
import BurgerClose from '@/shared/assets/icons/burger-close.svg';
import BurgerDefault from '@/shared/assets/icons/burger-default.svg';
import ExpandMore24 from '@/shared/assets/icons/expand-more-24.svg';
import ExpandMore from '@/shared/assets/icons/expand-more.svg';
import SelectGlobal from '@/shared/assets/icons/global.svg';
import Logo from '@/shared/assets/icons/logo.svg';
import { ClientOnlyPortal } from '@/shared/components/client-portal';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar } from './sidebar';

export const Header = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  return (
    <div className="w-full md:px-[50px] lg:px-[100px] sm:px-[20px] max-h-[var(--header-max-height)] min-h-[var(--header-min-height)] px-5 shadow-soft-black  border-b border-mercury">
      {/* container */}
      <div className="flex sm:py-5 py-3.5 md:gap-x-10 gap-5 justify-between items-center sticky z-20 top-0 bg-white">
        <Image src={Logo} alt="Company Logo" />
        <nav className="sm:block hidden ">
          <ul className="[&>li]:inline-block h-full flex md:gap-5 gap-2.5 justify-between text-nowrap">
            <li className="font-inter font-bold text-base  text-clay cursor-pointer hover:text-indigo">
              <Link href={'#manage'}>Главная</Link>
            </li>
            <li className="font-inter font-bold text-base text-clay cursor-pointer hover:text-indigo relative group">
              {/* <Link href={'#faq'}>Ресурсы</Link> */}
              <button className="flex items-center gap-0.5">
                Ресурсы
                <Image
                  className="transition-transform duration-150 group-hover:rotate-180 group-hover:fill-indigo"
                  width={16}
                  height={16}
                  src={ExpandMore}
                  alt="nav bar menu dropdown"
                />
              </button>
              <div className="group-hover:visible hover:visible invisible absolute top-0 pt-10">
                <ul className="bg-white rounded-sm grid gap-1 shadow-elevated">
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href="/ru/kak-stat-dalnoboishikom/">
                      Как стать дальнобойщиком в США
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href="/ru/kak-poluchit-cdl/">Как получить CDL</Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href="/ru/kak-ispolzovat-cdlhelp/">
                      Как использовать приложение CDL Help
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href="/ru/kak-poluchit-cdl-permit/">
                      Как получить CDL пермит
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href="/ru/chasto-zadavaemye-voprosy/">
                      Часто задаваемые вопросы
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href="/ru/o-cdl-shkolakh/">О CDL школе</Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href="/ru/cdl-texas/">Texas CVO Knowledge Test</Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href="https://www.truckdriver.help/">
                      Работа для дальнобойщиков
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="font-inter font-bold text-base  text-clay cursor-pointer hover:text-indigo">
              <Link href={'#faq'}>DMV Help</Link>
            </li>
            <li className="font-inter font-bold text-base text-clay cursor-pointer hover:text-indigo">
              <Link href={'#faq'}>Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden sm:flex justify-between items-center gap-2.5 group bg-elevated py-1.5 px-3 rounded-md relative w-[135px]">
          <Image src={SelectGlobal} alt="" />
          <select
            className="appearance-none outline-none shadow-none border-none h-full text-center [text-align-last:center] absolute w-full top-[50%] transform -translate-x-3 -translate-y-1/2"
            name="Language Select"
            id="language-select"
          >
            <option value="ru">Russian</option>
            <option value="en">English</option>
          </select>
          <Image src={ExpandMore24} alt="" />
        </div>
        <button
          onClick={() => setBurgerIsOpen((prev) => !prev)}
          className="sm:hidden cursor-pointer"
        >
          {!burgerIsOpen && (
            <Image src={BurgerDefault} alt="burger menu open" />
          )}
          {burgerIsOpen && <Image src={BurgerClose} alt="burger menu close" />}
        </button>
      </div>

      <ClientOnlyPortal selector="body">
        <Sidebar setIsOpen={setBurgerIsOpen} isOpen={burgerIsOpen} />
      </ClientOnlyPortal>
    </div>
  );
};
