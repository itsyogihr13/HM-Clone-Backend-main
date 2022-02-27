const express = require('express');
const Women = require('../models/womens.model');

const router = express.Router();

router.post('', async(req, res) => {
  try {
    const women = await Women.create(req.body);
    return res.status(200).send(women);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})

router.get('', async(req, res) => {
  try {
    const womens = await Women.find().lean().exec();
    return res.render('womens',{
      womens
    })
    // return res.status(201).send(womens);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})
router.get('/:id', async(req, res) => {
  try {
    const womens = await Women.findById(req.params.id).lean().exec();
    return res.render('product/singleProduct',{
      womens
    })
    // return res.status(201).send(womens);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})



module.exports = router  