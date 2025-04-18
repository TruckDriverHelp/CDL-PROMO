import ContactUsAvatar from '@/shared/assets/images/contact-us-avatar.png';
import Image from 'next/image';
import Link from 'next/link';

export const ContactUs = () => {
  return (
    <section className="bg-indigo-muted xl:px-[180px] md:px-[100] px-5 py-[50px] flex xl:flex-row flex-col justify-between md:gap-2.5 gap-8 items-center">
      <h2 className="font-inter font-bold md:text-[32px] md:leading-[40px] text-center text-2xl text-white max-w-[390px] ">
        Либо свяжитесь с нами удобным вам способом
      </h2>
      <div className="bg-purple-fade sm:px-[46px] px-6 py-[35px] rounded-xl flex sm:flex-row flex-col gap-8 items-center hover:bg-indigo-lightest hover:text-clay text-white">
        <Image
          src={ContactUsAvatar}
          alt="contact us avatar"
          className="object-cover size-[112px]"
        />

        <div className="font-inter max-sm:text-center">
          <p className="font-bold text-xl">Захар Бушуев</p>
          <p className="font-normal text-base mb-4">
            Менеджер по работе с партнерами
          </p>

          <Link
            className="font-bold text-base block"
            href={'mailto:partner@cdlhelp.com'}
          >
            partner@cdlhelp.com
          </Link>
          <Link className="font-bold text-base block" href={'tel:+12315074301'}>
            +1 231 507 4301
          </Link>
        </div>
      </div>
    </section>
  );
};
