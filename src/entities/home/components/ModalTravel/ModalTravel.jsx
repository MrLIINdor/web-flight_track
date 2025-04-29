import React from 'react';
import './ModalTravel.scss';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';

export default function ModalTravel({ data, open, isEdit, closeModal }) {
  const { t } = useTranslation(['common']);

  return (
    <Modal
      open={open}
      onCancel={closeModal}
      title={isEdit ? t('common:modalEditTitle') : t('common:modalCreateTitle')}
      footer={null}
      destroyOnClose
    >
      {data?.text}
    </Modal>
  );
}
