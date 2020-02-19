import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({ names: _names.value, location: _location.value, issue: _issue.value, id: v4(), timeOpen: new Moment() });
    //including the time info in onNewTicke5tCreation() callback called in the handleNewTicketFormSubmission() event handler, ensures this data gets into our masterTicketList state value in the App componenent.
    //we passed handleAddingNewTicketToList() method in App.jsx down to NewTicketForm component under a prop onNewTicketCreation.
    //we call the method by the prop name, not the name of the method in App.jsx
    //we vall this before we reset the values
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  
  return(
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input  
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input 
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => { _location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;