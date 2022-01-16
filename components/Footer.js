import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 text-lg">
      <div className="flex space-2">
        <p className="font-bold"><span className="text-purple-500">ALEX</span>ANDRO C.W.</p>
        <div className="flex flex-col m-auto">
          <Link href="/"><a className="hover:text-purple-400">Home</a></Link>
          <Link href="/about"><a className="hover:text-purple-400">About Me</a></Link>
          <Link href="/project"><a className="hover:text-purple-400">Projects</a></Link>
          <Link href="/blog"><a className="hover:text-purple-400">Blog</a></Link>
          <Link href="/help-and-support"><a className="hover:text-purple-400">Help &amp; Support</a></Link>
        </div>
        <div className="flex flex-col mx-auto">
          <Link href="https://www.linkedin.com/in/alexandrocw/"><a className="hover:text-purple-400">LinkedIn</a></Link>
          <Link href="https://github.com/alexandrocw"><a className="hover:text-purple-400">Github</a></Link>
          <Link href=""><a className="hover:text-purple-400">Email:alexandrowijaya.aw2@gmail.com</a></Link>
        </div>
      </div>
      <p className="text-center mt-4">&copy; Copyright 2022 Alexandro C.W. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
