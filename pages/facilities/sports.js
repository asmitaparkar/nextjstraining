import React from 'react'
export const getStaticProps = () => {
    //we can call api here
    return {
      props: { footerstatus: true },
    };
  };
const sports=()=> {
    return (
      <div>sports</div>
    )
  }
export default sports;
