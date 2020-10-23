import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import './_style.scss';

const BackButton = ({ toUrl, colorWay }) => {
    const onClick = () => {
        window.location = toUrl;
    }

    return (
        <div class="backButtonContainer">
            <Button type={colorWay} onClick={onClick}>
                <Icon type="left" />
                Go back
            </Button>
        </div>
    );
};

BackButton.propTypes = {
    toUrl: PropTypes.string,
    colorWay: PropTypes.string

};

BackButton.defaultProps = {
    toUrl: '',
    colorWay: false,
};

export default BackButton;
