const mysql = require('mysql');

module.exports = async (params: any) => new Promise(
  (resolve, reject) => {
    const connection = mysql.createConnection(params);
    connection.connect((error: any) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(connection);
    })
  });
