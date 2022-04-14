import React from 'react';
import { Link } from 'react-router-dom' 

function Re10101() { 
  return (
      <div id="content">
        <div className="login_cont_box">
          <h2><span className="join">지키지 회원가입하기</span></h2>
          <div className="field_box">
            <div className="set">
              <label htmlFor="idro">아이디</label>
              <input type="text" id="idro" name="idro" placeholder="6자 이상(숫자포함가능)" />
              <p className="error_msg" style={{display:'block'}}>이미 사용중인 아이디 입니다.</p>
            </div>
            
            <div className="set">
              <label htmlFor="pass1">비밀번호 입력</label>
              <input type="password" id="pass1" name="pass" placeholder="영문, 숫자, 특수문자 포함 8자 이상" />
              <p className="error_msg" style={{display:'block'}}>비밀번호는 8자 이상 입력해주세요.</p>
            </div>
            <div className="set">
              <label htmlFor="pass2">비밀번호 확인</label>
              <input type="password" id="pass2" name="pass" placeholder="비밀번호를 재입력 해주세요" />
              <p className="error_msg" style={{display:'block'}}>비밀번호가 일치하지 않습니다.</p>
            </div>
            <div className="set email_set">
              <label htmlFor="email" className="set_label">이메일</label>
              <div>
                <input type="text" id="email" name="email" placeholder="이메일 주소" />
              </div>
              <span>@</span>
              <div className="email_sel">
                <input name="email2" type="text" className="dir_input" placeholder="직접입력" />
                <select className="select_on" title="이메일 주소 선택">
                  <option value="1">직접입력</option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="google.com">google.com</option>
                  <option value="nate.com">nate.com</option>
                </select>
              </div>						
            </div>
            <p className="normal_msg">메일 주소는 변경이 되지 않습니다. 신중히 입력해 주세요.</p>
          </div>	
          <div className="btn_full_box mt20">
            {/* <button className="btn btn_b_blue">다음 단계</button> */}
            <Link to="/product/Re_10102" className="btn btn_b_blue">다음 단계</Link>
          </div>			
        </div>
      </div>
  );
}



export default Re10101;
