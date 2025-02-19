import axios from "axios";
import { useEffect, useState } from "react";

export const includeUpdatableUser = (Component, userId) => {
    return (props) => {
        const [initialUser, setInitialUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setInitialUser(response.data);
                setUser(response.data);
            })();
        }, [])

        const onChangeUser = updates => {
            console.log("hello", updates)
            setUser({ ...user, ...updates });
        }

        const onPostUser = async () => {
            console.log("hello post called")
            const response = await axios.post(`/users/${userId}`, { user });
            console.log("response",response)
            setInitialUser(response.data);
            setUser(response.data);
        }

        const resetUser = () => {
            console.log("hello reset called")
            setUser(initialUser);
        }
        return <Component
            {...props}
            user={user}
            onChangeUser={onChangeUser}
            onPostUser={onPostUser}
            onResetUser={resetUser} />
    }
}