import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { logo } from "./assets";
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav className="flex items-center justify-between overflow-hidden border-b border-b-[#3a3a3a] bg-[#1a1a1a] px-4 py-4 text-light sm:px-8">
          <Link className="flex select-none items-center gap-4" to="/">
            <img src={logo} alt="logo" className="h-10 w-10 rounded-lg" />
            <h2 className="text-2xl font-bold text-light">Z-AI</h2>
          </Link>

          <Link to="/create-post" className="rounded-md bg-primary px-4 py-2 font-inter font-medium text-light">
            Create
          </Link>
        </nav>
      </header>
      <main className="min-h-[calc(100vh-73px)] w-full bg-dark px-4 py-8 text-light sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
