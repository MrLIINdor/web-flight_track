import React from 'react';
import './AvatarProfile.scss';
import { Avatar, Button, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import useLogout from '../../shared/utils/useLogout';

export default function AvatarProfile() {
  const { t } = useTranslation(['common']);
  const logout = useLogout();

  const items = [
    {
      key: '0',
      label: t('common:profile'),
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      danger: true,
      onClick: () => logout(),
      label: t('common:sinOut'),
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} trigger={['click']}>
        <Avatar size="large" style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
          U
        </Avatar>
      </Dropdown>
    </div>
  );
}
