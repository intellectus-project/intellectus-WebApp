import React from 'react';
import { Table, Icon } from 'antd';
import { CALL } from '../../../utils/constants';
import PropTypes from 'prop-types';
import './_style.scss';
import { formatCall } from '../../../utils/func-helpers';

const OperatorCalls = ({ calls, handleCallClick }) => {
  const formattedCalls = calls !== [] && calls.map(c => formatCall(c));
  const pageSize = 5;
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
  calls: PropTypes.object.isRequired,
  handleCallClick: PropTypes.func.isRequired
};

export default OperatorCalls;
