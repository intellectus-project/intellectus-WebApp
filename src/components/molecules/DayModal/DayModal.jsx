import React, { useState, useEffect } from 'react';
import { Modal, Button, DatePicker } from 'antd';
import './_style.scss';
import { dateHandler, isNowOlderThan, dateFormat } from '../../../utils/func-helpers';
import NewsEventsTable from '../NewsEventsTable/NewsEventsTable';
import apiCalls from '../../../services/api-calls/all';

const { getNewEvents, getWeathersDay } = apiCalls();

const DayModal = ({ defaultValue, visible, setVisible }) => {
  const [day, setDay] = useState();
  const [news, setNews] = useState([]);
  const [weathersDay, setWeathersDay] = useState();
  const { sumDays, tomorrow, format, formatForApi } = dateHandler;

  const formatToApiQuery = d => formatForApi(format(d));

  useEffect(() => {
    setDay(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const loadData = async () => {
      const formattedDay = formatToApiQuery(day);
      const formattedTwoDaysAgo = formatToApiQuery(sumDays(day, -2));
      const weather = await getWeathersDay({ date: formattedDay });
      setWeathersDay(weather);
      const newsEvents = getNewEvents({ dateFrom: formattedTwoDaysAgo, dateTo: formattedDay });
      setNews(newsEvents);
    };
    loadData();
  }, [day]);

  const isNextDayDisabled = isNowOlderThan(tomorrow(day));

  const hide = () => setVisible(false);

  const handlePickerChange = (s, d) => setDay(s);

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
            <DatePicker
              onChange={handlePickerChange}
              value={format(day)}
              format={dateFormat}
              disabledDate={date => isNowOlderThan(date)}
              allowClear={false}
            />
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
