import React from 'react';
import './_style.scss';
import PropTypes from 'prop-types';
import EMOTIONS from '../../../utils/emotions'

const EmotionIcon = ({ emotion, percentage }) => {

    return (
        <>
            {emotion && emotion.icon()}
            {percentage && <span id="percentage">{` ${Math.round(percentage * 100)}%`}</span>}
            <p>{emotion && emotion.name}</p>
        </>
    );
};


EmotionIcon.propTypes = {
    emotion: PropTypes.oneOf(Object.keys(EMOTIONS)).isRequired
};

export default EmotionIcon;
