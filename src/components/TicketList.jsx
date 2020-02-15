import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
  console.log(props.ticketList);
  return (
    <div>
      <style jsx>{`
        div {
          background-color: blue;
        }
      `}</style>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
