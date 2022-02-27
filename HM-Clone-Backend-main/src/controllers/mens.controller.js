const express = require('express');
const Men = require('../models/mens.model');

const router = express.Router();

router.post('', async(req, res) => {
  try {
    const men = await Men.create(req.body);
    return res.status(200).send(men);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})

router.get('', async(req, res) => {
  try {
    const mens = await Men.find().lean().exec();
    return res.render('mens',{
      mens
    })
    // return res.status(201).send(womens);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})
router.get('/:id', async(req, res) => {
  try {
    const mens = await Men.findById(req.params.id).lean().exec();
    return res.render('product/singleprodmen',{
      mens
    })
    // return res.status(201).send(womens);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})



module.exports = router  