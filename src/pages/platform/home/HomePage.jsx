import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import CardTravel from '../../../entities/home/components/CardTravel/CardTravel';
import ModalTravel from '../../../entities/home/components/ModalTravel/ModalTravel';
import './HomePage.scss';
import AnimationContainer from '../../../widgets/AnimationContainer/AnimationContainer';

export default function HomePage() {
  const { t } = useTranslation(['common', 'home']);
  const [modalState, setModalState] = useState({ isOpen: false, isEdit: false });
  const [cardTravel, setCardTravel] = useState(null);
  const arrCard = [
    { id: 1, data: { text: 'nj1' } },
    { id: 2, data: { text: 'nj2' } },
    { id: 3, data: { text: 'nj3' } },
    { id: 4, data: { text: 'nj4' } },
    { id: 5, data: { text: 'nj5' } },
    { id: 6, data: { text: 'nj6' } },
    { id: 7, data: { text: 'nj7' } },
  ];

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
          {arrCard.map((el) => (
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
