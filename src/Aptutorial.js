import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Aptutorial(props) {
  const [userData, setData] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
      setFilteredRecords(response.data.products);
    });
  }, []);

  const filter = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = userData.filter((f) =>
      f.category.toLowerCase().includes(query)
    );
    setFilteredRecords(filtered);
  };

  return (
    <>
      <h1 className="text-white flex justify-center items-center p-5 text-2xl md:text-6xl bg-black ">
        ALL PRODUCTS<br/>
        <input
        type="text"
        placeholder="Search"
        onChange={filter}
        className="h-10 w-[300px] text-black p-2 m-2 text-sm ml-5"
      />
      </h1>
      
      <div className="grid w-full justify-center items-center grid-cols-1 bg-black space-y-2 md:grid md:grid-cols-2 xl:grid-cols-4">
        {filteredRecords &&
          filteredRecords.map((data, index) => (
            <Link
              to="/Products"
              className="flex flex-col justify-center items-center"
              key={index}
              onClick={() => props.setlun(data)}
            >
              <div className="bg-pink-400 text-white flex flex-col justify-center items-center h-64 w-56 rounded-xl mt-5 md:h-96 md:w-80 p-2 mb-5">
                <img
                  className="h-44 w-36 object-cover md:h-56 md:w-44"
                  src={data.images[0]}
                  alt={data.title}
                />
                <div className="text-white font-bold text-center text-xl md:text-2xl xl:text-4xl pb-3">
                  {data.title}
                </div>
                <div className="text-sm md:text-xl xl:text-2xl">
                  {"Category: "} {data.category}
                </div>
                <div className="text-sm md:text-xl xl:text-2xl">
                  {"Price: "} ${data.price}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

export default Aptutorial;
