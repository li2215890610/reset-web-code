import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Back() {
    const navigate = useNavigate()
    return (
        <div>

            <button onClick={() => {
                navigate(1)
            }}>前进</button>
            <button onClick={() => {
                navigate(-1)
            }}>后退</button>
        </div>
    )
}
