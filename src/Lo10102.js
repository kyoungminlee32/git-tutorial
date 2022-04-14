import React from 'react';
import { Link } from 'react-router-dom';
import BtnNext from './component/BtnNext';

function Lo10102() { 
  return (
      <div id="content">
        <div className="login_cont_box">
          <h2><span className="idro">아이디로 로그인</span></h2>
          <div className="field_box">
            <div className="set">
              <label htmlFor="idlog" className="set_label">아이디</label>
              <input type="text" id="idlog" name="idro" placeholder="아이디 6자 이상 입력해 주세요" />
            </div>
            <div className="set">
              <label htmlFor="pass" className="set_label">비밀번호</label>
              <input type="password" id="pass" name="pass" placeholder="비밀번호 8자 이상 입력해 주세요" />
            </div>
            <div className="set auto_login_set check_one">
              <input type="checkbox" name="ch1" id="autologin" defaultChecked />
              <label htmlFor="autologin">자동로그인</label>
              <div>
                <Link to="/product/Lo10301">아이디 찾기</Link>
                <Link to="/product/Lo10201">비밀번호 찾기</Link>
              </div>
            </div>
          </div>
          <div className="btn_ci_box join_btn_box"><Link to="/product/Re10101" className="btn btn_in"><span>새 계정 만들기</span></Link></div>
        </div>
        <BtnNext />
      </div>
  );
}



export default Lo10102;
