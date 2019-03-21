const fetchEmployeeByPId =(employee,PId)=>{
    return employee.filter(e=> e.projectId == PId)
}
const fetchEmployeeByDes=(employee,projects,pid)=>{
let emp=employee.filter(e=>e.pid==pid)
let proj=projects.filter(p=>p.projectId==pid)
return{
    emp,proj
}
}
  
  
  
  

module.exports={
  byPid:fetchEmployeeByPId,
  
  byDes:fetchEmployeeByDes


}
