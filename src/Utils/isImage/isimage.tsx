import React from 'react';

const IsImage = (value:string) => {
    return value.startsWith("data:image");
};

export default IsImage;