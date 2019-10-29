import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import SubmitExperiment from './SubmitExperiment';
import Parameters from './Parameters';

class Experiments extends React.Component {
  static experimentTypes = {
    'classification': 'Classification',
    'fairness': 'Fairness Analysis'
  }

  constructor(props) {
    super(props);
    this.state = {
      experimentType: null,
    };
  }

  handleExperimentClick(type) {
    this.setState({
      experimentType: Experiments.experimentTypes[type],
    });
  }

  render() {
    let header;
    if (this.state.experimentType) {
      header = (
        <h4 className="text-dark font-weight-bold">
          Submit Experiment
          <span className="oi oi-chevron-right h6 mx-2" title="Right chevron" aria-hidden="true"></span>
          {this.state.experimentType}
        </h4>
      );
    } else {
      header = (
        <h4 className="text-dark font-weight-bold">
          Submit Experiment
        </h4>
      );
    }

    return (
      <div>
        <div className="content">
          {header}
        </div>
        <ExperimentsMain onExperimentClick={(t) => this.handleExperimentClick(t)} />
      </div>
    )
  }
}

function ExperimentsMain(props) {
  let match = useRouteMatch();
  
  return (
    <div>
      <Switch>
        <Route
          exact path={match.path}
          children={<SubmitExperiment onExperimentClick={props.onExperimentClick}/>}
        />
        <Route path={`${match.path}/:experimentType`} children={<Parameters/>}/>
      </Switch>
    </div>
  );
}


export default Experiments;