import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Alex&apos;s Personal Website | About</title>
        <meta name="keywords" content="about-me"/>
      </Head>
      
      <div className="flex flex-col">
        <div className="flex flex-col space-x-10 justify-between m-auto rounded-lg shadow-md border-red-500 border-2 bg-white p-10">
          <div className="flex">
            <div className="">
              <Image src="/Self_Potrait.png" alt="Photo of Alex" width={300} height={400} />
            </div>
            <div className="ml-10">
              <h1 className="text-4xl uppercase font-bold"><span className="text-purple-700">Alex</span>andro Christian Wijaya</h1>
              <h2 className="text-xl">Full Stack Web Developer</h2>
              <h3 className="mt-10">
                I&apos;m an Electrical Engineering Undergraduate Student. I have big enthusiast towards<br/>
                technology, web development, internet of things, and data science. I&apos;m very easy going<br/>
                and can be contacted easily. Honesty and high-self esteem are my principles.
              </h3>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-center text-2xl font-bold">Technology I use</h3>
            <div className="flex border-2 border-black rounded-lg shadow-md">
              <ul>
                Front end
                <li>React js: Robust, easy to use, has a growing community.<br/>
                  Lack speed compared than next js, can&apos;t do server side rendering</li>
                <li>Next js: Good for Search Engine Optimization, built on React,<br/>
                  can do server side rendering and static site regeneration</li>
                <li>TailwindCSS: </li>
              </ul>
              <ul>
                Back end
                <li>Node js</li>
                <li>Express js</li>
                <li>Django</li>
              </ul>
              <ul>
                Databases
                <li>MongoDB</li>
                <li>Firebase/firestore</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-center text-2xl font-bold">Experiences</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-center text-2xl font-bold">Educations Background</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-center text-2xl font-bold">Achievements</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-center text-2xl font-bold">Contact Information</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
