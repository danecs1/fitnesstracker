const mongoose = require('mongoose');
const { Schema } = mongoose;

const workOutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'Enter the type of exercise'
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Enter the name of the exercise'
                },
                duration: {
                    type: Number,
                    required: 'Enter work out time'
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

workOutSchema.virtual('totalDuration').get(() => {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model('Workout', workOutSchema);
module.exports = Workout;