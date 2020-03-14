const root = "http://localhost:7070";

export const ENDPOINTS = {
    //auth.service.ts used end points:->
    LOGIN:`${root}/authenticate`,
    FORGOT_PASS:`${root}/forgot`,
    RESET_PASS: `${root}/reset/`,

    //employee.service.ts used end points:->
    REGISTER_EMP: `${root}/register`,
    MGR_LIST:`${root}/manager`,
    EMP_LIST: `${root}/employees`,
    MGR_DETAILS: `${root}/empMgr/`,
    EMP_DETAILS: `${root}/employee/`,

    //bug.service.ts used end points:->
    ADD_BUG: `${root}/addBug`,
    GET_A_BUG: `${root}/bug/`,
    BUG_LIST_BY_PROJECT: `${root}/bugs/`,
    BUG_STATUS_COUNT: `${root}/getBugStatusCount`,
    BUG_PRIORITY_COUNT: `${root}/getBugPriorityCount`,
    BUG_UPDATE: `${root}/updateBug`,

    //project.service.ts used end points:->
    GET_ALL_PROJECTS: `${root}/projects`,
    GET_PROJECT_DTLS: `${root}/project/`,
    EMP_LIST_IN_PROJECT: `${root}/employeesDevTest/`,
    ADD_PROJECT: `${root}/addProject`,
    GET_ALL_EMP_PROJECTS: `${root}//getProjectsUnderEmp/`,
    GET_ALL_MGR_PROJECTS: `${root}//getProjectsUnderMgr/`,
    GET_ALL_SUPPORT_PROJECTS: `${root}//getProjectsUnderSupport/`,

};