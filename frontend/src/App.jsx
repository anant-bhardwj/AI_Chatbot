import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/login/Login.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-4 h-screen flex items-center justify-center">
        <Login />
      </div>
    </>
  );
}

export default App;
