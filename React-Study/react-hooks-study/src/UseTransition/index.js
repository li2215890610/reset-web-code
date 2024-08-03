import React,{ useTransition,useState } from "react";
import "./index.css";

// 配合标签页切换

/**
 * // 可以将一个更新转为低优先级更新,使其可以被打断,
 * // 不阻塞 UI对用户操作的响应，能够提高用户的使用体验。
 * // 它常用于优化视图切换时的用户体验。
 */

// 例如有以下3个标签页组件，分别是 Home、Movie、About ，
// 其中 Movie 是一个演染特别耗时的组件，
// 在渲染 Movie 组件期间页面的 UI 会被阻赛，
// 用户会感觉页面十分卡顿，示例代码如下:
// 你需要等待完成渲染才可以点击 其他标签页，但是用 
// useTransition就不会等待 渲染完成在跳转，而是直接跳转

export const TabsContainer = () => {
  // 被激活的标签页的名字
  const [activeTab, setActiveTab] = useState('home')
  const [isPending, startTransition] = useTransition()

  // 点击按钮，切换激活的标签页
  // const onClickHandler = (tabName) => {
  //   setActiveTab(tabName)
  // }

  const onClickHandler = (tabName) => {
    //更新为低优先级，防止页面卡顿
    startTransition(() => {
      setActiveTab(tabName)
    })
  } 

  const renderTabs = () => {

    if (isPending) return <h3>Loading...</h3>

    switch (activeTab) {
      case 'home':
        return <HomeTab />
      case 'movie':
        return <MovieTab />
      case 'about':
        return <AboutTab />
      default:
        return <AboutTab />
    }
  } 

  return (
    <div style={{ height: 500 }}>
      <TabButton isActive={activeTab === 'home'} onClick={() => onClickHandler('home')}>
        首页
      </TabButton>

      <TabButton isActive={activeTab === 'movie'} onClick={() => onClickHandler('movie')}>
        电影
      </TabButton>

      <TabButton isActive={activeTab === 'about'} onClick={() => onClickHandler('about')}>
        关于
      </TabButton>
      <hr />

      {/* 根据被激活的标签名，渲染对应的 tab 组件 */}
      {/* {activeTab === 'home' && <HomeTab />}
      {activeTab === 'movie' && <MovieTab />}
      {activeTab === 'about' && <AboutTab />} */}
      {renderTabs()}
    </div>
  )
}


// Button 组件
const TabButton = (props) => {
  const onButtonClick = () => {
    props.onClick()
  }

  return (
    <button className={['btn', props.isActive && 'active'].join(' ')} onClick={onButtonClick}>
      {props.children}
    </button>
  )
}

// Home 组件
const HomeTab = () => {
  return <>HomeTab</>
}

// Movie 组件
//模拟耗时的组件
const MovieTab = () => {
  const items = Array(100000)
    .fill('MovieTab')
    .map((item, i) => <p key={i}>{item}</p>)
  return items
}

// About 组件
const AboutTab = () => {
  return <>AboutTab</>
} 


export default TabsContainer