// This new component will be the "headquarters" for our ticket creation process.
// Whenever a componenet's primary role is managing or syncing a specific interaction, its common to include the suffix Control in its name.  These are somtimes known as container componenets.

//States are fluid and ever-changing, props are not!
//Functional components cannot have state, if a component is defined as a function it is not capable of possessing state
//componenets that require state MUST be defined as a class
//Only define componenets as a class if absolutely requires state
import React from 'react';
import NewTicketForm from './NewTicketForm';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    //super is called to access a parent class's constructor
    this.state = {
      formVisibleOnPage: false
      // exampleBooleanStateData: false,
      // exampleStringStateData: 'Hey',
      // exampleArrayStateData: [],
      // exampleIntegerStateData: 1
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation() {
    this.setState({ formVisibleOnPage: true });
  }
  //using .setState() is the only way to update state outside of a constructor!
  //it's common practice to include the term 'handle' in the name of an event handler to differentiate them from other methods easily.

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewTicketControl;