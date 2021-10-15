import logo from './logo.svg';
import './App.css';
import Costume from './Costume'

function App() {
  const costumes = [{name: "Care Bear", type: "kid", colors: ["red", "blue", "purple"]},
  {name: "Rock Star", type: "adult", colors: ["red", "silver", "gold"]},
  {name: "Cat", type: "kid", colors: ["black", "orange"]}]

  const costumeElement = costumes.map(c => <Costume name={c.name} type={c.type} colors={c.colors} />)
  return (
    <div className="App">
     {costumeElement}
    </div>
  );
}

export default App;
