import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../firebase';


function InputBar({ channelId }) {
  // Input value
  const [inputValue, setInputVal] = useState("");

  //User
  const [user] = useAuthState(auth);

  // Submit Handler
  const submitHandler = (e) => {
    const keyCode = e.which || e.keyCode;

    // 13 represents the Enter key
    if (keyCode === 13 && !e.shiftKey) {
      // Don't generate a new line
      e.preventDefault();

      if (e.key === "Enter") {
        if (!channelId) {
          return false;
        }

        //Get the id
        const msg = doc(db, "user", channelId);

        //Reference
        const msgref = collection(msg, "message");

        //Adding a document
        addDoc(msgref, {
          msg: inputValue,
          createAt: serverTimestamp(),
          name: user.displayName,
          photo: user.photoURL,
        });

        //clear input
        setInputVal("");
      }
    }
  };



  return (
    <div className=" bg-[#222529] rounded-md ">
      <div className=" w-full px-4 py-2"   >
        <textarea
          value={inputValue}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={submitHandler}
          type="text"
          placeholder="type here..."
          className="w-full outline-none border-none bg-transparent text-xl h-18 resize-none"
        />

      </div>
    </div>
  );
}

export default InputBar