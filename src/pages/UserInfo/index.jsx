import React from "react";
import { selectUserInfo } from '../../lib/redux/selectors';
import { useSelector } from "react-redux";

export const UserInfo = ({ isActive, setActive }) => {
  const userInfo = useSelector(selectUserInfo);
  return (
    <div className={isActive ? 'userinfo-container active' : 'userinfo-container'} onClick={() => setActive(false)}>
      <div className="userinfo-box" onClick={(e) => e.stopPropagation()}>  
        <h3>User Info</h3>
        <div className="userinfo">
          <div className="name">email:</div>
          <div className="info">{userInfo.email}</div>
        </div>
        <div className="userinfo">
          <div className="name">Key:</div>
          <div className="info">{userInfo.key}</div>
        </div>
      </div>
    </div>
  )
};
