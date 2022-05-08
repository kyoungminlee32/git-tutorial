import React from 'react';
import { Link } from 'react-router-dom' 

function Header(props) {
  return (
    <>
      {/* <h1>
        <Link to="/">
          헤더입니다.
        </Link>
      </h1> */}
      <header id="header">
        <h1 className="skip">제대로 지켜주는 지키지</h1>
        <div className="head_box">		
          <h2><Link to="/"><span>페이지명</span></Link></h2>
          <button className="btn_back"><span className="skip">이전페이지</span></button>
        </div>
      </header>
    </>
  );
} 

export default Header;
