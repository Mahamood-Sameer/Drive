import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Options({Icon , title }) {
    return (
        <Link to={`/Drive/${title}`} className="options">
            <Icon className="options__icons"/>
            <p>{title}</p>
        </Link>
    )
}

export default Options
