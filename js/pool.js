/**
 * Created by web on 2019/7/2.
 */
const mysql = express.('mysql');
var pool = mysql.createPool({
     host:'127.0.0.1',
         port:'3306',
            user:'root',
            password:'',
    database:'xz',
    connectionlimit:20
});
module.exports=pool;