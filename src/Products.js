import React from "react";

const Products = (props) => {
  const product = props.setfun;
  console.log(product);
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="  bg-pink-400 text-white flex flex-col justify-center items-center h-80 w-60 rounded-xl mt-5 md:h-[500px] md:w-[400px] p-2 mb-5">
        <div>
          {
            <img
              className="h-44 w-36 object-fit  md:h-72 md:w-64"
              src={product.images}
            />
          }
        </div>
        <div className="text-white font-bold text-center text-xl md:text-2xl xl:text-4xl pb-3 ">
          {" "}
          {product.title}{" "}
        </div>
        <div className="text-sm md:text-xl xl:text-2xl text-white">
          {"Category : "} {product.category}
        </div>
        <div className="text-sm md:text-xl sl:text-2xl text-white">
          {"Price:"} {product.price}
        </div>
      </div>
    </div>
  );
};

export default Products;
