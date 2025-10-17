import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import CardTravel from '../../../entities/home/components/CardTravel/CardTravel';
import ModalTravel from '../../../entities/home/components/ModalTravel/ModalTravel';
import AnimationContainer from '../../../widgets/AnimationContainer/AnimationContainer';
import { arrCard } from '../../../shared/utils/data/card';
import './HomePage.scss';

export default function HomePage() {
  const { t } = useTranslation(['common', 'home']);
  const [modalState, setModalState] = useState({ isOpen: false, isEdit: false });
  const [cardTravel, setCardTravel] = useState(null);

  function closeModal() {
    setModalState((prevModalState) => ({ ...prevModalState, isOpen: false }));
  }

  function editModal(data) {
    setCardTravel(data);
    setModalState((prevModalState) => ({ ...prevModalState, isOpen: true, isEdit: true }));
  }

  function createModal() {
    setCardTravel(null);
    setModalState((prevModalState) => ({ ...prevModalState, isOpen: true, isEdit: false }));
  }

  return (
    <div className="box-home">
      <div className="box-home-history">
        <div className="box-home-history-title">
          <p className="box-home-history-title__page">{t('home:titleHistory')}</p>

          <Button onClick={createModal} type="primary">
            {t('common:create')}
          </Button>
        </div>

        <div className="box-home-history-cards">
          {arrCard?.map((el) => (
            <AnimationContainer index={el.id + 1}>
              <CardTravel data={el.data} editModal={editModal} />
            </AnimationContainer>
          ))}
        </div>
      </div>

      <ModalTravel
        data={cardTravel}
        open={modalState.isOpen}
        isEdit={modalState.isEdit}
        closeModal={closeModal}
      />
    </div>
  );
}
