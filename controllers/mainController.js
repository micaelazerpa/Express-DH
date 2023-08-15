const listaPlatos=require('../dataBase/platos');

const mainController={
    index: (req, res)=>{
        res.render('index',{data: listaPlatos})
    },
    detail: (req, res)=>{
        const platoSearch = listaPlatos.find((plato)=> plato.id === req.params.id)
        res.render('detalleMenu',{plato:platoSearch})
    }
}
module.exports=mainController;