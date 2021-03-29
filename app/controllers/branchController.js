let mysql=require('../../db/mysql');
let branch=require('../models/branch');
let vector = [];
const { json } = require('body-parser');
module.exports = {
    modify:(req,res)=>{ //sucursales/:idSucursal : modificar información de la sucursal indicada.
        let id = req.params.id;
        mysql.mysqlConnection1.query('update branch set ? where id=?', [req.body,id], (err,rows,fields)=>{
           if(!err){
              res.json(vector) //BORRAR DESPUES
           }
           else {
               res.json(err);
           }
        })
        mysql.mysqlConnection2.query('update branch set ? where id=?', [req.body,id], (err,rows,fields)=>{
           if(!err){
           }
           else{
               res.json(err);
           }
        }),
        mysql.mysqlConnection3.query('update branch set ? where id=?', [req.body,id], (err,rows,fields)=>{
           if(!err){
               res.json(vector);
           }
           else{
               res.json(err);
           }
        })
        },
    listAll:(req,res)=>{ //sucursales/:idSucursal : obtener información de alguna sucursal en específico.
        mysql.mysqlConnection1.query(`SELECT owner, active, address, creation_date, phone_number, email FROM branch` ,(err,rows,fields)=>{
            if(!err){
                branchRecords(rows);
            }
            else {
                res.json(err);
            }
        })
        mysql.mysqlConnection2.query(`SELECT owner, active, address, creation_date, phone_number, email FROM branch` ,(err,rows,fields)=>{
            if(!err){
                branchRecords(rows);
            }
            else{
                res.json(err);
            }
        }),
        mysql.mysqlConnection3.query(`SELECT owner, active, address, creation_date, phone_number, email FROM branch` ,(err,rows,fields)=>{
            if(!err){
                branchRecords(rows);
                res.json(vector);
            }
            else{
                res.json(err);
            }
        })
    },
    listBranch:(req,res)=>{
        let id = req.params.id;
        switch(id){
            case(1):
                mysql.mysqlConnection1.query(`select owner, active, address, creation_date, phone_number, email from branch where id = ${id}`, (err,rows,fields)=>{
                    if(!err){
                        res.status(200).json(rows);
                    }
                    else{
                        res.status(404).json(err); // REVISAR VALIDACIÓN
                    }
                });
            break;
            case(2):
                mysql.mysqlConnection2.query(`select owner, active, address, creation_date, phone_number, email from branch where id = ${id}`, (err,rows,fields)=>{
                    if(!err){
                        res.status(200).json(rows);
                    }
                    else{
                        res.status(404).json(err); // REVISAR VALIDACIÓN
                    }
                });
            break;
            case(3):
                mysql.mysqlConnection3.query(`select owner, active, address, creation_date, phone_number, email from branch where id = ${id}`, (err,rows,fields)=>{
                    if(!err){
                        res.status(200).json(rows);
                    }
                    else{
                        res.status(404).json(err); // REVISAR VALIDACIÓN
                    }
                });
            break;
        }
    }
}

function branchRecords(x){
    let i = vector.length
    vector[i] = x;
 }