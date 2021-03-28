const mysql=require('../../db/mysql');
const invoice=require('../models/invoice');
const { json } = require('body-parser'); //NO ENTIENDO POR QUÉ LA DECLARA ASÍ
let vector = [];

module.exports = {
   listAll:(req,res)=>{
      mysql.mysqlConnection1.query(`SELECT * FROM product`,(err,rows,fields)=>{
         if(!err){
            invoiceRecords(rows)
         }
         else{
            res.json(err);
         }
      }),
      mysql.mysqlConnection2.query(`SELECT * FROM productos`,(err,rows,fields)=>{
         if(!err){
            invoiceRecords(rows)
         }
         else{
            res.json(err);
         }
      }),
      mysql.mysqlConnection3.query(`SELECT * FROM productos`,(err,rows,fields)=>{
         if(!err){
            invoiceRecords(rows)
            res.json(vector)
         }
         else{
            res.json(err);
         }
      })
     vector = []
   },
   listOfSpecificBranch:(req,res)=>{
      let id = req.params.id;
      switch(id){ 
         case(1):
            mysql.mysqlConnection1.query(`select date, payment, tax, customer_rfc from invoice where branch_id = ${id}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
         case(2):
            mysql.mysqlConnection2.query(`select date, payment, tax, customer_rfc from invoice where branch_id = ${id}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
         case(3):
            mysql.mysqlConnection3.query(`select date, payment, tax, customer_rfc from invoice where branch_id = ${id}`, (err,rows,fields)=>{
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
   finalQuantity:(req,res)=>{ 
      mysql.mysqlConnection1.query(`select sum(payment+tax) as totalSucursal1 from invoice`,(err,rows,fields)=>{
         if(!err){
            invoiceRecords(rows)
         }
         else{
            res.json(err);
         }
      }),
      mysql.mysqlConnection2.query(`select sum(payment+tax) as totalSucursal2 from invoice`,(err,rows,fields)=>{
         if(!err){
            invoiceRecords(rows)
         }
         else{
            res.json(err);
         }
      }),
      mysql.mysqlConnection3.query(`select sum(payment+tax) as totalSucursal3 from invoice`,(err,rows,fields)=>{
         if(!err){
            invoiceRecords(rows)
            res.json(addAll(vector)) // REVISAR CORRECTO FUNCIONAMIENTO DE SUMA DE VALORES
         }
         else{
            res.json(err);
         }
      })
     vector = []
   },
   finalQuantityofSpecificBranch:(req,res)=>{
      let id = req.params.id;
      switch(id){
         case(1):
            mysql.mysqlConnection1.query(`select sum(payment + tax) as totalFacturado from invoice where branch_id = ${id}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
         case(2):
            mysql.mysqlConnection2.query(`select sum(payment + tax) as totalFacturado from invoice where branch_id = ${id}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
         case(3):
            mysql.mysqlConnection3.query(`select sum(payment + tax) as totalFacturado from invoice where branch_id = ${id}`, (err,rows,fields)=>{
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
   create:(req,res)=>{
      let id = req.params.id;
      switch(id){
         case(1):
            mysql.mysqlConnection1.query('insert into invoice set ?', req.body, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
         case(2):
            mysql.mysqlConnection2.query('insert into invoice set ?', req.body, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
         case(3):
            mysql.mysqlConnection3.query('insert into invoice set ?', req.body, (err,rows,fields)=>{
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
   modify:(req,res)=>{
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
         case(1):
            mysql.mysqlConnection1.query('update invoice set ? where id=?', [req.body,id], (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
         case(2):
            mysql.mysqlConnection2.query('update invoice set ? where id=?', [req.body,id], (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
      case(3):
         mysql.mysqlConnection3.query('update invoice set ? where id=?', [req.body,id], (err,rows,fields)=>{
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
   delete:(req,res)=>{
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
         case(1):
            mysql.mysqlConnection1.query(`delete from invoice where id = ${idFactura}`, (err,rows,fields)=>{
               if(!err){
                  res.status(200).json(rows);
               }
               else{
                  res.status(404).json(err); // REVISAR VALIDACIÓN
               }
            });
         break;
         case(2):
         mysql.mysqlConnection2.query(`delete from invoice where id = ${idFactura}`, (err,rows,fields)=>{
            if(!err){
               res.status(200).json(rows);
            }
            else{
               res.status(404).json(err); // REVISAR VALIDACIÓN
            }
         });
      break;
      case(3):
      mysql.mysqlConnection3.query(`delete from invoice where id = ${idFactura}`, (err,rows,fields)=>{
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

function addAll(array){
   let total=0;
   array.forEach(element=>{
      total+=element;
   })
   return total;
}