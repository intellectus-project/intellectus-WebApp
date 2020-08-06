import React, { useState, useRef, useEffect } from 'react';
import { Icon, message, Spin } from 'antd';

import '../../../css/app.scss';
import apiCalls from '../../../services/api-calls/all';
import AntForm from '../../molecules/ant-form';
import {
  inputsUserDetails,
  inputsSetUserPassword,
  inputSetUserRole
} from '../../../utils/form_inputs/inputs-user';
import { useRedirect } from '../../Router/redirect';
import { USERS_URL } from '../../../utils/constants';
import { processedErrorMessage } from '../../../services/api-calls/helpers';
import {
  type,
  newPassword,
  confirmNewPassword
} from '../../../utils/form_inputs/inputs-texts';

import './_style.scss';


const createUserInputs = [
  ...inputsUserDetails,
  ...inputsSetUserPassword,
  ...inputSetUserRole
];

const { createUser } = apiCalls();

const CreateUser = () => {
  const formReference = useRef(null);
  const { redirect, setUrlToRedirect } = useRedirect();
  const [selectedKey, setSelectedKey] = useState();
  const [formInputs, setFormInputs] = useState([]);
  const [loading, setLoading] = useState(false);

  const compareToFirstPassword = (rule, value, callback) => {
    if (!formReference.current)
      return callback();
    if (!value) value = '';
    const passwordMatch = value !== formReference.current.form.getFieldValue(newPassword.name);
    passwordMatch ? callback('The passwords do not match.') : callback();
  };

  useEffect(() => {
    const processedCreateUserInputs = createUserInputs.map(input => {
      if (input.name === confirmNewPassword.name) {
        input.rules = [...input.rules, { validator: compareToFirstPassword }];
      }
      return input;
    });
    setFormInputs(processedCreateUserInputs);
  }, []);

  const handleSubmit = async values => {
    if (loading) return;
    const username = values.email;
    const processedValues = { ...values, selectedKey, username };
    setLoading(true);
    try {
        console.log(processedValues);
      await createUser(processedValues);
      message.success('Usuario creado con exito');
      setUrlToRedirect(USERS_URL);
    } catch (error) {
      const errorMessage = processedErrorMessage(error);
      message.error(errorMessage);
    }
    setLoading(false);
  };

  return (
    <div className="mainSection">
      {redirect()}
      <div className="loadingComponent">{loading && <Spin tip="Loading.." />}</div>
      <div className="backAndUser">
        <button onClick={() => setUrlToRedirect(USERS_URL)}>
          <Icon type="left" /> Volver
        </button>
      </div>
      <div className="userDetails">
        <div className="formStyle">
          <AntForm
            wrappedComponentRef={formReference}
            inputs={formInputs}
            handleSubmit={handleSubmit}
            submitText="Crear usuario"
            submitTheme="ThemePrimary"
            submitButtonClass="buttonSection"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
