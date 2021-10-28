import React from 'react'


function DocCards({Image , title , Icon}) {
    return (
        <div className="doccards">
               <Image className="doccards__images"/>
            <div className="doccards__footer">
                <div className="doccard__footer__title"><Icon /><p>{title}</p></div>
                <strong>You edited it yesterday</strong>
            </div>
        </div>
    )
}

export default DocCards
