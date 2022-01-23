import User from "../../../models/User.js";
const dbConnect = require("../../../lib/dbConnect.js");
const { emailRegex } = require("../../../lib/regex.js");
const { hashPassword } = require("../../../lib/auth.js");

const handler = async (req, res) => {
  // Only POST method is accepted
  if (req.method === "POST") {
    // Getting email, first name, last name, username, and password from body
    const { email, firstName, lastName, username, password, rePassword } = req.body;
    if (!email || !emailRegex.test(email) || !password || !rePassword || !firstName || !lastName || !username || (password !== rePassword) || !(password.length >= 8 && password.length <= 16)) {
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
    const hashedPassword = await hashPassword(password);
    const status = await User.create({
      email: email,
      first_name: firstName,
      last_name: lastName,
      username: username,
      joined_on: new Date(),
      status: "online",
      email_verified: false,
      password: hashedPassword
    })
    // Send success response
    res.status(201).json({ message: "User created", error: false, ...status });
  } else {
    // Response for other than POST method
    res.status(500).json({ message: "Route not valid", error: true });
  }
}

export default handler;
