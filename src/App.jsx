import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./components/Cart"
import Pizza from "./components/Pizza"

function App() {
  return (
    <>
      <Navbar />
      {/*<Home /> */}
      {/*<Register /> */}
      {/*<Login /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App
