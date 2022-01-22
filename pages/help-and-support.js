import { useState } from "react";
import Head from "next/head";

const HelpSupport = () => {
  const [emailSubject, setEmailSubject] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [emailContent, setEmailContent] = useState("");

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();


  }

  return (
    <>
      <Head>
        <title>Alex's Personal Website | Help &amp; Support</title>
        <meta name="keywords" content="help-and-support"/>
      </Head>
      
      <div className="flex flex-col flex-grow items-center justify-center">
        <form className="bg-white rounded-lg border-4 border-red-300 w-1/3 h-2/3" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold uppercase mt-4 text-2xl">Email Form</h1>
        </form>
      </div>
    </>
  )
}

export default HelpSupport;
