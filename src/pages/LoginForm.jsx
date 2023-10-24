import React, { useState } from 'react';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
  };

  return (
    <div className="login-form-container">
      <div className="left-side">
        {/* Place your image or content here */}
        <img
          src="https://cutewallpaper.org/29/dream-big-laptop-wallpaper/667613006.jpg"
          alt="Your Image"
        />
      </div>
      <div className="right-side">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <label>Select Role:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="role1"
                  value="admin"
                  checked={role === 'admin'}
                  onChange={handleRoleChange}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="role2"
                  value="staff"
                  checked={role === 'staff'}
                  onChange={handleRoleChange}
                />
                Staff
              </label>
              <label>
                <input
                  type="radio"
                  name="role3"
                  value="student"
                  checked={role === 'student'}
                  onChange={handleRoleChange}
                />
                Student
              </label>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        {/* Add the signup and forgot password links here */}
        <p><a href="/Signup">Sign Up</a></p>
        <p><a href="/Forgotpass">Forgot Password?</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
