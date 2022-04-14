import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return (
    <>
      <h3><span>{ productId }</span>상품 페이지입니다.</h3>
    </>
  );
} 

export default Product;
