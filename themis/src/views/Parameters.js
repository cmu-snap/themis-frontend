import React from 'react';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { Formik, Form as FormikForm, ErrorMessage } from 'formik';
import { Required, TextInput, Checkbox } from '../components/Form';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Parameters.module.css';

const schema = Yup.object({
    website: Yup.string()
      .url('Please provide a valid website.')
      .required('Website is a required field.'),
    file: Yup.string()
      .url('Please provide a valid URL.')
      .required('File URL is a required field.'),
    btlbw: Yup.number().min(0),
    rtt: Yup.number().min(0),
    ccas: Yup.array()
      .required('Please choose at least one competing CCA.'),
    email: Yup.string()
      .email('Please provide a valid email address.')
      .required('Email is a required field.')
});

function Parameters() {
  let { experimentType } = useParams();
  return (
    <div className={'content ' + styles.form}>
      <h4 className="text-center">Parameters</h4>
      <Formik
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      initialValues={{
        website: '',
        file: '',
        btlbw: 10,
        rtt: 75,
        ccas: ['bbr', 'cubic', 'reno'],
        email: ''
      }}>
      { experimentType === 'fairness' ?
        <FormikForm className="pt-3">
          <Form.Row>
            <Form.Group as={Col}>
              <TextInput label="Website" required name="website" type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <TextInput label="File URL" required name="file" type="text" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <TextInput label="Bottleneck bandwidth" name="btlbw" type="number" />
            </Form.Group>
            <Form.Group as={Col}>
              <TextInput label="Round-trip time" name="rtt" type="number" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="font-weight-semibold">Competing CCAs {Required}</label>
              <Checkbox label="BBR" name="ccas" value="bbr" />
              <Checkbox label="Cubic" name="ccas" value="cubic" />
              <Checkbox label="Reno" name="ccas" value="reno" />
              <small className="text-danger">
                <ErrorMessage name="ccas" />
              </small>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <TextInput label="Email address" required name="email" type="email" />
              <Form.Text className="text-muted">
                We will email status updates about your experiment to this address.
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="2" className="mr-auto">
              <Button variant="primary" block>Back</Button>
            </Form.Group>
            <Form.Group as={Col} md="2" className="ml-auto">
              <Button variant="primary" type="submit" block>Next</Button>
            </Form.Group>
          </Form.Row>
        </FormikForm>
      : null}
      </Formik>
    </div>
  );
}

export default Parameters;