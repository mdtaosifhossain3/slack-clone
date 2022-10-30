import React from 'react';
import image from "../images/minilogo.png";
function Message({name,msg,photo,createAt }) {

  return (
    <div className="flex items-start space-x-2 pl-6 py-4 ">
      {/* Image Area */}
      <div className="pt-1">
        <img
          src={photo || image}
          alt="msg logo"
          className="w-[45px] rounded-md"
        />
      </div>
      
      {/* name,time,message area */}
      <div className="leading-none	">
        {/* User Name and Time */}
        <div className="flex space-x-1 items-center">
          <h3 className="font-semibold text-lg text-white">{name}</h3>
          <p className="text-[12px] pt-1">
            {new Date(createAt?.toDate()).toLocaleTimeString("en-US")}
          </p>
        </div>
        {/* Message */}
        <p className="text-[18px]">{msg}</p>
      </div>
    </div>
  );
}

export default Message