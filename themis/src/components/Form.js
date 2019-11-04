import React from 'react';
import { useField } from 'formik';
import Form from 'react-bootstrap/Form';

const Required = (
  <span className="text-danger font-weight-bold"> *</span>
);

const Label = (props) => {
  return (
    <>
    {props.label !== "" ?
      <Form.Label htmlFor={props.id || props.name} className="font-weight-semibold">
        {props.label}{props.required ? Required : null}
      </Form.Label>
    : null}
    </>
  );
};

const TextInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label {...props} />
      <Form.Control
        isInvalid={meta.touched && meta.error}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      ) : null}
    </>
  );
};

const CheckboxGroup = ({ defaultChecked = false, ...props }) => {
  const [_, meta] = useField(props.name);
  console.log(meta);
  let checkboxes = [];
  for (const label of Object.keys(props.labels)) {
    checkboxes.push(
      <Form.Check
        type="checkbox"
        key={label}
        label={label}
        value={props.labels[label]}
        name={props.name}
        defaultChecked={defaultChecked}
      />
    );
  }
  return (
    <>
      <Label {...props} />
      {checkboxes}
      {meta.touched && meta.error ? (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      ) : null}
    </>
  );
};

const Checkbox = (props) => {
  const [field, _] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <Form.Check type="checkbox" label={props.label} {...field} {...props} />
    </>
  );
};

export { Required, TextInput, CheckboxGroup, Checkbox };