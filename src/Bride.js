import React from 'react';
import Pic from './Pic';
import SECRET_URL from "./secret"
//import { Link } from "react-router-dom";
//import { useSelector, useDispatch } from 'react-redux';
//import Check from "./AddCheck"

//import { resetAll } from "./actions/reset";


function Bride({pics}) {
    // () => {
        // let imgChk = true ? <CheckCircleIcon /> : "";}

  return (
    <div>
    {pics.map(p => (
    <Pic
      key={`${SECRET_URL}${p.id}}`}
      id={p.id}
      
    />
    ))} 
    </div>
  );
}


Bride.defaultProps = {
  pics: [
    {id:1, img:"1"},
    {id:2, img:"2"},
    {id:3, img:"3"},
    {id:4, img:"4"},
    {id:5, img:"5"},
    {id:6, img:"6"},
    {id:7, img:"7"}
  ]
}


export default Bride;