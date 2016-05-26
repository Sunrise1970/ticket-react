import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import './ScenicList.scss';

class ScenicList extends Component {
  constructor(props) {
    super(props);
  }
  static PropTypes = {
    searchList: PropTypes.object.isRequired
  }
  render() {
    let searchListNode = this.props.searchList.map((data, index) => {
      return (
          <li key={'scenic-' + index}>
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
          </li>
      )
    });
    return (
      <div className="scenic-list">
        <ul>
            {searchListNode}
        </ul>
    </div>
    )
  }
}

export default ScenicList;
