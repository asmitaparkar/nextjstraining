import React from "react";

//List of paths/url
export const getStaticPaths = async () => {
  //   const arr = ['2022', '2021', '2020', '2019'];
  const response = await fetch('https://fakestoreapi.com/products');
  console.log(response);
  const arr = await response.json();
  const paths = arr.map((item) => {
    return {
      params: {
        year: item.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false, // if page not found go to 404.js
  };
};

export const getStaticProps = async (context) => {
  //   console.log(context);
  const temp = context.params.year;
  const response = await fetch('https://fakestoreapi.com/products/' + temp);
  console.log(response);
  const data = await response.json();
  return {
    props: { res: data, notFound: true },
  };
};

const Year = ({ res }) => {
  //   console.log("res" - res);
  return (
    <div>
      <h2>Product - {res.title}</h2>
      <div>{res.price}</div>
        <div>{res.category}</div>
        <div><img src={res.image}/></div>
    </div>
  );
};
export default Year;
