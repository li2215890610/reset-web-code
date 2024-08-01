import React from "react";
import { fun as HanShu } from "./HanShuZuJian";

class LeiZuJian extends React.Component {
    constructor(){
        super()
        this.state = {
            counts: 0
        }
        
    }

    handleClick = _ => {
        console.log(this);
        console.log(_.target);
        const { counts} = this.state;
        
        this.setState({
            counts: counts+1
        },()=>{
            console.log(this.state.counts);
            console.log('我是一个方法');
        })
    }
    
    render() {

        const { counts } = this.state;

        return (<div>
            <div onClick={this.handleClick}>
                这是一个类组件 {counts}
                <HanShu count={counts}/>
            </div>
        </div>)
    }
}

export default LeiZuJian