import React from 'react';
import './HomePage.scss';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation(['common', 'home']);

  return (
    <div className="box-home">
      <div>
        <p>{t('home:titleHistory')}</p>

        <div></div>
      </div>
    </div>
  );
}
