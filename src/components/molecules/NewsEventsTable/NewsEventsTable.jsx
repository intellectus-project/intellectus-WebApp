import React from 'react';
import './_style.scss';
import { Table, Icon, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/func-helpers';

const NewsEventsTable = ({ newsEvents }) => {
  const pageSize = 10;
  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'created',
      key: 'created',
      width: '20%',
      align: 'center',
      render: date => formatDate(date)
    },
    {
      title: 'Noticia',
      dataIndex: 'title',
      key: 'name',
      align: 'center',
      render: newEvent => (
        <Tooltip title={newEvent}>
          {newEvent.length > 40 ? newEvent.slice(0, 40).concat('...') : newEvent}
        </Tooltip>
      )
    },
    {
      title: 'Ver',
      dataIndex: 'url',
      key: 'age',
      align: 'center',
      width: '20%',
      render: link => (
        <>
          <a href={link}>
            <Icon type="eye" />
          </a>{' '}
        </>
      )
    }
  ];

  return (
    <div className="NewEventsTable">
      <Table
        title={() => 'Noticias del período'}
        bordered
        dataSource={newsEvents}
        columns={columns}
        pagination={{ pageSize }}
        locale={{ emptyText: 'No se encontraron noticias en el rango de fechas seleccionado' }}
      />
    </div>
  );
};

NewsEventsTable.propTypes = {
  newsEvents: PropTypes.array.isRequired
};

export default NewsEventsTable;
