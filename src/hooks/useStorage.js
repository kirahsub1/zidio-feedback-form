 import { useEffect, useState } from "react";


const useStorage = () => {
  const [savedUser, setSavedUser] = useState(null);
  const savedToken = localStorage.getItem("token");
  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");

    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);
      setSavedUser(user);
    }
  }, []);

  return { savedUser, savedToken };
};

export default useStorage;