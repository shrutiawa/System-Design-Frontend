// import { GreenSmallButton, RedButton } from "./components/Functional Programming/composition";
import { RedSmallButton, RedButton } from "./components/Functional Programming/partial";
import {RecursiveComponent } from "./components/Functional Programming/recursive";

const myNestedObject = {
    key1: "value1",
    key2: {
        innerKey1: "innerValue1",
        innerKey2: {
            innerInnerKey1: "innerInnerValue1",
            innerInnerKey2: "innerInnerValue2"
        },
    },
    key3: "value3"
}
function FunctionalProgApp() {
    return (
        <>
        {/* <RecursiveComponent data={myNestedObject}/> */}
        {/* <RedButton text="I am Red"/>
        <GreenSmallButton text="I am Green Small"/> */}
        <RedSmallButton text="I am Green Small"/>
        <RedButton text="I am Red"/>
        </>
    );
}

export default FunctionalProgApp;
