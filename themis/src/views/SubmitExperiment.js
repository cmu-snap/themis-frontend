import React from 'react';
import ClassifyIcon from '../icons/classify.svg';
import FairnessIcon from '../icons/fairness.svg';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Experiments.module.css'

class SubmitExperiment extends React.Component {
  render(props) {
    return (
      <div className="d-flex flex-column align-items-center p-3">
        <h4 className="text-dark">Choose an experiment</h4>
        <div className="d-flex justify-items-center p-4">
          <Link
            to='/experiments/classification'
            onClick={() => this.props.onExperimentClick('classification')}>
            <Card className={`h-100 text-center mr-3 ${styles['card-md']}`} text="dark">
              <Card.Img
                variant="top"
                src={ClassifyIcon}
                className={styles['card-img']}
                alt="Classification icon"/>
              <Card.Body>
                <Card.Title className="font-weight-semibold">Classification</Card.Title>
                <Card.Text>
                  Classify the congestion control algorithm of a website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link
            to='/experiments/fairness'
            onClick={() => this.props.onExperimentClick('fairness')}>
            <Card className={`h-100 text-center ml-3 ${styles['card-md']}`} text="dark">
              <Card.Img
                variant="top"
                src={FairnessIcon}
                className={styles['card-img']}
                alt="Fairness icon"/>
              <Card.Body>
                <Card.Title className="font-weight-semibold">Fairness Analysis</Card.Title>
                <Card.Text>
                  Measure the fairness of the congestion control algorithm used by a website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <Link className="font-weight-semibold" to="/about">
          How do experiments work?
        </Link>
      </div>
    );
  }
}

export default SubmitExperiment;
