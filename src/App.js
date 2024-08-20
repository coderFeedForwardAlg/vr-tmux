
import { useEffect, useState } from "react";
function App() {
  const [grid, setGrid] = useState(Array(10).fill(
    Array(10).fill("A")
  ));
  const [curserX, setCurserX] = useState(0);
const updateLetter = (x,y) => {
  // for(let y = 0; y < grid.length; y++){
    // for(let x = 0; x < grid[y].length; x++){
      
      const nextCounters = grid.map((c, i) => {
      
          if (i === x) {
            // Increment the clicked counter
            return "W"
          } else {
            // The rest haven't changed
            return c;
          }
        })
        

      setGrid(nextCounters);
    // }
      
      
    // }
  }


  useEffect
  (() => {
    updateLetter(0,0);
  })

  
  
  

  return (


<a-scene id = "div">
      
      
      <a-plane 
        position="0 2 -1"
        rotation="0 0 0"
        width="1"
        height="1"
        color="#000000"
      >
      </a-plane>

      <a-text
            whitespace="pre"
            id="textEl"
            baseline="top"
            position= "0.032 2.5 0"
            rotation="90 0 0"
            width="0.9"
            height="10"
            color="green"
            font="mozillavr"
            text="value:A" 
            ></a-text>



      {grid.slice(0, 11).map((letter, i) => {
        return (
          <a-text
          key={i}
            whitespace="pre"
            id="textEl"
            baseline="top"
            position={i * 0.032 + " 2 " + " -0.9"}
            rotation="0 0 0"
            width="0.9"
            height="10"
            color="green"
            font="mozillavr"
            text={"value:" + letter}
            ></a-text>
        );
      }
      )}



   
      <a-sky color="#FFFFFF"></a-sky>
    </a-scene>


  );
}

export default App;
