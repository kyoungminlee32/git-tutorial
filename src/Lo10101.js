import React from 'react'
import { Link } from 'react-router-dom' 

const Lo10101 = () => { 
  return (
      <div id="content">
        <div className="login_main">
          <p className="tit">
            <span className="ico_bl"><img src="img/ico_owner.png" alt="사업자용" /></span>
            <span>지키지가 제대로</span><span>지켜드릴게요</span>
          </p>
          <div className="login_list_box">
            <div>
              <strong>지키지 로그인하기</strong>
              <ul>
                <li className="lg_t1"><Link to="/"><span>카카오로 로그인</span></Link></li>
                <li className="lg_t2"><Link to="/"><span>네이버로 로그인</span></Link></li>
                <li className="lg_t3"><Link to="/"><span>구글로 로그인</span></Link></li>
                <li className="lg_t14"><Link to="/"><span>애플 로그인</span></Link></li>
                <li className="lg_t4"><Link to="./Lo10102"><span>아이디로 로그인</span></Link></li>
              </ul>
            </div>
            <div>
              <strong>지키지가 처음이세요?</strong>
              <ul>
                <li className="lg_t5"><button><span>회원가입 하러가기</span></button></li>
              </ul>
            </div>
            <div className="btn_ci_box btn_member_box">
              <button className="btn btn_in"><span>회원가입 하러가기</span></button>
            </div>
          </div>
        </div>
      </div>
  );
}



export default Lo10101;
