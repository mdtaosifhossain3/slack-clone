import { addDoc } from 'firebase/firestore';
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiDownArrow } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { RiAddCircleFill } from "react-icons/ri";
import { auth, colref } from '../firebase';
import Info from './Info';

function Sidebar() {

  const [snapshot] = useCollection(colref,"user");
  //User
  const [user] = useAuthState(auth)

  //Add Channel Handler
  const addChannels = () => {
    const channelName = prompt()
    
    if (channelName) {
      addDoc(colref, {
        channelName: channelName,
        photo: user?.photoURL,
      });
    }
      
  }


  return (
    <div className="bg-[#19171D] flex-[0.2] text-[white] border-t-[1px] border-r-[1px] border-[#3E3D42] mt-14">
      {/* Slack Name */}
      <div className="flexCom justify-between pl-8 pr-4 py-3 bg-[#27242C]">
        <h1 className=" text-xl font-bold">Slack Clone</h1>
        <FaRegEdit className="text-2xl" />
      </div>

      <div className=" h-[84.3vh] overflow-y-scroll flex flex-col justify-between">
        {/* Browse & Channels area*/}
        <div>
          {/* Browse */}
          <div className="flexCom border-t-[1px] border-[#3E3D42]  border-b-[1px] pl-4 py-3 ">
            <Info Icon={FiMoreVertical} />
            <h2 className="text-lg">Browse Slack</h2>
          </div>
          {/* Channels */}
          <div className="pl-4 py-5 space-y-1 ">
            <Info Icon={BiDownArrow} title="Channels" />
            <Info title="development" id="YEafa6B4niMHDjuN4y9p" />
            <Info title="general" id="joldYfzxlyN3Kjeu857e" />
            <Info title="random" id="1YC6ArZHPPop8FKluWCP" />
            <div className="py-2">
              <Info
                addChannels={addChannels}
                Icon={RiAddCircleFill}
                title="Add Channel"
              />
            </div>

            {snapshot?.docs.map((curElm) => (
              <div key={curElm.id}>
                {curElm.id !== "YEafa6B4niMHDjuN4y9p" &&
                curElm.id !== "1YC6ArZHPPop8FKluWCP" &&
                curElm.id !== "joldYfzxlyN3Kjeu857e" ? (
                  <div>
                    <Info
                      id={curElm.id}
                      title={curElm.data().channelName}
                      selectChannel
                    />
    
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        {/* General */}
        <div className="flexCom justify-between px-4 py-4 text-xl  border-t-[1px] border-[#3E3D42]  border-b-[1px] ">
          <p>General</p>
          <Info Icon={BsHeadphones} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar