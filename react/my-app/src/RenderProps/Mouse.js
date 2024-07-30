import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      X: 0,
      Y: 0,
    }
  }
  thimer = null
  componentDidMount() {
    clearTimeout(this.thimer)
    this.thimer = setTimeout(() => {
      window.addEventListener('mouseover', this.handleMover.bind(this))      
    }, 300);
  }

  componentWillUnmount(){
    clearTimeout(this.thimer)
    debugger
    window.removeEventListener('mouseover',this.handleMover.bind(this))
  }
  handleMover(e) {
    console.log(e);
    
    this.setState({
      X: e.clientX,
      Y: e.clientY
    })
  }

  render() {
    //每次组件渲染都会触发，用来渲染UI
    console.log('render--');
    return (this.props.children && this.props.children(this.state)) || this.props.render(this.state)
  }
}
export default App;


