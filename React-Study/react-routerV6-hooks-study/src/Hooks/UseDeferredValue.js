import React, { useState, useDeferredValue, memo,  } from 'react'

// 配合文本框

// 父组件
export const SearchBox = () => {
  const [kw, setKw] = useState('')
  // 2. 基于 kw 的值，为其创建出一个延迟版的 kw 值，命名为 deferredKw
  const deferredValue = useDeferredValue(kw)

  const onInputChange = (e) => {
    setKw(e.currentTarget.value)
  }

  return (
    <div style={{ height: 500 }}>
      <input type="text" value={kw} onChange={onInputChange} />
      <hr />
      {/* 3. 将延迟版的 kw 值，传递给子组件使用 */}
      <div style={{ opacity: kw !== deferredValue ? 0.3 : 1, transition: 'opacity 0.5s ease' }}>
        <SearchResult query={deferredValue} />
      </div>
    </div>
  )
} 


// 子组件，渲染列表项
// 4. 子组件必须使用 React.memo() 进行包裹，这样当 props 没有变化时，会跳过子组件的 rerender
const SearchResult = memo((props) => {
  if (!props.query) return

  const items = Array(10000)
    .fill(props.query)
    .map((item, i) => <p key={i}>{item}</p>)

  return items
}) 




export default SearchBox