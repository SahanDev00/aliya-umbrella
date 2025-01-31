import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="bg-third/50">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
