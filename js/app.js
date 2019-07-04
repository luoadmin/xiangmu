/**
 * Created by web on 2019/7/2.
 */
const express= require('express');
const body = require('body-parser');
const userRouter = require('userRouter');

var app = express();
app.listen(8080);
app.use(body.urlencodeed({
    extended:false
}));
app.use(express.static('../'));
app.use('/user',userRouter);