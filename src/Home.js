import React from 'react';
import SECRET_URL from "./secret";


function Home(props) {

  return (
    <>
     <img
       className="img-fluid"
       alt="BeautifulAngel"
       src={`${SECRET_URL}4.jpg`}
     />
    </>
  );
}

export default Home;
