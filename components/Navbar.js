import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center text-xl border-2">
      <Link href="/"><a className="p-2 border-2 shadow-sm rounded-md hover:bg-gray-500 hover:text-gray-50">Home</a></Link>
      <Link href="/about"><a className="p-2 border-2 shadow-sm rounded-md hover:bg-gray-500 hover:text-gray-50">About Me</a></Link>
      <Link href="/projects"><a className="p-2 border-2 shadow-sm rounded-md hover:bg-gray-500 hover:text-gray-50">Projects</a></Link>
      <Link href="/blog"><a className="p-2 border-2 shadow-sm rounded-md hover:bg-gray-500 hover:text-gray-50">Blog</a></Link>
      <Link href="/help-and-support"><a className="p-2 border-2 shadow-sm rounded-md hover:bg-gray-500 hover:text-gray-50">Help &amp; Support</a></Link>
    </nav>
  )
}

export default Navbar;
