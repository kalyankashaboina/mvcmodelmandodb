

   const employee = require("../model/employee")
const Employee=require("../model/employee")

        const createEmployee=async(req,res)=>{
        try{


        // CREATING OR INSERTING DATA TO MANGO



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


        // GEtting all DATA

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


        // GETTING SINGLE DATA



        const singleEmployee=async(req,res)=>{

        try{
        const employee=await Employee.findById(req.params.id)


        if(!employee){
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json(employee)

        }

        catch(err){
            console.log("server error",err)
            res.status(500).json({message:"error getting single data"})
        }

        }


        // Upadating Data



        const updateEmployee=async(req,res)=>{

        try{
            const {name,email,phone,city}=req.body;

        const employee=await Employee.findByIdAndUpdate(
            req.params.id,
            {name,email,phone,city}
        ) 
        if(!employee){
            return res.status(404).json({mesage:"user not found"})
        }
        res.status(200).json(employee)


        }
        catch(err){
            console.log("server error",err)
            res.status(500).json({message:"server error uodating data"})
        }

        }


        const deleteEmployee=async(req,res)=>{


            try{

        const{name,email,phone,city}=req.body;

        const employee=await Employee.findByIdAndDelete(req.params.id)

        if(!employee){
            return res.status(404).json({message:"employee not found"})
        }
        res.status(201).json(employee)
            }


            catch(err){
                console.log("server error",err)
                res.status(500).json({message:"server error deleting data"})
            }








        }







        module.exports={createEmployee,getAllEmployes,singleEmployee,updateEmployee,deleteEmployee}