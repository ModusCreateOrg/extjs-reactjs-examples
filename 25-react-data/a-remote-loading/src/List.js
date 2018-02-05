import React, { Component } from 'react';

class List extends Component {
  state = {};

  componentDidMount() {
    fetch('/data.json')
      .then(res => res.json())
      .then(this.onLoad);
  }

  parseData(data) {
    return data;
  }

  onLoad = data => {
    this.setState({
      data: this.parseData(data)
    });
  };

  render() {
    const { data } = this.state;

    return data ? this.renderData(data) : this.renderLoading();
  }

  renderData(data) {
    if (data && data.length > 0) {
      return (
        <div>
          {data.map(item => (
            <div key={item.id}>
              <a href={`mailto:${item.email}`}>{item.name}</a> {item.company}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No items found</div>;
    }
  }

  renderLoading() {
    return <div>Loading...</div>;
  }
}

export default List;
