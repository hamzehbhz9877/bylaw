import { instant } from "Services/httpservice";

type table={
    page:number
    search:any
}

/*****************************adminPanel***********************/
// ->userManagement
export const getAllUser=({page,search}:table)=>instant.get(`users/getAll?page=${page}&search=${search}`)
export const deleteUser=(id:string)=>instant.delete(`users/delete/${id}`)
export const getUser=(id:string)=>instant.get(`users/get/${id}`)
export const editUser=(data:any)=>instant.post(`users/edit/${data.id}`,data)

// ->questionManagements
export const getAllQuestion=({page,search}:table)=>instant.get(`questions/getAll?page=${page}&search=${search}`)
export const createQuestion=(data:any)=>instant.post('questions/create',data)
export const getQuestion=(id:string)=>instant.get(`questions/get/${id}`)
export const getRandomQuestion=(id:string)=>instant.get(`questions/getRandom/${id??""}`)
export const deleteQuestion=(id:string)=>instant.delete(`questions/delete/${id}`)
export const editQuestion=(data:any)=>instant.post(`questions/edit/${data.id}`,data)

//->testManagement
export const getAllUserTests=({page,search}:table)=>instant.get(`test/allUserTests?page=${page}&search=${search}`)
export const getTestResult=(id:string)=>instant.get(`test/getTestResult/${id}`)
export const currentTestStatus=(id:string)=>instant.get(`test/currentTestStatus/${id}`)


//->userGeneralInfo
export const generalInfo=()=>instant.get('test/GeneralInfo')
/*****************************end adminPanel***********************/


/*****************************userPanel***********************/
//->userGeneralInfo
export const userGeneralInfo=()=>instant.get('test/userGeneralInfo')

//->user testManagement
export const userTestResult=({page}:any)=>instant.get(`test/userTestResult?page=${page}`)
/*****************************end userPanel***********************/


//login
export const login=(data:any)=>instant.post("users/login",data)

//register
export const register = (data: any) => instant.post('users/register', data);

//test
export const test=(data:postQuestion)=>instant.post('test/result',data)
export const moreInfo=(id:number)=>instant.get(`test/moreInfo/${id}`)

//changePassword
export const changePassword = (data: ChangePassword) => instant.post('users/ChangePassword', data);

