import dbConnect from "../../lib/dbConnect.js";
import Blog from "../../models/Blog.js";

/* Retrieves blog(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Blog.find({});
  const posts = result.map((doc) => {
    const post = doc.toObject();
    post.published_on = post.published_on.toDateString();
    post.updated_on = post.updated_on.toDateString();
    post._id = post._id.toString();
    return post;
  })

  return { props: { posts: posts } };
}

const BlogPage = ({ posts }) => {
  if (!posts) {
    return (
      <div className="flex justify-center items-center flex-grow">
        <p className="text-2xl animate-spin">Loading</p>
      </div>
    )
  }

  return (
    <div>
      Hey this is blog
      {posts.map((post) => (
        <div key={post._id}>
          {post.title}
          {post.author_name}
          {post.published_on}
          {post.updated_on}
          {post.category}
          {post.content}
        </div>
      ))}
    </div>
  )
}

export default BlogPage;
