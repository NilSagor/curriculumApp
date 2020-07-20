const express = require("express")
const router = express.Router()
const { Curriculum } = require('../../db')

router.route('/')
 .get(async function (req, res) {
   const curricula = await Curriculum.find()
   res.send(curricula)
 })

 .post(async function (req, res) {
   const { name, goal, description, sections } = req.body
   const curriculum = new Curriculum({
     name,
     goal,
     description,
     sections
   })
   const currRes = await curriculum.save()
   res.send(201, currRes)
 })

router.route('/:id')
  .get(async function (req, res) {
    const curriculum = await Curriculum.findById(req.params.id)
    res.send(curriculum)
  })

  .patch(async function (req, res) {
    await Curriculum.updateOne({_id:req.params.id}, {...req.body})
    res.send('Got a Update request')
  })

  .delete(async function (req, res) {
    await Curriculum.deleteOne({_id:req.params.id})
    res.send("Got a delete request")
  })


module.exports = router 
