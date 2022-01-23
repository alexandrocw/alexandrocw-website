import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
const { emailRegex } = require("../lib/regex");

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ firstName: false, lastName: false, username: false, email: false, password: false, rePassword: false, status: "" });
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
      case "first-name":
        setFirstName(e.target.value);
        break;
      case "last-name":
        setLastName(e.target.value);
        break;
      case "username":
        setUsername(e.target.value);
        break;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      // Check first name
      if (firstName) {
        setError((prev) => ({
          ...prev,
          firstName: false
        }))
      } else {
        setError((prev) => ({
          ...prev,
          firstName: true
        }))
      }
      // Check last name
      if (lastName) {
        setError((prev) => ({
          ...prev,
          lastName: false
        }))
      } else {
        setError((prev) => ({
          ...prev,
          lastName: true
        }))
      }
      // Check username
      if (username) {
        setError((prev) => ({
          ...prev,
          username: false
        }))
      } else {
        setError((prev) => ({
          ...prev,
          username: true
        }))
      }
      // Check if email valid
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
      // Check password
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
      // Check if rePassword match
      if (password === rePassword) {
        setError((prev) => ({
          ...prev,
          rePassword: false
        }))
      } else {
        setError((prev) => ({
          ...prev,
          rePassword: true
        }))
      }
      // Check if all values true and proceed to API
      if (Object.values(error).every((err) => (typeof err === "boolean" && !err) || (typeof err === "string"))) {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            username: username,
            rePassword: rePassword
          })
        })
        const data = await res.json();
        console.log(data);
        if (data.error) {
          setError((prev) => ({
            ...prev,
            status: data.message
          }))
        }
      }
    } catch (error) {
      window.alert(error);
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Alex&apos;s Personal Website | Sign Up</title>
        <meta name="keywords" content="sign-up"/>
      </Head>

      <div className="flex flex-col flex-grow items-center justify-center">
        <form id="form" className="flex flex-col items-center bg-purple-200 rounded-lg border-4 border-red-300 w-2/4 px-4 space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold uppercase mt-4 text-2xl">Sign Up</h1>
          <p className="text-center">Already have an account? <Link href="/signin"><a className="text-blue-500 hover:text-blue-700 font-bold">Sign In</a></Link></p>
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex">
              <div className="w-1/2">
                <label htmlFor="first-name" className="sr-only">First Name</label>
                <div>
                  <input
                    id="first-name"
                    name="first-name"
                    className={"w-full border-2 rounded-lg p-2 " + (error.firstName ? "border-red-700" : "border-black")}
                    placeholder="First Name"
                    type="text"
                    onChange={handleChange}
                    value={firstName}
                    required
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label htmlFor="last-name" className="sr-only">Last Name</label>
                <div>
                  <input
                    id="last-name"
                    name="last-name"
                    className={"w-full border-2 rounded-lg p-2 " + (error.lastName ? "border-red-700" : "border-black")}
                    placeholder="Last Name"
                    type="text"
                    onChange={handleChange}
                    value={lastName}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="username" className="sr-only">Username</label>
              <div>
                <input
                  id="username"
                  name="username"
                  className={"w-full border-2 rounded-lg p-2 " + (error.lastName ? "border-red-700" : "border-black")}
                  placeholder="Username"
                  type="text"
                  onChange={handleChange}
                  value={username}
                  required
                />
              </div>
            </div>
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
                  type={showPassword ? "input" : "password"}
                  onChange={handleChange}
                  value={password}
                  required
                />
              </div>
              {error.password
              ? <p className="text-red-700">Password not valid</p>
              : null}
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
              {error.rePassword
              ? <p className="text-red-700">Password not Match</p>
              : null}
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
          {error.status
          ? <p className="text-red-700">{ error.status }</p>
          : null}
          <button onClick={handleSubmit} className="w-1/2 p-2 text-xl uppercase border-2 border-black rounded-lg text-white bg-purple-500 hover:bg-purple-700">Create Account</button>
        </form>
      </div>
    </>
  )
}

export default SignUp;
