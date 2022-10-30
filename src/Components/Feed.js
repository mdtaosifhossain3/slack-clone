import React from 'react';
import ChatBox from './ChatBox';
import Sidebar from './Sidebar';

function Feed() {
  return (
    <div className="flex bg-[#19171D]">
      <Sidebar />
      <ChatBox />
    </div>
  );
}

export default Feed