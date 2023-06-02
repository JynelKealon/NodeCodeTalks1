// Creating a connection configuration object that tells you the information needed to connect to the MySql database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'your username',
    password: 'your password',
    database: 'your database name'
  });
  
// Here you are connecting to the MySql database
connection.connect(function(error) {
    if (!!error) {
      console.log(error);
    } else {
      console.log('Connected! :)');
    }
  });
  