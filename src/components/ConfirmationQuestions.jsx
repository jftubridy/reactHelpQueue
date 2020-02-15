import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return (
    <div>
      <p>Have you gone through all the steps on the Learn How to Program debuggins lesson?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
  //PropTypes.func is the prop type dceclaration for functions passed into a componenet as a prop
};

export default ConfirmationQuestions;