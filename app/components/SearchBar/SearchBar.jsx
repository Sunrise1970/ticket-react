import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
      focus: false,
      value: 'value'
  }
  static PropTypes = {
    history: PropTypes.object.isRequired
  }
  getRef(ref) { 
    this.keywordRef = ref;
  }
  searchFocus() {
    this.setState({focus: true});
  }
  searchClose() {
    this.setState({focus: false});
  }
  handleChange(event) {
    console.log(event);
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    const keyword = this.keywordRef.value;
    this.keywordRef.value = '';

    const path = `/bill/${keyword}`;
    browserHistory.push(path)

  }
  render() {
    let search = this.state.focus ? 'search-keyword active' : 'search-keyword';
    let value = this.state.value; 
    return (
      <div className="search-bar">
        <div className="alink-back">
          <span className="icon-back"></span>
        </div>
        <div className={search}>
          <span className="icon-search"></span>
          <input type="text" placeholder="搜索关键字" onChange={this.handleChange.bind(this)} ref={(ref) => this.getRef(ref)} onFocus={this.searchFocus.bind(this)} />
        </div>
        <div className="search-close" onClick={this.searchClose.bind(this)}>
          取消
        </div>
      </div>
    )
  }
}

export default SearchBar;
