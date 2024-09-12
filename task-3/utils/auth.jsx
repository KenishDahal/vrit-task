// utils/auth.js
const mockUser = {
    username: 'vrit',
    password: 'vrit',
  };
  
  export function authenticate(username, password) {
    return username === mockUser.username && password === mockUser.password;
  }
  