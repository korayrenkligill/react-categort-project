import './App.css';
import Tab from './components/Tab.js';
import Block from './components/Block';
import { useState } from 'react';

function App() {
  const [blocks,setBlocks] = useState([
    {
      id: 0,
      color: "red",
    },
    {
      id: 1,
      color: "blue",
    },
    {
      id: 2,
      color: "green",
    },
    {
      id: 3,
      color: "red",
    },
    {
      id: 4,
      color: "blue",
    },
    {
      id: 5,
      color: "blue",
    },
    {
      id: 6,
      color: "red",
    },
    {
      id: 7,
      color: "red",
    },
    {
      id: 8,
      color: "blue",
    },
    {
      id: 9,
      color: "green",
    },
    {
      id: 10,
      color: "blue",
    },
    {
      id: 11,
      color: "green",
    },
    {
      id: 12,
      color: "green",
    },
    {
      id: 13,
      color: "blue",
    },
    {
      id: 14,
      color: "red",
    },
    {
      id: 15,
      color: "red",
    },
    {
      id: 16,
      color: "red",
    },
    {
      id: 17,
      color: "green",
    },
    {
      id: 18,
      color: "red",
    },
    {
      id: 19,
      color: "green",
    },
    {
      id: 20,
      color: "blue",
    },
    {
      id: 21,
      color: "blue",
    },
    {
      id: 22,
      color: "red",
    },
    {
      id: 23,
      color: "red",
    },
    {
      id: 24,
      color: "green",
    },
  ]);


  const [color,setColor] = useState("all");
  return (
    <div className="App">
      <Tab active={color} setColor={setColor}/>
      <div className='Grid'>
        {blocks.map((key)=>{
          return <Block key={key.id} color={key.color} category={color}/>
        })}
      </div>
    </div>
  );
}

export default App;
