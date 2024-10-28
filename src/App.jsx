import LineChart  from "./components/LineChart/LineChart";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import Phones from "./components/Phones/Phones";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
