import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const list = [{
    id: '001',
    title: "消息1",
    content: "我是消息1"
}, {
    id: '002',
    title: "消息2",
    content: "我是消息2"
}, {
    id: '003',
    title: "消息3",
    content: "我是消息3"
}, {
    id: '004',
    title: "消息4",
    content: "我是消息4"
},]

export default function Message() {
    const navigate = useNavigate()
    return (
        <div>

            <h1>路由里面限定，子路由用 useParams 取出来</h1>
            <ul>
                {list.map((item) => (<li key={item.id}>
                    {/* 路由里面限定，子路由用 useParams 取出来*/}
                    <Link to={`detail/${item.id}`} >{item.title}</Link>
                    <button onClick={() => {
                        navigate(`detail/${item.id}`)
                    }}>查看详情</button>
                </li>))}
            </ul>

            <h1>? 拼接字符串</h1>
            <ul>
                {list.map((item) => (<li key={item.id}>
                    {/* 路由里面限定，子路由用 useParams 取出来*/}
                    <Link
                        to={`detail1?id=${item.id}&title=${item.title}`}
                        state={{ ...item }}
                    >{item.title}</Link>
                    <button onClick={() => {
                        navigate(`detail1?id=${item.id}&title=${item.title}`, {
                            replace: false,
                            state: { ...item }
                        })
                    }}>查看详情</button>
                </li>))}
            </ul>

            <hr />
            <Outlet />
            <br /><br /><br /><br />
        </div>
    )
}
