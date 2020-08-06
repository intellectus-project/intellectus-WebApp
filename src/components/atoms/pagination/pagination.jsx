import React from 'react';
import { Pagination } from 'antd';
import './_style.scss';

const PaginationAdm = properties => (
  <div className="pagination">
    <Pagination showQuickJumper {...properties} />
  </div>
);

export default PaginationAdm;
