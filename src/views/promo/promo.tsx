import Logo from '@/shared/assets/icons/logo.svg';
import Illustration from '@/shared/assets/images/faq-illustration-fixed.png';
import { Button } from '@/shared/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const Promo = () => {
  const t = useTranslations('Promo');
  return (
    <section className="md:h-[360px] h-[625px] relative md:mx-[100px] sm:mx-[50px] mx-5">
      <div className="shadow-muted-violent w-full bg-indigo-lightest absolute -bottom-15 flex md:flex-row flex-col items-center max-md:px-5 max-md:py-4 rounded-xl overflow-hidden justify-between">
        <Logo className="md:hidden mb-6" />

        <Image
          className="md:hidden object-contain w-full h-full xl:max-w-[480px] max-w-[295px]"
          src={Illustration}
          alt="faq illustration"
        />

        <div className="xl:py-14 md:py-7 xl:pl-20 md:pl-10 grid gap-6">
          <Logo className="max-md:hidden" />

          <h2 className="font-inter font-bold text-[32px] leading-[40px] text-clay max-md:text-center">
            {t.rich('title', {
              span: (chunk) => <span className="text-indigo">{chunk}</span>,
            })}
          </h2>

          <Button content={t('button-cta')} className="md:place-self-start" />
        </div>
        <Image
          className="max-md:hidden object-contain w-full h-full xl:max-w-[480px] max-w-[295px]"
          src={Illustration}
          alt="faq illustration"
        />
      </div>
    </section>
  );
};
