import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

import Auth from './Auth';

export const AuthContext = React.createContext();

const testUsers = {
  admin: {
    password: 'ADMIN',
    name: 'Administrator',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ'
  },
  editor: {
    password: 'EDITOR',
    name: 'Editor',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s'
  },
  writer: {
    password: 'WRITER',
    name: 'Writer',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68'
  },
  user: {
    password: 'USER',
    name: 'User',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go'
  },
};

function AuthProvider(props) {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // can('delete') should return true or false
  function can(permission) {
    return user.capabilities && user.capabilities.includes(permission);
  }

  // Pretending to login
  // Really ... we should be calling the API to validate the user
  // The API would return a token
  function login(username, password) {
    let validUser = testUsers[username];
    if (validUser && validUser.password === password) {
      validateToken(validUser.token);
    }
  }

  function logOut() {
    setLoggedIn(false);
    setUser({});
    localStorage.removeItem('token');
  }

  function validateToken(token) {
    try {
      let validUser = jwtDecode(token);
      setUser(validUser);
      setLoggedIn(true);
      localStorage.setItem('token', token);
    } catch (e) {
      setUser({});
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      validateToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, user, login, logOut, can }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
