import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Header/>
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
