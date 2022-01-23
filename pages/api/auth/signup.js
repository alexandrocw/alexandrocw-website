import dbConnect from "../../../lib/dbConnect.js";
import User from "../../../models/User.js";
import { hash } from "bcryptjs";

const handler = async (req, res) => {
  // Only POST method is accepted
  if (req.method === "POST") {
    // Getting email, first name, last name, username, and password from body
    const { email, first_name, last_name, username, password } = req.body;
    if (!email || !email.includes("@") || !password || !first_name || !last_name || !username) {
      res.status(422).json({ message: "Invalid Data" });
      return;
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
      res.status(422).json({ message: "User already exists"});
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
      password: await hash(password, 12)
    })
    // Send success response
    res.status(201).json({ message: "User created", ...status });
  } else {
    // Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}

export default handler;
