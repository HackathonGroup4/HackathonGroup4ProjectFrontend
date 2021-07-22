import './App.css';
import SearchBox from './SearchBox';
import NotificationIcon from './notification-icon.png';

function App() {
  return (
    <div className="App">
      <SearchBox />
      <img src={NotificationIcon} />
      
    </div>
  );
}

export default App;
