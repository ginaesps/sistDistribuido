const mysql= require('../node_modules/mysql');

////CONEXIÓN A BD1
const mysqlConnection1=mysql.createConnection({
    host:'sql3.freemysqlhosting.net',
    user:'sql3401760',
    password:'bWCy8dpURg',
    database: 'sql3401760'
});
mysqlConnection1.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB1 is connected');
    }
});
/////CONEXIÓN A BD2 (Ale)
const mysqlConnection2=mysql.createConnection({
    host:'bejjy7ikl7u1hdtyqgxj-mysql.services.clever-cloud.com',
    user:'ujroqn5kvvyvvsql',
    password:'GxvLzLo1z99T0Xl5z64y',
    database: 'bejjy7ikl7u1hdtyqgxj'

});
mysqlConnection2.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB2 is connected');
    }
});
/////CONEXIÓN A BD3 (Joshua)
const mysqlConnection3=mysql.createConnection({
    host:'mysql-tareaschidas.alwaysdata.net',
    user:'230692_joshua',
    password:'Animales1',
    database: 'tareaschidas_prueba'
});
mysqlConnection3.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB3 is connected');
    }
});

module.exports={mysqlConnection1, mysqlConnection2, mysqlConnection3};