import React, { useState, useContext } from 'react';
import { If, Then, Else } from 'react-if';
import { AuthContext } from './Context';

function Login() {

  const auth = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function updateUsername(e) { setUsername(e.target.value); }
  function updatePassword(e) { setPassword(e.target.value); }

  function logMeIn(e) {
    e.preventDefault();
    auth.login(username, password);
  }

  function logMeOut() {
    auth.logOut();
  }

  // This needs to comem from context
  return (
    <If condition={auth.loggedIn}>
      <Then>
        <div>
          Welcome Back, {auth.user.name}
          <button onClick={logMeOut}>Log Out</button>
        </div>
      </Then>
      <Else>
        <form onSubmit={logMeIn}>
          <input name="username" placeholder="username" onChange={updateUsername} />
          <input name="password" type="password" placeholder="password" onChange={updatePassword} />
          <button type="submit">Login!</button>
        </form>
      </Else>
    </If>
  )

}

export default Login;
