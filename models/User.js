import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  first_name: {
    /* First Name of User */

    type: String,
    required: [true, "Please provide first name"]
  },
  last_name: {
    /* Last Name of User */

    type: String,
    required: [true, "Please provide last name"]
  },
  username: {
    /* Username of User */

    type: String,
    unique: true,
    required: [true, "Please provide username"]
  },
  email: {
    /* Email of User */

    type: String,
    unique: true,
    required: [true, "Please provide email"]
  },
  password: {
    /* Password of User */

    type: String,
    required: [true, "Please provide password"]
  },
  photo_url: {
    /* URL of User Profile */

    type: String
  },
  role: {
    /* Role of User */

    type: String
  },
  joined_on: {
    /* Time User Joined */

    type: Date,
    required: [true, "Please provide user joined time"]
  },
  last_online: {
    /* User Last Online */

    type: Date
  },
  status: {
    /* User Status */

    type: String,
    required: [true, "Please provide user status"]
  },
  email_verified: {
    /* User email verified or not */

    type: Boolean,
    required: [true, ""]
  },
  gender: {
    /* Gender of User */

    type: String
  },
  birthday: {
    /* Birthday of User */

    type: String
  },
  location: {
    /* Location of User */

    type: String
  },
  blog_posts: {
    /* Blog posts published by user */

    type: [String]
  },
  project_posts: {
    /* Project posts published by user */

    type: [String]
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
