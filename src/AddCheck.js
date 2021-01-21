import React, {useState} from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Check = () => {
    const [check, isChecked] = useState("no");
    // () => {
        // let imgChk = true ? <CheckCircleIcon /> : "";}
    // <span onClick= {() => check === "no" ? isChecked("yes") : isChecked("no")}>
    //     { check === "yes" ? <CheckCircleIcon /> : "" }
    return (
        <span onClick= {() => check === "no" ? isChecked("yes") : isChecked("no")}>
        { check === "yes" ? <CheckCircleIcon /> : "Select" } </span>
    )
}

export default Check;