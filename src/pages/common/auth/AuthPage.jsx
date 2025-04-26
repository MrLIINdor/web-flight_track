import React, { useState } from 'react';
import AnimationContainer from '../../../widgets/AnimationContainer/AnimationContainer';
import FormItem from 'antd/es/form/FormItem';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { EyeInvisibleOutlined, EyeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
// import { setAuthorizationData } from '../../../shared/utils/authUtils';
import { PLATFORM } from '../../../app/providers/RouterConfig';
import { useTranslation } from 'react-i18next';
import './AuthPage.scss';

export default function AuthPage() {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoadingHandle, setIsLoadingHandle] = useState(false);
  const [queryData, setQueryData] = useState({
    login: '',
    pwd: '',
  });

  const queryDataOnChange = (e) => {
    setQueryData((prevQueryData) => ({ ...prevQueryData, [e.target.name]: e.target.value }));
  };

  const onFinish = async () => {
    setIsLoadingHandle(true);
    // const response = await dispatch(getSingInAction());

    // if (response?.meta?.requestStatus == 'fulfilled') {
    // setAuthorizationData(response);
    navigate(PLATFORM);
    // }

    setIsLoadingHandle(false);
  };

  return (
    <div className="box-auth">
      <AnimationContainer direction="right">
        <div className="box-auth-card">
          <Form onFinish={onFinish} className="box-auth-card-form">
            <div className="box-auth-card-form__inputs">
              <img className="box-auth-card-form__img" src="./motorhome.svg" alt="err" />

              <FormItem
                name="login"
                // rules={[{ required: true, message: `${t('common:enter')}` + `${t('common:login')}` }]}
              >
                <Input
                  size="large"
                  name="login"
                  placeholder={t('common:login')}
                  prefix={<UserOutlined />}
                  value={queryData.username}
                  onChange={queryDataOnChange}
                />
              </FormItem>

              <FormItem
                name="pwd"
                // rules={[
                //   { required: true, message: `${t('common:enter')}` + `${t('common:password')}` },
                // ]}
              >
                <Input.Password
                  size="large"
                  name="pwd"
                  placeholder={t('common:password')}
                  prefix={<LockOutlined />}
                  iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                  value={queryData.password}
                  onChange={queryDataOnChange}
                />
              </FormItem>
            </div>

            <Button loading={isLoadingHandle} htmlType="submit" type="primary" block={true}>
              {t('common:singIn')}
            </Button>
          </Form>
        </div>
      </AnimationContainer>
    </div>
  );
}
