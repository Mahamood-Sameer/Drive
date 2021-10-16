import React from 'react'


function DocCards({image , title , Icon}) {
    return (
        <div className="doccards">
            <div className="doccards__images">
                <img src={image} alt="logo" />
            </div>
            <div className="doccards__footer">
                <div className="doccard__footer__title"><Icon /><p>{title}</p></div>
                <strong>You edited it yesterday</strong>
            </div>
        </div>
    )
}

export default DocCards
