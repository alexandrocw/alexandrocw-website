import Link from "next/link";

const Header = () => {
  return (
    <header className="flex border-b-2 py-2 bg-black text-white">
      <Link href="/"><a className="uppercase m-auto text-xl"><span className="text-red-500">Alex</span>andro C.W.</a></Link>
      <nav className="flex m-auto justify-center text-xl space-x-2">
        <Link href="/"><a className="p-2 shadow-sm hover:text-red-500">Home</a></Link>
        <Link href="/about"><a className="p-2 shadow-sm hover:text-red-500">About Me</a></Link>
        <Link href="/project"><a className="p-2 shadow-sm hover:text-red-500">Projects</a></Link>
        <Link href="/blog"><a className="p-2 shadow-sm hover:text-red-500">Blog</a></Link>
        <Link href="/help-and-support"><a className="p-2 shadow-sm hover:text-red-500">Help &amp; Support</a></Link>
      </nav>
    </header>
  )
}

export default Header;
