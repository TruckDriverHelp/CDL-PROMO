'use client';
import HeroImage from '@/shared/assets/images/hero-illustration.png';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

export const MainAdvantages = () => {
  const t = useTranslations('HomePage');

  return (
    <section className="bg-snow-mist xl:px-[100px] lg:px-[50px] px-[20px] sm:py-[150px] py-[105px]">
      <div className="flex justify-between sm:flex-row flex-col-reverse items-center">
        <div className="lg:max-w-[585px] max-w-[450px] ">
          <h1 className="max-sm:text-center font-inter lg:text-[46px] md:text-4xl text-[32px] leading-[42px] lg:leading-[55px] font-bold text-clay mb-3">
            Вы школа CDL? Растите вместе с нами! {t('title')}
          </h1>
          <p className="max-sm:text-center font-inter font-normal text-base text-gray-deep mb-6">
            Присоединяйтесь к партнёрской программе CDL Help и получите доступ к
            качественным лидам — ученикам, которые готовятся к получению CDL и
            ищут подходящую школу.
          </p>
          <Button content="Стать партнером" className="max-sm:w-full" />
        </div>

        <Image
          className="max-w-[565px] max-h-[390px] max-md:w-[250px] max-md:h-[195px] object-cover"
          src={HeroImage}
          alt="hero image"
        />
      </div>
    </section>
  );
};
