import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const baseURL = 'http://127.0.0.1:8080'

  const login = (email, password) => {
    const url = `${baseURL}/login`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    };
    
    fetch(url, options)
      .then(response => {
        if (response.status === 401) {
          throw new Error('Invalid Credentials');
        } else if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        setUserId(data.id);
        navigate('/', { replace: true });
      })
      .catch(error => {
        setErrorMsg(error.message);
      });
  };

  const register = (email, password) => {
    const url = `${baseURL}/register`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    };
  
    fetch(url, options)
      .then(response => {
        if (response.status === 409) {
          throw new Error('User already registered');
        } else if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        setUserId(data.id);
        navigate('/', { replace: true });
      })
      .catch(error => {
        setErrorMsg(error.message);
      });
  };
  
  const logout = () => {
    const url = `${baseURL}/logout`
    const options = {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(url, options)
      .then(response => response.json())
      .then(() => {
        setUserId(null);
      })
      .catch(error => console.log(error));
  }

  return (
    <AuthContext.Provider value={{ userId, login, register, logout, errorMsg }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};