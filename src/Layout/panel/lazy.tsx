import {lazy} from "react";
import {Loadable} from "Routes/lazy/loadable";


//adminPanel
const GeneralInfo = Loadable(lazy(() => import('Domain/panel/admin/generalInfo/generalInfo')));
const QuestionManagement = Loadable(lazy(() => import('Domain/panel/admin/questionManagement/questionmanagement')));
const TestManagement = Loadable(lazy(() => import('Domain/panel/admin/testManagement/testmanagement')));
const UserManagement = Loadable(lazy(() => import('Domain/panel/admin/userManagement/usermanagement')));

//common
const ChangePassword = Loadable(lazy(() => import('Domain/panel/common/changePassword/changepassword')));
const MoreInfoTest = Loadable(lazy(() => import('Domain/panel/admin/testManagement/moreInfoTest')));

//userPanel
const UserGeneralInfo = Loadable(lazy(() => import('Domain/panel/user/userGeneralInfo/usergeneralInfo')));
const UserTestManagement = Loadable(lazy(() => import('Domain/panel/user/testManagement/testmanagement')));

export {
    GeneralInfo,
    QuestionManagement,
    TestManagement,
    MoreInfoTest,
    UserManagement,
    ChangePassword,
    UserGeneralInfo,
    UserTestManagement
}