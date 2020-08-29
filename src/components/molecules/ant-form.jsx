import React, { useState, useImperativeHandle } from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import ButtonPrimary from '../atoms/ButtonPrimary/button-primary';
import { inputRenderer } from '../../utils/form-helper';

const AntFormInputs = React.forwardRef((p, r) => {
  const {
    handleChange,
    handleSubmit,
    handleErrorSubmit,
    inputs,
    form,
    submitText,
    submitTheme,
    disabled,
    noSubmitButton,
    submitButtonClass,
    resetOnSubmit,
    topSubmitButton
  } = p;

  const [submittedCount, setSubmittedCount] = useState(0);

  const formItems = inputRenderer(inputs, form, submittedCount, handleChange);

  const onSubmit = toSubmitData => {
    if (resetOnSubmit) form.resetFields();
    handleSubmit(toSubmitData);
  };

  const processEventValues = event => {
    setSubmittedCount(submittedCount + 1);
    if (event) event.preventDefault();
    form.validateFieldsAndScroll((error, values) =>
      error ? handleErrorSubmit(values) : onSubmit({ ...values })
    );
  };

  useImperativeHandle(r, () => ({
    form
  }));

  const submitButton = () => !noSubmitButton ? (
    <div className={submitButtonClass}>
      <Form.Item>
        <ButtonPrimary
          type="primary"
          htmlType="submit"
          text={submitText}
          disabled={disabled}
          theme={submitTheme}
        />
      </Form.Item>
    </div>
  ) : (
      undefined
    );

  return (
    <Form onSubmit={processEventValues} colon={false} from={form}>
      {topSubmitButton && submitButton()}
      {formItems}
      {!topSubmitButton && submitButton()}
    </Form>
  );
});

AntFormInputs.propTypes = {
  disabled: PropTypes.bool,
  form: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.object })])
    .isRequired,
  handleErrorSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  noSubmitButton: PropTypes.bool,
  recaptchaSiteKey: PropTypes.string,
  resetOnSubmit: PropTypes.bool,
  submitButtonClass: PropTypes.string,
  submitText: PropTypes.string,
  submitTheme: PropTypes.string,
  topSubmitButton: PropTypes.bool
};

AntFormInputs.defaultProps = {
  submitButtonClass: 'buttonSection',
  noSubmitButton: false,
  disabled: false,
  submitText: 'aceptar',
  submitTheme: undefined,
  handleErrorSubmit: () => { },
  handleSubmit: () => { },
  resetOnSubmit: false,
  topSubmitButton: false
};

const AntForm = Form.create()(AntFormInputs);
export default AntForm;