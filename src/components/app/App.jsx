import './App.scss';
import boxesArray from '../../data/boxes';
import {useState} from 'react';
import Box from '../box/Box';

function App() {
  /**
   * Challenge: use setSquares to update the
   * correct square in the array.
   * 
   * Make sure not to directly modify state!
   * 
   * Hint: look back at the lesson on updating arrays
   * in state if you need a reminder on how to do this
   */

  const [boxes, setBoxes] = useState(boxesArray)
  
  function toggle(id){
    setBoxes(prevBoxes => {
      return prevBoxes.map(b => {
        return b.id === id ? {...b, on: !b.on} : b;
      })
    });
  }

  return (
    <main>
        <h1>Boxes will go here</h1>
        {boxes.map(box => 
          <Box 
            key={box.id}
            id={box.id}
            isOn={box.on}
            handleToggle={() => toggle(box.id)} 
          />
        )}
    </main>
  )
}

export default App;