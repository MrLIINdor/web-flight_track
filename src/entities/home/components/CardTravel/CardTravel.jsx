import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './CardTravel.scss';

export default function CardTravel({ editModal, data }) {
  return (
    <div className="box-travel">
      <div className="box-travel-title">
        <p>Трип в Армению</p>

        <div className="box-travel-title-btn">
          <Button icon={<EditOutlined />} onClick={() => editModal(data)}></Button>
          <Button icon={<DeleteOutlined />}></Button>
        </div>
      </div>

      <div className="box-travel-info">
        <p>9 мая</p>

        <div className="box-travel-info-dates">
          <p>19:55</p>
          <p>21:25</p>

          <p>VKO</p>
          <p>MSQ</p>
        </div>
      </div>

      <div className="box-travel-times">
        <p>Время в пути</p>
        <p>8:12</p>
      </div>
    </div>
  );
}
