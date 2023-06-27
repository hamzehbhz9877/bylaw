export const objectIsEmpty = (data: Object) =>
  data && Object.keys(data).length === 0 && data.constructor === Object;
export const  arrayIsEmpty=(array:Array<any>)=> {
    //If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
        return false;
    }
    //If it is an array, check its length property
    if (array.length == 0) {
        //Return TRUE if the array is empty
        return true;
    }
    //Otherwise, return FALSE.
    return false;
}
export const intersection = (arr1: any, arr2: any) =>
  arr1.filter((elem: any) => arr2.includes(elem));

export const isFloat=(n: number)=> {
    return Number(n) === n && n % 1 !== 0;
}