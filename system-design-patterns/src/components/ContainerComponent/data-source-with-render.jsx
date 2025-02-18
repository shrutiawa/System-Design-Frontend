import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";


// this component is more generic and it doesnot aware of the axios call
// it doesnot know from where is data coming from
export const DataSourceWithRender = ({ getData =()=>{}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return render(resource);
};
