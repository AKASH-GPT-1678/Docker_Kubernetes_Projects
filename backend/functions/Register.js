
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import { Luser } from '../modela/user.another.js';

export const Register = async (req, res) => {
    try {
        const { name, email, age, passwordd } = req.body;

        // Validate input fields
        if (!name || !email || !age || !passwordd) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const userExist = await Luser.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "The email ID already exists" });
        }

        // Hash password
        const password = await bcrypt.hash(passwordd, 10)

        // Create new user
        const newUser = await Luser.create({ name, email, age, password });

        // Respond with the new user (excluding password for security)
        res.status(201).json({ message: "User registered successfully!", user: newUser });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
        console.error("Registration Error:", error);
    }
};


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: "Both Email and Password are required for verification" });
        }

        // Find user by email
        const findemail = await Luser.findOne({ email: email });

        if (!findemail) {
            return res.status(404).json({ message: "No registered user found with this email" });
        }

        // Compare passwords
        const checkpass = await bcrypt.compare(password, findemail.password);

        if (!checkpass) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // Create JWT token
        const payload = { email: findemail.email }; // No need to send password in token
        const token = jwt.sign(payload, "rajeshsingh", { expiresIn: "1h" });

        // Send success response
        return res.status(200).json({ message: "Login successful", token: token });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
