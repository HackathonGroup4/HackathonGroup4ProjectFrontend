import SearchBox from './SearchBox';
import NotificationIcon from './notification-icon.png';
import HamburgerIcon from './Hamburger-Icon.png';
import DAIcon from './DA-icon.png';
import './main.scss';
import React from 'react';

import orbit_1_gettingStarted_icon from './frontend-icons/orbit-1-gettingStarted-icon.png';
import orbit_2_installGuide_icon from './frontend-icons/orbit-2-installGuide-icon.png';
import orbit_3_requestOrbit_icon from './frontend-icons/orbit-3-requestOrbit-icon.png';
import orbit_4_manageOrbit_icon from './frontend-icons/orbit-4-manageOrbit-icon.png';
import orbit_5_transferOrbit_icon from './frontend-icons/orbit-5-transferOrbit-icon.png';
import orbit_6_reportLost_icon from './frontend-icons/orbit-6-reportLost-icon.png';
import orbit_7_returnBlackBerry_icon from './frontend-icons/orbit-7-returnBlackBerry-icon.png';
import orbit_8_frequentlyAsked_icon from './frontend-icons/orbit-8-frequentlyAsked-icon.png';
import orbit_9_supportedDevices_icon from './frontend-icons/orbit-9-supportedDevices-icon.png';

import im_1_searchContact_icon from './frontend-icons/im-1-searchContact-icon.png';
import im_2_ima_icon from './frontend-icons/im-2-ima-icon.png';
import im_3_goldmanStacks_icon from './frontend-icons/im-3-goldmanStacks-icon.png';

import teutr_1_icon from './frontend-icons/teutr-1-icon.png';
import teutr_2_techTraining_icon from './frontend-icons/teutr-2-techTraining-icon.png';
import teutr_3_tutor_icon from './frontend-icons/teutr-3-tutor-icon.png';

import mail_1_searchContact_icon from './frontend-icons/mail-1-searchContact-icon.png';
import mail_2_createEmptyMail_icon from './frontend-icons/mail-2-createEmptyMail-icon.png';
import mail_3_mail_icon from './frontend-icons/mail-3-mail-icon.png';

import kerb_1_searchContact_icon from './frontend-icons/kerb-1-searchContact-icon.png';
import kerb_2_kerbA_collaborate_icon from './frontend-icons/kerb-2-kerbA-collaborate-icon.png';
import kerb_3_reportingGroup_icon from './frontend-icons/kerb-3-reportingGroup-icon.png';
import kerb_4_ABOCluster_icon from './frontend-icons/kerb-4-ABOCluster-icon.png';

import help_1_launchHelpDeskApp_icon from './frontend-icons/help-1-launchHelpDeskApp-icon.png';
import help_2_lookingForAnswers_icon from './frontend-icons/help-2-lookingForAnswers-icon.png';
import help_3_DAFeedback_icon from './frontend-icons/help-3-DAFeedback-icon.png';
import help_4_DATelephonyFeedback_icon from './frontend-icons/help-4-DATelephonyFeedback-icon.png';
import help_5_Docs_icon from './frontend-icons/help-5-Docs-icon.png';

import time_1_closeTheTimePanel_icon from './frontend-icons/time-1-closeTheTimePanel-icon.png';
import time_2_worldClock_icon from './frontend-icons/time-2-worldClock-icon.png';

import call_1_searchContact_icon from './frontend-icons/call-1-searchContact-icon.png';
import call_2_Callxxx_icon from './frontend-icons/call-2-Callxxx-icon.png';

import techRisk_1_MyTechRisk_icon from './frontend-icons/techRisk-1-MyTechRisk-icon.png';
import techRisk_2_reportSecurity_icon from './frontend-icons/techRisk-2-reportSecurity-icon.png';
import techRisk_3_RequestSiteUnblock_icon from './frontend-icons/techRisk-3-RequestSiteUnblock-icon.png';
import techRisk_4_SendDataSecurely_icon from './frontend-icons/techRisk-4-SendDataSecurely-icon.png';

import enghub_1_engineeringHub_icon from './frontend-icons/enghub-1-engineeringHub-icon.png';
import enghub_2_En_icon from './frontend-icons/enghub-2-En-icon.png';

