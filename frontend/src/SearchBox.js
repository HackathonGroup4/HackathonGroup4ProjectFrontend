import React from 'react';
import SearchBar from "material-ui-search-bar";
import './main.scss';
import { createBrowserHistory } from 'history';
import axios from 'axios';

class SearchBox extends React.Component {
  history = createBrowserHistory({forceRefresh: true});
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    var url = 'https://lfrknty04j.execute-api.us-east-1.amazonaws.com/hackathon/ask?query=' + this.state.value
    axios.get(url).then(response => {this.props.onOutputReceived(response.data.command);
    console.log("response",response.data.command)}).catch(error => {
                                                         console.log(error.response.data.error)
                                                      })
  }

  render() {
    return (
    <div className="search-bar">
      <div>
          <SearchBar
              value={this.state.value}
              onChange={(newValue) => this.setState({ value: newValue })}
              onRequestSearch={ this.handleSubmit }
              placeholder='Search & more..'
            />
        </div>
    </div>
    );
  }
}

export default SearchBox;