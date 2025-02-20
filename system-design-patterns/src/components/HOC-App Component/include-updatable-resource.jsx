import { useEffect, useState } from "react";
import axios from "axios";

const toCaptial = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export const includeUpdatableResource = (Component, resourceUrl, resourceName) => {
    return (props) => {
        const [initialResource, setInitialResource] = useState(null);
        const [resource, setResource] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(resourceUrl);
                setResource(response.data);
                setInitialResource(response.data);
            })();
        }, []);

        const onChange = (updates) => {
            setResource({ ...resource, ...updates });
        };

        const onPost = async () => {
            console.log("post calles")
            const response = await axios.post(resourceUrl, {
                [resourceName]: resource,
            });
            console.log(response.data)
            setInitialResource(response.data);
            setResource(response.data);
        };

        const onReset = () => {
            console.log("reset calles")
            setResource(initialResource);
        };

        const resourceProps = {
            [resourceName]: resource,
            [`on${toCaptial(resourceName)}Change`]: onChange,
            [`on${toCaptial(resourceName)}Post`]: onPost,
            [`on${toCaptial(resourceName)}Reset`]: onReset,
        }

        return (
            <Component
                {...props}
                {...resourceProps}
            />
        );
    };
};
