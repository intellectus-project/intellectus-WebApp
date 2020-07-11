import React from "react";
import { Form, Input, Slider, InputNumber } from "antd";
import { iconColor } from "./inputs-formats";
import { RadioField } from "../components/atoms/formsAtoms/forms-atoms";
import { SelectMask } from "../components/atoms/formsAtoms/select-mask";

const AntComponentTranslator = {
  [undefined]: Input,
  Radio: RadioField,
  Text: Input.TextArea,
  Number: InputNumber,
  Slider,
};

export const inputRenderer = (inputs, form, submittedCount) => {
  const { getFieldDecorator } = form;
  return inputs.map(({ formItem, ...input }) => {
    const {
      prefixOptions,
      prefixDefaultValue,
      classNameDiv,
      name,
      key,
      rules,
      initialValue,
      label,
      toolTip,
      iconType,
      component,
      hasFeedback,
      title,
      extra,
      ...inputProperties
    } = input;

    const AntComponent = AntComponentTranslator[component];

    const touched = form.touched && form.touched[name];
    const hasError = form.errors && form.errors[name];
    const touchedError = hasError && touched;

    const prefix = () => undefined
    //   iconType ? (
    //     <Icon type={iconType} style={{ color: iconColor }} />
    //   ) : undefined;

    const prefixSelector = () => undefined
    //   prefixOptions ? (
    //     <SelectMask
    //       form={form}
    //       options={prefixOptions}
    //       defaultValue={prefixDefaultValue}
    //     />
    //   ) : undefined;

    if (component === "customDiv")
      return (
        <div className={classNameDiv} key={key}>
          <h2>{title}</h2>
        </div>
      );
    return (
      <div className={classNameDiv} key={key}>
        <Form.Item
          key={key}
          {...formItem}
          label={
            toolTip ? (
              <span>
                {label} &nbsp;
                {toolTip}
              </span>
            ) : (
              label
            )
          }
          hasFeedback={
            (hasFeedback && submittedCount) || (hasFeedback && touched)
          }
          help={submittedCount || touchedError ? hasError : false}
          extra={extra}
        >
          {getFieldDecorator(name, { rules, initialValue })(
            <AntComponent
              {...inputProperties}
              prefix={prefix()}
              addonBefore={prefixSelector()}
            />
          )}
        </Form.Item>
      </div>
    );
  });
};
