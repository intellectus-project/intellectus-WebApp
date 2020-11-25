import React from 'react';
import { Spin } from 'antd';
import './_style.scss';

const LoadingSpinner = () => <Spin className="loading" size="large" tip="Cargando" />;

export default LoadingSpinner;
