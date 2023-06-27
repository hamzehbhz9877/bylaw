import React, {ComponentProps, FC} from 'react';
import JalaliMomentMiladyToPersian from "Utils/jalaliMoment/jalalimoment";
import {FaEye} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import Test from "Domain/panel/admin/testManagement/test";

const UserTest = ({index,data}:React.ComponentProps<typeof Test>) => {
    const navigate=useNavigate()
    const {result,createdAt,_id} = data
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{JalaliMomentMiladyToPersian({data:createdAt??""})}</td>
            <td>{result===1?"قبول شده":result===0?"نامشخص":"رد شده"}</td>
            <td className="table__operation">
                <FaEye
                    onClick={() => navigate(`${_id}`)}
                    className="fa-eye"
                />
            </td>
        </tr>
    );
};

export default UserTest;