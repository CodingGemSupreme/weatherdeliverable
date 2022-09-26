import "./App.css";
import weatherData from "./weatherData";
import Weather from "./components/weatherRender";



const weatherShow=
weatherData.map((ele, index) =>{
  return(
   
      <Weather {...ele} key={index} 
      />
     );
});
console.log(`just checkin the weather:${weatherShow}`)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GA Weather Forecast</h1>
      </header>
      <section>
       {weatherShow}
      </section>
    </div>
  );
}

export default App;
