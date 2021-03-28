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
/////CONEXIÓN A BD2
const mysqlConnection2=mysql.createConnection({
    host:' ',//aquí debería ir el dato proporcionado conocido como "server"
    user:' ',//nombre de la bd generada
    password:' ',//proporcionada por el hosting service
    database: ' '//proporcionada por el hosting service
});
mysqlConnection2.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB2 is connected');
    }
});
/////CONEXIÓN A BD3
const mysqlConnection3=mysql.createConnection({
    host:' ',//aquí debería ir el dato proporcionado conocido como "server"
    user:' ',//nombre de la bd generada
    password:' ',//proporcionada por el hosting service
    database: ' '//proporcionada por el hosting service
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