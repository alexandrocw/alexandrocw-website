import dbConnect from "../../../lib/dbConnect.js";
import User from "../../../models/User.js";
import { emailRegex } from "../../../lib/regex.js";
import { hashPassword } from "../../../lib/auth.js";

const handler = async (req, res) => {
  // Only POST method is accepted
  if (req.method === "POST") {
    // Getting email, first name, last name, username, and password from body
    const { email, first_name: firstName, last_name: lastName, username, password, rePassword } = req.body;
    if (!email || !emailRegex.test(email) || !password || !rePassword || !first_name || !last_name || !username || (password !== rePassword) || !(password.length >= 8 && password.length <= 16)) {
      res.status(422).json({ message: "Invalid Data", error: true });
      return ;
    }
    // Connect with database
    await dbConnect();
    // Check existing user
    const checkExisting = await User.findOne({
      $or: [
        { email: email },
        { username: username }
      ]
    })
    // Send error response if duplicate user is found
    if (checkExisting) {
      res.status(422).json({ message: "User already exists", error: true });
      return ;
    }
    // Hash password
    const status = await User.create({
      email,
      first_name,
      last_name,
      username,
      joined_on: new Date(),
      status: "online",
      email_verified: false,
      password: await hashPassword(password)
    })
    // Send success response
    res.status(201).json({ message: "User created", error: false, ...status });
  } else {
    // Response for other than POST method
    res.status(500).json({ message: "Route not valid", error: true });
  }
}

export default handler;
