const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.toute('/').get((req, res) => {
    Exercise.find()
        .then( exercises => res.json(exercises))
        .catch( err => res.status(404).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json('New Exercise Added'))
        .catch(err => res.status(404).json('Error : ' + err));
});

module.exports = router;