/**
 * Created by web on 2019/7/2.
 */
const express = require('express');
const pool = require('./pool.js');
var router=  express.Router();

router.post('/reg',function(request,respoonse){
    var obj =request.body;
    if(!obj.uname){
        respoonse.send({code:401,msg:'uname require' });
    }
    pool.query('insert into xz_user set ? ',[obj],function(err,result){
      if(err) throw err;
      if(result.affectedRows>0){
           respoonse.send({code:200,msg:'reg sucess'});
      }
    });
});
   router.post('')

module.exports=router;