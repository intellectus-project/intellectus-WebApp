import React, { useState, useImperativeHandle } from 'react';
import { Form } from 'antd';
//import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';
import ButtonPrimary from '../atoms/ButtonPrimary/button-primary';
import { inputRenderer } from '../../utils/form-helper';

const AntFormInputs = React.forwardRef((p, r) => {
  const {
    handleSubmit,
    handleErrorSubmit,
    inputs,
    form,
    submitText,
    submitTheme,
    disabled,
    noSubmitButton,
    //RECAPTCHA_SITE_KEY,
    submitButtonClass,
    resetOnSubmit,
    topSubmitButton,
    extraGenericButton
  } = p;

  const [submittedCount, setSubmittedCount] = useState(0);
  const [captchaResult, setCaptchaResult] = useState();
  //const [captchaWarning, setCaptchaWarning] = useState(false);

  const formItems = inputRenderer(inputs, form, submittedCount);

  const onSubmit = toSubmitData => {
    if (resetOnSubmit) form.resetFields();
    handleSubmit(toSubmitData);
  };

  const processEventValues = event => {
    setSubmittedCount(submittedCount + 1);
    if (event) event.preventDefault();
    //if (RECAPTCHA_SITE_KEY && !captchaResult) return setCaptchaWarning(true);
    //setCaptchaWarning(false);
    form.validateFieldsAndScroll((error, values) =>
      error ? handleErrorSubmit(values) : onSubmit({ ...values, captchaResult })
    );
  };

  // const preSubmit = () => {
  //   const validCaptcha = !(RECAPTCHA_SITE_KEY && !captchaResult);
  //   setSubmittedCount(submittedCount + 1);
  //   // eslint-disable-next-line no-unused-expressions
  //   validCaptcha ? setCaptchaWarning(false) : setCaptchaWarning(true);
  //   return { validCaptcha, captchaResult };
  //   return {true}
  // };

  // useImperativeHandle(r, () => ({
  //   form,
  //   preSubmit
  // }));

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
      {/* {RECAPTCHA_SITE_KEY && (
        <div className="captcha">
          <Form.Item>
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={value => setCaptchaResult(value)} />
            {captchaWarning && <p className="CaptchaText">*Complete la verificacion por captcha</p>}
          </Form.Item>
        </div>
      )} */}
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
  //RECAPTCHA_SITE_KEY: undefined,
  resetOnSubmit: false,
  topSubmitButton: false
};

const AntForm = Form.create()(AntFormInputs);
export default AntForm;