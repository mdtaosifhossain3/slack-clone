import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from "react-router-dom";
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import { auth } from './firebase';


function App() {
  
  const [user,loading] = useAuthState(auth)

  //Loading state
  if(loading) {
    return <h2>Loading</h2>
  }

  return (
    <div className="App">
      {!user ? (
        // if the user is not found
        <SignIn />
      ) : (
        //If the user is found
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
