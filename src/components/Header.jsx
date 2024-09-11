import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { LuHelpingHand } from "react-icons/lu";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/header.css";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };
  const link = [
    {
      icon: <CiSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Order",
      sup: "New",
    },
    {
      icon: <LuHelpingHand />,
      name: "Help",
    },
    {
      icon: <FaPersonBreastfeeding />,
      name: "SignIn",
    },
    {
      icon: <FaShoppingCart />,
      name: "Cart",
    },
  ];
  return (
    <>
      <div
        className="black-ouerlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex: 999,
        }}
      >
      
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-3 shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/p.png" alt="" className="w-14 h-11" />
          </div>
          <div className="uppercase ">
            <span className="font-bold hover:border-b-4 px-2 hover:text-[#fc8019]">
              Gilgit{" "}
            </span>
            <span className="font-bold px-2 hover:border-b-4 hover:text-[#fc8019]">
              {" "}
              nagar{" "}
            </span>{" "}
            <span className="font-bold px-2 hover:border-b-4 hover:text-[#fc8019]">
              hunza
            </span>{" "}
            {" "}
            <span className="font-bold px-2 hover:border-b-4 hover:text-[#fc8019]">
              pakistan
            </span>{" "}
            
            <FaCaretDown
              onClick={showSideMenu}
              
              className="inline font-bold text-[#fc8019] cursor-pointer"
              
            />

            
          </div>
          <nav className="flex list-none gap-5 ml-auto font-samibold text-[18px]">
            {link.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex hover:text-[#fc8019] items-center cursor-pointer gap-2"
                >
                  {link.icon}
                  {link.name}
                  <sup className="text-[#fc8019]">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
