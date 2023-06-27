import React, {FC} from 'react';
import JalaliMomentMiladyToPersian from "Utils/jalaliMoment/jalalimoment";
import {FaEye} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
type Test= {
    index: number,
    data: AllUserTest["tests"]["0"]
}
const Test = ({index,data}:Test) => {
    const navigate=useNavigate()
    const {fullName,result,createdAt,_id} = data
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{fullName}</td>
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

export default Test;