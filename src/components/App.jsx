import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Picture from './Picture';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      //about {} is now an object literal instead of an array []
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  componentWillMount() {
  }

  componentWillReceiveProps() {
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  updateTicketElapsedWaitTime() {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket) {
    var newTicketId = v4();
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
      //object.asign() method is used to copy the values of al enumerable own properties from one or more source objects to a target object, wil return the target object.  Basically can create copies of objs and add new content to those copies in a single method call.
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({ masterTicketList: newMasterTicketList });

    // newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    // newMasterTicketList.push(newTicket);
    // this.setState({ masterTicketList: newMasterTicketList });  older code
  }

  handleChangingSelectedTicket(ticketId) {
    this.setState({ selectedTicket: ticketId });
  }

  render() {
    console.log(this.state.masterTicketList);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <TicketList ticketList={this.state.masterTicketList} />} />
          {/* providing masterTicketList to TicketLIst as a prop */}
          <Route path='/newticket' render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={(props) => <Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket}/>} />
          {/* detemines whether TicketList is rendered on admin or index routes */}
          <Route component={Error404} />
        </Switch>
        <Picture />
      </div>
    );
  }
}

//using exact above helps protect us from accidently loading too many things
export default App;
