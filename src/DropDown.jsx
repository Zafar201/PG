import { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["S1", "S2", "S3",'S4','S5','S6','S7','S8','S9'];
  const option = ["M1", "M2", "M3",'M4','M5','M6'];
  return (
    <div className="ota-mng">
        <Navbar/>
        <div className="title">
            OTA Management page
        </div>
    <Container className="box">
    <div className="dropdown">
        <div className="heading">
            Device
        </div>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fa fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
            <div className="options">
            {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
            </div>
            <div className="options" style={{marginTop:'20px'}}>
            {option.map((opt) => (
            <div
              onClick={(e) => {
                setSelected(opt);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {opt}
            </div>
          ))}
            </div>
      
        </div>
      )}
    </div>
    <div className="dropdown">
        <div className="heading">
            Version
        </div>
      <div className="dropdown-btn">
        <input type="text" name="" id="" />
      
      </div>
    </div>
    <div className="dropdown">
        <div className="heading">
           file upload
        </div>
      <div className="dropdown-btn custom-file-upload">
        <input type="file" placeholder="upload bin" name="" id="" />
      
      </div>

      <div className="butt">
        <button>download  file</button>
      </div>
    </div>
    
    </Container>

    <div className="button">
        <button>push update</button>
    </div>
    </div>
  );
}

export default Dropdown;
