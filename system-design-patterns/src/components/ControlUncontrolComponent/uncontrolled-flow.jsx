import React, { useState } from "react"

export const UncontrolledFlow = ({ children, onDone }) => {
    const [data, setData] = useState({});
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const goNext = (dataFromStep) => {
        const nextStepIndex = currentStepIndex + 1;
        const newData = {
            ...data,
            ...dataFromStep,
        }
        setData(newData);

        console.log(newData);

        if(nextStepIndex < children.length){
            setCurrentStepIndex(nextStepIndex);
        }else{
            onDone(newData)
        }
        setCurrentStepIndex(currentStepIndex + 1);
    }
    const currentChild = React.Children.toArray(children)[currentStepIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext })
    }
    return currentChild
}