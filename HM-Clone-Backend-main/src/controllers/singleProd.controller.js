const express = require('express');
const Women = require('../models/womens.model');

const router = express.Router();


router.get('', async(req, res) => {
  try {
    const womens = await Women.findById(req.params).lean().exec();
    return res.render('womens',{
      womens
    })
    // return res.status(201).send(womens);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})



module.exports = router  