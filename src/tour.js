import React, { useState } from "react";

function Tour(props) {
  console.log(props);
  const [readMore, setReadMore] = useState(false);
  const { name, id, info, price, image } = props.tours;
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : info.substring(0, 270)}{" "}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "showless..." : "readmore...."}
          </button>
        </p>
        <button className="delete-btn" onClick={() => props.removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
