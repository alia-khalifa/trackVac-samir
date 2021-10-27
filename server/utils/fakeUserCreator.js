const db = require('../db');
const User = require('../models/user');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createUser = async (vacID, nationalID, firstDose, secondDose) => {
    const user = new User({ vacID, nationalID, firstDose, secondDose });
    await user.save();
    db.close();
}

createUser('12345678901234567890', '1234', true, true);