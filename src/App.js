import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState (true)

useEffect (() =>{
  const fechtdata = async ()=>{
    const response = await axios.get (
      https://deliveroo-neil.herokuapp.com/
    );
    setData(response.data)
    setIsLoading(false)
  }
  fetchData()
}, [])

  return (
    <div className="App">
    {isLoading === true ? (
      <p>En cours de chargement ...</p>
    ) : (
      <div>{data.restaurant.name}</div>
    )}
  </div>
  );
}
export default App;
