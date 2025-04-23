import FooterLogo from '@/shared/assets/images/footer-logo.webp';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="sm:pt-[120px] pb-[100px] xl:px-[100px] pt-[160px] px-[32px]  bg-frost">
      <section className="grid xl:grid-cols-[minmax(0,312px)_minmax(0,655px)] grid-cols-1  justify-between xl:mb-20 mb-8">
        <div className="grid gap-6 xl:mb-0 xl:border-none border-b border-gray-deep pb-8 mb-8">
          <Image src={FooterLogo} alt="footer logo" />
          <p className="font-inter font-normal text-base text-warm-gray">
            {t('mobile-app')}
          </p>
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-5 gap-8 justify-between justify-self-end items-start w-full">
          <div className="basis-1/3">
            <h3 className="font-inter font-bold text-base text-white mb-4">
              {t('cdl-help.title')}
            </h3>
            <ul className="[&>li]:inline-block grid gap-1.5">
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('cdl-help.how-to-use.link')}>
                  {t('cdl-help.how-to-use.title')}
                </Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('cdl-help.about.link')}>
                  {t('cdl-help.about.title')}
                </Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('cdl-help.free-questions.link')}>
                  {t('cdl-help.free-questions.title')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/3">
            <h3 className="font-inter font-bold text-base text-white mb-4">
              {t('support.title')}
            </h3>
            <ul className="[&>li]:inline-block grid gap-1.5">
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('support.privacy-policy.link')}>
                  {t('support.privacy-policy.title')}
                </Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('support.terms-conditions.link')}>
                  {t('support.terms-conditions.title')}
                </Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('support.feedback.link')}>
                  {t('support.feedback.title')}
                </Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('support.frequently-questions.link')}>
                  {t('support.frequently-questions.title')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/3">
            <h3 className="font-inter font-bold text-base text-white mb-4">
              {t('resources.title')}
            </h3>
            <ul className="[&>li]:inline-block grid gap-1.5">
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('resources.become-truck-driver.link')}>
                  {t('resources.become-truck-driver.title')}
                </Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('resources.get-cdl-permit.link')}>
                  {t('resources.get-cdl-permit.title')}
                </Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('resources.get-cdl.link')}>
                  {t('resources.get-cdl.title')}
                </Link>
              </li>

              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={t('resources.find-job.link')}>
                  {t('resources.find-job.title')}
                </Link>
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
    </footer>
  );
};
