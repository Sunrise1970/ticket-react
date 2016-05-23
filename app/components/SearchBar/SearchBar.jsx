import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

class SearchBar extends Component {
  static PropTypes = {
    history: PropTypes.object.isRequired
  }
  getRef(ref){ 
    this.keywordRef = ref;
  }
  handleSubmit(event){
    const keyword = this.keywordRef.value;
    this.keywordRef.value = '';

    const path = `/bill/${keyword}`;
    browserHistory.push(path)

  }
  render(){
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">搜索 Github</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
