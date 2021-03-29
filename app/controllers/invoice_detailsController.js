let mysql=require('../../db/mysql');
let invoice_details=require('../models/invoice_details');
let vector = []; 
const { json } = require('body-parser');

module.exports = {
   create:(req,res)=>{ ///ventas/total/sucursales/:idSucursal/facturas/:idFactura
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
         case(1):
            mysql.mysqlConnection1.query(`insert into invoice_details SET ? where id = ?`,[req.body,idFactura], (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
            break;
         case(2):
            mysql.mysqlConnection2.query(`insert into invoice_details SET ? where id = ?`,[req.body,idFactura], (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
            break;
         case(3):
            mysql.mysqlConnection3.query(`insert into invoice_details SET ? where id = ?`,[req.body,idFactura], (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
            break;
      }
   },
   edit:(req,res)=>{ ///ventas/total/sucursales/:idSucursal/facturas/:idFactura
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
         case(1):
            mysql.mysqlConnection1.query(`update invoice_details SET ? where id = ?`,[req.body,idFactura], (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
            break;
         case(2):
            mysql.mysqlConnection2.query(`update invoice_details SET ? where id = ?`,[req.body,idFactura], (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
            break;
         case(3):
            mysql.mysqlConnection3.query(`update invoice_details SET ? where id = ?`,[req.body,idFactura], (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
            break;
      }
   },
   listAll:(req,res)=>{ //ventas/total/facturas
      mysql.mysqlConnection1.query('select invoice_id, product_id, quantity, cost from invoice_details', (err,rows,fields)=>{
         if(!err){
             invoiceRecords(rows);
         }
        else {
            res.json(err);
        }
     })
     mysql.mysqlConnection2.query('select invoice_id, product_id, quantity, cost from invoice_details', (err,rows,fields)=>{
         if(!err){
             invoiceRecords(rows);
         }
         else{
            res.json(err);
         }
     }),
     mysql.mysqlConnection3.query('select invoice_id, product_id, quantity, cost from invoice_details', (err,rows,fields)=>{
         if(!err){
             invoiceRecords(rows);
             res.json(vector);
         }
         else{
            res.json(err);
         }
     })
   },
   listOneOfSpecificBranch:(req,res)=>{  //ventas/total/sucursales/:idSucursal/facturas/:idFactura 
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
         case(1):
            mysql.mysqlConnection1.query(`select invoice_id, product_id, quantity, cost from invoice_details where id = ${idFactura}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
            break;
            case(2):
            mysql.mysqlConnection2.query(`select invoice_id, product_id, quantity, cost from invoice_details where id = ${idFactura}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
            break;
            case(3):
            mysql.mysqlConnection3.query(`select invoice_id, product_id, quantity, cost from invoice_details where id = ${idFactura}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
            break;
      }
   },
   listAllOfSpecificBranch:(req,res)=>{ //ventas/total/factgit adduras/sucursales/:idSucursal 
      let idSucursal = req.params.idSucursal;
      switch(idSucursal){
         case(1):
      mysql.mysqlConnection1.query(`select invoice_id, product_id, quantity, cost  from invoice_details`, (err,rows,fields)=>{
         if(!err){
            res.status(200).json(rows);
         }
         else{
            res.status(404).json(err); // REVISAR VALIDACIÓN
         }
      });
      break;
      case(2):
      mysql.mysqlConnection2.query(`select invoice_id, product_id, quantity, cost  from invoice_details`, (err,rows,fields)=>{
         if(!err){
            res.status(200).json(rows);
         }
         else{
            res.status(404).json(err); // REVISAR VALIDACIÓN
         }
      });
      break;
      case(3):
      mysql.mysqlConnection3.query(`select invoice_id, product_id, quantity, cost  from invoice_details`, (err,rows,fields)=>{
         if(!err){
            res.status(200).json(rows);
         }
         else{
            res.status(404).json(err); // REVISAR VALIDACIÓN
         }
      });
      break;
      }
   }, 
   delete:(req,res)=>{ ///ventas/total/sucursales/:idSucursal/facturas/:idFactura
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
            case(1):
               mysql.mysqlConnection1.query(`delete from invoice_details where id = ${idFactura}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
            case(2):
            mysql.mysqlConnection2.query(`delete from invoice_details where id = ${idFactura}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
            case(3):
            mysql.mysqlConnection3.query(`delete from invoice_details where id = ${idFactura}`, (err,rows,fields)=>{
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

function invoiceRecords(x){
   let i = vector.length
   vector[i] = x;
}