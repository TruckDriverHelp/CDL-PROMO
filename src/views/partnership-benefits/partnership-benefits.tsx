import Clock from '@/shared/assets/icons/clock.svg';
import Community from '@/shared/assets/icons/community.svg';
import Speaker from '@/shared/assets/icons/speaker.svg';
import Star from '@/shared/assets/icons/star.svg';
import { Button } from '@/shared/ui/button';

export const PartnershipBenefits = () => {
  return (
    <section className="xl:px-[100px] sm:px-[50px] px-5 sm:pt-[80px] pt-[40px] sm:pb-[50px] pb-[40px] flex flex-col sm:gap-[50px] gap-8 items-center">
      <h2 className="font-inter font-bold sm:text-[32px] text-2xl  sm:leading-[40px] text-clay text-center ">
        Преимущества партнёрства с CDL Help
      </h2>
      <div className="flex xl:flex-nowrap flex-wrap gap-5 justify-center">
        {/* Card */}
        <div className="shadow-overlay-light px-6 pt-8 pb-14 rounded-xl min-w-[295px] max-w-[335px]">
          {/* <Image src={Community} alt="card icon" className="mb-5" /> */}
          <Community className="mb-5" />
          <p className="font-inter font-bold text-xl text-clay pb-1.5">
            Регулярный поток клиентов
          </p>
          <span className="font-inter font-normal text-base text-clay">
            Получите эксклюзивный доступ к мотивированным студентам, готовым
            записаться к вам на обучение.
          </span>
        </div>
        {/* Card */}
        <div className="shadow-overlay-light px-6 pt-8 pb-14 rounded-xl min-w-[295px] max-w-[335px]">
          {/* <Image src={Speaker} alt="card icon" className="mb-5" /> */}
          <Speaker className="mb-5" />
          <p className="font-inter font-bold text-xl text-clay pb-1.5">
            Регулярный поток клиентов
          </p>
          <span className="font-inter font-normal text-base text-clay">
            Получите эксклюзивный доступ к мотивированным студентам, готовым
            записаться к вам на обучение.
          </span>
        </div>
        {/* Card */}
        <div className="shadow-overlay-light px-6 pt-8 pb-14 rounded-xl min-w-[295px] max-w-[335px]">
          {/* <Image src={Clock} alt="card icon" className="mb-5" /> */}
          <Clock className="mb-5" />
          <p className="font-inter font-bold text-xl text-clay pb-1.5">
            Регулярный поток клиентов
          </p>
          <span className="font-inter font-normal text-base text-clay">
            Получите эксклюзивный доступ к мотивированным студентам, готовым
            записаться к вам на обучение.
          </span>
        </div>
        {/* Card */}
        <div className="shadow-overlay-light px-6 pt-8 pb-14 rounded-xl min-w-[295px] max-w-[335px]">
          {/* <Image src={Star} alt="card icon" className="mb-5" /> */}
          <Star className="mb-5" />
          <p className="font-inter font-bold text-xl text-clay pb-1.5">
            Регулярный поток клиентов
          </p>
          <span className="font-inter font-normal text-base text-clay">
            Получите эксклюзивный доступ к мотивированным студентам, готовым
            записаться к вам на обучение.
          </span>
        </div>
      </div>
      <Button content="Начать бесплатно" className="sm:w-fit w-full" />
    </section>
  );
};
