const express=require("express")
const router=express.Router()
const employeeControler=require("../controller/employeecontroler")
const Employee=require("../model/employee")



router.post("/add_emp",employeeControler.createEmployee)
router.get("/get_emp",employeeControler.getAllEmployes)
router.get("/single_emp/:id",employeeControler.singleEmployee)
router.put("/update_emp/:id",employeeControler.updateEmployee)


module.exports=router
