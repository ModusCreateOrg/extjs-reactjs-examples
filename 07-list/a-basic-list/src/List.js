import React, { Component } from 'react';
import './List.css';
class List extends Component {
  state = {}
  render () {
    const { data } = this.props;
    return (
      <div className="list">
        { data.map(this.buildItem.bind(this)) }
      </div>
    );
  }
  buildItem (item) {
    return (
      <div
        key={item.id}
        className={this.getItemClassName(item)}
        onClick={this.onItemClick.bind(this, item)}
      >
        <div className="main">{item.lastName}, {item.firstName}</div>
        <div className="secondary">
          {item.company}
          <span className="meta"> (hired: {item.hireDate})</span>
        </div>
      </div>
    );
  }
  getItemClassName (item) {
    return 'list-item';
  }
  onItemClick (item, e) {
    e.preventDefault();
    const { onItemClick } = this.props;
    if (typeof onItemClick === 'function') {
      onItemClick(item, e);
    }
  }
}
export default List;

