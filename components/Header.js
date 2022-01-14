import Link from "next/link";

const Header = () => {
  return (
    <header className="flex border-2">
      <Link href="/"><a className="uppercase m-auto text-xl">Alexandro C.W.</a></Link>
      <nav className="flex m-auto justify-center text-xl">
        <Link href="/"><a className="p-2 shadow-sm hover:bg-gray-500 hover:text-gray-50">Home</a></Link>
        <Link href="/about"><a className="p-2 shadow-sm hover:bg-gray-500 hover:text-gray-50">About Me</a></Link>
        <Link href="/project"><a className="p-2 shadow-sm hover:bg-gray-500 hover:text-gray-50">Projects</a></Link>
        <Link href="/blog"><a className="p-2 shadow-sm hover:bg-gray-500 hover:text-gray-50">Blog</a></Link>
        <Link href="/help-and-support"><a className="p-2 shadow-sm hover:bg-gray-500 hover:text-gray-50">Help &amp; Support</a></Link>
      </nav>
    </header>
  )
}

export default Header;
