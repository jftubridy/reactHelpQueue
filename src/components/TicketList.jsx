import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
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
          timeOpen={ticket.timeOpen}
          key={ticket.id} />
        // pass values from TicketList component into Ticket component where it will be displayed
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
