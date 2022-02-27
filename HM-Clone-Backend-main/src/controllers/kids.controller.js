const express = require('express');
const Kid = require('../models/kids.model');

const router = express.Router();

router.post('', async(req, res) => {
  try {
    const kid = await Kid.create(req.body);
    return res.status(200).send(kid);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})

router.get('', async(req, res) => {
  try {
    const kids = await Kid.find().lean().exec();
    return res.render('kids',{
      kids
    })
    // return res.status(201).send(wokids);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})
router.get('/:id', async(req, res) => {
  try {
    const kids = await Kid.findById(req.params.id).lean().exec();
    return res.render('product/singleprodkid',{
      kids
    })
    // return res.status(201).send(wokids);
  } catch (err) {
    return res.status(500).send({err:err.message})
  }
})



module.exports = router  