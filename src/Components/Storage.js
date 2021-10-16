import React from 'react'
import  './Storage.css'

function Storage({title,Icon,storage}) {
    return (
        <div className="storage">
            <div className="storage__title"><Icon /><p>{title}</p></div>
            <p className="storage__details">{storage}</p>
        </div>
    )
}

export default Storage
