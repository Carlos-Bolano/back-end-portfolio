import mongoose from 'mongoose'

const userSchemal = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
    },
    message: {
        type: String,
        require: true,
        trim: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Person', userSchemal)