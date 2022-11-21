import React from 'react'
export const getStaticProps = () => {
    //we can call api here
    return {
      props: { footerstatus: true },
    };
  };
const library=()=> {
    return (
      <div>library</div>
    )
  }
  
export default library;
