
import axios from "axios";
import { BookInfo } from "./components/ContainerComponent/book-info";
import { CurrentUserLoader } from "./components/ContainerComponent/current-user-loader";
import { DataSource } from "./components/ContainerComponent/data-source";
import { ResourceLoader } from "./components/ContainerComponent/resource-loader";
import { UserInfo } from "./components/ContainerComponent/user-info";
import { UserLoader } from "./components/ContainerComponent/user-loader";
import { DataSourceWithRender } from "./components/ContainerComponent/data-source-with-render";

const getDataFromServer = async (url) => {
    const response = await axios.get(url);
    return response.data;

}

const getDataFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

const Message = ({ msg }) => {
    return <>
        <h1>{msg}</h1>

    </>
}
function ContainerApp() {

    return (
        <>
            {/* <ResourceLoader resourceUrl={"/users/1"} resourceName={"user"}>
                <UserInfo />
            </ResourceLoader> */}
            {/* <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
                <BookInfo />
            </ResourceLoader> */}
            {/* <DataSource getData={() => getDataFromServer("/users/1")}
                resourceName={"user"}>
                <UserInfo />
            </DataSource> */}

            {/* <DataSourceWithRender getData={() => getDataFromServer("/users/3")}
                render={(resource) => <UserInfo user={resource} />}>
            </DataSourceWithRender> */}

            <DataSource getData={() => getDataFromLocalStorage("test")}
                resourceName={"msg"}>
                <Message />
            </DataSource>
        </>
    );
}

export default ContainerApp;

