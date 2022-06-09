import './App.scss';
import boxesArray from '../../data/boxes';
import {useState} from 'react';
import Box from '../box/Box';

function App() {
  console.log(boxesArray);
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */

  const [boxes, setBoxes] = useState(boxesArray)

  return (
    <main>
        <h1>Boxes will go here</h1>
        {boxes.map(box => 
          <Box key={box.id} isOn={box.on} darkMode={false} />
        )}
    </main>
  )
}

export default App;
