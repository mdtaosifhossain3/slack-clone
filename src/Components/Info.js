import React from 'react';
import { useDispatch } from 'react-redux';
import { channel } from '../features/userSlice';

function Info({ title, Icon, avatar, addChannels, id, selectChannel }) {

  const dispatch = useDispatch()

  selectChannel = () => {
     dispatch(
       channel({
         channelId: id,
       })
     );
  };

  
    return (
      <div
        onClick={() => (addChannels ? addChannels : selectChannel())}
        className="text-xl cursor-pointer"
      >
        {Icon ? (
          <>
          {/* if user give only icon or icon & title */}
            <div onClick={() => addChannels()} className="flexCom space-x-1">
              <span>
                <Icon />
              </span>
              <span>{title && title}</span>
            </div>
          </>
        ) : (
          <>
            {/* if user give only avatar */}
            {avatar ? (
              <>
                <img
                  src={`${avatar}`}
                  alt="Logo"
                  className="w-[25px] rounded-sm"
                />
              </>
            ) : (
              <>
                {/* if user give only title */}
                <div className="space-x-1 text-[#9F9EA1] text-[18px] hover:bg-[#1164A3] hover:text-white">
                  <span>#</span>
                  <span>{title}</span>
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
}

export default Info