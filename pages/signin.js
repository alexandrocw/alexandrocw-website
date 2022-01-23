import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { emailRegex } from "../lib/regex";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false, status: "" });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    })
  }, [router]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        console.error("error");
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      // Check email is valid
      if (email && emailRegex.test(email)) {
        setError((prev) => ({
          ...prev,
          email: false
        }))
      } else {
        setError((prev) => ({
          ...prev,
          email: true
        }))
      }
      // Check password 8-16 characters
      if (password && password.length >= 8 && password.length <= 16) {
        setError((prev) => ({
          ...prev,
          password: false
        }))
      } else {
        setError((prev) => ({
          ...prev,
          password: true
        }))
      }
      if (Object.values(error).every((err) => (typeof err === "boolean" && !err) || (typeof err === "string"))) {
        const result = await signIn("credentials", {
          redirect: false,
          email: email,
          password: password
        })
        if (result.error) {
          setError((prev) => ({
            ...prev,
            status: result.error
          }))
        }
      }
    } catch (error) {
      window.alert(error);
    }
    console.log(email, password, error);
  }

  if (isLoading) {
    return <p>Loading...</p>
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
              {error.email
              ? <p className="text-red-700">Email not valid</p>
              : null}
            </div>
            <div className="w-full">
              <label htmlFor="password" className="sr-only">Password</label>
              <div>
                <input
                  id="password"
                  name="password"
                  className="w-full border-2 border-black rounded-lg p-2"
                  placeholder="Password (8-16 characters, number, symbols)"
                  type="password"
                  onChange={handleChange}
                  value={password}
                  required
                />
              </div>
              {error.password
              ? <p className="text-red-700">Password not valid</p>
              : null}
              {error.status
              ? <p className="text-red-700">{ error.status }</p>
              : null}
            </div>
          </div>
          <Link href="/forgot-password"><a className="w-full text-right text-blue-500 hover:text-blue-700">Forgot your password?</a></Link>
          <button onClick={handleSubmit} className="w-1/2 p-2 text-xl uppercase border-2 border-black rounded-lg text-white bg-purple-500 hover:bg-purple-700">Login</button>
        </form>
      </div>
    </>
  )
}

export default SignIn;
