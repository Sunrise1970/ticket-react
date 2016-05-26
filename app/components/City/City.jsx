import React, { Component, PropTypes } from 'react';
import './City.scss';

class City extends Component {
  constructor(props) {
    super(props);
  }
  state = {
      focus: false,
      value: 'value'
  }
  getRef(ref) { 
    this.keywordRef = ref;
  }
  searchFocus = () => {
    this.setState({focus: true});
  }
  searchClose = () => {
    this.setState({focus: false});
  }
  handleChange = (event) => {
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
      <div className="city-wrap">
        <div className="city-now">
          当前城市： <span id="city-now">广州</span>
        </div>
        <div className="city-select" onClick={this.searchClose}>
          切换城市<span className="icon-arrow-right"></span>
        </div>
      </div>
    )
  }
}

export default City;
