import React from 'react';
import { Card } from 'antd';
import './_style.scss';
import '../../../css/app.scss';
import PropTypes from 'prop-types';
import { formatDateWithTime } from '../../../utils/func-helpers';

const CallDescription = ({ operatorName, startTime, endTime, weather, shift }) => {

    return (
        <>
            <Card size="small" title="Call information" extra={<a href="#">view</a>} style={{ width: 300 }}>
                <p>
                    <strong>
                        Operador:{' '}
                    </strong>
                    {operatorName}
                </p>
                <p>
                    <strong>
                        Fecha:{' '}
                    </strong>
                    {formatDateWithTime(startTime)}
                </p>
                <p>
                    <strong>
                        Clima:{' '}
                    </strong>
                    {weather}
                </p>
                <p>
                    <strong>
                        Turno:{' '}
                    </strong>
                    {shift}
                </p>
            </Card>
        </>
    );
}


CallDescription.propTypes = {
    operatorName: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date),
    endTime: PropTypes.instanceOf(Date),
    weather: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired
};

export default CallDescription;