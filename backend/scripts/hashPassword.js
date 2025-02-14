const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Admin = require('../Schema/admin.js');

const mongoURI = process.env.mongodb || 'mongodb+srv://nikhiljadhav2218:r6vMNm1UTxjwasv6@clusterzeal.szqyk.mongodb.net/';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const hashPassword = async () => {
    try {
        const email = 'Admin@123';
        const plainPassword = 'Pass@123';
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(plainPassword, salt);

        await Admin.findOneAndUpdate({ email }, { password: hashedPassword });
        console.log('Password updated successfully');
        mongoose.disconnect();
    } catch (err) {
        console.error('Error updating password:', err);
        mongoose.disconnect();
    }
};

hashPassword();
