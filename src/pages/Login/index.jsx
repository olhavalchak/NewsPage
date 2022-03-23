import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { authActions } from '../../lib/redux/actions';
import { Link } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const [isButtonDisabled,  setIsButtonDisabled] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: '',
    key: '',
  });
  useEffect(() => {
    setIsButtonDisabled(!!userInfo.email && !!userInfo.key);
  },[userInfo] );
  const onChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(authActions.fillUserProfile(userInfo));
    localStorage.setItem('key', userInfo.key);
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-item">  
          <h2>Login</h2>
          </div>
        <div className="login-item">
          <input placeholder="email" className="login-input" name="email" type="email" onChange={onChange} value={userInfo.email}/>
        </div>
        <div className="login-item">
          <input type="text" className="login-input" placeholder="key" name="key" onChange={onChange} value={userInfo.key}/>
        </div>
        <div className="login-item">
          <button type="submit" disabled={!isButtonDisabled} className="login-submit" onClick={handleSubmit}>
            <Link to="/main" className='link'>SUBMIT</Link>
            </button>
        </div>
      </div>
    </div>
)};
