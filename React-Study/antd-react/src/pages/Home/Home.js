import React from "react";

import "./Home.less";

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }    
  }

  render (){
    
    console.log(this.props);
    
    return(
      <div className='home_warp'>
          <h1>欢迎学习React+antd 后台管理系统</h1>
      </div>
    )
  }
}

export default Home;