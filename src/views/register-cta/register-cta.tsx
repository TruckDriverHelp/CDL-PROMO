//! Форма пока не используется инициативой Акмаля так как на фронте приложения нужно будет дополнить логику онборда и логина;
'use client';
import BurgerClose from '@/shared/assets/icons/burger-close.svg';
import Registration from '@/shared/assets/icons/registration.svg';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Select } from '@/shared/ui/select';
import { EzzyModal } from 'ezzy-modal';
import { useTranslations } from 'next-intl';
import { SyntheticEvent } from 'react';
import { ROLE_OPTIONS, STATE_OPTIONS } from './const';

export const RegisterCTA = () => {
  const t = useTranslations('RegisterCta');
  const d = useTranslations('RegistrationFormSent');

  const onSubmit = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      school_name: formData.get('schoolName')?.toString(),
      website: formData.get('website')?.toString(),
      name: formData.get('name')?.toString(),
      state: formData.get('state')?.toString(),
      email: formData.get('email')?.toString(),
      city: formData.get('city')?.toString(),
      address: formData.get('address')?.toString(),
      phone_number: formData.get('phone')?.toString(),
      zip: formData.get('index')?.toString(),
      role: formData.get('role')?.toString(),
    } as const;

    fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/school/public?landing=1`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((data) => {
        if (data.ok) return window.ezzyModal.formSubmit.showModal();
      })
      .catch(() => {
        alert('Something went wrong');
        window.ezzyModal.formSubmit.close();
      });
  };
  return (
    <section
      id="register-cta"
      className="xl:px-72 md:px-20 px-5 bg-snow-mist py-20"
    >
      <h2 className="font-inter font-bold text-clay text-[32px] leading-[38px] mb-4 text-center wrap-break-word">
        {t.rich('title', {
          span: (chunk) => <span className="text-indigo">{chunk}</span>,
        })}
      </h2>
      <p className="font-inter font-normal text-base text-gray-deep pb-[50px] text-center">
        {t('desc')}
      </p>
      <form
        onSubmit={onSubmit}
        className="sm:p-11 px-3 py-8 rounded-xl shadow-muted-violent bg-white"
      >
        <div className="mb-10">
          <p className="font-inter font-bold text-xl text-clay basis-full mb-5">
            {t('company')}
          </p>
          <div className="grid sm:grid-cols-2 gap-7">
            <Input required name="schoolName" label={t('school-name')} />
            <Input name="website" label={t('school-site')} />
          </div>
        </div>
        <div className="mb-10">
          <p className="font-inter font-bold text-xl text-clay basis-full mb-5">
            {t('contacts')}
          </p>
          <div className="grid sm:grid-cols-2 gap-7">
            <Input required name="name" label={t('name')} />
            <Select
              required
              name="state"
              placeholder={t('state')}
              optionsData={STATE_OPTIONS}
            />
            <Input required name="email" type="email" label={t('email')} />
            <Input required name="city" label={t('city')} />
            <Input required name="address" label={t('address')} />
            <Input type="tel" required name="phone" label={t('phone')} />
            <Input type="number" required name="index" label={t('index')} />
            <Select
              name="role"
              placeholder={t('role')}
              optionsData={ROLE_OPTIONS}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="max-sm:w-full"
          content="Оставить заявку"
        />
      </form>

      <EzzyModal closeOnOverlayClick bodyScrollLock id="formSubmit">
        <div className="w-full xl:max-w-[600px] rounded-xl bg-white">
          <div className="px-5 py-4 max-md:border-b border-b-surface flex justify-end items-center">
            <button
              className="cursor-pointer"
              onClick={() => window['ezzyModal']?.formSubmit.close()}
            >
              <BurgerClose />
            </button>
          </div>

          <div className="px-5 py-4 flex flex-col items-center">
            <Registration className="text-purple-fade md:mb-8 mb-6" />
            <h2 className="font-inter font-bold md:text-[32px] md:leading-[40px] text-2xl text-clay mb-3 text-center ">
              {d('title')}
            </h2>
            <p className="font-inter font-normal text-base text-gray-deep text-center">
              {d.rich('desc', {
                Email: (chunk) => (
                  <a
                    href={`mailto:${chunk}`}
                    className="underline text-purple-fade"
                  >
                    Email
                  </a>
                ),
                WhatsApp: (chunk) => (
                  <a
                    href={`${chunk}`}
                    target="_blank"
                    className="underline text-purple-fade"
                  >
                    WhatsApp
                  </a>
                ),
                Telegram: (chunk) => (
                  <a
                    className="underline text-purple-fade"
                    target="_blank"
                    href={`${chunk}`}
                  >
                    Telegram
                  </a>
                ),
              })}
            </p>
          </div>
        </div>
      </EzzyModal>
    </section>
  );
};
