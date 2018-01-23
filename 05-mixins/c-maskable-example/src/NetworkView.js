import React, {Component} from 'react'

class NetworkView extends Component {
  state = {
    ip: this.props.ip,
    mask: this.props.mask,
    router: this.props.router
  }

  static defaultProps = {
    onBeforeLoad: () => {},
    onLoad: () => {}
  }
  componentDidMount () {
    if (!this.props.ip) {
      this.load();
    }
  }
  load () {
    this.props.onBeforeLoad();
    setTimeout(() => {
      this.setState({
        ip: '192.168.1.2',
        mask: '255.255.255.0',
        router: '192.168.1.1'
      });
      this.props.onLoad()
    }, 3000);
  }
  onLoad () {}
  render () {
    const { ip, mask, router } = this.state;

    return (
      <div style={{width: "300px", padding: "12px" }}>
        <h1>TCP/IP</h1>
        IP: {ip}<br/>
        Network Mask: {mask}<br/>
        Router: {router}
      </div>
    );
  } 
}

export default NetworkView;
