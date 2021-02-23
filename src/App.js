import React from 'react';
import { useGlobalContext } from './context';

function App() {
  const value = useGlobalContext();
  console.log(value);
  return <div className='App'>Hello</div>;
}

export default App;
