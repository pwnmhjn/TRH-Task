import Bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import User from "../models/users.js"




const registerUser = async (req, res) => {
    const { name, email, password, username } = req.body;
    if (!(name && email && password && username)) {
        res.status(402).send("field are missing");
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        res.status(402).send("User is already exists");
    }
    const encryptedPass = await Bcrypt.hash(password, 9);
    const dbUser = await User.create({
        name,
        username,
        email,
        password: encryptedPass,
    });

    const token = JWT.sign({ id: dbUser._id, email }, "pwnmhjn", {
        expiresIn: "2h",
    });

    dbUser.password = undefined;
    res.status(200).send(dbUser);
}

const logUser =  async (req, res) => {
    const { username, password } = req.body;
    if (!(username && password)) {
        res.status(400).send("Field are missing");
    }
    const user = await User.findOne({ username });
    if (!user) {
        res.status(400).send("User does not Exist");
    }
    // await Bcrypt.compare(password,user.password)
    if (user && (await Bcrypt.compare(password, user.password))) {
        const token = JWT.sign({ id: user._id }, "pwnmhjn", {
            expiresIn: "2h",
        });
        user.password = undefined;

        //cookie
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        res.status(200).cookie("token", token, options).json({
            success: true,
            user,
        });
    } else {
        res.send("User does not Exist");
    }
}

const logoutUser = (req, res) => {
    res.clearCookie("token")
    res.json({ staus: 'success' })
}

export {logUser,registerUser,logoutUser}