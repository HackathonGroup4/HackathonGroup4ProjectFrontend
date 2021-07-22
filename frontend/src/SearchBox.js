import React from 'react';
import SearchBar from "material-ui-search-bar";
import './main.scss';
import { createBrowserHistory } from 'history';
import { retrieveCommand } from './retrieveCommand';

class SearchBox extends React.Component {
  history = createBrowserHistory({forceRefresh: true});
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
  }

  handleSubmit(value) {
    var response = retrieveCommand(value);
    this.props.onOutputReceived(response);

  }

  render() {
    return (
    <div className="search-bar">
      <div>
          <SearchBar
              value={this.state.value}
              onChange={(newValue) => this.setState({ value: newValue })}
              onRequestSearch={() => this.handleSubmit(this.state.value)}
              placeholder='Search & more..'
            />
        </div>
    </div>
    );
  }
}

export default SearchBox;