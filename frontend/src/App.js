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
        value: ''
      };

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value) => {
     this.setState({value: value});
     console.log('is hitting handleChange')
     console.log('value',value)
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
          <div className="outputBox">{this.state.value}</div>
        </div>
        );
    }
  }
export default App;
