import React from 'react';
import BtnNext from './../component/BtnNext';

function Lo10201() { 
  return (
    <div id="content">
      <div className="login_cont_box find_pass">
        <h2><span className="pass">비밀번호를 잊으셨나요?</span></h2>
        <p className="info_msg">이름이 무엇인가요? 지키지 계정의 이름을 입력해주세요.</p>
        <div className="field_box">
          <div className="set">
            <label htmlFor="l_name">이름을 입력해주세요</label>
            <input type="text" id="l_name" name="name" placeholder="홍길동"/>
          </div>		
        </div>				
      </div>
      <BtnNext />
    </div>
  );
}



export default Lo10201;
