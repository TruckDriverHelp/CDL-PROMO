'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import ArrowRight from '@/shared/assets/icons/arrow-right.svg';
import BurgerClose from '@/shared/assets/icons/burger-close.svg';
import CheckBig from '@/shared/assets/icons/check-big.svg';
import clsx from 'clsx';
import { EzzyModal } from 'ezzy-modal';
import { Locale, useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen(state: boolean): void;
}
export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const t = useTranslations('LocaleSwitcher');
  const d = useTranslations('Header');
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onLanguageChange = (value: string) => {
    const nextLocale = value as Locale;
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
  };
  return (
    <div
      className={clsx(
        'fixed h-[calc(100dvh-var(--header-min-height))] bg-snow-mist w-full top-[var(--header-min-height)] transition-all duration-300 z-10',
        isOpen && 'visible right-0 no-doc-scroll',
        !isOpen && 'invisible right-full'
      )}
    >
      <div className="w-full h-full px-5 py-6 ">
        <nav>
          <ul className="flex flex-col gap-3 [&>li]:inline-block">
            <li className="w-full bg-white p-3 font-inter font-bold text-base align-middle">
              <button
                className="block"
                onClick={() => window['ezzyModal']?.language.showModal()}
              >
                {t('locale', { locale })}
              </button>
            </li>

            <li className="w-full bg-white p-3 font-inter font-bold text-base align-middle">
              <Link
                href={'/'}
                className="block"
                onClick={() => setIsOpen(false)}
              >
                {d('home-link')}
              </Link>
            </li>
            <li className="w-full cursor-pointer">
              <details className="marker:hidden group p-3 bg-white">
                <summary className="font-inter font-bold text-base text-clay flex justify-between items-center">
                  {d('resources-link')}

                  <ArrowRight className="group-open:rotate-90" />
                </summary>
                <ul className="[&>li]:inline-block grid gap-2 mt-3">
                  <li className="font-inter text-base text-clay">
                    <Link href={d('become-driver-link.link')}>
                      {d('become-driver-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter text-base text-clay">
                    <Link href={d('get-cdl-link.link')}>
                      {d('get-cdl-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter text-base text-clay">
                    <Link href={d('get-cdl-link.link')}>
                      {d('how-to-use-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter text-base text-clay">
                    <Link href={d('get-cdl-link.link')}>
                      {d('get-cdl-permit-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter text-base text-clay">
                    <Link href={d('get-cdl-link.link')}>
                      {d('cdl-questions-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter text-base text-clay">
                    <Link href={d('get-cdl-link.link')}>
                      {d('cdl-taught-link.title')}
                    </Link>
                  </li>
                  <li className="font-inter text-base text-clay">
                    <Link href={d('get-cdl-link.link')}>
                      {d('texas-cvo-test-link.title')}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="w-full bg-white p-3 font-inter font-bold text-base align-middle">
              <Link className="block" href={'https://www.dmvhelp.app'}>
                {d('DMV-link')}
              </Link>
            </li>
            <li className="w-full bg-white p-3 font-inter font-bold text-base align-middle">
              <Link className="block" href={'https://www.cdlhelp.com/contact'}>
                {d('contacts-link')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <EzzyModal closeOnOverlayClick className="bottom-0" id="language">
        <div className="w-full rounded-t-xl bg-white">
          <div className="px-5 py-4 border-b border-b-surface flex justify-between items-center">
            <p className="font-inter font-bold text-xl text-clay">
              {d('language-modal.title')}
            </p>
            <BurgerClose
              onClick={() => window['ezzyModal']?.language.close()}
            />
          </div>

          <ul className="px-5 py-4 [&>li]:inline-block flex flex-col">
            {routing.locales.map((cur) => (
              <li
                className="py-3 not-last:border-b not-last:border-b-surface"
                key={cur}
                value={cur}
              >
                <button
                  onClick={() => onLanguageChange(cur)}
                  className="flex justify-between items-center w-full"
                >
                  <p className="font-roboto font-normal text-emphasis-high text-base">
                    {t('locale', { locale: cur })}
                  </p>
                  {locale === cur && <CheckBig />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </EzzyModal>
    </div>
  );
};
