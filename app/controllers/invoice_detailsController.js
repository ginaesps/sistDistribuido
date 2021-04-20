let mysql=require('../../db/mysql');
let invoice_details=require('../models/invoice_details');
let vector = []; 
const { json } = require('body-parser');

module.exports = {
   create:(req,res)=>{ ///ventas/total/sucursales/:idSucursal/facturas/:idFactura
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
         case '1':
            mysql.mysqlConnection1.query(`select * from invoice where id = ${idFactura}`, (err,rows,fields) =>{
               if(rows[0]!=null){
                  mysql.mysqlConnection1.query(`insert into invoice_details SET ? where id = ?`,[req.body,idFactura], (errInsert,rowsInsert,fieldsInsert)=>{
                     if(!err){
                        res.status(200).json(rowsInsert);
                     }
                     else{
                        res.status(404).json(errInsert); // REVISAR VALIDACIÓN
                     }
                  });
               }
               else{
                  res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
               }
            })
         break;
         case '2':
            mysql.mysqlConnection2.query(`select * from invoice where id = ${idFactura}`, (err,rows,fields) =>{
               if(rows[0]!=null){
                  mysql.mysqlConnection1.query(`insert into invoice_details SET ? where id = ?`,[req.body,idFactura], (errInsert,rowsInsert,fieldsInsert)=>{
                     if(!err){
                        res.status(200).json(rowsInsert);
                     }
                     else{
                        res.status(404).json(errInsert); // REVISAR VALIDACIÓN
                     }
                  });
               }
               else{
                  res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
               }
            })
            break;
            case '3':
               mysql.mysqlConnection3.query(`select * from invoice where id = ${idFactura}`, (err,rows,fields) =>{
                  if(rows[0]!=null){
                     mysql.mysqlConnection1.query(`insert into invoice_details SET ? where id = ?`,[req.body,idFactura], (errInsert,rowsInsert,fieldsInsert)=>{
                        if(!err){
                           res.status(200).json(rowsInsert);
                        }
                        else{
                           res.status(404).json(errInsert); // REVISAR VALIDACIÓN
                        }
                     });
                  }
                  else{
                     res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
                  }
               })
               break;      
               default: 
                  res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${idSucursal}`})
      }
   },
   edit:(req,res)=>{ ///ventas/total/sucursales/:idSucursal/facturas/:idFactura
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
         case '1':
            mysql.mysqlConnection1.query(`select * from invoice where id = ${idFactura}`, (err,rows,fields) =>{
               if(rows[0]!=null){
                  mysql.mysqlConnection1.query(`update invoice_details SET ? where id = ?`,[req.body,idFactura], (errUpdate,rowsUpdate,fieldsUpdate)=>{
                     if(rows[0]!=null){
                        res.status(200).json(rowsUpdate);
                     }
                     else{
                        res.status(404).json(errUpdate); // REVISAR VALIDACIÓN
                     }
                  });  
               }
               else{
                  res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
               }
            })
         break;
         case '2':
            mysql.mysqlConnection2.query(`select * from invoice where id = ${idFactura}`, (err,rows,fields) =>{
               if(rows[0]!=null){
                  mysql.mysqlConnection1.query(`update invoice_details SET ? where id = ?`,[req.body,idFactura], (errUpdate,rowsUpdate,fieldsUpdate)=>{
                     if(rows[0]!=null){
                        res.status(200).json(rowsUpdate);
                     }
                     else{
                        res.status(404).json(errUpdate); // REVISAR VALIDACIÓN
                     }
                  });
               }
               else{
                  res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
               }
            })
         break;
         case '3':
            mysql.mysqlConnection3.query(`select * from invoice where id = ${idFactura}`, (err,rows,fields) =>{
               if(rows[0]!=null){
                  mysql.mysqlConnection1.query(`update invoice_details SET ? where id = ?`,[req.body,idFactura], (errUpdate,rowsUpdate,fieldsUpdate)=>{
                     if(rows[0]!=null){
                        res.status(200).json(rowsUpdate);
                     }
                     else{
                        res.status(404).json(errUpdate); // REVISAR VALIDACIÓN
                     }
                  });
               }
               else{
                  res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
               }
            })
         break;
         default:
            res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${idSucursal}`})
   }},
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
     vectror = [];
   },
   listOneOfSpecificBranch:(req,res)=>{  //ventas/total/sucursales/:idSucursal/facturas/:idFactura 
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
         case(1):
            mysql.mysqlConnection1.query(`select invoice_id, product_id, quantity, cost from invoice_details where id = ${idFactura}`, (err,rows,fields)=>{
                     if(rows[0]!=null){
                        res.status(200).json(rows);
                     }
                     else{
                        res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
                     }
                  });
         break;
         case '2':
            mysql.mysqlConnection2.query(`select invoice_id, product_id, quantity, cost from invoice_details where id = ${idFactura}`, (err,rows,fields)=>{
                     if(rows[0]!=null){
                        res.status(200).json(rows);
                     }
                     else{
                        res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
                     }
                  });
         break;
         case '3':
            mysql.mysqlConnection3.query(`select invoice_id, product_id, quantity, cost from invoice_details where id = ${idFactura}`, (err,rows,fields)=>{
                     if(rows[0]!=null){
                        res.status(200).json(rows);
                     }
                     else{
                        res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
                     }
                  });
         break;
         default: res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${idSucursal}`});
                     
   }},
   listAllOfSpecificBranch:(req,res)=>{ //ventas/total/factgit adduras/sucursales/:idSucursal 
      let idSucursal = req.params.idSucursal;
      switch(idSucursal){
         case '1':
      mysql.mysqlConnection1.query(`select invoice_id, product_id, quantity, cost  from invoice_details`, (err,rows,fields)=>{
         if(rows[0]!=null){
            res.status(200).json(rows);
         }
         else{
            res.status(404).json({Mensaje: `No se encontró una factura con el ID ${idFactura} `, Error: `${err}`});
         }
      });
      break;
      case '2':
      mysql.mysqlConnection2.query(`select invoice_id, product_id, quantity, cost  from invoice_details`, (err,rows,fields)=>{
         if(rows[0]!=null){
            res.status(200).json(rows);
         }
         else{
            res.status(404).json(err); // REVISAR VALIDACIÓN
         }
      });
      break;
      case '3':
      mysql.mysqlConnection3.query(`select invoice_id, product_id, quantity, cost  from invoice_details`, (err,rows,fields)=>{
         if(rows[0]!=null){
            res.status(200).json(rows);
         }
         else{
            res.status(404).json(err); // REVISAR VALIDACIÓN
         }
      });
      break;
      default:
         res.status(404).json({Mensaje: `No se encontró una sucursal con el ID ${idSucursal} `});
      }
   }, 
   delete:(req,res)=>{ ///ventas/total/sucursales/:idSucursal/facturas/:idFactura
      let idSucursal = req.params.idSucursal;
      let idFactura = req.params.idFactura;
      switch(idSucursal){
         case '1':
            mysql.mysqlConnection1.query(`select * from invoice_details where id = ${idFactura}`, (err,rows,fields) =>{
               if(rows[0]!=null){
                  mysql.mysqlConnection1.query(`delete from invoice_details where id = ${idFactura}`, (errDelete,rowsDelete,fieldsDelete)=>{
                     if(!err){
                        res.status(200).json(rowsDelete);
                     }
                     else{
                        res.status(404).json(errDelete); // REVISAR VALIDACIÓN
                     }
                  });
               }
               else{
                  res.status(404).json({Mensaje: `No se encontraron detalles de factura con el ID ${idFactura} `, Error: `${err}`});
               }
            })
         break;
         case '2':
            mysql.mysqlConnection2.query(`select * from invoice_details where id = ${idFactura}`, (err,rows,fields) =>{
               if(rows[0]!=null){
                  mysql.mysqlConnection1.query(`delete from invoice_details where id = ${idFactura}`, (errDelete,rowsDelete,fieldsDelete)=>{
                     if(!err){
                        res.status(200).json(rowsDelete);
                     }
                     else{
                        res.status(404).json(errDelete); // REVISAR VALIDACIÓN
                     }
                  });
               }
               else{
                  res.status(404).json({Mensaje: `No se encontraron detalles de factura con el ID ${idFactura} `, Error: `${err}`});
               }
            })
         break;        
         case '3':
            mysql.mysqlConnection3.query(`select * from invoice_details where id = ${idFactura}`, (err,rows,fields) =>{
               if(rows[0]!=null){
                  mysql.mysqlConnection1.query(`delete from invoice_details where id = ${idFactura}`, (errDelete,rowsDelete,fieldsDelete)=>{
                     if(!err){
                        res.status(200).json(rowsDelete);
                     }
                     else{
                        res.status(404).json(errDelete); // REVISAR VALIDACIÓN
                     }
                  });
               }
               else{
                  res.status(404).json({Mensaje: `No se encontraron detalles de factura con el ID ${idFactura} `, Error: `${err}`});
               }
            })
         break;
         default:
            res.status(404).json({Mensaje: `No se encontró la sucursal`});
         }
      }
   }

function invoiceRecords(x){
   let i = vector.length
   vector[i] = x;
}