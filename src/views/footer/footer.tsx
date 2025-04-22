import FooterLogo from '@/shared/assets/images/footer-logo.png';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <div className="sm:pt-[120px] pb-[100px] xl:px-[100px] pt-[160px] px-[32px]  bg-frost">
      <section className="grid xl:grid-cols-[minmax(0,312px)_minmax(0,655px)] grid-cols-1  justify-between xl:mb-20 mb-8">
        <div className="grid gap-6 xl:mb-0 xl:border-none border-b border-gray-deep pb-8 mb-8">
          <Image src={FooterLogo} alt="footer logo" />
          <p className="font-inter font-normal text-base text-warm-gray">
            {t('mobile-app')}
          </p>
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-5 gap-8 justify-between justify-self-end items-start w-full">
          <div className="">
            <p className="font-inter font-bold text-base text-white mb-4">
              {t('cdl-help.title')}
            </p>
            <ul className="[&>li]:inline-block grid gap-1.5">
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('cdl-help.how-to-use')}</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('cdl-help.about')}</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('cdl-help.free-questions')}</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-inter font-bold text-base text-white mb-4">
              {t('support.title')}
            </p>
            <ul className="[&>li]:inline-block grid gap-1.5">
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('support.privacy-policy')}</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('support.terms-conditions')}</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('support.feedback')}</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('support.frequently-questions')}</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-inter font-bold text-base text-white mb-4">
              {t('resources.title')}
            </p>
            <ul className="[&>li]:inline-block grid gap-1.5">
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('resources.become-truck-driver')}</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('resources.get-cdl-permit')}</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('resources.get-cdl')}</Link>
              </li>

              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>{t('resources.find-job')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-gray-deep pt-[30px] pb-2.5">
        <p className="font-inter font-normal text-base text-white">
          {t('llc')}
        </p>
        <p className="font-inter font-normal text-base text-white">
          {t('rights-reserved')}
        </p>
        <span className="font-inter font-normal text-sm text-gray-violent">
          {t('org')}
        </span>
      </section>
    </div>
  );
};
