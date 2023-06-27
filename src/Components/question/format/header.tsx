import React, {FC, useEffect, useState} from 'react';
import UseFileUpload from "Hooks/useFileUpload/useFileUpload";

type Props= {
    data?: Questions["title"]
    changeValue?: (data: Questions["title"]) => void
}

const QuestionHeaderFormat= ({data, changeValue}:Props) => {

    const [title, setTitle] = useState("")
    const {file, changeFile, setFile} = UseFileUpload({initValue: data?.image})

    useEffect(() => {
        if (data) {
            setTitle(data.text)
            setFile(data.image)
        }
    }, [data])


    useEffect(() => {
        if (changeValue)
            changeValue({text: title, image: file})
    }, [title, file])

    return (
        <div className="p-4 border-bottom">
            <h6>عنوان:</h6>
            <div>
                <div className="mb-4">
                            <textarea value={title}
                                      onChange={(e) => setTitle(e.target.value)}
                                      className="form-control" placeholder="عنوان سوال ..."/>
                </div>
                <div>
                    {file && <button className="btn btn-danger mb-3" onClick={() => {
                        setFile("")
                    }}>حذف تصویر
                    </button>}

                    <div className="questions-format__header-image">
                        <input
                            accept={".jpg,.png,.svg"}
                            id="file"
                            className="form-control"
                            onChange={(e) => changeFile(e)}
                            type="file"
                            hidden
                        />
                        <label htmlFor="file">
                            {file ?
                                <div className="text-center mx-auto">
                                    <img className="h-100 " src={file} alt=""/>
                                </div> : <span className="btn btn-primary">افزودن تصویر</span>
                            }
                        </label>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default QuestionHeaderFormat;