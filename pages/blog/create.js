import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BlogCreate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      console.log(session);
      if (!session || (session.user.role !== "lead_admin")) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    })
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p className="text-white text-7xl">HALO</p>
    </div>
  )
}

export default BlogCreate;
