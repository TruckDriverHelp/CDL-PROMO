import ProgramMackBook from '@/shared/assets/images/program-mackbook.webp';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const localeKeys = [
  'SignUp',
  'VerifyAccount',
  'StudentsApplications',
  'BusinessGrow',
];

export const PartnershipProgram = () => {
  const t = useTranslations('PartnershipProgram');

  return (
    <section className="bg-snow-mist sm:pt-[60px] pt-10 pb-[50px] xl:px-[165px] sm:px-[50px] px-5">
      <h2 className="font-inter font-bold sm:text-[32px] sm:leading-[38px] text-2xl text-clay mb-10 text-center">
        {t('title')}
      </h2>
      <div className="flex lg:flex-row flex-col gap-7 justify-between items-center">
        <ol className="[&>li]:list-none">
          {localeKeys.map((item, index) => {
            return (
              <li
                key={item}
                className="flex items-baseline bg-white shadow-overlay-light gap-4 rounded-[0.5rem] p-4 mb-3"
              >
                <div className="bg-sky-fade px-2 py-[3px] rounded-sm">
                  <span className="font-inter font-bold text-base text-purple-fade">
                    0{(index += 1)}
                  </span>
                </div>
                <div>
                  <p className="font-inter font-bold text-base text-clay mb-[3px]">
                    {t(`${item}.title`)}
                  </p>
                  <span className="font-inter font-normal text-base text-clay">
                    {t.has(`${item}.desc`) && t(`${item}.desc`)}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>

        <Image
          src={ProgramMackBook}
          alt="partnership-program image"
          className="object-cover"
        />

        {/* <div className="size-full xl:max-w-[655px] xl:h-[460px]">
          <video
            loop
            muted
            autoPlay
            playsInline
            className="size-full object-cover"
          >
            <source src={'/cdl-laptop.webm'} type="video/webm" />
            <source src={'/cdl-laptop.mp4'} type="video/mp4" />
          </video>
        </div> */}
      </div>
    </section>
  );
};
