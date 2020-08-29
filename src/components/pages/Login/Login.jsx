import React, { useContext, useState, useEffect, Component } from 'react';
import { UserContext } from '../../../services/providers/user-context';
import { loginInputs } from '../../../utils/form_inputs/inputs-login';
import apiCalls from '../../../services/api-calls/all';
import AntForm from '../../molecules/ant-form';
import { processedErrorMessage } from '../../../services/api-calls/helpers';
import { useRedirect } from '../../Router/redirect';
import { HOME_URL } from '../../../utils/constants';
import './_style.scss';
import '../../../css/app.scss';

const { loginRequest } = apiCalls();

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState();
  const { redirect, setUrlToRedirect } = useRedirect();

  useEffect(() => {
    if (user.accessToken) setUrlToRedirect(HOME_URL);
  }, [user]);

  const login = async values => {
    delete Object.assign(values, { username: values.email }).email;
    try {
      const { data: logInData } = await loginRequest(values);
      setUser(logInData);
    } catch (error) {
      const errorMessage = processedErrorMessage(error);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="ContainerAppLogin">
      {redirect()}
      <div className="loginLogo">
        <div>
          <img src="img/loginImg.png" alt="loginLogo" />
        </div>
      </div>
      <div className="LoginFormContainer">
        <div className="formImg">
          <img src="img/logo.png" alt="formImg" />
        </div>
        <AntForm inputs={loginInputs} handleSubmit={login} submitText={'Entrar'} />
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
