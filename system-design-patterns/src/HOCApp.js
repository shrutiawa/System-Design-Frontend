import { includeUser } from "./components/HOC-App Component/include-user";
import { logProps } from "./components/HOC-App Component/log-props";
import { UserInfo } from "./components/HOC-App Component/user-info";

// const UserInfoWrapper = logProps(UserInfo);
const UserInfoWithLoader = includeUser(UserInfo, "3");

function HOCApp() {
  return (
    <>
      {/* <UserInfoWrapper test={"test"} b="i am be" c={21}/> */}
      <UserInfoWithLoader />

    </>
  );
}

export default HOCApp;
