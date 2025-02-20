import { useEffect, useState } from "react";

import axios from "axios";

export const useDataResource = (getData) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async() =>{
            const data = await getData();
            setResource(data);
        })()
    }, [getData]);
    return resource;
}
