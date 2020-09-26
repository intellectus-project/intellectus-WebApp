import React from 'react';
import './_style.scss';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { formatCall } from '../../../utils/func-helpers';

const OperatorCalls = ({ calls }) => {
  const formattedCalls = calls !== [] && calls.map(c => formatCall(c));
  const pageSize = 10;
  const columns = [
    {
      title: 'Comienzo',
      dataIndex: 'startTime',
      key: 'startTime',
      align: 'center'
    },
    {
      title: 'Duración',
      dataIndex: 'duration',
      key: 'duration',
      align: 'center'
    },
    {
      title: 'Clima',
      dataIndex: 'weather',
      key: 'weather',
      align: 'center'
    },
  ];
  return (
    <div className="PeriodCalls">
      <Table
        title={() => 'Llamadas del día'}
        bordered
        dataSource={formattedCalls}
        columns={columns}
        pagination={{ pageSize }}
        locale={{ emptyText: 'No se encontraron llamadas en el día seleccionado' }}
      />
    </div>
  );
};

OperatorCalls.propTypes = {
    calls: PropTypes.object.isRequired
  };

export default OperatorCalls;
