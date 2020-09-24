import React from 'react';
import './_style.scss';
import PropTypes from 'prop-types';
import { EMOTIONS } from './Emotions'

const EmotionIcon = ({ emotion }) => {
    return (
        <div> { emotion ? emotion.name : '' }</div>
    );
};


EmotionIcon.propTypes = {
    emotion: PropTypes.oneOf(Object.keys(EMOTIONS)).isRequired
};

export default EmotionIcon;
