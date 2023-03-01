import './App.css';
import Tab from './components/Tab.js';
import Block from './components/Block';
import { useState } from 'react';

function App() {
  const [color,setColor] = useState("all");
  return (
    <div className="App">
      <Tab active={color} setColor={setColor}/>
      <div className='Grid'>
        {(color === "red" || color === "all") && <Block color="red"/>}
        {(color === "green" || color === "all") && <Block color="green"/>}
        {(color === "red" || color === "all") && <Block color="red"/>}
        {(color === "blue" || color === "all") && <Block color="blue"/>}
        {(color === "green" || color === "all") && <Block color="green"/>}
        {(color === "red" || color === "all") && <Block color="red"/>}
        {(color === "green" || color === "all") && <Block color="green"/>}
        {(color === "red" || color === "all") && <Block color="red"/>}
        {(color === "blue" || color === "all") && <Block color="blue"/>}
        {(color === "red" || color === "all") && <Block color="red"/>}
        {(color === "red" || color === "all") && <Block color="red"/>}
        {(color === "blue" || color === "all") && <Block color="blue"/>}
        {(color === "green" || color === "all") && <Block color="green"/>}
        {(color === "blue" || color === "all") && <Block color="blue"/>}
        {(color === "green" || color === "all") && <Block color="green"/>}
        {(color === "blue" || color === "all") && <Block color="blue"/>}
      </div>
    </div>
  );
}

export default App;
