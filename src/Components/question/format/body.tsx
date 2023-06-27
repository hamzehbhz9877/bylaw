import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import UseFileUpload from "Hooks/useFileUpload/useFileUpload";
import IsImage from "Utils/isImage/isimage";

type Props= {
    title: string
    index: number
    data?: string
    changeValue?:(data:string)=>void
}

const QuestionBodyFormat= ({title, index, data,changeValue}:Props) => {
    const [state, setState] = useState({type: "text", value: data ?? ""})

    useEffect(()=>{
        if(data)
            setState({...state,value:data})
    },[data])
    const changeOptionType = (type: "image" | "text") => {
        setState({...state, value: "", type})
    }

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => setState({...state, value: e.target.value})


    const {file, changeFile} = UseFileUpload({initValue: data && IsImage(data) ? data : ""})


    useEffect(()=>{
        if (changeValue)
        changeValue(state.value)
    },[state])

    return (
        <div className="p-4 border-bottom">
            <h6>{title}:</h6>
            <div className="text-center mb-3">
                {state.type === "text" ?
                    <button className="btn btn-warning" onClick={() => changeOptionType("image")}>تغییر به
                        تصویر</button>
                    :
                    <button className="btn btn-success" onClick={() => changeOptionType("text")}>تغییر به متن</button>}
            </div>
            {state.type === "text" ? <input value={state.value}
                                            onChange={(e) => changeInput(e)}
                                            className="form-control" type="txt"/> :
                <div className="questions-format__body-image">
                    <input
                        accept={".jpg,.png,.svg"}
                        id={`file-option${index}`}
                        className="form-control"
                        onChange={(e) => changeFile(e)}
                        type="file"
                        hidden
                    />
                    <label htmlFor={`file-option${index}`}>
                        {state.type === "image" ?
                            <div className="text-center mx-auto">
                                <img className="h-100 " src={file} alt=""/>
                            </div> : <span className="btn btn-primary">افزودن تصویر</span>
                        }
                    </label>
                </div>
            }
        </div>

    );
};

export default QuestionBodyFormat;