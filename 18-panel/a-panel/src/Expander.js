import React, { Component } from 'react';
import './Expander.css';

class Expander extends Component {
  static defaultProps = {
    expanded: true
  }

  componentDidMount = () => {
    this.setHeight(this.props.expanded);
    this.forceUpdate();
  }

  componentWillReceiveProps = ({ expanded }) => {
    this.setHeight(expanded);
  }

  setHeight = (expanded) => {
    const { scrollHeight } = this.expandWrap;
    this.wrapHeight = expanded ? scrollHeight + 'px' : 0;
  }

  render () {
    const { className = 'expander-wrap', style = {} } = this.props;
    Object.assign(style, {
      height: this.wrapHeight
    })

    return (
      <div
        ref={el => this.expandWrap = el}
        className={className}
        style={style}
      >
        {this.props.render(this.props)}
      </div>
    );
  }
}

export default Expander;