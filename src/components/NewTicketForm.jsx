import React from 'react';

function NewTicketForm(){
  return(
    <div>
      <form>
        <input  
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input 
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Descrive your issue.'/>
      </form>
    </div>
  );
}

export default NewTicketForm;