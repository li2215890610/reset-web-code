import React from "react";

class Controlled extends React.Component {
    constructor() {
        super()
        this.state = {
            counts: 0,
            text: "",
            content: '',
            city: 'bg',
            isCheckbox: true
        }
        this.textRef = React.createRef()
    }

    handleChange = ({ value }) => {
        this.setState({
            counts: value
        })
    }

    handleChangeForm = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value

        this.setState({
            [target.name]: value
        })
    }

    onChange = ()=>{
        console.log("非受控组件",this.textRef.current.value);
    }

    render() {
        const { counts, content, city, isCheckbox } = this.state;

        return (<div>
            <div style={{ marginTop: "50px" }} >
                <input name="counts" type="text" onChange={e => this.handleChange(e.target)} value={counts} />
            </div>
            <div style={{ marginTop: "50px" }}>
                <textarea name="content" onChange={this.handleChangeForm} value={content || ''} />
                <select name="city" value={city} onChange={this.handleChangeForm}>
                    <option value='bg'>北京</option>
                    <option value='sh'>上海</option>
                    <option value='xc'>许昌</option>
                </select>
                <input type="checkbox" name="isCheckbox" checked={isCheckbox} onChange={this.handleChangeForm} />
            </div>

            <div style={{ marginTop: "50px" }}>
                非受控组件
                <input onChange={this.onChange} type="text"  ref={this.textRef} />

            </div>
        </div>)
    }
}

export default Controlled