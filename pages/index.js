import dbConnect from "../lib/dbConnect";
import Blog from "../models/Blog";

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Blog.find({}).sort({"published_on": -1}).limit(1);
  const posts = result.map((doc) => {
    const post = doc.toObject();
    post.published_on = post.published_on.toDateString();
    post._id = post._id.toString();
    return post;
  })

  return { props: { posts: posts } };
}

const Home = ({ posts }) => {
  return (
    <div className="flex flex-grow items-center">
      <div className="m-auto w-1/2">
        <h1 className="text-8xl text-center">Welcome<br/>Visitor...</h1>
      </div>
      <div className="m-auto mr-4 w-1/2 rounded-lg border-2 p-4">
        <h2 className="text-center border-2">What's going on?</h2>
        <div className="">
          <h3>Latest project</h3>
        </div>
        <div>
          <h3>Latest blog post</h3>
          {posts.map((post) => (
            <div>
              {post.title}
              Published on {post.published_on}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;
