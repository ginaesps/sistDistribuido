let mysql=require('../../db/mysql');
let product=require('../models/product');
let vector = [];
const { json } = require('body-parser');
module.exports = {
deletesucursal:(req,res)=>{///productos/:idProducto/sucursales/:idSucursal : eliminar producto existente.

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
Deletglobal: (req,res)=>{///productos/:idProducto: eliminar producto existente.
   ysql.mysqlConnection1.query(`select from product where id = ${idProducto}`,(err,rows,fields)=>{
      if(!err){
         ProductRecords(rows)
         res.json(vector) //BORRAR DESPUES
      }
      else {
          res.json(err);
      }
  })
  mysql.mysqlConnection2.query(`select from product where id = ${idProducto}`,(err,rows,fields)=>{
      if(!err){
          ProductRecords(rows)
      }
      else{
          res.json(err);
      }
  }),
  mysql.mysqlConnection3.query(`select from product where id = ${idProducto}`,(err,rows,fields)=>{
      if(!err){
         ProductRecords(rows)
          res.json(vector)
      }
      else{
          res.json(err);
      }
  })
  vector = []

function ProductRecords(x){
let i = vector.length
vector[i] = x;
}
},
listAll:(req,res)=>{///productos/sucursales : todos los productos de todas las sucursales y todas las cantidades disponibles en cada una de las sucursales.
   mysql.mysqlConnection1.query('SELECT * FROM product',(err,rows,fields)=>{
      if(!err){
         ProductRecords(rows)
         res.json(vector) //BORRAR DESPUES
      }
      else {
          res.json(err);
      }
  })
  mysql.mysqlConnection2.query('SELECT * FROM product',(err,rows,fields)=>{
      if(!err){
          ProductRecords(rows)
      }
      else{
          res.json(err);
      }
  }),
  mysql.mysqlConnection3.query('SELECT * FROM product',(err,rows,fields)=>{
      if(!err){
         ProductRecords(rows)
          res.json(vector)
      }
      else{
          res.json(err);
      }
  })
  vector = []

function ProductRecords(x){
let i = vector.length
vector[i] = x;
}
},
listProducts:(req,res)=>{///productos/sucursales/:idSucursal : todos los productos y cantidades existentes en cierta sucursal.
      let idSucursal = req.params.idSucursal;
      switch(idSucursal){
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
listbuscar:(req,res)=>{//productos/sucursales/buscar/:idProducto : te va a decir si el producto existe, info en general (nombre, costo y cantidad disponible) y las sucursales en las cuales está disponible.
   let idSucursal = req.params.idSucursal;
   let idProducto =req.params.idProducto;
   switch(idSucursal){
      case(1):
   mysql.mysqlConnection1.query(`select from product where id = ${idProducto}`, (err,rows,fields)=>{
      if(!err){
         res.status(200).json(rows);
      }
      else{
         res.status(404).json(err); // REVISAR VALIDACIÓN
      }
   });
   break;
   case(2):
   mysql.mysqlConnection2.query(`select from product where id = ${idProducto}`, (err,rows,fields)=>{
      if(!err){
         res.status(200).json(rows);
      }
      else{
         res.status(404).json(err); // REVISAR VALIDACIÓN
      }
   });
   break;
   case(3):
   mysql.mysqlConnection3.query(`select from product where id = ${idProducto}`, (err,rows,fields)=>{
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
postProduct:(req,res)=>{//productos/idProducto : insertar producto nuevo.
   mysql.mysqlConnection1.query(`INSERT INTO product SET id = ${idProducto}` ,(err,rows,fields)=>{
      if(!err){r
         res.json(vector) //BORRAR DESPUES
      }
      else {
          res.json(err);
      }
   })
   mysql.mysqlConnection2.query(`INSERT INTO product SET id = ${idProducto}`,(err,rows,fields)=>{
      if(!err){
      }
      else{
          res.json(err);
      }
   }),
   mysql.mysqlConnection3.query(`INSERT INTO product SET id = ${idProducto}`,(err,rows,fields)=>{
      if(!err){
          res.json(vector)
      }
      else{
          res.json(err);
      }
   })
},
putProduct:(req,res)=>{ //productos/:idProducto : modificar producto existente.
mysql.mysqlConnection1.query(`UPDATE FROM product WHERE id = ${idProducto}` ,(err,rows,fields)=>{
   if(!err){
      res.json(vector) //BORRAR DESPUES
   }
   else {
       res.json(err);
   }
})
mysql.mysqlConnection2.query(`UPDATE FROM product WHERE id = ${idProducto}`,(err,rows,fields)=>{
   if(!err){
   }
   else{
       res.json(err);
   }
}),
mysql.mysqlConnection3.query(`UPDATE FROM product WHERE id = ${idProducto}`,(err,rows,fields)=>{
   if(!err){
       res.json(vector)
   }
   else{
       res.json(err);
   }
})
}
}