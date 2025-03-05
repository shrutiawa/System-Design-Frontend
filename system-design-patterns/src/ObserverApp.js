import ParentComponent from "./components/ObserverComponent/parent";
import mitt from "mitt";

export const emitter = mitt();
function ObserverApp() {

    return (
        <>
           <ParentComponent/>
        </>
    );
}

export default ObserverApp;

