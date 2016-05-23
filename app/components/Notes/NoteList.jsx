import React, { Component, PropTypes } from 'react';

export default class NoteList extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired
  }
  render(){
    let notes = this.props.notes.map((note, index) => {
      return note['.value'] != '' && <li className="list-group-item" key={index}>{note['.value']}</li>
    })
    if (notes.length == 0) {
      notes = "暂无评论"
    }
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
}
