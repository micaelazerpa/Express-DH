const path = require('path');

const mainController={
    renderHome: (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../views/home.html'))
    }
}
module.exports=mainController;