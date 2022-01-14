import dbConnect from "../../lib/dbConnect.js";
import Project from "../../models/Project.js";

/* Retrieves Project(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Project.find({});
  const posts = result.map((doc) => {
    const post = doc.toObject();
    post.published_on = post.published_on.toDateString();
    post.updated_on = post.updated_on.toDateString();
    post._id = post._id.toString();
    return post;
  })

  return { props: { posts: posts } };
}

const ProjectPage = ({ posts }) => {
  if (!posts) {
    return (
      <div className="flex justify-center items-center flex-grow">
        <p className="text-2xl animate-spin">Loading</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="font-bold text-4xl uppercase text-center my-4 space-y-4">
        <h1>My projects</h1>
      </div>
      {posts.map((post) => (
        <div key={post._id} className="w-2/3 m-auto border-4 shadow-lg rounded-lg text-lg p-4">
          <div className="border-b-2">
            <h2 className="font-bold text-3xl">{post.title}</h2>
            <div>
              <h2>By <span className="text-red-500">{post.author_name}</span>, published on <span className="text-red-500">{post.published_on}</span> in category <span className="text-red-500">{post.category}</span></h2>
              <h2>Latest updated on <span className="text-red-500">{post.updated_on}</span></h2>
            </div>
          </div>
          <div className="mt-4">
            <h3>{post.content}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectPage;
