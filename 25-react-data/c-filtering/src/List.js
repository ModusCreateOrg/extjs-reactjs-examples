import React, { Component } from 'react';
import { createFilter } from './util/Filter';
import { createSorter } from './util/Sort';

class List extends Component {
  state = {
    filters: this.props.filters,
    sorters: this.props.sorters
  }

  static defaultProps = {
    filters: [{
      property: 'name',
      value: 'dori'
    }, {
      property: 'company',
      value: 'a'
    }],

    sorters: [{
      property: 'name'
    }, {
      property: 'company'
    }]
  }

  componentDidMount () {
    fetch('/data.json')
      .then(res => res.json())
      .then(this.onLoad);
  }

  parseData (data) {
    const { sorters } = this.state;

    if (data && data.length) {
      if (Array.isArray(sorters) && sorters.length) {
        data.sort(createSorter(...sorters));
      }
    }

    return data;
  }

  onLoad = (data) => {
    this.setState({
      data: this.parseData(data)
    });
  }

  render () {
    const { data } = this.state;

    return data ?
      this.renderData(data) :
      this.renderLoading();
  }

  renderData (data) {
    if (data && data.length > 0) {
      const { filters } = this.state;

      if (Array.isArray(filters) && filters.length) {
        data = data.filter(createFilter(...filters));
      }

      return (
        <div>
          {
            data.map(item => (
              <div key={item.id}>
                <a href={`mailto:${item.email}`}>{item.name}</a> {item.company}
              </div>
            ))
          }
        </div>
      );
    } else {
      return <div>No items found</div>;
    }
  }

  renderLoading () {
    return <div>Loading...</div>;
  }
}

export default List;
