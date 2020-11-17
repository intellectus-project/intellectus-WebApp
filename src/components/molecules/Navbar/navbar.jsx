import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Icon, message } from 'antd';
import './_style.scss';
import PropTypes from 'prop-types';
import { UserContext } from '../../../services/providers/user-context';
import { LinkContext } from '../../../services/providers/prev-link';
import { compare } from '../../../utils/func-helpers';
import { LOGIN_URL, HOME_URL } from '../../../utils/constants';
import { useRedirect } from '../../Router/redirect';
import { processedErrorMessage } from '../../../services/api-calls/helpers';
import apiCalls from '../../../services/api-calls/all';

const { logoutRequest } = apiCalls();

const { SubMenu } = Menu;

const Navbar = ({ navbarEntries }) => {
  const [current, setCurrent] = useState('');
  const { setUser } = useContext(UserContext);
  const { setPrevLink } = useContext(LinkContext);
  const { redirect, setUrlToRedirect } = useRedirect();
  let history = useHistory();

  const signOut = async () => {
    try {
      await logoutRequest();
    } catch (error) {
      const errorMessage = processedErrorMessage(error);
      message.error(errorMessage);
    }
    setUser(null);
    setUrlToRedirect(LOGIN_URL);
  };

  const itemClick = (path) => {
    if (path === LOGIN_URL) {
      setPrevLink(HOME_URL);
      signOut();
    }
    else {
      console.log('prev valu ',history.location.pathname);
    setPrevLink(history.location.pathname);
      setUrlToRedirect(path);
    }
  };

  const menuItemsRenderer = (items) =>
    items
      .sort((a, b) => compare(a, b, 'order'))
      .map((item) => (
        <Menu.Item key={item.key}>
          <button onClick={() => itemClick(item.url)}>
            {item.icon && <Icon type={item.icon} />}
            {item.description}
          </button>
        </Menu.Item>
      ));

  const menuItems = navbarEntries
    .sort((a, b) => compare(a, b, 'order'))
    .map((entry) =>
      entry.items ? (
        <SubMenu
          key={entry.key}
          title={
            <span className="submenu-title-wrapper">
              <button onClick={() => itemClick(entry.url)}>
                {entry.icon && <Icon type={entry.icon} />}
                {entry.description}
              </button>
            </span>
          }
        >
          {menuItemsRenderer(entry.items)}
        </SubMenu>
      ) : (
        menuItemsRenderer([entry])
      )
    );

  return (
    <div>
      {redirect()}
      <Menu
        onClick={({ key }) => setCurrent(key)}
        selectedKeys={[current]}
        mode="horizontal"
        className={'ulMain'}
      >
        {menuItems}
      </Menu>
    </div>
  );
};

Navbar.propTypes = {
  navbarEntries: PropTypes.any,
};

export default Navbar;
