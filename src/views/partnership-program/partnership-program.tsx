import ProgramMackBook from '@/shared/assets/images/program-mackbook.png';
import Image from 'next/image';

export const PartnershipProgram = () => {
  return (
    <section className="bg-snow-mist sm:pt-[60px] pt-10 pb-[50px] xl:px-[165px] sm:px-[50px] px-5">
      <h2 className="font-inter font-bold sm:text-[32px] sm:leading-[38px] text-2xl text-clay mb-10 text-center">
        Как работает партнёрская программа?
      </h2>
      <div className="flex lg:flex-row flex-col gap-7 justify-between items-center">
        <ol className="[&>li]:list-none">
          <li className="flex items-baseline bg-white shadow-overlay-light gap-4 rounded-[0.5rem] p-4 mb-3">
            <div className="bg-sky-fade px-2 py-[3px] rounded-sm">
              <span className="font-inter font-bold text-base text-purple-fade">
                01
              </span>
            </div>
            <div>
              <p className="font-inter font-bold text-base text-clay mb-[3px]">
                Зарегистрируйтесь
              </p>
              <span className="font-inter font-normal text-base text-clay">
                добавьте свою автошколу в нашу сеть
              </span>
            </div>
          </li>
          <li className="flex items-baseline bg-white shadow-overlay-light gap-4 rounded-[0.5rem] p-4 mb-3">
            <div className="bg-sky-fade px-2 py-[3px] rounded-sm">
              <span className="font-inter font-bold text-base text-purple-fade">
                02
              </span>
            </div>
            <div>
              <p className="font-inter font-bold text-base text-clay mb-[3px]">
                Пройдите верификацию
              </p>
            </div>
          </li>
          <li className="flex items-baseline bg-white shadow-overlay-light gap-4 rounded-[0.5rem] p-4 mb-3">
            <div className="bg-sky-fade px-2 py-[3px] rounded-sm">
              <span className="font-inter font-bold text-base text-purple-fade">
                03
              </span>
            </div>
            <div>
              <p className="font-inter font-bold text-base text-clay mb-[3px]">
                Получайте заявки
              </p>
              <span className="font-inter font-normal text-base text-clay">
                от студентов, которые ищут школы CDL в вашем штате
              </span>
            </div>
          </li>
          <li className="flex items-baseline bg-white shadow-overlay-light gap-4 rounded-[0.5rem] p-4">
            <div className="bg-sky-fade px-2 py-[3px] rounded-sm">
              <span className="font-inter font-bold text-base text-purple-fade">
                04
              </span>
            </div>
            <div>
              <p className="font-inter font-bold text-base text-clay mb-[3px]">
                Развивайте ваш бизнес
              </p>
              <span className="font-inter font-normal text-base text-clay">
                расширяйте клиентскую базу, повышайте прибыль школы
              </span>
            </div>
          </li>
        </ol>

        <Image
          src={ProgramMackBook}
          alt="partnership-program image"
          className="object-cover"
        />
      </div>
    </section>
  );
};
