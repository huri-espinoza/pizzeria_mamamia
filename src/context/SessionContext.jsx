import { createContext, useState } from "react";
export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [token, logout] = useState(true);

  return (
    <SessionContext.Provider
      value={{
        token,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
