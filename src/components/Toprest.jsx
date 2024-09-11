import React, { useState, useEffect } from "react";
import Card from "./Card";

const Toprest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(all => {
        console.log(all); // Log the entire response to check its structure
        setData(all.recipes || []); // Adjust based on actual API response
      })
      .catch(error => console.error('Error:', error));
  }, []);
  let [slide, setSlide] = useState(0);
   const nextOne = () => {
      
      if (data.length -4 == slide) return false;
      
      setSlide(slide - 2);
      
   }
   const prevOne = (item) => {
      if (slide == 0) return false;
      setSlide(slide + 2);
   }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between my-5">
        <h1 className="font-semibold text-[25px]">Top restaurant in Gilgit</h1>
        <div className="flex gap-4">
          
        </div>
      </div>
      <div className="flex gap-7 overflow-hidden">
        {data.map((item, index) => (
          
          <Card key={index} item={item} />

        ))}
      </div>

      <hr className="my-6 border-[1px]" />

    </div>
  );
};

export default Toprest;
