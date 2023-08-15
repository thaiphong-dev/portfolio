import React from "react";
// import "./index.scss";

export default function HeaderMenu() {
  const classNames = "hover:text-red-400";

  return (
    <div className="flex justify-between font-bold">
      <div className="hover:text-red-400">Phong, Tu</div>
      <div>
        <ul className="flex justify-between min-w-[30rem]">
          <li className={classNames}>Home</li>
          <li className={classNames}>About</li>
          <li className={classNames}>Projects</li>
          <li className={classNames}>Contact</li>
        </ul>
      </div>
    </div>
  );
}
