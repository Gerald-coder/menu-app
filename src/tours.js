import React from "react";
import Tour from "./tour";

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <main>
              <Tour tours={tour} removeTour={removeTour} />
            </main>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
