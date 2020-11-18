import React, { useContext } from 'react';
import { LinkContext } from '../../../services/providers/prev-link';
import { useHistory } from 'react-router-dom';
import { Button, Icon } from 'antd';
import defaultPreviousUrls from '../../../utils/backUrls-helper';
import PropTypes from 'prop-types';
import './_style.scss';

const BackButton = ({ toUrl, text, colorWay, id }) => {
  let history = useHistory();
  const { setPrevLink } = useContext(LinkContext);

  const currentPath = history.location.pathname;

  const onClick = () => {
    const idUrl = id ? `?id=${id}` : '';
    let nextUrl = `${toUrl}${idUrl}`;
    if( !toUrl || toUrl === currentPath  ) {
      nextUrl = defaultPreviousUrls[currentPath];
      setPrevLink(nextUrl);
    }
    window.location = nextUrl;
  };

  return (
    <div class="backButtonContainer">
      <Button type={colorWay} onClick={onClick}>
        <Icon type="left" />
        {text || 'Volver'}
      </Button>
    </div>
  );
};

BackButton.propTypes = {
  toUrl: PropTypes.string,
  text: PropTypes.string,
  colorWay: PropTypes.string,
  id: PropTypes.string
};

BackButton.defaultProps = {
  toUrl: '',
  colorWay: false
};

export default BackButton;
