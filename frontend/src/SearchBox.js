import React from 'react';
import SearchBar from "material-ui-search-bar";
import './main.scss';
class SearchBox extends React.Component {
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
    alert('Your DA command was submitted: ' + value);
  }

  render() {
    return (
    <div className="search-bar">
      <SearchBar
          value={this.state.value}
          onChange={(newValue) => this.setState({ value: newValue })}
          onRequestSearch={() => this.handleSubmit(this.state.value)}
          placeholder='Search & more..'
        />
        <div>{this.state.value}</div>
    </div>
    );
  }
}

export default SearchBox;