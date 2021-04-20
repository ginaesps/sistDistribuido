let mysql = require('../../db/mysql');
let branch = require('../models/branch');
// let arrayV = []; 
const {json} = require('body-parser');
module.exports = {
    modify:(req,res)=>{
        let id = req.params.id;
        switch(id){
            case '1':
                mysql.mysqlConnection1.query(`select * from branch where id=${id}`, (err,rows,fields)=>{
                    if(rows[0]!=null){
                        mysql.mysqlConnection1.query('update branch set ? where id=?', [req.body,id], (errUpdate,rowsUpdate,fieldsUpdate)=>{
                            if(!err){
                                res.json(rowsUpdate);
                            }
                            else {
                                res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${id} `, Error: `${errUpdate}`});
                            }
                        })
                    }
                    else{
                        res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${id} `, Error: `${err}`});
                    }
                });
            break;
            case '2':
                mysql.mysqlConnection2.query(`select * from branch where id=${id}`, (err,rows,fields)=>{
                    if(rows[0]!=null){
                        mysql.mysqlConnection1.query('update branch set ? where id=?', [req.body,id], (errUpdate,rowsUpdate,fieldsUpdate)=>{
                            if(!err){
                                res.json(rowsUpdate);
                            }
                            else {
                                res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${id} `, Error: `${errUpdate}`});
                            }
                        })
                    }
                    else{
                        res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${id} `, Error: `${err}`});
                    }
                });
            break;
            case '3':
                mysql.mysqlConnection3.query(`select * from branch where id=${id}`, (err,rows,fields)=>{
                    if(rows[0]!=null){
                        mysql.mysqlConnection1.query('update branch set ? where id=?', [req.body,id], (errUpdate,rowsUpdate,fieldsUpdate)=>{
                            if(!err){
                                res.json(rowsUpdate);
                            }
                            else {
                                res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${id} `, Error: `${errUpdate}`});
                            }
                        })
                    }
                    else{
                        res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${id} `, Error: `${err}`});
                    }
                });
            break;
            default: // en caso de que el usuario escriba un id que no existe
                res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${id} `});
            break;
        }
    },
    listAll:(req,res)=>{  //NO FUNCIONA, SE DEBERÍA HACER CON PROMESAS
        let vector = [];
        mysql.mysqlConnection1.query(`SELECT owner, active, address, creation_date, phone_number, email FROM branch` ,(err,rows,fields)=>{
            if(!err){
                branchRecords(vector);
            }
            else {
                res.json(err);
            }
        })
        console.log(count);
        mysql.mysqlConnection2.query(`SELECT owner, active, address, creation_date, phone_number, email FROM branch` ,(err,rows,fields)=>{
            if(!err){
                branchRecords(vector);
            }
            else{
                res.json(err);
            }
        }),
        mysql.mysqlConnection3.query(`SELECT owner, active, address, creation_date, phone_number, email FROM branch` ,(err,rows,fields)=>{
            if(!err){
                branchRecords(vector);
                res.json(vector);
            }
            else{
                res.json(err);
            }
        })
        vector = [];
    },
    listBranch:(req,res)=>{
        let id = req.params.id;
        switch(id){
            case '1':
                mysql.mysqlConnection1.query(`select owner, active, address, creation_date, phone_number, email from branch where id = ${id}`, (err,rows,fields)=>{
                    if(rows[0]!=null){
                        res.status(200).json(rows);
                    }
                    else{
                        res.status(404).json({Mensaje: `No se encontró una sucursal con ID ${id}`, Error: `${err}`}); 
                    }
                });
            break;
            case '2':
                mysql.mysqlConnection2.query(`select owner, active, address, creation_date, phone_number, email from branch where id = ${id}`, (err,rows,fields)=>{
                    if(rows[0]!=null){
                        res.status(200).json(rows);
                    }
                    else{
                        res.status(404).json({Mensaje: `No se encontró una sucursal con ID ${id}`, Error: `${err}`}); 
                    }
                });
            break;
            case '3':
                mysql.mysqlConnection3.query(`select owner, active, address, creation_date, phone_number, email from branch where id = ${id}`, (err,rows,fields)=>{
                    if(rows[0]!=null){
                        res.status(200).json(rows);
                    }
                    else{
                        res.status(404).json({Mensaje: `No se encontró una sucursal con ID ${id}`, Error: `${err}`}); 
                    }
                });
            break;
            default:
                res.status(404).json({Mensaje: `No se encontró una sucursal con ID ${id}`}); 
        }
    }
}

function branchRecords(x){
    let i = vector.length // vector[6]  -> vector.length = 6
    vector[i] = x;
} // se debe factorizar de tal forma que no sea necesario que como en listAll, el vector se crea y pasa desde afuera, la función debe ser independiente