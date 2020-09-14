import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import './_style.scss';
import { dateHandler } from '../../../utils/func-helpers';
import CustomDatePicker from '../../atoms/CustomDatePicker/CustomDatePicker';
import NewsEventsTable from '../NewsEventsTable/NewsEventsTable';

const DayModal = ({ defaultValue, visible, setVisible }) => {
  const [day, setDay] = useState();
  const { yesterday, tomorrow, format } = dateHandler;

  useEffect(() => {
    setDay(defaultValue);
  }, [defaultValue]);

  const handlePickerChange = value => value && setDay(value);

  return (
    <Modal
      title="Información del día"
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => setVisible(false)}
      cancelButtonProps={{ style: { display: 'none' } }}
      width={600}
    >
      <div>
        <div className="dateComponent">
          <p className="date">Fecha</p>
          <div className="datePicker">
            <CustomDatePicker action={handlePickerChange} defaultDate={format(defaultValue)} />
          </div>
          <div className="currentDate">
            <Button onClick={() => setDay(yesterday(day))} shape="circle" size="small">
              {'<'}
            </Button>
            <span id="day">{day}</span>
            <Button onClick={() => setDay(tomorrow(day))} shape="circle" size="small">
              {'>'}
            </Button>
          </div>
        </div>
        <div className="newsTable">
          <NewsEventsTable />
        </div>
      </div>
    </Modal>
  );
};

export default DayModal;
