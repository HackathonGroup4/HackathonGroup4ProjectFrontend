import SearchBox from './SearchBox';
import NotificationIcon from './notification-icon.png';
import HamburgerIcon from './Hamburger-Icon.png';
import DAIcon from './DA-icon.png';
import './main.scss';
import React from 'react';
import orbit_1_gettingStarted_icon from './frontend-icons/orbit_1_gettingStarted_icon.png'
import orbit_2_installGuide_icon from './frontend-icons/orbit_2_installGuide_icon.png'

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
           {'key':orbit_1_gettingStarted_icon,'value':'Getting Started Guide'},
           {'key':orbit_2_installGuide_icon,'value':'Installation Guide'},
           {'key':'orbit-3-requestOrbit-icon','value':'Request Orbit Suite'},
           {'key':'orbit-4-manageOrbit-icon','value':'Manage Orbit Suite'},
           {'key':'orbit-5-transferOrbit-icon','value':'Transfer Orbit Token to New Device'},
           {'key':'orbit-6-reportLost-icon','value':'Report Lost/Stolen'},
           {'key':'orbit-7-returnBlackBerry-icon','value':'Return Blackberry'},
           {'key':'orbit-8-frequentlyAsked-icon','value':'Frequently Asked Questions'},
           {'key':'orbit-9-supportedDevices-icon','value':'Supported Devices and OS'}
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
           {'key':'teutr-1-icon','value':'TEUTR'},
           {'key':'teutr-2-techTraining-icon','value':'TEUTR Technology Training for New Hires'},
           {'key':'teutr-3-tutor-icon','value':'TUTOR'}
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
          {'google-1-google-icon': 'Google'},
          {'google-2-search-icon': 'Search'},
          {'google-3-stratsGoogle-icon': 'Strats Google'}
       ];
       this.setState({options: google_options});

     }
  }


  render() {
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
                    {
                       this.state.options.map(function(item, i){
                         return <li><img height='50px' width='2px' src={item.key} className="da-icon" alt="DA icon"/>{item.value}</li>
                       })
                    }
                </ul>
                <br/>
            </div>
          </div>
        </div>
        );
    }
  }
export default App;
