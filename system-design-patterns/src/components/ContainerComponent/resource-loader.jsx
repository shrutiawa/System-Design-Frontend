import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      console.log(response)
      setResource(response.data);
    })();
  }, [resourceUrl]);

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
