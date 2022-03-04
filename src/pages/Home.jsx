import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to={"/"} className="App-link">
            home
          </Link>
          <Link to={"/posts"} className="App-link">
            Posts
          </Link>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn React & React Query</p>
        <span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>{" "}
          |{" "}
          <a
            className="App-link"
            href="https://react-query.tanstack.com/quick-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Query
          </a>
        </span>
      </header>
    </div>
  );
};

export default Home;
