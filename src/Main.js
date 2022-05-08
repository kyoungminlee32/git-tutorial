import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      {/* <ul>
        <li><Link to="/product/상품1">첫번상품</Link></li>
        <li><Link to="/product/상품2">두번상품</Link></li>
      </ul> */}
      <ul className="tablist">
        <li><Link to="/product/메일">메일</Link></li>
        <li><Link to="/product/카페">카페</Link></li>
        <li><Link to="/product/블로그">블로그</Link></li>
        <li><Link to="/product/쇼핑">쇼핑</Link></li>
      </ul>
    </>
  );
} 

export default Main;
