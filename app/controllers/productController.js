const mysql=require('../../db/mysql');
const product=require('../models/product');
const { json } = require('body-parser');
let vector = [];

module.exports = {
   deleteFromSpecificBranch:(req,res)=>{///productos/:idProducto/sucursales/:idSucursal : eliminar producto existente.
   let idProducto = req.params.idProducto;
   let idSucursal = req.params.idSucursal;
   switch(idSucursal){
      case(1):
         mysql.mysqlConnection1.query(`delete from Product where id = ${idProducto}`, (err,rows,fields)=>{
            if(!err){
               res.status(200).json(rows);
            }
            else{
               res.status(404).json(err); // REVISAR VALIDACIÓN
            }
         });
      break;
      case(2):
         mysql.mysqlConnection2.query(`delete from Product where id = ${idProducto}`, (err,rows,fields)=>{
            if(!err){
               res.status(200).json(rows);
            }
            else{
               res.status(404).json(err); // REVISAR VALIDACIÓN
            }
         });
      break;
      case(3):
         mysql.mysqlConnection3.query(`delete from Product where id = ${idProducto}`, (err,rows,fields)=>{
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
   deleteGlobal: (req,res)=>{///productos/:idProducto: eliminar producto existente.
      mysql.mysqlConnection1.query(`delete from product where id = ${idProducto}`,(err,rows,fields)=>{
         if(!err){
            productRecords(rows)//REVISAR SI ES NECESARIO GUARDARLO EN VECTOR
         }
         else {
            res.json(err);
         }
   })
   mysql.mysqlConnection2.query(`delete from product where id = ${idProducto}`,(err,rows,fields)=>{
         if(!err){
            productRecords(rows)
         }
         else{
            res.json(err);
         }
   }),
   mysql.mysqlConnection3.query(`delete from product where id = ${idProducto}`,(err,rows,fields)=>{
         if(!err){
            productRecords(rows)
            res.json(vector)
         }
         else{
            res.json(err);
         }
   })
   vector = []
   },
   listAll:(req,res)=>{///productos/sucursales : todos los productos de todas las sucursales y todas las cantidades disponibles en cada una de las sucursales.
      mysql.mysqlConnection1.query('SELECT * FROM product',(err,rows,fields)=>{
         if(!err){
            productRecords(rows)
         }
         else {
            res.json(err);
         }
   })
   mysql.mysqlConnection2.query('SELECT * FROM product',(err,rows,fields)=>{
         if(!err){
            productRecords(rows)
         }
         else{
            res.json(err);
         }
   }),
   mysql.mysqlConnection3.query('SELECT * FROM product',(err,rows,fields)=>{
         if(!err){
            productRecords(rows)
            res.json(vector)
         }
         else{
            res.json(err);
         }
   })
   vector = []
   },
   listProductsOfSpecificBranch:(req,res)=>{///productos/sucursales/:idSucursal : todos los productos y cantidades existentes en cierta sucursal.
         let id = req.params.id;
         switch(id){
            case(1):
               mysql.mysqlConnection1.query('select * from product', (err,rows,fields)=>{
                  if(!err){
                     res.status(200).json(rows);
                  }
                  else{
                     res.status(404).json(err); // REVISAR VALIDACIÓN
                  }
               });
            break;
            case(2):
               mysql.mysqlConnection2.query('select * from product', (err,rows,fields)=>{
                  if(!err){
                     res.status(200).json(rows);
                  }
                  else{
                     res.status(404).json(err); // REVISAR VALIDACIÓN
                  }
               });
            break;
            case(3):
               mysql.mysqlConnection3.query('select * from product', (err,rows,fields)=>{
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
   search:(req,res)=>{//productos/sucursales/buscar/:idProducto : te va a decir si el producto existe, info en general (nombre, costo y cantidad disponible) y las sucursales en las cuales está disponible.
      let idProducto = req.params.idProducto;
         mysql.mysqlConnection1.query(`SELECT name,cost,available_quantity,branch_id FROM product where id = ${idProducto}`,(err,rows,fields)=>{
            if(!err){
               productRecords(rows)
            }
            else{
               res.json(err);
            }
         }),
         mysql.mysqlConnection2.query(`SELECT name,cost,available_quantity,branch_id FROM product where id = ${idProducto}`,(err,rows,fields)=>{
            if(!err){
               productRecords(rows)
            }
            else{
               res.json(err);
            }
         }),
         mysql.mysqlConnection3.query(`SELECT name,cost,available_quantity,branch_id FROM product where id = ${idProducto}`,(err,rows,fields)=>{
            if(!err){
               productRecords(rows)
               res.json(vector)
            }
            else{
               res.json(err);
            }
         })
        vector = []
   },
   create:(req,res)=>{//productos/idProducto : insertar producto nuevo.
      mysql.mysqlConnection1.query('INSERT INTO product SET ?', req.body, (err,rows,fields)=>{
         if(!err){r
            res.json(vector) //BORRAR DESPUES
         }
         else {
            res.json(err);
         }
      })
      mysql.mysqlConnection2.query('INSERT INTO product SET ?', req.body, (err,rows,fields)=>{
         if(!err){
         }
         else{
            res.json(err);
         }
      }),
      mysql.mysqlConnection3.query('INSERT INTO product SET ?', req.body, (err,rows,fields)=>{
         if(!err){
            res.json(vector)
         }
         else{
            res.json(err);
         }
      })
   },
   modify:(req,res)=>{ //productos/:idProducto : modificar producto existente.
      let id = req.params.id;
      mysql.mysqlConnection1.query('update product set ? where id=?', [req.body,id], (err,rows,fields)=>{
         if(!err){
            res.json(vector) //BORRAR DESPUES
         }
         else {
            res.json(err);
         }
      })
      mysql.mysqlConnection2.query('update product set ? where id=?', [req.body,id], (err,rows,fields)=>{
         if(!err){
         }
         else{
            res.json(err);
         }
      }),
      mysql.mysqlConnection3.query('update product set ? where id=?', [req.body,id], (err,rows,fields)=>{
         if(!err){
            res.json(vector)
         }
         else{
            res.json(err);
         }
      })
   }
}

function productRecords(x){
   let i = vector.length
   vector[i] = x;
   }