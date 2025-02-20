import { BookInfo } from "./components/Custom-Hooks Component/book-info";
import { UserInfo } from "./components/Custom-Hooks Component/user-info";

function CustomHookApp() {
  return (
    <>

<UserInfo userId={"3"}/><BookInfo bookId={"2"}/>
    </>
  );
}

export default CustomHookApp;
