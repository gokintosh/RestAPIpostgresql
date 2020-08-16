const Pool=require("pg").Pool;

const pool=new Pool({
    user:"gokul",
    password:"gokul",
    database:"todo_database",
    host:"localhost",
    port:5432
});
module.exports=pool;