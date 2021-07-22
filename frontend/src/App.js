import './App.css';
import SearchBox from './SearchBox';
import NotificationIcon from './notification-icon.png';
import HamburgerIcon from './Hamburger-Icon.png';
import './main.scss';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div>
        <SearchBox />
        <img src={NotificationIcon} className="notification-icon"/>
        <img src={HamburgerIcon} className="hamburger-icon"/>
      </div>
    </div>
  );
}

export default App;
