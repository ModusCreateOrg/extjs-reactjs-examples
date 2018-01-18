import React, {Component} from 'react'

class SegmentedBtn extends Component {
  static defaultProps = {
    pressed: [],
    allowDepress: false
  }
  state = {
    pressed: this.props.pressed
  }
  componentWillReceiveProps ({ pressed }) {
    this.setState({ pressed });
  }
  render() {
    const { pressed } = this.state;
    const { onClick } = this.props;
    return (
      <div
        className="button-group"
        onClick={this.onClick.bind(this, onClick)}
      >
        {/* loop over the child buttons and decorate pressed
        buttons with the className of "btn-pressed" */}
        {this.props.children.map(btn => {
          const { props } = btn;
          const { value } = props;
          const className = pressed.includes(value) ? 'btn-pressed' : '';
          
          // use cloneElement to apply our own
          // props over the button's props
          return React.cloneElement(btn, {
            ...props,
            key: value,
            className
          });
        })}
      </div>
    );
  }
  onClick (handler, e) {
    // call the onClick handler if one was passed in
    if (handler && typeof handler === 'function') {
      handler.call(this, e);
    }
    const { allowDepress } = this.props;
    const { target: btn } = e;
    const { tagName } = btn;
    let { pressed } = this.state;
    
    if (tagName === 'BUTTON') {
      const { value } = btn;
      const valIndex = pressed.indexOf(value);
      const isPressed = valIndex !== -1;
      // toggle the "pressed" button state
      if (isPressed) {
        if (allowDepress || (!allowDepress && pressed.length > 1)) {
          pressed = pressed.filter(item => item !== value);
        }
      } else {
        pressed = [...pressed, value];
      }
      this.setState({ pressed });
    }
  }
}
export default SegmentedBtn;
