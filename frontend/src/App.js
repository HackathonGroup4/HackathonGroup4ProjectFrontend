import './App.css';
import SearchBox from './SearchBox';
import NotificationIcon from './notification-icon.png';
import HamburgerIcon from './Hamburger-Icon.png';
import './main.scss';

function App() {
  return (
    <div className="App">
      <SearchBox />
      <img src={NotificationIcon} className="notification-icon"/>
      <img src={HamburgerIcon} className="hamburger-icon"/>
    </div>
  );
}

export default App;
