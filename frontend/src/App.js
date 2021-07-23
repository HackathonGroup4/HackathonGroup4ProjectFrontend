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
     command = 'orbit';
     if (command === 'orbit') {
        this.setState({command: 'orbit'});
        this.setState({title: 'ORBIT results'});
        var orbit_options = [
           {'orbit-1-gettingStarted-icon':'Getting Started Guide'},
           {'orbit-2-installGuide-icon':'Installation Guide'},
           {'orbit-3-requestOrbit-icon':'Request Orbit Suite'},
           {'orbit-4-manageOrbit-icon':'Manage Orbit Suite'},
           {'orbit-5-transferOrbit-icon':'Transfer Orbit Token to New Device'},
           {'orbit-6-reportLost-icon':'Report Lost/Stolen'},
           {'orbit-7-returnBlackBerry-icon':'Return Blackberry'},
           {'orbit-8-frequentlyAsked-icon':'Frequently Asked Questions'},
           {'orbit-9-supportedDevices-icon':'Supported Devices and OS'}
         ];
         this.setState({options: orbit_options});

     } else if (command === 'im') {
        this.setState({command: 'im'});
        this.setState({title: 'IM results'});
        var im_options = [
           {'im-1-searchContact-icon': 'Searching for a contact?'},
           {'im-2-ima-icon': 'IM someone\'s assistant'},
           {'im-3-goldmanStacks-icon': 'Goldman Stacks'}
        ];
        this.setState({options: im_options});

     } else if (command === 'teutr') {
        this.setState({command: 'teutr'});
        this.setState({title: 'TEUTR results'});
        var teutr_options = [
           {'teutr-1-icon': 'TEUTR'},
           {'teutr-2-techTraining-icon': 'TEUTR Technology Training for New Hires'},
           {'teutr-3-tutor-icon': 'TUTOR'}
         ]
        this.setState({options: teutr_options});

     } else if (command === 'mail') {
        this.setState({command: 'mail'});
        this.setState({title: 'MAIL results'});
        var mail_options = [
           {'mail-1-searchContact-icon': 'Searching for a contact?'},
           {'mail-2-createEmptyMail-icon': 'Create an empty mail'},
           {'mail-3-mail-icon': 'Mail someone'}
        ];
        this.setState({options: mail_options});

     } else if (command === 'kerb') {
        this.setState({command: 'kerb'});
        this.setState({title: 'KERB results'});
        var kerb_options = [
           {'kerb-1-searchContact-icon': 'Searching for a contact?'},
           {'kerb-2-kerbA-collaborate-icon': 'KerbA'},
           {'kerb-3-reportingGroup-icon': 'Reporting Group'},
           {'kerb-4-ABOCluster-icon': 'ABOCluster'}
        ];
        this.setState({options: kerb_options});


     } else if (command === 'help') {
        this.setState({command: 'help'});
        this.setState({title: 'HELP results'});
        var help_options = [
           {'help-1-launchHelpDeskApp-icon': 'Launch Help Desk Application (Lumos)'},
           {'help-2-lookingForAnswers-icon': 'Looking for answers?'},
           {'help-3-DAFeedback-icon': 'DA Feedback'},
           {'help-4-DATelephonyFeedback-icon': 'DA Telephony Feedback'},
           {'help-5-Docs-icon': 'Docs'}
        ];
        this.setState({options: help_options});

     } else if (command === 'time') {
        this.setState({command: 'time'});
        this.setState({title: 'TIME results'});
        var time_options = [
         {'time-1-closeTheTimePanel-icon': 'Close the time panel'},
         {'time-2-worldClock-icon': 'Add Word Clock'}
        ];
        this.setState({options: time_options});

     } else if (command === 'call') {
        this.setState({command: 'call'});
        this.setState({title: 'CALL results'});
        var call_options = [
           {'call-1-searchContact-icon': 'Searching for a contact?'},
           {'call-2-Callxxx-icon': 'Call someone'}
        ];
        this.setState({options: call_options});

     } else if (command === 'techrisk') {
        this.setState({command: 'techrisk'});
        this.setState({title: 'TECHRISK results'});
        var techrisk_options = [
           {'techRisk-1-MyTechRisk-icon': 'My Tech Risk'},
           {'techRisk-2-reportSecurity-icon': 'Report a Security Incident'},
           {'techRisk-3-RequestSiteUnblock-icon': 'Request Site Unblock'},
           {'techRisk-4-SendDataSecurely-icon': 'Send Data Securely'}
        ];
        this.setState({options: techrisk_options});

     } else if (command === 'enghub') {
        this.setState({command: 'enghub'});
        this.setState({title: 'ENGHUB results'});
        var enghub_options = [
           {'enghub-1-engineeringHub-icon': 'Engineering Hub'},
           {'enghub-2-En-icon': 'EngHub'}
        ];
        this.setState({options: enghub_options});

     } else if (command === 'google') {
       this.setState({command: 'google'});
       this.setState({title: 'GOOGLE results'});
       var google_options = [
          {'1': 'Google'},
          {'2': 'Search'},
          {'3': 'Strats Google'}
       ];
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
