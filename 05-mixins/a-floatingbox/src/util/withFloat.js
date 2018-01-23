export default function withFloat(WrappedComponent) {
  return class Enhanced extends WrappedComponent {
    float() {
      this.setState({
        cls: 'floating'
      });
    }

    render() {
      return super.render();
    }
  }
}