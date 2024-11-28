import { useState, useRef } from 'react';
import { useMatrixEffect } from './components/c-hooks/effectHook';
import Main from './components/Main';

function App() {

  const myCanvas = useRef(null);
  useMatrixEffect(myCanvas);

  return ( 
    <>
    <canvas ref={myCanvas}></canvas> 
    <Main></Main>
    </>
);
}
  



export default App
