import React from 'react';
import BtnFull from './../component/BtnFull';

function Lo10202() {
  return (
    <div id="content">
      <div className="login_cont_box find_pass">
				<h2><span className="pass">비밀번호를 잊으셨나요?</span></h2>
				<p className="info_msg">비밀번호를 재설정하기 위해 휴대폰인증을 해주세요.</p>
				<div className="field_box">
					<div className="set tel_set">
						<label htmlFor="tel00" className="set_label">휴대폰 번호</label>
						<input type="text" id="tel00" name="tel00" placeholder="휴대폰 번호를 입력해주세요" />
					</div>
				</div>
        <BtnFull />
			</div>
    </div>
  );
}



export default Lo10202;
