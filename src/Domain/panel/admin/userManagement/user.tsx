import React, {FC} from 'react';
import JalaliMomentMiladyToPersian from "Utils/jalaliMoment/jalalimoment";
import {FaEdit, FaTrash} from "react-icons/fa";
import Edit from "Domain/panel/admin/userManagement/edit/edit";
import Delete from "Domain/panel/admin/userManagement/delete/delete";
import useTable from "Context/modal/useModal";

type Props= {
    index: number,
    data: UserManagement["users"]["0"]
}

const User= ({index, data}:Props) => {
    const {_id, createdAt, updatedAt, firstName, lastName, userName, email} = data
    const {closeModal, openModal} = useTable()
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{JalaliMomentMiladyToPersian({data: createdAt ?? ""})}</td>
            <td>{updatedAt ? JalaliMomentMiladyToPersian({data: updatedAt}) : "-"}</td>
            <td className="table__operation">
                <FaEdit
                    onClick={() => openModal(<Edit
                        id={_id}
                        close={closeModal}
                    />, {
                        style: {content: {width: "600px"}},
                    })}
                    className="fa-edit"
                />
                <FaTrash
                    onClick={() => openModal(<Delete
                            name={firstName + " " + lastName}
                            id={_id}
                            close={closeModal}
                        />, {
                            style: {content: {width: "500px"}},
                        })}
                    className="fa-trash"
                />
            </td>
        </tr>
    );
};

export default User;