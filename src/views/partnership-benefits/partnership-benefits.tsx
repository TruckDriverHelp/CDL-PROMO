import Clock from '@/shared/assets/icons/clock.svg';
import Community from '@/shared/assets/icons/community.svg';
import Speaker from '@/shared/assets/icons/speaker.svg';
import Star from '@/shared/assets/icons/star.svg';
import { Button } from '@/shared/ui/button';
import { useTranslations } from 'next-intl';

const cardArr = [
  {
    localeKey: 'SteadyStreamStudents',
    icon: Community,
  },
  {
    localeKey: 'SchoolsVisibility',
    icon: Speaker,
  },
  {
    localeKey: 'FreePeriod',
    icon: Clock,
  },
  {
    localeKey: 'SupportiveExperience',
    icon: Star,
  },
] as const;

export const PartnershipBenefits = () => {
  const t = useTranslations('PartnershipBenefits');

  return (
    <section className="xl:px-[100px] sm:px-[50px] px-5 sm:pt-[80px] pt-[40px] sm:pb-[50px] pb-[40px] flex flex-col sm:gap-[50px] gap-8 items-center">
      <h2 className="font-inter font-bold sm:text-[32px] text-2xl  sm:leading-[40px] text-clay text-center ">
        {t('title')}
      </h2>
      <div className="flex xl:flex-nowrap flex-wrap gap-5 justify-center">
        {/* Card */}
        {cardArr.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.localeKey}
              className="shadow-overlay-light px-6 pt-8 pb-14 rounded-xl min-w-[295px] max-w-[335px]"
            >
              <Icon className="mb-5" />
              <p className="font-inter font-bold text-xl text-clay pb-1.5">
                {t(`${card.localeKey}.title`)}
              </p>
              <span className="font-inter font-normal text-base text-clay">
                {t(`${card.localeKey}.desc`)}
              </span>
            </div>
          );
        })}
      </div>
      <Button content={t('cta-button')} className="sm:w-fit w-full" />
    </section>
  );
};
