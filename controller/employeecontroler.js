

const Employee=require("../model/employee")

const createEmployee=async(req,res)=>{
try{

const{name,email,phone,city}=req.body
    const employee=new Employee({
    name,
    email,
    phone,
    city
    })

    await employee.save()
    res.status(201).json(employee)

}
catch(err){
    console.log("message",err)
    res.status(500).json({message:"server error"})
}
}


const getAllEmployes=async(req,res)=>{
    try{
const employees=await Employee.find()
res.status(201).json(employees)
    }
    catch(err){
console.log("we got error",err)
res.status(500).json({message:"error in getting data"})
    }
}







module.exports={createEmployee,getAllEmployes}