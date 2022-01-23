import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Alex&apos;s Personal Website | About</title>
        <meta name="keywords" content="about-me"/>
      </Head>
      
      <div className="flex flex-col flex-grow text-white">
        <div className="flex m-auto">
          <div className="m-auto">
            <Image src="/Self_Potrait.png" alt="Photo of Alex" width={300} height={400} />
          </div>
          <div className="m-auto">
            <h1>I&apos;m Alex</h1>
            <h2>Full stack web developer</h2>
            <h3>
              I&apos;m an Electrical Engineering Undergraduate Student. I have big enthusiast towards<br/>
              technology, web development, internet of things, and data science. I&apos;m very easy going<br/>
              and can be contacted easily. Honesty and high-self esteem are my principles.
            </h3>
            <h3>
              Technology I use:
              <ul>
                Front end
                <li>React js: Robust, easy to use, has a growing community. Lack speed compared than next js, can&apos;t do server side rendering</li>
                <li>Next js: Good for Search Engine Optimization, built on React, can do server side rendering and static site regeneration</li>
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
            </h3>
            <h3>Download Resume</h3>
          </div>
        </div>
        <div>
          <h3>Address</h3>
          <h3>Email</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </>
  )
}

export default About;
