const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

const router = require('./theRouter');
app.use('/', router);

const userRouter = require('./userRouter');
app.use('/user', userRouter);


// router also has... 
// router.all
// router.post
// router.delete
// router.put
// router.use works the same way that app.use does but is specific to this route 


app.listen(3000);
console.log(`The server is listening at PORT: 3000.`);
