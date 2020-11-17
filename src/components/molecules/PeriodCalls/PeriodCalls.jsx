import React from 'react';
import './_style.scss';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { formatCall, dateHandler } from '../../../utils/func-helpers';

const PeriodCalls = ({ calls }) => {
  const formattedCalls = calls.map(c => formatCall(c));
  const pageSize = 10;
  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'endTime',
      key: 'endTime',
      align: 'center',
      render: time => dateHandler.formatDateToShow(time)
    },
    {
      title: 'Duración',
      dataIndex: 'duration',
      key: 'duration',
      align: 'center'
    },
    {
      title: 'Operador',
      dataIndex: 'operator',
      key: 'operator',
      width: '20%',
      align: 'center'
    }
  ];

  const onRowClick = row => {
    window.location = `call?id=${row.id}`;
  };

  return (
    <div className="PeriodCalls">
      <Table
        onRowClick={onRowClick}
        title={() => 'Llamadas del período'}
        bordered
        dataSource={formattedCalls}
        columns={columns}
        pagination={{ pageSize }}
        locale={{ emptyText: 'No se encontraron llamadas en el rango de fechas seleccionado' }}
      />
    </div>
  );
};

PeriodCalls.propTypes = {
  calls: PropTypes.object.isRequired
};

export default PeriodCalls;
