import PropTypes from 'prop-types';

const routerPropTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default routerPropTypes;