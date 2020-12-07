import React from 'react';
import { Table, Icon, Tag } from 'antd';
import { CALL } from '../../../utils/constants';
import PropTypes from 'prop-types';
import './_style.scss';
import { formatDateWithTime } from '../../../utils/func-helpers';


const BreaksTable = ({ breaks }) => {
  const pageSize = 10;
  const columns = [
    {
      title: 'Comienzo',
      dataIndex: 'updated',
      key: 'updated',
      align: 'center',
      render: date => formatDateWithTime(date),
    },
    {
      title: 'Duración (en minutos)',
      dataIndex: 'duration',
      key: 'duration',
      align: 'center'
    },
    {
      title: 'Reclamado por',
      key: 'givenBySupervisor',
      dataIndex: 'givenBySupervisor',
      render: givenBySupervisor => (
        <span>
          <Tag color={givenBySupervisor ? 'geekblue' : 'purple'} key={givenBySupervisor}>
            {givenBySupervisor ? 'Supervisor' : 'Operador' }
          </Tag>

        </span>
      ),
      align: 'center'
    },
  ];
  return (
    <div className="BreaksTable">
      <Table
        title={() => 'Descansos'}
        bordered
        dataSource={breaks}
        columns={columns}
        pagination={{ pageSize }}
        locale={{ emptyText: 'El operador no se tomo descansos en el dia de hoy' }}
      />
    </div>
  );
};

BreaksTable.propTypes = {
  breaks: PropTypes.object.isRequired
};

export default BreaksTable;
