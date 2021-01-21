import React from 'react';
import SECRET_URL from "./secret";
//import axios from "Axios";
//import { Link } from "react-router-dom";
//import { useSelector } from 'react-redux';

//import { resetAll } from "./actions/reset";


function HomePage() {
  // const loaded = useSelector(st => st.films[1] !== undefined);
  // const dispatch = useDispatch();
  
  // function reset() {
  //   dispatch(resetAll());
  // }
  //const pic = await axios.get('https://scott-cap2.s3.us-east-2.amazonaws.com/H%26S-1.jpg');
  
  return (
    <>
      {/* {loaded ? (
        <button
          className="btn btn-danger btn-block btn-lg"
          onClick={reset}
      >*/}

      <img
        className="img-fluid"
        alt="BeautifulAngel"
        src={`${SECRET_URL}4.jpg`}
      />
    </>
  );
}

export default HomePage;
