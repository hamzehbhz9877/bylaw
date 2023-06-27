import React, {FC, useEffect, useState} from 'react';
import {useGetQuery} from "Hooks/useGetQuery";
import {getQuestion} from "Services/shortlink";
import {ModalBody, ModalFooter, ModalHeader} from "Components/modal/template";
import Questions from "Domain/test/test";
import IsImage from "Utils/isImage/isimage";

type Props= {
    id: string|undefined
    close: () => void
}

type question = {
    option: string | undefined,
    id: string|undefined,
}[]

const Show= ({id, close}:Props) => {
    const {data} = useGetQuery<Questions>({
        event: getQuestion, values: id,
        eventOption: {queryKey: ["getSingleQuestion",id]},
        options: {cacheTime: 0}
    });

    const [state, setState] = useState<question>([])


    useEffect(() => {
        if (data) {
            setState([{option: data?.optionA, id: "1",}, {option: data?.optionB, id: "2"},
                {option: data?.optionC, id: "3",}, {option: data?.optionD, id: "4"}]
            )
        }
    }, [data])

    return (
        <div>
            <ModalHeader>
                <h4 className="text-center">مشاهده سوال</h4>
            </ModalHeader>
            <ModalBody>
                <div className="p-4 border-bottom">
                    <h6>عنوان:</h6>
                    <div>
                        <div className="mb-5">
                            <textarea value={data?.title.text}
                                      readOnly
                                      className="form-control" placeholder="عنوان سوال ..."/>
                        </div>
                        {data?.title.image &&
                        <div className="text-center mx-auto questions-format__header-image">
                            <img className="h-100" src={data.title.image} alt=""/>
                        </div>
                        }
                    </div>

                </div>
                {state?.map((item, index) => {
                    return (
                        <div className="p-4 border-bottom" key={item.id}>
                            <h6>جواب {index + 1}:</h6>
                            {!IsImage(item?.option??"") ? <input defaultValue={item.option}
                                                                             className="form-control" type="txt"
                                                                             readOnly/> :
                                <div className="text-center mx-auto questions-format__body-image">
                                    <img className="h-100" src={item.option} alt=""/>
                                </div>

                            }
                        </div>
                    )
                })}
                <div className="pt-4">
                    <h6> گزینه صحیح:</h6>
                    <p>جواب <b>{data?.correctOption}</b> گزینه صحیح میباشد</p>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="text-center">
                    <button className="btn btn-info" onClick={close}>
                        بستن
                    </button>
                </div>
            </ModalFooter>
        </div>
    );
};

export default Show;