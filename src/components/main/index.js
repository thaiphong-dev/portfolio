import React from "react";
import Maindetail from "./mainDetail";
import "./index.scss";
import html5 from "../../assets/icon/icons8-html5-48.png";
import css from "../../assets/icon/icons8-css3-48.png";
import js from "../../assets/icon/icons8-javascript-48.png";
import reactIcon from "../../assets/icon/icons8-react.gif";
import nextjs from "../../assets/icon/icons8-nextjs-48.png";
import nodejs from "../../assets/icon/icons8-nodejs-48.png";
import tailwind from "../../assets/icon/icons8-tailwind-css-64.png";
import mongodb from "../../assets/icon/icons8-mongodb-48.png";
export default function MainPage() {
  return (
    <div>
      <Maindetail />
      <div className="flex justify-between max-w-fit relative top-[10rem] pl-[11.5rem]">
        <div className="text-[1.2rem] font-[500] pt-[0.5rem] pr-[2rem]">
          Teach stack:
        </div>
        <div className="flex justify-between w-[30rem] h-[2.5rem]">
          <img alt="html5" src={html5}></img>
          <img alt="css" src={css}></img>
          <img alt="tailwind" src={tailwind}></img>
          <img alt="js" src={js}></img>
          <img alt="reactjs" src={reactIcon}></img>
          <img alt="nextjs" src={nextjs}></img>
          <img alt="nodejs" src={nodejs}></img>
          <img alt="mongodb" src={mongodb}></img>
        </div>
      </div>
      {/* <div>
        <iframe
          src="https://giphy.com/embed/pmqaQproKGQ6v02O1n"
          title="a"
        ></iframe>
      </div> */}
    </div>
  );
}
