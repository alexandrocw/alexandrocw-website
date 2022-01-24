import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/solid";

const Header = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className="flex py-2 bg-black bg-opacity-50 text-white">
      <Link href="/"><a className="uppercase m-auto text-xl"><span className="text-purple-500">Alex</span>andro C.W.</a></Link>
      <nav className="flex m-auto justify-center text-xl space-x-2">
        <Link href="/"><a className="p-2 shadow-sm hover:text-purple-500">Home</a></Link>
        <Link href="/about"><a className="p-2 shadow-sm hover:text-purple-500">About Me</a></Link>
        <Link href="/project"><a className="p-2 shadow-sm hover:text-purple-500">Projects</a></Link>
        <Link href="/blog"><a className="p-2 shadow-sm hover:text-purple-500">Blog</a></Link>
        <Link href="/help-and-support"><a className="p-2 shadow-sm hover:text-purple-500">Help &amp; Support</a></Link>
        {!session && !loading && (
          <div className="flex justify-center items-center space-x-2">
            <Link href="/signin"><a className="p-2 shadow-sm hover:text-purple-500">Sign In</a></Link>
            <Link href="/signup"><a className="p-2 border-2 rounded-lg border-white bg-purple-500 shadow-sm hover:bg-purple-700">Sign Up</a></Link>
          </div>
        )}
        {session && (
          <div className="flex justify-center items-center space-x-2">
            <Link href="/profile">
              <a className="flex p-2 shadow-sm hover:text-purple-500">
                <UserCircleIcon className="w-10 h-8"/>
                <div className="flex flex-col space-y-0">
                  <p className="text-xs">Logged in as:</p>
                  <div className="flex">
                    <p className="text-xs">{ session.user.username }</p>
                  </div>
                </div>
              </a>
            </Link>
            <button type="button" onClick={signOut} className="p-2 border-2 rounded-lg border-white bg-purple-500 shadow-sm hover:bg-purple-700">Log Out</button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header;
