import { Link } from '@/i18n/navigation';
import HeroImage from '@/shared/assets/images/hero-illustration.webp';
import { Button } from '@/shared/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const MainAdvantages = () => {
  const t = useTranslations('MainAdvantages');

  return (
    <section className="bg-snow-mist xl:px-[100px] lg:px-[50px] px-[20px] sm:py-[150px] py-[105px]">
      <div className="flex justify-between sm:flex-row flex-col-reverse items-center">
        <div className="lg:max-w-[585px] max-w-[450px] ">
          <h1 className="max-sm:text-center font-inter lg:text-[46px] md:text-4xl text-[32px] leading-[42px] lg:leading-[55px] font-bold text-clay mb-3">
            {t('title')}
          </h1>
          <p className="max-sm:text-center font-inter font-normal text-base text-gray-deep mb-6">
            {t('desc')}
          </p>
          <Link href={'https://school.cdlhelp.com/login'}>
            <Button content={t('cta-button')} className="max-sm:w-full" />
          </Link>
        </div>

        <Image
          className="max-w-[565px] max-h-[390px] max-md:w-[250px] max-md:h-[195px] object-cover"
          src={HeroImage}
          alt="hero image"
          priority
        />
      </div>
    </section>
  );
};
