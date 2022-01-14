import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    /* Title of the post */

    type: String,
    required: [true, "Please provide title of the post"]
  },
  author_name: {
    /* Author of the post */

    type: String,
    required: [true, "Please provide author of the post"]
  },
  published_on: {
    /* Time published of the post */

    type: Date,
    required: [true, "Please provide publishing time"]
  },
  updated_on: {
    /* Time the post was updated */

    type: Date,
    required: [true, "Please provide the updated time or published time"]
  },
  category: {
    /* Category of the post */

    type: String,
    required: [true, "Please provide category of the post"]
  },
  content: {
    /* Content of the post */

    type: String,
    required: [true, "Please provide content for the post"]
  },
  post_number: {
    /* Number of the post */

    type: Number,
    required: [true, "Please provide the post number"]
  },
  images: [{
    /* Images used in the post */
    
    name: String,
    url: String,
    file_size: String,
    file_type: String,
    width: Number,
    height: Number
  }],
  videos: [{
    /* Videos used in the post */

    name: String,
    url: String,
    file_size: String,
    file_type: String,
    width: Number,
    height: Number
  }]

})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
