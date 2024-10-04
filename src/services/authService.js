import bcrypt from "bcrypt";
import User from "../models/User.js";

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

    // Return jwt token
}

export default {
    register,
    login
}
