import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch(process.env.API_URL);
  const products = await response.json();
  return {
    props: { productData: products },
  };
};

const Batches = (props) => {
  console.log(productData);
  return (
    <div>
      <h2>This is Course page.</h2>
      {productData.map((item) => (
        <div className="row">
          <Link href={`/products/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Batches;
