import React from 'react';
import * as Yup from 'yup';
import { Link, withRouter } from 'react-router-dom';
import { Formik, Form as FormikForm, ErrorMessage } from 'formik';
import { TextInput, Checkbox } from '../components/Form';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Parameters.module.css';

class Parameters extends React.Component {
  static urlValidator = value => {
    const urlSchema = Yup.string().url();
    const valid1 = urlSchema.isValidSync(value);
    const valid2 = urlSchema.isValidSync('http://' + value);
    return valid1 || valid2;
  };
  
  static schema = Yup.object({
      website: Yup.string()
        .required('Website is a required field.')
        .test('URL Test', 'Please provide a valid website.', Parameters.urlValidator),
      file: Yup.string()
        .required('File URL is a required field.')
        .test('URL Test', 'Please provide a valid URL.', Parameters.urlValidator),
      ccas: Yup.array()
        .required('Please choose at least one competing CCA.'),
      email: Yup.string()
        .email('Please provide a valid email address.')
        .required('Email is a required field.')
  });

  constructor(props) {
    super(props);
    this.state = { 'email': null };
  }

  handleSubmit(email) {
    this.setState({ 'email': email });
  }

  render(props) {
    if (this.state.email) {
      return (
        <div className={'d-flex flex-column align-items-center content ' + styles.form}>
          <h4 className="text-center mb-4">Thanks for submitting!</h4>
          <p className="text-center mb-4">
            Your experiment has entered the experiment queue. We will send any
            updates about your experiment to
            <span className="font-weight-semibold"> {this.state.email}</span>.
          </p>
          <Link to='/experiments' className="font-weight-semibold">
            Submit another experiment
          </Link>
        </div>
      )
    }
    return (
      <div className={'content ' + styles.form}>
        <h4 className="text-center mb-4">Enter parameters</h4>
        <Formik
        validationSchema={Parameters.schema}
        onSubmit={(values, { setSubmitting }) => {
          this.handleSubmit(values['email']);
        }}
        initialValues={{
          website: '',
          file: '',
          ccas: ['bbr', 'cubic', 'reno'],
          email: ''
        }}>
        { this.props.match.params['experimentType'] === 'fairness' ?
          <FormikForm>
            <Form.Row>
              <Form.Group as={Col}>
                <TextInput label="Website" name="website" type="text" />
              </Form.Group>
              <Form.Group as={Col}>
                <TextInput label="File URL" name="file" type="text" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <label className="font-weight-semibold">Competing CCAs</label>
                <Checkbox label="BBR" name="ccas" value="bbr" />
                <Checkbox label="Cubic" name="ccas" value="cubic" />
                <Checkbox label="Reno" name="ccas" value="reno" />
                <small className="text-danger">
                  <ErrorMessage name="ccas" />
                </small>
              </Form.Group>
            </Form.Row>
            <Form.Row className="mb-3">
              <Form.Group as={Col} md="6">
                <TextInput label="Email address" name="email" type="email" />
                <Form.Text className="text-muted">
                  We will email status updates about your experiment to this address.
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="2" className="mr-auto">
                <Link to='/experiments'>
                  <Button variant="primary" block>Back</Button>
                </Link>
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
}

export default Parameters;