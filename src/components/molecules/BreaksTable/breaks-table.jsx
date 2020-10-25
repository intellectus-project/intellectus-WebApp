import React from 'react';
import { Table, Icon, Tag } from 'antd';
import { CALL } from '../../../utils/constants';
import PropTypes from 'prop-types';
import './_style.scss';
import { formatBreak } from '../../../utils/func-helpers';

/* {
  title: 'Tomado por',
  key: 'givenBySupervisor',
  dataIndex: 'givenBySupervisor',
  render: tags => (
    <span>
      {tags.map(tag => {
        console.log("tag", tag);
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      })}
    </span>
  ),
} */

const BreaksTable = ({ breaks }) => {
  const pageSize = 10;
  const columns = [
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
    }
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
