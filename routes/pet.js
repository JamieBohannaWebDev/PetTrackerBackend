const express = require('express');
const router = express.Router();
const Pet = require('../models/Pets');

// Get all pets
router.get('/', async (req, res) => {
    try {
        const allPets = await Pet.find();
        res.json(allPets);
    } catch (err) {
        res.json({message: err});
    }
});

// Get specific pet
router.get('/:petId', async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.petId);
        res.json(pet);
    } catch (err) {
        res.json({message: err})
    }
})


// Delete specific pet
router.delete('/:petId', async (req, res) => {
    try {
        const removedPet = await Pet.remove({_id: req.params.petId});
        res.json({removedPet});
    } catch (err) {
        res.json({message: err})
    }
})


// Update specific pet

router.patch('/:petId', async (req, res) => {
    try {
        const updatedPet = await Pet.update(
            {_id: req.params.petId},
            {
                $set: {
                    name: req.body.PetData.name,
                    type: req.body.PetData.type,
                    breed: req.body.PetData.breed,
                    gender: req.body.PetData.gender,
                    age: req.body.PetData.age,
                    color: req.body.PetData.color
                }
            }
        );
        res.json({updatedPet});
    } catch (err) {
        res.json({message: err})
    }
})


// Create a pet
router.post('/', async (req, res) => {
    const pet = new Pet({
        name: req.body.petData.name,
        type: req.body.petData.type,
        breed: req.body.petData.breed,
        gender: req.body.petData.gender,
        age: req.body.petData.age,
        color: req.body.petData.color
    });

    console.log(req.body.petData);

    try {
        const savedPet = await pet.save();
        res.json(savedPet)
    } catch (err) {
        res.json({message: err})
    }
});

module.exports = router;
