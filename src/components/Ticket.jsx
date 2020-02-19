import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
      <p>   <style global jsx>{`
        p {
          color: red;
        }
      `}</style><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
  // calls new Moment() creates a Moment object with the current time
}

// propTypes is declaring a propTypes property on our Ticket componenent
// PropTypes is referring to the PropTypes class we import at the top
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default Ticket;


/*
/MyExampleComponent.propTypes = {
  exampleArray: PropTypes.array,
  exampleBoolean: PropTypes.bool,
  exampleFunction: PropTypes.func,
  exampleNumber: PropTypes.number,
  exampleObject: PropTypes.object,
  exampleString: PropTypes.string,
  exampleSymbol: PropTypes.symbol,
  exampleReactElement: PropTypes.element,

  exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
  exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),

  exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),

  optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),
}
*/
