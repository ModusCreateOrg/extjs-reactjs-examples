import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Carousel.css';

class Carousel extends Component {
  static defaultProps = {
    activecard: 0,
    className: '',
    position: 'bottom'
  }

  constructor (props) {
    super(props);

    this.state={
      activecard : props.activecard
    }
  }

  render () {
    let { className } = this.props;
    className = className ? ` ${className}` : '';

    const { children, position } = this.props;
    const { activecard } = this.state;
    const xPositions = ['top', 'bottom'],
          axis = xPositions.includes(position) ? 'x' : 'y';

    return (
      <div
        {...this.props}
        className = {`carousel ${position}${className}`}
      >
        <div className={`nav-strip`}>
          {React.Children.map(children, (child, i) => {
            const isActive = (i === activecard) ? 'active' : '';

            return <div
              onClick={this.onNavClick.bind(this, i)}
              className={`nav ${isActive}`}
            >
              <span className="nav-dot"></span>
            </div>;
          })}
        </div>
        <SwipeableViews
          index={activecard}
          onChangeIndex={this.onNavClick.bind(this)}
          enableMouseEvents={true}
          axis={axis}
        >
          {React.Children.map(children, (child, i) => {
            let { className } = child.props;
            className = className ? ` ${className}` : '';

            const isActive  = (i === activecard) ? ' active' : '';
            const cardProps = {
              ...child.props,
              style     : {flex: 1},
              className : ` card${isActive}${className}`,
              cardindex : i,
              activecard
            };

            return React.cloneElement(child, cardProps);
          })}
        </SwipeableViews>
      </div>
    );
  }

  onNavClick (activecard) {
    this.setState({
      activecard
    });
  }
}

export default Carousel;