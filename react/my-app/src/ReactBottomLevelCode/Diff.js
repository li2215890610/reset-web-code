import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  
  handleClick(){

  }

  render() {
    //每次组件渲染都会触发，用来渲染UI
    console.log('render--');
    return (
      <div>

      </div>
    );
  }
}
export default App;


