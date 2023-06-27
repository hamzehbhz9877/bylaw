import React from 'react';
import moment from "jalali-moment";

type date={
    format?:string
    data:string
}
const JalaliMomentMiladyToPersian = ({format="jYYYY/jMM/jDD HH:mm:ss",data}:date) => {
    return moment.from(data, "us").format(`${format}`);
};

export default JalaliMomentMiladyToPersian;