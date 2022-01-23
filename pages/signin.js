import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        setError(true);
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = document.getElementById("form");
    try{
      if (form.checkValidity()) {
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      window.alert(error);
    }
    console.log(email, password, error);
  }

  return (
    <>
      <Head>
        <title>Alex&apos;s Personal Website | Sign In</title>
        <meta name="keywords" content="sign-in"/>
      </Head>

      <div className="flex flex-col flex-grow items-center justify-center">
        <form id="form" className="flex flex-col items-center bg-purple-200 rounded-lg border-4 border-red-300 w-1/3 h-3/5 px-4 space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold uppercase mt-4 text-2xl">Login</h1>
          <p className="text-center">Don&apos;t have an account? <Link href="/signup"><a className="text-blue-500 hover:text-blue-700 font-bold">Sign Up</a></Link></p>
          <div className="flex flex-col space-y-4 w-full">
            <div className="w-full">
              <label htmlFor="email" className="sr-only">Email</label>
              <div>
                <input
                  id="email"
                  name="email"
                  className="w-full border-2 border-black rounded-lg p-2"
                  placeholder="Email address"
                  type="email"
                  onChange={handleChange}
                  value={email}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="password" className="sr-only">Password</label>
              <div>
                <input
                  id="password"
                  name="password"
                  className="w-full border-2 border-black rounded-lg p-2"
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                  value={password}
                  required
                />
              </div>
            </div>
          </div>
          <Link href="/forgot-password"><a className="w-full text-right text-blue-500 hover:text-blue-700">Forgot your password?</a></Link>
          <button type="submit" className="w-1/2 p-2 text-xl uppercase border-2 border-black rounded-lg text-white bg-purple-500 hover:bg-purple-700">Login</button>
        </form>
      </div>
    </>
  )
}

export default SignIn;
