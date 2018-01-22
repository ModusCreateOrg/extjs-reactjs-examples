import React, { Component } from 'react';
import './App.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import faReact from '@fortawesome/fontawesome-free-brands/faReact';


// HEADER
//
class Header extends Component {
  render () {
    const { collapsible, preTools, postTools,
          title, toggleCollapse } = this.props;
    return (
      <div className="header">
        {title}
        <div style={{flex: 1}}></div>
        {preTools}
        {collapsible && 
          <FontAwesomeIcon
            className="collapse-tool header-tool"
            icon={faChevronDown}
            onClick={toggleCollapse}
          />
        }
        {postTools}
      </div>
    );
  }
}

// EXPANDER
//
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


// PANEL
//
class Panel extends Component {
  static defaultProps = {
    expanded: true
  }
  state = {
    expanded: this.props.expanded
  }
  componentWillReceiveProps = ({ expanded }) => {
    this.setState({expanded});
  }
  toggleCollapse = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  render() {
    const { collapsible, expandDir, preTools,
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

// PANEL INSTANCE
//
class App extends Component {
  render() {
    return (
      <Panel
        title="My Panel"
        collapsible
        style={{width: '300px'}}
        preTools={
          <FontAwesomeIcon
            className="header-tool"
            icon={faReact}
            onClick={() => console.log('React button handler')}
          />
        }
      >
        1
        <br />
        2
        <br />
        3
      </Panel>
    );
  }
}
export default App;

