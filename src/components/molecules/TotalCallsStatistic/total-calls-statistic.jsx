import React from 'react';
import { Statistic, Icon, Card } from 'antd';
import PropTypes from 'prop-types';
import './_style.scss';

const TotalCallsStatistic = ({ amount }) => {
    return (
        <Card>
            <Statistic title="Llamadas totales" value={amount} prefix={<Icon type="phone" />} className="totalCallsCount" />
        </Card>
    );
};

TotalCallsStatistic.propTypes = {
    amount: PropTypes.number,
};

TotalCallsStatistic.defaultProps = {
    amount: 0,
};

export default TotalCallsStatistic;
