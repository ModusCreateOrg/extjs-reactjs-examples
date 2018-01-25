import React, { Component } from 'react';
import Header from './Header';
import Expander from './Expander';
import './Panel.css';

class Panel extends Component {
  static defaultProps = {
    expanded: true
  }

  state = {
    expanded: this.props.expanded
  }

  componentWillReceiveProps = ({ expanded }) => {
    this.setState({ expanded });
  }

  toggleCollapse = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { collapsible, expandDir, headerPosition, preTools,
      postTools, style = {}, title } = this.props;
    const { expanded } = this.state;
    const showHeader = title.length || collapsible;
    const className = `panel${expanded ? ' expanded' : ''}`;

    return (
      <div className={className} style={style}>
        {showHeader &&
          <Header
            title={title}
            collapsible={collapsible}
            toggleCollapse={this.toggleCollapse}
            preTools={preTools}
            postTools={postTools}
          />
        }
        <Expander expanded={expanded} expandDir={expandDir} render={() => (
          <div className="body-el">
            {this.props.children}
          </div>
        )} />
      </div>
    );
  }
}

export default Panel;