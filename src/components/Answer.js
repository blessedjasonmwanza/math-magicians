import React from 'react';
import PropTypes from 'prop-types';

export default class Answer extends React.PureComponent {
  constructor(props) {
    super(props);
    Answer.propTypes = {
      total: PropTypes.string.isRequired,
      operation: PropTypes.string.isRequired,
      next: PropTypes.string.isRequired,
    };
  }

  render() {
    const { total, operation, next } = this.props;
    return (
      <span className="answer d-flex">
        { total }
        { operation }
        { next }
      </span>
    );
  }
}
