import { useState } from "react";
import { ControlledForm } from "./components/ControlUncontrolComponent/controlled-form";
import { ControlledModal } from "./components/ControlUncontrolComponent/controlled-modal";
import { UnControlledForm } from "./components/ControlUncontrolComponent/uncontrolled-form";
import { UncontrolledFlow } from "./components/ControlUncontrolComponent/uncontrolled-flow";
import { ControlledFlow } from "./components/ControlUncontrolComponent/controlled-flow";


const StepOne = ({ goNext }) => {
    return <>
        <h1>Step #1: Enter your Name</h1>
        <button onClick={() => goNext({ name: 'MyName' })}>
            Next
        </button>
    </>
}


const StepTwo = ({ goNext }) => {
    return <>
        <h1>Step #2: Enter your Age</h1>
        <button onClick={() => goNext({ age: 26 })}>
            Next
        </button>
    </>
}

const StepThree = ({ goNext }) => {
    return <>
        <h1>Congratulation you qualify for the gift</h1>
        <button onClick={() => goNext({})}>
            Next
        </button>
    </>
}
const StepFourth = ({ goNext }) => {
    return <>
        <h1>Step #4 Enter your Country</h1>
        <button onClick={() => goNext({ country: 'Mars' })}>
            Next
        </button>
    </>
}

function ControlUncontrolApp() {
    // const [shouldDisplay, setShowDisplay] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [data, setData] = useState({});


    const goNext = (dataFromStep) => {
        setData({ ...data, ...dataFromStep });
        setCurrentStepIndex(currentStepIndex + 1);
    }


    return (
        <>
            {/* <ControlledModal
                shouldDisplay={shouldDisplay}
                onClose={() => setShowDisplay(false)}
            >
                <h3>I am the body of the modal!!!</h3>
            </ControlledModal> */}
            {/* <button onClick={() => setShowDisplay(!shouldDisplay)}>{shouldDisplay ? "Hide Modal" : "Display Modal"}</button> */}
            {/* <UnControlledForm/> */}
            {/* <ControlledForm/> */}
            {/* <UncontrolledFlow onDone={data =>{
                console.log(data);
                alert("you made the final step")
            }}>
                <StepOne />
                <StepTwo/>
                <StepThree/>
            </UncontrolledFlow> */}
            <ControlledFlow
                currentIndex={currentStepIndex}
                onNext={goNext}>
                <StepOne />
                <StepTwo />
                {data.age > 25 && <StepThree/>}
                <StepFourth/>
            </ControlledFlow>
        </>
    );
}

export default ControlUncontrolApp;

