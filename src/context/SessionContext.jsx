import { createContext, useState } from "react";
export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || false;
  });

  const logout = async () => {
    setToken(false);
    setUser(null);
    setEmail(null);
    localStorage.removeItem("token");
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data?.error) {
        setError(data?.error);
      } else {
        localStorage.setItem("token", data.token);
        setToken(true);
        setEmail(data.email);
        alert("Autenticación correcta");
      }
    } catch (err) {
      setError(err.message);
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data?.error) {
        setError(data?.error);
      } else {
        setToken(true);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        alert("Registro correcto");
      }
    } catch (err) {
      setError(err.message);
      setToken(false);
    } finally {
      setLoading(false);
    }
  };

  const dataSession = async () => {
    const bearer_token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearer_token}`,
        }
      });
      const data = await res.json();

      if (data?.error) {
        alert(data?.error);
      } else {
        setUser(data);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <SessionContext.Provider
      value={{
        token,
        user,
        email,
        loading,
        error,
        setError,
        login,
        logout,
        register,
        dataSession
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
