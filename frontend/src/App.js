import SearchBox from './SearchBox';
import NotificationIcon from './notification-icon.png';
import HamburgerIcon from './Hamburger-Icon.png';
import DAIcon from './DA-icon.png';
import './main.scss';
import React from 'react';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        command: '',
        title: '',
        options: []
      };

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (command) => {
     command = 'orbit'
     if (command === 'orbit') {
        this.setState({command: 'orbit'});
        this.setState({title: 'ORBIT SUITE'});
        var orbit_options = [{'orbit-1-gettingStarted-icon':'Getting Started Guide'},
            {'orbit-2-installGuide-icon':'Installation Guide'},
         {'orbit-3-requestOrbit-icon':'Request Orbit Suite'},
         {'orbit-4-manageOrbit-icon':'Manage Orbit Suite'},
         {'orbit-5-transferOrbit-icon':'Transfer Orbit Token to New Device'},
         {'orbit-6-reportLost-icon':'Report Lost/Stolen'},
         {'orbit-7-returnBlackBerry-icon':'Return Blackberry'},
         {'orbit-8-frequentlyAsked-icon':'Frequently Asked Questions'},
         {'orbit-9-supportedDevices-icon':'Supported Devices and OS'}];
        this.setState({options: orbit_options});

     } else if (command === 'im') {

     } else if (command === 'teutr') {
        this.setState({command: 'teutr'});
        this.setState({title: 'OTHER APPLICATIONS'});
        var teutr_options = ['TEUTRIcon;TEUTR','TTTFNHICON;TEUTR Technology Training for New Hires','TUTORIcon;TUTOR']
        this.setState({options: teutr_options});
     } else if (command === 'mail') {

     } else if (command === 'kerb') {

     } else if (command === 'help') {
        this.setState({command: 'help'});
        this.setState({title: 'HELP'});
        var help_options = ['LHDA;Launch Help Desk Application (Lumos)']
        this.setState({options: help_options});
     } else if (command === 'time') {
        this.setState({command: 'time'});
        this.setState({title: 'TIME - PANEL'});
        var time_options = ['OTTPIcon;Open the time panel']
        this.setState({options: time_options});
     } else if (command === 'call') {

     } else if (command === 'techrisk') {
        this.setState({command: 'techrisk'});
        this.setState({title: 'TECHNOLOGY RISK'});
        var techrisk_options = ['MTIcon;My TechRisk','RASIICON;Report a Security Incident',
        'RSUIcon;Request Site Unblock','SDSIcon;Send Data Securely']
        this.setState({options: techrisk_options});
     } else if (command === 'enghub') {
        this.setState({command: 'enghub'});
        this.setState({title: 'OTHER APPLICATIONS'});
        var enghub_options = ['EHIcon;Engineering Hub','ENICON;Eng Hub']
        this.setState({options: enghub_options});
     } else if (command === 'google') {
       this.setState({command: 'google'});
       this.setState({title: 'OTHER APPLICATIONS'});
       var google_options = ['GIcon;Google']
       this.setState({options: google_options});
     }
  }


  render() {
      const optionItems = Object.keys(this.state.options).forEach(function(key) {
        <li key={key}>{this.state.options[key]}</li>
      })
      return (
        <div className="TApp">
          <div className="App" >
                <div className = "Search-area">
                      <img src={DAIcon} className="da-icon" alt="DA icon"/>
                      <SearchBox onOutputReceived={this.handleChange}/>
                      <img src={NotificationIcon} className="notification-icon" alt="notification icon"/>
                      <img src={HamburgerIcon} className="hamburger-icon" alt="menu icon"/>
                </div>
          </div>
          <div className="outputBox">
            <div>{this.state.title}</div>
            <div>
                <ul>
                    {optionItems}
                </ul>
            </div>
          </div>
        </div>
        );
    }
  }
export default App;
