import React from "react";

class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [{ id: 1, name: '张三', content: '沙发' }],
            textareaText: "",
            userName: ""
        }
    }

    handleClick() {
        const { list, textareaText, userName } = this.state;

        if (!textareaText || !userName) return alert("请输入信息")


        this.setState({
            list: [{
                id: 10 + Math.floor(Math.random() * 10000) + 1,
                name: userName,
                content: textareaText
            }, ...list],
            textareaText: '',
            userName: ""
        })
    }

    handleChangeForm = ({ target }) => {

        const value = target.type === 'checkbox' ? target.checked : target.value

        this.setState({
            [target.name]: value
        })
    }

    handleDetect(id) {
        const { list } = this.state;
        const newList = list.filter(item => item.id !== id)
        this.setState({
            list: newList,
            textarea: '',
            userName: ""
        })
    }

    renderList(list) {
        return (
            list.map(({ name, content, id },) => (<li key={id}>
                <span> 名字：{name}</span>
                <span> 内容：{content}</span>
                <button onClick={() => {
                    this.handleDetect(id)
                }}>删除</button>
            </li>))
        )
    }
    render() {
        const { list, textareaText, userName } = this.state;

        return (<div>
            
            <button onClick={() => {
                console.log(this.props.history.push('/page1'));
            }}>点击跳转page1</button>

            <div style={{ marginTop: "50px" }} >
                <input placeholder="请输入名称" name="userName" onChange={this.handleChangeForm} value={userName} />
                <br />
                <textarea placeholder="请输入文本" name="textareaText" onChange={this.handleChangeForm} value={textareaText} />
                <button onClick={this.handleClick.bind(this)}>保存</button>
            </div>
            <div style={{ marginTop: "50px" }}>
                <ul>
                    {
                        list.length ? this.renderList(list) : <span>暂无数据</span>
                    }
                </ul>
            </div>
        </div>)
    }
}

export default Index