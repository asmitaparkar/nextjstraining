import React from "react";
export const getStaticProps = () => {
    //we can call api here
    return {
      props: { footerstatus: true },
    };
  };
const Facilities =(props)=>{
    return(
        <div>
            <h2>This is Facilities page.</h2>
        </div>
    )
}

export default Facilities