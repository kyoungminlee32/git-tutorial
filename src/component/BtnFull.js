import React from 'react'
import { Link } from 'react-router-dom' 

const BtnFull = () => { 
  return (
    <div className="btn_full_box">
      <Link to="/" className="btn btn_b_blue">로그인하기</Link>
    </div>
  );
}



export default BtnFull;
