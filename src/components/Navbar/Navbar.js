import "./Navbar.scss";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <header className="App-header">
        <div className="searchBar">
          <CiSearch className="icon" />
          <input
            type="text"
            class="form-control"
            name="search-input"
            aria-describedby="helpId"
          />
        </div>

        <div className="nav-links">
          <a href="/">Categories</a>
          <a href="/">Website Builders</a>
          <a href="/">Today's Deals</a>
        </div>
      </header>
    </>
  );
};

export default Header;
