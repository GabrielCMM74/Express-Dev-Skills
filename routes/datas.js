const express = require('express');
const router = express.Router();
const dataController = require('../controllers/datas')


router.get('/', dataController.index)

router.get('/new', dataController.new)

router.get('/:id', dataController.show)

router.get('/:id/edit', dataController.edit)

router.post('/', dataController.create);

router.delete('/:id', dataController.delete);

router.put('/:id', dataController.update);


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
