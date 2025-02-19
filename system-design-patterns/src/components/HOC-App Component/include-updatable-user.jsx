import { useEffect, useState } from "react";
import axios from "axios";

export const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const [updatableUser, setUpdatableUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
        setUpdatableUser(response.data);
      })();
    }, []);

    const userChangeHandler = (updates) => {
      setUpdatableUser({ ...updatableUser, ...updates });
    };

    const userPostHandler = async () => {
      console.log("post calles")
      const response = await axios.post(`/users/${userId}`, {
        user: updatableUser,
      });
      console.log(response.data)
      setUser(response.data);
      setUpdatableUser(response.data);
    };

    const resetUserHandler = () => {
      console.log("reset calles")
      setUpdatableUser(user);
    };

    return (
      <Component
        {...props}
        updatableUser={updatableUser}
        changeHandler={userChangeHandler}
        userPostHandler={userPostHandler}
        resetUserHandler={resetUserHandler}
      />
    );
  };
};
