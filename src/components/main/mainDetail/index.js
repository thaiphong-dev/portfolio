import React from "react";
import ava from "../../../assets/ava3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function Maindetail() {
  return (
    <div>
      <div className="flex relative top-[4rem] justify-center">
        <div className="pr-[10rem] pt-[4rem]">
          <div className="text-[3rem] font-[600]">Front-End Developer</div>
          <div className="max-w-[35rem] text-[1.5rem] font-[500] text-zinc-500">
            Hi, I'm Phong Tu. A passionate Front-end developer based in Ho Chi
            Minh Cty, Viet Nam.
          </div>
        </div>
        <div className="max-w-[18rem]">
          <img alt="ava" src={ava}></img>
        </div>
      </div>

      <div className="relative top-[2rem] pl-[11.5rem]">
        <a
          href="https://www.linkedin.com/in/t%E1%BB%AB-th%C3%A1i-phong-b2121a1ab/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            size="2x"
            className="pr-[2rem] cursor-pointer"
            icon={faLinkedin}
          />
        </a>
        <a
          href="https://github.com/thaiphong-ptit"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            size="2x"
            className="pr-[2rem] cursor-pointer"
            icon={faGithub}
          />
        </a>
        <a
          href="https://www.facebook.com/phong.tuthai"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            size="2x"
            className="pr-[2rem] cursor-pointer"
            icon={faFacebook}
          />
        </a>
      </div>
    </div>
  );
}
