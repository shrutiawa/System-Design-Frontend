import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";


// this component is more generic and it doesnot aware of the axios call
// it doesnot know from where is data coming from
export const DataSource = ({ getData =()=>{},resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource }); //we need to pass the prop value along with the propname
        }
        return child;
      })}
    </>
  );
};
