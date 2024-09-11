import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Category = () => {
   const [Categories, setCategory] = useState([]);
   const fetchCategory = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setCategory(data);
      console.log(data);
   };
   useEffect(() => {
      fetchCategory();
   }, []);

   let [slide, setSlide] = useState(0);
   const nextSlide = () => {
      
      if (Categories.length -10 == slide) return false;
      setSlide(slide - 2);
      
   }
   const prevSlide = () => {
      if (slide == 0) return false;
      setSlide(slide + 2);
   }
   return (
      
         <div className="max-w-[1200px] mx-auto ">
            <div className="flex items-center justify-between my-5">
               <h1 className="font-semibold text-[25px]">Whats on your minds?</h1>
               <div className="flex gap-4">
                  <button className="w-[25px] h-[h-30px] p-1 bg-[#e2e2e7] rounded-full cursor-pointer items-center" onClick={prevSlide}>
                     <FaArrowLeft />
                  </button>
                  <button className="w-[25px] h-[h-30px] p-1 bg-[#e2e2e7] rounded-full cursor-pointer items-center" onClick={nextSlide}>
                     <FaArrowRight />
                  </button>
               </div>
            </div>
            <div className="flex overflow-hidden ">
               {Categories.recipes?.map((cat, index) => {
                  return (
                     <div style={{
                        transform: `translateX(${slide*100}%)`,
                     }} key={index} className="shrink-0 w-[170px] p-4 duration-500  transition-transform ">
                        <img className=" rounded-full " src={cat.image} />
                         <h1 className="text-center mt-3 capitalize text-xs font-semibold">{cat.name}</h1>
                         <h2 className="text-center mt-3 capitalize text-xs -space-x-44"><span className="font-extrabold"> tags :</span>{cat.tags}</h2>
                         <h2 className="text-center mt-3 text-red-900 text-xl uppercase -space-x-44">price :${cat.caloriesPerServing}</h2>
                     </div>
                  )
                  
               })}
            </div>
            <hr className="my-6 border-[1px]" />
         </div>
   );
};

export default Category;
