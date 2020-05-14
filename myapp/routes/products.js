var express = require('express');

let ProductModel = require('../models/product')

//let express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name', function(req, res, next) {

  if(!req.params.name) {
      return res.status(400).send('Missing parameter Name')
  }

  
  
  ProductModel.find()
  .then(doc => {
      res.json(doc)
  })
  .catch(err => {
      res.status(500).json(err)
  })
});

module.exports = router;



