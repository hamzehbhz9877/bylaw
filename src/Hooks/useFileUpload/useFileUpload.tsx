import React, {ChangeEvent, useEffect, useState} from 'react';

const UseFileUpload = ({initValue}:{initValue:string|undefined}) => {
    const [file,setFile]=useState(initValue)

    useEffect(()=>{
        if(initValue)
            setFile(initValue)
    },[initValue])

    const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const image = e.target.files && e.target.files[0];
        if (image) {
            reader.readAsDataURL(image);
            reader.onload = () => {
                const result = reader?.result as string;
                setFile(result)
            }
        }
    }
    return {setFile,file,changeFile}
};

export default UseFileUpload;