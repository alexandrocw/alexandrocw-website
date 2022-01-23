import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "re-password":
        setRePassword(e.target.value);
        break;
      case "show-password":
        setShowPassword(!showPassword);
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
    console.log(email, password, rePassword, error);
  }

  return (
    <>
      <Head>
        <title>Alex&apos;s Personal Website | Sign Up</title>
        <meta name="keywords" content="sign-up"/>
      </Head>

      <div className="flex flex-col flex-grow items-center justify-center">
        <form id="form" className="flex flex-col items-center bg-purple-200 rounded-lg border-4 border-red-300 w-1/3 h-3/5 px-4 space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold uppercase mt-4 text-2xl">Sign Up</h1>
          <p className="text-center">Already have an account? <Link href="/signin"><a className="text-blue-500 hover:text-blue-700 font-bold">Sign In</a></Link></p>
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
                  type={showPassword ? "input" : "password"}
                  onChange={handleChange}
                  value={password}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="re-password" className="sr-only">Re Enter Password</label>
              <div>
                <input
                  id="re-password"
                  name="re-password"
                  className="w-full border-2 border-black rounded-lg p-2"
                  placeholder="Re Enter Password"
                  type={showPassword ? "input" : "password"}
                  onChange={handleChange}
                  value={rePassword}
                  required
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <input
              id="show-password"
              name="show-password"
              className="mr-2"
              type="checkbox"
              onChange={handleChange}
              value={showPassword}
            />
            <span>Show Password</span>
          </div>
          <button type="submit" className="w-1/2 p-2 text-xl uppercase border-2 border-black rounded-lg text-white bg-purple-500 hover:bg-purple-700">Create Account</button>
        </form>
      </div>
    </>
  )
}

export default SignUp;
