import React from 'react'
import { Link } from 'react-router-dom' 

const BtnNext = () => { 
  return (
    <div className="btn_fix_one">
      <Link to="/" className="btn btn_next on"><span className="skip">다음</span></Link>
    </div>
  );
}



export default BtnNext;
