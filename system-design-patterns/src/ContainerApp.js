
import { CurrentUserLoader } from "./components/ContainerComponent/current-user-loader";
import { UserInfo } from "./components/ContainerComponent/user-info";
import {UserLoader } from "./components/ContainerComponent/user-loader";
function ContainerApp() {

    return (
        <>
            <UserLoader userId={"3"}>
                <UserInfo />
            </UserLoader>
        </>
    );
}

export default ContainerApp;

