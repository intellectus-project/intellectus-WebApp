import React from 'react';
import './_style.scss';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { formatCall } from '../../../utils/func-helpers';

const PeriodCalls = ({ calls }) => {
  const formattedCalls = calls.map(c => formatCall(c));
  const pageSize = 10;
  const columns = [
    {
      title: 'Operador',
      dataIndex: 'operator',
      key: 'operator',
      width: '20%',
      align: 'center'
    },
    {
      title: 'Duracion',
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
    {
      title: 'Turno',
      dataIndex: 'shift',
      key: 'shift',
      align: 'center'
    }
  ];
  return (
    <div className="PeriodCalls">
      <Table
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