import google_1_google_icon from './frontend-icons/google-1-google-icon.png';
import google_2_search_icon from './frontend-icons/google-2-search-icon.png';
import google_3_stratsGoogle_icon from './frontend-icons/google-3-stratsGoogle-icon.png';

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
     //command = 'orbit';
     if (command === 'orbit') {
        this.setState({command: 'orbit'});
        this.setState({title: 'ORBIT results'});
        var orbit_options = [
           {'key':orbit_1_gettingStarted_icon,'value':'Getting Started Guide'},
           {'key':orbit_2_installGuide_icon,'value':'Installation Guide'},
           {'key':orbit_3_requestOrbit_icon,'value':'Request Orbit Suite'},
           {'key':orbit_4_manageOrbit_icon,'value':'Manage Orbit Suite'},
           {'key':orbit_5_transferOrbit_icon,'value':'Transfer Orbit Token to New Device'},
           {'key':orbit_6_reportLost_icon,'value':'Report Lost/Stolen'},
           {'key':orbit_7_returnBlackBerry_icon,'value':'Return Blackberry'},
           {'key':orbit_8_frequentlyAsked_icon,'value':'Frequently Asked Questions'},
           {'key':orbit_9_supportedDevices_icon,'value':'Supported Devices and OS'}
         ];
         this.setState({options: orbit_options});

     } else if (command === 'im') {
        this.setState({command: 'im'});
        this.setState({title: 'IM results'});
        var im_options = [
           {'key': im_1_searchContact_icon, 'value': 'Searching for a contact?'},
           {'key': im_2_ima_icon, 'value': 'IM someone\'s assistant'},
           {'key': im_3_goldmanStacks_icon, 'value': 'Goldman Stacks'}
        ];
        this.setState({options: im_options});

     } else if (command === 'teutr') {
        this.setState({command: 'teutr'});
        this.setState({title: 'TEUTR results'});
        var teutr_options = [
           {'key': teutr_1_icon, 'value': 'TEUTR'},
           {'key': teutr_2_techTraining_icon, 'value': 'TEUTR Technology Training for New Hires'},
           {'key': teutr_3_tutor_icon,'value': 'TUTOR'}
         ]
        this.setState({options: teutr_options});

     } else if (command === 'mail') {
        this.setState({command: 'mail'});
        this.setState({title: 'MAIL results'});
        var mail_options = [
           {'key': mail_1_searchContact_icon, 'value': 'Searching for a contact?'},
           {'key': mail_2_createEmptyMail_icon, 'value': 'Create an empty mail'},
           {'key': mail_3_mail_icon, 'value': 'Mail someone'}
        ];
        this.setState({options: mail_options});

     } else if (command === 'kerb') {
        this.setState({command: 'kerb'});
        this.setState({title: 'KERB results'});
        var kerb_options = [
           {'key': kerb_1_searchContact_icon, 'value': 'Searching for a contact?'},
           {'key': kerb_2_kerbA_collaborate_icon, 'value': 'KerbA'},
           {'key': kerb_3_reportingGroup_icon, 'value': 'Reporting Group'},
           {'key': kerb_4_ABOCluster_icon, 'value': 'ABOCluster'}
        ];
        this.setState({options: kerb_options});


     } else if (command === 'help') {
        this.setState({command: 'help'});
        this.setState({title: 'HELP results'});
        var help_options = [
           {'key': help_1_launchHelpDeskApp_icon, 'value': 'Launch Help Desk Application (Lumos)'},
           {'key': help_2_lookingForAnswers_icon, 'value': 'Looking for answers?'},
           {'key': help_3_DAFeedback_icon, 'value': 'DA Feedback'},
           {'key': help_4_DATelephonyFeedback_icon, 'value': 'DA Telephony Feedback'},
           {'key': help_5_Docs_icon, 'value': 'Docs'}
        ];
        this.setState({options: help_options});

     } else if (command === 'time') {
        this.setState({command: 'time'});
        this.setState({title: 'TIME results'});
        var time_options = [
         {'key': time_1_closeTheTimePanel_icon, 'value': 'Close the time panel'},
         {'key': time_2_worldClock_icon, 'value': 'Add Word Clock'}
        ];
        this.setState({options: time_options});

     } else if (command === 'call') {
        this.setState({command: 'call'});
        this.setState({title: 'CALL results'});
        var call_options = [
           {'key': call_1_searchContact_icon, 'value': 'Searching for a contact?'},
           {'key': call_2_Callxxx_icon, 'value': 'Call someone'}
        ];
        this.setState({options: call_options});

     } else if (command === 'techrisk') {
        this.setState({command: 'techrisk'});
        this.setState({title: 'TECHRISK results'});
        var techrisk_options = [
           {'key': techRisk_1_MyTechRisk_icon, 'value': 'My Tech Risk'},
           {'key': techRisk_2_reportSecurity_icon, 'value': 'Report a Security Incident'},
           {'key': techRisk_3_RequestSiteUnblock_icon, 'value': 'Request Site Unblock'},
           {'key': techRisk_4_SendDataSecurely_icon, 'value': 'Send Data Securely'}
        ];
        this.setState({options: techrisk_options});

     } else if (command === 'enghub') {
        this.setState({command: 'enghub'});
        this.setState({title: 'ENGHUB results'});
        var enghub_options = [
           {'key': enghub_1_engineeringHub_icon, 'value': 'Engineering Hub'},
           {'key': enghub_2_En_icon, 'value': 'EngHub'}
        ];
        this.setState({options: enghub_options});

     } else {
       //if (command === 'google') {
       this.setState({command: 'google'});
       this.setState({title: 'GOOGLE results'});
       var google_options = [
          {'key': google_1_google_icon, 'value': 'Google'},
          {'key': google_2_search_icon, 'value': 'Search'},
          {'key': google_3_stratsGoogle_icon, 'value': 'Strats Google'}
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
                         return (
                           <div>
                              <li><img height='70px' width='1px' src={item.key} className="da-icon" alt="DA icon"/>{item.value}</li>
                              <br></br><br></br><br></br><br></br>
                           </div>
                         );
                       })
                    }
                </ul>
            </div>
          </div>
        </div>
        );
    }
  }
export default App;
