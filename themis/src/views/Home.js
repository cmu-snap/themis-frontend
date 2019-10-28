import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ServerClientIcon from '../server-client.svg';
import homeStyles from '../styles/Home.module.css';
import buttonStyles from '../styles/Button.module.css';

class Home extends React.Component {
  render() {
    return (
      <Container className="d-flex flex-column align-items-center">
        <Jumbotron className={"mb-0 bg-transparent d-flex flex-column align-items-center " + homeStyles.hero}>
          <h1 className="font-weight-bold text-white mb-4">
            A new way to measure internet fairness.
          </h1>
          <NavLink to="/about">
            <Button className={buttonStyles['padding-extra']} variant="primary">
              Learn more
            </Button>
          </NavLink>
        </Jumbotron>
        <div className="p-3">
          <img src={ServerClientIcon} alt="Server client icon" />
        </div>
        <div className={"d-flex flex-column align-items-center p-3 " + homeStyles.intro}>
          <h4 className="font-weight-bold text-white mb-4">
            Congestion control algorithms (CCAs) are more diverse now than ever.
          </h4>
          <p className="text-white">
            Analyzing the diversity of CCAs today is key to understanding their impact on internet fairness.
            Our testbed allows anyone to submit experiments to predict a website’s CCA and measure CCA fairness using real Internet services.
          </p>
          <NavLink className="font-weight-semibold mb-4" to="/experiments">
            Submit experiment
          </NavLink>
        </div>
      </Container>
    );
  }
}

export default Home;