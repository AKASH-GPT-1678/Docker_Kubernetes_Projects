import User from "../modela/user.model.js";

export const Register = async (req, res) => {
    try {
        const { name, email, age, password } = req.body;

        // Validate input fields
        if (!name || !email || !age || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "The email ID already exists" });
        }

        // Create new user
        const newUser = await User.create({ name, email, age, password });

        // Respond with the new user (excluding password for security)
        res.status(201).json({ message: "User registered successfully!", user: newUser });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
        console.error("Registration Error:", error);
    }
};



// export default Register