import React from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation(['common', 'home']);

  return (
    <div className="box-footer">
      {t('common:developers')} {new Date().getFullYear()}
    </div>
  );
}
