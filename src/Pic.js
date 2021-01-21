import React, {useState} from 'react';
import './Pic.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SECRET_URL from "./secret"
//import Check from "./AddCheck"

// function isFavorite(pic) {
//   let favPics = new Set();
//   favPics = new Set(defaultProps.map(obj => obj.id))
//   return favPics.has(pic.id);
// }

const Pic = (prop) => {
  const [check, isChecked] = useState("no");
  //let imgChk = true ? <CheckCircleIcon /> : "";

  // $(".pic").on("click", function(e) {
  //   const target = e.target;
  //   $(target).toggleClass("chk")
  // })

  return (
      <div className="Pics">
        {/* <span onClick= {() => check === "no" ? isChecked("yes") : isChecked("no")}> */}
        { check === "yes" ? <CheckCircleIcon /> : null } 
          <img 
            onClick= {() => check === "no" ? isChecked("yes") : isChecked("no")} 
            className={check === "yes" ? "Selected" : "Pic"} 
            src={`${SECRET_URL}${prop.id}.jpg`}
            alt="BeautifulAngel" 
            >
         </img>
        {/* </span> */}
      </div>
  );
}

export default Pic;