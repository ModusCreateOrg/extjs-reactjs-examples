import React, { Component } from 'react';
import Tab from './Tab';
import './TabPanel.css';

class TabPanel extends Component {
  static defaultProps = {
    activetab: 0,
    className: '',
    position: 'top'
  };

  constructor(props) {
    super(props);

    this.state = {
      activetab: props.activetab
    };
  }

  render() {
    const { children, className, position } = this.props;
    const { activetab } = this.state;

    return (
      <div {...this.props} className={`${className} tab-panel ${position}`}>
        <div className={`tab-strip`}>
          {React.Children.map(children, (child, i) => (
            <Tab
              onClick={this.onTabClick.bind(this, i)}
              {...child.props}
              cardindex={i}
              activetab={activetab}
            />
          ))}
        </div>
        <div className="card-ct">
          {React.Children.map(children, (child, i) => {
            const { className } = child.props,
              isActive = i === activetab ? 'active' : '',
              cardProps = {
                ...child.props,

                className: `${className} card ${isActive}`,
                cardindex: i,
                activetab: activetab
              };

            return React.cloneElement(child, cardProps);
          })}
        </div>
      </div>
    );
  }

  onTabClick(activetab) {
    this.setState({
      activetab
    });
  }
}

export default TabPanel;
