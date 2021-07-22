import SearchBox from './SearchBox';
import NotificationIcon from './notification-icon.png';
import HamburgerIcon from './Hamburger-Icon.png';
import DAIcon from './DA-icon.png';
import './main.scss';

function App() {
  return (
  <div className="TApp">
    <div className="App" >
          <div className = "Search-area">
                <img src={DAIcon} className="da-icon" alt="DA icon"/>
                <SearchBox/>
                <img src={NotificationIcon} className="notification-icon" alt="notification icon"/>
                <img src={HamburgerIcon} className="hamburger-icon" alt="menu icon"/>
          </div>
    </div>
    <div className="outputBox">DA Command Output</div>
  </div>
  );
}

export default App;
