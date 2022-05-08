import React from 'react';
import BtnNext from './../component/BtnNext';

function Lo10301() { 
  return (
      <div id="content">
        <div className="login_cont_box find_pass">
          <h2><span className="idro">아이디를 잊으셨나요?</span></h2>
          <p className="info_msg">아이디를 찾기 위해 휴대폰 번호를 입력해주세요.</p>
          <div className="field_box">
            <div className="set">
              <label htmlFor="f_name">휴대폰 번호</label>
              <input type="text" id="f_name" name="name" placeholder="휴대폰 번호를 입력해주세요" />
            </div>					
          </div>	
        </div>
        <BtnNext />
      </div>
  );
}



export default Lo10301;
