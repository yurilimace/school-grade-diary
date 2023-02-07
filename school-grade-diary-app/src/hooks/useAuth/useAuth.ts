import { useState } from "react";

export const useAuth = () => {
  const [userToken, setUserToken] = useState(() =>
    localStorage.getItem("acessToken")
  );

  return {
    userToken,
  };
};
