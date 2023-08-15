const express = require('express');
const app = express();
const mainRouter=require('./routers/main')

/*  
app.use(express.static(path.resolve(__dirname, 'public')));
*/
app.set('view engine', 'ejs'); 
app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.use('/', mainRouter)