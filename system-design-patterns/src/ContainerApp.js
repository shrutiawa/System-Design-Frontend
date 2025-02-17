
import { CurrentUserLoader } from "./components/ContainerComponent/current-user-loader";
import { UserInfo } from "./components/ContainerComponent/user-info";
function ContainerApp() {

    return (
        <>
            <CurrentUserLoader>
                <UserInfo />
            </CurrentUserLoader>
        </>
    );
}

export default ContainerApp;

