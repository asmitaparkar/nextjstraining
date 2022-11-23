import React from "react";
import { useRouter } from "next/router";

// export const getServerSideProps = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const products = await response.json();
//     return {
//       props: { productData: products },
//     };
//   };

const ProductId = (context) => {
  const router = useRouter();
  const { id } = router.query;
  return <div>This is product page - {id}</div>;
};
export default ProductId;
