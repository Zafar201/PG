
import { useState } from 'react';
import './App.css';
import DropDown from './DropDown';

function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
    {/* custom dropdown menu */}
    <DropDown selected={selected} setSelected={setSelected} />

    <br />
    <br />
    <br />
    {/* {selected} */}
  </div>
  );
}

export default App;
