// LoginModal.js
import React, { useState } from 'react';
import '../css/login.css';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    userid: '',
    password: '',
    username: '',
    userType:'임대인',
    realname: ''
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 실제 구현에서는 API 호출이 들어가야함
    if (isLoginView) {
      // 임시 로그인 처리
      onLogin({
        userid: formData.userid,
        username: formData.username,
        userType: formData.userType
      });
    } else {
      // 임시 회원가입 처리
      onLogin({
        userid: formData.userid,
        username: formData.username,
        userType: formData.userType
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login_modal">
      <div className="login_modal-con">
        <div className="login-header">
          <h2>{isLoginView ? '로그인' : '회원가입'}</h2>
          <button onClick={onClose} className="close-button">X</button>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="user-type-selection">
            {['임대인', '임차인'].map((type) => (
              <button
                type="button"
                key={type}
                className={`type-button ${formData.userType === type ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, userType: type })}
              >
                {type}
              </button>
            ))}
          </div>
          <input
            type="text"
            name="userid"
            placeholder="User ID"
            value={formData.userid}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLoginView && (
            <>
              <input
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={formData.nickname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="realname"
                placeholder="Real Name"
                value={formData.realname}
                onChange={handleChange}
                required
              />
            </>
          )}
          <button type="submit">
            {isLoginView ? '로그인' : '회원가입'}
          </button>
        </form>
        <p>
          또는
          <span
            className="swap-btn"
            onClick={() => setIsLoginView(!isLoginView)}
          >
            {isLoginView ? '  회원가입' : '  로그인'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;