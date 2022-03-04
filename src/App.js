import logo from "./logo.svg";
import "./App.css";
import PostsPages from "./pages/PostsPages";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPages />} />
      </Routes>
    </div>
  );
}

export default App;
