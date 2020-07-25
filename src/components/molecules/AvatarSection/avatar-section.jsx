import React from 'react';
import CardCopy from '../../atoms/CardCopy/card-copy';
import PropTypes from 'prop-types';
import './_style.scss';

const AvatarSection = ({ users, switchStatus }) => (
  <div className="AvatarSection">
    {users.map(item => (
      <CardCopy
        key={item.id}
        id={item.id}
        lastName={item.lastName}
        firstName={item.name}
        role={item.role.description}
        active={item.active}
        type={item.type}
        switchStatus={id => switchStatus(id)}
      />
    ))}
  </div>
);

AvatarSection.propTypes = {
  switchStatus: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default AvatarSection;
