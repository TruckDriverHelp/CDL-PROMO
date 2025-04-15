import FooterLogo from '@/shared/assets/images/footer-logo.png';
import Image from 'next/image';
import Link from 'next/link';
export const Footer = () => {
  return (
    <div className="sm:pt-[120px] pb-[100px] xl:px-[100px] pt-[160px] px-[32px]  bg-frost">
      <section className="grid xl:grid-cols-[minmax(0,312px)_minmax(0,655px)] grid-cols-1  justify-between xl:mb-20 mb-8">
        <div className="grid gap-6 xl:mb-0 xl:border-none border-b border-gray-deep pb-8 mb-8">
          <Image src={FooterLogo} alt="footer logo" />
          <p className="font-inter font-normal text-base text-warm-gray">
            Приложение для мобильных устройств iOS и Android, с тестами CDL с
            возможностью перевода.
          </p>
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-5 gap-8 justify-between justify-self-end items-start w-full">
          <div className="">
            <p className="font-inter font-bold text-base text-white mb-4">
              CDL Help
            </p>
            <ul className="[&>li]:inline-block grid gap-1.5">
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Как использовать приложение CDL Help</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>О проекте</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Попробовать бесплатно</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-inter font-bold text-base text-white mb-4">
              Поддержка
            </p>
            <ul className="[&>li]:inline-block grid gap-1.5">
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Конфиденциальность</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Публичное соглашение</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Обратная связь</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Часто задаваемые вопросы</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-inter font-bold text-base text-white mb-4">
              Ресурсы
            </p>
            <ul className="[&>li]:inline-block grid gap-1.5">
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Как стать дальнобойщиком в США</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Как получить CDL пермит</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Как получить CDL</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Школа CDL на русском</Link>
              </li>
              <li className="font-inter font-normal text-base text-warm-gray">
                <Link href={'#'}>Найти работу</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-gray-deep pt-[30px] pb-2.5">
        <p className="font-inter font-normal text-base text-white">
          ©2025 TruckDriver.help LLC
        </p>
        <p className="font-inter font-normal text-base text-white">
          Все права защищены
        </p>
        <span className="font-inter font-normal text-sm text-gray-violent">
          Платформа принадлежит компании и не относится к государственным
          организациям
        </span>
      </section>
    </div>
  );
};
