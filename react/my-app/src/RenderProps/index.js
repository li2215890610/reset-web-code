import React from 'react';
import MouseTM from "./MouseTM";
import HOC from "./HOC";

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     componentDidMount() {
//         console.log('Component DID MOUNT!')
//     }

//     render() {
//         //每次组件渲染都会触发，用来渲染UI
//         console.log('render--');
//         return (
//             <div>
//                 <MouseTM/>
//                 <HOC>
//                     <h3>高阶组件</h3>
//                 </HOC>
//             </div>
//         );
//     }
// }

const App = ()=> {
    return (
        <div>
            <MouseTM/>
            <HOC>
                <h3>高阶组件</h3>
            </HOC>
        </div>
    );
};

export default App