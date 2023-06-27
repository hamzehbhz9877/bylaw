import React, {FC} from 'react';
import JalaliMomentMiladyToPersian from "Utils/jalaliMoment/jalalimoment";
import {FaEdit, FaEye, FaTrash} from "react-icons/fa";
import Show from "Domain/panel/admin/questionManagement/show/show";
import Edit from "Domain/panel/admin/questionManagement/edit/edit";
import Delete from "Domain/panel/admin/questionManagement/delete/delete";
import useModalContext from "Context/modal/useModal";

type Props= {
    index: number,
    data: QuestionManagement["questions"]["0"]
}

const Question= ({index, data}:Props) => {

    const {title: {text, image}, _id, createdAt, updatedAt} = data

    const {closeModal,openModal}=useModalContext()

    return (
        <tr>
            <td>{index + 1}</td>
            <td className="text-overflow question-management__table-title-overflow">{text}</td>
            <td>{JalaliMomentMiladyToPersian({data: createdAt ?? ""})}</td>
            <td>{updatedAt ? JalaliMomentMiladyToPersian({data: updatedAt}) : "-"}</td>
            <td className="table__operation">
                <FaEye
                    onClick={() => openModal(<Show id={_id} close={closeModal}/>, {
                        style: {content: {width: "600px"}},
                    })}
                    className="fa-eye"
                />
                <FaEdit
                    onClick={() => openModal(<Edit id={_id} close={closeModal}/>, {
                        style: {content: {width: "600px"}},
                    })}
                    className="fa-edit"
                />
                <FaTrash
                    onClick={() => openModal(<Delete name={{image: image ?? "", text}}
                                                     id={_id} close={closeModal}/>, {
                        style: {content: {width: "500px"}},
                    })}
                    className="fa-trash"
                />
            </td>
        </tr>
    );
};

export default Question;