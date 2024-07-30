
function RenderTM() {

    const B = 111111

    const SyHai = (data) => {

        if (data) return (<span> {data} </span>)

        return '最后返回'

        //逻辑渲染
        // return  data && (<span> {data} </span>)

        //三元表达
        // return data ? (<span> {data} </span>):"___"
    }

    const Test = (<a href='www.baidu.com'>测试{SyHai(B)}链接</a>)

    const getTest = () => {
        return Test
    }

    //避免 用索引 当作 key
    const list = [{ name: 1, }, { name: 2, }, { name: 3, }].map(item => <li className='li_font' key={`${item.name}`}>{item.name}</li>)

    function handleClick(params) {
        console.log('点击 函数组件', params)
    }

    return (
        <div>
            {Test}
            {getTest()}
            <ul onClick={() => {
                handleClick(1)
            }} style={{ color: "red" }}>
                {list}
            </ul>
        </div>
    );
}

export default RenderTM;
