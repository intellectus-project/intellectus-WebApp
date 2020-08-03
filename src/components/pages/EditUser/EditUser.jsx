import React, { useState, useRef, useEffect } from "react";
import { Icon, message } from "antd";
import "antd/dist/antd.css";
import "../../../css/app.scss";
import apiCalls from "../../../services/api-calls/all";
import AntForm from "../../molecules/ant-form";
import {
  inputsUserDetails,
  inputsEditUserPassword,
  inputSetUserRole
} from "../../../utils/form_inputs/inputs-user";
import { useRedirect } from "../../Router/redirect";
import { USERS_URL } from "../../../utils/constants";
import { processedErrorMessage } from "../../../services/api-calls/helpers";
import {
  newPassword,
  confirmNewPassword
} from "../../../utils/form_inputs/inputs-texts";
import { getUrlParam as getUrlParameter } from "../../../utils/func-helpers";

const createUserInputs = [
  ...inputsUserDetails,
  ...inputsEditUserPassword,
  ...inputSetUserRole
];

const { updateUserById, getUserById } = apiCalls();

const EditUser = () => {
  const userId = getUrlParameter("id");
  const formReference = useRef();
  const { redirect, setUrlToRedirect } = useRedirect();
  const [user, setUser] = useState({});
  const [selectedKey, setSelectedKey] = useState();
  const [formInputs, setFormInputs] = useState([]);

  const compareToFirstPassword = (rule, value, callback) => {
    if (!formReference.current) return callback();
    if (!value) value = "";
    if (newPassword) {
      const passwordMatch =
        formReference.current.form.getFieldValue(newPassword.name) &&
        value !== formReference.current.form.getFieldValue(newPassword.name);
      passwordMatch ? callback("Las contraseñas no coinciden.") : callback();
    }
  };

  const getBaseUser = async () => {
    if (userId) {
      try {
        const gettingUser = await getUserById(userId);
        setUser(gettingUser);
        return gettingUser;
      } catch (error) {
        const errorMessage = processedErrorMessage(error);
        message.error(errorMessage);
      }
    }
  };

  useEffect(() => {
    async function loadPage() {
      const us = await getBaseUser();
      const processedCreateUserInputs = createUserInputs.map((input) => {
        if (input.name === confirmNewPassword.name) {
          input.rules = [...input.rules, { validator: compareToFirstPassword }];
        }
        return input;
      });
      setFormInputs(processedCreateUserInputs);
    }
    loadPage();
  }, []);

  useEffect(() => {
    getBaseUser();
  }, [formInputs]);

  useEffect(() => {
    formInputs.map((input) => {
      if (
        input.name === newPassword.name ||
        input.name === confirmNewPassword.name
      )
        input.disabled = true;
      return input;
    });
    const list = formInputs.map((input) => ({
      [input.name]: user[input.name],
    }));
    const { role, ...json } = Object.assign({}, ...list);
    const parsedJson = {
      ...json,
      role: role ? role.code : undefined,
    };
    if (formReference.current)
      formReference.current.form.setFieldsValue(parsedJson);
  }, [user, formInputs]);

  const handleSubmit = async (values) => {
    const username = values.email;
    const processedValues = { ...values, selectedKey, username };

    delete processedValues.prefix;
    try {
      await updateUserById(userId, processedValues);
      message.success("Usuario actualizado con exito");
      setUrlToRedirect(USERS_URL);
    } catch (error) {
      const errorMessage = processedErrorMessage(error);
      message.error(
        "Ocurrieron algunos errores,por favor contacte con un administrador.",
        errorMessage
      );
    }
  };

  return (
    <div className="mainSection">
      {redirect()}
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
            submitText="Guardar"
            submitTheme="ThemePrimary"
            submitButtonClass="buttonSection"
          />
        </div>
      </div>
    </div>
  );
};

export default EditUser;
