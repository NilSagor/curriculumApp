const mongoose = require('mongoose')
const CurriculumSchema = new mongoose.Schema({
    name: {
        type: String,
        name: true
    },
    goal: {
        type: String
    },
    description:{
        type: String
    },
    sections: [{
        name: {
            type: String,
            required: true
        },
        resources: [{
            isCompleted: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                required: true
            },
            url: {
                type: String
            }
        }],
        projects: [{
            sCompleted: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                required: true
            },
            url: {
                type: String
            }
        }]
    }]    
}, {timestamps:true})

const curriculum = mongoose.model('Curriculum', CurriculumSchema)

module.exports = curriculum