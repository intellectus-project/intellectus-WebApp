import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Icon } from 'antd';
import './_style.scss';
import { EDIT_USER } from '../../../utils/constants';

const CardCopy = ({ id, lastName, firstName, role, type, active, switchStatus }) => (
  <div
    className={active ? 'CardCopyContainer' : 'CardCopyContainer disableCard'}
    theme={active ? '' : 'disableCard'}
  >
    <div className="iconSection">
      <img src="img/avatarBlack.png" alt="avatar" />
    </div>
    <div className="textSection">
      <p className="label">{type}</p>
      <h2 className="title">
        {firstName} {lastName}
      </h2>
      <p className="subtitle">{role}</p>
    </div>
    <div className="iconSection">
      <div>
        <a href={EDIT_USER+"?id="+id}>
          <img src="img/edit.png" alt="edit" />
        </a>
      </div>
      <Switch
        checkedChildren={<Icon type="check" />}
        unCheckedChildren={<Icon type="close" />}
        defaultChecked={active}
        onChange={() => switchStatus(id)}
      />
    </div>
  </div>
);

CardCopy.propTypes = {
  active: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  switchStatus: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default CardCopy;
