const Pirates = require("../models/pirates.model");


// CREATE
module.exports.createPirate = (req, res) => {
    Pirates.create(req.body)
    .then(addPirate => res.json(addPirate))
    .catch(err => res.json({message: "Something went wrong CREATING", error: err}))
}

// READ
module.exports.findAllPirates = (req, res) => {
    Pirates.find()
    .then(allPirates => res.json(allPirates))
    .catch(err => res.json({message: "Something went wrong FINDING ALL", error: err}))
}

module.exports.findOnePirate = (req, res) => {
    Pirates.findOne({_id: req.params._id})
    .then(onePirate => res.json(onePirate))
    .catch(err => res.json({message: "Something went wrong FINDING ONE", error: err}))

}

// UPDATE
module.exports.updatePirate = (req, res) => {
    Pirates.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
    .then(updatedPirate => res.json(updatedPirate))
    .catch(err => res.json({message: "Something went wrong UPDATING"}))
}
// DESTROY
module.exports.deleteOnePirate = (req, res) => {
    Pirates.deleteOne({_id: req.params._id})
    .then(res.json({message: "It was deleted"}))
    .catch(err => res.json({message: "Something went wrong when DELETEING", error: err}))
}