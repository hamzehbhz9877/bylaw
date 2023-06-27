import React from 'react';
import {useNavigate} from "react-router-dom";

const AccessDeny = () => {
    const navigate=useNavigate()
    return (
        <div className="text-center p-3">
            <h3>دسترسی غیر مجاز</h3>
            <p>شما به این صفحه دسترسی ندارید</p>
            <button className="btn btn-success" onClick={()=>navigate("/")}>بازگشت به صفحه اصلی</button>
        </div>
    );
};

export default AccessDeny;