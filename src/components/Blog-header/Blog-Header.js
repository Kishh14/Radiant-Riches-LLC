import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import "./Blog-Header.scss";

const BlogHeader = () => {
  return (
    <>
      <h1 className="blog-heading">Best Website builders in the US</h1>
      <section className="blog-meta-data">
        <div className="meta-data">
          <p>
            <CiCircleCheck />
            Last Updated - February 22, 2020
          </p>
          <p>
            <CiCircleInfo />
            Advertising Disclosure
          </p>
        </div>
        <div className="sortBy-container">
          <select>
            <option value={"Top Relevant"}>Top Relevant</option>
            <option value={"Top Rated"}>Top Rated</option>
          </select>
        </div>
      </section>
      <section className="blog-nav-links">
        <a href="/">Tools</a>
        <a href="/">AWS Builder</a>
        <a href="/">Start Build</a>
        <a href="/">Build Supplies</a>
        <a href="/">Tooling</a>
        <a href="/">Blue Hosting</a>
      </section>
      <section className="blog-breadcrumb">
        <a href="/">
          Home <GrFormNext />
        </a>
        <a href="/">
          Hosting for all <GrFormNext />
        </a>
        <a href="/">
          Hosting <GrFormNext />
        </a>
        <a href="/">
          Hosting 6 <GrFormNext />
        </a>
        <a href="/">
          Hosting 5 <GrFormNext />
        </a>
      </section>
    </>
  );
};

export default BlogHeader;
