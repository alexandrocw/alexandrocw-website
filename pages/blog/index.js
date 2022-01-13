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
    post._id = post._id.toString();
    return post;
  })

  return { props: { posts: posts } };
}

const BlogPage = ({ posts }) => {
  return (
    <div>
      Hey this is blog
      {posts.map((post) => (
        <div key={post._id}>
          {post.title}
          {post.author_name}
          {post.published_on.toString()}
          {post.category}
          {post.content}
        </div>
      ))}
    </div>
  )
}

export default BlogPage;
