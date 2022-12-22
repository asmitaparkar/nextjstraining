import React from "react";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  // const router = useRouter(context);
  // console.log(context);
  const  id  = context.params.id;
  // console.log('id'-id);
    const response = await fetch(process.env.API_URL+id);
    const products = await response.json();
    return {
      props: { productData: products },
    };
  };

const ProductId = ({productData}) => {
  console.log(productData);
  // const router = useRouter();
  // const { id } = router.query;
  // console.log('id'-id);
  return <div>This is product page - {productData.title}</div>;
};
export default ProductId;
