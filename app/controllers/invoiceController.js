let mysql=require('../../db/mysql');
let invoice=require('../models/invoice');
module.exports = {
   // create:(req,res)=>{
   //    //{date, total, amount, products[id_product, quantity, cost]}
   //    console.log(req.body);
   //    console.log(req.body.productos);
   //    console.log(req.body.productos[2].nombre);
   //    //console.log(JSON.parse(req.body));
   //    //JSON.parse(req.body.products).forEach(element => {
   //    res.json({texto:'mensaje'});
   //    /*mysql.query('insert into order SET ?',req.body,(err,rows,fields)=>{
   //       if(!err)
   //          res.json(rows);
   //       else
   //          res.json(err);
   //    })*/
   // },
   // list:(req,res)=>{
   //    mysql.query('select * from order',(err,rows,fields)=>{
   //       if (!err)
   //          res.json(rows);
   //       else
   //          res.json(err);
   //    })
   // },
   // find:(req,res)=>{
   //    mysql.query('select * from order o inner join order_details d on o.id=d.order_id where o.id=?',req.params.id,(err,rows,fields)=>{
   //       if (!err)
   //          res.json(rows);
   //       else
   //          res.json(err);
   //    })
   // }
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
