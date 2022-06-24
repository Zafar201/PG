
import { useState } from 'react';
import './App.css';
import DropDown from './DropDown';
import ClustorMonitering from './pages/ClustorMonitering';

function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">

    {/* <DropDown selected={selected} setSelected={setSelected} /> */}
    <ClustorMonitering/>

  </div>
  );
}

export default App;
