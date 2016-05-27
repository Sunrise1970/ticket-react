import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import './ScenicList.scss';
import Infinite from 'react-infinite';

class ScenicList extends Component {
  constructor(props) {
    super(props);
  }
  static PropTypes = {
    searchList: PropTypes.object.isRequired
  }
  handleChange = (event) => {
    let h = document.getElementById("scenic-list").offsetHeight;
    console.log(h);
  }
  render() {
    let searchListNode = this.props.searchList.map((data, index) => {
      return (
          <li key={'scenic-' + index}>
              <Link to={`/bill/1`} className="scenic-info">
                  <div className="list-img">
                      <img src={data.image} />
                  </div>
                  <div className="list-detail">
                      <div className="list-detail-title">
                          <h3>珠江夜景</h3>
                      </div>
                      <ul>
                          <li>
                              <div className="list-detail-left">
                                  <span className="list-detail-label">2A级景区</span>
                              </div>
                              <div className="list-detail-right">
                                  <span className="list-detail-price"><span className="icon-money"></span><strong> 45 </strong>起</span>
                              </div>
                          </li>
                          <li>
                              <div className="list-detail-left">
                                  <span className="list-detail-distance">距您2.7km | 广东广州</span>
                              </div>
                              <div className="list-detail-right">
                                  <del className="list-detail-del-price"><span className="icon-money"></span>50</del>
                              </div>
                          </li>
                      </ul>
                  </div>
              </Link>         
          </li>
      )
    });
    return (
      <div className="scenic-list">
        <div id="scenic-list">
          <ul onTouchEnd={this.handleChange}>
              {searchListNode}
          </ul>
        </div>
    </div>
    )
  }
}

export default ScenicList;
