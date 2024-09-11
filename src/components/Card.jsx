import React from "react";
import "../styles/card.css";
import { TbStars } from "react-icons/tb";
const Card = ({ item }) => {
  return (
    <div className="w-[280px] mb-6 shrink-0 grow">
      <div className="group cursor-pointer h-[182px] overflow-hidden rounded-2xl relative">
        <img
          className="group-hover:scale-[-1] duration-150  object-cover w-full h-full"
          src={`${item.image}`}
          alt=""
        />
        <div className="image-overlay absolute w-full h-full top-0 flex p-2 tracking-tighter  items-end font-bold  uppercase text-yellow-400">
          items at : ${`${item.caloriesPerServing + " " + "Only"}`}
        </div>
      </div>
      <div className="mt-3 font-bold text-xl">
        {`${item.name}`}

      </div>
      <div className=" font-bold text-xs flex items-center capitalize gap-3">rating :
        <TbStars style={{color:"red"}}/>
        {`${item.rating}`} 
      </div>
         <h3 className="text-xl capitalize">  time :  prep,{`${item.prepTimeMinutes}`} cook,{`${item.cookTimeMinutes}`}</h3>
         <h1 className="font-extrabold">{`${item.cuisine}`}</h1>
    </div>
  );
};

export default Card;
