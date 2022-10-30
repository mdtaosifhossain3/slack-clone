import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiSearch } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { auth } from '../firebase';
import image from '../images/l.jpg';
import Info from './Info';

function Navbar() {
  //User
  const [user] = useAuthState(auth)

  //Click or Not
  const [btnclick,setBtnClick] = useState(false)

  //Click Handler
  const clickHandler = () => {
    setBtnClick(!btnclick);
  }

  const btn = btnclick ? `block` : `hidden`;

  return (
    <header className="bg-[#121016] flex items-center text-white px-8 py-3 fixed left-0 right-0 z-10">
      {/* Header Right */}
      <div className="flex items-center space-x-4 max-w-[500px] w-full pr-4">
        <Info Icon={BsClock} />
        <form className="flex items-center w-full bg-[#3E3D42] space-x-2 px-2 py-[5px] rounded-sm">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full outline-none border-none bg-[#3E3D42]"
          />
          <Info Icon={BiSearch} />
        </form>
      </div>

      {/* Header Left */}
      <div className="ml-auto flex justify-center items-center space-x-4">
        <div className="flex flex-col">
          <button onClick={clickHandler}>
            {/* Info Component */}
            <Info avatar={user?.photoURL || image} />
          </button>
          <div
            className={` ${btn} absolute top-12 right-10 bg-white text-black px-2  `}
          >
            <button onClick={() => signOut(auth)}>Log Out</button>
          </div>
        </div>
        {/* Info Component */}
        <Info Icon={FiInfo} />
      </div>
    </header>
  );
}

export default Navbar