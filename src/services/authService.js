import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_SECRET } from "../config/constants.js"; 

const register = (email, password) => {
    // Check if user exists
    
    return User.create({ email, password });
}

const login = async (email, password) => {
    // Check if user exists
    const user = await User.findOne({ email });
    
    if (!user) {
        throw new Error('User does not exist!');
    }

    // Validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid password!')
    }
    
    // Generate jwt token
    const payload = { 
        _id: user._id, 
        email,
    }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

    // Return jwt token
    return token;
}

export default {
    register,
    login
}
