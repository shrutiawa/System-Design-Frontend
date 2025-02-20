// import { useCurrentUser } from "./current-user-hooks";

import axios from "axios";
import { useDataResource } from "./data-source-hook";
import { useResource } from "./resource-hook";
import { useUser } from "./user-hook";
import { useCallback } from "react";

const fetchFromServer = resourceUrl => async ()=>{
  const response = await axios.get(resourceUrl);
  return response.data;

}

const getFromLocalStorage =key => async() =>{
  return localStorage.getItem(key);
}
export const UserInfo = ({userId}) => {
  const fetchUser = useCallback(fetchFromServer(`/users/${userId}`),[userId]); 
  // const user = useResource('users/2');
  const user = useDataResource(fetchUser);
  const message = useDataResource(getFromLocalStorage("msg"));
  const { name, age, country, books } = user || {};
  console.log("i am rendering")
    return user ? (
      <>
      {message}
        <h2>{name}</h2>
        <p>Age: {age} years</p>
        <p>Country: {country}</p>
        <h2>Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book}> {book} </li>
          ))}
        </ul>
      </>
    ) : (
      <h1>Loading...</h1>
    );
  };
  