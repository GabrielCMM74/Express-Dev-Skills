const Data = require('../models/data')

module.exports = {
    index,
    show,
    new:newData,
    create,
    delete: deleteCar,
    edit,
    update
}
//     update


function update(req,res) {
    Data.update(req.params.id, req.body);
    res.redirect(`/datas`);
  }

function edit(req, res){
  
	res.render('datas/edit', {
		data: Data.getOne(req.params.id)
	})}

  function deleteCar(req, res) {
    Data.deleteOne(req.params.id);
    res.redirect('/datas');
  }

function create(req, res){
    console.log(req.body, ' <--- req.body, contents of the form')

    Data.create(req.body)
    res.redirect('/datas');

}

function index(req, res){
    res.render('datas/index',{
        datas: Data.getAll()
    })

}



function show(req, res){

    res.render('datas/show',{
        datasDb: req.params.id,
        data: Data.getOne(req.params.id)

    })
}

function newData(req, res){

    res.render('datas/new')

}