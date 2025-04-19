import PlusIcon from '@/shared/assets/icons/plus.svg';

export const FAQ = () => {
  return (
    <section className="md:mx-[100px] sm:mx-[50px] mx-5 md:pt-[80px] pt-10 relative">
      <div className="max-w-[880px] mx-auto md:mb-[50px] mb-8">
        <h2 className="font-inter font-bold md:text-[32px] md:leading-[40px] text-2xl text-clay md:mb-4 mb-2 text-center">
          Часто задаваемые вопросы (FAQ)
        </h2>
        <p className="font-inter text-base text-gray-deep text-center">
          Партнерская программа CDL Help связывает школы CDL с мотивированными
          студентами, которые готовятся получить лицензию. Ниже мы подробно
          ответили на самые актуальные вопросы о программы:
        </p>
      </div>

      <div className="bg-snow-mist rounded-xl">
        <details
          open
          name="details-group"
          className="marker:hidden group bg-snow-mist open:bg-white open:shadow-muted-violent open:rounded-xl open:py-6 py-3 sm:px-10 px-4 rounded-t-xl relative open:z-[1]"
        >
          <summary className="font-inter font-bold text-base text-clay flex justify-between sm:items-center">
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-2 sm:items-center">
              <span className="font-inter font-bold text-purple-fade text-[32px] leading-[40px]">
                01
              </span>
              <p className="font-inter text-xl font-bold text-clay">Ресурсы</p>
            </div>
            <div className="sm:size-12 size-8 flex shrink-0 items-center justify-center rounded-full group-open:bg-clay bg-white">
              {/* <Image
                className="group-open:rotate-45 group-open:fill-white fill-clay"
                src={PlusIcon}
                alt=""
              /> */}
              <PlusIcon className="group-open:rotate-45 group-open:text-white text-clay" />
            </div>
          </summary>
          <p className="font-inter font-normal text-base text-clay max-w-xl sm:mx-16">
            Стать частью партнёрской программы очень легко – вам нужно заполнить
            простую регистрационную форму и указать информацию о вашей школе.
            После подачи заявки наша команда проверит ваши данные: адрес школы и
            контактную информацию подлинность регистрации вашей школы в FMCSA
          </p>
        </details>
        <details
          name="details-group"
          className="marker:hidden group bg-snow-mist open:bg-white open:shadow-muted-violent open:rounded-xl open:py-6 py-3 sm:px-10 px-4 rounded-t-xl relative open:z-[1]"
        >
          <summary className="font-inter font-bold text-base text-clay flex justify-between sm:items-center">
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-2 sm:items-center">
              <span className="font-inter font-bold text-purple-fade text-[32px] leading-[40px]">
                01
              </span>
              <p className="font-inter text-xl font-bold text-clay">
                Что даёт участие в партнёрской программе CDL Help?
              </p>
            </div>
            <div className="sm:size-12 size-8 shrink-0 flex items-center justify-center rounded-full group-open:bg-clay bg-white">
              {/* <Image
                className="group-open:rotate-45 group-open:fill-white fill-clay"
                src={PlusIcon}
                alt=""
              /> */}
              <PlusIcon className="group-open:rotate-45 group-open:text-white text-clay" />
            </div>
          </summary>
          <p className="font-inter font-normal text-base text-clay max-w-xl sm:mx-16">
            Стать частью партнёрской программы очень легко – вам нужно заполнить
            простую регистрационную форму и указать информацию о вашей школе.
            После подачи заявки наша команда проверит ваши данные: адрес школы и
            контактную информацию подлинность регистрации вашей школы в FMCSA
          </p>
        </details>
        <details
          name="details-group"
          className="marker:hidden group bg-snow-mist open:bg-white open:shadow-muted-violent open:rounded-xl open:py-6 py-3 sm:px-10 px-4 rounded-b-xl relative open:z-[1]"
        >
          <summary className="font-inter font-bold text-base text-clay flex justify-between sm:items-center">
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-2 sm:items-center">
              <span className="font-inter font-bold text-purple-fade text-[32px] leading-[40px]">
                01
              </span>
              <p className="font-inter text-xl font-bold text-clay">Ресурсы</p>
            </div>
            <div className="sm:size-12 size-8 flex shrink-0 items-center justify-center rounded-full group-open:bg-clay bg-white">
              {/* <Image
                className="group-open:rotate-45 group-open:fill-white fill-clay"
                src={PlusIcon}
                alt=""
              /> */}
              <PlusIcon className="group-open:rotate-45 group-open:text-white text-clay" />
            </div>
          </summary>
          <p className="font-inter font-normal text-base text-clay max-w-xl sm:mx-16">
            Стать частью партнёрской программы очень легко – вам нужно заполнить
            простую регистрационную форму и указать информацию о вашей школе.
            После подачи заявки наша команда проверит ваши данные: адрес школы и
            контактную информацию подлинность регистрации вашей школы в FMCSA
          </p>
        </details>
      </div>
    </section>
  );
};
