import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import routerPropTypes from '../components/routerPropTypes';
import SubmitExperiment from './SubmitExperiment';
import Parameters from './Parameters';

class Experiments extends React.Component {
  static experimentTypes = {
    'classification': 'Classification',
    'fairness': 'Fairness Analysis'
  };

  static propTypes = routerPropTypes;

  handleExperimentClick(type) {
    this.setState({
      experimentType: Experiments.experimentTypes[type],
    });
  }

  render() {
    let header;
    const re = new RegExp(`${this.props.match.path}\/(.*)`);
    const match = re.exec(this.props.location.pathname);
    if (match) {
      header = (
        <h4 className="font-weight-bold">
          Submit Experiment
          <span className="oi oi-chevron-right h6 mx-2" title="Right chevron" aria-hidden="true"></span>
          {Experiments.experimentTypes[match[1]]}
        </h4>
      );
    } else {
      header = (
        <h4 className="font-weight-bold">
          Submit Experiment
        </h4>
      );
    }

    return (
      <>
        <div className="content">
          {header}
        </div>
        <Switch>
          <Route exact path={this.props.match.path}
            children={<SubmitExperiment onExperimentClick={(t) => this.handleExperimentClick(t)}/>}
          />
          <Route path={`${this.props.match.path}/:experimentType`} component={Parameters}/>
        </Switch>
      </>
    )
  }
}

const ExperimentsWithRouter = withRouter(Experiments);
export default ExperimentsWithRouter;