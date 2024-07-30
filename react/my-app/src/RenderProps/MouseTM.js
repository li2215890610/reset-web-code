import React from 'react';
import Mouse from "./Mouse";
import logo from '../logo.svg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
        document.querySelector('h1') && setTimeout(() => {
            document.querySelector('h1').innerText = '我是更改过的 h1 文案'
        }, 2000);
    }

    render() {
        //每次组件渲染都会触发，用来渲染UI
        console.log('render--');
        return (
            <div>
                <Mouse render={(data) => (<div>X:{data.X},Y{data.Y}</div>)} />
                {/* <Mouse render={(data) => {
                    return (<div style={{ width: '50px', height: '60px', position: 'absolute', top: `${data.Y}px`, left: `${data.X}px` }}>
                        <img src={logo} style={{ width: '50px', height: '60px' }} alt="logo" />
                    </div>)
                }} /> */}
                <Mouse>
                    {
                        (data) => {
                            return (<div style={{ width: '50px', height: '60px', position: 'absolute', top: `${data.Y}px`, left: `${data.X}px` }}>
                                <img src={logo} style={{ width: '50px', height: '60px' }} alt="logo" />
                            </div>)
                        }
                    }
                </Mouse>
            </div>
        );
    }
}
export default App;


