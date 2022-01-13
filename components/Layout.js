import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar/>
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
