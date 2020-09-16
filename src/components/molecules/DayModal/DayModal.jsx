import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import './_style.scss';
import { dateHandler, isNowOlderThan } from '../../../utils/func-helpers';
import CustomDatePicker from '../../atoms/CustomDatePicker/CustomDatePicker';
import NewsEventsTable from '../NewsEventsTable/NewsEventsTable';
import apiCalls from '../../../services/api-calls/all';

const { getNewEvents, getWeathersDay } = apiCalls();

const DayModal = ({ defaultValue, visible, setVisible }) => {
  const [day, setDay] = useState();
  const [news, setNews] = useState([]);
  const [weathersDay, setWeathersDay] = useState();

  const { sumDays, tomorrow, format } = dateHandler;

  useEffect(() => {
    setDay(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const loadData = async () => {
      const weather = await getWeathersDay({ date: day });
      setWeathersDay(weather);
      const newsEvents = getNewEvents({ dateFrom: sumDays(day, -2), dateTo: day });
      setNews(newsEvents);
    };
    loadData();
  }, [day]);

  const handlePickerChange = value => value && setDay(value);

  const isNextDayDisabled = isNowOlderThan(tomorrow(day));

  const hide = () => setVisible(false);

  return (
    <Modal
      title="Información del día"
      visible={visible}
      onCancel={hide}
      onOk={hide}
      cancelButtonProps={{ style: { display: 'none' } }}
      width={600}
    >
      <div>
        <div className="dateComponent">
          <p className="date">Fecha</p>
          <div className="datePicker">
            <CustomDatePicker action={handlePickerChange} dateValue={format(day)} />
          </div>
          <div className="currentDate">
            <Button onClick={() => setDay(sumDays(day, -1))} shape="circle" size="small">
              {'<'}
            </Button>
            <span id="day">{day}</span>
            <Button
              onClick={() => setDay(tomorrow(day))}
              disabled={isNextDayDisabled}
              shape="circle"
              size="small"
            >
              {'>'}
            </Button>
          </div>
          <div className="weather">
            {weathersDay && (
              <>
                <img
                  src={`img/${weathersDay.image}`}
                  width="40"
                  height="40"
                  alt={weathersDay.image}
                />
                <div className="description">
                  <span id="temps">
                    {`max: ${weathersDay.maxTemperature}°c,
                  min: ${weathersDay.minTemperature}°c`}
                    <br />
                  </span>
                  {weathersDay.description}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="newsTable">
          <NewsEventsTable newsEvents={news} />
        </div>
      </div>
    </Modal>
  );
};

export default DayModal;
