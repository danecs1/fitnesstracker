const express = require('express');
const router = express.Router();
const db = require('../models');



//get all workouts in the db
router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(workouts => {
            return res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
});

//create workout
router.post('/api/workouts', (req, res) => {
    db.Workout.create({ exercises: req.body })
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err);
        });
});

//update existing exercise
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercise: req.body } }, { new: true, runValidators: true })
        .then(updatedWorkout => {
            res.json(updatedWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

//shows workouts within a range
router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).sort({ 'day': 1 }).limit(6)
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
})


module.exports = router;

