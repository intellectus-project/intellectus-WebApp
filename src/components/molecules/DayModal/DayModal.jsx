import React from 'react';
import { Modal, Button } from 'antd';
import './_style.scss';

const DayModal = ({ defaultValue, visible, setVisible }) => {
  return (
    <Modal
      title="Información del día"
      visible={visible}
      onOk={() => setVisible(false)}
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      <div>
        <p className="date">Fecha</p>
        <div className="currentDate">
        <Button shape="circle" size="small">
          {'<'}
        </Button>
        <span id="day">{defaultValue}</span>
        <Button shape="circle" size="small">
          {'>'}
        </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DayModal;
