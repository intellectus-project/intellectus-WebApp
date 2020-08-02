import React, { useState, useRef, useEffect } from 'react';
import { Icon, message, Select, Spin } from 'antd';

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
import { compare } from '../../../utils/func-helpers';

import './_style.scss';

const { Option } = Select;

const createUserInputs = [
  ...inputsUserDetails,
  ...inputsSetUserPassword,
  ...inputSetUserRole
];

const { findAllZones, createUser, getUserById } = apiCalls();

const territoriesEndpointsTranslators = {
  GLOBAL: undefined,
  ZONES: findAllZones
};

const CreateUser = () => {
  const formReference = useRef(null);
  const { redirect, setUrlToRedirect } = useRedirect();
  const [checkedList, setCheckedList] = useState('Global');
  const [checkedListOptions, setCheckedListOptions] = useState([]);
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

//   const handleTerritoryChange = async value => {
//     setCheckedList(value);
//     setSelectedKey();
//     const endpoint = territoriesEndpointsTranslators[value];
//     if (endpoint) {
//       try {
//         const dataTable = await findAllZones();
//         const results = Object.values(dataTable.sort((a, b) => compare(a, b, 'name')));
//         results.forEach(v => {
//           delete v.countries;
//           delete v.zoneId;
//           delete v.updated;
//           delete v.created;
//         });
//         setCheckedListOptions(results);
//       } catch (error) {
//         const errorMessage = processedErrorMessage(error);
//         message.error(errorMessage);
//       }
//     } else {
//       setCheckedListOptions([]);
//     }
//   };

  useEffect(() => {
    const processedCreateUserInputs = createUserInputs.map(input => {
      if (input.name === confirmNewPassword.name) {
        input.rules = [...input.rules, { validator: compareToFirstPassword }];
      } else if (input.name === type.name) {
        //input.onChange = event => handleTerritoryChange(event.target.value);
      }
      return input;
    });
    setFormInputs(processedCreateUserInputs);
    //const zones = await findAllZones();
    const zones = [{id:1,name: "Recoleta"}, {id: 2, name:"Lugano"}];
    setCheckedListOptions(zones);
  }, []);

  const handleSubmit = async values => {
    if (loading) return;
    if (!selectedKey)
      return message.error('Seleccione por lo menos una Zona');
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
          <div className="InputRoleLabel">Seleccione una zona: </div>
          <Select
            disabled={checkedListOptions.length === 0}
            showSearch
            placeholder={
              checkedListOptions.length !== 0
                ? `Escribe o seleccione una zona`
                : ''
            }
            optionFilterProp="children"
            onChange={value => setSelectedKey(value)}
            value={selectedKey}
            allowClear
            filterOption={(input, option) =>
              option.props.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {checkedListOptions.map((checkedListOption, index) => (
              <Option key={index} value={checkedListOption.id}>
                {checkedListOption.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
