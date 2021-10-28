import React from "react";

function DocCards({ Image, title, Icon ,time ,URL }) {
  return (
    <div className="doccards">
      <Image className="doccards__images" />
      <a href={URL} target="_blank" className="doccards__footer">
        <div className="doccard__footer__title">
          <Icon />
          <p>{title}</p>
        </div>
        <strong>{time}</strong>
      </a>
    </div>
  );
}

export default DocCards;
