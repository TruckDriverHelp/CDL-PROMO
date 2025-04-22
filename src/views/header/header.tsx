'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import BurgerClose from '@/shared/assets/icons/burger-close.svg';
import BurgerDefault from '@/shared/assets/icons/burger-default.svg';
import ExpandMore from '@/shared/assets/icons/expand-more.svg';
import SelectGlobal from '@/shared/assets/icons/global.svg';
import Logo from '@/shared/assets/icons/logo.svg';
import { ClientOnlyPortal } from '@/shared/components/client-portal';
import clsx from 'clsx';
import { Locale, useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChangeEvent, useState, useTransition } from 'react';
import { Sidebar } from './sidebar';

export const Header = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const t = useTranslations('LocaleSwitcher');
  const d = useTranslations('Header');
  const locale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="sticky z-20 top-0 w-full md:px-[50px] lg:px-[100px] sm:px-[20px] max-h-[var(--header-max-height)] min-h-[var(--header-min-height)] px-5 shadow-soft-black  border-b border-mercury bg-white">
      {/* container */}
      <div className="flex sm:py-5 py-3.5 md:gap-x-10 gap-5 justify-between items-center ">
        <Logo />
        <nav className="sm:block hidden ">
          <ul className="[&>li]:inline-block h-full flex md:gap-5 gap-2.5 justify-between text-nowrap">
            <li className="font-inter font-bold text-base  text-clay cursor-pointer hover:text-indigo">
              <Link href={'#manage'}>{d('home-link')}</Link>
            </li>
            <li className="font-inter font-bold text-base text-clay cursor-pointer hover:text-indigo relative group">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="flex items-center gap-0.5"
              >
                {d('resources-link')}

                <ExpandMore className="transition-transform duration-150 group-hover:rotate-180 group-hover:fill-indigo" />
              </button>
              <div
                className={clsx(
                  !showDropdown && 'pt-10',
                  showDropdown && 'visible mt-10',
                  'group-hover:visible hover:visible invisible absolute top-0'
                )}
              >
                <ul className="bg-white rounded-sm grid gap-1 shadow-elevated">
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href={d('become-driver-link.link')}>
                      {d('become-driver-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href={d('get-cdl-link.link')}>
                      {d('get-cdl-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href={d('how-to-use-link.link')}>
                      {d('how-to-use-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href={d('get-cdl-permit-link.link')}>
                      {d('get-cdl-permit-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href={d('cdl-questions-link.link')}>
                      {d('cdl-questions-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href={d('cdl-taught-link.link')}>
                      {d('cdl-taught-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter font-normal py-2 px-4 border-b border-surface  text-base text-emphasis-high cursor-pointer hover:text-indigo">
                    <Link href={d('texas-cvo-test-link.link')}>
                      {d('texas-cvo-test-link.title')}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="font-inter font-bold text-base  text-clay cursor-pointer hover:text-indigo">
              <Link href={'#faq'}> {d('DMV-link')}</Link>
            </li>
            <li className="font-inter font-bold text-base text-clay cursor-pointer hover:text-indigo">
              <Link href={'#faq'}>{d('contacts-link')}</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden sm:flex justify-between items-center gap-2.5 group bg-elevated py-1.5 px-3 rounded-md relative w-[135px]">
          <SelectGlobal />
          <select
            className="appearance-none outline-none shadow-none border-none h-full text-center [text-align-last:center] absolute w-full top-[50%] transform -translate-x-3 -translate-y-1/2"
            name="Language Select"
            id="language-select"
            disabled={isPending}
            defaultValue={locale}
            onChange={onSelectChange}
          >
            {routing.locales.map((cur) => (
              <option key={cur} value={cur}>
                {t('locale', { locale: cur })}
              </option>
            ))}
          </select>
          <ExpandMore />
        </div>
        <button
          onClick={() => setBurgerIsOpen((prev) => !prev)}
          className="sm:hidden cursor-pointer"
        >
          {!burgerIsOpen && <BurgerDefault />}
          {burgerIsOpen && <BurgerClose />}
        </button>
      </div>

      <ClientOnlyPortal selector="body">
        <Sidebar setIsOpen={setBurgerIsOpen} isOpen={burgerIsOpen} />
      </ClientOnlyPortal>
    </div>
  );
};
