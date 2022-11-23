import React from "react";

//SSG : Static site generation
export const getStaticProps = async () => {
  //api call
  const response = await fetch("https://fakestoreapi.com/products");
  // console.log(response);
  const data = await response.json();
  return {
    props: { productData: data },
  };
};

const Course = (props) => {
  console.log(props);
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
};

export default Course;
