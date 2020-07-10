import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
//import { UserContext } from '../../services/providers/user-context.jsx';
//import Header from '../molecules/header/header';
//import { LOGIN_URL, HOME_URL } from '../../utils/constants';

const PrivateRoute = ({ component: Component, requireAuthentication, ...rest }) => {
  //const { user } = useContext(UserContext);
//   const getComponent = () =>
//     rest.path === '/' ? (
//       <Redirect to={HOME_URL} />
//     ) : (
//       <div>
//         <Header />
//         <Route {...rest} render={properties => <Component {...properties} />} />
//       </div>
//     );

  if (!requireAuthentication) {
    return <Route {...rest} render={properties => <Component {...properties} />} />;
  }

  //return user.accessToken ? getComponent() : <Redirect to={LOGIN_URL} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string,
  requireAuthentication: PropTypes.bool.isRequired
};

PrivateRoute.defaultProps = {
  exact: false
};

export default PrivateRoute;
