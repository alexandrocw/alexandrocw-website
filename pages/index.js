import dbConnect from "../lib/dbConnect";
import Blog from "../models/Blog";
import Project from "../models/Project";
import Link from "next/link";

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const resultBlog = await Blog.find({}).sort({"updated_on": -1}).limit(1);
  const resultProject = await Project.find({}).sort({"updated_on": -1}).limit(1);

  const posts = resultBlog.map((doc) => {
    const post = doc.toObject();
    post.published_on = post.published_on.toDateString();
    post.updated_on = post.updated_on.toDateString();
    post._id = post._id.toString();
    return post;
  })

  const projects = resultProject.map((doc) => {
    const project = doc.toObject();
    project.published_on = project.published_on.toDateString();
    project.updated_on = project.updated_on.toDateString();
    project._id = project._id.toString();
    return project;
  })

  return { props: { posts: posts, projects: projects } };
}

const Home = ({ posts, projects }) => {
  return (
    <div className="flex flex-grow items-center">
      <div className="m-auto w-auto">
        <h1 className="text-8xl text-center ease-in transition-opacity">Welcome<br/>Visitor...</h1>
      </div>
      <div className="m-auto w-auto rounded-lg border-2 bg-black space-y-3">
        <h2 className="text-center mt-4 text-white font-bold">What&apos;s going on?</h2>
        <div className="flex flex-col cursor-default bg-white border-2 shadow-md w-full">
          <div className="border-b-2 px-4 pt-2">
            <h3>Latest project</h3>
          </div>
          <div className="flex flex-grow">
            <Link href="/">
                <a className="hover:bg-gray-500 hover:text-gray-100">
                  {projects.map((project) => (
                    <div key={project._id} className="p-4">
                      <h4 className="font-bold">{project.title}</h4>
                      <h4>By {project.author_name} on {project.published_on}</h4>
                      <h4>Category {project.category}</h4>
                      <h4>Latest updated on {project.updated_on}</h4>
                    </div>
                  ))}
                </a>
              </Link>
          </div>
        </div>
        <div className="flex flex-col cursor-default bg-white border-2 shadow-md w-full">
          <div className="border-b-2 px-4 pt-2">
            <h3>Latest blog post</h3>
          </div>
          <div className="flex flex-grow">
            <Link href="/blog">
              <a className="hover:bg-gray-500 hover:text-gray-100">
                {posts.map((post) => (
                  <div key={post._id} className="p-4">
                    <h4 className="font-bold">{post.title}</h4>
                    <h4>By {post.author_name} on {post.published_on}</h4>
                    <h4>Category {post.category}</h4>
                    <h4>Latest updated on {post.updated_on}</h4>
                  </div>
                ))}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
