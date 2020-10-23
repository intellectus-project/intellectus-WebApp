import React from 'react';
import { Statistic, Icon, Card } from 'antd';
import PropTypes from 'prop-types';

const TotalCallsStatistic = ({ amount }) => {
    return (
        <Card>
            <Statistic title="Llamadas totales" value={amount} prefix={<Icon type="phone" />} />
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
