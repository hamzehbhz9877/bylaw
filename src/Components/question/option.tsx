import React, {FC} from 'react';
import IsImage from "Utils/isImage/isimage";

type Props= {
    index: number
    _id: string | undefined
    value: string
    isFinished: boolean
    selectedItem?: number
}

const Option= ({index, _id, value, isFinished, selectedItem}:Props) => {
    const option = (index: number) =>  ({0: "A", 1: "B", 2: "C", 3: "D"})[index] ?? ""

    const id = `radioCheck-for-${option(index)}-${_id}`
    const checked = isFinished ? {checked: selectedItem === index + 1} : {}
    const selectedStyle = checked.checked ? "bg-info":""

    return (
        <>
            <input type="radio"
                   id={id}
                   className={`form-check-input${IsImage(value) ? "align-middle" : ""} ${selectedStyle}`}
                   data-sld={`d-${index + 1}`}
                   name={`radioCheck${_id}`} value={index + 1}
                   readOnly={isFinished}
                   {...checked}
            />
            <label htmlFor={id}>{IsImage(value) ?
                <div className="text-center mx-auto question__body-image">
                    <img className="h-100" src={value} alt=""/>
                </div> : value
            }</label>
        </>
    );
};

export default Option;