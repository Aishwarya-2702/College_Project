const express= require('express')
const bodyparser=require('body-parser')
// const mysql=require('mysql2')
const database=require('./db')
// const route=express.Router()
const cors=require('cors')

const server=express.Router()
server.use(cors())
// server.use(cors())

// server.use('/information',upndel)
server.use(bodyparser.urlencoded({extended:true}))
server.use(bodyparser.json())

server.get('/list',async(req,res)=>{
    const sql="select * from data_setaf_e_content";
    database.query(sql,(err,result)=>{
        if(err){
            res.status(500).json({'error':err.message})
            return
        }
        if(result.length==0){
            res.status(404).json({'message':'no records are found'})
            return
        }
        res.status(200).json({result})
    })
})



server.post('/newrecord',async(req,res)=>{
    const{s_no,Name_of_the_Faculty,Name_of_the_Module_Developed,Module_of_platform,Date_of_launching_e_content,Link_to_the_module_developed}=req.body
    const sql="insert into data_setaf_e_content values(?,?,?,?,?,?)"
    database.query(sql,[s_no,Name_of_the_Faculty,Name_of_the_Module_Developed,Module_of_platform,Date_of_launching_e_content,Link_to_the_module_developed],(err,records)=>{
        if(err){
            res.status(500).json({'error':err.message})
            return
        }
        res.status(200).json({'message':'Registered successfully!!!!!!........'})

    })

})
module.exports = server