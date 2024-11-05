const mongoose = require('mongoose');

const connectbd = async () => {
    await mongoose.connect("mongodb+srv://abdullahjawed807:UqmB5qKGD7963EFA@cluster0.e1w53.mongodb.net/reactEcommerceDb");
    console.log('connected');
}

module.exports = connectbd;