import React from 'react';
import { Link } from 'react-router-dom' 

function Re10101() { 
  return (
    <div id="content">
      <div className="login_cont_box">
        {/* <!-- 퍼블 수정 영역  --> */}
        <div className="profile_box">
          <button className="profile_edit">
            {/* <!-- 
              프로필이미지 등록전 기본이미지일때 className="profile_view profile_big_view profile_view_bg" 이름,이미지 등록되면 profile_view_bg 클래스 삭제 
              마이페이지,회원가입일때만 profile_big_view 클래스 추가 이름텍스트 키움
            --> */}
            <div className="profile_view profile_big_view">
              {/* <!--<img src="../../WebContent/img/img_test01.jpg">--> */}
              <span>이름</span>
              {/* <!-- 이미지가 없을경우 이름 노출 --> */}
            </div>
          </button>
          <div className="id_type">
            <strong>ezhong@gmail.com</strong>
          </div>
        </div>
        {/* <!-- //퍼블 수정 영역  --> */}
        <div className="field_box">
          {/* <!--
          <div className="set">
            <span className="s_txt">ex ) 홍길동의 경우</span>
            <label htmlFor="f_name">성</label>
            <input type="text" id="f_name" name="name" placeholder="성을 입력해주세요">
          </div>
          --> */}
          <div className="set">
            <label htmlFor="l_name">이름을 입력해주세요</label>
            <input type="text" id="l_name" name="name" placeholder="홍길동" />
          </div>
          <div className="set tel_set">
            <div className="set">
              <label htmlFor="tel00" className="set_label">휴대폰 번호</label>
              <input type="tel" id="tel00" name="tel00" placeholder="휴대폰 번호를 입력해주세요" />
              <button className="btn btn_b_blue btn_s1 off">인증</button>
              {/* <!-- 비활성화시 class off 추가 , 활성화시 class off 제거해주세요 --> */}
            </div>
            <p className="error_msg" style={{display:'block'}}>동일한 휴대폰 번호로 이미 가입되어 있습니다. 휴대폰 번호를 다시 확인해주세요.</p>

            {/* <!-- 인증 버튼 누른뒤 활성화 되는 영역 --> */}
            <div className="set">
              <label htmlFor="num1" className="skip">인증번호 입력</label>
              <input type="tel" id="num1" name="num1" placeholder="인증번호를 입력해주세요" />
              <button className="btn btn_b_blue btn_s1">확인</button>
              {/* <!-- 비활성화시 class off 추가 , 활성화시 class off 제거해주세요 --> */}
              <span className="time_mag">2분 8초</span>
            </div>
            {/* <!-- //인증 버튼 누른뒤 활성화 되는 영역 --> */}

            {/* <!-- 인증버튼가 틀릴 경우 출력되는 영역 --> */}
            <p className="error_msg" style={{display:'block'}}>인증번호가 틀렸습니다. 다시 시도해주세요.</p>
            {/* <!-- //인증버튼가 틀릴 경우 출력되는 영역 --> */}
          </div>			
        </div>				
      </div>
      <div className="terms_box1 check_one">
        <div className="terms_top">
          <input type="checkbox" name="ch1" id="all_agree" defaultChecked />
          <label htmlFor="all_agree">전체 동의하기 <span>지키지 서비스 필수 동의 항목</span></label>
        </div>
        <ul className="terms_list">
          <li>
            <input type="checkbox" name="ch1" id="agree1" />
            <label htmlFor="agree1">서비스 이용약관</label>
            <a href="re-10201.html"><span className="skip">약관보기</span></a>
          </li>
          <li>
            <input type="checkbox" name="ch1" id="agree2" />
            <label htmlFor="agree2">개인정보 처리방침</label>
            <a href="re-10201.html"><span className="skip">약관보기</span></a>
          </li>
          <li>
            <input type="checkbox" name="ch1" id="agree3" />
            <label htmlFor="agree3">위치기반 서비스</label>
            <a href="re-10201.html"><span className="skip">약관보기</span></a>
          </li>
        </ul>
        {/* <!-- 2020-11-24 이경민 버튼 추가 --> */}
        <div className="section">
          <div className="btn_full_box">
            <button className="btn btn_b_blue">지키지 시작하기</button>
            {/* <!-- 버튼 비활성화 일때 class에 off 추가해주세요 --> */}
          </div>
        </div>
        {/* <!--// 2020-11-24 이경민 버튼 추가 --> */}
      </div>
      {/* <!-- 2020-11-24 이경민 버튼 삭제
      <div className="btn_fix_one">
        <a href="javascript:void(0)" className="btn btn_next on"><span className="skip">다음</span></a>
      </div>
      --> */}
    </div>
  );
}



export default Re10101;
