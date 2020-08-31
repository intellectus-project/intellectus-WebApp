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
import { USERS_URL, ROLE_OPERATOR } from '../../../utils/constants';
import { processedErrorMessage } from '../../../services/api-calls/helpers';
import { type, newPassword, confirmNewPassword } from '../../../utils/form_inputs/inputs-texts';
import './_style.scss';
import CustomDropdown from '../../atoms/CustomDropdown/CustomDropdown';
import { isNullOrUndefined } from 'util';

const createUserInputs = [...inputsUserDetails, ...inputsSetUserPassword, ...inputSetUserRole];

const { createUser, getSupervisors } = apiCalls();

const CreateUser = () => {
  const formReference = useRef(null);
  const { redirect, setUrlToRedirect } = useRedirect();
  const [selectedKey, setSelectedKey] = useState();
  const [formInputs, setFormInputs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [supervisors, setSupervisors] = useState([]);
  const [supervisorId, setSupervisorId] = useState();
  const [supervisorsVisible, setSupervisorsVisible] = useState(false);

  const selectStyle = { width: 250 };

  const compareToFirstPassword = (rule, value, callback) => {
    if (!formReference.current) return callback();
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
    fetchAllSupervisors();
  }, []);

  const fetchAllSupervisors = async () => {
    try {
      const response = await getSupervisors();
      setSupervisors(response);
    } catch (error) {
      const errorMessage = processedErrorMessage(error);
      message.error(errorMessage);
    }
  };

  const handleSubmit = async values => {
    if (loading) return;
    if (isNullOrUndefined(supervisorId) && values.role === ROLE_OPERATOR) {
      return message.warn('Tenes que seleccionar al menos un supervisor');
    }
    const username = values.email;
    const processedValues = { ...values, selectedKey, username, supervisorId };
    setLoading(true);
    try {
      await createUser(processedValues);
      message.success('Usuario creado con exito');
      setUrlToRedirect(USERS_URL);
    } catch (error) {
      const errorMessage = processedErrorMessage(error);
      message.error(errorMessage);
    }
    setLoading(false);
  };

  const handleFormItemChange = data => {
    if (!data.target.type === 'radio') return;
    data.target.value === 'ROLE_OPERATOR'
      ? setSupervisorsVisible(true)
      : setSupervisorsVisible(false);
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
            handleChange={handleFormItemChange}
          />
          {supervisorsVisible && (
            <CustomDropdown
              style={selectStyle}
              placeholder="Supervisors"
              action={setSupervisorId}
              content={supervisors}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
