////
import { useEffect, useState } from "react";
import Loading from "./loading";
import Tours from "./tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const [tours, setTours] = useState([]);
  const getTour = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setError(false);
      setTours(tours);
      // console.log(tours);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    getTour();
  }, []);
  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No More Tours Left</h2>
          <button className="btn" onClick={() => getTour()}>
            Refresh
          </button>
        </div>
      </main>
    );
  } else if (error) {
    return <h1>Error fetching data...</h1>;
  }
  return <Tours tours={tours} removeTour={deleteTour} />;
}

export default App;
