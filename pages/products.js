import React from 'react'

export const getServerSideProps = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return {
      props: { productData: products },
    };
  };

const products=(props)=> {
    const { productData } = props;
  return (
    <div>
      <h2>This is Course page.</h2>
      {productData.map((item) => (
        <div className="row">
          <span className="col-3">{item.title}</span>
          <span className="col-3">{item.price}</span>
          <span className="col-3">{item.category}</span>
        </div>
      ))}
    </div>
  );
  }
export default products;
