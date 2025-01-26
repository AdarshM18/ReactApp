import { useState } from 'react';
import './index.css';


// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: color,
//           width: "100vw", // Full width of the viewport
//           height: "100vh", // Full height of the viewport
//         }}
//       >
//         <div className="fixed bottom-12 inset-x-0 flex justify-center">
//           test
//         </div>
//       </div>
//     </>
//   );
// }

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      Tailwind is working!
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button
          onClick={() => setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "black"}}
          >Black</button>
          <button
          onClick={() => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          onClick={() => setColor("olive")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "olive"}}
          >Olive</button>
        </div>
      </div>
    </div>
  );
}

export default App;








//  className="w-full h-screen duration-200"