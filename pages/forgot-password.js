import Head from "next/head";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { emailRegex } from "../lib/regex";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ email: false, status: "" });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
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
    } catch (error) {
      window.alert(error);
    }
    console.log(email, error);
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Alex&apos;s Personal Website | Forgot Password</title>
        <meta name="keywords" content="forgot-password"/>
      </Head>

      <div className="flex flex-col flex-grow items-center justify-center">
        <form id="form" className="flex flex-col items-center bg-purple-200 rounded-lg border-4 border-red-300 w-1/3 h-2/4 px-4 space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold uppercase mt-4 text-2xl">Forgot Password</h1>
          <p className="text-center">Enter your email address and we will send you notification on how to reset your password.</p>
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
              ? <p className="text-red-700">Enter valid email address</p>
              : null}
              {error.status
              ? <p className="text-red-700">{ error.status }</p>
              : null}
            </div>
          </div>
          <button onClick={handleSubmit} className="w-1/2 p-2 text-xl uppercase border-2 border-black rounded-lg text-white bg-purple-500 hover:bg-purple-700">Send Email</button>
        </form>
      </div>
    </>
  )
}

export default Forgot;
