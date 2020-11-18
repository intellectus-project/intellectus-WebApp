import React from 'react';
import './_style.scss';
import { Table, Icon } from 'antd';
import { CALL } from '../../../utils/constants';
import PropTypes from 'prop-types';
import { formatCall, dateHandler, formatDateTime } from '../../../utils/func-helpers';

const PeriodCalls = ({ calls, handleCallClick }) => {

  const formattedCalls = calls.map(c => formatCall(c));
  console.log(formattedCalls)
  const pageSize = 10;
  const columns = [
    {
      title: 'Comienzo',
      dataIndex: 'startTime',
      key: 'startTime',
      align: 'center',
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
    },
    {
      title: 'Ver',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: id => (
        <a href={`${CALL}?id=${id}`} onClick={handleCallClick}>
          <Icon type="eye" />
        </a>
      )
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
