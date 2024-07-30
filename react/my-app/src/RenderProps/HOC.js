import React from 'react';


// 1.创建一个函数，,名称约定以 with 开头
// 2.指定函数参数，参数应该以大写字母开头(作为要渲染的组件 )

function withMouse(WrappedComponent) {
    // 3.在函数内部创建一个类组件，""""  提供复用的状态逻辑代码  """""，并返回
    class Mouse extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                X: 0,
                Y: 0,
            }
        }

        //设置组件名称，方便区分
        static displayName = null;

        static getDisplayName(WrappedComponent){
            return  WrappedComponent.displayName || WrappedComponent.name || 'Component'
        }

        thimer = null
        
        componentDidMount() {
            clearTimeout(this.thimer)
            this.thimer = setTimeout(() => {
                window.addEventListener('mouseover', this.handleMover.bind(this))
            }, 300);
        }

        componentWillUnmount() {
            clearTimeout(this.thimer)
            window.removeEventListener('mouseover', this.handleMover)
        }

        handleMover(e) {
            this.setState({
                X: e.clientX,
                Y: e.clientY
            })
        }

        render() {
            // 4.在该组件中，渲染参数组件，同时将状态通过props传递给参数组件
            return (<WrappedComponent {...this.state} { ...this.props}></WrappedComponent>)
        }
    }

    if (!Mouse.displayName) Mouse.displayName = `WithMouse${Mouse.getDisplayName(WrappedComponent)}`

    return Mouse
}

// const Text = props => {
//     return <div>高阶组件获取X、Y --X:{props.X},Y{props.Y}</div>
// }

// 5.调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件，并将其渲染到页面中
const NewText = withMouse( props =>{
    return <div>高阶组件获取X、Y --X:{props.X},Y{props.Y}----传递 props {props.count}</div>
})
const NewText1 = withMouse( props =>{
    return <div>高阶组件获取X、Y --X:{props.X},Y{props.Y}</div>
})


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
                <NewText count={3}/>
                <NewText1/>
            </div>
        );
    }
}
export default App;


