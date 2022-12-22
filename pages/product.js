import Image from "next/image";
import React from "react";
import styles from '../styles/Product.module.css';

export const getStaticProps = async () => {
  const response = await fetch(process.env.API_URL);
  const products = await response.json();
  return {
    props: { products: products },
  };
};

const Product = (props) => {
  const { products } = props;
  return (
    <div className="row row-cards">
        {products.map((item) => (
      <div className="col-lg-3" key={item.id} width={20} height={10}>
        <div className="card item-card mb-2">
          <div className="card-body pb-0">
            <div className="text-center">
              <Image
                src={item.image}
                alt="img"
                width={50}
                height={50}
                className={styles.product_image}
              ></Image>
            </div>
            <div className="card-body cardbody">
              <div className="cardtitle">
              <span><b>{item.title.slice(0,15)}</b></span><br/>
                <span>{item.category}</span>
                <a>{item.description.slice(0,25) +'...'}</a>
              </div>
              <div className="cardprice">
                <span className="text-center">{item.price}</span>
              </div>
            </div>
          </div>
          <div className="text-center border-top">
            <button className="btn btn-warning btn-sm mt-4 mb-4 mr-2">
              View More
            </button>
            <button href="cart.html" className={[styles.mr_2 , "btn btn-warning btn-sm mt-4 mb-4"].join(" ")}>
              <i className="fa fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};
export default Product;
