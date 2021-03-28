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
    host:'sql3.freemysqlhosting.net',//aquí debería ir el dato proporcionado conocido como "server"
    user:'sql3401760',//nombre de la bd generada
    password:'bWCy8dpURg',//proporcionada por el hosting service
    database: 'sql3401760'//proporcionada por el hosting service
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
    host:'mysql-tareaschidas.alwaysdata.net',//aquí debería ir el dato proporcionado conocido como "server"
    user:'230692_joshua',//nombre de la bd generada
    password:'Animales1',//proporcionada por el hosting service
    database: 'tareaschidas_prueba'//proporcionada por el hosting service
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