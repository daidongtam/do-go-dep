import React from 'react';
import FeatureProduct from "./FeatureProduct";

function Room(props) {
    return (
      <>
       <h2 className="text-dark text-center mb-3 text-uppercase">
          {props.title}
        </h2>
        <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {
            props.products.map((product)=>(
                    <FeatureProduct key={product.id} id={product.id} type={props.type}
                    src={product.src} title={product.title} price={product.price} />
            ))
          }
        </div>
      </div>
      </>
       
    );
}

export default Room;