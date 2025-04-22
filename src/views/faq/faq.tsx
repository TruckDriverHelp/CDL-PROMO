import PlusIcon from '@/shared/assets/icons/plus.svg';
import { useTranslations } from 'next-intl';

const LOCALES_KEYS = [
  'JoinPartnerProgram',
  'ReceiveConfirmation',
  'HowActivationWork',
  'LeadGenerationWork',
  'StartReceivingLeads',
  'AfterActivation',
  'BenefitsForSchool',
];

export const FAQ = () => {
  const t = useTranslations('FAQ');
  return (
    <section className="md:mx-[100px] sm:mx-[50px] mx-5 md:pt-[80px] pt-10 relative">
      <div className="max-w-[880px] mx-auto md:mb-[50px] mb-8">
        <h2 className="font-inter font-bold md:text-[32px] md:leading-[40px] text-2xl text-clay md:mb-4 mb-2 text-center">
          {t('title')}
        </h2>
        <p className="font-inter text-base text-gray-deep text-center">
          {t('desc')}
        </p>
      </div>

      <div className="bg-snow-mist rounded-xl">
        {LOCALES_KEYS.map((key, index) => {
          return (
            <details
              key={key}
              open={index === 0}
              name="details-group"
              className="marker:hidden group bg-snow-mist open:bg-white open:shadow-muted-violent open:rounded-xl open:py-6 py-3 sm:px-10 px-4 rounded-xl relative open:z-[1]"
            >
              <summary className="font-inter font-bold text-base text-clay flex justify-between sm:items-center">
                <div className="flex sm:flex-row flex-col sm:gap-6 gap-2 sm:items-center">
                  <span className="font-inter font-bold text-purple-fade text-[32px] leading-[40px]">
                    0{(index += 1)}
                  </span>
                  <p className="font-inter text-xl font-bold text-clay">
                    {t(`${key}.title`)}
                  </p>
                </div>
                <div className="sm:size-12 size-8 flex shrink-0 items-center justify-center rounded-full group-open:bg-clay bg-white">
                  <PlusIcon className="group-open:rotate-45 group-open:text-white text-clay" />
                </div>
              </summary>
              <div className="max-w-xl sm:mx-16">
                {t.rich(`${key}.desc`, {
                  p: (chunks) => (
                    <p className="font-inter font-normal text-base text-clay">
                      {chunks}
                    </p>
                  ),
                  li: () => null,
                })}
                <ul className="list-disc list-inside">
                  {t.rich(`${key}.desc`, {
                    p: () => null,
                    li: (chunks) => <li>{chunks}</li>,
                  })}
                </ul>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
};
