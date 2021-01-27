import React, {useState} from 'react';
import './Pic.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SECRET_URL from "./secret"

// function isFavorite(pic) {
//   let favPics = new Set();
//   favPics = new Set(defaultProps.map(obj => obj.id))
//   return favPics.has(pic.id);
// }

const Pic = (prop) => {
  const [check, isChecked] = useState("no");
  //TODO select pictures based on "check" state to pass down with isFavorite()

  return (
      <div className="AllPics">
        { check === "yes" ? <CheckCircleIcon /> : null } 
          <img 
            onClick= {() => check === "no" ? isChecked("yes") : isChecked("no")} 
            className={check === "yes" ? "Selected" : "Pic"} 
            src={`${SECRET_URL}${prop.id}.jpg`}
            alt="BeautifulAngel" 
            >
         </img>
      </div>
  );
}

export default Pic;