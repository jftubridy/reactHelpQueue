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
      <hr />
      {Object.keys(props.ticketList).map(function (ticketId) {
        var ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          onTicketSelection={props.onTicketSelection}
          key={ticketId}
          ticketId={ticketId} />;
        // pass values from TicketList component into Ticket component where it will be displayed
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
