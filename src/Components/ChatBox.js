import { collection, doc, orderBy, query } from 'firebase/firestore';
import React from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { TiUserAdd } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db } from '../firebase';
import image from '../images/minilogo.png';
import Info from './Info';
import InputBar from './InputBar';
import Message from './Message';

function ChatBox() {
  //channel id
  const { channelId } = useSelector(selectUser);

  //channel Data
  const [channelData] = useDocument(channelId && doc(db, "user", channelId));


  const checkId = channelId && doc(db, "user", channelId);

  //Creating Reference
  const msgRef = checkId && collection(checkId, "message");

  //query
  const q = msgRef && query(msgRef, orderBy("createAt", "asc"));

  //Collection of messages
  const [messages] = useCollection(q);

  return (
    // Chat Box
    <div className="bg-[#1A1D21] mt-[55px] flex-[0.8] text-[#9F9EA1] flex justify-between flex-col relative overflow-y-scroll ">
      {/* ChatBox Header Top */}
      <div className="flexCom justify-between border-b-[1px] border-[#3E3D42] px-4  py-2">
        {/* ChatBox Header Left */}
        <h3 className="text-2xl font-bold">
          # {channelData?.data().channelName}
        </h3>
        {/* ChatBox Header Right */}
        <div className="flexCom space-x-4 border  border-[#3E3D42] p-1">
          <Info avatar={channelData?.data().photo || image} />
          <Info Icon={TiUserAdd} />
        </div>
      </div>

      {/* Message Area */}
      <div className="absolute top-[53px] max-h-[450px] h-full w-full overflow-y-scroll scrollbar-hide">
        {/* If there are messages then  */}
        {messages &&
          messages.docs.map((doc) => {
            const { photo, msg, name, createAt } = doc.data();
            return (
              // Message Component
              <Message
                name={name}
                photo={photo}
                createAt={createAt}
                msg={msg}
                channelData={channelData}
              />
            );
          })}
      </div>

      {/* Input field */}
      <div className="px-6 mb-8 ">
        {/* Input Bar Componenet */}
        <InputBar channelId={channelId} />
      </div>
    </div>
  );
}

export default ChatBox