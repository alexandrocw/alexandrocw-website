import Link from "next/link";
import Head from "next/head";
import dbConnect from "../lib/dbConnect";
import Blog from "../models/Blog";
import Project from "../models/Project";

export async function getStaticProps() {
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

  return {
    props: {
      posts: posts,
      projects: projects
    },
    revalidate: 10
  };
}

const Home = ({ posts, projects }) => {
  return (
    <>
      <Head>
        <title>Alex's Personal Website | Home</title>
        <meta name="keywords" content="alex"/>
      </Head>
      
      <div className="flex flex-grow items-center space-x-10 justify-around">
        <div className="space-y-10 text-white">
          <h1 className="text-6xl">Discover fun things<br/>in a single site</h1>
          <h2 className="text-3xl">Get started by checking<br/>my latest project and blog</h2>
        </div>
        <div className="m-auto w-5/12 rounded-lg border-2 bg-black space-y-3 shadow-md">
          <h2 className="text-center mt-4 text-white font-bold">What&apos;s going on?</h2>
          <div className="flex flex-col cursor-default bg-white border-2 shadow-md w-full">
            <div className="border-b-2 px-4 pt-2 font-bold text-blue-700">
              <h3>Latest project</h3>
            </div>
            <div className="flex flex-grow w-full opacity-75 hover:opacity-100">
              <Link href="/">
                  <a className="w-full">
                    {projects.map((project) => (
                      <div key={project._id} className="p-4">
                        <h4 className="font-bold">{project.title}</h4>
                        <h4>By <span className="font-bold">{project.author_name}</span> on <span className="font-bold">{project.published_on}</span></h4>
                        <h4>Category <span className="font-bold">{project.category}</span></h4>
                        <h4>Latest updated on <span className="font-bold">{project.updated_on}</span></h4>
                      </div>
                    ))}
                  </a>
                </Link>
            </div>
          </div>
          <div className="flex flex-col cursor-default bg-white border-2 shadow-md w-full">
            <div className="border-b-2 px-4 pt-2 font-bold text-blue-700">
              <h3>Latest blog post</h3>
            </div>
            <div className="flex flex-grow w-full opacity-75 hover:opacity-100">
              <Link href="/blog">
                <a className="w-full">
                  {posts.map((post) => (
                    <div key={post._id} className="p-4">
                      <h4 className="font-bold">{post.title}</h4>
                      <h4>By <span className="font-bold">{post.author_name}</span> on <span className="font-bold">{post.published_on}</span></h4>
                      <h4>Category <span className="font-bold">{post.category}</span></h4>
                      <h4>Latest updated on <span className="font-bold">{post.updated_on}</span></h4>
                    </div>
                  ))}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
