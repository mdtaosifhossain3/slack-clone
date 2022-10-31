import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import image from '../images/slacklogo.png';

function SignIn() {
  //Sign In with Google
  const [signInWithGoogle, loading] = useSignInWithGoogle(auth);

  //Submit Handler
  const submitHandler = () => {
    signInWithGoogle();
    
  }
  
  //Loading State
  if(loading) {
    return <h2>Loading....</h2>
  }
  return (
    <div className="flexCom justify-center h-screen bg-[#e4e4e4]">
      <div className="bg-white flexCom flex-col justify-center px-6  space-y-5 max-w-[430px] w-full h-72 rounded-md">
        {/* Image */}
        <img src={image} alt="Slack Logo" className="w-[155px]" />
        {/* title */}
        <h3 className="font-bold text-3xl">Sign in to Slack</h3>

        {/* Button */}
        <button
          className="bg-[#1A8B1E] px-2 py-2 w-full rounded-sm text-lg text-white"
          onClick={submitHandler}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default SignIn